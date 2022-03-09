document.addEventListener("DOMContentLoaded", () => {
  const imgCont = document.getElementById("imageHolder");
  const url = "http://www.reddit.com/search.json?q=";
  const textInput = document.getElementById("textInput");
  const submitButton = document.getElementById("submitButton");
  const stopButton = document.getElementById("stopButton");
  stopButton.style.display = "none"
  stopButton.addEventListener("click", (event) => {
    clearInterval(time);
  });
  let picArray = [];
  let count = 0;
  submitButton.addEventListener("click", (event) => {
    const textHead = document.getElementById("header");
    submitButton.remove();
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
            console.log("this is the userthumbnail", userThumbnail);
            picArray.push(userThumbnail);
          }
        }
        console.log("this is picarray", picArray);
        const imgTimer = () => {
          imgCont.src = picArray[count];
          while (count === picArray.length - 1) {
            count = -1;
          }
          count++;
        };
        let time = setInterval(imgTimer, 10000);
        console.log(count);
      });
  });
});
