# Udit Chouhan - Portfolio Website

A modern, responsive portfolio website built with React + Vite, showcasing my skills, education, and projects.

## 🚀 Features

- **Modern Design**: Premium aesthetics with glassmorphism, gradients, and smooth animations
- **Fully Responsive**: Works seamlessly on all devices (desktop, tablet, mobile)
- **Smooth Animations**: Engaging micro-interactions and scroll animations
- **Easy to Customize**: Well-organized components and clear code structure
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📋 Sections

1. **Hero** - Eye-catching introduction with animated elements
2. **About** - Personal information and hobbies
3. **Skills** - Frontend skills and programming languages with progress bars
4. **Education** - Academic background in timeline format
5. **Projects** - Featured projects (ready for you to add your own!)
6. **Contact** - Contact form and information

## 🛠️ Technologies Used

- React 18
- Vite 5
- CSS3 (Custom Design System)
- Modern JavaScript (ES6+)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

## 🎨 Customization

### Adding Your Projects

Edit `src/components/Projects.jsx` and update the `projects` array:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description here...",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/path/to/your/image.jpg", // or null for placeholder
    liveLink: "https://your-live-demo.com",
    codeLink: "https://github.com/yourusername/repo"
  },
  // Add more projects...
];
```

### Updating Personal Information

- **Contact Info**: Edit `src/components/Contact.jsx`
- **About Section**: Edit `src/components/About.jsx`
- **Skills**: Edit `src/components/Skills.jsx`
- **Education**: Edit `src/components/Education.jsx`

### Changing Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  /* etc... */
}
```

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px

## 🚢 Build for Production

```bash
npm run build
```

The build files will be in the `dist` folder, ready to deploy!

## 📝 Notes

- The contact form is currently a demo. Integrate with a backend service or email API for full functionality.
- Social media links in the Hero section need to be updated with your actual profiles.
- Add your own project screenshots in the Projects section.

## 🎓 Perfect for

- College internship applications
- Job applications
- Personal branding
- Showcasing your work

## 📄 License

Feel free to use this template for your own portfolio!

---

**Built with ❤️ by Udit Chouhan**
