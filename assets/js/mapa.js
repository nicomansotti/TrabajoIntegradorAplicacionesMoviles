const tilesProvider = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

let myMap = L.map("myMap").setView([-34.922883, -57.956317], 13)

L.tileLayer(tilesProvider, {
    maxZoom: 18
}
).addTo(myMap);

let marker = L.marker([-34.922883, -57.956317]).addTo(myMap);
marker.bindPopup("<b>HOLA!</b><br>Aqui estamos").openPopup();
