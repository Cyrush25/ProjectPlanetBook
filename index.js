
  var video = document.getElementById("myVideo");
  video.addEventListener("canplaythrough", function() {
    this.play();
  }, false);
