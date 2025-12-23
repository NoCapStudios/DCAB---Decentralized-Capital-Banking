import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollGraphAnimation.css";
gsap.registerPlugin(ScrollTrigger);

export default function ScrollGraphAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section">
      <div className="section-inner">
        <h2 className="section-title">What do we even do?</h2>

        <div className="content-grid">
          {/* LEFT */}
          <div className="card primary">
            <h2>Transparency & Honesty</h2>

            <div className="card inner diff-color">
              <h3>“Decentralized Banking”</h3>
              <p>
                FlowCap is a capital platform built to be the opposite of
                confusing, predatory lending. We establish direct connections
                between funders and hustlers through simple interest-free
                profit-share or revenue-share agreements which both parties can
                easily comprehend. The platform allows users to view fundamental
                deal details through its easy-to-understand interface which
                displays both current payment status and all completed
                transactions and outstanding funds. The company offers all
                agreements with no surprise fees and no hidden interest rates
                which provide customers with completely transparent deals they
                can depend on.
              </p>
              <span className="link">Read our security & policies</span>
            </div>

            <div className="card inner">
              <h3>Absolutely 0% Interest</h3>
              <p>
                This is halal banking. No interest. Instead, we use a flat,
                transparent revenue-share model aligned with Islamic values.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="card secondary">
            <h2>User Growth</h2>
            <div className="card inner">
              <h3>See exactly where your money stands</h3>
              <p>
                The platform shows every deal in a simple interface with current
                payment status, completed transactions, and remaining balance.
                It offers clear agreements with no surprise fees and no hidden
                interest, so users get fully transparent deals they can trust.
              </p>
            </div>
            <div className="card inner highlight">
              <h3>Built by Hustlers, for Hustlers</h3>
              <p>
                The members of our team currently face the same situation as you
                do because they need to manage their schoolwork and employment
                and business activities while seeking additional funding for
                expansion. FlowCap solved our individual funding needs which
                brought financial success to our small business operations. Our
                company uses its development process to build solutions which
                enable users to expand their business operations by converting
                their work time into business growth through systems that track
                their professional activities and operational methods.
              </p>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="stats-container">
          <div className="stat-card blue">
            <div className="stat-value">0%</div>
            <div className="stat-label">Growth Rate</div>
          </div>

          <div className="stat-card purple">
            <div className="stat-value">50K+</div>
            <div className="stat-label">Active Users</div>
          </div>

          <div className="stat-card pink">
            <div className="stat-value">Global Reach</div>
            <div className="stat-label">Total Revenue</div>
          </div>
        </div>
      </div>
    </section>
  );
}
