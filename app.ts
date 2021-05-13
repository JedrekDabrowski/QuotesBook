const quotes: Array<string> = [
  '"Nasze życie jest takim, jakim uczyniły je nasze myśli."',
  '"Martw się, co inni ludzie o tobie myślą, a zawsze będziesz ich więźniem."',
  '"Życie jest jak jazda na rowerze. Żeby utrzymać równowagę, musisz być w ciągłym ruchu."',
  '"Jeżeli robisz to co łatwe, Twoje życie będzie trudne. Jeśli robisz to co trudne, Twoje życie będzie łatwe"',
  '"Dramatem życia jest to, że starzejemy się zbyt szybko, a mądrzejemy zbyt późno."',
  '"Krytyka jest czymś, czego możemy łatwo uniknąć nie mówiąc nic, nie robiąc nic i będąc nikim."',
  'Największym powodem do chwały nie jest nigdy nie upaść, ale umieć podnieść się za każdym razem , kiedy upadniemy.',
  'Każdy myśli o zmienianiu świata, lecz nikt nie myśli o tym by zmienić samego siebie.',
  '"Jeśli idziesz przez piekło, nie zatrzymuj się.',
];
const authors: Array<string> = [
  'Marek Aureliusz',
  'Lao Tzu',
  'Albert Einstein',
  'Les Brown',
  'Benjamin Franklin',
  'Arystoteles',
  'Konfucjusz',
  'Lew Tołstoj',
  'Winston Churchill',
];

let quotesNumber: number = 0;
const delayTime: number = 4000;

const txt = document.querySelector('p.text');
const box = document.querySelector<HTMLElement>('.box-in');
const author = document.querySelector('.author');
const nextPageBtn = document.querySelector('.next-page');

nextPageBtn.addEventListener('click', function () {
  box.classList.remove('active'); // reset animation
  void box.offsetWidth; // trigger reflow
  box.classList.add('active'); // start animation

  setTimeout(function () {
    txt.textContent = quotes[quotesNumber];
    author.textContent = authors[quotesNumber];
    if (quotesNumber <= quotes.length - 2) {
      quotesNumber++;
    } else quotesNumber = 0;
  }, delayTime);
});
