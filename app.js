
//data array of all 55 active Buc-ee's locations.

const map = L.map('map').setView([33.0000, -96.0000], 4);

// Use standard OpenStreetMap tiles to guarantee visibility
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add this line to force the map to render after the browser paints the page
setTimeout(() => { map.invalidateSize(); }, 500);

const buceesData = [
  // TEXAS (36 LOCATIONS)
  { city: "Alvin", state: "TX", type: "Traditional", pumps: 0, evCharger: false, carwash: false, lat: 29.431221, lng: -95.244342 },
  { city: "Amarillo", state: "TX", type: "Mega-Center", pumps: 108, evCharger: true, carwash: false, lat: 35.191632, lng: -101.716183 },
  { city: "Angleton (Mulberry St N)", state: "TX", type: "Traditional", pumps: 0, evCharger: false, carwash: false, lat: 29.171224, lng: -95.424611 },
  { city: "Angleton (Loop 274)", state: "TX", type: "Traditional", pumps: 0, evCharger: false, carwash: false, lat: 29.160105, lng: -95.441113 },
  { city: "Angleton (Mulberry St S)", state: "TX", type: "Traditional", pumps: 0, evCharger: false, carwash: false, lat: 29.161144, lng: -95.452243 },
  { city: "Bastrop", state: "TX", type: "Mega-Center", pumps: 120, evCharger: true, carwash: false, lat: 30.124505, lng: -97.300586 },
  { city: "Baytown", state: "TX", type: "Mega-Center", pumps: 96, evCharger: true, carwash: true, lat: 29.799444, lng: -94.900833 },
  { city: "Brazoria", state: "TX", type: "Traditional", pumps: 12, evCharger: false, carwash: false, lat: 29.049444, lng: -95.571667 },
  { city: "Cypress", state: "TX", type: "Traditional", pumps: 24, evCharger: false, carwash: true, lat: 29.983056, lng: -95.733333 },
  { city: "Denton", state: "TX", type: "Mega-Center", pumps: 122, evCharger: true, carwash: true, lat: 33.159444, lng: -97.108611 },
  { city: "Eagle Lake", state: "TX", type: "Traditional", pumps: 8, evCharger: false, carwash: false, lat: 29.589167, lng: -96.331944 },
  { city: "Ennis", state: "TX", type: "Mega-Center", pumps: 104, evCharger: true, carwash: false, lat: 32.302500, lng: -96.634167 },
  { city: "Fort Worth", state: "TX", type: "Mega-Center", pumps: 122, evCharger: true, carwash: false, lat: 32.999444, lng: -97.316111 },
  { city: "Freeport (Hwy 332)", state: "TX", type: "Traditional", pumps: 16, evCharger: false, carwash: false, lat: 28.966944, lng: -95.385278 },
  { city: "Freeport (Brazosport Blvd)", state: "TX", type: "Traditional", pumps: 12, evCharger: false, carwash: false, lat: 28.9694883, lng: -95.3699512},
  { city: "Giddings", state: "TX", type: "Traditional", pumps: 16, evCharger: false, carwash: false, lat: 30.178611, lng: -96.913056 },
  { city: "Hillsboro", state: "TX", type: "Mega-Center", pumps: 120, evCharger: true, carwash: false, lat: 32.040278, lng: -97.106111 },
  { city: "Katy", state: "TX", type: "Mega-Center", pumps: 120, evCharger: true, carwash: true, lat: 29.784722, lng: -95.842778 },
  { city: "Lake Jackson (Oyster Creek)", state: "TX", type: "Traditional", pumps: 12, evCharger: false, carwash: false, lat: 29.040833, lng: -95.438889 },
  { city: "Lake Jackson (Hwy 2004)", state: "TX", type: "Traditional", pumps: 16, evCharger: false, carwash: false, lat: 29.056944, lng: -95.411667 },
  { city: "Lake Jackson (Hwy 332)", state: "TX", type: "Traditional", pumps: 16, evCharger: false, carwash: true, lat: 29.043333, lng: -95.474444 },
  { city: "League City", state: "TX", type: "Mega-Center", pumps: 96, evCharger: false, carwash: false, lat: 29.498895, lng: -95.056456 },  
  { city: "Luling", state: "TX", type: "Mega-Center", pumps: 120, evCharger: true, carwash: false, lat: 29.650462, lng: -97.594039 },  
  { city: "Madisonville", state: "TX", type: "Mega-Center", pumps: 96, evCharger: false, carwash: false, lat: 30.965343, lng: -95.880330 },  
  { city: "Melissa", state: "TX", type: "Mega-Center", pumps: 100, evCharger: true, carwash: false, lat: 33.271547, lng: -96.591891 },  
  { city: "New Braunfels", state: "TX", type: "Mega-Center", pumps: 120, evCharger: true, carwash: false, lat: 29.726334, lng: -98.078333 },  
  { city: "Pearland (Main St)", state: "TX", type: "Traditional", pumps: 18, evCharger: false, carwash: false, lat: 29.529881, lng: -95.275323 },  
  { city: "Pearland (Shadow Creek)", state: "TX", type: "Mega-Center", pumps: 84, evCharger: true, carwash: false, lat: 29.581233, lng: -95.391456 },  
  { city: "Port Lavaca", state: "TX", type: "Traditional", pumps: 12, evCharger: false, carwash: false, lat: 28.609921, lng: -96.649155 },  
  { city: "Richmond", state: "TX", type: "Traditional", pumps: 20, evCharger: false, carwash: true, lat: 29.584144, lng: -95.834015 },
  { city: "Royse City", state: "TX", type: "Mega-Center", pumps: 120, evCharger: true, carwash: false, lat: 32.911389, lng: -96.302778 },
  { city: "Temple", state: "TX", type: "Mega-Center", pumps: 120, evCharger: true, carwash: true, lat: 31.136073, lng: -97.328574 },  
  { city: "Terrell", state: "TX", type: "Mega-Center", pumps: 120, evCharger: true, carwash: true, lat: 32.716542, lng: -96.321132 },  
  { city: "Texas City", state: "TX", type: "Mega-Center", pumps: 104, evCharger: true, carwash: false, lat: 29.428525, lng: -95.063266 },  
  { city: "Waller", state: "TX", type: "Mega-Center", pumps: 100, evCharger: true, carwash: false, lat: 30.071477, lng: -95.918903 },
  { city: "Wharton", state: "TX", type: "Mega-Center", pumps: 60, evCharger: false, carwash: false, lat: 29.325569, lng: -96.123639 },  

  // ALABAMA (4 LOCATIONS)
  { city: "Athens", state: "AL", type: "Mega-Center", pumps: 120, evCharger: true, carwash: true, lat: 34.783611, lng: -86.942778 },
  { city: "Auburn", state: "AL", type: "Mega-Center", pumps: 120, evCharger: true, carwash: false, lat: 32.584167, lng: -85.526111 },
  { city: "Leeds", state: "AL", type: "Mega-Center", pumps: 100, evCharger: true, carwash: false, lat: 33.544444, lng: -86.586667 },
  { city: "Robertsdale", state: "AL", type: "Mega-Center", pumps: 124, evCharger: true, carwash: false, lat: 30.634167, lng: -87.676667 },

  // FLORIDA (2 LOCATIONS)
  { city: "Daytona Beach", state: "FL", type: "Mega-Center", pumps: 104, evCharger: true, carwash: true, lat: 29.228333, lng: -81.100833 },
  { city: "Saint Augustine", state: "FL", type: "Mega-Center", pumps: 104, evCharger: true, carwash: false, lat: 30.001667, lng: -81.463889 },

  // GEORGIA (3 LOCATIONS)
  { city: "Adairsville", state: "GA", type: "Mega-Center", pumps: 120, evCharger: true, carwash: true, lat: 34.359444, lng: -84.918611 },
  { city: "Brunswick", state: "GA", type: "Mega-Center", pumps: 120, evCharger: true, carwash: false, lat: 31.240556, lng: -81.491389 },
  { city: "Fort Valley", state: "GA", type: "Mega-Center", pumps: 120, evCharger: true, carwash: false, lat: 32.551944, lng: -83.743333 },

  // KENTUCKY (2 LOCATIONS)
  { city: "Richmond", state: "KY", type: "Mega-Center", pumps: 120, evCharger: true, carwash: false, lat: 37.712778, lng: -84.308056 },
  { city: "Smiths Grove", state: "KY", type: "Mega-Center", pumps: 120, evCharger: true, carwash: false, lat: 37.054444, lng: -86.208611 },

  // TENNESSEE (2 LOCATIONS)
  { city: "Crossville", state: "TN", type: "Mega-Center", pumps: 120, evCharger: true, carwash: false, lat: 35.987500, lng: -85.006944 },
  { city: "Kodak", state: "TN", type: "Mega-Center", pumps: 120, evCharger: true, carwash: true, lat: 35.985000, lng: -83.619444 },

  // SINGLE STORE STATES (6 LOCATIONS)
  { city: "Berthoud", state: "CO", type: "Mega-Center", pumps: 116, evCharger: true, carwash: false, lat: 40.333611, lng: -104.983333 },
  { city: "Florence", state: "SC", type: "Mega-Center", pumps: 120, evCharger: true, carwash: false, lat: 34.241667, lng: -79.712500 },
  { city: "Huber Heights", state: "OH", type: "Mega-Center", pumps: 120, evCharger: true, carwash: false, lat: 39.882500, lng: -84.051944 },
  { city: "Mount Crawford", state: "VA", type: "Mega-Center", pumps: 120, evCharger: true, carwash: false, lat: 38.358611, lng: -78.919444 },
  { city: "Pass Christian", state: "MS", type: "Mega-Center", pumps: 120, evCharger: true, carwash: false, lat: 30.393889, lng: -89.256111 },
  { city: "Springfield", state: "MO", type: "Mega-Center", pumps: 120, evCharger: true, carwash: false, lat: 37.265556, lng: -93.256667 }
];



