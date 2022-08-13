function buttonNext0Clicked() {
  document.getElementById('start').style.display = "none";
  document.getElementById('buttonNext0').style.display = "none";
  document.getElementById('a1').style.display = "block";
  document.getElementById('a1').play();
}
function a1Finished() {
  document.getElementById('a1').style.display = "none";
  document.getElementById('a11').style.display = "block";
  document.getElementById('a11').play();
}
function a11Finished() {
  document.getElementById('a11').style.display = "none";
  document.getElementById('buttonNext1').style.display = "block";
}
function buttonNext1Clicked() {
  document.getElementById('buttonNext1').style.display = "none";
  document.getElementById('a2').style.display = "block";
  document.getElementById('a2').play();
}

function a2Finished() {
  document.getElementById('a2').style.display = "none";
  document.getElementById('a12').style.display = "block";
  document.getElementById('a12').play();
}
function a12Finished() {
  document.getElementById('a12').style.display = "none";
  document.getElementById('buttonNext2').style.display = "block";
}
function buttonNext2Clicked() {
  document.getElementById('buttonNext2').style.display = "none";
  document.getElementById('a3').style.display = "block";
  document.getElementById('a3').play();
}

function a3Finished() {
  document.getElementById('a3').style.display = "none";
  document.getElementById('a13').style.display = "block";
  document.getElementById('a13').play();
}
function a13Finished() {
  document.getElementById('a13').style.display = "none";
  document.getElementById('buttonNext3').style.display = "block";
}
function buttonNext3Clicked() {
  document.getElementById('buttonNext3').style.display = "none";
  document.getElementById('a4').style.display = "block";
  document.getElementById('a4').play();
}

function a4Finished() {
  document.getElementById('a4').style.display = "none";
  document.getElementById('a14').style.display = "block";
  document.getElementById('a14').play();
}
function a14Finished() {
  document.getElementById('a14').style.display = "none";
  document.getElementById('buttonNext4').style.display = "block";
}
function buttonNext4Clicked() {
  document.getElementById('buttonNext4').style.display = "none";
  // document.getElementById('a5').style.display = "block";
  document.getElementById('question').style.display = "block";
  document.getElementById('buttonNext00').style.display = "block";
}

// function a5Finished() {
//   document.getElementById('a5').style.display = "none";
//   document.getElementById('a15').style.display = "block";
// }
// function a15Finished() {
//   document.getElementById('a15').style.display = "none";
//   document.getElementById('buttonNext5').style.display = "block";
// }
// function buttonNext5Clicked() {
//   document.getElementById('buttonNext5').style.display = "none";
//   document.getElementById('question').style.display = "block";
//   document.getElementById('buttonNext00').style.display = "block";
// }

// function buttonNext1Clicked() {
//   document.getElementById('buttonNext1').style.display = "none";
//   document.getElementById('question').style.display = "block";
//   document.getElementById('buttonNext12').style.display = "block";
// }
function buttonNext00Clicked() {
  document.getElementById('buttonNext00').style.display = "none";
  document.getElementById('question').style.display = "none";
  document.getElementById('afterQuestion').style.display = "block";
  document.getElementById('buttonNext000').style.display = "block";
}


let track1 = document.getElementById('track1');
let track2 = document.getElementById('track2');
track1.volume = 0.5;
track2.volume = 0.05;



function buttonNext000Clicked() {
  document.getElementById('buttonNext000').style.display = "none";
  document.getElementById('afterQuestion').style.display = "none";
  document.getElementById('question').style.display = "block";
  document.getElementById('question').style.top = "30%";
  document.getElementById('justForShowingTrack1').style.display = "block";
  document.getElementById('volumeBtn').style.display = "block";
  track1.play();
  track2.play();
}
function showNext() {
  document.getElementById('buttonNext0000').style.display = "block";
}
let volumeBtnClickedTime = 0;
let fontSizeNum;
let fontSize;
function volumeBtnClicked() {
  if (volumeBtnClickedTime < 5) {
    volumeBtnClickedTime ++;
    fontSizeNum = 30 + volumeBtnClickedTime * 2;
    fontSize = fontSizeNum + "px";
    document.getElementById('volumeBtn').style.fontSize = fontSize;
    track1.volume -= 0.09;
    track2.volume += 0.09;
    if (volumeBtnClickedTime == 5) {
      setTimeout(showNext, 1)
    }
  }
}

