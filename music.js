const albums = [
    {
        title: 'KYA BAAT AA',
        artist: 'Karan Aujla',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=kya+baat+aa+karan+aujla'
    },
    {
        title: 'CHITTA KURTA',
        artist: 'Karan Aujla',
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=chitta+kurta+karan+aujla'
    },
    {
        title: 'JHANJAR',
        artist: 'Karan Aujla',
        image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=jhanjar+karan+aujla'
    },
    {
        title: 'HINT',
        artist: 'Karan Aujla',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=hint+karan+aujla'
    },
    {
        title: 'GANGSTA',
        artist: 'Karan Aujla',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=gangsta+karan+aujla'
    },
    {
        title: 'NO NEED',
        artist: 'Karan Aujla',
        image: 'https://images.unsplash.com/photo-1496449903670-68f21b7b1b5b?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=no+need+karan+aujla'
    },
    {
        title: 'BOEING',
        artist: 'Karan Aujla',
        image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=boeing+karan+aujla'
    },
    {
        title: 'BLACK PRINCE',
        artist: 'Karan Aujla',
        image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=black+prince+karan+aujla'
    },
    {
        title: 'PIND',
        artist: 'Karan Aujla',
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=pind+karan+aujla'
    },
    {
        title: 'MERI MARZI',
        artist: 'Karan Aujla',
        image: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=meri+marzi+karan+aujla'
    },
    {
        title: '5 TAARA',
        artist: 'Diljit Dosanjh',
        image: 'https://images.unsplash.com/photo-1485795041360-bf5cd276b374?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=5+taara+diljit+dosanjh'
    },
    {
        title: 'G.O.A.T.',
        artist: 'Diljit Dosanjh',
        image: 'https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=goat+diljit+dosanjh'
    },
    {
        title: 'PROPER PATOLA',
        artist: 'Diljit Dosanjh',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=proper+patola+diljit+dosanjh'
    },
    {
        title: 'LAEMBADGINI',
        artist: 'Diljit Dosanjh',
        image: 'https://images.unsplash.com/photo-1499388948738-44f8883aeeda?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=laembadgini+diljit+dosanjh'
    },
    {
        title: 'VIBE',
        artist: 'Diljit Dosanjh',
        image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=vibe+diljit+dosanjh'
    },
    {
        title: 'DO YOU KNOW',
        artist: 'Diljit Dosanjh',
        image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=do+you+know+diljit+dosanjh'
    },
    {
        title: 'LOVER',
        artist: 'Diljit Dosanjh',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=lover+diljit+dosanjh'
    },
    {
        title: 'RAAT DI GEDI',
        artist: 'Diljit Dosanjh',
        image: 'https://images.unsplash.com/photo-1526401485004-2eeaa6c5a124?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=raat+di+gedi+diljit+dosanjh'
    },
    {
        title: 'JATT FIRE KARDA',
        artist: 'Diljit Dosanjh',
        image: 'https://images.unsplash.com/photo-1514516870927-36e10b0f8bf4?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=jatt+fire+karda+diljit+dosanjh'
    },
    {
        title: 'VEER VAAR',
        artist: 'Diljit Dosanjh',
        image: 'https://images.unsplash.com/photo-1511909525231-7ae113b593ec?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=veer+vaar+diljit+dosanjh'
    },
    {
        title: 'CHAIYYA CHAIYYA',
        artist: 'Sukhwinder Singh & Sapna Awasthi',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=chaiyya+chaiyya+dil+se'
    },
    {
        title: 'TUJH MEIN RAB DIKHTA HAI',
        artist: 'Roop Kumar Rathod',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=tujh+mein+rab+dikhta+hai+rab+ne+bana+di+jodi'
    },
    {
        title: 'GERUA',
        artist: 'Arijit Singh & Antara Mitra',
        image: 'https://images.unsplash.com/photo-1496284045406-d8a3e4c68134?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=gerua+dilwale'
    },
    {
        title: 'KAL HO NAA HO',
        artist: 'Sonu Nigam',
        image: 'https://images.unsplash.com/photo-1496284045406-d8a3e4c68134?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=kal+ho+naa+ho'
    },
    {
        title: 'DARD-E-DISCO',
        artist: 'Sukhwinder Singh & Benny Dayal',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=dard-e-disco+om+shanti+om'
    },
    {
        title: 'CHAMAK CHALLO',
        artist: 'Akon & Hamsika Iyer',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=chamak+challo+ra.one'
    },
    {
        title: 'ZINDA',
        artist: 'Siddharth Mahadevan',
        image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=zinda+my+name+is+khan'
    },
    {
        title: 'TUJHE DEKHA TO',
        artist: 'Lata Mangeshkar & Kumar Sanu',
        image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=tujhe+dekha+to+dilwale+dulhania+le+jayenge'
    },
    {
        title: 'AANKHEIN KHULI',
        artist: 'Udit Narayan & Shreya Ghoshal',
        image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=aankhein+khuli+mohabbatein'
    },
    {
        title: 'BADAL PE PAON HAI',
        artist: 'Sonu Nigam & Alka Yagnik',
        image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=badal+pe+paon+hai+chak+de+india'
    },
    {
        title: 'MAIN HOON NA',
        artist: 'Sonu Nigam',
        image: 'https://images.unsplash.com/photo-1508253578933-a8ce4f96f7b9?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=main+hoon+na+song'
    },
    {
        title: 'YEH LADKA HAI DEEWANA',
        artist: 'Udit Narayan & Alka Yagnik',
        image: 'https://images.unsplash.com/photo-1508253578933-a8ce4f96f7b9?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=yeh+ladka+hai+deewana+kuch+kuch+hota+hai'
    },
    {
        title: 'SATRANGI RE',
        artist: 'Sonu Nigam & Kavita Krishnamurthy',
        image: 'https://images.unsplash.com/photo-1508253578933-a8ce4f96f7b9?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=satrangi+re+dil+se'
    },
    {
        title: 'DEEWANGI DEEWANGI',
        artist: 'Shankar Mahadevan et al.',
        image: 'https://images.unsplash.com/photo-1508253578933-a8ce4f96f7b9?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=deewangi+deewangi+om+shanti+om'
    },
    {
        title: 'KUCH KUCH HOTA HAI',
        artist: 'Udit Narayan & Alka Yagnik',
        image: 'https://images.unsplash.com/photo-1508253578933-a8ce4f96f7b9?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=kuch+kuch+hota+hai'
    },
    {
        title: 'KESARIYA',
        artist: 'Arijit Singh',
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=kesariya+brahmastra'
    },
    {
        title: 'JHOOME JO PATHAAN',
        artist: 'Arijit Singh & Sukriti Kakar',
        image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=jhoome+jo+pathaan'
    },
    {
        title: 'BESHARAM RANG',
        artist: 'Shilpa Rao',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=besharam+rang+pathaan'
    },
    {
        title: 'DIL DIYAN GALLAN',
        artist: 'Atif Aslam',
        image: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=dil+diyan+gallan+tiger+zinda+hai'
    },
    {
        title: 'GHUNGROO',
        artist: 'Arijit Singh & Shilpa Rao',
        image: 'https://images.unsplash.com/photo-1499323090579-a0d6a7d327c2?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=ghungroo+war'
    },
    {
        title: 'NASHE SI CHADH GAYI',
        artist: 'Arijit Singh',
        image: 'https://images.unsplash.com/photo-1494368308039-ed3393a402a4?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=nashe+si+chadh+gayi+befikre'
    },
    {
        title: 'APNA BANA LE',
        artist: 'Arijit Singh & Sachin-Jigar',
        image: 'https://images.unsplash.com/photo-1494368308039-ed3393a402a4?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=apna+bana+le+bhediya'
    },
    {
        title: 'SAKHIYAN 2.0',
        artist: 'Maninder Buttar',
        image: 'https://images.unsplash.com/photo-1494368308039-ed3393a402a4?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=sakhiyan+2.0+maninder+buttar'
    },
    {
        title: 'BROWN MUNDE',
        artist: 'AP Dhillon',
        image: 'https://images.unsplash.com/photo-1494368308039-ed3393a402a4?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=brown+munde+ap+dhillon'
    },
    {
        title: 'HIGH RATED GABRU',
        artist: 'Guru Randhawa',
        image: 'https://images.unsplash.com/photo-1494368308039-ed3393a402a4?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=high+rated+gabru+guru+randhawa'
    },
    {
        title: 'LUT GAYE',
        artist: 'Jubin Nautiyal',
        image: 'https://images.unsplash.com/photo-1494368308039-ed3393a402a4?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=lut+gaye+jubin+nautiyal'
    },
    {
        title: '3 PEG',
        artist: 'Sharry Mann',
        image: 'https://images.unsplash.com/photo-1494368308039-ed3393a402a4?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=3+peg+sharry+mann'
    },
    {
        title: 'LAUNG LAACHI',
        artist: 'Mannat Noor',
        image: 'https://images.unsplash.com/photo-1494368308039-ed3393a402a4?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=laung+laachi'
    },
    {
        title: 'PUTT JATT DA',
        artist: 'Diljit Dosanjh',
        image: 'https://images.unsplash.com/photo-1494368308039-ed3393a402a4?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=putt+jatt+da+diljit+dosanjh'
    },
    {
        title: 'KABHI KHUSHI KABHIE GHAM',
        artist: 'Lata Mangeshkar & Sonu Nigam',
        image: 'https://images.unsplash.com/photo-1494368308039-ed3393a402a4?auto=format&fit=crop&w=400&q=80',
        url: 'https://www.youtube.com/results?search_query=kabhi+khushi+kabhi+gham+title+track'
    }
];

