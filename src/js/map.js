// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1Ijoib3NrYXJjc2YiLCJhIjoiY2tldGxhYXNxMXB5ZTJ4bjF2Y2xlc3I1aSJ9._3HTH3ygbV1gMxUcuSnHFg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [144.9631, -37.8136], // starting position [lng, lat]
    zoom: 7, // starting zoom
    hash: true //hash showing changes in lng, lat
});
var marker = new mapboxgl.Marker()
    .setLngLat([144.9631, -37.8136])
    .addTo(map);

map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    showUserLocationn: true 
}));