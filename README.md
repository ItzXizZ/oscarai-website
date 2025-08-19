# Oscar AI - Smart Waste Management Website

A modern, interactive website showcasing the Oscar AI smart waste processing system with 3D visualization and TikTok-style social media integration.

## 🎯 Features

- **3D Interactive Model**: Three.js-powered 3D trash bin with animations and glowing effects
- **TikTok Integration**: Phone mockup with vertical video and authentic TikTok overlay
- **Modern Design**: Green, white, and black theme with smooth animations
- **Responsive Layout**: Works on desktop and mobile devices
- **Interactive Elements**: Hover effects, particle systems, and engaging animations

## 🔧 Setup Instructions

1. **Download the 3D Model**:
   - From Fusion 360, download your Oscar AI model in **OBJ** format
   - If available, also download the **MTL** file (materials) for better textures
   - OBJ is the most web-compatible format from your available options

2. **Add Your 3D Model**:
   - Place your downloaded model files in the project root:
     - `oscar-ai-model.obj` (required)
     - `oscar-ai-model.mtl` (optional, for materials/textures)
   - Open `script.js` and find line ~150 where it says `this.createPlaceholderModel();`
   - Replace it with: `this.loadOBJModel('oscar-ai-model.obj', 'oscar-ai-model.mtl');`
   - Or if you don't have materials: `this.loadOBJModel('oscar-ai-model.obj');`

3. **Video Integration** ✅:
   - Your `oscarvideo.mov` is already integrated!
   - It will automatically play in the TikTok phone mockup
   - The video shows your actual Oscar AI in action

4. **Open the Website**:
   - Simply open `index.html` in a web browser
   - For best results, serve it from a local web server (e.g., using Live Server in VS Code)

## 🎨 Customization

### Colors
The main brand colors are defined in CSS:
- Primary Green: `#22c55e`
- Dark Green: `#16a34a`
- Black: `#000000`
- White: `#ffffff`

### 3D Model Settings
In `script.js`, you can adjust:
- Model scale: `this.model.scale.set(2, 2, 2);`
- Position: `this.model.position.set(0, -1, 0);`
- Auto-rotation speed: `this.controls.autoRotateSpeed = 2;`

### Animations
All animations can be customized in the CSS file:
- Glow effects: `@keyframes glow`
- Floating animations: `@keyframes float`
- Particle effects: `@keyframes pulse`

## 📱 TikTok Features

The phone mockup includes:
- Authentic TikTok UI with user profile
- Interactive like button with heart animations
- Share button with ripple effects
- Spinning music indicator
- Animated waste sorting demonstration

## 🌐 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

Requires WebGL support for 3D model rendering.

## 📁 File Structure

```
OscarAI/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # 3D model and interactions
├── README.md           # This file
├── oscar-ai-model.obj  # Your 3D model (to be added)
├── oscar-ai-model.mtl  # Materials file (optional)
└── oscarvideo.mov      # Your demo video ✅
```

## 🚀 Going Live

To deploy this website:
1. Upload all files to your web hosting service
2. Ensure the 3D model file is in the same directory
3. The site will work immediately - no server-side setup required

## 🎯 Performance Tips

- The 3D model should be under 10MB for good loading times
- Optimize your demo video to be under 5MB
- The placeholder model will show while your real model loads

## 🤖 Technical Details

- Built with vanilla HTML, CSS, and JavaScript
- Uses Three.js for 3D rendering
- No external dependencies beyond Three.js CDN
- Fully responsive design
- Optimized for performance and accessibility

---

**Ready to showcase your Oscar AI innovation with style! 🚀**