const stage = document.getElementById('music-stage');
const hoverTitle = document.getElementById('hoverTitle');
const hoverArtist = document.getElementById('hoverArtist');
const togglePlayButton = document.getElementById('togglePlay');
const resetMotionButton = document.getElementById('resetMotion');
const speedSlider = document.getElementById('speedSlider');
const speedValue = document.getElementById('speedValue');

const state = {
    items: [],
    running: true,
    speed: Number(speedSlider.value),
    stageWidth: 0,
    stageHeight: 0,
    lastTime: performance.now(),
    hoveredIndex: null,
};

function createAlbumItems() {
    stage.innerHTML = '';

    albums.forEach((album, index) => {
        const item = document.createElement('div');
        item.className = 'album-card';
        item.dataset.index = String(index);
        item.style.width = `${130 + Math.round(Math.random() * 20)}px`;
        item.style.height = `${130 + Math.round(Math.random() * 20)}px`;

        const img = document.createElement('img');
        img.className = 'album-cover';
        img.src = album.image;
        img.alt = `${album.title} cover`;
        item.appendChild(img);

        const rect = item.getBoundingClientRect();
        stage.appendChild(item);

        const startX = Math.random() * (stage.clientWidth - rect.width - 40) + 20;
        const startY = Math.random() * (stage.clientHeight - rect.height - 40) + 20;

        const speed = 15 + Math.random() * 20;
        const angle = Math.random() * Math.PI * 2;

        item.style.transform = `translate(${startX}px, ${startY}px)`;

        state.items.push({
            element: item,
            album,
            x: startX,
            y: startY,
            width: rect.width,
            height: rect.height,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            baseAngle: (Math.random() - 0.5) * 10,
        });

        item.addEventListener('mouseenter', () => setHoverInfo(index));
        item.addEventListener('mouseleave', () => clearHoverInfo());
        item.addEventListener('click', () => {
            window.open(album.url, '_blank');
        });
    });
}

