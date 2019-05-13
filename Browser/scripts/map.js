const form =document.querySelector('form');
const radiuskmfield =document.querySelector('input');

 navigator.geolocation.getCurrentPosition(  position =>{

console.log(position.coords.longitude,position.coords.latitude);

const myMap =L.map('myMap').setView([position.coords.latitude,position.coords.longitude],13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&cop contributor'
}).addTo(myMap);

L.marker([position.coords.latitude,position.coords.longitude])
.bindPopup('We are here')
.addTo(myMap);


const layerGroup =L.layerGroup().addTo(myMap);


form.addEventListener('submit',async ev =>{

ev.preventDefault();

const inputValue =radiuskmfield.value;
radiuskmfield.value='';


const data ={
  radius:inputValue,
  longitude:position.coords.longitude,
  latitude:position.coords.latitude
}

const response= await   fetch('/shops/getByDistance',{  method:'post',
   headers:{'Content-Type':'application/json'},
   body:JSON.stringify(data)})
   const restaurants  =await  response.json();
   console.log(restaurants);
 layerGroup.clearLayers();
   restaurants.forEach( function(element ) {

     L.marker([element.location.coordinates[1],element.location.coordinates[0]])//1 then 0 to avoide another location //
     .bindPopup(`<h3>Name of the shop:${element.name}</h3>
                 <p>Cheapest dish:<strong>${element.cheapesDish}$ </strong></p>
                   <p>Distance from you ${Math.round(element.dist.calculated)}</p>`)

     .addTo(layerGroup);




   })

   myMap.setView([position.coords.latitude,position.coords.longitude],4);






})
















})





//
