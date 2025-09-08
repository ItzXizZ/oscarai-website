import React, { useState, useEffect } from "react"
import "./CardStack.css"

interface CardStackProps {
  images: string[]
  onImageChange?: (index: number) => void
}

export default function CardStack({ images, onImageChange }: CardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number }[]>([])

  // Helper function to detect YouTube links
  const isYouTubeLink = (url: string): boolean => {
    return url.includes('youtube.com') || url.includes('youtu.be')
  }

  // Helper function to get YouTube embed URL
  const getYouTubeEmbedUrl = (url: string): string => {
    let videoId = ''
    
    if (url.includes('youtube.com/watch?v=')) {
      // Format: https://www.youtube.com/watch?v={videoId}
      videoId = url.match(/v=([^&]+)/)?.[1] || ''
    } else if (url.includes('youtu.be/')) {
      // Format: https://youtu.be/{videoId}
      videoId = url.match(/youtu\.be\/([^?]+)/)?.[1] || ''
    } else if (url.includes('youtube.com/embed/')) {
      // Already an embed URL
      return url
    }
    
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`
    }
    
    return url
  }

  // Helper function to detect Google Drive links
  const isGoogleDriveLink = (url: string): boolean => {
    return url.includes('drive.google.com') || url.includes('docs.google.com')
  }

  // Helper function to get Google Drive embed URL
  const getGoogleDriveEmbedUrl = (url: string): string => {
    // Convert various Google Drive URL formats to embed URLs
    if (url.includes('/file/d/')) {
      // Format: https://drive.google.com/file/d/{fileId}/view
      const fileId = url.match(/\/file\/d\/([^\/]+)/)?.[1]
      if (fileId) {
        return `https://drive.google.com/file/d/${fileId}/preview`
      }
    } else if (url.includes('/open?id=')) {
      // Format: https://drive.google.com/open?id={fileId}
      const fileId = url.match(/id=([^&]+)/)?.[1]
      if (fileId) {
        return `https://drive.google.com/file/d/${fileId}/preview`
      }
    }
    return url
  }

  const nextCard = () => {
    if (isAnimating || currentIndex >= images.length - 1) return

    setIsAnimating(true)
    setTimeout(() => {
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
      onImageChange?.(newIndex)
      setIsAnimating(false)
    }, 300)
  }

  const prevCard = () => {
    if (isAnimating || currentIndex <= 0) return

    setIsAnimating(true)
    setTimeout(() => {
      const newIndex = currentIndex - 1
      setCurrentIndex(newIndex)
      onImageChange?.(newIndex)
      setIsAnimating(false)
    }, 300)
  }

  // Calculate optimal card dimensions based on image aspect ratios
  const getOptimalCardStyle = () => {
    if (imageDimensions.length === 0) return {}
    
    const currentDim = imageDimensions[currentIndex]
    if (!currentDim) return {}
    
    const aspectRatio = currentDim.width / currentDim.height
    
    // Adjust card height based on aspect ratio with expanded dimensions
    if (aspectRatio > 1.5) {
      // Landscape images - use expanded height
      return { height: '400px' }
    } else if (aspectRatio < 0.8) {
      // Portrait images - use maximum height
      return { height: '500px' }
    }
    
    // Default height for square-ish images - expanded
    return { height: '450px' }
  }

  // Load image dimensions when images change
  useEffect(() => {
    const loadImageDimensions = async () => {
      const dimensions = await Promise.all(
        images.map(async (imageSrc) => {
          // Skip dimension loading for video links
          if (isYouTubeLink(imageSrc) || isGoogleDriveLink(imageSrc)) {
            return { width: 800, height: 600 } // Default dimensions for videos
          }
          
          return new Promise<{ width: number; height: number }>((resolve) => {
            const img = new window.Image()
            img.onload = () => {
              resolve({ width: img.naturalWidth, height: img.naturalHeight })
            }
            img.onerror = () => {
              resolve({ width: 800, height: 600 }) // Default fallback
            }
            img.src = imageSrc
          })
        })
      )
      setImageDimensions(dimensions)
    }

    if (images.length > 0) {
      loadImageDimensions()
    }
  }, [images])

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex

    if (diff < 0) {
      // Cards that have been viewed
      return {
        transform: `translateX(-120%) rotate(-10deg) scale(0.8)`,
        opacity: 0,
        zIndex: 1,
      }
    } else if (diff === 0) {
      // Current card
      return {
        transform: `translateX(0) rotate(0deg) scale(1)`,
        opacity: 1,
        zIndex: 10,
      }
    } else if (diff === 1) {
      // Next card
      return {
        transform: `translateX(20px) rotate(5deg) scale(0.95)`,
        opacity: 0.8,
        zIndex: 9,
      }
    } else if (diff === 2) {
      // Card after next
      return {
        transform: `translateX(40px) rotate(10deg) scale(0.9)`,
        opacity: 0.6,
        zIndex: 8,
      }
    } else {
      // Cards further back
      return {
        transform: `translateX(60px) rotate(15deg) scale(0.85)`,
        opacity: 0.4,
        zIndex: 7,
      }
    }
  }

  const renderCardContent = (imageSrc: string, index: number) => {
    if (isYouTubeLink(imageSrc)) {
      // Render YouTube video as embedded iframe
      return (
        <div className="videoContainer">
          <iframe
            src={getYouTubeEmbedUrl(imageSrc)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="videoIframe"
          />
        </div>
      )
    } else if (isGoogleDriveLink(imageSrc)) {
      // Render Google Drive link as a clickable card with play button
      return (
        <div className="googleDriveCard">
          <div className="googleDriveThumbnail">
            <div className="playButton">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.7)"/>
                <path d="M20 16L32 24L20 32V16Z" fill="white"/>
              </svg>
            </div>
            <div className="googleDriveLabel">
              <span>Google Drive Video</span>
              <small>Click to watch</small>
            </div>
          </div>
        </div>
      )
    } else if (imageSrc.endsWith(".mp4")) {
      // Render MP4 video
      return <video src={imageSrc} controls className="cardMedia" />
    } else {
      // Render image
      return (
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={`Card ${index + 1}`}
          className="cardMedia"
          style={{ objectFit: "cover" }}
        />
      )
    }
  }

  const handleCardClick = (imageSrc: string) => {
    if (isGoogleDriveLink(imageSrc)) {
      // Open Google Drive link in new tab
      window.open(getGoogleDriveEmbedUrl(imageSrc), '_blank')
    }
  }

  return (
    <div className="cardStack">
      <div 
        className="stackContainer"
        style={getOptimalCardStyle()}
      >
        {images.map((image, index) => {
          const isVideo = image.endsWith(".mp4") || isYouTubeLink(image) || isGoogleDriveLink(image)

          return (
            <div
              key={index}
              className={`card ${isAnimating ? "animating" : ""} ${
                isGoogleDriveLink(image) ? "googleDriveCard" : ""
              } ${isYouTubeLink(image) ? "youtubeCard" : ""}`}
              style={getCardStyle(index)}
              onClick={() => isGoogleDriveLink(image) && handleCardClick(image)}
            >
              {renderCardContent(image, index)}

              <div className="cardNumber">{index + 1}</div>
            </div>
          )
        })}

        {/* Navigation overlay for current card */}
        {images.length > 1 && (
          <>
            {/* Left click area for previous */}
            <div 
              className={`navOverlay navLeft ${images[currentIndex]?.endsWith('.mp4') || isYouTubeLink(images[currentIndex]) || isGoogleDriveLink(images[currentIndex]) ? 'videoNav' : ''}`}
              onClick={prevCard}
              style={{ 
                cursor: currentIndex === 0 ? 'default' : 'pointer',
                opacity: currentIndex === 0 ? 0.3 : 0.7
              }}
            >
              <div className="navArrow">‹</div>
            </div>

            {/* Right click area for next */}
            <div 
              className={`navOverlay navRight ${images[currentIndex]?.endsWith('.mp4') || isYouTubeLink(images[currentIndex]) || isGoogleDriveLink(images[currentIndex]) ? 'videoNav' : ''}`}
              onClick={nextCard}
              style={{ 
                cursor: currentIndex === images.length - 1 ? 'default' : 'pointer',
                opacity: currentIndex === images.length - 1 ? 0.3 : 0.7
              }}
            >
              <div className="navArrow">›</div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
