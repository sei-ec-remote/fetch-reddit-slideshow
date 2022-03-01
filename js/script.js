document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submitButton");
  const stopButton = document.getElementById("stop-button");
  const searchTerm = document.getElementById("search");
  const slideshow = document.getElementById("slideshow");
  const message = document.getElementById("message");
  const title = document.getElementById("title");
  //   submitButton.addEventListener("click", () => {
  //     console.log(requestURL);
  //   });
  // });
  submitButton.addEventListener("click", () => {
    const requestURL = `http://www.reddit.com/search.json?q=${searchTerm.value}+nsfw:no`;

    submitButton.style.display = "none";
    message.style.display = "none";
    searchTerm.style.display = "none";
    stopButton.style.display = "block";
    slideshow.style.display = "block";
    title.style.display = "none";

    fetch(requestURL)
      .then((apiResponse) => {
        return apiResponse.json();
      })
      .then((jsonData) => {
        // console.log(jsonData.data.children);
        const children = jsonData.data.children;
        let array = [];
        // console.log("this is the data we want: ", pictures);
        for (let i = 0; i < children.length; i++) {
          array.push(children[i].data.thumbnail);
        }

        let i = 0;
        setInterval(() => {
          slideshow.src = array[i];
          i++;
          console.log("pictures", slideshow);
          if (array.length === i) {
            i = 0;
          }
        }, 2000);
      })
      .catch((error) => {
        // any errors encountered in the request or the .then promises above will be passed into this callback
        console.log("Oh no, there's been an error!", error);
      });
    //need to somehow add these photos to the page
  });

  stopButton.addEventListener("click", () => {
    submitButton.style.display = "block";
    message.style.display = "block";
    searchTerm.style.display = "block";
    stopButton.style.display = "none";
    slideshow.style.display = "none";
    slideshow.style.display = "block";
    location.reload();
  });
});
