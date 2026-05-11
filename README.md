# 🌍 Digital Clock - Multiple Time Zones

A beautiful, responsive web application that displays the current time in 12 different time zones around the world.

## ✨ Features

- **Real-time Updates**: Clocks update every second
- **12 Major Cities**: New York, London, Paris, Dubai, Tokyo, Singapore, Hong Kong, Sydney, Mumbai, Berlin, Toronto, São Paulo
- **UTC Offset Display**: Shows the UTC offset for each timezone
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Gradient background with smooth animations and hover effects
- **No Dependencies**: Pure vanilla JavaScript, HTML, and CSS

## 📋 Requirements

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or dependencies required

## 🚀 Usage

1. Open `index.html` in your web browser
2. The clocks will automatically display and update in real-time
3. Each clock shows:
   - City name
   - Current time (HH:MM:SS format)
   - Current date (MM/DD/YYYY format)
   - UTC offset

## 🎨 Customization

### Add New Time Zones

Edit the `timeZones` array in `script.js`:

```javascript
const timeZones = [
    { name: 'City Name', tz: 'Continent/City' },
    // Add more zones...
];
```

Use any valid IANA timezone identifier from the [IANA Time Zone Database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

### Customize Colors

Edit the CSS variables in `styles.css`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: #667eea;
```

## 📱 Browser Support

- Chrome/Edge 24+
- Firefox 25+
- Safari 10+
- Opera 15+

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork, modify, and improve this project. Share your enhancements!

---

Made with ❤️ for developers worldwide