fetch("https://picsum.photos/v2/list").then((data)=>{
    return data.json()
})  .then((images) => {
    images.forEach(img => {
      let imageElement = document.createElement("img");
      imageElement.src = img.download_url;
      document.body.appendChild(imageElement);
    });
  });


async function getImages(){
    var data=await fetch("https://picsum.photos/v2/list")
    var images=await data.json()
  images.forEach(img => {
    let imageElement = document.createElement("img");
    imageElement.src = img.download_url;
    document.body.appendChild(imageElement);
  });
}
getImages()



