# 📚 Summarist - Book Summary Platform

A modern book summary platform built with Next.js, TypeScript, Tailwind CSS, and Supabase. Get the key insights from bestselling books in minutes.

![Summarist Preview](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Summarist+Dashboard)

## 🌟 Features

- **📖 Book Summaries**: Access condensed versions of bestselling books
- **🎧 Audio Summaries**: Listen to book summaries on the go
- **🔐 Authentication**: Secure user authentication with Supabase
- **💳 Premium Subscriptions**: Tiered access to premium content
- **📱 Responsive Design**: Works seamlessly on all devices
- **🎨 Modern UI**: Clean, professional interface with smooth animations
- **⚡ Performance**: Optimized images and fast loading times

## 🚀 Live Demo

**[View Live Demo](https://summarist.vercel.app)** *(Replace with your deployed URL)*

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Authentication & Database**: Supabase
- **State Management**: Zustand
- **Icons**: React Icons
- **Deployment**: Vercel
- **Styling**: Tailwind CSS with custom components

## 📋 Prerequisites

- Node.js 18+ and npm
- Supabase account
- Vercel account (for deployment)

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/summarist.git
cd summarist
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

```bash
cp .env.example .env.local
```

Update `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
summarist/
├── src/
│   ├── app/                    # Next.js 13+ App Router
│   │   ├── page.tsx           # Homepage
│   │   ├── for-you/           # Curated books page
│   │   ├── book/[id]/         # Individual book details
│   │   ├── player/[id]/       # Audio player page
│   │   ├── choose-plan/       # Subscription plans
│   │   └── settings/          # User settings
│   ├── components/            # Reusable UI components
│   │   ├── forms/            # Form components
│   │   ├── AuthModal.tsx     # Authentication modal
│   │   ├── BookCard.tsx      # Book display component
│   │   └── Sidebar.tsx       # Navigation sidebar
│   ├── lib/                   # Utility libraries
│   │   ├── supabaseClient.ts # Supabase configuration
│   │   ├── api.ts            # API functions
│   │   └── AuthProvider.tsx  # Authentication context
│   ├── store/                # State management
│   ├── types/                # TypeScript type definitions
│   └── utils/                # Helper functions
├── public/                    # Static assets
└── styles/                   # Global styles
```

## 🎨 Key Components

### Authentication
- Secure user authentication with Supabase Auth
- Login/Signup modals with form validation
- Protected routes and user session management

### Book Management
- Dynamic book loading from external API
- Search functionality with debouncing
- Book categorization (selected, recommended, suggested)

### Audio Player
- Custom HTML5 audio player
- Progress tracking and seeking
- Duration display and controls

### Responsive Design
- Mobile-first approach
- Collapsible sidebar navigation
- Optimized for all screen sizes

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
npm run type-check  # TypeScript checking
```

## 🌐 Deployment

### 🔒 Secure Vercel Deployment (Recommended)

This project uses a **secure deployment approach** that eliminates common `@secret` syntax errors while maintaining full security.

**Key Security Features:**
- ✅ No hardcoded secrets in code
- ✅ Vercel Dashboard environment variable management
- ✅ No `@secret` syntax issues
- ✅ Proper separation of client/server variables

### Quick Deploy Steps:

1. **Push to GitHub**: Ensure your code is in a GitHub repository

2. **Import to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel auto-detects Next.js configuration

3. **Add Environment Variables in Vercel Dashboard**:
   - `NEXT_PUBLIC_SUPABASE_URL`: `https://cgaiykwjcbtexhzlcrpw.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon key

4. **Deploy**: Click "Deploy" and wait for completion

**⚠️ Important**: This project **does not use** `@secret` syntax in `vercel.json` to avoid deployment conflicts. All environment variables are managed through Vercel's secure Dashboard.

📖 **For complete deployment instructions with security details, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

## � Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | ✅ Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | ✅ Yes |
| `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` | Stripe public key (for payments) | ❌ Optional |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspired by the original Summarist platform
- Book data provided by external APIs
- Icons by React Icons
- UI components styled with Tailwind CSS

## 📞 Support

If you have any questions or run into issues:

1. Check the [DEPLOYMENT.md](./DEPLOYMENT.md) guide
2. Review the [Issues](https://github.com/yourusername/summarist/issues) page
3. Create a new issue if needed

---

**Built with ❤️ using Next.js and TypeScript**
