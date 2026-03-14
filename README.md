# Deepthi's AI Recruiter Assistant (OpenAI version)

## Files
```
recruiter-bot/
├── index.html      ← Chat UI
├── api/
│   └── chat.js     ← Secure backend (OpenAI call — key never exposed)
├── vercel.json     ← Deployment config
└── README.md
```

## Deploy to Vercel (free, ~15 min)

### Step 1 — Create a GitHub account
Go to https://github.com and sign up if you don't have one.

### Step 2 — Create a new repository
1. Click "New repository"
2. Name it: recruiter-bot
3. Set to Public
4. Click "Create repository"

### Step 3 — Upload your files
In your new repo, click "uploading an existing file"
Upload all 4 files:
- index.html
- api/chat.js
- vercel.json
- README.md

Note: To upload the api/chat.js file, you need to create the folder.
On GitHub, when uploading, type the path as:  api/chat.js

### Step 4 — Deploy on Vercel
1. Go to https://vercel.com
2. Sign up with your GitHub account
3. Click "Add New Project"
4. Select your "recruiter-bot" repository
5. Click "Deploy" (no other settings needed)

### Step 5 — Add your OpenAI API key (IMPORTANT)
1. In Vercel dashboard → your project → Settings → Environment Variables
2. Add:
   Name:   OPENAI_API_KEY
   Value:  sk-... (your OpenAI key)
3. Click Save
4. Go to Deployments tab → click the 3 dots → Redeploy

### Step 6 — Update your links
Open index.html and replace:
- YOUR_LINKEDIN  →  your actual LinkedIn URL
- YOUR_RESUME_PDF_LINK  →  Google Drive link to your resume PDF

### Step 7 — Add to LinkedIn
1. Go to LinkedIn profile → Add section → Featured
2. Add a link → paste your Vercel URL
3. Title: "Chat with my AI assistant →"

## Cost
OpenAI gpt-4o-mini is very cheap.
~1000 recruiter conversations ≈ $0.50
Your existing credits will last a long time.

## Customizing your profile
Open index.html, find SYSTEM_MESSAGE (around line 160)
Edit the profile details to add more specific experience or projects.
