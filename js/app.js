const fetchRedditData = (url) => {
  return (
    fetch(url)
      .then((responseData) => {
        return responseData.json();
      })
      //takes the data and get to the image specific part of the whole
      .then((jsonData) => {
        let tempArray = [];

        let childrenData = jsonData.data.children;
        childrenData.forEach((element) => {
          console.log(element.data.thumbnail);
          if (element.data.thumbnail.slice(-4) === '.jpg') {
            tempArray.push(element.data.thumbnail);
          }
        });
        console.log(tempArray);
        return tempArray;
      })
      .catch((error) => console.log('error!!!!', error))
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const requestUrl = 'http://www.reddit.com/search.json?q=';
  const searchContent = document.getElementById('searchValue');
  const searchButton = document.getElementById('search-button');
  const stopButton = document.getElementById('stop-button');
  const imgTag = document.getElementById('imgTag');
  let interval = 0;
  const title = document.getElementById('title');
  const description = document.getElementById('page-description');
  let continueSlideshow = true;

  searchButton.addEventListener('click', (event) => {
    let inputText = searchContent.value;
    console.log(inputText);

    fetchRedditData(`${requestUrl}${inputText}+nsfw:no`).then((imgArray) => {
      let counter = 0;
      interval = setInterval(() => {
        imgTag.src = imgArray[counter];
        counter = counter + 1;
        if (counter === imgArray.length - 1) {
          counter = 0;
        }
      }, 1500);
    });

    //hide start page forms to show images
    title.style.display = 'none';
    description.style.display = 'none';
    searchButton.style.display = 'none';
    searchContent.style.display = 'none';

    //Stop button
    stopButton.addEventListener('click', () => {
      title.style.display = '';
      description.style.display = '';
      searchButton.style.display = '';
      searchContent.style.display = '';
      searchContent.value = '';
      clearInterval(interval);
    });
  });
});
