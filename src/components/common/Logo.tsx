const FlowCapLogo = ({
  size = 60,
  showText = false,
  className = "",
  animated = true,
}) => {
  const textSize = size * 0.6;

  return (
    <div
      className={`flowcap-logo ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: `${size * 0.2}px`,
      }}
    >
      <style>
        {`
          .flowcap-logo svg {
            display: block;
          }

          ${
            animated
              ? `
          @keyframes flowWave1 {
            0% {
              d: path("M140 200q40 70 110 0t120 0");
            }
            25% {
              d: path("M140 200q40 0 110 0t120 0");
            }
            50% {
              d: path("M140 200q40 -70 110 0t120 0");
            }
            75% {
              d: path("M140 200q40 0 110 0t120 0");
            }
            100% {
              d: path("M140 200q40 70 110 0t120 0");
            }
          }

          @keyframes flowWave2 {
            0% {
              d: path("M140 290q40 70 110 0t120 0");
            }
            25% {
              d: path("M140 290q40 0 110 0t120 0");
            }
            50% {
              d: path("M140 290q40 -70 110 0t120 0");
            }
            75% {
              d: path("M140 290q40 0 110 0t120 0");
            }
            100% {
              d: path("M140 290q40 70 110 0t120 0");
            }
          }

          .flowcap-logo .wave1 {
            animation: flowWave1 3s ease-in-out infinite;
          }

          .flowcap-logo .wave2 {
            animation: flowWave2 3s ease-in-out infinite;
          }
          `
              : ""
          }

          .flowcap-logo-text {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            font-weight: 700;
            letter-spacing: -0.02em;
          }
        `}
      </style>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 512 512"
      >
        <defs>
          <linearGradient id="bgGradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#22d3c5" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
        </defs>
        <rect
          width="400"
          height="400"
          x="50"
          y="50"
          fill="url(#bgGradient)"
          rx="150"
        />
        <path
          className={animated ? "wave1" : ""}
          fill="none"
          stroke="#a7f3ed"
          strokeLinecap="round"
          strokeWidth="38"
          d="M140 200q40 70 110 0t120 0"
        />
        <path
          className={animated ? "wave2" : ""}
          fill="none"
          stroke="#a7f3ed"
          strokeLinecap="round"
          strokeWidth="38"
          d="M140 290q40 70 110 0t120 0"
        />
      </svg>

      {showText && (
        <span
          className="flowcap-logo-text"
          style={{ fontSize: `${textSize}px` }}
        >
          FlowCap
        </span>
      )}
    </div>
  );
};
export default FlowCapLogo;
// Demo/Preview
// export default function App() {
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//         padding: "40px",
//       }}
//     >
//       {/* Example Header */}
//       <header
//         style={{
//           background: "rgba(255, 255, 255, 0.1)",
//           backdropFilter: "blur(10px)",
//           padding: "15px 30px",
//           borderRadius: "12px",
//           marginBottom: "40px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <FlowCapLogo size={50} showText={true} animated={true} />
//         <nav
//           style={{
//             display: "flex",
//             gap: "25px",
//             color: "white",
//             fontSize: "16px",
//             fontFamily: "system-ui",
//           }}
//         >
//           <a href="#" style={{ color: "white", textDecoration: "none" }}>
//             Home
//           </a>
//           <a href="#" style={{ color: "white", textDecoration: "none" }}>
//             About
//           </a>
//           <a href="#" style={{ color: "white", textDecoration: "none" }}>
//             Contact
//           </a>
//         </nav>
//       </header>

//       {/* Size Examples */}
//       <div
//         style={{
//           background: "white",
//           padding: "30px",
//           borderRadius: "12px",
//           marginBottom: "20px",
//         }}
//       >
//         <h2 style={{ marginTop: 0, marginBottom: "20px" }}>Different Sizes</h2>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "30px",
//             flexWrap: "wrap",
//           }}
//         >
//           <FlowCapLogo size={40} />
//           <FlowCapLogo size={60} />
//           <FlowCapLogo size={80} />
//           <FlowCapLogo size={120} />
//         </div>
//       </div>

//       {/* With Text Examples */}
//       <div
//         style={{
//           background: "white",
//           padding: "30px",
//           borderRadius: "12px",
//           marginBottom: "20px",
//         }}
//       >
//         <h2 style={{ marginTop: 0, marginBottom: "20px" }}>With Text</h2>
//         <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//           <FlowCapLogo size={40} showText={true} />
//           <FlowCapLogo size={60} showText={true} />
//           <FlowCapLogo size={80} showText={true} />
//         </div>
//       </div>

//       {/* Static (No Animation) */}
//       <div
//         style={{
//           background: "white",
//           padding: "30px",
//           borderRadius: "12px",
//         }}
//       >
//         <h2 style={{ marginTop: 0, marginBottom: "20px" }}>
//           Static Version (No Animation)
//         </h2>
//         <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
//           <FlowCapLogo size={60} animated={false} />
//           <FlowCapLogo size={60} showText={true} animated={false} />
//         </div>
//       </div>

//       {/* Usage Instructions */}
//       <div
//         style={{
//           background: "rgba(255, 255, 255, 0.1)",
//           backdropFilter: "blur(10px)",
//           color: "white",
//           padding: "30px",
//           borderRadius: "12px",
//           marginTop: "20px",
//           fontFamily: "monospace",
//         }}
//       >
//         <h3 style={{ marginTop: 0 }}>Usage:</h3>
//         <pre
//           style={{
//             overflow: "auto",
//             background: "rgba(0,0,0,0.2)",
//             padding: "15px",
//             borderRadius: "8px",
//           }}
//         >
//           {`// Simple logo
// <FlowCapLogo size={50} />

// // With text
// <FlowCapLogo size={50} showText={true} />

// // Without animation
// <FlowCapLogo size={50} animated={false} />

// // Custom styling
// <FlowCapLogo
//   size={60}
//   showText={true}
//   className="my-custom-class"
// />`}
//         </pre>
//       </div>
//     </div>
//   );
// }
