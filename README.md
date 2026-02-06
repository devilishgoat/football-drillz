# DrillBook - Football Training Scheduler

A Next.js application for scheduling and managing football drills with tags and calendar visualization.

## Features

- 🔐 User authentication (simple login/signup)
- 📅 Interactive calendar view
- ⚽ Create, view, and delete drills
- 🏷️ Tag system for organizing drills
- 💾 Local storage persistence
- 📱 Responsive design
- 🎨 Beautiful stadium-inspired UI

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd football-drills-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
football-drills-nextjs/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Main page with auth logic
├── components/
│   ├── AuthScreen.tsx        # Login/signup screen
│   ├── AuthScreen.module.css
│   ├── CalendarView.tsx      # Calendar component
│   ├── CalendarView.module.css
│   ├── DrillForm.tsx         # Form to create drills
│   ├── DrillForm.module.css
│   ├── DrillsList.tsx        # List of scheduled drills
│   ├── DrillsList.module.css
│   ├── Header.tsx            # App header with logout
│   ├── Header.module.css
│   ├── MainApp.tsx           # Main authenticated view
│   └── MainApp.module.css
├── lib/
│   └── types.ts              # TypeScript type definitions
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## Usage

### Creating an Account

1. Enter your email and password
2. Click "Login" or "Sign Up"
3. Your credentials are stored locally in the browser

### Scheduling a Drill

1. Fill in the drill details:
   - Drill name
   - Date and time
   - Duration (optional)
   - Description (optional)
   - Tags (e.g., "Passing", "Defense", "Conditioning")
2. Click "Schedule Drill"

### Managing Drills

- View all drills in the calendar view
- See upcoming drills in chronological order
- Delete drills using the "Delete" button

### Tags

- Add tags to categorize drills
- Press Enter or click "Add" to add a tag
- Click × to remove a tag

## Data Storage

All data is stored in the browser's localStorage:
- User accounts are stored per email
- Drills are stored separately for each user
- Data persists between sessions

## Design Features

- **Stadium-inspired theme** with football pitch green gradients
- **Glassmorphism UI** with backdrop blur effects
- **Custom typography** using Bebas Neue and Outfit fonts
- **Smooth animations** and micro-interactions
- **Responsive layout** that works on all screen sizes

## Build for Production

```bash
npm run build
npm run start
```

## Technologies Used

- Next.js 14 (App Router)
- React 18
- TypeScript
- CSS Modules
- Tailwind CSS (base utilities)

## License

MIT
