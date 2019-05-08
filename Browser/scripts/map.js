const form =document.querySelector('form');
const radiuskmfield =document.querySelector('input');

navigator.geolocation.getCurrentPosition( position =>{

console.log(position.coords.longitude,position.coords.latitude);

const myMap =L.map('myMap').setView([position.coords.latitude,position.coords.longitude],13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&cop contributor'
}).addTo(myMap);

L.marker([position.coords.latitude,position.coords.longitude])
.bindPopup('We are here')
.addTo(myMap);


form.addEventListener('submit',ev =>{

ev.preventDefault();

const inputValue =radiuskmfield.value;
const data ={
  radius:inputValue,
  longitude:position.coords.longitude,
  latitude:position.coords.latitude
}

fetch('/shops/getByDistance',{

  method:'post',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify(data)
})
.then(res => res.json())
.then(data => {

data.forEach( function(element ) {

  L.marker([element.location.coordinates[1],element.location.coordinates[0]])
  .bindPopup('We are here')
  .addTo(myMap);



})




console.log(data);


})

.catch(err =>console.log(err))


})
//

})
