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


quotesContainer.onmousemove = function (e) {
  Mouse = {
    x: e.pageX - this.offsetLeft,
    y: e.pageY - this.offsetTop
  }
  quotesContainer.style.setProperty("--mouse-x", Mouse.x + "px");
  quotesContainer.style.setProperty("--mouse-y", Mouse.y + "px");
}



// ARRAY OF LIST ITEMS
const listItems = document.querySelectorAll('.quote')

// ARRAY OF LEFTSIDEDIVS
const leftSideDivs = document.querySelectorAll('.darkLeftSide');

// ARRAY OF SVGS
const svgs = document.querySelectorAll(".voiceSVG");

// ARRAY OF PARAGRAPHS
const paragraphs = document.querySelectorAll(".originalQuote");

// ARRAY OF ENGLISH LINES
var english1 = "Lotte, yesterday must've been tough."
var english2 = "I have the day off today from the book reading job."
var english3 = "Schuwald was incredibly depressed."
var english4 = "Nice to meet you."
var english5 = "I'm Johan Liebert from the law department."
var english6 = "Do you like this spot too?"
var english7 = "Come up."
var english8 = "You can see the scenery much better from here."
var english9 = "It's not scary."
var english10 = "Do you come here often?"
var english11 = "Longed for it?"
var english12 = "If you don't mind, can I hear it?"
var english13 = "Your story."
var english14 = "Is the incredibly rich father you mentioned in your story just now Schuwald, by any chance?"
var english15 = "I see. So that's how it is."
var english16 = "In that case, I have a good idea."
var english17 = "That's right. I guess you could call it a shared international pledge to protect the rights of vulnerable children."
var english18 = "That's the topic I'm working with right now."
const englishLines = [english1, english2, english3, english4, english5, english6, english7, english8, english9, english10, english11, english12, english13, english14, english15, english16, english17, english18]

