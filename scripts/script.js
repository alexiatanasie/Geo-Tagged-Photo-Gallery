window.onload = () => {
    const map = L.map("map").setView([20, 0], 2);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap',
    }).addTo(map);

    const vintageIcon = L.icon({
        iconUrl: "assets/images/vintage pin.jpg",
        iconSize: [40, 35],
        iconAnchor: [20, 30],
        popupAnchor: [0, -30],
    });

    
    const photos = [
        { name: "Brandenburg Gate", file: "Brandenburg Gate Berlin.jpg", lat: 52.5163, lng: 13.3777, description: "Berlin's iconic Brandenburg Gate" },
{ name: "Colombia", file: "colombiajpeg.jpeg", lat: 4.5709, lng: -74.2973, description: "Colorful Colombia streets" },
{ name: "Colosseum", file: "coloseum.jpg", lat: 41.8902, lng: 12.4922, description: "Ancient Roman amphitheater" },
{ name: "Georgetown Malaysia", file: "georgetown_malaysia.jpg", lat: 5.4141, lng: 100.3288, description: "Historic Georgetown, Malaysia" },
{ name: "Havana", file: "havana.jpeg", lat: 23.1136, lng: -82.3666, description: "Vibrant Havana, Cuba." },
{ name: "Hawa Mahal", file: "hawa mahal.jpg", lat: 26.9239, lng: 75.8267, description: "The Palace of Winds, Jaipur" },
{ name: "Hollywood", file: "hollywood.jpg", lat: 34.0928, lng: -118.3287, description: "Hollywood sign, Los Angeles" },
{ name: "Jeddah, Saudi Arabia", file: "jeddahSaudiArabia.jpeg", lat: 21.4858, lng: 39.1925, description: "Scenic Jeddah Corniche" },
{ name: "Kyoto", file: "kyoto.jpg", lat: 35.0116, lng: 135.7681, description: "Temples of Kyoto, Japan" },
{ name: "New Mexico", file: "newMexico.jpg", lat: 34.5199, lng: -105.8701, description: "Landscapes of New Mexico" },
{ name: "New York", file: "newYorkjpeg.jpeg", lat: 40.7128, lng: -74.0060, description: "Skyscrapers of NYC" },
{ name: "New Zealand", file: "newzeelandjpg.jpeg", lat: -40.9006, lng: 174.8860, description: "Beautiful New Zealand" },
{ name: "Palatul Parlamentului", file: "palatulparlamentului.jpg", lat: 44.4268, lng: 26.1025, description: "The Palace of Parliament, Romania" },
{ name: "Palm Springs", file: "palmsprings.jpg", lat: 33.8303, lng: -116.5453, description: "Desert oasis of Palm Springs" },
{ name: "Pisa", file: "pisa.jpg", lat: 43.7228, lng: 10.4017, description: "The Leaning Tower of Pisa" },
{ name: "Prague", file: "pragajpeg.jpeg", lat: 50.0755, lng: 14.4378, description: "Historic Prague streets" },
       ];

    const canvasContainer = document.getElementById("canvas-container");
    const canvas = document.getElementById("imageCanvas");
    const ctx = canvas.getContext("2d");

    const description = document.getElementById("location-description");
    const latElem = document.getElementById("lat");
    const lngElem = document.getElementById("lng");

    photos.forEach(photo => {
        const marker = L.marker([photo.lat, photo.lng], { icon: vintageIcon }).addTo(map);
        marker.on("click", () => {
            displayImage(photo);
        });
    });

    function displayImage(photo) {
        canvasContainer.style.display = "block";

       
        const img = new Image();
        img.src = `assets/images/${photo.file}`;
        img.onload = () => {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width - img.width * scale) / 2;
            const y = (canvas.height - img.height * scale) / 2;

            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        };

       
        description.textContent = photo.description;
        latElem.textContent = photo.lat;
        lngElem.textContent = photo.lng;
    }

   
    canvasContainer.onclick = (e) => {
        if (e.target === canvasContainer) {
            canvasContainer.style.display = "none";
        }
    };
};
        