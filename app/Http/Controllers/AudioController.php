<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use Illuminate\Support\Facades\Storage;

class AudioController extends Controller
{
    public function uploadAudio(Request $request, $id)
    {
        $request->validate([
            'audioFiles.*' => 'required|mimes:audio/mpeg,mpga,mp3,wav',
        ]);

        $project = Project::find($id);

        if (!$project) {
            return response()->json(['message' => 'Project not found'], 404);
        }

        if ($request->hasFile('audioFiles')) {
            $audioFiles = [];
            $projectFolderPath = 'audio/' . $id;

            foreach ($request->file('audioFiles') as $file) {
                $extension = $file->getClientOriginalExtension();
                $filename = uniqid() . '.' . $extension;

                $file->storeAs('public/' . $projectFolderPath, $filename);

                $audioFiles[] = 'storage/' . $projectFolderPath . '/' . $filename;
            }

            $existingAudioFiles = $project->audio_files;
            foreach ($existingAudioFiles as $existingAudioFile) {
            
                $existingAudioFile = str_replace('storage/', '', $existingAudioFile);
                Storage::delete($existingAudioFile);
            }


            $project->audio_files = $audioFiles;
            $project->save();

            return response()->json(['message' => 'Files uploaded successfully', 'audioFiles' => $audioFiles]);
        }

        return response()->json(['message' => 'Failed to upload files'], 500);
    }
}
