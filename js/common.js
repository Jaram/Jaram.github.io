function vidshow(){
  $('#mainvid')[0].play();
  $('#mainvid').css("display", "block");
  $('#close').css("display", "block");
}

function vidclose(){
  $('#mainvid')[0].pause();
  $('#mainvid').css("display", "none");
  $('#close').css("display", "none");
}