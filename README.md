# AI Chat System

A modern AI chat application built with Nuxt 3 and Nuxt UI, featuring a clean interface similar to khuiai.com.

## Features

- 🤖 **Kuddy AI Chat Interface** - Clean and intuitive chat interface
- 🌙 **Dark/Light Mode** - Toggle between themes
- 💬 **Chat History** - Persistent chat sessions
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Real-time Typing** - Typing indicators and smooth animations
- 💾 **Local Storage** - Saves chat history locally
- 🎨 **Modern UI** - Built with Tailwind CSS and Nuxt UI

## Tech Stack

- **Framework:** Nuxt 3
- **UI Library:** Nuxt UI
- **Styling:** Tailwind CSS
- **Icons:** Heroicons
- **Fonts:** Inter & JetBrains Mono
- **State Management:** Vue 3 Composition API

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ai-chat-system
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run postinstall` - Generate types

### Project Structure

```
├── assets/
│   └── css/
│       └── main.css          # Global styles
├── layouts/
│   └── default.vue           # Default layout
├── pages/
│   └── index.vue            # Main chat interface
├── app/
│   └── app.vue              # Root component
├── nuxt.config.ts           # Nuxt configuration
└── package.json
```

## Features Implemented

### Chat Interface

- Clean, modern chat UI with message bubbles
- User and AI message differentiation
- Timestamp display
- Typing indicators with animation

### Chat Management

- Create new chat sessions
- Chat history sidebar
- Persistent storage using localStorage
- Chat title auto-generation

### UI/UX

- Responsive design for mobile and desktop
- Dark/light mode toggle
- Smooth animations and transitions
- Custom scrollbar styling
- Keyboard shortcuts (Enter to send, Shift+Enter for new line)

### Styling

- Tailwind CSS for utility-first styling
- Custom CSS animations
- Inter font for UI text
- JetBrains Mono for code blocks
- Consistent color scheme

## Customization

### Adding Real AI Integration

To integrate with a real AI service, replace the mock `generateAIResponse` function in `pages/index.vue`:

```javascript
const generateAIResponse = async (userMessage) => {
  try {
    const response = await $fetch("/api/chat", {
      method: "POST",
      body: { message: userMessage },
    });
    return response.content;
  } catch (error) {
    return "Sorry, I encountered an error. Please try again.";
  }
};
```

### Styling Customization

Modify `assets/css/main.css` for global styles or update the Tailwind classes in components.

### Adding Features

- **File Upload**: Add file upload functionality for images/documents
- **Voice Chat**: Integrate speech-to-text and text-to-speech
- **Multi-language**: Add i18n support
- **Chat Export**: Add functionality to export chat history
- **User Authentication**: Add user accounts and cloud sync

## Deployment

### Static Generation

```bash
npm run generate
```

### Server Deployment

```bash
npm run build
npm run preview
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details
