const images = [
  {
    src: "https://images4.penguinrandomhouse.com/cover/9781400079988",
    alt: "War and Peace Book Cover Picture"
  },
  {
    src: "https://images3.penguinrandomhouse.com/cover/9780679722762",
    alt: "Ulysses Book Cover Picture"
  },
  {
    src: "https://images2.penguinrandomhouse.com/cover/9780143126393",
    alt: "The Shadow of the Wind Book Cover Picture"
  },
  {
    src: "https://images3.penguinrandomhouse.com/cover/9780345339706",
    alt: "The Fellowship of the Ring Book Cover Picture"
  },
  {
    src: "https://images3.penguinrandomhouse.com/cover/9780812976717",
    alt: "The Satanic Verses Book Cover Picture"
  },
  {
    src: "https://images4.penguinrandomhouse.com/cover/9780679407584",
    alt: "Don Quixote Book Cover Picture"
  },
  {
    src: "https://images2.penguinrandomhouse.com/cover/9780593178553",
    alt: "His Dark Materials: The Golden Compass (HBO Tie-In Edition) Book Cover Picture"
  },
  {
    src: "https://images3.penguinrandomhouse.com/cover/9780452284234",
    alt: "1984 Book Cover Picture"
  },
  {
    src: "https://images2.penguinrandomhouse.com/cover/9781594631931",
    alt: "The Kite Runner Book Cover Picture"
  },
]

const button = document.querySelector('button');
const imgElement = document.querySelector('.img-res')


button.addEventListener('click', getRandomImg)

function getRandomImg() {
  const selectedImg = Math.floor( Math.random() * images.length );
  
  imgElement.src = images[selectedImg].src;
  imgElement.alt = images[selectedImg].alt
}