@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>Rename Project</h1>

        <form action="{{ route('projects.updateName', $project->id) }}" method="POST">
            @csrf
            @method('PUT')

            <div class="form-group">
                <label for="name">New Project Name</label>
                <input type="text" class="form-control" id="name" name="name" value="{{ $project->name }}" required>
            </div>

            <button type="submit" class="btn btn-primary">Rename Project</button>
        </form>
    </div>
@endsection