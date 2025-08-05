<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# AI Chat System - Copilot Instructions

This is a Nuxt 3 project for building an AI chat system with the following specifications:

## Project Structure

- **Framework**: Nuxt 3 with TypeScript
- **UI Library**: Nuxt UI (built on top of Tailwind CSS)
- **Styling**: Tailwind CSS with custom animations
- **State Management**: Vue 3 Composition API with reactive state
- **Storage**: localStorage for chat history persistence

## Key Features

- Modern chat interface with user and AI message bubbles
- Dark/light mode toggle functionality
- Chat history management with sidebar
- Typing indicators and smooth animations
- Responsive design for mobile and desktop
- Message formatting with basic markdown support

## Code Style Guidelines

- Use Composition API with `<script setup>` syntax
- Implement TypeScript where beneficial
- Follow Vue 3 best practices for reactivity
- Use Nuxt UI components consistently
- Apply Tailwind CSS utility classes
- Maintain accessibility standards

## File Organization

- Components in `/components` (if created)
- Pages in `/pages`
- Layouts in `/layouts`
- Global styles in `/assets/css`
- Utilities and composables in `/composables` or `/utils` (if needed)

## AI Integration Notes

- Currently uses mock AI responses in `generateAIResponse` function
- Ready for integration with real AI APIs (OpenAI, Anthropic, etc.)
- Message handling designed for async API calls
- Error handling structure in place

## Styling Conventions

- Use semantic class names where appropriate
- Maintain consistent spacing and typography
- Follow dark mode best practices
- Use CSS custom properties for theme variables when needed
- Implement smooth transitions and micro-interactions

When generating code for this project, prioritize:

1. Vue 3 Composition API patterns
2. Nuxt 3 conventions and best practices
3. Accessible and semantic HTML
4. Responsive design principles
5. Performance optimization
6. Clean, maintainable code structure
