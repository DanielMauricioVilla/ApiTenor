
const input = document.querySelector (".search");
const containerCard = document.querySelector (".cardContainer");
const btn = document.querySelector (".btn");

//AIzaSyDwkoft2ceD3rIO5VXMc_RM7q2VdL-cvfU

window.addEventListener ("DOMContentLoaded", ()=>{
    let URL = `https://tenor.googleapis.com/v2/featured?key=AIzaSyDwkoft2ceD3rIO5VXMc_RM7q2VdL-cvfU&client_key=my_test_app`;
    apiTenor (URL);
})

input.addEventListener ("keyup", ()=>{
    let URL = `https://tenor.googleapis.com/v2/search?q=${input.value}&key=AIzaSyDwkoft2ceD3rIO5VXMc_RM7q2VdL-cvfU`;
    if (input.value == ""){
        URL = `https://tenor.googleapis.com/v2/featured?key=AIzaSyDwkoft2ceD3rIO5VXMc_RM7q2VdL-cvfU&client_key=my_test_app`;
    }
    apiTenor (URL);
})

btn.addEventListener ("click", ()=>{
    let URL = `https://tenor.googleapis.com/v2/featured?pos=next&key=AIzaSyDwkoft2ceD3rIO5VXMc_RM7q2VdL-cvfU&client_key=my_test_app`;
    apiTenor (URL);
})

function apiTenor (URL){
    fetch (URL)
    .then ( response => response.json())
    .then(data => {
        containerCard.textContent = (null);
        console.log(data);
        data.results.map (element => createCard (element))
    })


}

function createCard  (element) {

    let divCard = document.createElement ("div");
    let img = document.createElement ("img");
    let h2 = document.createElement ("h2");

    img.src = element.media_formats.gif.url;
    img.setAttribute('alt',element.content_description);
    h2.textContent = element.content_description;

    divCard.classList = "card";
    img.classList = "imgCard";
    h2.classList = "nameCard";

    divCard.appendChild (img);
    divCard.appendChild (h2);
    containerCard.appendChild (divCard);

}

