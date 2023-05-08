var rectang1 = document.getElementById("rectangle1");
var rectang2 = document.getElementById("rectangle2");
var rectang3 = document.getElementById("rectangle3");
var rectang4 = document.getElementById("rectangle4");
var rectang5 = document.getElementById("rectangle5");
var rectang6 = document.getElementById("rectangle6");

var height = 56;

var rectangles = document.querySelectorAll('.sixRectangles')

function showPosition() {
  // console.log(window.scrollY)
  setTimeout(showPosition, 0.5);
  if (window.scrollY >= height) {
    rectang1.className = 'modified1';
    rectang2.className = 'modified1';
  }
  if (window.scrollY >= height*2) {
    rectang3.className = 'modified2';
    rectang4.className = 'modified2';
  }
  if (window.scrollY >= height*3) {
    rectang5.className = 'modified3';
    rectang6.className = 'modified3';
  }
  // FADEOUT
  if (window.scrollY >= height*3.2) {
    for (i = 0; i < rectangles.length; i++) {
      rectangles[i].style.opacity = 0;
    }
  }
  // BACKWARDS
  if (window.scrollY <= height*3) {
    rectang5.className = 'sixRectangles'
    rectang6.className = 'sixRectangles'
  }
  if (window.scrollY <= height*2) {
    rectang3.className = 'sixRectangles'
    rectang4.className = 'sixRectangles'
  }
  if (window.scrollY <= height) {
    rectang1.className = 'sixRectangles'
    rectang2.className = 'sixRectangles'
  }
  if (window.scrollY >= height)
  // FADEIN
  if (window.scrollY <= height*4) {
    for (i = 0; i < rectangles.length; i++) {
      rectangles[i].style.opacity = 0.8;
    }
  }
}

showPosition()

// GLOW EFFECT ON MOUSEHOVER

var quotesContainer = document.querySelector('.quotesContainer')

// function handleOnMouseMove() {
//   const rect = e.getBoundingClientRect(),
//   x = e.clientX - rect.left,
//   y = e.clientY - rect.top;

//   target.style.setProperty("--mouse-x", '${x}px');
//   target.style.setProperty("--mouse-y", '${y}px');
// }

quotesContainer.onmousemove = function (e) {
  Mouse = {
    x: e.pageX - this.offsetLeft,
    y: e.pageY - this.offsetTop
  }
  quotesContainer.style.setProperty("--mouse-x", Mouse.x + "px");
  quotesContainer.style.setProperty("--mouse-y", Mouse.y + "px");
}



// // LINE 1
// var leftSide_1 = document.getElementById('leftSide1');
// var line_1 = document.getElementById('line1');
// var svg1 = document.getElementById('svg1')

// var count1 = 0;

// function translate1() {
//   if (count1 == 0) {
//     line_1.textContent = "It's been a while, Doctor. It's me."
//     line_1.className = "englishLine"
//     count1++;
//     leftSide_1.textContent = '日本語'
//   }
//   else if (count1 == 1) {
//     line_1.innerHTML = 'お<a href="https://jisho.org/search/%E4%B9%85%20%23kanji" target="_blank"><ruby>久<rt>ひさ</rt></ruby></a>しぶりですね、<a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>。<a href="https://jisho.org/search/%E5%83%95%20%23kanji" target="_blank"><ruby>僕<rt>ぼく</rt></ruby></a>ですよ。';
//     line_1.className = "originalQuote";
//     count1--;
//     leftSide_1.textContent = '英語'
//     svg1.className = "voiceSVG";
//   }
// }
// leftSide_1.addEventListener('click', translate1, false);

// var sound_1 = new Audio('./Sounds/L1.mp3')

// // ON SOUND EFFECT
// var soundIcon_1 = document.getElementById('svg1');

// function playSound1() {
//   sound_1.play();
// }

// soundIcon_1.addEventListener('click', playSound1, false);



// function checkSound1() {
//   if (!sound_1.paused) {
//   soundIcon_1.className = 'soundON';
// } 
//   if (sound_1.paused) {
//   soundIcon_1.className = 'voiceSVG';
// }
//   setTimeout(checkSound1, 1);
// }

// checkSound1()


// // LINE 2
// var leftSide_2 = document.getElementById('leftSide2');
// var line_2 = document.getElementById('line2');
// var svg2 = document.getElementById('svg2')

// var count2 = 0;

// function translate2() {
//   if (count2 == 0) {
//     line_2.textContent = "Nine years ago you saved my life, isn't that right?"
//     line_2.className = "englishLine"
//     count2++;
//     leftSide_2.textContent = '日本語'
//   }
//   else if (count2 == 1) {
//     line_2.innerHTML = '<ruby>9<rt>きゅう</rt></ruby><a href="https://jisho.org/search/%E5%B9%B4%20%23kanji" target="blank"><ruby>年<rt>ねん</rt></ruby></a><a href="https://jisho.org/search/%E5%89%8D%20%23kanji" target="blank"><ruby>前<rt>まえ</rt></ruby></a><a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>は<a href="https://jisho.org/search/%E5%83%95%20%23kanji" target="_blank"><ruby>僕<rt>ぼく</rt></ruby></a>の<a href="https://jisho.org/search/%E5%91%BD%20%23kanji" target="blank"><ruby>命<rt>いのち</rt></ruby></a>を<a href="https://jisho.org/search/%E5%8A%A9%20%23kanji" target="blank"><ruby>助<rt>たす</rt></ruby></a>けてくれたでしょう。';
//     line_2.className = "originalQuote";
//     count2--;
//     leftSide_2.textContent = '英語'
//     svg2.className = "voiceSVG";
//   }
// }
// leftSide_2.addEventListener('click', translate2, false);

// var sound_2 = new Audio('./Sounds/L2.mp3')

// // ON SOUND EFFECT
// var soundIcon_2 = document.getElementById('svg2');

