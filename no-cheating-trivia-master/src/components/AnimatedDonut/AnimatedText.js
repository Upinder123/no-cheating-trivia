import React from "react";
import { useState } from "react";
import { useEffect } from "react";

// animateValue("value", 100, 25, 5000);

export default function AnimatedText({ end, duration }) {
  const [currrentVal, setCurrentVal] = useState(0);

  useEffect(() => {
    // animateValue("incr-num", 0, 80, 2500);
    animateValue(/* "incr-num",  */0, end, duration);
  }, [duration, end]);

  function animateValue(/* id, */ start, end, duration) {
    // assumes integer values for start and end

    // var obj = document.getElementById(id);
    var range = end - start;
    // no timer shorter than 50ms (not really visible any way)
    var minTimer = 50;
    // calc step time to show all interediate values
    var stepTime = Math.abs(Math.floor(duration / range));

    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);

    // get current time and calculate desired end time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;

    function run() {
      var now = new Date().getTime();
      var remaining = Math.max((endTime - now) / duration, 0);
      var value = Math.round(end - remaining * range);
      setCurrentVal(value);
      // obj.innerHTML = value;
      if (value === end) {
        clearInterval(timer);
      }
    }

    timer = setInterval(run, stepTime);
    run();
  }

  return (
    <>
      {currrentVal}
    </>
  );
}
