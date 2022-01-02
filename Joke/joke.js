const quote = document.querySelector(".quote");
const btn = document.querySelector("#Qbtn");
const tweetbtn = document.querySelector(".tweet-btn");
const wa = document.querySelector("#wa");

let content="";
const generate = async() => {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  });
  const jokeObj = await jokeData.json();
  quote.innerHTML = jokeObj.joke;

    tweetbtn.href = `https://twitter.com/intent/tweet?text=${jokeObj.joke}`
    wa.href = `https://api.whatsapp.com/send?text=${jokeObj.joke}`
}

document.addEventListener("DOMContentLoaded",generate);
btn.addEventListener("click",generate);

