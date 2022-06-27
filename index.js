


// //const container = document.querySelector('#container')
// //const form = document.querySelector('#form')
// //const search = document.querySelector('#search-btn')
//  //('https://i.redd.it/h72g3ogizs691.jpg', reddits.url)
   
//  const onGetRedditCatSuccess = (redditCatArray) => {
//       // console.log('redditCatArray')

//  }
let i = 0
  const mainloop = (redditobject) => {
    
    
    let arrayOfUrls =[] 
    
    //console.log(redditobject.data.children[0].data.url)
    
    for(let i = 0; i < 25; i++ ){
      arrayOfUrls[i] =  redditobject.data.children[i].data.url                      // redditobject.data.children[i].data.url)
       
    }
    const innerLoop =( ) => {
   
    if( i > 24){
      location.reload()
    }

    
    //getImg.style.height(300)
  const getImg = document.querySelector('#catImg')
  catImg.src = arrayOfUrls[i]
  // console.log(arrayOfUrls[0])

  i++
}
  

//let timeSet = setInterval(innerLoop,3000)
  
}




 
// const stopSlide = () => {

// }

// document.querySelector('#stopButton').addEventListener('click ', (Event) =>{
//   clearInterval(timeSet)
// })
// const getImg1 = document.querySelector('#catImg')
// catImg.src = arrayOfUrls[1]
// console.log(arrayOfUrls[1])

// for(let i = 0; i < 25; i++ ){
//   arrayOfUrls[i] =  redditobject.data.children[i].data.url                      // redditobject.data.children[i].data.url)
   
// }


// const getImg2 = document.querySelector('#catImg')
// catImg.src = arrayOfUrls[2]
// console.log(arrayOfUrls[2])

// for(let i = 0; i < 25; i++ ){
//   arrayOfUrls[i] =  redditobject.data.children[i].data.url                      // redditobject.data.children[i].data.url)
   
// }


// const getImg3 = document.querySelector('#catImg')
// catImg.src = arrayOfUrls[3]
// console.log(arrayOfUrls[3])

// setInterval(function() {
                        // redditobject.data.children[i].data.url)
     
//   }

// }5000)
  
//   }

 document.addEventListener('DOMContentLoaded', () =>  { 

   fetch(`http://www.reddit.com/search.json?q=cats+nsfw:no+type:image`)
         
         .then(res => res.json())
         
         .then(mainloop)//onGetRedditCatSuccess

         //.catch()//onGetRedditCatFailure


    ///console.log()



})


// const memeBtn = document.getElementById('memeBtn')
//  const after=''

//  function fetchMemes() {
//    //changeColor

  



//    let parentdiv = document.createElement('div')
//         parentdiv.id = 'memes'
//         fetch(`http://www.reddit.com/r/memes.json`)
//         .then(response => response.json())
//           .then(body => {
//            for (let index = 0; index < body.data.childrenlength; index++){
//             if (body.data.children[index].data.post_hint ==='image'){
//                let div = document.createElement('div')
//                let h4 = document.createElement('h4')
   //             let image = document.createElement('img')
   //             image.src = body.data.children[index].data.url_overridden_by_dest
   //             h4.textContent = body.data.children[index].data.title
   //             div.appendChild(h4)
   //             div.appendChild(image)
   //             parentdiv.appendChild(div)
              

   //          }
   //         }
   //         document.body.appendChild(parentdiv)
           
   //     })

   // }
  