// function playSound2() {
//   sound_2.play();
// }

// soundIcon_2.addEventListener('click', playSound2, false);



// function checkSound2() {
//   if (!sound_2.paused) {
//   soundIcon_2.className = 'soundON';
// } 
//   if (sound_2.paused) {
//   soundIcon_2.className = 'voiceSVG';
// }
//   setTimeout(checkSound2, 1);
// }

// checkSound2()


// // LINE 3
// var leftSide_3 = document.getElementById('leftSide3');
// var line_3 = document.getElementById('line3');
// var svg3 = document.getElementById('svg3')

// var count3 = 0;

// function translate3() {
//   if (count3 == 0) {
//     line_3.textContent = "Have you already forgotten about those twins?"
//     line_3.className = "englishLine"
//     count3++;
//     leftSide_3.textContent = '日本語'
//   }
//   else if (count3 == 1) {
//     line_3.innerHTML = 'もう<a href="https://jisho.org/search/%E5%BF%98%20%23kanji" target="blank"><ruby>忘<rt>わす</rt></ruby></a>れちゃったかな。あの<a href="https://jisho.org/search/%E6%99%82%20%23kanji" target="blank"><ruby>時<rt>とき</rt></ruby></a>の<a href="https://jisho.org/search/%E5%8F%8C%20%23kanji" target="blank"><ruby>双<rt>ふた</rt></ruby></a><a href="https://jisho.org/search/%E5%AD%90%20%23kanji" target="blank"><ruby>子<rt>ご</rt></ruby></a>のことなんて。';
//     line_3.className = "originalQuote";
//     count3--;
//     leftSide_3.textContent = '英語'
//     svg3.className = "voiceSVG";
//   }
// }
// leftSide_3.addEventListener('click', translate3, false);

// var sound_3 = new Audio('./Sounds/L3.mp3')

// // ON SOUND EFFECT
// var soundIcon_3 = document.getElementById('svg3');

// function playSound3() {
//   sound_3.play();
// }

// soundIcon_3.addEventListener('click', playSound3, false);



// function checkSound3() {
//   if (!sound_3.paused) {
//   soundIcon_3.className = 'soundON';
// } 
//   if (sound_3.paused) {
//   soundIcon_3.className = 'voiceSVG';
// }
//   setTimeout(checkSound3, 1);
// }

// checkSound3()


// // LINE 4
// var leftSide_4 = document.getElementById('leftSide4');
// var line_4 = document.getElementById('line4');
// var svg4 = document.getElementById('svg4')

// var count4 = 0;

// function translate4() {
//   if (count4 == 0) {
//     line_4.textContent = "Have you already forgotten about those twins?"
//     line_4.className = "englishLine"
//     count4++;
//     leftSide_4.textContent = '日本語'
//   }
//   else if (count4 == 1) {
//     line_4.innerHTML = 'そうだよ。あの<a href="https://jisho.org/search/%E5%8F%8C%20%23kanji" target="blank"><ruby>双<rt>ふた</rt>' + '</ruby></a><a href="https://jisho.org/search/%E5%AD%90%20%23kanji" target="blank">' + '<ruby>子<rt>ご</rt></ruby></a>だよ。<a href="https://jisho.org/search/%E8%A6%9A%20%23kanji" target="blank"><ruby>覚<rt>おぼ</rt></ruby></a>えていてくれたんだね。'
//     line_4.className = "originalQuote";
//     count4--;
//     leftSide_4.textContent = '英語'
//     svg4.className = "voiceSVG";
//   }
// }
// leftSide_4.addEventListener('click', translate4, false);

// var sound_4 = new Audio('./Sounds/L4.mp3')

// // ON SOUND EFFECT
// var soundIcon_4 = document.getElementById('svg4');

// function playSound4() {
//   sound_4.play();
// }

// soundIcon_4.addEventListener('click', playSound4, false);



// function checkSound4() {
//   if (!sound_4.paused) {
//   soundIcon_4.className = 'soundON';
// } 
//   if (sound_4.paused) {
//   soundIcon_4.className = 'voiceSVG';
// }
//   setTimeout(checkSound4, 1);
// }

// checkSound4()


// // LINE 5
// var leftSide_5 = document.getElementById('leftSide5');
// var line_5 = document.getElementById('line5');
// var svg5 = document.getElementById('svg5')

// var count5 = 0;

// function translate5() {
//   if (count5 == 0) {
//     line_5.textContent = "What do you mean? It's an execution."
//     line_5.className = "englishLine"
//     count5++;
//     leftSide_5.textContent = '日本語'
//   }
//   else if (count5 == 1) {
//     line_5.innerHTML = '<a href="https://jisho.org/search/%E4%BD%95%20%23kanji" target="blank"><ruby>何<rt>なに</rt></ruby></a>って。。。<a href="https://jisho.org/search/%E5%87%A6%20%23kanji" target="blank"><ruby>処<rt>しょ</rt></ruby></a><a href="https://jisho.org/search/%E5%88%91%20%23kanji" target="blank"><ruby>刑<rt>けい</rt></ruby></a>だよ。'
//     line_5.className = "originalQuote";
//     count5--;
//     leftSide_5.textContent = '英語'
//     svg5.className = "voiceSVG";
//   }
// }
// leftSide_5.addEventListener('click', translate5, false);

// var sound_5 = new Audio('./Sounds/L5.mp3')

// // ON SOUND EFFECT
// var soundIcon_5 = document.getElementById('svg5');

// function playSound5() {
//   sound_5.play();
// }

// soundIcon_5.addEventListener('click', playSound5, false);



// function checkSound5() {
//   if (!sound_5.paused) {
//   soundIcon_5.className = 'soundON';
// } 
//   if (sound_5.paused) {
//   soundIcon_5.className = 'voiceSVG';
// }
//   setTimeout(checkSound5, 1);
// }

// checkSound5()


