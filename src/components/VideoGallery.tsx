import React from "react"
import { motion } from 'framer-motion'
import CardStack from "./CardStack"
import "./VideoGallery.css"

export default function VideoGallery() {
  // Removed unused state variable
  // const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  // Array of unlisted YouTube video URLs - replace these with your actual video links
  // Example format: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
  const youtubeVideos = [
    "https://www.youtube.com/watch?v=qHNhmkgJe2E",
    "https://www.youtube.com/watch?v=evu4aMS4PDw",
    "https://www.youtube.com/watch?v=v36Pa6Jev7s",
    "https://www.youtube.com/watch?v=zk3CPQxi51A",
  ]

  // Removed unused function
  // const handleVideoChange = (index: number) => {
  //   setCurrentVideoIndex(index)
  // }

  return (
    <div className="video-gallery" id="video-gallery">
      {/* Hero Section */}
      <section className="video-gallery-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="video-gallery-hero-content"
          >
            <h1 className="video-gallery-title">
              <span className="title-line">Video Gallery</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="gallery-content">
        <div className="container">
          <div className="cardStackWrapper">
            <CardStack 
              images={youtubeVideos}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
