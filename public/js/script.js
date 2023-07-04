var userMediaStream;
var playlist;
var constraints = { audio: true };

navigator.getUserMedia = (navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia);

function gotStream(stream) {
  userMediaStream = stream;
  playlist.initRecorder(userMediaStream);
  $(".btn-record").removeClass("disabled");
}

function logError(err) {
  console.error(err);
}

playlist = WaveformPlaylist.init({
  samplesPerPixel: 3000,
  waveHeight: 100,
  container: document.getElementById("playlist"),
  state: 'cursor',
  colors: {
    waveOutlineColor: '#005BBB',
    timeColor: 'grey',
    fadeColor: 'black'
  },
  timescale: true,
  controls: {
    show: true,
    width: 200 
  },
  seekStyle: 'line',
  zoomLevels: [500, 1000, 3000, 5000]
});

playlist.initExporter();

if (navigator.mediaDevices) {
  navigator.mediaDevices.getUserMedia(constraints)
    .then(gotStream)
    .catch(logError);
} else if (navigator.getUserMedia && 'MediaRecorder' in window) {
  navigator.getUserMedia(
    constraints,
    gotStream,
    logError
  );
}

function loadPlaylistData() {

  fetch("/projects/{{ $project->id }}")
    .then(response => response.json())
    .then(data => {

      var audioData = data.audio_files;


      var playlistData = audioData.map(audio => ({
        "src": "media/audio/" + audio.filename,
        "name": audio.name
      }));

      console.log(playlistData);

      playlist.load(playlistData);
    })
    .catch(error => {
      console.error(error);
    });
}

window.addEventListener('load', loadPlaylistData);