// // LINE 6
// var leftSide_6 = document.getElementById('leftSide6');
// var line_6 = document.getElementById('line6');
// var svg6 = document.getElementById('svg6')

// var count6 = 0;

// function translate6() {
//   if (count6 == 0) {
//     line_6.textContent = "You talk too much, Junkers."
//     line_6.className = "englishLine"
//     count6++;
//     leftSide_6.textContent = '日本語'
//   }
//   else if (count6 == 1) {
//     line_6.innerHTML = 'おしゃべりだな。ユンケルスは。'
//     line_6.className = "originalQuote";
//     count6--;
//     leftSide_6.textContent = '英語'
//     svg6.className = "voiceSVG";
//   }
// }
// leftSide_6.addEventListener('click', translate6, false);

// var sound_6 = new Audio('./Sounds/L6.mp3')

// // ON SOUND EFFECT
// var soundIcon_6 = document.getElementById('svg6');

// function playSound6() {
//   sound_6.play();
// }

// soundIcon_6.addEventListener('click', playSound6, false);



// function checkSound6() {
//   if (!sound_6.paused) {
//   soundIcon_6.className = 'soundON';
// } 
//   if (sound_6.paused) {
//   soundIcon_6.className = 'voiceSVG';
// }
//   setTimeout(checkSound6, 1);
// }

// checkSound6()


// // LINE 7
// var leftSide_7 = document.getElementById('leftSide7');
// var line_7 = document.getElementById('line7');
// var svg7 = document.getElementById('svg7')

// var count7 = 0;

// function translate7() {
//   if (count7 == 0) {
//     line_7.textContent = '"Johan"...there was a time when I used to have that name too.'
//     line_7.className = "englishLine"
//     count7++;
//     leftSide_7.textContent = '日本語'
//   }
//   else if (count7 == 1) {
//     line_7.innerHTML = 'ヨハンか。。。そういう<a href="https://jisho.org/search/%E5%90%8D%20%23kanji" target="blank"><ruby>名<rt>な</rt></ruby></a><a href="https://jisho.org/search/%E5%89%8D%20%23kanji" target="blank"><ruby>前<rt>まえ</rt></ruby></a>の<a href="https://jisho.org/search/%E6%99%82%20%23kanji" target="blank"><ruby>時<rt>とき</rt></ruby></a>もあったっけ。'
//     line_7.className = "originalQuote";
//     count7--;
//     leftSide_7.textContent = '英語'
//     svg7.className = "voiceSVG";
//   }
// }
// leftSide_7.addEventListener('click', translate7, false);

// var sound_7 = new Audio('./Sounds/L7.mp3')

// // ON SOUND EFFECT
// var soundIcon_7 = document.getElementById('svg7');

// function playSound7() {
//   sound_7.play();
// }

// soundIcon_7.addEventListener('click', playSound7, false);



// function checkSound7() {
//   if (!sound_7.paused) {
//   soundIcon_7.className = 'soundON';
// } 
//   if (sound_7.paused) {
//   soundIcon_7.className = 'voiceSVG';
// }
//   setTimeout(checkSound7, 1);
// }

// checkSound7()


// // LINE 8
// var leftSide_8 = document.getElementById('leftSide8');
// var line_8 = document.getElementById('line8');
// var svg8 = document.getElementById('svg8')

// var count8 = 0;

// function translate8() {
//   if (count8 == 0) {
//     line_8.textContent = "But that is not my real name."
//     line_8.className = "englishLine"
//     count8++;
//     leftSide_8.textContent = '日本語'
//   }
//   else if (count8 == 1) {
//     line_8.innerHTML = 'でもそれは<a href="https://jisho.org/search/%E5%83%95%20%23kanji" target="blank"><ruby>僕<rt>ぼく</rt></ruby></a>の<a href="https://jisho.org/search/%E6%9C%AC%20%23kanji" target="blank"><ruby>本<rt>ほん</rt></ruby></a><a href="https://jisho.org/search/%E5%BD%93%20%23kanji" target="blank"><ruby>当<rt>とう</rt></ruby></a>の<a href="https://jisho.org/search/%E5%90%8D%20%23kanji" target="blank"><ruby>名<rt>な</rt></ruby></a><a href="https://jisho.org/search/%E5%89%8D%20%23kanji" target="blank"><ruby>前<rt>まえ</rt></ruby></a>じゃない。'
//     line_8.className = "originalQuote";
//     count8--;
//     leftSide_8.textContent = '英語'
//     svg8.className = "voiceSVG";
//   }
// }
// leftSide_8.addEventListener('click', translate8, false);

// var sound_8 = new Audio('./Sounds/L8.mp3')

// // ON SOUND EFFECT
// var soundIcon_8 = document.getElementById('svg8');

// function playSound8() {
//   sound_8.play();
// }

// soundIcon_8.addEventListener('click', playSound8, false);



// function checkSound8() {
//   if (!sound_8.paused) {
//   soundIcon_8.className = 'soundON';
// } 
//   if (sound_8.paused) {
//   soundIcon_8.className = 'voiceSVG';
// }
//   setTimeout(checkSound8, 1);
// }

// checkSound8()


// // LINE 9
// var leftSide_9 = document.getElementById('leftSide9');
// var line_9 = document.getElementById('line9');
// var svg9 = document.getElementById('svg9')

// var count9 = 0;

// function translate9() {
//   if (count9 == 0) {
//     line_9.textContent = "No one must know about my past."
//     line_9.className = "englishLine"
//     count9++;
//     leftSide_9.textContent = '日本語'
//   }
//   else if (count9 == 1) {
//     line_9.innerHTML = '<a href="https://jisho.org/search/%E5%83%95%20%23kanji" target="blank"><ruby>僕<rt>ぼく</rt></ruby></a>の<a href="https://jisho.org/search/%E9%81%8E%20%23kanji" target="blank"><ruby>過<rt>か</rt></ruby></a><a href="https://jisho.org/search/%E5%8E%BB%20%23kanji" target="blank"><ruby>去<rt>こ</rt></ruby></a>を<a href="https://jisho.org/search/%E7%9F%A5%20%23kanji" target="blank"><ruby>知<rt>し</rt></ruby></a>っちゃいけないんだ。'
//     line_9.className = "originalQuote";
//     count9--;
//     leftSide_9.textContent = '英語'
//     svg9.className = "voiceSVG";
//   }
// }
// leftSide_9.addEventListener('click', translate9, false);

