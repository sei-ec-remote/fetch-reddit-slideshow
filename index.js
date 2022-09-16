const container = document.querySelector('#container');
const searchPictureBtn = document.querySelector('#search-pictures');
const images = document.querySelectorAll("img");
const form = document.querySelector('#form');


picsArray = [];

const makePicsArray = (resArray) => {
    const arr = resArray.data;
    const postsArray = arr.children
    postsArray.forEach(post => {
        const childData = post.data;
        const thumbLink = childData.thumbnail
        if (thumbLink !== "self") {
            linkArray.push(thumbLink)
        }
    })
    console.log(linkArray)
}




const showPicture = (event) => {
    fetch('https://b.thumbs.redditmedia.com/FlTsywm4ZB29Hd2FulttHossypL3ixa5R0_g7R3TOuQ.jpg')
        .then(res => res.json())
        .catch(console.error)
    const picsUrl = event.target.getAttribute('data-url')
  
    fetch(picsUrl)
        .then(res => res.json())
        .catch(console.error)
}
