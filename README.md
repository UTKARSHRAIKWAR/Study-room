# 🧠 Smart Study Room with GPT Coach

Welcome to the **Smart Study Room** – a virtual learning space that helps you study smarter, not harder. It combines focus tools with GPT-powered AI features to keep you productive, motivated, and on track.

---

## 📌 What is it?

A productivity web app designed for students and self-learners. With an intuitive UI and AI tools, it allows you to:

- Focus using the **Pomodoro technique**
- Ask GPT **study-related questions**
- Generate **flashcards and quizzes** instantly
- Take and **summarize notes** with AI
- Track your study sessions and progress over time

Whether you're preparing for exams, learning to code, or studying history – this app is your all-in-one study companion.

---

## ✨ Key Features

| Feature | Description |
|--------|-------------|
| ⏱️ **Pomodoro Timer** | Stay focused with work/break intervals and log your completed sessions |
| 🤖 **GPT Study Coach** | Ask questions, get explanations, and generate learning material instantly |
| 📝 **Notes + Summarizer** | Write study notes and convert them into summarized key points |
| 🧾 **Flashcards Generator** | Enter a topic and get Q&A style flashcards to test yourself |
| 🧪 **Quiz Generator** | Create 5-question multiple-choice quizzes from any topic |
| 📈 **Analytics Dashboard** | See how many sessions you’ve completed, time studied, quiz scores, etc. |
| 🧑‍🤝‍🧑 **Study With Friends** *(optional)* | Join a room and sync Pomodoro sessions with friends in real-time |
| 🎙️ **Voice Mode** *(bonus)* | Talk to GPT using your mic – great for hands-free studying |

---

## 🧠 Why This Project?

Many students struggle with:
- Staying focused for long periods
- Organizing their notes
- Finding good self-test resources
- Knowing what to study next

This app solves all of those problems using **smart, AI-enhanced tools** – helping learners study efficiently and independently.

---

## 🛠️ Tech Stack

### Frontend
- **React.js / Next.js** – For fast and modern UI
- **Tailwind CSS** – Utility-first styling
- **Framer Motion** – Smooth animations
- **Socket.IO** *(optional)* – Real-time collaboration

### Backend
- **Node.js + Express** – REST API and routing
- **OpenAI API** – GPT-4 for Q&A, flashcards, quizzes, summarization
- **Supabase or MongoDB** – Store user sessions, notes, quiz scores
- **JWT / Clerk** – Secure user authentication

---

## 📁 Folder Structure

```
smart-study-room/
│
├── /client          # Frontend (Next.js or React)
│   ├── /components
│   ├── /pages
│   ├── /utils
│   └── /styles
│
├── /server          # Backend (Express)
│   ├── /routes
│   ├── /controllers
│   ├── /models
│   └── /utils
│
├── .env             # Environment variables (OpenAI API key, DB URI)
└── README.md
```

---

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/smart-study-room.git
cd smart-study-room
```

2. **Install dependencies**

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

3. **Set up environment variables**

Create a `.env` file with your OpenAI API key and DB credentials:

```
OPENAI_API_KEY=your_openai_key
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
```

4. **Run the app**

```bash
# From root directory
npm run dev         # or use concurrently to run both
```

---

## 🧪 GPT Prompt Examples

- `Summarize these notes: [paste notes]`
- `Create 5 MCQs about Python decorators`
- `Explain recursion like I’m 10 years old`
- `Make flashcards for the French Revolution`

---

## 📊 Future Plans

- 🔐 Streaks and gamification
- 📅 Daily study challenges
- 📂 Note tagging and folders
- 🧩 Browser extension for quick access

---

## ✅ Final Deliverables

- 🌐 **Live Demo**: _Coming soon..._
- 📁 **GitHub Repo**: [Your Repo Link]
- 📹 **Demo Video**: Optional YouTube walkthrough

---

## 🙌 Contributing

Contributions are welcome! Whether it's fixing a bug, improving the UI, or adding new features — feel free to fork the repo and submit a PR.

---

## 📄 License

MIT License © 2025 [Your Name]

---

## ⭐ Show your support

If you like this project, give it a ⭐ on GitHub and share it with fellow learners!
