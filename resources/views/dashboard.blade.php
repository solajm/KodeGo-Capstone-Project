@extends('layouts.app')

@section('content')
<head>
    <style>
        .btn-fixed-size {
            width: 120px;
        }
        .card-deck {
            display: flex;
            flex-wrap: wrap;
            margin: -10px;
        }
        .card-deck .card {
            flex: 1 0 calc(33.33% - 20px); /* Adjust the width as needed */
            margin: 10px;
        }
    </style>
</head>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header d-flex align-items-center justify-content-center">
                    <h5>Welcome, {{ Auth::user()->firstname }} {{ Auth::user()->lastname }}!</h5>
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-9 d-flex justify-content-end">
                            <a href="{{ route('projects.create') }}" class="btn btn-primary btn-sm">Create Project</a>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    @if (session('success'))
                        <div class="alert alert-success" role="alert">
                            {{ session('success') }}
                        </div>
                    @endif
                    <h3 class="mb-4 display-3">Projects</h3>
                    <div class="card-deck">
                        @forelse ($projects as $project)
                            <div class="card mb-3">
                                <div class="card-body">
                                    <h5 class="card-title">
                                        <a href="{{ route('projects.show', $project->id) }}">{{ $project->name }}</a>
                                    </h5>
                                    <p class="card-text">Created: {{ $project->created_at->format('Y-m-d') }}</p>
                                    <div class="btn-group btn-group-justify">
                                        <a class="btn btn-primary btn-fixed-size" href="{{ route('projects.rename', $project->id) }}">Rename</a>
                                        <form action="{{ route('projects.duplicate', $project->id) }}" method="POST">
                                            @csrf
                                            <button class="btn btn-primary btn-fixed-size mx-3" type="submit">Duplicate</button>
                                        </form>
                                    </div>
                                    <div class="mt-3 d-flex align-items-center">
                                        <form action="{{ route('projects.share', $project->id) }}" method="POST">
                                            @csrf
                                            <input type="email" name="email" placeholder="Email" required>
                                            <button class="btn btn-primary" type="submit">Share</button>
                                        </form>
                                    </div>
                                    <div class="mt-3">
                                        <form action="{{ route('projects.delete', $project->id) }}" method="POST">
                                            @csrf
                                            @method('DELETE')
                                            <button class="btn btn-danger btn-fixed-size" type="submit">Delete</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        @empty
                            <p>No projects found.</p>
                        @endforelse
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
