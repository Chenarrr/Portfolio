# Chenar Abdulrazaq - Portfolio

🎨 **A stunning, premium portfolio website built with React and Docker**

![Portfolio Preview](https://img.shields.io/badge/React-18.2-blue) ![Docker](https://img.shields.io/badge/Docker-Ready-blue) ![Status](https://img.shields.io/badge/Status-Active-success)

## ✨ Live Portfolio

A modern, responsive portfolio showcasing professional experience, projects, and skills with:
- 🎯 Premium dark mode design with vibrant gradients
- 🚀 Smooth animations and micro-interactions  
- 📱 Fully responsive (mobile, tablet, desktop)
- 🐳 Containerized with Docker for easy deployment
- ⚡ Lightning-fast with Vite

---

## 🚀 Quick Start

### **Prerequisites**

1. **Install Docker Desktop** (if not already installed):
   - Download from: https://www.docker.com/products/docker-desktop
   - Install and **start Docker Desktop** - make sure it's running!

2. **Verify Docker is running**:
   ```bash
   docker --version
   ```

### **Run the Portfolio**

#### **Option 1: Development Mode (Recommended for editing)**

1. **Make sure Docker Desktop is running** (check the system tray)

2. **Start the development server**:
   ```bash
   docker-compose up portfolio-dev
   ```
   
   Wait for the build to complete (first time takes a few minutes)

3. **Open your browser**: 
   - Navigate to: **http://localhost:5173**
   - Hot reload is enabled - changes will reflect automatically!

4. **Stop the server**:
   - Press `Ctrl + C` or run:
   ```bash
   docker-compose down
   ```

#### **Option 2: Production Mode (Optimized build)**

1. **Build and start production server**:
   ```bash
   docker-compose up portfolio-prod
   ```

2. **Open your browser**:
   - Navigate to: **http://localhost:8080**

---

## 📁 Project Structure

```
Portfolio/
├── 📂 src/
│   ├── 📂 components/          # React components
│   │   ├── Navbar.jsx         # Navigation with smooth scroll
│   │   ├── Hero.jsx           # Landing section with typing effect
│   │   ├── About.jsx          # About me with stats
│   │   ├── Experience.jsx     # Professional timeline
│   │   ├── Projects.jsx       # Portfolio projects
│   │   ├── Skills.jsx         # Skills with progress bars
│   │   ├── Contact.jsx        # Contact form
│   │   └── Footer.jsx         # Footer with links
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Design system & global styles
├── 📄 Dockerfile              # Docker configuration
├── 📄 docker-compose.yml      # Docker services
├── 📄 nginx.conf              # Production server config
├── 📄 vite.config.js          # Vite configuration
├── 📄 package.json            # Dependencies
└── 📄 index.html              # HTML entry point
```

---

## 🎨 Design Features

### **Color System**
- **Background**: Deep dark (#0a0a0f, #13131a)
- **Gradients**: 
  - Primary: Purple to Violet (#667eea → #764ba2)
  - Secondary: Pink to Red (#f093fb → #f5576c)
  - Accent: Blue to Cyan (#4facfe → #00f2fe)

### **Typography**
- **Headings**: Space Grotesk (Display font)
- **Body**: Inter (Clean, readable)

### **Animations**
- Fade in/up on scroll
- Floating shapes
- Typing effect in hero
- Progress bar animations
- Hover transitions
- Glassmorphism effects

---

## 🛠️ Customization Guide

### **1. Update Personal Information**

**Hero Section** (`src/components/Hero.jsx`):
```jsx
const fullText = 'Your Title Here';
// Update name, description, social links
```

**About Section** (`src/components/About.jsx`):
```jsx
// Update introduction, education, statistics
```

### **2. Add/Edit Projects**

**File**: `src/components/Projects.jsx`
```jsx
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    tech: ['React', 'Node.js'],
    icon: '🚀',
    github: 'https://github.com/...',
    live: 'https://...'
  }
];
```

### **3. Update Skills**

**File**: `src/components/Skills.jsx`
```jsx
const skillCategories = [
  {
    title: 'Category Name',
    icon: '🎨',
    skills: [
      { name: 'Skill Name', level: 85 }
    ]
  }
];
```

### **4. Modify Experience**

**File**: `src/components/Experience.jsx`
```jsx
const experiences = [
  {
    role: 'Job Title',
    company: 'Company Name',
    period: 'Date Range',
    icon: '💼',
    responsibilities: ['Task 1', 'Task 2']
  }
];
```

### **5. Change Colors**

**File**: `src/index.css`
```css
:root {
  --color-bg-primary: #0a0a0f;
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Customize any color variable */
}
```

---

## 📱 Sections Overview

| Section | Description |
|---------|-------------|
| **Hero** | Eye-catching intro with typing animation & CTA buttons |
| **About** | Personal story, education, location, focus areas |
| **Experience** | Professional timeline with 3 roles |
| **Projects** | 3 featured projects with tech stacks & links |
| **Skills** | 4 categories with animated progress bars |
| **Contact** | Contact form + info cards (email, phone, location) |
| **Footer** | Quick links, social media, copyright |

---

## 🚢 Deployment Options

### **Docker Hub**
```bash
# Build image
docker build -t your-username/portfolio .

# Push to Docker Hub
docker push your-username/portfolio

# Deploy anywhere that supports Docker
```

### **Cloud Platforms**
- **DigitalOcean**: App Platform or Droplets
- **AWS**: ECS, EC2, Elastic Beanstalk  
- **Azure**: Container Instances
- **Heroku**: Container Registry
- **Google Cloud**: Cloud Run

### **Static Hosting (without Docker)**
```bash
# Inside container or locally with Node.js
npm install
npm run build

# Deploy 'dist' folder to:
# - Vercel
# - Netlify  
# - GitHub Pages
# - Cloudflare Pages
```

---

## 🐛 Troubleshooting

### **Docker not starting**
- Make sure Docker Desktop is running
- Check system tray for Docker icon
- Restart Docker Desktop if needed

### **Port already in use**
```bash
# Change port in docker-compose.yml
ports:
  - "3000:5173"  # Change 5173 to another port
```

### **Module not found errors**
```bash
# Rebuild the container
docker-compose build --no-cache portfolio-dev
docker-compose up portfolio-dev
```

---

## 📝 Technologies Used

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, Vite 5 |
| **Styling** | Vanilla CSS, CSS Variables |
| **Fonts** | Google Fonts (Inter, Space Grotesk) |
| **Icons** | Inline SVG |
| **Containerization** | Docker, Docker Compose |
| **Production** | Nginx |
| **Development** | Hot Module Replacement (HMR) |

---

## 👤 Contact

**Chenar Abdulrazaq**  
📧 Email: [chenar.abdulrazaq@ukh.edu.krd](mailto:chenar.abdulrazaq@ukh.edu.krd)  
💼 GitHub: [@Chenarrr](https://github.com/Chenarrr)  
📱 Phone: +964 750 226 5572  
📍 Location: Erbil, Iraq

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Design inspired by modern portfolio trends and Dribbble
- Icons from custom SVG library
- Fonts from Google Fonts
- Built with ❤️ and ☕

---

## ⭐ Show Your Support

If you like this portfolio, please give it a ⭐ on GitHub!

---

**Made with passion by Chenar Abdulrazaq | 2026**
