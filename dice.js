function dice() {

  /*
   全部で58人
   765プロのアイドルのみ … 52
   765プロのアイドル + 961のアイドル … 54
   全プロダクションのアイドル … 56
   アイドル + 事務員 … 58
   アイドル + 事務員 + そらさん … 59
   アイドル + 事務員 + そらさん + 社長 … 61
  */
  let characters = [52, 54, 56, 58, 59, 61];
  let fonts = document.getElementsByTagName("font");
  for (let i = 0; i < fonts.length; i++) {
    if (fonts[i].color == "#ff0000") {
      let blockquote = fonts[i].parentNode;

      characters.forEach(character => {

        // diceの赤文字サーチ
        if ((blockquote.innerHTML.match('d' + character + '=<font color="#ff0000">'))) {
          let dice = fonts[i].innerHTML.split(" ");
          let first = true;

          // imgタグを付ける作業
          // 何度も右クリックすると無限に下に生えるのは仕様です、すみません
          for (let j = 0; j < dice.length; j++) {
            if (dice[j].match("^[0-9]*$")) {
              let d = document.createElement('img');

              d.style.width = "30px";
              d.src = chrome.extension.getURL("characters/" + ("0" + dice[j]).slice(-2) + ".jpg");
              if (first) {
                blockquote.appendChild(document.createElement('br'));
                first = false;
              }
              blockquote.appendChild(d);
            }
          }
        }
      });

    }
  }
}


dice();