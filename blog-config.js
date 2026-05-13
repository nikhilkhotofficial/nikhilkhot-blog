// ============================================================
// BLOG CONFIG — Add new posts here!
// To add a new post, copy one block and paste it at the top.
// Set "comingSoon: true" for posts not ready yet.
// ============================================================

const BLOG_POSTS = [
  {
    id: "learning-styles",
    title: "Your Child Isn't a Slow Learner. The Method Might Just Be Wrong.",
    excerpt: "Every child carries a natural learning style. Once you find it — visual, auditory, kinesthetic, or reading/writing — the difference in how they learn can feel almost magical.",
    file: "learning-styles.html",
    tags: ["Child Development", "Learning Styles", "Psychology"],
    icon: "🧠",
    color: "#3182ce",
    featured: true,
    comingSoon: false,
    date: "May 2025"
  },
  {
    id: "exam-anxiety",
    title: "Why Children Fear Exams — and How to Fix It",
    excerpt: "The psychology behind exam anxiety and what parents can do before it becomes a bigger problem.",
    file: "exam-anxiety.html",
    tags: ["Psychology", "Exams", "Parenting"],
    icon: "😰",
    color: "#e53e3e",
    featured: false,
    comingSoon: true,
    date: ""
  },
  {
    id: "screen-time",
    title: "Screen Time vs Study Time — Finding the Balance",
    excerpt: "A practical guide for parents navigating mobile phones, YouTube, and homework in the same household.",
    file: "screen-time.html",
    tags: ["Parenting", "Technology", "Habits"],
    icon: "📵",
    color: "#d69e2e",
    featured: false,
    comingSoon: true,
    date: ""
  },
  {
    id: "comparison-trap",
    title: "The Comparison Trap — How It Silently Hurts Your Child",
    excerpt: "Why comparing your child to others feels motivating but does the opposite — and what to say instead.",
    file: "comparison-trap.html",
    tags: ["Psychology", "Parenting", "Self-Esteem"],
    icon: "🏆",
    color: "#805ad5",
    featured: false,
    comingSoon: true,
    date: ""
  },
  {
    id: "sleep-study",
    title: "Why Sleep Is the Most Underrated Study Tool",
    excerpt: "What science says about sleep, memory, and why late-night cramming is working against your child.",
    file: "sleep-study.html",
    tags: ["Science", "Habits", "Memory"],
    icon: "🌙",
    color: "#2b6cb0",
    featured: false,
    comingSoon: true,
    date: ""
  }
];

// ============================================================
// JSONBin Config — your free database (no billing needed!)
// Get your free key at: https://jsonbin.io → Sign up → API Keys
// ============================================================
const JSONBIN_CONFIG = {
  apiKey: "$2a$10$Arq55wHHMt9gvH6VXDD1tuLXtoUP5e1lTm5t0wPy.OKCamn8ueKU2",  // ← Paste your JSONBin Master Key here
  visitorsBinId: "6a04f933c0954111d81cf569", // ← Created automatically in setup
  likesBinId: "6a04fa03c0954111d81cf966",       // ← Created automatically in setup
};

// Admin email — only this person can open admin.html
const ADMIN_EMAIL = "nikhilkhot085@gmail.com"; // ← Change to YOUR email

// Firebase config (for Google login only — Firestore NOT used)
const firebaseConfig = {
  apiKey: "AIzaSyDBdMlwGYkSS1ZNkBayGhd4K6d3N3nRF64",
  authDomain: "nikhilkhot-blog.firebaseapp.com",
  projectId: "nikhilkhot-blog",
  storageBucket: "nikhilkhot-blog.firebasestorage.app",
  messagingSenderId: "937499143815",
  appId: "1:937499143815:web:402747088322848732d222"
};