function updateStageSize() {
    state.stageWidth = stage.clientWidth;
    state.stageHeight = stage.clientHeight;
}

function setHoverInfo(index) {
    const album = albums[index];
    hoverTitle.textContent = album.title;
    hoverArtist.textContent = album.artist;
    state.hoveredIndex = index;
}

function clearHoverInfo() {
    hoverTitle.textContent = 'Hover an album';
    hoverArtist.textContent = 'Artist';
    state.hoveredIndex = null;
}

function animate(time) {
    const delta = (time - state.lastTime) / 1000;
    state.lastTime = time;

    if (state.running) {
        state.items.forEach(item => {
            item.x += item.vx * delta * state.speed;
            item.y += item.vy * delta * state.speed;

            if (item.x < 10) {
                item.x = 10;
                item.vx *= -1;
            }
            if (item.y < 10) {
                item.y = 10;
                item.vy *= -1;
            }
            if (item.x + item.width > state.stageWidth - 10) {
                item.x = state.stageWidth - item.width - 10;
                item.vx *= -1;
            }
            if (item.y + item.height > state.stageHeight - 10) {
                item.y = state.stageHeight - item.height - 10;
                item.vy *= -1;
            }

            const rotation = Math.sin((time + item.x + item.y) / 800) * 4;
            item.element.style.transform = `translate(${item.x}px, ${item.y}px) rotate(${rotation}deg)`;
        });
    }

    requestAnimationFrame(animate);
}

function updatePlayState() {
    togglePlayButton.textContent = state.running ? 'pause' : 'play';
}

function resetMotion() {
    state.items.forEach(item => {
        item.vx = (Math.random() * 2 - 1) * 25;
        item.vy = (Math.random() * 2 - 1) * 25;
    });
    state.items.forEach(item => {
        item.x = Math.random() * (state.stageWidth - item.width - 40) + 20;
        item.y = Math.random() * (state.stageHeight - item.height - 40) + 20;
    });
}

function updateSpeedValue() {
    speedValue.textContent = `${state.speed.toFixed(1)}x`;
}

function handleResize() {
    updateStageSize();
    state.items.forEach(item => {
        item.x = Math.min(item.x, state.stageWidth - item.width - 10);
        item.y = Math.min(item.y, state.stageHeight - item.height - 10);
    });
}

window.addEventListener('resize', handleResize);

togglePlayButton.addEventListener('click', () => {
    state.running = !state.running;
    updatePlayState();
});

resetMotionButton.addEventListener('click', () => {
    resetMotion();
});

speedSlider.addEventListener('input', (event) => {
    state.speed = Number(event.target.value);
    updateSpeedValue();
});

function init() {
    updateStageSize();
    createAlbumItems();
    updatePlayState();
    updateSpeedValue();
    requestAnimationFrame(animate);
}

init();
