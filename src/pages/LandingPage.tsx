import { NavLink } from "react-router";
import { Header } from "../components/common/Header";
import { useEffect, useRef, useState } from "react";
import FlowCapLogo from "../components/common/Logo.tsx";
import ScrollGraphAnimation from "../components/animations/ScrollingGraphAnimation.tsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/LandingPage.css";

gsap.registerPlugin(ScrollTrigger);

export function LandingPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!pathRef.current || !sectionRef.current) return;

      const pathLength = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "bottom 70%",
          scrub: 1, // Smoothly links animation to scroll position
          markers: false,
        },
      });

      // Animate the path drawing
      tl.to(
        pathRef.current,
        {
          strokeDashoffset: 0,
          ease: "none",
        },
        0
      );

      // Animate the money counter (Numerical Ticker)
      const obj = { value: 2000 };
      tl.to(
        obj,
        {
          value: 35000,
          duration: 1,
          ease: "none",
          onUpdate: () => {
            if (counterRef.current) {
              counterRef.current.innerText = `$${Math.floor(
                obj.value
              ).toLocaleString()}`;
            }
          },
        },
        0
      ); // Start at the same time as the path (index 0)
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <>
      <title>Get the capital your hustle deserves.</title>
      <Header />
      <div className="Landing animated-gradient">
        <section id="hero" className="hero">
          <div className="hero-content">
            <FlowCapLogo size={200} />
            <h1>Fund your hustle, share your profit</h1>
            <p>Interest free capital for serious hustlers</p>
            <NavLink className="hero-btn" to="/get-started">
              Get Started
            </NavLink>
          </div>
        </section>

        <section id="growth" className="growth-section" ref={sectionRef}>
          <div className="growth-content">
            <h1>Your capital, growing</h1>
            <div className="money-counter" ref={counterRef}>
              $1,000
            </div>
            <svg
              className="stock-graph"
              viewBox="0 0 500 200"
              preserveAspectRatio="none"
            >
              <path
                ref={pathRef}
                d="M0 180 L80 150 L160 165 L240 120 L320 130 L400 80 L500 40"
                fill="none"
                stroke="#00ff9c"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </section>

        <section id="analytics">
          <ScrollGraphAnimation />
        </section>

        <section id="how-it-works" className="how-it-works">
          <div className="section-content">
            <h1>How It Works</h1>
            <p>Three simple steps to get funded</p>
            <div className="steps-container">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Apply</h3>
                <p>Tell us about your hustle and funding needs</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Get Approved</h3>
                <p>We review and approve qualified hustlers</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Grow Together</h3>
                <p>Receive capital and share your success</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="section-content">
            <h1>Why FlowCap?</h1>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h3>Zero Interest</h3>
                <p>No interest charges, just profit sharing</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3>Fast Approval</h3>
                <p>Get funded in days, not months</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🤝</div>
                <h3>Fair Partnership</h3>
                <p>We succeed when you succeed</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📈</div>
                <h3>Growth Support</h3>
                <p>Resources and mentorship included</p>
              </div>
            </div>
          </div>
        </section>

        <section id="install-app" className="install-app">
          <div>
            <h1>Download our App</h1>
            <p>For iOS & Android</p>
            <div className="app-buttons">
              <button className="app-btn">
                <span>📱</span> App Store
              </button>
              <button className="app-btn">
                <span>🤖</span> Google Play
              </button>
            </div>
          </div>
        </section>

        <section id="team" className="team">
          <div className="section-content">
            <h1>Meet the Team</h1>
            <p>Four person operation building the future of funding</p>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">👨‍💼</div>
                <h3>Co-Founder</h3>
                <p>Vision & Strategy</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">👩‍💻</div>
                <h3>Tech Lead</h3>
                <p>Engineering</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">👨‍💼</div>
                <h3>Operations</h3>
                <p>Business & Growth</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">👩‍🎨</div>
                <h3>Design Lead</h3>
                <p>Product & UX</p>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="cta-section">
          <div className="cta-content">
            <h1>Ready to fund your hustle?</h1>
            <p>
              Join hundreds of hustlers who've scaled their business with
              FlowCap
            </p>
            <NavLink className="hero-btn" to="/get-started">
              Get Started Now
            </NavLink>
          </div>
        </section>
      </div>
    </>
  );
}
