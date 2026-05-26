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
    if (!container) return;
    let html = '';
    schedule.forEach(day => {
        html += `<h3>${day.day}</h3>`;
        html += `<table><thead><tr><th>Time</th><th>Title</th><th>Location</th></tr></thead><tbody>`;
        day.events.forEach(e => {
            html += `<tr><td>${e.time}</td><td>${e.title}</td><td>${e.location}</td></tr>`;
        });
        html += `</tbody></table><br>`;
    });
    container.innerHTML = html;
}
buildSchedule();

// Languages
const translations = {
    en: {
        title: "EXP1 2026",
        subtitle: "International Conference on Web Technologies",
        date: "📅 May 10-12, 2026 | Tehran, Iran",
        register: "Register Now",
        speakersTitle: "Speakers",
        scheduleTitle: "Schedule",
        aboutLink: "About",
        contactLink: "Contact"
    },
    fr: {
        title: "EXP1 2026",
        subtitle: "Conférence internationale sur les technologies Web",
        date: "📅 10-12 mai 2026 | Téhéran, Iran",
        register: "S'inscrire",
        speakersTitle: "Conférenciers",
        scheduleTitle: "Programme",
        aboutLink: "À propos",
        contactLink: "Contact"
    }
};

let currentLang = 'en';

function updateLanguage() {
    document.querySelector('h1').innerText = translations[currentLang].title;
    const headerPs = document.querySelectorAll('header p');
    if (headerPs.length >= 2) {
        headerPs[0].innerText = translations[currentLang].subtitle;
        headerPs[1].innerHTML = translations[currentLang].date;
    }
    document.getElementById('registerBtn').innerText = translations[currentLang].register;
    document.querySelector('#speakers h2').innerText = translations[currentLang].speakersTitle;
    document.querySelector('#schedule h2').innerText = translations[currentLang].scheduleTitle;
    
    const navLinks = document.querySelectorAll('nav a');
    if (navLinks.length >= 3) {
        navLinks[1].innerText = translations[currentLang].aboutLink;
        navLinks[2].innerText = translations[currentLang].contactLink;
    }
}

// Event listeners for language buttons
const langEnBtn = document.getElementById('langEn');
const langFrBtn = document.getElementById('langFr');
if (langEnBtn) langEnBtn.addEventListener('click', () => { currentLang = 'en'; updateLanguage(); });
if (langFrBtn) langFrBtn.addEventListener('click', () => { currentLang = 'fr'; updateLanguage(); });

// Initial execution
updateLanguage();

// Register button
const regBtn = document.getElementById('registerBtn');
if (regBtn) {
    regBtn.addEventListener('click', () => {
        alert('Registration form will be available soon!');
    });
}
