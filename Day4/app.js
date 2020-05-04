const quotes = document.querySelector('p.quotes');
const author = document.querySelector('p.author');

var data = [
  {
    quote:  'Try not to become a man of success but rather to become a man of value.',
    author: 'Albert Einstein',
    },
  {
    quote:  'I have no special talent. I am only passionately curious.',
    author: 'Albert Einstein',
    },
    {
    quote:  'If you judge people, you have no time to love them.',
    author: 'Mother Teresa',
    },
    {
    quote:  'The greatest wealth is to live content with little.',
    author: 'Plato',
    },
    {
    quote: 'The future belongs to those who prepare for it today.',
    author: 'Malcolm X',
    },
    {
    quote: 'The successful warrior is the average man, with laser-like focus.',
    author: 'Bruce Lee',
    },
    {
    quote: 'Don’t count the days, make the days count.',
    author: 'Muhammad Ali',
    },
    {
    quote: 'Well done is better than well said.',
    author: 'Benjamin Franklin',
    },
];

const randomQuote = () => {
  const quotes = Math.floor( Math.random() * data.length );
  return (data[quotes]);
}

const populateUI = () => {
  const arr = randomQuote();

  quotes.innerHTML = `"${arr.quote}"`;
  author.innerHTML = `- ${arr.author}`;
}

setInterval(populateUI, 30000);