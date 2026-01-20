# Next.js Streaming Demo

A modern, production-ready Next.js application demonstrating server-side streaming with React Suspense, showcasing popular web frameworks and development tools.

![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 🚀 Features

### Core Functionality

- ⚡ **Server-Side Streaming** - Leverages Next.js 15+ streaming with Suspense boundaries for optimal performance
- 🎯 **Framework Showcase** - Displays 9 popular frameworks (React, Vue, Angular, Svelte, Preact, Angular, Astro, Flutter, Solid)
- 💾 **Persistent Likes** - Save your favorite frameworks to browser storage with instant visual feedback
- 🎨 **Modern UI** - Built with shadcn/ui and Tailwind CSS for a polished, responsive design
- ♿ **Accessible** - Full ARIA support, keyboard navigation, and semantic HTML
- 🔒 **Type Safe** - JavaScript with clear component structure and error handling

### Performance Optimizations

- Memoized components to prevent unnecessary re-renders
- Optimized key props for stable React rendering
- Centralized icon data storage for reduced memory usage
- Image optimization with AVIF and WebP formats
- Automatic code splitting and lazy loading with Suspense

### User Experience

- **Optimistic Updates** - Like buttons provide instant feedback using React's `useOptimistic` hook
- **Error Boundaries** - Graceful error handling with recovery options
- **Skeleton Loaders** - Beautiful loading states while content streams in
- **SEO Optimized** - Rich metadata, proper heading hierarchy, and schema markup support

## 🛠️ Tech Stack

| Technology   | Version | Purpose                                |
| ------------ | ------- | -------------------------------------- |
| Next.js      | 15.4.4  | React framework with streaming support |
| React        | 19.1.0  | UI library                             |
| Tailwind CSS | 4       | Utility-first CSS framework            |
| Lucide React | 0.525.0 | Icon library                           |
| Radix UI     | 1.2.3   | Accessible component primitives        |

## 📋 Prerequisites

- **Node.js** 18.0 or higher
- **npm** 9.0+ or **yarn** 4.0+

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/Antonynans/Next.js-streaming-demo.git
cd nextjs-streaming

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start development server with Turbopack
npm run dev
```

The application will be available at `http://localhost:3000` (or the next available port if 3000 is in use).

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 📁 Project Structure

```
nextjs-streaming/
├── app/
│   ├── globals.css              # Global styles
│   ├── layout.js                # Root layout with metadata
│   ├── page.js                  # Home page
│   └── streaming-demo/
│       └── page.js              # Streaming demo page
├── components/
│   ├── error-boundary.js        # Error handling component
│   ├── icon-card.js             # Individual tool card
│   ├── icon-component.js        # Icon renderer
│   ├── like-button.js           # Like button with persistence
│   ├── tools-cards.js           # Main tools container
│   ├── tools-cards-view.js      # Client-side tools view
│   ├── tools-cards-wrapper.js   # Filter wrapper
│   ├── tools-filter.js          # Search and sort UI
│   └── ui/                      # shadcn/ui components
│       ├── button.jsx
│       ├── card.jsx
│       ├── card-skeleton.jsx
│       └── skeleton.jsx
├── lib/
│   ├── getTools.js              # Server action for fetching tools
│   ├── icons-data.js            # Centralized icon definitions
│   └── utils.js                 # Utility functions
├── next.config.mjs              # Next.js configuration
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── package.json                 # Dependencies and scripts
```

## 🎯 Key Components

### ToolsCards (Server Component)

The main entry point that:

- Fetches tools data server-side using a server action
- Wraps individual cards with Suspense boundaries
- Handles errors gracefully
- Displays skeleton loaders while streaming

```javascript
// Components render individually as they stream in
<Suspense fallback={<CardSkeleton />}>
  <ToolsCard toolPromise={toolPromise} />
</Suspense>
```

### LikeButton (Client Component)

Demonstrates advanced React patterns:

- Uses `useOptimistic` for instant UI feedback
- Persists data to localStorage
- Handles hydration safely with `useEffect`
- Provides proper ARIA labels

### IconComponent

Renders framework icons from centralized data store, enabling:

- Better code organization
- Reduced memory usage
- Easy maintenance and updates

## 🌟 Advanced Features

### Server-Side Rendering with Streaming

The application uses Next.js 15+ streaming capabilities to progressively render content:

1. **Server Components** render on the server
2. **Suspense Boundaries** stream content as it's ready
3. **Fallback UI** shows skeleton loaders
4. **Client Interactivity** works immediately on hydration

### Optimistic Updates

The like button demonstrates React 19's `useOptimistic` hook:

```javascript
const [optimisticLiked, addOptimisticLike] = useOptimistic(false);

// Immediate UI update while server processes
addOptimisticLike(!optimisticLiked);

// Server updates localStorage in background
await toggleLike(toolId, optimisticLiked);
```

### Error Handling

Multiple layers of error handling:

- Server-side validation in `getTools()`
- Error boundary component for React errors
- Graceful fallbacks for missing data
- User-friendly error messages

## 📊 Performance Features

- **Code Splitting**: Automatic chunking of JavaScript
- **Lazy Loading**: Components load on-demand with Suspense
- **Image Optimization**: Configured AVIF and WebP formats
- **Memoization**: Prevents unnecessary re-renders with `React.memo`
- **Hydration Safety**: Proper hydration handling for client/server mismatches

## ♿ Accessibility

- **ARIA Labels**: All interactive elements have proper labels
- **Keyboard Navigation**: Full keyboard support
- **Semantic HTML**: Proper heading hierarchy and structure
- **Screen Reader Support**: Enhanced with descriptive labels
- **Color Contrast**: WCAG AA compliant

## 🔒 Security

- **Security Headers**: X-UA-Compatible and X-Content-Type-Options configured
- **Content Security**: Protected against XSS attacks
- **Input Validation**: Server-side validation of all data
- **Secure Defaults**: Safe configuration in next.config.mjs

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🧪 Testing

```bash
# Run linter
npm run lint

# Build for production (validates entire app)
npm run build
```

## 📝 Environment Variables

Currently, no environment variables are required. The app uses:

- `NEXT_PUBLIC_*` - Client-side accessible variables (none currently)
- Server-side only variables - None configured

To add environment variables, create `.env.local`:

```env
# Example (if needed in future)
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel (connected GitHub repo)
vercel
```

### Docker

```bash
# Build Docker image
docker build -t nextjs-streaming .

# Run container
docker run -p 3000:3000 nextjs-streaming
```

### Other Platforms

The app works on any platform supporting Node.js 18+:

- Netlify
- AWS Amplify
- Railway
- Render
- DigitalOcean

## 📚 Learning Resources

### Concepts Demonstrated

1. **Server Components** - Render on server, zero JavaScript cost
2. **Suspense & Streaming** - Progressive enhancement of UI
3. **useOptimistic** - React 19 feature for optimistic updates
4. **Error Boundaries** - Graceful error handling
5. **Client vs Server** - Clear separation of concerns
6. **Performance Optimization** - Memoization and code splitting

### Documentation

- [Next.js Streaming Documentation](https://nextjs.org/learn/dashboard-app/streaming)
- [React 19 Docs](https://react.dev)
- [Suspense for Data Fetching](https://react.dev/reference/react/Suspense)
- [useOptimistic Hook](https://react.dev/reference/react/useOptimistic)

## 📋 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint on codebase
```

## 🔄 State Management

The app demonstrates different state management approaches:

1. **Server State** - Fetched via server actions in `getTools.js`
2. **Client State** - localStorage for likes persistence
3. **Optimistic State** - Instant UI feedback with `useOptimistic`
4. **React State** - Local component state for UI interactions

## 🎨 Customization

### Adding New Frameworks

Edit `lib/getTools.js`:

```javascript
const TOOLS = [
  "JavaScript",
  "React",
  // Add your framework here
  "MyFramework",
];
```

### Adding Framework Icons

Edit `lib/icons-data.js` and add a new object to the `ICONS` array:

```javascript
{
    id: "MyFramework",
    icon: (
        <svg>
            {/* Your SVG here */}
        </svg>
    ),
}
```

### Styling

- Global styles: `app/globals.css`
- Component styles: Inline with Tailwind classes
- Configuration: `tailwind.config.js`

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Change port
npm run dev -- -p 3001
```

### Build Failures

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Build again
npm run build
```

### Hydration Mismatch

The app includes hydration safety checks. If you see hydration warnings:

1. Check for date/time differences between server and client
2. Verify `useEffect` is used for client-only code
3. Ensure Suspense boundaries wrap dynamic content

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Original Course**: [Next.js Streaming Masterclass 2025](https://youtube.com/@LearnwithSumit)  
**Created by**: Sumit Saha - [Learn with Sumit](https://learnwithsumit.com)

**Enhancements & Optimizations**: Performance improvements, error handling, accessibility enhancements, and persistence features.

## 🙏 Acknowledgments

- [Next.js Team](https://vercel.com/nextjs) for the amazing framework
- [shadcn/ui](https://ui.shadcn.com/) for component library
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide Icons](https://lucide.dev/) for the icon set

## 📞 Support

For issues, questions, or suggestions:

1. Check the [GitHub Issues](https://github.com/Antonynans/Next.js-streaming-demo/issues)
2. Review the [Next.js Documentation](https://nextjs.org/docs)
3. Visit the [React Documentation](https://react.dev)

## 🗺️ Roadmap

- [ ] Add search and filtering functionality
- [ ] Implement sorting options (A-Z, popularity)
- [ ] Add backend API for persistent storage
- [ ] Database integration for likes
- [ ] Analytics tracking
- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] PWA support

---

**Made with ❤️ using Next.js 15 and React 19**
