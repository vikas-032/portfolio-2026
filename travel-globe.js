// ===== Travel Destinations Data =====
const destinations = [
    {
        name: "Varanasi, India",
        coordinates: [82.9739, 25.3176],
        status: "Been there ✓",
        date: "Visit",
        description: "One of the world's oldest living cities, set on the banks of the Ganges — a spiritual and cultural heart of India.",
        highlights: "Ganga Aarti, Kashi Vishwanath Temple, old city ghats"
    },
    {
        name: "Chandigarh, India",
        coordinates: [76.7794, 30.7333],
        status: "Been there ✓",
        date: "Visit",
        description: "Planned city known for its modern architecture and the famous Rock Garden and Sukhna Lake.",
        highlights: "Rock Garden, Sukhna Lake, Capitol Complex"
    },
    {
        name: "Ujjain, Madhya Pradesh, India",
        coordinates: [75.7849, 23.1765],
        status: "Been there ✓",
        date: "Visit",
        description: "An ancient city with important Hindu temples and a strong ritual tradition on the Shipra River.",
        highlights: "Mahakaleshwar Temple, Kumbh Mela (nearby), ancient observatories"
    },
    {
        name: "Mumbai, India",
        coordinates: [72.8777, 19.0760],
        status: "Been there ✓",
        date: "Visit",
        description: "India's financial and entertainment capital — bustling, vibrant and full of contrasts.",
        highlights: "Gateway of India, Marine Drive, Bollywood, Colaba Causeway"
    },
    {
        name: "Delhi, India",
        coordinates: [77.1025, 28.7041],
        status: "Been there ✓",
        date: "Visit",
        description: "A city that blends ancient monuments with modern life — rich history and diverse neighborhoods.",
        highlights: "Red Fort, Qutub Minar, India Gate, Chandni Chowk"
    },
    {
        name: "Haryana (Gurugram), India",
        coordinates: [77.0266, 28.4595],
        status: "Been there ✓",
        date: "Visit",
        description: "Rapidly growing urban and business hubs close to Delhi with modern malls and corporate campuses.",
        highlights: "Cyber City (Gurugram), modern dining scenes, easy access to Delhi"
    },
    {
        name: "Bengaluru, India",
        coordinates: [77.5946, 12.9716],
        status: "Been there ✓",
        date: "Visit",
        description: "Known as the Silicon Valley of India — pleasant climate, tech hub, and vibrant café culture.",
        highlights: "Cubbon Park, IT hubs, Lalbagh Botanical Garden"
    },
    {
        name: "Patna, Bihar, India",
        coordinates: [85.1376, 25.5941],
        status: "Been there ✓",
        date: "Visit",
        description: "Capital of Bihar with ancient roots, nearby Buddhist and historical sites, rich culinary traditions.",
        highlights: "Golghar, Takht Shri Patna Sahib, local bazaars"
    },
    {
        name: "Himachal Pradesh (Dharamshala), India",
        coordinates: [76.3210, 32.2190],
        status: "Been there ✓",
        date: "Visit",
        description: "Himachal's hill stations offer cool mountain air, scenic tea gardens, and Tibetan cultural influences.",
        highlights: "Dharamshala, McLeod Ganj, Triund trek, Tibetan monasteries"
    },
    {
        name: "Udaipur, Rajasthan, India",
        coordinates: [73.7125, 24.5854],
        status: "Been there ✓",
        date: "Visit",
        description: "The 'City of Lakes' famed for its palaces, lakeside promenades, and romantic architecture.",
        highlights: "Lake Pichola, City Palace, Jag Mandir, Saheliyon-ki-Bari"
    },
    {
        name: "Agra, India",
        coordinates: [78.0081, 27.1767],
        status: "Been there ✓",
        date: "Visit",
        description: "Home to the Taj Mahal — a must-visit for history and architecture lovers.",
        highlights: "Taj Mahal, Agra Fort, Mehtab Bagh"
    }
];

// ===== Dark Mode =====
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

// ===== Globe Configuration =====
const globeElement = document.getElementById('globe');
const width = globeElement.clientWidth;
const height = 600;

let projection = d3.geoOrthographic()
    .scale(Math.min(width, height) / 2.2)
    .center([0, 0])
    .rotate([0, -30])
    .translate([width / 2, height / 2]);

const path = d3.geoPath().projection(projection);

let autoRotateInterval = null;
const autoRotateCheckbox = document.getElementById('autoRotate');

// ===== Create SVG =====
const svg = d3.select('#globe').append('svg')
    .attr('width', width)
    .attr('height', height);

const threeBg = document.getElementById('three-bg');
let threeRenderer, threeScene, threeCamera, particles;

function initThreeJs() {
    threeRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    threeRenderer.setPixelRatio(window.devicePixelRatio);
    threeRenderer.setSize(threeBg.clientWidth, threeBg.clientHeight);
    threeRenderer.setClearColor(0x000000, 0);
    threeBg.appendChild(threeRenderer.domElement);

    threeScene = new THREE.Scene();
    threeCamera = new THREE.PerspectiveCamera(45, threeBg.clientWidth / threeBg.clientHeight, 0.1, 1000);
    threeCamera.position.set(0, 0, 80);

    const light = new THREE.PointLight(0xffffff, 1.2);
    light.position.set(50, 50, 50);
    threeScene.add(light);

    const particleGeometry = new THREE.BufferGeometry();
    const particlesCount = 1600;
    const positions = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 250;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
        sizes[i] = Math.random() * 2.2 + 0.8;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.PointsMaterial({
        color: 0xd1d5db,
        size: 2,
        transparent: true,
        opacity: 0.45,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });

    particles = new THREE.Points(particleGeometry, particleMaterial);
    threeScene.add(particles);
}

