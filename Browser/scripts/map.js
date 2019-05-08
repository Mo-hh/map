navigator.geolocation.getCurrentPosition( position =>{

console.log(position.coords.longitude,position.coords.latitude);

const myMap =L.map('myMap').setView([position.coords.latitude,position.coords.longitude],5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&cop contributor'
}).addTo(myMap);

L.marker([position.coords.latitude,position.coords.longitude])
.bindPopup('We are here')
.addTo(myMap);

});
