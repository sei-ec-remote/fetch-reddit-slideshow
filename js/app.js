	// Function to add each picture to a ul and render it on the screen under the search bar
	function addRedditPics(add){
		let ul = document.getElementById("search-results");
		let resultImg = document.createElement("img");
		resultImg.setAttribute("class", "resultImg");
		resultImg.src = add;
		ul.appendChild(resultImg);	
	}
	
	// Function to get the url of each image
	function getImgUrl(item) {
		return item.data.url;
	}

	// Function to check if the url is an image
	function checkIsImg(url) {
		return url.includes("i.imgur" || "i.redd");
	}

	// Function to convert the images to .gif files
	function convertGif(filteredUrl){
		return filteredUrl.replace(".gifv", ".gif");
	}

	// Function to fetch the reddit data
	function fetchRedditData(url){
	
		fetch(url)
			.then(function(responseObject){
				// returns raw JSON data
				return responseObject.json();
			})
			.then(function(jsonResults){
				// Parent and child are accessed in JSON data
				let resultsObjectsArr = jsonResults.data.children;
				// Change the results of the JSON data to an array
				let imgUrls = resultsObjectsArr.map(getImgUrl)
				// Images are filtered out of the array by looping through the array to check if each index url is an image
				let onlyImages = imgUrls.filter(checkIsImg);
				// convert gifv to gif files
				let convertedGif = onlyImages.map(convertGif);
				console.log(convertedGif);
				// For each gif image, create an img tag and render it in a ul
				convertedGif.forEach(addRedditPics);
            })

            // if there is an error, console log 'error!!'
    		.catch(function(err){
			console.log("error!!", err);
			});
	}

// Wait for DOM content to load before executing the function
document.addEventListener("DOMContentLoaded", function(){

	document.getElementById("redditResults").addEventListener("submit", function(e){
		e.preventDefault();

		// Hide container1 (title, text, input, submit button)
		let container1 = document.querySelector('.container1')
		container1.style.display = 'none';

		// Display image and render stop button on the screen
		let container2 = document.querySelector('.container2')
		container2.style.display = 'contents';

		// Access user input text
		let userInput = (document.querySelector('input').value);
		// Apply the user input text to modify the JSON query
		let requestURL = `https://www.reddit.com/search.json?q=${userInput}&limit=1000`
		console.log(userInput);
		// Call Fetch function
		fetchRedditData(requestURL);
	})

	// Function for when the stop button is pressed
	document.getElementById('stop-button').addEventListener('click', stopButton)

	function stopButton() {
		let container1 = document.querySelector('.container1')
		container1.style.display = 'contents';
		let container2 = document.querySelector('.container2')
		container2.style.display = 'none';
	}
});