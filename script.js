const search = document.getElementById("search")
const imageDisplay = document.getElementById("scuz")
const stop = document.getElementById("stop")
let goatArray = []
let imageIndex = 0

const changeImage = () => {
  imageDisplay.setAttribute("src", goatArray[imageIndex].data.url)
  imageIndex = (imageIndex + 1) % goatArray.length
  setTimeout(changeImage, 2000)
}

const onSucces = (stuff) => {
  children = stuff.data.children

  const imageArr = children.filter((datNew) => {
    if (datNew.data.url.includes("imgur")) {
      return false
    } else {
      return true
    }
  })
  goatArray = imageArr
  changeImage()
  searchHide()
}

const onFailure = () => {
  console.log("failure")
}

const searchHide = () => {
  search.style.display = "none"
  greeeting.style.display = "none"
  stopIt.style.display = "flex"
}

noMoreShow = () => {
  clearTimeout(changeImage)
  imageDisplay.removeAttribute("src")
  search.style.display = "flex"
  greeeting.style.display = "flex"
  stopIt.style.display = "none"
  goatArray = []
}

stopIt.addEventListener("click", noMoreShow)

search.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    url = `http://www.reddit.com/search.json?q=${search.value}+nsfw:no+type:image`
    try {
      const res = await fetch(url)
      const data = await res.json()
      onSucces(data)
    } catch (e) {
      console.log("error")
    }
  }
})
