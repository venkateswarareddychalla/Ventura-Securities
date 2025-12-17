# Ventura Securities - IPO Application

A modern, responsive React application for displaying IPO (Initial Public Offering) listings and detailed information.

## 🚀 Features

### IPO List Page
- Clean table layout displaying all available IPOs
- Company information with logos
- Issue dates, sizes, and price ranges
- Minimum investment and lot size details
- Clickable rows for navigation to details
- Fully responsive mobile design

### IPO Details Page
- Comprehensive IPO information display
- Breadcrumb navigation
- Company header with logo and details
- IPO details grid (2-column layout)
- Interactive timeline showing IPO stages
- About the company section
- Download and Apply action buttons
- Mobile-optimized layout with back button

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library
- **Google Fonts (Sora)** - Typography

## 📁 Project Structure

```
venture/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── IPOList/
│   │   │   │   ├── IPOList.jsx
│   │   │   │   └── IPOList.css
│   │   │   └── IPODetails/
│   │   │       ├── IPODetails.jsx
│   │   │       └── IPODetails.css
│   │   ├── data/
│   │   │   └── ipoData.js
│   │   ├── App.jsx
│   │   └── index.css
│   ├── index.html
│   └── package.json
└── README.md
```

## 🎨 Design Features

- **Sora Font Family** - Modern, clean typography from Google Fonts
- **Color Variables** - Consistent color scheme throughout
- **Pixel-based Sizing** - All spacing and sizes in pixels for precision
- **Responsive Design** - Mobile-first approach with breakpoints
- **Clean UI** - Minimalist design with proper spacing and hierarchy

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px - Full table layout with all features
- **Tablet/Mobile**: ≤ 768px - Optimized card layout, vertical timeline

## 🎯 Key Implementation Details

### Static Data
- All IPO data is stored in `src/data/ipoData.js`
- Easy to update and maintain
- Sample data includes GO AIR, BAJAJ ENERGY, OYO, and ZOMATO

### Routing
- `/` - IPO List page
- `/ipo/:id` - IPO Details page

### Styling Approach
- CSS Modules per component
- Color variables only in root CSS
- All spacing, sizing, and typography in pixels
- No CSS frameworks - vanilla CSS for full control

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is part of the Ventura Securities ReactJS assignment.

## 👨‍💻 Development Notes

- Built with modern React practices (hooks, functional components)
- Clean code with no dead/unused code
- Optimized for performance and user experience
- Fully accessible navigation and interactions
