# 📋 To-Do List Application

A beautiful, fully-functional to-do list application with local storage persistence. Never lose your tasks!

## ✨ Features

- ✅ **Add, Complete, and Delete Tasks** - Full task management
- 💾 **Local Storage** - All tasks are automatically saved to your browser
- 🔍 **Filter Tasks** - View All, Active, or Completed tasks
- 📊 **Statistics** - Track total, active, and completed tasks
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- ♿ **Priority Badges** - Visual indicators for task priority
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎯 **Keyboard Support** - Press Enter to add tasks quickly
- 🗑️ **Bulk Actions** - Clear completed tasks or all tasks at once
- ⚡ **Zero Dependencies** - Pure vanilla JavaScript, HTML, and CSS

## 📋 Requirements

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or dependencies required

## 🚀 Usage

1. Open `index.html` in your web browser
2. Type a task in the input field
3. Click "Add Task" or press Enter
4. Check the checkbox to mark tasks as complete
5. Click "Delete" to remove tasks
6. Use filter buttons to view different task statuses

## 🎨 Features Explained

### Add Tasks
- Type your task in the input field
- Click "Add Task" button or press Enter
- Tasks are automatically saved to local storage

### Filter Tasks
- **All**: Shows all tasks
- **Active**: Shows only incomplete tasks
- **Completed**: Shows only completed tasks

### Statistics
- **Total**: Total number of tasks
- **Active**: Number of incomplete tasks
- **Completed**: Number of completed tasks

### Actions
- **Clear Completed**: Remove all completed tasks
- **Clear All**: Remove all tasks (with confirmation)

## 💾 Local Storage

Your tasks are automatically saved to your browser's local storage. This means:
- ✅ Tasks persist after page refresh
- ✅ Tasks persist after closing the browser
- ✅ Each browser/device stores its own tasks
- ℹ️ Clearing browser cache will remove saved tasks

## 🎨 Customization

### Change Colors
Edit the gradient in `styles.css`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change Accent Color
Update the primary color:

```css
color: #667eea;
```

## 📱 Browser Support

- Chrome/Edge 24+
- Firefox 25+
- Safari 10+
- Opera 15+

## 🔧 Technical Details

### Local Storage Structure
```json
[
  {
    "id": 1234567890,
    "text": "Buy groceries",
    "completed": false,
    "createdAt": "5/11/2026, 9:41:51 AM",
    "priority": "low"
  }
]
```

### JavaScript Classes
- **TodoApp**: Main application class
  - `addTodo()`: Add new task
  - `deleteTodo()`: Remove task
  - `toggleTodo()`: Mark task complete/incomplete
  - `render()`: Update UI
  - `saveToLocalStorage()`: Persist data
  - `loadFromLocalStorage()`: Retrieve data

## 🐛 Troubleshooting

**Tasks are not saving:**
- Check if browser allows local storage
- Try a different browser
- Clear browser cache and try again

**Tasks disappeared:**
- If you cleared browser data, tasks are removed
- Consider using the export/import feature

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

---

Made with ❤️ for productivity enthusiasts
