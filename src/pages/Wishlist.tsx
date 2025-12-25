import { useState, type FormEvent } from "react";
import { Header } from "../components/common/Header";
import "../styles/Wishlist.css";

export function Wishlist() {

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("success");
  };

  return (
    <div className="wishlist-root">
      <title>FlowCap | Wishlist</title>
      <Header />

      <main className="wishlist-shell">
        <div className="wishlist-background">
          <div className="wishlist-orb orb-a"></div>
          <div className="wishlist-orb orb-b"></div>
          <div className="wishlist-orb orb-c"></div>
        </div>

        <section className="wishlist-card">
          <span className="badge">Launch Notice</span>
          <h1 className="wishlist-title">Join the early access list</h1>
          <p className="wishlist-copy">
            Drop your email to get a one-time note when FlowCap opens new spots.
            No spam, just the green light.
          </p>

          <form className="wishlist-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="wishlist-email">
              Email address
            </label>
            <div className="form-row">
              <input
                id="wishlist-email"
                type="email"
                name="email"
                placeholder="you@startup.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Notify me</button>
            </div>
          </form>

          {status === "success" && (
            <div className="confirmation">
              You are on the list. We will email you as soon as we launch.
            </div>
          )}

          <div className="wishlist-meta">
            <div className="meta-pill">No credit card</div>
            <div className="meta-pill">One-click unsubscribe</div>
            <div className="meta-pill">Exclusive beta perks</div>
          </div>
        </section>
      </main>
    </div>
  );
}
