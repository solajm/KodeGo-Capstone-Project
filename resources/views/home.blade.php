@extends('layouts.app')

@section('content')
<div class="row justify-content-center">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">{{ __('Dashboard') }}</div>

            <div class="card-body">
                @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
                @endif

                <p>Welcome, {{ Auth::user()->firstname }} {{ Auth::user()->lastname }}!</p>

                <h5>Your Projects:</h5>

                @if ($projects->isEmpty())
                <p>You don't have any projects yet. <a href="{{ route('projects.create') }}">Create a project</a> to get started.</p>
                @else
                <div class="row">
                    @foreach ($projects as $project)
                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{{ $project->name }}</h5>
                                <p class="card-text">{{ $project->description }}</p>
                                <a href="{{ route('projects.show', $project->id) }}" class="btn btn-primary">View Project</a>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
                @endif
            </div>
        </div>
    </div>
</div>
@endsection
