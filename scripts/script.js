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
        { name: "Brandenburg Gate, Berlin, Germany", file: "Brandenburg Gate Berlin.jpg", lat: 52.5163, lng: 13.3777, region: "Europe" },
        { name: "Colosseum, Rome, Italy", file: "coloseum.jpg", lat: 41.8902, lng: 12.4922, region: "Europe" },
        { name: "Street View, Georgetown, Malaysia", file: "georgetown_malaysia.jpg", lat: 5.4141, lng: 100.3288, region: "Asia" },
        { name: "Historic Center, Havana, Cuba", file: "havanacuba.jpg", lat: 23.1136, lng: -82.3666, region: "North America" },
        { name: "City View, Medellín, Colombia", file: "Medellin.jpg", lat: 6.2442, lng: -75.5812, region: "South America" },
        { name: "Hawa Mahal, Jaipur, India", file: "hawa mahal.jpg", lat: 26.9239, lng: 75.8267, region: "Asia" },
        { name: "Hollywood, USA", file: "hollywood.jpg", lat: 34.0928, lng: -118.3287, region: "North America" },
        { name: "Kyoto, Japan", file: "kyoto.jpg", lat: 35.0116, lng: 135.7681, region: "Asia" },
        { name: "Times Square, New York, USA", file: "newyorkk.jpg", lat: 40.7128, lng: -74.0060, region: "North America" },
        { name: "Palace of Parliament, Bucharest, Romania", file: "parlament.jpg", lat: 44.4268, lng: 26.1025, region: "Europe" },
        { name: "Desert View, Palm Springs, USA", file: "palmsprings.jpg", lat: 33.8303, lng: -116.5453, region: "North America" },
        { name: "Leaning Tower, Pisa, Italy", file: "pisa.jpg", lat: 43.7228, lng: 10.4017, region: "Europe" },
        { name: "Charles Bridge, Prague, Czech Republic", file: "prague.jpg", lat: 50.0755, lng: 14.4378, region: "Europe" },
        { name: "Beach View, Antalya, Turkey", file: "Antalya, Turkey.jpg", lat: 36.8969, lng: 30.7133, region: "Asia" },
        { name: "Skyline View, Houston, USA", file: "Houston Skyline.jpg", lat: 29.7604, lng: -95.3698, region: "North America" },
        { name: "Seaside View, Jeddah, Saudi Arabia", file: "Jeddah, Saudi Arabia.jpg", lat: 21.4858, lng: 39.1925, region: "Asia" },
        { name: "Tropical Beach, Île aux Nattes, Madagascar", file: "L'île aux Nattes _ le paradis de Madagascar .jpg", lat: -17.0500, lng: 49.8500, region: "Africa" },
        { name: "Luanda, Angola", file: "ANGOLA, LUANDA.jpg", lat: -8.8383, lng: 13.2344, region: "Africa" },
        { name: "Lusaka, Zambia", file: "Lusaka.jpg", lat: -15.3875, lng: 28.3228, region: "Africa" },
        { name: "Beachfront, Bali, Indonesia", file: "Bali.jpg", lat: -8.3405, lng: 115.0920, region: "Asia" },
        { name: "Coastal View, Perth, Australia", file: "Australie - Van trip de Perth à Esperance.jpg", lat: -31.9505, lng: 115.8605, region: "Oceania" },
        { name: "Urban Landscape, Seoul, South Korea", file: "seoul.jpg", lat: 37.5665, lng: 126.9780, region: "Asia" },
        { name: "Old Town, Lisbon, Portugal", file: "lisabona.jpg", lat: 38.7223, lng: -9.1393, region: "Europe" },
        { name: "Table Mountain, Cape Town, South Africa", file: "Cape Town.jpg", lat: -33.9249, lng: 18.4241, region: "Africa" },
        { name: "Lake Taupō, Taupō, New Zealand", file: "Lake Taupō.jpg", lat: -38.6857, lng: 176.0702, region: "Oceania" },
        { name: "City Center, Ekaterinburg, Russia", file: "Ekaterinburg.jpg", lat: 56.8389, lng: 60.6057, region: "Europe" },
        { name: "Desert View, Atacama Desert, Chile", file: "Atacama Desert, Chile.jpg", lat: -24.7725, lng: -69.2658, region: "South America" },
        { name: "Bangui, Central African Republic", file: "Bangui, Central African.jpg", lat: 4.3947, lng: 18.5582, region: "Africa" },
        { name: "Mountain View, Cafayate, Argentina", file: "CAFAYATE, SALTA, ARGENTINA.jpg", lat: -26.0722, lng: -65.9767, region: "South America" },
        { name: "City Square, Cluj-Napoca, Romania", file: "Cluj.jpg", lat: 46.7700, lng: 23.5899, region: "Europe" },
        { name: "Nyhavn Canal, Copenhagen, Denmark", file: "copenhagen.jpg", lat: 55.6761, lng: 12.5683, region: "Europe" },
        { name: "Downtown, Dubai, UAE", file: "dubai-night.jpg", lat: 25.276987, lng: 55.296249, region: "Asia" },
        { name: "Old Town, Dubrovnik, Croatia", file: "dubrovnik.jpg", lat: 42.6507, lng: 18.0944, region: "Europe" },
        { name: "Castle Hill, Edinburgh, Scotland", file: "Edinburgh Scotland, rainy day.jpg", lat: 55.9533, lng: -3.1883, region: "Europe" },
        { name: "Pyramids, Cairo, Egypt", file: "Great Sphinx of Giza, Cairo, Egypt.jpg", lat: 29.9753, lng: 31.1376, region: "Africa" },
        { name: "Historic Center, Guadalajara, Mexico", file: "mexicc.jpg", lat: 20.6597, lng: -103.3496, region: "North America" },
        { name: "Islands View, Lofoten Islands, Norway", file: "Lofoten Islands in Norway.jpg", lat: 68.2086, lng: 13.7293, region: "Europe" },
        { name: "Westminster, London, United Kingdom", file: "london.jpg", lat: 51.5074, lng: -0.1278, region: "Europe" },
        { name: "Mosque View, Madina, Saudi Arabia", file: "Madina Munawwarah.jpg", lat: 24.4748, lng: 39.6120, region: "Asia" },
        { name: "Mallorca, Spain", file: "Mallorca, Spain.jpg", lat: 39.6953, lng: 3.0176, region: "Europe" },
        { name: "City Center, Melbourne, Australia", file: "Melbourne, Australia.jpeg", lat: -37.8136, lng: 144.9631, region: "Oceania" },
        { name: "Mykonos, Greece", file: "Mykonos Greece.jpg", lat: 37.4467, lng: 25.3289, region: "Europe" },
        { name: "Historic Fort, San Juan, Puerto Rico", file: "Paseo del morro, San Juan, Puerto Rico cats.jpg", lat: 18.4655, lng: -66.1057, region: "North America" },
        { name: "Miami, USA", file: "South Beach, Miami.jpg", lat: 25.7929, lng: -80.1358, region: "North America" },
        { name: "Christ the Redeemer, Rio de Janeiro, Brazil", file: "Statue in Rio da Janeiro (Brazil).jpg", lat: -22.9068, lng: -43.1729, region: "South America" },
        { name: "Waikīkī Beach, O'ahu, Hawaii, USA", file: "Surfboards, Waikīkī Beach, O'ahu, Hawaii, United States.jpg", lat: 21.2765, lng: -157.8274, region: "North America" },
        { name: "Tropical Island, Tonga", file: "Tonga.jpg", lat: -21.179, lng: -175.1982, region: "Oceania" },
        { name: "Toronto, Canada", file: "Toronto.jpg", lat: 43.6511, lng: -79.3470, region: "North America" },
        { name: "Glacier Views, Juneau, Alaska, USA", file: "Unleash Adventure in Juneau, Alaska.jpg", lat: 58.3019, lng: -134.4197, region: "North America" },
        { name: "City Center, Valletta, Malta", file: "valletta.jpg", lat: 35.8997, lng: 14.5146, region: "Europe" },
        { name: "Volcán Teide, Spain", file: "Volcán Teide.jpg", lat: 28.2724, lng: -16.6425, region: "Europe" },
        { name: "Eiffel Tower, Paris, France", file: "paris.jpg", lat: 48.8566, lng: 2.3522, region: "Europe" },
        { name: "Old Town, Warsaw, Poland", file: "warszawa.jpeg", lat: 52.2297, lng: 21.0122, region: "Europe" },
        { name: "Wildlife Safari, Sri Lanka", file: "Wildlife Safaris in Sri Lanka.jpg", lat: 7.8731, lng: 80.7718, region: "Asia" },
        { name: "Shanghai, China", file: "shanghai.jpg", lat: 31.2304, lng: 121.4737, region: "Asia" },
        { name: "Zanzibar Beach, Tanzania", file: "zanzibar.jpg", lat: -6.1659, lng: 39.2026, region: "Africa" },
        { name: "Overwater Bungalows, Bora Bora, French Polynesia", file: "bora.jpg", lat: -16.5004, lng: -151.7415, region: "Oceania" },
        { name: "Taipei, Taiwan", file: "taiwan.jpg", lat: 25.0330, lng: 121.5654, region: "Asia" },
        { name: "Skyline View, Tampa, Florida, USA", file: "tampa.jpg", lat: 27.9506, lng: -82.4572, region: "North America" },
        { name: "Gardens by the Bay, Singapore", file: "singapore.jpg", lat: 1.3521, lng: 103.8198, region: "Asia" },
        { name: "Tropical Beach, Mauritius", file: "mauritius.jpg", lat: -20.3484, lng: 57.5522, region: "Africa" },
        { name: "Lima, Peru", file: "lima.jpg", lat: -12.0464, lng: -77.0428, region: "South America" },
        { name: "Karachi, Pakistan", file: "karachi.jpg", lat: 24.8607, lng: 67.0011, region: "Asia" },
        { name: "Hagia Sophia, Istanbul, Turkey", file: "instanbul.jpg", lat: 41.0082, lng: 28.9784, region: "Europe/Asia" },
        { name: "Flame Towers, Baku, Azerbaijan", file: "baku.jpg", lat: 40.4093, lng: 49.8671, region: "Asia" },
        { name: "Grand Palace, Bangkok, Thailand", file: "bangkok.jpg", lat: 13.7563, lng: 100.5018, region: "Asia" },
        { name: "Hassan II Mosque, Casablanca, Morocco", file: "casablanca maroc.jpg", lat: 33.5731, lng: -7.5898, region: "Africa" },
        { name: "Chicago, USA", file: "chicago.jpg", lat: 41.8781, lng: -87.6298, region: "North America" },
        { name: "Dakar, Senegal", file: "dakar senegal.jpg", lat: 14.6928, lng: -17.4467, region: "Africa" },
        { name: "Old Quarter, Hanoi, Vietnam", file: "hanoi.jpg", lat: 21.0285, lng: 105.8542, region: "Asia" },
        { name: "Mombasa, Kenya", file: "mombasa.jpg", lat: -4.0435, lng: 39.6682, region: "Africa" },
        { name: "Baiterek Tower, Astana, Kazakhstan", file: "astana.jpg", lat: 51.1694, lng: 71.4491, region: "Asia" }
    ];
    
    
    let markers = [];

    function displayPins(region) {
        markers.forEach(marker => map.removeLayer(marker));
        markers = [];

        photos
            .filter(photo => region === "All Regions" || photo.region.split("/").includes(region))
            .forEach(photo => {
                const marker = L.marker([photo.lat, photo.lng], { icon: vintageIcon }).addTo(map);
                markers.push(marker);
                marker.on("click", () => {
                    displayImage(photo); 
                });
            });

        if (markers.length > 0) {
            const group = new L.featureGroup(markers);
            map.fitBounds(group.getBounds());
        }
    }

    function displayImage(photo) {
        const canvasContainer = document.getElementById("canvas-container");
        const canvas = document.getElementById("imageCanvas");
        const ctx = canvas.getContext("2d");
        const descriptionElem = document.getElementById("description");

        const latElem = document.getElementById("lat");
        const lngElem = document.getElementById("lng");


        canvasContainer.style.display = "block";
        descriptionElem.textContent = photo.name;


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
        latElem.textContent = photo.lat;
        lngElem.textContent = photo.lng;
    }

    document.getElementById("backToMap").addEventListener("click", () => {
        const canvasContainer = document.getElementById("canvas-container");
        canvasContainer.style.display = "none";
    });

    document.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", () => {
            const region = item.textContent.trim();
            displayPins(region === "All Regions" ? "All Regions" : region); 
        });
    });

    displayPins("All Regions");
};