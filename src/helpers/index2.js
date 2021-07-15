export default function index() {
  // alert('Hey')
  // Set the name of the hidden property and the change event for visibility
  var hidden, visibilityChange;
  if (typeof document.hidden !== "undefined") {
    // Opera 12.10 and Firefox 18 and later support
    hidden = "hidden";
    visibilityChange = "visibilitychange";
  } else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
  }

  // Warn if the browser doesn't support addEventListener or the Page Visibility API
  if (
    typeof document.addEventListener === "undefined" ||
    hidden === undefined
  ) {
    console.log(
      "This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API."
    );
  } else {
    // Handle page visibility change
    document.addEventListener(visibilityChange, handleVisibilityChange, false);
    setInterval(checkPageFocus, 300);
    setInterval(checkZoom, 300);

    // When the video pauses, set the title.
    // This shows the paused
    /*   videoElement.addEventListener("pause", function(){
    document.title = 'Paused';
  }, false);
    
  // When the video plays, set the title.
  videoElement.addEventListener("play", function(){
    document.title = 'Playing'; 
  }, false); */
  }
}

// var videoElement = document.getElementById("videoElement");

// If the page is hidden, pause the video;
// if the page is shown, play the video
export function handleVisibilityChange(hidden) {
  if (document[hidden]) {
    alert("You moved away!!! opened a new tab");
    // videoElem  ent.pause();
  } else {
    // videoElement.play();
  }
}

export function checkPageFocus() {
  // let body = document.querySelector('body');
  // let log = document.getElementById('log');

  if (document.hasFocus()) {
    // log.textContent = 'This document has the focus.';
    // body.style.background = '#fff';
  } else {
    // log.textContent = 'This document does not have the focus.';
    // body.style.background = '#ccc';
    alert("You moved away!!!: changed Focus");
  }
}

export function checkZoom() {
  const isAtMaxWidth = window.screen.availWidth - window.innerWidth === 0;
  if (isAtMaxWidth) return;
  alert("You minimized the window");
}