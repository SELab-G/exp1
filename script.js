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

document.getElementById('registerBtn').addEventListener('click', () => {
    alert('Registration form will be available soon!');
});
