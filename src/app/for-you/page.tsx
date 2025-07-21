'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useAuth } from '../../lib/AuthProvider'
import { signOut } from '../../lib/supabaseAuth'

export default function ForYouPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/')
    }
  }, [user, loading, router])

  const handleLogout = async () => {
    await signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="for-you__container">
        <div className="loading">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="for-you__container">
      <header className="for-you__header">
        <h1>Welcome to Summarist!</h1>
        <div className="for-you__user-info">
          <span>Logged in as: {user.email}</span>
          <button onClick={handleLogout} className="btn">
            Logout
          </button>
        </div>
      </header>
      
      <main className="for-you__main">
        <div className="for-you__section">
          <h2 className="for-you__section--title">Selected just for you</h2>
          <div className="selected-book">
            <div className="selected-book__content">
              <Image 
                src="/assets/landing.png" 
                alt="Featured Book" 
                className="selected-book__image"
                width={120}
                height={160}
              />
              <div className="selected-book__info">
                <div className="selected-book__subtitle">Book of the day</div>
                <h3 className="selected-book__title">The One Thing</h3>
                <div className="selected-book__author">Gary Keller</div>
                <div className="selected-book__description">
                  The surprisingly simple truth behind extraordinary results. 
                  Learn how to focus on what matters most and achieve your goals.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="for-you__section">
          <h2 className="for-you__section--title">Recommended For You</h2>
          <div className="books__grid">
            <div className="book__card">
              <div className="book__card--wrapper">
                <div className="book__image--wrapper">
                  <Image 
                    src="/assets/logo.png" 
                    alt="Book" 
                    className="book__image"
                    width={120}
                    height={160}
                  />
                </div>
                <div className="book__content">
                  <div className="book__title">Sample Book 1</div>
                  <div className="book__author">Author Name</div>
                  <div className="book__subtitle">A great book for learning</div>
                  <div className="book__details">
                    <div className="book__duration">5 min read</div>
                    <div className="book__rating">
                      <span className="book__rating--number">4.5</span>
                      <div className="book__stars">
                        <span className="book__star book__star--filled">★</span>
                        <span className="book__star book__star--filled">★</span>
                        <span className="book__star book__star--filled">★</span>
                        <span className="book__star book__star--filled">★</span>
                        <span className="book__star">★</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="book__card">
              <div className="book__card--wrapper">
                <div className="book__image--wrapper">
                  <Image 
                    src="/assets/logo.png" 
                    alt="Book" 
                    className="book__image"
                    width={120}
                    height={160}
                  />
                </div>
                <div className="book__content">
                  <div className="book__title">Sample Book 2</div>
                  <div className="book__author">Author Name</div>
                  <div className="book__subtitle">Another great book</div>
                  <div className="book__details">
                    <div className="book__duration">8 min read</div>
                    <div className="book__rating">
                      <span className="book__rating--number">4.2</span>
                      <div className="book__stars">
                        <span className="book__star book__star--filled">★</span>
                        <span className="book__star book__star--filled">★</span>
                        <span className="book__star book__star--filled">★</span>
                        <span className="book__star book__star--filled">★</span>
                        <span className="book__star">★</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