const markers = []; // global list for pins

// loop through data
buceesData.forEach(store => {

  // add coordinate to pin the "L" in "L.marker" uses dot notation to look into leaflets JS
  const marker = L.marker([store.lat, store.lng]).addTo(map); // get the coordinates and pinn it on the map
  
  marker.storeData = store; // give the pin its data
  markers.push(marker); // put pin in the list

  // Build the popup stats display layout on html
    let popupContent = `
        <div style="font-family: 'Segoe UI', sans-serif; min-width: 160px; padding: 4px;">
            <h3 style="margin: 0 0 6px 0; color: #E87722; font-size: 1.1rem; border-bottom: 2px solid #FFD700; padding-bottom: 2px;">
                ${store.city}, ${store.state}
            </h3>
            <p style="margin: 4px 0; font-size: 0.9rem; color: #333;"><strong>Type:</strong> ${store.type}</p>
            <p style="margin: 4px 0; font-size: 0.9rem; color: #333;"><strong>Pumps:</strong> ${store.pumps}</p>
    `;

    // if store has ev charger add it to display
    if (store.evCharger) {
        popupContent += `<p style="margin: 4px 0; font-size: 0.85rem; color: #16a34a; font-weight: 600;">⚡ Has EV Charging</p>`;
    }

    // same for car washes
    if (store.carwash) {
        popupContent += `<p style="margin: 0; font-size: 0.85rem; color: #2563eb; font-weight: 600;">🧼 Has Car Wash</p>`;
    }

    // if nothing special dont add it
    popupContent += `</div>`;

    marker.bindPopup(popupContent);
}); // loop closes here

// filter to car wahes and ev charging
function filterMarkers(filterType) {
    markers.forEach(marker => {
        const store = marker.storeData;
        let shouldShow = false;

        if (filterType === 'all') shouldShow = true;
        else if (filterType === 'ev' && store.evCharger) shouldShow = true;
        else if (filterType === 'wash' && store.carwash) shouldShow = true;

        if (shouldShow) {
            marker.addTo(map);
        } else {
            map.removeLayer(marker);
        }
    });
}