// var sound_9 = new Audio('./Sounds/L9.mp3')

// // ON SOUND EFFECT
// var soundIcon_9 = document.getElementById('svg9');

// function playSound9() {
//   sound_9.play();
// }

// soundIcon_9.addEventListener('click', playSound9, false);



// function checkSound9() {
//   if (!sound_9.paused) {
//   soundIcon_9.className = 'soundON';
// } 
//   if (sound_9.paused) {
//   soundIcon_9.className = 'voiceSVG';
// }
//   setTimeout(checkSound9, 1);
// }

// checkSound9()


// // LINE 10
// var leftSide_10 = document.getElementById('leftSide10');
// var line_10 = document.getElementById('line10');
// var svg10 = document.getElementById('svg10')

// var count10 = 0;

// function translate10() {
//   if (count10 == 0) {
//     line_10.textContent = "Not those four couples and not the Lieberts either..."
//     line_10.className = "englishLine"
//     count10++;
//     leftSide_10.textContent = '日本語'
//   }
//   else if (count10 == 1) {
//     line_10.innerHTML = 'あの<ruby>4<rt>よん</rt></ruby><a href="https://jisho.org/search/%E7%B5%84%20%23kanji" target="blank"><ruby>組<rt>くみ</rt></ruby></a>の<a href="https://jisho.org/search/%E5%A4%AB%20%23kanji" target="blank"><ruby>夫<rt>ふう</rt></ruby></a><a href="https://jisho.org/search/%E5%A9%A6%20%23kanji" target="blank"><ruby>婦<rt>ふ</rt></ruby></a>もリーベルと<a href="https://jisho.org/search/%E5%A4%AB%20%23kanji" target="blank"><ruby>夫<rt>ふ</rt></ruby></a><a href="https://jisho.org/search/%E5%A6%BB%20%23kanji" target="blank"><ruby>妻<rt>さい</rt></ruby></a>も。。。'
//     line_10.className = "originalQuote";
//     count10--;
//     leftSide_10.textContent = '英語'
//     svg10.className = "voiceSVG";
//   }
// }
// leftSide_10.addEventListener('click', translate10, false);

// var sound_10 = new Audio('./Sounds/L10.mp3')

// // ON SOUND EFFECT
// var soundIcon_10 = document.getElementById('svg10');

// function playSound10() {
//   sound_10.play();
// }

// soundIcon_10.addEventListener('click', playSound10, false);



// function checkSound10() {
//   if (!sound_10.paused) {
//   soundIcon_10.className = 'soundON';
// } 
//   if (sound_10.paused) {
//   soundIcon_10.className = 'voiceSVG';
// }
//   setTimeout(checkSound10, 1);
// }

// checkSound10()


// // LINE 11
// var leftSide_11 = document.getElementById('leftSide11');
// var line_11 = document.getElementById('line11');
// var svg11 = document.getElementById('svg11')

// var count11 = 0;

// function translate11() {
//   if (count11 == 0) {
//     line_11.textContent = "But it's different for you, Doctor."
//     line_11.className = "englishLine"
//     count11++;
//     leftSide_11.textContent = '日本語'
//   }
//   else if (count11 == 1) {
//     line_11.innerHTML = 'でも<a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>は<a href="https://jisho.org/search/%E5%88%A5%20%23kanji" target="blank"><ruby>別<rt>べつ</rt></ruby></a>だよ。'
//     line_11.className = "originalQuote";
//     count11--;
//     leftSide_11.textContent = '英語'
//     svg11.className = "voiceSVG";
//   }
// }
// leftSide_11.addEventListener('click', translate11, false);

// var sound_11 = new Audio('./Sounds/L11.mp3')

// // ON SOUND EFFECT
// var soundIcon_11 = document.getElementById('svg11');

// function playSound11() {
//   sound_11.play();
// }

// soundIcon_11.addEventListener('click', playSound11, false);



// function checkSound11() {
//   if (!sound_11.paused) {
//   soundIcon_11.className = 'soundON';
// } 
//   if (sound_11.paused) {
//   soundIcon_11.className = 'voiceSVG';
// }
//   setTimeout(checkSound11, 1);
// }

// checkSound11()


// // LINE 12
// var leftSide_12 = document.getElementById('leftSide12');
// var line_12 = document.getElementById('line12');
// var svg12 = document.getElementById('svg12')

// var count12 = 0;

// function translate12() {
//   if (count12 == 0) {
//     line_12.textContent = "You saved my life."
//     line_12.className = "englishLine"
//     count12++;
//     leftSide_12.textContent = '日本語'
//   }
//   else if (count12 == 1) {
//     line_12.innerHTML = '<a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>は<a href="https://jisho.org/search/%E5%83%95%20%23kanji" target="blank"><ruby>僕<rt>ぼく</rt></ruby></a>を<a href="https://jisho.org/search/%E5%8A%A9%20%23kanji" target="blank"><ruby>助<rt>たす</rt></ruby></a>けてくれた。'
//     line_12.className = "originalQuote";
//     count12--;
//     leftSide_12.textContent = '英語'
//     svg12.className = "voiceSVG";
//   }
// }
// leftSide_12.addEventListener('click', translate12, false);

// var sound_12 = new Audio('./Sounds/L12.mp3')

// // ON SOUND EFFECT
// var soundIcon_12 = document.getElementById('svg12');

