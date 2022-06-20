let images = [];
let i = 0; 

function setImage() {
  document.slide.src = images[i] || '';
}

function changeImg() {
  if (i < images.length) {
    i++;
  } else {
    i = 0;
  }
  setImage();
}

function changeBack() {
  if (i < images.length - images.length + 1) {
    i = images.length - 1;
  } else {
    i--;
  }
  setImage();
}

document.getElementById('forward').addEventListener('click', changeImg);
document.getElementById('back').addEventListener('click', changeBack);

function reply_click(clicked_id) {
  images = [];
  i = 0;
  setImage();
  
  $.getJSON(
    'https://www.reddit.com/r/memes/.json',
    function (result) {
      for (let i = 0; i < result.data.children.length; i++) {
        let imagesOnly = result.data.children[i].data;

        if (
          imagesOnly.thumbnail !== 'self' &&
          imagesOnly.post_hint === 'image'
        ) {
          let items = result.data.children[i].data.url;
          images.push(items);
        }
      }

      setImage();
    }
  );
}

$(document).on('click', '.butts', function () {
  reply_click(this.id);
});


