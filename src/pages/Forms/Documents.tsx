import { DocHeader } from "../../components/common/DocHeader.tsx";
import "../../styles/Documents.css";

export function Documents() {
  return (
    <div className="landing-root">
      <DocHeader />

      <main className="docs-layout">
        <aside className="docs-sidebar">
          <nav className="docs-toc">
            <a href="#our-goals">Our Goals</a>
            <a href="#honesty-transparency">Honesty & Transparency</a>
            <a href="#application-standings">Application Standings</a>
            <a href="#policies">Policies</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#how-we-make-money">How We Make Money</a>
            <a href="#contacts">Contacts</a>
            <a href="#bug-report">Bug Report</a>
          </nav>
        </aside>

        <section className="docs-content">
          <section id="our-goals" className="doc-section">
            <header className="doc-section-header" />
            <article className="doc-section-body" />
          </section>

          <section id="honesty-transparency" className="doc-section">
            <header className="doc-section-header" />
            <article className="doc-section-body" />
          </section>

          <section id="application-standings" className="doc-section">
            <header className="doc-section-header" />
            <article className="doc-section-body">
              <div className="status-block accepted" />
              <div className="status-block rejected" />
              <div className="status-block pending" />
            </article>
          </section>

          <section id="policies" className="doc-section">
            <header className="doc-section-header" />
            <article className="doc-section-body">
              <div className="policy-block" />
              <div className="policy-block" />
              <div className="policy-block" />
            </article>
          </section>

          <section id="terms" className="doc-section">
            <header className="doc-section-header" />
            <article className="doc-section-body" />
          </section>

          <section id="how-we-make-money" className="doc-section">
            <header className="doc-section-header" />
            <article className="doc-section-body" />
          </section>

          <section id="contacts" className="doc-section">
            <header className="doc-section-header" />
            <article className="doc-section-body" />
          </section>

          <section id="bug-report" className="doc-section">
            <header className="doc-section-header" />
            <article className="doc-section-body" />
          </section>
        </section>
      </main>
    </div>
  );
}