// function playSound12() {
//   sound_12.play();
// }

// soundIcon_12.addEventListener('click', playSound12, false);



// function checkSound12() {
//   if (!sound_12.paused) {
//   soundIcon_12.className = 'soundON';
// } 
//   if (sound_12.paused) {
//   soundIcon_12.className = 'voiceSVG';
// }
//   setTimeout(checkSound12, 1);
// }

// checkSound12()


// // LINE 13
// var leftSide_13 = document.getElementById('leftSide13');
// var line_13 = document.getElementById('line13');
// var svg13 = document.getElementById('svg13')

// var count13 = 0;

// function translate13() {
//   if (count13 == 0) {
//     line_13.textContent = "You are like a parent to me."
//     line_13.className = "englishLine"
//     count13++;
//     leftSide_13.textContent = '日本語'
//   }
//   else if (count13 == 1) {
//     line_13.innerHTML = '<a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>は<a href="https://jisho.org/search/%E5%83%95%20%23kanji" target="blank"><ruby>僕<rt>ぼく</rt></ruby></a>の<a href="https://jisho.org/search/%E8%A6%AA%20%23kanji" target="blank"><ruby>親<rt>おや</rt></ruby></a>みたいなものだもの。'
//     line_13.className = "originalQuote";
//     count13--;
//     leftSide_13.textContent = '英語'
//     svg13.className = "voiceSVG";
//   }
// }
// leftSide_13.addEventListener('click', translate13, false);

// var sound_13 = new Audio('./Sounds/L13.mp3')

// // ON SOUND EFFECT
// var soundIcon_13 = document.getElementById('svg13');

// function playSound13() {
//   sound_13.play();
// }

// soundIcon_13.addEventListener('click', playSound13, false);



// function checkSound13() {
//   if (!sound_13.paused) {
//   soundIcon_13.className = 'soundON';
// } 
//   if (sound_13.paused) {
//   soundIcon_13.className = 'voiceSVG';
// }
//   setTimeout(checkSound13, 1);
// }

// checkSound13()


// // LINE 14
// var leftSide_14 = document.getElementById('leftSide14');
// var line_14 = document.getElementById('line14');
// var svg14 = document.getElementById('svg14')

// var count14 = 0;

// function translate14() {
//   if (count14 == 0) {
//     line_14.textContent = "Because if it weren't for you, I wouldn't be here."
//     line_14.className = "englishLine"
//     count14++;
//     leftSide_14.textContent = '日本語'
//   }
//   else if (count14 == 1) {
//     line_14.innerHTML = 'だって<a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>がいなければ<a href="https://jisho.org/search/%E5%83%95%20%23kanji" target="blank"><ruby>僕<rt>ぼく</rt></ruby></a>はここにいないんだから。'
//     line_14.className = "originalQuote";
//     count14--;
//     leftSide_14.textContent = '英語'
//     svg14.className = "voiceSVG";
//   }
// }
// leftSide_14.addEventListener('click', translate14, false);

// var sound_14 = new Audio('./Sounds/L14.mp3')

// // ON SOUND EFFECT
// var soundIcon_14 = document.getElementById('svg14');

// function playSound14() {
//   sound_14.play();
// }

// soundIcon_14.addEventListener('click', playSound14, false);



// function checkSound14() {
//   if (!sound_14.paused) {
//   soundIcon_14.className = 'soundON';
// } 
//   if (sound_14.paused) {
//   soundIcon_14.className = 'voiceSVG';
// }
//   setTimeout(checkSound14, 1);
// }

// checkSound14()


// // LINE 15
// var leftSide_15 = document.getElementById('leftSide15');
// var line_15 = document.getElementById('line15');
// var svg15 = document.getElementById('svg15')

// var count15 = 0;

// function translate15() {
//   if (count15 == 0) {
//     line_15.textContent = "Why?"
//     line_15.className = "englishLine"
//     count15++;
//     leftSide_15.textContent = '日本語'
//   }
//   else if (count15 == 1) {
//     line_15.innerHTML = '<a href="https://jisho.org/search/%E4%BD%95%20%23kanji" target="blank"><ruby>何<rt>なぜ</rt></ruby></a>故？'
//     line_15.className = "originalQuote";
//     count15--;
//     leftSide_15.textContent = '英語'
//     svg15.className = "voiceSVG";
//   }
// }
// leftSide_15.addEventListener('click', translate15, false);

// var sound_15 = new Audio('./Sounds/L15.mp3')

// // ON SOUND EFFECT
// var soundIcon_15 = document.getElementById('svg15');

// function playSound15() {
//   sound_15.play();
// }

// soundIcon_15.addEventListener('click', playSound15, false);



// function checkSound15() {
//   if (!sound_15.paused) {
//   soundIcon_15.className = 'soundON';
// } 
//   if (sound_15.paused) {
//   soundIcon_15.className = 'voiceSVG';
// }
//   setTimeout(checkSound15, 1);
// }

// checkSound15()




// ARRAY OF LIST ITEMS
const listItems = document.querySelectorAll('.quote')

// ARRAY OF LEFTSIDEDIVS
const leftSideDivs = document.querySelectorAll('.darkLeftSide');

// ARRAY OF SVGS
const svgs = document.querySelectorAll(".voiceSVG");

// ARRAY OF PARAGRAPHS
const paragraphs = document.querySelectorAll(".originalQuote");

