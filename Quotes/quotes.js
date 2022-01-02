const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const btn = document.querySelector("#Qbtn");
const tweetbtn = document.querySelector(".tweet-btn");
const wa = document.querySelector("#wa");

let content="";
const generate = async() => {
    const res = await fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
        content = data.content;
        quote.innerHTML = `"${content}"`;
        author.innerHTML = data.author;
        content = content.concat("     -- By ");
        content = content.concat(data.author);
    })
    tweetbtn.href = `https://twitter.com/intent/tweet?text=${content}`
    wa.href = `https://api.whatsapp.com/send?text=${content}`
}

btn.addEventListener("click",generate);