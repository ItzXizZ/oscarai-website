import React, { useState } from 'react';
import './VideoDemo.css';

const VideoDemo: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [likes, setLikes] = useState(12400);
  const [comments, setComments] = useState(892);
  const [isLiked, setIsLiked] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<number[]>([]);

  const handleVideoLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleVideoError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  const handleLike = () => {
    if (!isLiked) {
      setLikes(prev => prev + 1);
      setIsLiked(true);
      
      // Create floating heart
      const heartId = Date.now();
      setFloatingHearts(prev => [...prev, heartId]);
      
      // Remove floating heart after animation
      setTimeout(() => {
        setFloatingHearts(prev => prev.filter(id => id !== heartId));
      }, 2000);
      
      // Reset like state after a delay
      setTimeout(() => {
        setIsLiked(false);
      }, 1000);
    }
  };

  const handleComment = () => {
    setComments(prev => prev + 1);
  };

  const formatCount = (count: number) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
  };

  return (
    <div className="video-demo">
      <div className="phone-mockup">
        <div className="phone-frame">
          <div className="phone-screen">
            <div className="status-bar">
              <div className="time">9:41</div>
              <div className="indicators">
                <div className="signal"></div>
                <div className="wifi"></div>
                <div className="battery"></div>
              </div>
            </div>
            
            <div className="video-container">
              <video
                className="demo-video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onLoadedData={handleVideoLoad}
                onError={handleVideoError}
              >
                <source src="/oscarvideo.mov" type="video/quicktime" />
                <source src="/oscarvideo.mov" type="video/mp4" />
              </video>
              
              {!isLoaded && !hasError && (
                <div className="video-loading">
                  <div className="loading-spinner"></div>
                </div>
              )}
              
              {hasError && (
                <div className="video-placeholder">
                  <div className="placeholder-content">
                    <div className="placeholder-icon">▶</div>
                    <p>Oscar AI Demo</p>
                    <small>Intelligent waste sorting in action</small>
                  </div>
                </div>
              )}
            </div>
            
            <div className="video-overlay">
              <div className="overlay-header">
                <div className="profile">
                  <div className="avatar">O</div>
                  <div className="profile-info">
                    <div className="username">oscar_ai</div>
                    <div className="subtitle">AI Waste Management</div>
                  </div>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
              
              <div className="tiktok-sidebar">
                <div 
                  className={`sidebar-item ${isLiked ? 'liked' : ''}`}
                  onClick={handleLike}
                >
                  <div className="sidebar-icon" style={{ color: isLiked ? '#ff3040' : 'white' }}>
                    {isLiked ? '❤️' : '🤍'}
                  </div>
                  <div className="sidebar-count">{formatCount(likes)}</div>
                </div>
                <div 
                  className="sidebar-item commented"
                  onClick={handleComment}
                >
                  <div className="sidebar-icon">💬</div>
                  <div className="sidebar-count">{formatCount(comments)}</div>
                </div>
                <div className="sidebar-item">
                  <div className="sidebar-icon">📤</div>
                  <div className="sidebar-count">456</div>
                </div>
                <div className="sidebar-item">
                  <div className="sidebar-icon spinning">🎵</div>
                </div>
              </div>
              
              {/* Floating Hearts */}
              {floatingHearts.map(heartId => (
                <div key={heartId} className="floating-heart">❤️</div>
              ))}
              
              <div className="overlay-footer">
                <div className="description">
                  <strong>oscar_ai</strong> Revolutionary waste sorting technology
                </div>
                <div className="hashtags">
                  #AI #Sustainability #Innovation #WasteManagement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDemo;
