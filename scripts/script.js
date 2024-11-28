//from seminar
window.onload = () => {
        
        let lat = 51.5;
        let long = -0.09;

        var map = L.map('map').setView([lat, long], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

       
        var vintageIcon = L.icon({
            iconUrl: 'assets/images/vintage pin.jpg',
            iconSize:     [40, 35], // size of the icon
            iconAnchor:   [20, 30], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
        });
        var marker = L.marker([lat, long], {
            icon: vintageIcon, 
            draggable: true    
        }).addTo(map);
    
        marker.on('dragend', function (event) {
            let position = event.target.getLatLng(); //new location
            console.log("New location:", position);
            alert(`Pin moved to: ${position.lat}, ${position.lng}`);
        });

       
  
}