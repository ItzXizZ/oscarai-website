# CardStack & VideoGallery Components

This directory contains two main components for displaying a stack of cards with YouTube videos, images, and other media content.

## Components

### 1. CardStack
A reusable component that displays a stack of cards with smooth animations and navigation.

**Features:**
- 3D card stack effect with rotation and scaling
- Support for YouTube videos, images, MP4 videos, and Google Drive links
- Touch-friendly navigation overlays
- Responsive design
- Smooth animations with CSS transitions

**Props:**
- `images: string[]` - Array of image/video URLs
- `onImageChange?: (index: number) => void` - Callback when card changes

### 2. VideoGallery
A full-page component that showcases the CardStack with YouTube videos.

**Features:**
- Full-page layout with header and footer
- Video counter display
- Responsive design
- Easy to customize with your video links

## Usage

### Basic CardStack Usage
```tsx
import CardStack from './components/CardStack'

const MyComponent = () => {
  const mediaUrls = [
    "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    "/path/to/image.jpg",
    "/path/to/video.mp4"
  ]

  return (
    <CardStack 
      images={mediaUrls} 
      onImageChange={(index) => console.log(`Now viewing: ${index}`)}
    />
  )
}
```

### VideoGallery Usage
```tsx
import VideoGallery from './components/VideoGallery'

const MyPage = () => {
  return <VideoGallery />
}
```

## Customization

### Adding Your YouTube Videos

1. **Edit VideoGallery.tsx** - Replace the example video URLs with your actual unlisted YouTube video links:

```tsx
const youtubeVideos = [
  "https://www.youtube.com/watch?v=YOUR_ACTUAL_VIDEO_ID_1",
  "https://www.youtube.com/watch?v=YOUR_ACTUAL_VIDEO_ID_2",
  "https://www.youtube.com/watch?v=YOUR_ACTUAL_VIDEO_ID_3",
  // Add more videos as needed
]
```

2. **Supported YouTube URL Formats:**
   - `https://www.youtube.com/watch?v=VIDEO_ID`
   - `https://youtu.be/VIDEO_ID`
   - `https://www.youtube.com/embed/VIDEO_ID`

### Styling Customization

- **CardStack.module.css** - Modify card appearance, animations, and layout
- **VideoGallery.module.css** - Customize the full-page layout and typography

### Adding to Your App

To integrate the VideoGallery into your main app:

1. **Option 1: Replace existing content**
```tsx
// In App.tsx
import VideoGallery from './components/VideoGallery'

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <main>
        <VideoGallery /> {/* Replace other components */}
      </main>
      <BackToTop />
    </div>
  );
};
```

2. **Option 2: Add as a new section**
```tsx
// In App.tsx
import VideoGallery from './components/VideoGallery'

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <OurStory />
        <VideoGallery /> {/* Add as new section */}
        <Leadership />
        <BusinessPlan />
        <PreOrder />
      </main>
      <BackToTop />
    </div>
  );
};
```

## Features

### YouTube Video Support
- Automatically detects YouTube links
- Converts to embed URLs
- Responsive iframe display
- Navigation overlays that don't interfere with video controls

### Navigation
- Left/right arrow overlays
- Touch-friendly on mobile
- Smooth transitions between cards
- Visual feedback for navigation state

### Responsive Design
- Mobile-first approach
- Adaptive card heights based on content
- Optimized navigation for different screen sizes

## File Structure
```
src/components/
├── CardStack.tsx              # Main card stack component
├── CardStack.module.css       # Card stack styles
├── VideoGallery.tsx           # Full-page video gallery
├── VideoGallery.module.css    # Video gallery styles
├── VideoGalleryDemo.tsx       # Demo component
├── VideoGalleryDemo.module.css # Demo styles
└── index.ts                   # Component exports
```

## Browser Support
- Modern browsers with CSS Grid and Flexbox support
- Mobile browsers with touch support
- Fallbacks for older browsers

## Performance
- Lazy loading of images
- Optimized animations with CSS transforms
- Efficient state management
- Minimal re-renders
