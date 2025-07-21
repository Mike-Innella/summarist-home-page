# Summarist - Vercel Deployment Guide

## Prerequisites

1. **Vercel Account**: Create an account at [vercel.com](https://vercel.com)
2. **Supabase Project**: Set up a Supabase project at [supabase.com](https://supabase.com)
3. **GitHub Repository**: Push your code to a GitHub repository

## Environment Variables Setup

### Required Environment Variables

Copy the values from your Supabase project dashboard:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional: Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### How to Find Supabase Values

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to **Settings** → **API**
4. Copy the **Project URL** and **anon/public key**

## Deployment Steps

### Method 1: Deploy via Vercel Dashboard

1. **Import Project**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel will auto-detect this as a Next.js project

2. **Configure Environment Variables**:
   - In the deployment screen, expand "Environment Variables"
   - Add each variable from the list above
   - Click "Add" for each one

3. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete (usually 2-3 minutes)

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? summarist (or your preferred name)
# - Directory? ./
# - Want to modify settings? No

# Set environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY

# Deploy to production
vercel --prod
```

## Supabase Configuration

### Authentication URLs

In your Supabase dashboard:

1. Go to **Authentication** → **URL Configuration**
2. Add your Vercel domain to:
   - **Site URL**: `https://your-app-name.vercel.app`
   - **Redirect URLs**: `https://your-app-name.vercel.app/auth/callback`

### Database Setup (Optional)

If you want to implement user libraries and bookmarks:

```sql
-- Create library table
CREATE TABLE library (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users,
  book_id TEXT,
  status TEXT CHECK (status IN ('saved', 'completed')),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE library ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own library" ON library
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own library" ON library
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own library" ON library
  FOR UPDATE USING (auth.uid() = user_id);
```

## Post-Deployment Checklist

### ✅ Functionality Tests

1. **Homepage**: Loads without errors
2. **Authentication**: 
   - Login modal opens
   - Sign up modal opens
   - Form validation works
3. **For You Page**: Books load and display correctly
4. **Book Details**: Individual book pages work
5. **Navigation**: Sidebar navigation functions
6. **Responsive Design**: Test on mobile devices

### ✅ Performance Tests

1. **Lighthouse Score**: Aim for 90+ on all metrics
2. **Image Loading**: Book covers load quickly
3. **Page Speed**: Fast navigation between pages
4. **Bundle Size**: Check in Vercel dashboard

## Troubleshooting

### Common Issues

1. **Environment Variables Not Working**:
   - Ensure variables start with `NEXT_PUBLIC_` for client-side access
   - Redeploy after adding environment variables

2. **Supabase Connection Issues**:
   - Verify URL and API key are correct
   - Check Supabase project is active

3. **Build Failures**:
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are in package.json

4. **Authentication Issues**:
   - Verify redirect URLs in Supabase settings
   - Check site URL configuration

### Getting Help

- **Vercel Issues**: Check [Vercel Documentation](https://vercel.com/docs)
- **Supabase Issues**: Check [Supabase Documentation](https://supabase.com/docs)
- **Next.js Issues**: Check [Next.js Documentation](https://nextjs.org/docs)

## Production Optimizations

### Performance
- Images are optimized with Next.js Image component
- Lazy loading implemented for better performance
- Proper caching headers via Vercel

### SEO
- Meta tags configured in layout.tsx
- Proper semantic HTML structure
- Accessible alt attributes on images

### Security
- Environment variables properly secured
- Supabase RLS policies (when implemented)
- No sensitive data in client-side code

---

**Your Summarist app is now ready for production! 🚀**
