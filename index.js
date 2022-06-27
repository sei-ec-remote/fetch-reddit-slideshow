
document.addEventListener('DOMContentLoaded', () => {
     fetch(`https://www.reddit.com/r/aww.json`)
      .then(res=>res.json())
      .then(data=>{
          let img
          img = document.getElementById('rdt');
          for(let i=0;i<data.data.children.length;i++){
              img.innerHTML +="<img src='" + data.data.children[i].data.thumbnail +"' width=300 height=300/>" 
          }
         console.log(data.data.children[0].data.thumbnail)
     })
      .catch(err=>console.log(err))
 })



// WORKING CODE
//  document.addEventListener('DOMContentLoaded', () => {
//      fetch(`https://www.reddit.com/r/aww.json`)
//       .then(res=>res.json())
//       .then(data=>{
//           let img
//           img = document.getElementById('rdt');
//           for(let i=0;i<data.data.children.length;i++){
//               img.innerHTML +="<img src='" + data.data.children[i].data.thumbnail +"' width=300 height=300/>" 
//           }
//           console.log(data.data.children[0].data.thumbnail)
//       })
//       .catch(err=>console.log(err))
//   })