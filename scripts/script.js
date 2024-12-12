window.onload = () => {
    let lat = 51.5;
    let long = -0.09;
    
    var map = L.map("map").setView([lat, long], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    
    var vintageIcon = L.icon({
        iconUrl: "assets/images/vintage pin.jpg",
        iconSize: [40, 35],
        iconAnchor: [20, 30],
        popupAnchor: [0, -30],
    });
    
    let marker = null; 
    let uploadedPhoto = null; 
    
   
    document.getElementById("uploadBtn").addEventListener("click", () => {
        alert("Click on the map to place the pin.");
        
        
        map.once("click", function (event) {
            const { lat, lng } = event.latlng;
    
            
            if (marker) {
                map.removeLayer(marker);
            }
    
           
            marker = L.marker([lat, lng], {
                icon: vintageIcon,
                draggable: true,
            }).addTo(map);
    
          
            alert(`Pin placed at: ${lat}, ${lng}`);
    
           
            marker.on("dragend", function (event) {
                let position = event.target.getLatLng();
                console.log("New location:", position);
                alert(`Pin moved to: ${position.lat}, ${position.lng}`);
            });
    
           
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";
            input.onchange = (event) => {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        uploadedPhoto = e.target.result; 
                        marker.bindPopup(
                            `<img src="${uploadedPhoto}" alt="Uploaded Photo" style="width:150px; height:auto;">`
                        ).openPopup();
                        alert(`Photo uploaded and displayed on pin.`);
                    };
                    reader.readAsDataURL(file);
                }
            };
            input.click();
        });
    });
    
   
    document.getElementById("downloadBtn").addEventListener("click", () => {
        if (uploadedPhoto) {
            const link = document.createElement("a");
            link.href = uploadedPhoto;
            link.download = "downloaded-photo.png";
            link.click();
            alert("Photo downloaded successfully!");
        } else {
            alert("No photo uploaded to download.");
        }
    });
    
};

