import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollGraphAnimation() {
  const graphRef = useRef(null);
  const bar1Ref = useRef(null);
  const bar2Ref = useRef(null);
  const bar3Ref = useRef(null);
  const bar4Ref = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(
        [bar1Ref.current, bar2Ref.current, bar3Ref.current, bar4Ref.current],
        {
          scaleY: 0,
          transformOrigin: "bottom",
          duration: 1.5,
          stagger: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: graphRef.current,
            start: "top 10%",
            end: "top 50%",
            scrub: 1,
            markers: true,
          },
        }
      );

      // Animate line graph - starts slightly after bars
      gsap.from(lineRef.current, {
        strokeDashoffset: 1000,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: graphRef.current,
          start: "top 20%", // Start when top hits 60% down viewport
          end: "center center", // End when center of element hits center of viewport
          scrub: 0.5,
        },
      });

      // Animate labels
      gsap.from(".graph-label", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: graphRef.current,
          start: "top 65%",
          end: "top 30%",
          scrub: 1,
        },
      });

      // Animate stats cards
      gsap.from(".stat-card", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "rgba(0, 0, 0, 0.2)",
        padding: "100px 20px",
      }}
    >
      <div
        ref={graphRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
        }}
      >
        <div style={{ maxWidth: "1200px", width: "100%" }}>
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#929bb0",
              marginBottom: "60px",
              textAlign: "center",
            }}
          >
            Revenue Growth 2024
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
            }}
          >
            {/* Bar Chart */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                padding: "40px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#d6e1f5",
                  marginBottom: "40px",
                }}
              >
                Quarterly Performance
              </h3>
              <div
                style={{
                  position: "relative",
                  height: "320px",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-around",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    ref={bar1Ref}
                    style={{
                      width: "100%",
                      height: "60%",
                      background: "linear-gradient(to top, #3b82f6, #60a5fa)",
                      borderRadius: "8px 8px 0 0",
                    }}
                  ></div>
                  <span
                    className="graph-label"
                    style={{
                      color: "#d6e1f5",
                      marginTop: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Q1
                  </span>
                  <span
                    className="graph-label"
                    style={{ color: "#8f9eb6", fontSize: "0.875rem" }}
                  >
                    $2.4M
                  </span>
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    ref={bar2Ref}
                    style={{
                      width: "100%",
                      height: "80%",
                      background: "linear-gradient(to top, #8b5cf6, #a78bfa)",
                      borderRadius: "8px 8px 0 0",
                    }}
                  ></div>
                  <span
                    className="graph-label"
                    style={{
                      color: "#d6e1f5",
                      marginTop: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Q2
                  </span>
                  <span
                    className="graph-label"
                    style={{ color: "#8f9eb6", fontSize: "0.875rem" }}
                  >
                    $3.2M
                  </span>
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    ref={bar3Ref}
                    style={{
                      width: "100%",
                      height: "70%",
                      background: "linear-gradient(to top, #ec4899, #f472b6)",
                      borderRadius: "8px 8px 0 0",
                    }}
                  ></div>
                  <span
                    className="graph-label"
                    style={{
                      color: "#d6e1f5",
                      marginTop: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Q3
                  </span>
                  <span
                    className="graph-label"
                    style={{ color: "#8f9eb6", fontSize: "0.875rem" }}
                  >
                    $2.8M
                  </span>
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    ref={bar4Ref}
                    style={{
                      width: "100%",
                      height: "95%",
                      background: "linear-gradient(to top, #06b6d4, #22d3ee)",
                      borderRadius: "8px 8px 0 0",
                    }}
                  ></div>
                  <span
                    className="graph-label"
                    style={{
                      color: "#d6e1f5",
                      marginTop: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Q4
                  </span>
                  <span
                    className="graph-label"
                    style={{ color: "#8f9eb6", fontSize: "0.875rem" }}
                  >
                    $3.8M
                  </span>
                </div>
              </div>
            </div>

            {/* Line Chart */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                padding: "40px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#d6e1f5",
                  marginBottom: "40px",
                }}
              >
                User Growth
              </h3>
              <div style={{ position: "relative", height: "320px" }}>
                <svg
                  style={{ width: "100%", height: "100%" }}
                  viewBox="0 0 400 300"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="lineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  <path
                    ref={lineRef}
                    d="M 20 250 L 120 180 L 220 200 L 320 100 L 380 80"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="1000"
                    strokeDashoffset="0"
                  />
                  <circle
                    className="graph-label"
                    cx="20"
                    cy="250"
                    r="6"
                    fill="#3b82f6"
                  />
                  <circle
                    className="graph-label"
                    cx="120"
                    cy="180"
                    r="6"
                    fill="#8b5cf6"
                  />
                  <circle
                    className="graph-label"
                    cx="220"
                    cy="200"
                    r="6"
                    fill="#a855f7"
                  />
                  <circle
                    className="graph-label"
                    cx="320"
                    cy="100"
                    r="6"
                    fill="#d946ef"
                  />
                  <circle
                    className="graph-label"
                    cx="380"
                    cy="80"
                    r="6"
                    fill="#ec4899"
                  />
                </svg>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#d6e1f5",
                    fontSize: "0.875rem",
                    marginTop: "16px",
                  }}
                >
                  <span className="graph-label">Jan</span>
                  <span className="graph-label">Apr</span>
                  <span className="graph-label">Jul</span>
                  <span className="graph-label">Oct</span>
                  <span className="graph-label">Dec</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div
            className="stats-container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
              marginTop: "60px",
            }}
          >
            <div
              className="stat-card"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                padding: "32px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#d6e1f5",
                  marginBottom: "8px",
                }}
              >
                156%
              </div>
              <div style={{ color: "#8f9eb6" }}>Growth Rate</div>
            </div>
            <div
              className="stat-card"
              style={{
                background:
                  "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                padding: "32px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#d6e1f5",
                  marginBottom: "8px",
                }}
              >
                50K+
              </div>
              <div style={{ color: "#8f9eb6" }}>Active Users</div>
            </div>
            <div
              className="stat-card"
              style={{
                background:
                  "linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(6, 182, 212, 0.2))",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                padding: "32px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#d6e1f5",
                  marginBottom: "8px",
                }}
              >
                $12.2M
              </div>
              <div style={{ color: "#8f9eb6" }}>Total Revenue</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
