// get i18n
fetch('/i18n.json').then(r=>r.json()).then(i18n=>{
  let langs = ['en', 'fr'];

  let lang = 0;

  let texts = document.querySelectorAll('[data-translate]');
  // button
  let button = document.getElementById('button-i18n');
  button.addEventListener('click', () => {
    for (let i = 0; i < texts.length; i++) {
      let text = texts[i].innerHTML;
      if (i18n[text] || texts[i]._innerHTML) {
        if (langs[lang] === 'en') {
          texts[i].innerHTML = i18n[text];
          texts[i]._innerHTML = text;
        } else {
          texts[i].innerHTML = texts[i]._innerHTML;
        }
      }
    }
    lang = (lang + 1) % 2;
  });

})