// ARRAY OF ENGLISH LINES
var english1 = "It's been a while, Doctor. It's me."
var english2 = "Nine years ago you saved my life, isn't that right?"
var english3 = "Have you already forgotten about those twins?"
var english4 = "That's right. Those twins. I guess you do remember me."
var english5 = "What do you mean? It's an execution."
var english6 = "You talk too much, Junkers."
var english7 = '"Johan"...there was a time when I used to have that name too.'
var english8 = "But that is not my real name."
var english9 = "No one must know about my past."
var english10 = "Not those four couples and not the Lieberts either..."
var english11 = "But it's different for you, Doctor."
var english12 = "You saved my life."
var english13 = "You are like a parent to me."
var english14 = "Because if it weren't for you, I wouldn't be here."
var english15 = "Why?"
var english16 = "Doctor, I heard you became the Chief of Surgery after that incident."
var english17 = "I'm so happy that you were promoted to be the Chief of Surgery."
var english18 = "You're here now because the Director, the Chief of Surgery and the Head of the Neurosurgery died, right?"
var english19 = "You said it yourself."
var english20 = "Isn't it what you wanted?"
var english21 = "When I became conscious, that's what you said."
var english22 = "You hated them so much that you wanted to kill them, right?"
var english23 = "I did as you wished."
var english24 = "I was supposed to have died back then."
var english25 = "You were the one who brought me back to life."
const englishLines = [english1, english2, english3, english4, english5, english6, english7, english8, english9, english10, english11, english12, english13, english14, english15, english16, english17, english18, english19, english20, english21, english22, english23, english24, english25]