// Background
svg.append('circle')
    .attr('cx', width / 2)
    .attr('cy', height / 2)
    .attr('r', projection.scale())
    .attr('fill', '#e8f4f8')
    .attr('opacity', 0.3);

// Add drag functionality
let isDragging = false;
const drag = d3.drag()
    .on('start', () => {
        isDragging = true;
        stopAutoRotate();
    })
    .on('drag', (event) => {
        const rotate = projection.rotate();
        const k = 75 / projection.scale();
        projection.rotate([
            rotate[0] + event.dx * k,
            rotate[1] - event.dy * k
        ]);
        update();
    })
    .on('end', () => {
        isDragging = false;
        if (autoRotateCheckbox.checked) {
            startAutoRotate();
        }
    });

svg.call(drag);

// Add zoom functionality
svg.call(d3.zoom()
    .scaleExtent([1, 6])
    .on('zoom', (event) => {
        projection.scale(Math.min(width, height) / 2.2 * event.transform.k);
        update();
    }));

// ===== Load World Map Data =====
d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(world => {
    // Add graticule
    const graticule = d3.geoGraticule();
    svg.append('path')
        .datum(graticule)
        .attr('class', 'globe-graticule')
        .attr('d', path);

    // Draw countries
    const countries = topojson.feature(world, world.objects.countries).features;
    
    svg.selectAll('.globe-country')
        .data(countries)
        .enter()
        .append('path')
        .attr('class', 'globe-country')
        .attr('d', path);

    // Add destination markers
    svg.selectAll('.destination-marker')
        .data(destinations)
        .enter()
        .append('g')
        .attr('class', 'destination-marker')
        .attr('transform', d => {
            const coords = projection(d.coordinates);
            return `translate(${coords[0]},${coords[1]})`;
        })
        .on('click', (event, d) => {
            event.stopPropagation();
            showDestinationInfo(d);
            updateActiveDestination(d);
            highlightMarker(event.currentTarget);
        })
        .append('circle')
        .attr('r', 6)
        .attr('fill', '#e74c3c');

    // Create update function
    window.update = () => {
        svg.selectAll('.globe-country')
            .attr('d', path);
        
        svg.selectAll('.destination-marker')
            .attr('transform', d => {
                const coords = projection(d.coordinates);
                return `translate(${coords[0]},${coords[1]})`;
            });
    };

    // Initialize
    update();
    createDestinationsList();
    startAutoRotate();
});

// ===== Auto Rotation =====
function startAutoRotate() {
    if (autoRotateCheckbox.checked && !isDragging) {
        autoRotateInterval = d3.interval(() => {
            const rotate = projection.rotate();
            projection.rotate([rotate[0] + 0.5, rotate[1]]);
            update();
        }, 50);
    }
}

function stopAutoRotate() {
    if (autoRotateInterval) {
        autoRotateInterval.stop();
        autoRotateInterval = null;
    }
}

// Auto rotate toggle
autoRotateCheckbox.addEventListener('change', () => {
    if (autoRotateCheckbox.checked) {
        startAutoRotate();
    } else {
        stopAutoRotate();
    }
});

// ===== Display Destination Info =====
function showDestinationInfo(destination) {
    const infoPanel = document.getElementById('destinationInfo');
    document.getElementById('destName').textContent = destination.name;
    document.getElementById('destStatus').textContent = destination.status;
    document.getElementById('destDate').textContent = destination.date;
    document.getElementById('destDescription').textContent = destination.description;
    document.getElementById('destHighlights').textContent = destination.highlights;
    
    infoPanel.classList.remove('hidden');
}

function updateActiveDestination(destination) {
    document.querySelectorAll('.destination-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.name === destination.name) {
            item.classList.add('active');
        }
    });
}

function highlightMarker(element) {
    document.querySelectorAll('.destination-marker').forEach(marker => {
        marker.classList.remove('active');
    });
    d3.select(element).classed('active', true);
}

// ===== Create Destinations List =====
function createDestinationsList() {
    const list = document.getElementById('destinationsList');
    
    destinations.forEach(destination => {
        const item = document.createElement('div');
        item.className = 'destination-item';
        item.dataset.name = destination.name;
        item.innerHTML = `
            <div class="dest-name">${destination.name}</div>
            <div class="dest-tag">${destination.status}</div>
        `;
        
        item.addEventListener('click', () => {
            showDestinationInfo(destination);
            updateActiveDestination(destination);
            
            // Rotate globe to destination
            const coords = destination.coordinates;
            projection.rotate([-coords[0], -coords[1]]);
            update();
            
            // Highlight marker
            const marker = svg.selectAll('.destination-marker')
                .filter(d => d.name === destination.name)
                .node();
            if (marker) {
                highlightMarker(marker);
            }
        });
        
        list.appendChild(item);
    });
}

// ===== Reset Button =====
document.getElementById('resetButton').addEventListener('click', () => {
    projection.rotate([0, -30]);
    update();
    document.getElementById('destinationInfo').classList.add('hidden');
    document.querySelectorAll('.destination-item').forEach(item => {
        item.classList.remove('active');
    });
});

// ===== Responsive Handle =====
window.addEventListener('resize', () => {
    const newWidth = document.getElementById('globe').clientWidth;
    if (newWidth !== width) {
        location.reload();
    }
});
