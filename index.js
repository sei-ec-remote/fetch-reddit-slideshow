const container = document.querySelector('#container');
const searchPictureBtn = document.querySelector('#search-pictures');
const images = document.querySelectorAll("img");
const form = document.querySelector('#form');


picsArray = [];
let stopBtn = document.getElementById("stop-picture");
stopBtn.style.visibility = "hidden";

let searchImg = document.getElementById("search-img");
let title = document.getElementById("title");
let inptBox = document.getElementById("inpt-box");
let submitBtn = document.getElementById("submit-btn");

const makePicsArray = () => {
    keyWord = inptBox.value;
    let url = `http://www.reddit.com/search.json?q=${keyWord}+nsfw:no`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => 
        {
            for (var i = 0; i < 25; i++)
            {
                picsArray.push(data.data.children[i].data.thumbnail);
            }
        })
    stopBtn.style.visibility = "visible";
    title.style.visibility = "hidden";
    inptBox.style.visibility = "hidden";
    submitBtn.style.visibility = "hidden";

    startShow();
}


let idx = 0;

const updateSlide = () => {
    if (picsArray[idx] == "self")
    {
        idx = idx + 1;
    }
    searchImg.src = picsArray[idx];
    idx = idx + 1;
}

let timer;

const startShow = () => {
    timer = setInterval(updateSlide, 1000);
}

function stopSlide()
{
    clearInterval(timer);
    searchImg.src = "";
    title.style.visibility = "visible";
    inptBox.style.visibility = "visible";
    submitBtn.style.visibility = "visible";
    stopBtn.style.visibility = "hidden";
    picsArray = [];
}

