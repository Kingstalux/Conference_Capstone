// Speakers page
const speakers = [

  {
    name: 'Adriano Negri',
    title: 'Associate Producer | EA SPORTS FIFA',
    info: 'Producer / designer on the highest-selling sports video game franchise in history: EA SPORTS FIFA.',
    image: 'images/Negri.jpg',
    class: 'show',
    id: 'first',
  },

  {
    name: 'Jake Green',
    title: 'Guides Editor.',
    info: 'Jake is a former freelance writer who now heads up guides for USG. He spends his days dreaming of an X-Files dating-sim and will play literally any game with monkeys in it.',
    image: 'images/Jake2.jpg',
    class: 'show',
    id: 'second',
  },

  {
    name: 'Derek Ree',
    title: 'Scottish commentator',
    info: 'Scottish association football commentator and presenter who currently works for ESPN and the Bundesliga World Feed. He is also an ambassador for Berwick Rangers.',
    image: 'images/Rae.jpg',
    class: 'hide',
    id: 'third',
  },

  {
    name: 'Alex Scott',
    title: 'TV presenter and former Arsenal player.',
    info: 'English television presenter, pundit, and former professional footballer who mostly played as a right-back for Arsenal W.F.C. in the FA WSL.',
    image: 'images/Alex2.jpg',
    class: 'hide',
    id: 'fourth',
  },

  {
    name: 'Kat Bailey',
    title: 'Editor in Chief',
    info: 'Kat Bailey is a former freelance writer and contributor to publications including 1UP, IGN, GameSpot, GamesRadar, and EGM.',
    image: 'images/Kat.jpg',
    class: 'hide',
    id: 'fifth',
  },

  {
    name: 'Lee Dixon',
    title: 'Footballer',
    info: 'English retired professional footballer and pundit who played as a right-back for Arsenal. Dixon was also capped 22 times for England.',
    image: 'images/lee.jpg',
    class: 'hide',
    id: 'sixth',
  },
];

// Rendering speakers
function renderSpeakers(p) {
  const speakerCard = `
        <div class="speaker ${p.class}" id="${p.id}">
            <div class="person"><img src="${p.image}" alt="speakerImage"></div>
            <div class="info">
                <h3>${p.name}</h3>
                <h4><i>${p.title}</i></h4>
                <p>${p.info}</p>
            </div>
        </div>
    `;
  return speakerCard;
}

const speak = document.getElementById('speak');

for (let i = 5; i >= 0; i -= 1) {
  const p = speakers[i];
  speak.insertAdjacentHTML('afterend', renderSpeakers(p));
}

const showSpeakers = () => {
  document.getElementById('showButton').classList.add('hide');
  document.getElementById('hideButton').classList.add('view');
  document.getElementById('third').classList.remove('hide');
  document.getElementById('fourth').classList.remove('hide');
  document.getElementById('fifth').classList.remove('hide');
  document.getElementById('sixth').classList.remove('hide');
};

const hideSpeakers = () => {
  document.getElementById('showButton').classList.remove('hide');
  document.getElementById('hideButton').classList.remove('view');
  document.getElementById('third').classList.add('hide');
  document.getElementById('fourth').classList.add('hide');
  document.getElementById('fifth').classList.add('hide');
  document.getElementById('sixth').classList.add('hide');
};

