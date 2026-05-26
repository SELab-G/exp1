const speakers = [
    { name: "Prof. S. Soleymani", title: "AI in Web", affiliation: "Sharif University of Technology" },
    { name: "Dr. M. Seddighin", title: "Game Theory", affiliation: "TEIAS" }
];

const speakerGrid = document.getElementById('speakerGrid');
speakers.forEach(s => {
    const card = document.createElement('div');
    card.className = 'speaker-card';
    card.innerHTML = `<h3>${s.name}</h3><p>${s.title}</p><small>${s.affiliation}</small>`;
    speakerGrid.appendChild(card);
});

const schedule = [
    { day: "Day 1 - May 10", events: [
        { time: "09:00", title: "Opening Keynote", location: "Hall A" },
        { time: "11:00", title: "Web Components", location: "Hall B" }
    ]},
    { day: "Day 2 - May 11", events: [
        { time: "10:00", title: "Performance Optimization", location: "Hall A" }
    ]}
];

function buildSchedule() {
    const container = document.getElementById('scheduleTable');
    let html = '';
    schedule.forEach(day => {
        html += `<h3>${day.day}</h3><table><tr><th>Time</th><th>Title</th><th>Location</th></tr>`;
        day.events.forEach(e => {
            html += `<tr><td>${e.time}</td><td>${e.title}</td><td>${e.location}</td></tr>`;
        });
        html += `</table><br>`;
    });
    container.innerHTML = html;
}
buildSchedule();
// Languages
const translations = {
    en: {
        title: "MyConf 2025",
        subtitle: "International Conference on Web Technologies",
        date: "📅 May 10-12, 2025 | Tehran, Iran",
        register: "Register Now",
        speakersTitle: "Speakers",
        scheduleTitle: "Schedule",
        aboutLink: "About",
        contactLink: "Contact"
    },
    fr: {
        title: "MyConf 2025",
        subtitle: "Conférence internationale sur les technologies Web",
        date: "📅 10-12 mai 2025 | Téhéran, Iran",
        register: "S'inscrire",
        speakersTitle: "Conférenciers",
        scheduleTitle: "Programme",
        aboutLink: "À propos",
        contactLink: "Contact"
    }
};

let currentLang = 'en';

function updateLanguage() {
    // Update static texts
    document.querySelector('h1').innerText = translations[currentLang].title;
    document.querySelector('header p:first-of-type').innerText = translations[currentLang].subtitle;
    document.querySelector('header p:nth-of-type(2)').innerHTML = translations[currentLang].date;
    document.getElementById('registerBtn').innerText = translations[currentLang].register;
    document.querySelector('#speakers h2').innerText = translations[currentLang].speakersTitle;
    document.querySelector('#schedule h2').innerText = translations[currentLang].scheduleTitle;
    
    // Update navigation links (if needed)
    const navLinks = document.querySelectorAll('nav a');
    if (navLinks.length >= 3) {
        navLinks[1].innerText = translations[currentLang].aboutLink; // About link
        navLinks[2].innerText = translations[currentLang].contactLink; // Contact link
    }
}

// Click events
document.getElementById('langEn').addEventListener('click', () => {
    currentLang = 'en';
    updateLanguage();
});
document.getElementById('langFr').addEventListener('click', () => {
    currentLang = 'fr';
    updateLanguage();
});

// Initial execution
updateLanguage();

document.getElementById('registerBtn').addEventListener('click', () => {
    alert('Registration form will be available soon!');
});
