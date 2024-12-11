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
        iconSize: [40, 35],
        iconAnchor: [20, 30],
        popupAnchor: [0, -30]
    });


    var marker = L.marker([lat, long], {
        icon: vintageIcon,
        draggable: true
    }).addTo(map);

    
    marker.on('dragend', function (event) {
        let position = event.target.getLatLng();
        console.log("New location:", position);
        alert(`Pin moved to: ${position.lat}, ${position.lng}`);
    });

  
    document.getElementById("uploadBtn").addEventListener("click", uploadPhoto);
    document.getElementById("downloadBtn").addEventListener("click", downloadPhoto);
};


function uploadPhoto() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*'; 
    input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            alert(`File "${file.name}" selected for upload.`);
        }
    };
    input.click();
}

//nu merge 
function downloadPhoto() {
    const link = document.createElement('a');
    link.href = 'assets/sample-file.txt'; 
    link.download = 'sample-file.txt'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