// ARRAY OF JAPANESE TEXTCONTENT
var japanese1 = 'お<a href="https://jisho.org/search/%E4%B9%85%20%23kanji" target="_blank"><ruby>久<rt>ひさ</rt></ruby></a>しぶりですね、<a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>。<a href="https://jisho.org/search/%E5%83%95%20%23kanji" target="_blank"><ruby>僕<rt>ぼく</rt></ruby></a>ですよ。'
var japanese2 = '<ruby>9<rt>きゅう</rt></ruby><a href="https://jisho.org/search/%E5%B9%B4%20%23kanji" target="blank"><ruby>年<rt>ねん</rt></ruby></a><a href="https://jisho.org/search/%E5%89%8D%20%23kanji" target="blank"><ruby>前<rt>まえ</rt></ruby></a><a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>は<a href="https://jisho.org/search/%E5%83%95%20%23kanji" target="_blank"><ruby>僕<rt>ぼく</rt></ruby></a>の<a href="https://jisho.org/search/%E5%91%BD%20%23kanji" target="blank"><ruby>命<rt>いのち</rt></ruby></a>を<a href="https://jisho.org/search/%E5%8A%A9%20%23kanji" target="blank"><ruby>助<rt>たす</rt></ruby></a>けてくれたでしょう。'
var japanese3 = 'もう<a href="https://jisho.org/search/%E5%BF%98%20%23kanji" target="blank"><ruby>忘<rt>わす</rt></ruby></a>れちゃったかな。あの<a href="https://jisho.org/search/%E6%99%82%20%23kanji" target="blank"><ruby>時<rt>とき</rt></ruby></a>の<a href="https://jisho.org/search/%E5%8F%8C%20%23kanji" target="blank"><ruby>双<rt>ふた</rt></ruby></a><a href="https://jisho.org/search/%E5%AD%90%20%23kanji" target="blank"><ruby>子<rt>ご</rt></ruby></a>のことなんて。'
var japanese4 = 'そうだよ。あの<a href="https://jisho.org/search/%E5%8F%8C%20%23kanji" target="blank"><ruby>双<rt>ふた</rt></ruby></a><a href="https://jisho.org/search/%E5%AD%90%20%23kanji" target="blank"><ruby>子<rt>ご</rt></ruby></a>だよ。<a href="https://jisho.org/search/%E8%A6%9A%20%23kanji" target="blank"><ruby>覚<rt>おぼ</rt></ruby></a>えていてくれたんだね。'
var japanese5 = '<a href="https://jisho.org/search/%E4%BD%95%20%23kanji" target="blank"><ruby>何<rt>なに</rt></ruby></a>って。。。<a href="https://jisho.org/search/%E5%87%A6%20%23kanji" target="blank"><ruby>処<rt>しょ</rt></ruby></a><a href="https://jisho.org/search/%E5%88%91%20%23kanji" target="blank"><ruby>刑<rt>けい</rt></ruby></a>だよ。'
var japanese6 = 'おしゃべりだな。ユンケルスは。'
var japanese7 = 'ヨハンか。。。そういう<a href="https://jisho.org/search/%E5%90%8D%20%23kanji" target="blank"><ruby>名<rt>な</rt></ruby></a><a href="https://jisho.org/search/%E5%89%8D%20%23kanji" target="blank"><ruby>前<rt>まえ</rt></ruby></a>の<a href="https://jisho.org/search/%E6%99%82%20%23kanji" target="blank"><ruby>時<rt>とき</rt></ruby></a>もあったっけ。'
var japanese8 = 'でもそれは<a href="https://jisho.org/search/%E5%83%95%20%23kanji" target="blank"><ruby>僕<rt>ぼく</rt></ruby></a>の<a href="https://jisho.org/search/%E6%9C%AC%20%23kanji" target="blank"><ruby>本<rt>ほん</rt></ruby></a><a href="https://jisho.org/search/%E5%BD%93%20%23kanji" target="blank"><ruby>当<rt>とう</rt></ruby></a>の<a href="https://jisho.org/search/%E5%90%8D%20%23kanji" target="blank"><ruby>名<rt>な</rt></ruby></a><a href="https://jisho.org/search/%E5%89%8D%20%23kanji" target="blank"><ruby>前<rt>まえ</rt></ruby></a>じゃない。'
var japanese9 = '<a href="https://jisho.org/search/%E5%83%95%20%23kanji" target="blank"><ruby>僕<rt>ぼく</rt></ruby></a>の<a href="https://jisho.org/search/%E9%81%8E%20%23kanji" target="blank"><ruby>過<rt>か</rt></ruby></a><a href="https://jisho.org/search/%E5%8E%BB%20%23kanji" target="blank"><ruby>去<rt>こ</rt></ruby></a>を<a href="https://jisho.org/search/%E7%9F%A5%20%23kanji" target="blank"><ruby>知<rt>し</rt></ruby></a>っちゃいけないんだ。'
var japanese10 = 'あの<ruby>4<rt>よん</rt></ruby><a href="https://jisho.org/search/%E7%B5%84%20%23kanji" target="blank"><ruby>組<rt>くみ</rt></ruby></a>の<a href="https://jisho.org/search/%E5%A4%AB%20%23kanji" target="blank"><ruby>夫<rt>ふう</rt></ruby></a><a href="https://jisho.org/search/%E5%A9%A6%20%23kanji" target="blank"><ruby>婦<rt>ふ</rt></ruby></a>もリーベルと<a href="https://jisho.org/search/%E5%A4%AB%20%23kanji" target="blank"><ruby>夫<rt>ふ</rt></ruby></a><a href="https://jisho.org/search/%E5%A6%BB%20%23kanji" target="blank"><ruby>妻<rt>さい</rt></ruby></a>も。。。'
var japanese11 = 'でも<a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>は<a href="https://jisho.org/search/%E5%88%A5%20%23kanji" target="blank"><ruby>別<rt>べつ</rt></ruby></a>だよ。'
var japanese12 = '<a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>は<a href="https://jisho.org/search/%E5%83%95%20%23kanji" target="blank"><ruby>僕<rt>ぼく</rt></ruby></a>を<a href="https://jisho.org/search/%E5%8A%A9%20%23kanji" target="blank"><ruby>助<rt>たす</rt></ruby></a>けてくれた。'
var japanese13 = '<a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>は<a href="https://jisho.org/search/%E5%83%95%20%23kanji" target="blank"><ruby>僕<rt>ぼく</rt></ruby></a>の<a href="https://jisho.org/search/%E8%A6%AA%20%23kanji" target="blank"><ruby>親<rt>おや</rt></ruby></a>みたいなものだもの。'
var japanese14 = 'だって<a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>がいなければ<a href="https://jisho.org/search/%E5%83%95%20%23kanji" target="blank"><ruby>僕<rt>ぼく</rt></ruby></a>はここにいないんだから。'
var japanese15 = '<a href="https://jisho.org/search/%E4%BD%95%20%23kanji" target="blank"><ruby>何<rt>なぜ</rt></ruby></a>故？'
var japanese16 = '<a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>、あの<a href="https://jisho.org/search/%E4%BA%8B%20%23kanji" target="_blank"><ruby>事<rt>じ</rt></ruby></a><a href="https://jisho.org/search/%E4%BB%B6%20%23kanji" target="_blank"><ruby>件<rt>けん</rt></ruby></a>の<a href="https://jisho.org/search/%E5%BE%8C%20%23kanji" target="_blank"><ruby>後<rt>あと</rt></ruby></a>すぐに<a href="https://jisho.org/search/%E5%A4%96%20%23kanji" target="_blank"><ruby>外<rt>げ</rt></ruby></a><a href="https://jisho.org/search/%E7%A7%91%20%23kanji" target="_blank"><ruby>科<rt>か</rt></ruby></a><a href="https://jisho.org/search/%E9%83%A8%20%23kanji" target="_blank"><ruby>部<rt>ぶ</rt></ruby></a><a href="https://jisho.org/search/%E9%95%B7%20%23kanji" target="_blank"><ruby>長<rt>ちょう</rt></ruby></a>になったんだって？'
var japanese17 = '<a href="https://jisho.org/search/%E6%9C%AC%20%23kanji" target="blank"><ruby>本<rt>ほん</rt></ruby></a><a href="https://jisho.org/search/%E5%BD%93%20%23kanji" target="blank"><ruby>当<rt>とう</rt></ruby></a>によかった。<a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>が<a href="https://jisho.org/search/%E5%A4%96%20%23kanji" target="_blank"><ruby>外<rt>げ</rt></ruby></a><a href="https://jisho.org/search/%E7%A7%91%20%23kanji" target="_blank"><ruby>科<rt>か</rt></ruby></a><a href="https://jisho.org/search/%E9%83%A8%20%23kanji" target="_blank"><ruby>部<rt>ぶ</rt></ruby></a><a href="https://jisho.org/search/%E9%95%B7%20%23kanji" target="_blank"><ruby>長<rt>ちょう</rt></ruby></a>に<a href="https://jisho.org/search/%E9%95%B7%20%23kanji" target="_blank"><ruby>昇進<rt>しょう</rt></ruby></a><a href="https://jisho.org/search/%E9%95%B7%20%23kanji" target="_blank"><ruby>進<rt>しん</rt></ruby></a>して。'
var japanese18 ='<a href="https://jisho.org/search/%E9%99%A2%20%23kanji" target="blank"><ruby>院<rt>いん</rt></ruby></a><a href="https://jisho.org/search/%E9%95%B7%20%23kanji" target="blank"><ruby>長<rt>ちょう</rt></ruby></a>や<a href="https://jisho.org/search/%E5%A4%96%20%23kanji" target="_blank"><ruby>外<rt>げ</rt></ruby></a><a href="https://jisho.org/search/%E7%A7%91%20%23kanji" target="_blank"><ruby>科<rt>か</rt></ruby></a><a href="https://jisho.org/search/%E9%83%A8%20%23kanji" target="_blank"><ruby>部<rt>ぶ</rt></ruby></a><a href="https://jisho.org/search/%E9%95%B7%20%23kanji" target="_blank"><ruby>長<rt>ちょう</rt></ruby></a>やチーフが<a href="https://jisho.org/search/%E6%AD%BB%20%23kanji" target="blank"><ruby>死<rt>し</rt></ruby></a>んだから<a href="https://jisho.org/search/%E4%BB%8A%20%23kanji" target="blank"><ruby>今<rt>いま</rt></ruby></a>の<a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>があるんだろう？'
var japanese19 = 'だって<a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>が<a href="https://jisho.org/search/%E8%A8%80%20%23kanji" target="_blank"><ruby>言<rt>い</rt></ruby></a>ったんじゃない。'
var japanese20 = '<a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>が<a href="https://jisho.org/search/%E6%9C%9B%20%23kanji" target="_blank"><ruby>望<rt>のぞ</rt></ruby></a>んだんじゃない。'
var japanese21 = '<a href="https://jisho.org/search/%E5%83%95%20%23kanji" target="_blank"><ruby>僕<rt>ぼく</rt></ruby></a>の<a href="https://jisho.org/search/%E6%84%8F%20%23kanji" target="_blank"><ruby>意<rt>い</rt></ruby></a><a href="https://jisho.org/search/%E8%AD%98%20%23kanji" target="_blank"><ruby>識<rt>しき</rt></ruby></a>が<a href="https://jisho.org/search/%E6%88%BB%20%23kanji" target="_blank"><ruby>戻<rt>もど</rt></ruby></a>った<a href="https://jisho.org/search/%E6%99%82%20%23kanji" target="_blank"><ruby>時<rt>とき</rt></ruby></a>、<a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>は<a href="https://jisho.org/search/%E8%A8%80%20%23kanji" target="_blank"><ruby>言<rt>い</rt></ruby></a>ってたじゃない。'
var japanese22 = 'あの<a href="https://jisho.org/search/%E4%BA%BA%20%23kanji" target="_blank"><ruby>人<rt>ひと</rt></ruby></a>たちを<a href="https://jisho.org/search/%E6%AE%BA%20%23kanji" target="_blank"><ruby>殺<rt>ころ</rt></ruby></a>したいほど<a href="https://jisho.org/search/%E6%86%8E%20%23kanji" target="_blank"><ruby>憎<rt>にく</rt></ruby></a>んでたじゃない。'
var japanese23 = '<a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>の<a href="https://jisho.org/search/%E6%9C%9B%20%23kanji" target="_blank"><ruby>望<rt>のぞ</rt></ruby></a>みどおりにしてあげたんだよ。'
var japanese24 = '<a href="https://jisho.org/search/%E5%83%95%20%23kanji" target="_blank"><ruby>僕<rt>ぼく</rt></ruby></a>はあの<a href="https://jisho.org/search/%E6%99%82%20%23kanji" target="_blank"><ruby>時<rt>とき</rt></ruby></a><a href="https://jisho.org/search/%E6%AD%BB%20%23kanji" target="_blank"><ruby>死<rt>し</rt></ruby></a>んでいたはずだったんだ。'
var japanese25 = '<a href="https://jisho.org/search/%E5%85%88%20%23kanji" target="_blank"><ruby>先<rt>せん</rt></ruby></a><a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>せい</rt></ruby></a>が<a href="https://jisho.org/search/%E5%83%95%20%23kanji" target="_blank"><ruby>僕<rt>ぼく</rt></ruby></a>を<a href="https://jisho.org/search/%E7%94%9F%20%23kanji" target="_blank"><ruby>生<rt>い</rt></ruby></a>き<a href="https://jisho.org/search/%E8%BF%94%20%23kanji" target="_blank"><ruby>返<rt>かえ</rt></ruby></a>らせてくれたんだ。'
const japaneseLines = [japanese1, japanese2, japanese3, japanese4, japanese5, japanese6, japanese7, japanese8, japanese9, japanese10, japanese11, japanese12, japanese13, japanese14, japanese15, japanese16, japanese17, japanese18, japanese19, japanese20, japanese21, japanese22, japanese23, japanese24, japanese25]