let rTrack = document.getElementById('rTrack');
function buttonNext0000Clicked() {
  document.getElementById('buttonNext0000').style.display = "none";
  document.getElementById('volumeChangeGroup').style.display = "none";
  document.getElementById('volumeBtn').style.display = "none";
  document.getElementById('question').style.display = "none";
  track1.currentTime = 0;
  track1.pause();
  track2.currentTime = 0;
  track2.pause();
  document.getElementById('question2').style.display = "block";
  document.getElementById('question2').style.top = "20%";
  document.getElementById('reverseBtn1').style.display = "block";
  rTrack.play();
}

let reversedBtnClickedTime = 0;
let step1 = document.getElementById('step1');
let step2 = document.getElementById('step2');
let step3 = document.getElementById('step3');
let step4 = document.getElementById('step4');

function step1Ended() {
  document.getElementById('reverseBtn2').style.display = "block";
}
function step2Ended() {
  document.getElementById('reverseBtn3').style.display = "block";
}
function step3Ended() {
  document.getElementById('reverseBtn4').style.display = "block";
}
function step4Ended() {
  document.getElementById('buttonNext00000').style.display = "block";
}
function reverseBtn1Clicked() {
  document.getElementById('reverseBtn1').style.display = "none";
  document.getElementById('picStep').style.display = "block";
  rTrack.pause();
  step1.play();
}
function reverseBtn2Clicked() {
  document.getElementById('reverseBtn2').style.display = "none";
  document.getElementById('picStep').src = "img/step2.png";
  step2.play();
}
function reverseBtn3Clicked() {
  document.getElementById('reverseBtn3').style.display = "none";
  document.getElementById('picStep').src = "img/step3.png";
  step3.play();
}
function reverseBtn4Clicked() {
  document.getElementById('reverseBtn4').style.display = "none";
  document.getElementById('picStep').src = "img/p1.png";
  step4.play();
}

function buttonNext00000Clicked() {
  document.getElementById('question2').style.display = "none";
  document.getElementById('buttonNext00000').style.display = "none";
  document.getElementById('picStep').style.display = "none";
  document.getElementById('a6').style.display = "block";
  document.getElementById('a6').play();
}

function startRoofTop() {
  rooftopTrack.play();
  document.getElementById('narrate0').style.display = "block";
  setTimeout(showJump, 10000);
}

let rooftopTrack = document.getElementById('rooftopTrack')
function a6Finished() {
  document.getElementById('buttonNext00000').style.display = "none";
  // document.getElementById('volumeChangeGroup').style.display = "none";
  // document.getElementById('volumeBtn').style.display = "none";
  // document.getElementById('question').style.display = "none";
  // track1.currentTime = 0;
  // track1.pause();
  // track2.currentTime = 0;
  // track2.pause();
  document.getElementById('a6').style.display = "none";
  setTimeout(startRoofTop, 1000);

}
function showJump() {
  document.getElementById('buttonJump').style.display = "block";
}

let trans = document.getElementById('trans');
function buttonJumpClicked() {
  document.getElementById('narrate0').style.display = "none";
  document.getElementById('buttonJump').style.display = "none";
  document.body.style.backgroundColor = "white";
  rooftopTrack.currentTime = 0;
  rooftopTrack.pause();
  trans.play();
  setTimeout(showEnd, 3000);
}
let ending = document.getElementById('ending');
function showEnd() {
  document.getElementById('end').style.display = "block";
  document.getElementById('make').style.display = "block";
  ending.play()
}
