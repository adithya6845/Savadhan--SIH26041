# Savadhan 🛡️

**Immersive AR & 3D Vocational Safety Training Simulator**

Savadhan is a comprehensive safety training platform designed for industrial and mining workers. It bridges the gap between traditional classroom training and real-world hazards by providing interactive, mobile-first augmented reality simulations directly on standard smartphones, eliminating the need for expensive VR headsets.

## ✨ Key Features

- **AR Camera Mode**: Real-time 3D hazard overlays directly on the smartphone camera.
- **3D Simulations**: Explore 360° interactive industrial environments.
- **AI Safety Assistant (Savadhan Mitra)**: A dedicated safety chatbot to answer critical protocol queries.
- **Multilingual Support**: Fully accessible in English, Hindi, and regional languages.
- **Offline-First Architecture**: Continuous learning in low-connectivity areas like underground mines.
- **Cryptographic Certificates**: Tamper-proof achievement certificates with QR verification.
- **Admin Dashboard**: Comprehensive compliance tracking and analytics for safety officers.

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite, TailwindCSS (via standard CSS patterns)
- **3D / AR**: Three.js, React Three Fiber (R3F), WebXR
- **Backend & Database**: Supabase (PostgreSQL, Auth, Storage)
- **AI Integration**: Google Gemini (via Cloudflare Workers)
- **Offline Support**: IndexedDB

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (v9+)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adithya6845/Savadhan--SIH26041.git
   cd Savadhan--SIH26041
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5174`.

## 📦 Building for Production

To create a production-ready build:
```bash
npm run build
```
The optimized files will be generated in the `dist` directory.

## 📜 License

This project is licensed under the MIT License.
