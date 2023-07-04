<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
        ]);

        $project = new Project();
        $project->name = $request->input('name');
        $project->user_id = Auth::id();
        $project->save();

        return redirect()->route('dashboard')->with('success', 'Project created successfully.');
    }

    public function duplicate(Request $request, $id)
    {
        $project = Project::findOrFail($id);

        $newProject = $project->replicate();
        $newProject->name .= ' (Copy)';
        $newProject->user_id = Auth::id();
        $newProject->save();

        return redirect()->route('dashboard')->with('success', 'Project duplicated successfully.');
    }

    public function delete(Request $request, $id)
    {
        $project = Project::findOrFail($id);

        $project->delete();

        return redirect()->route('dashboard')->with('success', 'Project deleted successfully.');
    }

    public function share(Request $request, $id)
    {
        $request->validate([
            'email' => 'required|email|exists:users,email',
        ]);

        $project = Project::findOrFail($id);
        $user = User::where('email', $request->input('email'))->first();

        $project->collaborators()->attach($user);

        return redirect()->route('dashboard')->with('success', 'Project shared successfully.');
    }

    public function showCreateForm()
    {
        return view('create_project');
    }

    public function rename(Request $request, $id)
    {
        $project = Project::findOrFail($id);

        return view('rename_project', compact('project'));
    }

    public function updateName(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|max:255',
        ]);

        $project = Project::findOrFail($id);
        $project->name = $request->input('name');
        $project->save();

        return redirect()->route('dashboard')->with('success', 'Project name updated successfully.');
    }

    public function show($id)
    {
        $project = Project::findOrFail($id);

        $audioFiles = $project->audioFiles;

        return view('project', compact('project', 'audioFiles'));
    }

    private function uploadAudioFile($file)
    {
        $filename = $file->getClientOriginalName();
        $file->storeAs('public/audio', $filename);
        return 'storage/audio/' . $filename;
    }

    public function addAudio(Request $request, $id)
    {
        $request->validate([
            'audioFiles.*' => 'required|mimes:audio/mpeg,audio/wav'
        ]);
    
        $project = Project::findOrFail($id);
    
        if ($request->hasFile('audioFiles')) {
            $audioFiles = [];
    
            foreach ($request->file('audioFiles') as $file) {
                $filePath = $this->uploadAudioFile($file);
                $audioFile = $project->audioFiles()->create([
                    'filename' => $filePath
                ]);
    
                $audioFiles[] = $audioFile->id;
            }
    
            $project->audio_files()->sync($audioFiles);
    
            return response()->json(['message' => 'Audio files uploaded successfully']);
        }
    
        return response()->json(['message' => 'Failed to upload audio files'], 500);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'audioFiles.*' => 'required|mimes:audio/mpeg,audio/wav|max:100000',
        ]);

        $project = new Project();
        $project->name = $request->input('name');
        $project->user_id = Auth::id();
        $project->save();

        if ($request->hasFile('audioFiles')) {
            $audioFiles = [];

            foreach ($request->file('audioFiles') as $file) {
                $filePath = $this->uploadAudioFile($file);
                $audioFiles[] = $filePath;
            }

            $project->audio_files = $audioFiles;
            $project->save();
        }

        return redirect()->route('dashboard')->with('success', 'Project created successfully.');
    }
}
