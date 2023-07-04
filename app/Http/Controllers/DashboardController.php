<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\Project;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        // Retrieve the projects owned by the authenticated user
        $ownedProjects = $user->projects;

        // Retrieve the projects shared with the authenticated user
        $sharedProjects = $user->sharedProjects;

        // Merge the owned projects and shared projects into a single collection
        $projects = $ownedProjects->concat($sharedProjects);

        return view('dashboard', compact('projects'));
    }
}
