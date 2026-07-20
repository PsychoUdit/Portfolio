# 🎯 Quick Start Guide

## For College Internship Showcase

### Getting Started (3 Easy Steps!)

#### Step 1: Install Dependencies
Open Command Prompt in this folder and run:
```
npm install
```

#### Step 2: Start the Development Server
Run:
```
npm run dev
```

Or simply double-click `start.bat` file!

#### Step 3: Open Your Browser
Visit: `http://localhost:5173`

---

## 📝 Adding Your Projects

This is the MOST IMPORTANT step for your internship showcase!

### How to Add Your 2 Projects:

1. Open `src/components/Projects.jsx`
2. Find the `projects` array (around line 7)
3. Replace the placeholder data with your actual projects:

```javascript
const projects = [
  {
    id: 1,
    title: "Weather Application",  // YOUR PROJECT NAME
    description: "A real-time weather app built with React that fetches data from OpenWeather API. Features include current weather, 5-day forecast, and location search.",  // DETAILED DESCRIPTION
    technologies: ["React", "API", "CSS"],  // TECHNOLOGIES USED
    image: "/images/weather-app.png",  // ADD SCREENSHOT (or null)
    liveLink: "https://yourproject.vercel.app",  // LIVE DEMO LINK
    codeLink: "https://github.com/yourusername/weather-app"  // GITHUB LINK
  },
  {
    id: 2,
    title: "Todo List App",
    description: "An interactive todo list application with local storage support. Users can add, edit, delete, and mark tasks as complete.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    image: "/images/todo-app.png",
    liveLink: "https://yourtodo.vercel.app",
    codeLink: "https://github.com/yourusername/todo-app"
  }
];
```

### Adding Project Screenshots:

1. Create a folder: `public/images/`
2. Add your project screenshots there
3. Reference them in the `image` field: `"/images/your-screenshot.png"`

---

## 🎨 Customization Tips

### Update Social Links (Hero Section)

Edit `src/components/Hero.jsx` (around line 32-55):
- Add your GitHub profile link
- Add your LinkedIn profile link
- Email and phone are already there from your resume!

### Change Your Photo/Avatar

The hero section has a placeholder avatar. To add your photo:
1. Add your photo to `public/` folder (e.g., `profile.jpg`)
2. Edit `src/components/Hero.jsx`
3. Replace the avatar placeholder SVG with:
```jsx
<img src="/profile.jpg" alt="Udit Chouhan" />
```

### Update Hobbies

Edit `src/components/About.jsx` to add/remove hobbies.

---

## 🚀 Deploying Your Portfolio

### Recommended: Vercel (Free & Easy!)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Click "New Project"
5. Import your repository
6. Click "Deploy"

Done! You'll get a live URL like: `yourname.vercel.app`

### Alternative: Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site"
4. Connect GitHub repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy!

---

## ✅ Pre-Submission Checklist

Before showing to colleges:

- [ ] Added both projects with descriptions
- [ ] Added project screenshots
- [ ] Updated social media links (GitHub, LinkedIn)
- [ ] Verified all contact information is correct
- [ ] Tested on mobile phone
- [ ] Deployed to a live URL
- [ ] Tested all links work

---

## 🔧 Troubleshooting

### Port Already in Use?
If port 5173 is busy, Vite will automatically use the next available port.

### Blank Page?
- Check browser console for errors (F12)
- Make sure all components are imported correctly
- Run `npm install` again

### Styling Issues?
- Hard refresh: Ctrl + Shift + R
- Clear browser cache

---

## 💡 Pro Tips for Internship

1. **Keep it Updated**: Regularly add new projects
2. **Write Good Descriptions**: Explain WHAT you built and WHY
3. **Show Your Process**: Mention challenges you overcame
4. **Use Real Images**: Screenshots make projects look professional
5. **Test Everything**: Click every link, test every button
6. **Mobile Matters**: Many recruiters view on mobile first!

---

## 🎓 Good Luck with Your Internship!

Your portfolio is now ready to impress! 

**Remember**: This is YOUR showcase. Make it personal, keep it updated, and let your passion for development shine through!

---

**Need Help?** 
- Check the main README.md for detailed documentation
- Review the code comments in each component
- Each CSS file is well-organized and commented

**Happy Coding! 🚀**