// ARRAY OF SOUNDS
var sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound13, sound14, sound15, sound16, sound17, sound18, sound19, sound20, sound21, sound22, sound23, sound24, sound25
const sounds = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound13, sound14, sound15, sound16, sound17, sound18, sound19, sound20, sound21, sound22, sound23, sound24, sound25]

// ARRAY OF COUNTS
var count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0, count7 = 0, count8 = 0, count9 = 0, count10 = 0, count11 = 0, count12 = 0, count13 = 0, count14 = 0, count15 = 0, count16 = 0; count17 = 0; count18 = 0; count19 = 0; count20 = 0; count21= 0; count22=0; count23=0; count24=0; count25=0;
const counts = [count1, count2, count3, count4, count5, count6, count7, count8, count9, count10, count11, count12, count13, count14, count15, count16, count17, count18, count19, count20, count21, count22, count23, count24, count25]


// console.log(listItems)
// console.log(leftSideDivs)
// console.log(svgs)
// console.log(paragraphs)
// console.log(englishLines)
// console.log(japaneseLines)
// console.log(sounds)
// console.log(counts)



// LEFT SIDE CLICK EVENT

leftSideDivs.forEach((item,index) => {
  function consoleIt() {
    if (counts[index] == 0) {
        console.log(index)
        paragraphs[index].textContent = englishLines[index]
        paragraphs[index].className = 'englishLine'
        counts[index]++
        this.textContent = '日本語'
      } else if (counts[index] == 1) {
        paragraphs[index].innerHTML = japaneseLines[index]
        paragraphs[index].className = 'originalQuote'
        counts[index]--
        this.textContent = "英語"
        svgs[index].className = 'voiceSVG'
      }
  }
  item.addEventListener('click', consoleIt, false);
});

// SOUND CLICK EVENT

svgs.forEach((item,index) => {
  function audioIt() {
    var soundCount = (index + 1).toString()
    sounds[index] = new Audio('./Sounds/L' + soundCount + '.mp3')
    function playSound() {
      sounds[index].play()
    }
    playSound()
    function checkSound() {
      if (!sounds[index].paused) {
        svgs[index].className = 'soundON'
      }
      if (sounds[index].paused) {
        svgs[index].className = 'voiceSVG'
      }
      setTimeout(checkSound, 1)
    }
    checkSound()
  }
  item.addEventListener('click', audioIt, false);
});








