@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{ asset('css/main.css') }}">
<script src="https://kit.fontawesome.com/ef69927139.js" crossorigin="anonymous"></script>
<style>
    .playlist::before {
        content: "Drag and drop audio files here";
        display: block;
        text-align: center;
        padding: 20px;
        font-weight: bold;
        color: #000;
    }

    .playlist.has-content::before {
        display: none;
    }
</style>
<meta name="csrf-token" content="{{ csrf_token() }}">
</head>

<body>

    <main class="container-fluid">
        <div class="wrapper">

            <nav class="navbar navbar-expand-lg navbar-light bg-light mt-2 d-flex justify-content-center">
                <div id="top-bar" class="playlist-top-bar">
                    <div class="btn-group">
                        <button type="button" class="btn-pause btn btn-outline-warning" title="Pause">
                            <i class="fas fa-pause"></i>
                        </button>
                        <button type="button" class="btn-play btn btn-outline-success" title="Play">
                            <i class="fas fa-play"></i>
                        </button>
                        <button type="button" class="btn-stop btn btn-outline-danger" title="Stop">
                            <i class="fas fa-stop"></i>
                        </button>
                        <button type="button" class="btn-rewind btn btn-outline-success" title="Rewind">
                            <i class="fas fa-fast-backward"></i>
                        </button>
                        <button type="button" class="btn-fast-forward btn btn-outline-success" title="Fast forward">
                            <i class="fas fa-fast-forward"></i>
                        </button>
                        <button type="button" class="btn-record btn btn-outline-primary disabled" title="Record">
                            <i class="fas fa-microphone"></i>
                        </button>
                    </div>

                    <div class="btn-group">
                        <button type="button" title="Zoom in" class="btn-zoom-in btn btn-outline-dark">
                            <i class="fas fa-search-plus"></i>
                        </button>
                        <button type="button" title="Zoom out" class="btn-zoom-out btn btn-outline-dark">
                            <i class="fas fa-search-minus"></i>
                        </button>
                    </div>

                    <div class="btn-group btn-playlist-state-group">
                        <button type="button" class="btn-cursor btn btn-outline-dark active" title="Select cursor">
                            <i class="fas fa-headphones"></i>
                        </button>
                        <button type="button" class="btn-select btn btn-outline-dark" title="Select audio region">
                            <i class="fas fa-italic"></i>
                        </button>
                        <button type="button" class="btn-shift btn btn-outline-dark" title="Shift audio in time">
                            <i class="fas fa-arrows-alt-h"></i>
                        </button>
                        <button type="button" class="btn-fadein btn btn-outline-dark" title="Set audio fade in">
                            <i class="fas fa-long-arrow-alt-left"></i>
                        </button>
                        <button type="button" class="btn-fadeout btn btn-outline-dark" title="Set audio fade out">
                            <i class="fas fa-long-arrow-alt-right"></i>
                        </button>
                    </div>

                    <div class="btn-group btn-fade-state-group">
                        <button type="button" class="btn btn-sm btn-outline-dark btn-exponential">exponential</button>
                        <button type="button" class="btn btn-sm btn-outline-dark btn-scurve">s-curve</button>
                    </div>

                    <!-- loop -->
                    <div class="btn-group btn-select-state-group">
                        <button type="button" class="btn-loop btn btn-outline-success disabled" title="Loop a selected segment of audio">
                            <i class="fas fa-redo-alt"></i>
                        </button>
                        <button type="button" title="Keep only the selected audio region for a track" class="btn-trim-audio btn btn-outline-primary disabled">
                            Trim
                        </button>
                    </div>
                    <div class="btn-group">
                        <button type="button" title="Clear the playlist's tracks" class="btn btn-clear btn-outline-danger">
                            Clear
                        </button>
                    </div>
                    <div class="btn-group">
                        <button type="button" title="Download the current work as Wav file" class="btn btn-download btn-outline-primary">
                            <i class="fas fa-download"></i>
                        </button>
                    </div>
                    <div class="btn-group">
                        <input type="range" min="0" max="100" value="100" class="form-range master-gain form-control mx-3" id="master-gain" />
                    </div>

                    <div class="btn-group">
                        <span class="audio-pos mx-3" id="audiopos" aria-label="Audio position">00:00:00.0</span>
                    </div>

                </div>
            </nav>

           <form id="playlist" class="track-drop" method="POST" action="{{ route('upload.audio', ['id' => $project->id]) }}" enctype="multipart/form-data">
                @csrf
                <input type="file" id="audioFilesInput" name="audioFiles[]" multiple>
                <button type="submit">Upload</button>
            </form>




            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container justify-content-end">
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <label for="audio_start">Start of audio selection</label>
                            <input type="text" class="audio-start form-control mr-sm-2" id="audio_start">
                        </div>
                        <div class="col-md-4">
                            <label for="audio_end">End of audio selection</label>
                            <input type="text" class="audio-end form-control mr-sm-2" id="audio_end">
                        </div>
                        <div class="col-md-4">
                            <input class="form-check-input automatic-scroll" type="checkbox" id="automatic_scroll">
                            <label class="form-check-label" for="automatic_scroll">Automatic Scroll</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </main>
    <div id="playlist-container"></div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="{{ asset('js/audioscript.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/script.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/emitter.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <script>
        document.getElementById('playlist').addEventListener('submit', function(event) {
            event.preventDefault();


            const formData = new FormData(this);

            const uploadRoute = '{{ route('upload.audio', ['id' => $project->id]) }}';

            fetch(uploadRoute, {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log('Audio files uploaded successfully:', data);

                const audioFilesData = data.audioFiles;

        
                updateAudioFiles(audioFilesData);
            })
            .catch(error => {
                console.error('Error uploading audio files:', error);
            });
        });


        function updateAudioFiles(updatedAudioFiles) {
            const projectId = '{{ $project->id }}';


            const options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                },
                body: JSON.stringify({
                    audioFiles: updatedAudioFiles
                })
            };

       
            const updateRoute = '/projects/' + projectId;

          
            fetch(updateRoute, options)
            .then(response => response.json())
            .then(data => {
                console.log('Project audio files updated successfully:', data);
            })
            .catch(error => {
                console.error('Error updating project audio files:', error);
            });
        }
    </script>


</body>

</html>
@endsection