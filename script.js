const quotes = [
  "A man can be himself only so long as he is alone, and if he does not love solitude, he will not love freedom, for it is only when he is alone that he is really free.  -Arthur Schopenhauer",
  "For having lived long, I have experienced many instances of being obliged, by better information or fuller consideration, to change opinions, even on important subjects, which I once thought right but found to be otherwise.  -Benjamin Franklin",
  "Sometimes we make the process more complicated than we need to. We will never make a journey of a thousand miles by fretting about how long it will take or how hard it will be. We make the journey by taking each day step by step and then repeating it again and again until we reach our destination.  -Joseph B. Wirthlin",
  "You are a product of your environment. So choose the environment that will best develop you toward your objective. Analyze your life in terms of its environment. Are the things around you helping you toward success - or are they holding you back?  -W. Clement Stone",
  "You must learn day by day, year by year to broaden your horizon. The more things you love, the more you are interested in, the more you enjoy, the more you are indignant about, the more you have left when anything happens.  -Ethel Barrymore",
  "Wisdom is the right use of knowledge. To know is not to be wise. Many men know a great deal, and are all the greater fools for it. There is no fool so great a fool as a knowing fool. But to know how to use knowledge is to have wisdom.  -Charles Spurgeon",
  "The more often we see the things around us - even the beautiful and wonderful things - the more they become invisible to us. That is why we often take for granted the beauty of this world: the flowers, the trees, the birds, the clouds - even those we love. Because we see things so often, we see them less and less.  -Joseph B. Wirthlin",
  "It put our energies to sleep and made visionaries of us - dreamers and indolent... It is good to begin life poor; it is good to begin life rich - these are wholesome; but to begin it prospectively rich! The man who has not experienced it cannot imagine the curse of it.  -Mark Twain",
];

let wordList = [];
let wordIndex = 0;
let start = Date.now();
const quoteElem = document.getElementById("quote");
const messageElem = document.getElementById("message");
const textElem = document.getElementById("textfield");

document.getElementById("start-btn").addEventListener("click", () => {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  wordList = quote.split(" ");
  wordIndex = 0;

  const spanWords = wordList.map(function (word) {
    return `<span>${word} </span>`;
  });
  quoteElem.innerHTML = spanWords.join("");
  quoteElem.childNodes[0].className = "highlight";
  messageElem.innerText = "";
  textElem.value = "";
  textElem.focus();
  start = new Date().getTime();
});

textElem.addEventListener("input", () => {
  const wordSelected = wordList[wordIndex];
  const textValue = textElem.value;

  if (textValue === wordSelected && wordIndex === wordList.length - 1) {
    const elapsedTime = new Date().getTime() - start;
    const message = `You finished in ${elapsedTime / 1000} seconds.`;

    messageElem.innerText = message;
  } else if (textValue.endsWith(" ") && textValue.trim() === wordSelected) {
    textElem.value = "";
    wordIndex++;

    for (const wordElem of quoteElem.childNodes) {
      wordElem.className = "";
    }

    quoteElem.childNodes[wordIndex].className = "highlight";
  } else if (wordSelected.startsWith(textValue)) {
    textElem.className = "";
  } else {
    textElem.className = "error";
  }
});
