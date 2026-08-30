import HypeVsPayback from "@/components/InsightFigures/HypeVsPayback";
import BackOfficeROI from "@/components/InsightFigures/BackOfficeROI";
import DocumentPipeline from "@/components/InsightFigures/DocumentPipeline";

export default function WhereAICreatesBusinessValue({ accent = "#2563EB" }) {
  return (
    <>
      <p className="insight-lede">
        Ask where AI creates business value and you&apos;ll hear about chatbots
        and autonomous agents. Ask where companies actually measure payback and
        you get a very different list: invoices, inboxes, reconciliation, and
        reports. The gap between those two lists is where most AI budgets go to
        die.
      </p>

      <h2>The uncomfortable numbers</h2>
      <p>
        In August 2025, MIT&apos;s NANDA initiative published{" "}
        <a
          href="https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          the most-quoted AI statistic of the year
        </a>
        : despite $30–40 billion in enterprise GenAI investment, 95% of pilots
        showed no measurable profit-and-loss impact. The number deserves its
        caveats — the sample was small and &quot;six months to P&amp;L
        impact&quot; is a hard bar — but the direction matches everything else
        we know.
      </p>

      <div className="insight-stat" style={{ borderLeftColor: accent }}>
        <span className="insight-stat-number" style={{ color: accent }}>
          95%
        </span>
        <span className="insight-stat-label">
          of enterprise GenAI pilots showed no measurable P&amp;L impact —
          while the 5% that worked extracted millions in value. (MIT NANDA,
          2025)
        </span>
      </div>

      <p>
        The interesting part is not the failure rate. It&apos;s <em>where</em>{" "}
        the 5% succeeded. The same MIT report found that more than half of
        GenAI budgets go to sales and marketing tools — visible, easy to demo —
        while the clearest measured ROI came from{" "}
        <strong>back-office automation</strong>: document processing, finance
        operations, and replacing outsourced busywork.
      </p>

      <BackOfficeROI />

      <h2>Why the boring work wins</h2>
      <p>
        High-payback AI work shares three traits, and none of them are
        glamorous:
      </p>
      <ul>
        <li>
          <strong>The task is repetitive and rule-adjacent.</strong> Typing
          invoice data into an ERP, routing emails, matching bank lines to
          ledger entries. A human does it hundreds of times a month, the same
          way every time. That makes accuracy measurable — and measurable
          accuracy is what separates a system you trust from a demo you admire.
        </li>
        <li>
          <strong>The cost is already visible.</strong> Nobody knows what a
          chatbot is worth. Everyone knows what 60 hours a month of manual data
          entry costs. When the baseline is a line item, ROI is arithmetic, not
          faith.
        </li>
        <li>
          <strong>Failure is recoverable.</strong> A wrongly extracted invoice
          gets caught by a review step and corrected in seconds. A chatbot that
          promises a customer the wrong refund policy is a liability. The best
          first AI projects are the ones where a mistake costs a correction,
          not a customer.
        </li>
      </ul>

      <HypeVsPayback />

      <h2>The four highest-value patterns</h2>

      <h3>1. Documents in, structured data out</h3>
      <p>
        Receipts, forms, contracts, order confirmations. Every business
        receives documents that a person reads and retypes into a system. An
        extraction pipeline reads them instead — against a strict schema, with
        validation rules and a human review step for anything uncertain. This
        is the single most reliable place to start, because the before/after is
        so concrete: hours per week, error rate, days of processing lag.
      </p>

      <DocumentPipeline />

      <h3>2. Messy files become usable data</h3>
      <p>
        Most company knowledge lives in PDFs, slide decks, and exports that no
        system can query. Cleaning and structuring that data is unglamorous —
        and it is the prerequisite for everything else. Gartner has been blunt
        about this:{" "}
        <a
          href="https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk"
          target="_blank"
          rel="noopener noreferrer"
        >
          organizations that don&apos;t make their data AI-ready will abandon
          the majority of their AI projects
        </a>
        . The companies that skip this step are the ones funding the failure
        statistics.
      </p>

      <h3>3. AI connected to your actual tools</h3>
      <p>
        A model that can only talk is a toy. Value appears when the output
        lands where work happens: an entry posted to the ERP, a row updated in
        the database, a report delivered to the right inbox, a workflow kicked
        off in the tool your team already uses. The engineering effort is in
        the connections, not the model — which is exactly why generic tools
        stall and integrated systems pay back.
      </p>

      <h3>4. Reliability as a deliverable</h3>
      <p>
        The difference between the 5% and the 95% is rarely model choice.
        It&apos;s whether anyone measured accuracy, built evaluation cases from
        real corrections, and put a human review gate where the confidence is
        low. Reliability work is invisible in a demo and decisive in
        production. If a proposal doesn&apos;t mention how accuracy will be
        measured, the project is a pilot waiting to stall.
      </p>

      <h2>What this means if you're deciding where to start</h2>
      <p>
        Pick the process where paper meets keyboard. Find the task someone on
        your team does every week that involves reading something and typing it
        somewhere else. Count the hours. That number — not a technology
        roadmap — is your business case, and a scoped pilot against it will
        tell you within weeks whether the ROI is real.
      </p>

      <div className="insight-sources">
        <h4>Sources</h4>
        <ol>
          <li>
            MIT NANDA, <em>The GenAI Divide: State of AI in Business 2025</em>{" "}
            — via{" "}
            <a
              href="https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fortune, Aug 2025
            </a>
          </li>
          <li>
            Gartner,{" "}
            <a
              href="https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk"
              target="_blank"
              rel="noopener noreferrer"
            >
              &quot;Lack of AI-ready data puts AI projects at risk&quot;
            </a>
            , Feb 2025
          </li>
          <li>
            Gartner,{" "}
            <a
              href="https://www.gartner.com/en/articles/genai-project-failure"
              target="_blank"
              rel="noopener noreferrer"
            >
              &quot;Why Half of GenAI Projects Fail&quot;
            </a>
          </li>
        </ol>
      </div>
    </>
  );
}