// ARRAY OF JAPANESE TEXTCONTENT
var japanese1 = 'ロッテ、<a href="https://jisho.org/search/%E6%98%A8%20%23kanji" target="blank"><ruby>昨<rt>きのう</rt></ruby></a><a href="https://jisho.org/search/%E6%97%A5%20%23kanji" target="blank">日</a>は<a href="https://jisho.org/search/%E5%A4%A7%20%23kanji" target="blank"><ruby>大<rt>たい</rt></ruby></a><a href="https://jisho.org/search/%E5%A4%89%20%23kanji" target="blank"><ruby>変<rt>へん</rt></ruby></a>だったね。'
var japanese2 = '<a href="https://jisho.org/search/%E6%9C%97%20%23kanji" target="blank"><ruby>朗<rt>ろう</rt></ruby></a><a href="https://jisho.org/search/%E8%AA%AD%20%23kanji" target="blank"><ruby>読<rt>どく</rt></ruby></a>のアルバイトも<a href="https://jisho.org/search/%E4%BB%8A%20%23kanji" target="blank"><ruby>今<rt>きょう</rt></ruby></a><a href="https://jisho.org/search/%E6%97%A5%20%23kanji" target="blank">日</a>はお<a href="https://jisho.org/search/%E4%BC%91%20%23kanji" target="blank"><ruby>休<rt>やす</rt></ruby></a>みだった。'
var japanese3 = 'シューバルトさんひどく<a href="https://jisho.org/search/%E8%90%BD%20%23kanji" target="blank"><ruby>落<rt>お</rt></ruby></a>ち<a href="https://jisho.org/search/%E8%BE%BC%20%23kanji" target="blank"><ruby>込<rt>こ</rt></ruby></a>んでいたよ。'
var japanese4 = 'はじめまして。'
var japanese5= '<a href="https://jisho.org/search/%E6%B3%95%20%23kanji" target="blank"><ruby>法<rt>ほう</rt></ruby></a><a href="https://jisho.org/search/%E5%AD%A6%20%23kanji" target="blank"><ruby>学<rt>がく</rt></ruby></a><a href="https://jisho.org/search/%E9%83%A8%20%23kanji" target="blank"><ruby>部<rt>ぶ</rt></ruby></a>のヨハン･リーベルトです。'
var japanese6 = '<a href="https://jisho.org/search/%E5%90%9B%20%23kanji" target="blank"><ruby>君<rt>きみ</rt></ruby></a>もここが<a href="https://jisho.org/search/%E5%A5%BD%20%23kanji" target="blank"><ruby>好<rt>す</rt></ruby></a>きなのかい？'
var japanese7 = '<a href="https://jisho.org/search/%E4%B8%8A%20%23kanji" target="blank"><ruby>上<rt>あ</rt></ruby></a>がっておいでよ。'
var japanese8 = 'ここからのほうがもっと<a href="https://jisho.org/search/%E6%99%AF%20%23kanji" target="blank"><ruby>景<rt>け</rt></ruby></a><a href="https://jisho.org/search/%E8%89%B2%20%23kanji" target="blank"><ruby>色<rt>しき</rt></ruby></a>がよく<a href="https://jisho.org/search/%E8%A6%8B%20%23kanji" target="blank"><ruby>見<rt>み</rt></ruby></a>える。'
var japanese9 = '<a href="https://jisho.org/search/%E6%80%96%20%23kanji" target="blank"><ruby>怖<rt>こわ</rt></ruby></a>くなんかないさ。'
var japanese10 = 'よくここへ<a href="https://jisho.org/search/%E6%9D%A5%20%23kanji" target="blank"><ruby>来<rt>く</rt></ruby></a>るの？'
var japanese11 = '<a href="https://jisho.org/search/%E6%86%A7%20%23kanji" target="blank"><ruby>憧<rt>あこが</rt></ruby></a>れ？'
var japanese12 = 'よかったら<a href="https://jisho.org/search/%E8%81%9E%20%23kanji" target="blank"><ruby>聞<rt>き</rt></ruby></a>かせてくれないか？'
var japanese13 = '<a href="https://jisho.org/search/%E5%90%9B%20%23kanji" target="blank"><ruby>君<rt>きみ</rt></ruby></a>の<a href="https://jisho.org/search/%E8%A9%B1%20%23kanji" target="blank"><ruby>話<rt>はなし</rt></ruby></a>。'
var japanese14 = '<a href="https://jisho.org/search/%E4%BB%8A%20%23kanji" target="blank"><ruby>今<rt>いま</rt></ruby></a>の<a href="https://jisho.org/search/%E5%90%9B%20%23kanji" target="blank"><ruby>君<rt>きみ</rt></ruby></a>の<a href="https://jisho.org/search/%E8%A9%B1%20%23kanji" target="blank"><ruby>話<rt>はなし</rt></ruby></a>、<a href="https://jisho.org/search/%E5%A4%A7%20%23kanji" target="blank"><ruby>大<rt>おお</rt></ruby></a><a href="https://jisho.org/search/%E9%87%91%20%23kanji" target="blank"><ruby>金<rt>がね</rt></ruby></a><a href="https://jisho.org/search/%E6%8C%81%20%23kanji" target="blank"><ruby>持<rt>も</rt></ruby></a>ちの<a href="https://jisho.org/search/%E7%88%B6%20%23kanji" target="blank"><ruby>父<rt>ちち</rt></ruby></a><a href="https://jisho.org/search/%E8%A6%AA%20%23kanji" target="blank"><ruby>親<rt>おや</rt></ruby></a>って、シューバルトのことかい？'
var japanese15 = 'なるほど。そういうことか。'
var japanese16 = 'それならいい<a href="https://jisho.org/search/%E8%80%83%20%23kanji" target="blank"><ruby>考<rt>かんが</rt></ruby></a>えがあるよ。'
var japanese17 = 'そう。<a href="https://jisho.org/search/%E5%BC%B1%20%23kanji" target="blank"><ruby>弱<rt>じゃく</rt></ruby></a><a href="https://jisho.org/search/%E8%80%85%20%23kanji" target="blank"><ruby>者<rt>しゃ</rt></ruby></a>たる<a href="https://jisho.org/search/%E5%AD%90%20%23kanji" target="blank"><ruby>子<rt>こ</rt></ruby></a><a href="https://jisho.org/search/%E4%BE%9B%20%23kanji" target="blank"><ruby>供<rt>ども</rt></ruby></a>の<a href="https://jisho.org/search/%E4%BA%BA%20%23kanji" target="blank"><ruby>人<rt>じん</rt></ruby></a><a href="https://jisho.org/search/%E6%A8%A9%20%23kanji" target="blank"><ruby>権<rt>けん</rt></ruby></a>を<a href="https://jisho.org/search/%E5%AE%88%20%23kanji" target="blank"><ruby>守<rt>まも</rt></ruby></a>るための<a href="https://jisho.org/search/%E5%9B%BD%20%23kanji" target="blank"><ruby>国<rt>こく</rt></ruby></a><a href="https://jisho.org/search/%E9%9A%9B%20%23kanji" target="blank"><ruby>際<rt>さい</rt></ruby></a><a href="https://jisho.org/search/%E7%9A%84%20%23kanji" target="blank"><ruby>的<rt>てき</rt></ruby></a><a href="https://jisho.org/search/%E4%BF%9D%20%23kanji" target="blank"><ruby>保<rt>ほ</rt></ruby></a><a href="https://jisho.org/search/%E9%9A%9C%20%23kanji" target="blank"><ruby>障<rt>しょう</rt></ruby></a>の<a href="https://jisho.org/search/%E5%85%B1%20%23kanji" target="blank"><ruby>共<rt>きょう</rt></ruby></a><a href="https://jisho.org/search/%E9%80%9A%20%23kanji" target="blank"><ruby>通<rt>つう</rt></ruby></a><a href="https://jisho.org/search/%E5%9F%BA%20%23kanji" target="blank"><ruby>基<rt>き</rt></ruby></a><a href="https://jisho.org/search/%E6%BA%96%20%23kanji" target="blank"><ruby>準<rt>じゅん</rt></ruby></a>とでもいうかな'
var japanese18 = '<a href="https://jisho.org/search/%E4%BB%8A%20%23kanji" target="blank"><ruby>今<rt>いま</rt></ruby></a><a href="https://jisho.org/search/%E5%83%95%20%23kanji" target="blank"><ruby>僕<rt>ぼく</rt></ruby></a>が<a href="https://jisho.org/search/%E5%8F%96%20%23kanji" target="blank"><ruby>取<rt>と</rt></ruby></a>り<a href="https://jisho.org/search/%E7%B5%84%20%23kanji" target="blank"><ruby>組<rt>く</rt></ruby></a>んでいるテーマなんだ。'
const japaneseLines = [japanese1, japanese2, japanese3, japanese4, japanese5, japanese6, japanese7, japanese8, japanese9, japanese10, japanese11, japanese12, japanese13, japanese14, japanese15, japanese16, japanese17, japanese18]

// ARRAY OF SOUNDS
var sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound13, sound14, sound15, sound16, sound17, sound18
const sounds = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound13, sound14, sound15, sound16, sound17, sound18]

// ARRAY OF COUNTS
var count1 = 0; count2=0; count3=0; count4=0; count5=0; count6=0; count7=0; count8=0; count9=0; count10=0; count11=0; count12=0; count13=0; count14=0; count15=0; count16=0; count17=0; count18=0;
const counts = [count1, count2, count3, count4, count5, count6, count7, count8, count9, count10, count11, count12, count13, count14, count15, count16, count17, count18]




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
    sounds[index] = new Audio('./Sounds 2/L' + soundCount + '.mp3')
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








