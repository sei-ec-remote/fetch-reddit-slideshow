document.addEventListener("DOMContentLoaded", () => {
    const imgCont = document.getElementById("imageHolder");
    const url = "http://www.reddit.com/search.json?q="
    const textInput = document.getElementById("textInput");
    const searchButton = document.getElementById("searchButton");
    const stopButton = document.getElementById("stopButton");
    stopButton.style.display = "none"
    stopButton.addEventListener("click", (event) => {
      clearInterval(time);
    });
    let images = [];
    let count = 0;
    searchButton.addEventListener("click", (event) => {
      const textHead = document.getElementById("header");
      searchButton.remove();
      textHead.remove();
      stopButton.style.display='inline-block'
      event.preventDefault();
      fetch(`${url}${textInput.value}`)
        .then((apiResponse) => {
          return apiResponse.json();
        })
        .then((jsonData) => {
          let userInput = jsonData.data.children;
          let userThumbnail = 0;
          for (let i = 0; i < userInput.length; i++) {
            userThumbnail = userInput[i].data.thumbnail;
            if (
              userThumbnail.includes(".png") ||
              userThumbnail.includes(".jpg")
            ) {
              images.push(userThumbnail);
            }
          }
          const imgTimer = () => {
            imgCont.src = images[count];
            while (count === images.length - 1) {
              count = -1;
            }
            count++;
          };
          let time = setInterval(imgTimer, 1000);
          console.log(count);
        });
    });
  });