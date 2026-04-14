import CursorLight from "@/components/CursorLight/CursorLight";
import Footer from "@/components/Footer/Footer";
import BlockReveal from "@/components/TextAnimations/BlockReveal";

export default function ContactPage() {
  return (
    <main>
      <section className="contact-brief">
        <div className="contact-brief-inner">
          <div className="contact-brief-intro">
            <div className="section-label" style={{ color: "var(--green)" }}>
              Get in touch
            </div>
            <BlockReveal blockColor="var(--green)" animateOnScroll={false}>
              <h1 className="contact-brief-title">Before you reach out</h1>
            </BlockReveal>
            <p className="contact-brief-lead">
              We don&apos;t need a 20-page brief. Just a sense of direction.
            </p>
          </div>

          <div className="contact-brief-items">
            <div className="contact-brief-item">
              <span className="contact-brief-num" style={{ color: "var(--blue)" }}>01</span>
              <div>
                <h3 className="contact-brief-item-title">What are you building?</h3>
                <p className="contact-brief-item-desc">
                  A product, a prototype, an automation — what&apos;s the goal and who is it for?
                </p>
              </div>
            </div>

            <div className="contact-brief-item">
              <span className="contact-brief-num" style={{ color: "var(--red)" }}>02</span>
              <div>
                <h3 className="contact-brief-item-title">Where are you now?</h3>
                <p className="contact-brief-item-desc">
                  Existing systems, tech stack, team size — or starting from zero?
                </p>
              </div>
            </div>

            <div className="contact-brief-item">
              <span className="contact-brief-num" style={{ color: "var(--yellow)" }}>03</span>
              <div>
                <h3 className="contact-brief-item-title">Scope &amp; budget</h3>
                <p className="contact-brief-item-desc">
                  Timeline, budget range, and how far you want to go. A rough idea is enough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CursorLight />
      <Footer />
    </main>
  );
}
