@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Create a New Project</h1>

    <form action="{{ route('projects.create') }}" method="POST" enctype="multipart/form-data">
        @csrf

        <div class="form-group mt-5">
            <label for="name">Project Name</label>
            <input type="text" class="form-control" id="name" name="name" required>
        </div>

        <div class="form-group mt-3">
            <label for="audioFiles">Audio Files</label>
            <input type="file" class="form-control-file" id="audioFiles" name="audioFiles[]" accept="audio/mpeg, audio/wav" multiple>
        </div>

        <button type="submit" class="btn btn-primary mt-5">Create Project</button>
    </form>

</div>
@endsection
