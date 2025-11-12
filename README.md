# Sharma G - Portfolio

A modern, responsive portfolio website built with React.js and Tailwind CSS, showcasing professional experience, projects, and skills as a PostgreSQL Database Administrator.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **SEO Friendly**: Semantic HTML structure for better search engine optimization
- **Interactive Navigation**: Smooth scrolling navigation with mobile-friendly menu
- **Sections**:
  - Hero/Landing page with introduction
  - About section with key achievements
  - Professional experience timeline
  - Projects showcase
  - Technical skills categorized
  - Contact information with social links

## Technologies Used

- **React.js**: Frontend framework
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript (ES6+)**: Programming language

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the local server URL shown in the terminal (usually `http://localhost:5173`)

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx   # Navigation header
│   │   ├── Hero.jsx     # Landing section
│   │   ├── About.jsx    # About section
│   │   ├── Experience.jsx  # Professional experience
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── Skills.jsx      # Technical skills
│   │   ├── Contact.jsx     # Contact information
│   │   └── Footer.jsx      # Footer
│   ├── App.jsx          # Main app component
│   ├── index.css        # Global styles with Tailwind
│   └── main.jsx         # App entry point
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies

```

## Customization

To customize the portfolio with your own information:

1. Update contact information in `src/components/Contact.jsx`
2. Modify experience details in `src/components/Experience.jsx`
3. Update projects in `src/components/Projects.jsx`
4. Adjust skills in `src/components/Skills.jsx`
5. Change the hero section text in `src/components/Hero.jsx`
6. Update achievements in `src/components/About.jsx`

## Deployment

This portfolio can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use `gh-pages` package for deployment
- **Render**: Connect repository and set build command to `npm run build`

## License

This project is open source and available for personal use.

## Contact

- **Email**: sharmagin20@gmail.com
- **Phone**: +91 6379333956
- **GitHub**: [github.com/SharmaG-20](https://github.com/SharmaG-20)
- **LinkedIn**: [linkedin.com/in/sharma-g-69744423b](https://www.linkedin.com/in/sharma-g-69744423b/)

---

Built with React.js & Tailwind CSS
