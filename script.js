// Time zones to display
const timeZones = [
    { name: 'New York', tz: 'America/New_York' },
    { name: 'London', tz: 'Europe/London' },
    { name: 'Paris', tz: 'Europe/Paris' },
    { name: 'Dubai', tz: 'Asia/Dubai' },
    { name: 'Tokyo', tz: 'Asia/Tokyo' },
    { name: 'Singapore', tz: 'Asia/Singapore' },
    { name: 'Hong Kong', tz: 'Asia/Hong_Kong' },
    { name: 'Sydney', tz: 'Australia/Sydney' },
    { name: 'Mumbai', tz: 'Asia/Kolkata' },
    { name: 'Berlin', tz: 'Europe/Berlin' },
    { name: 'Toronto', tz: 'America/Toronto' },
    { name: 'São Paulo', tz: 'America/Sao_Paulo' }
];

// Initialize clocks on page load
document.addEventListener('DOMContentLoaded', () => {
    createClocks();
    updateClocks(); // Initial update
    setInterval(updateClocks, 1000); // Update every second
});

// Create clock cards
function createClocks() {
    const clockGrid = document.getElementById('clockGrid');
    clockGrid.innerHTML = '';

    timeZones.forEach(zone => {
        const card = document.createElement('div');
        card.className = 'clock-card';
        card.innerHTML = `
            <div class="city-name">${zone.name}</div>
            <div class="digital-time" data-tz="${zone.tz}">--:--:--</div>
            <div class="time-details">
                <div class="date" data-tz="${zone.tz}">--/--/----</div>
                <div class="utc-offset" data-tz="${zone.tz}">UTC+0</div>
            </div>
        `;
        clockGrid.appendChild(card);
    });
}

// Update all clocks
function updateClocks() {
    timeZones.forEach(zone => {
        const time = new Date().toLocaleString('en-US', {
            timeZone: zone.tz,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        const date = new Date().toLocaleString('en-US', {
            timeZone: zone.tz,
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        });

        // Calculate UTC offset
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: zone.tz,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        const parts = formatter.formatToParts(new Date());
        const tzDate = new Date(
            parts.find(p => p.type === 'year').value,
            parseInt(parts.find(p => p.type === 'month').value) - 1,
            parts.find(p => p.type === 'day').value,
            parts.find(p => p.type === 'hour').value,
            parts.find(p => p.type === 'minute').value,
            parts.find(p => p.type === 'second').value
        );

        const utcOffset = getUTCOffset(zone.tz);

        // Update DOM elements
        const timeElement = document.querySelector(`.digital-time[data-tz="${zone.tz}"]`);
        const dateElement = document.querySelector(`.date[data-tz="${zone.tz}"]`);
        const offsetElement = document.querySelector(`.utc-offset[data-tz="${zone.tz}"]`);

        if (timeElement) timeElement.textContent = time;
        if (dateElement) dateElement.textContent = date;
        if (offsetElement) offsetElement.textContent = utcOffset;
    });
}

// Get UTC offset for a timezone
function getUTCOffset(timeZone) {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timeZone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    const parts = formatter.formatToParts(now);
    const tzDate = new Date(
        parseInt(parts.find(p => p.type === 'year').value),
        parseInt(parts.find(p => p.type === 'month').value) - 1,
        parseInt(parts.find(p => p.type === 'day').value),
        parseInt(parts.find(p => p.type === 'hour').value),
        parseInt(parts.find(p => p.type === 'minute').value),
        parseInt(parts.find(p => p.type === 'second').value)
    );

    const offset = (now - tzDate) / (1000 * 60); // in minutes
    const hours = Math.floor(Math.abs(offset) / 60);
    const minutes = Math.abs(offset) % 60;
    const sign = offset >= 0 ? '+' : '-';

    return `UTC${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}