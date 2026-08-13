# Saurabh Sonalakar | Software Development Engineer Portfolio

Personal portfolio website for Saurabh Sonalakar, built with Next.js (App Router), React, Tailwind CSS, and TypeScript. 

Designed to highlight expertise in Python, FastAPI, AI/ML, AWS, and GCP cloud architecture.

## 📸 Screenshots

![Hero Section](public/screenshots/hero-placeholder.png)
*(Note: Add screenshot of Hero Section to `public/screenshots/hero-placeholder.png`)*

![Projects Section](public/screenshots/projects-placeholder.png)
*(Note: Add screenshot of Projects Section to `public/screenshots/projects-placeholder.png`)*

## 🚀 Quick Start

### 1. Prerequisites
- Node.js (v18.17.0 or higher)
- npm (or yarn/pnpm/bun)

### 2. Setup Instructions
Clone the repository and install dependencies:

```bash
# Clone the repository
git clone <GITHUB_REPOSITORY_URL>

# Navigate into the project directory
cd website

# Install dependencies
npm install
```

### 3. Environment Variables
No secrets are required by default. 
To enable higher rate limits on the GitHub API integration (optional):
1. Copy `.env.example` to `.env.local`
2. Add your GitHub Personal Access Token (PAT) as `GITHUB_TOKEN=your_token_here`

> [!WARNING]
> Do **NOT** prefix this token with `NEXT_PUBLIC_` to prevent it from leaking to the client browser.

### 4. Development Instructions
Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to preview the site. Changes will hot-reload automatically.

### 5. Production Build Instructions
To verify and create an optimized production build:

```bash
# Lint the codebase
npm run lint

# Build the production bundle
npm run build

# Start the production server locally
npm run start
```

### 6. Deployment Instructions

This project is optimized for deployment on Vercel:

1. Push your code to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com) and click **Add New... > Project**.
3. Import your GitHub repository.
4. Leave the default build commands (`npm run build`).
5. Add `GITHUB_TOKEN` to the Environment Variables if needed.
6. Click **Deploy**.

Alternatively, it can be deployed on AWS Amplify, Render, or any standard Node.js hosting environment using the build instructions above.

## 📝 Configuration

All data displayed on the portfolio is managed centrally in the `src/data/` directory. Update the respective `.ts` files to modify your skills, experience, projects, or certifications without altering UI components.

- `src/data/profile.ts`: Core personal details
- `src/data/projects.ts`: Portfolio projects
- `src/data/experience.ts`: Work history
- `src/data/github.ts`: GitHub open-source configuration

> [!IMPORTANT]
> **Resume File**: Place your actual resume PDF in `public/resume/Saurabh-Sonalakar-Resume.pdf`. Do not change the filename unless you also update the `Hero`, `Navbar`, and `MobileMenu` components.
