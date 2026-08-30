import PipelineArchitecture from "@/components/InsightFigures/PipelineArchitecture";
import BeforeAfterExtraction from "@/components/InsightFigures/BeforeAfterExtraction";

export default function DocumentsToStructuredData({ accent = "#22C55E" }) {
  return (
    <>
      <p className="insight-lede">
        &quot;Can&apos;t we just send the PDF to ChatGPT?&quot; You can. It
        will even work — on the first document, in a demo. This article is
        about what it takes for the same idea to work on document number
        14,000, on a Tuesday, unattended, feeding numbers into a real financial
        system. That gap is an architecture, and it looks the same in every
        successful deployment I&apos;ve seen or built.
      </p>

      <BeforeAfterExtraction />

      <h2>The problem, honestly stated</h2>
      <p>
        Documents arrive scanned, skewed, photographed, and in forty different
        layouts from forty different senders. Fields move around. Some
        suppliers put the invoice number where others put the customer
        reference. Amounts appear with and without VAT, in different currencies
        and formats. A human absorbs this chaos without noticing. A naive
        &quot;LLM reads PDF&quot; script does not — it just fails
        confidently, which is worse than failing loudly.
      </p>

      <h2>The pipeline, stage by stage</h2>

      <PipelineArchitecture />

      <h3>1. Intake</h3>
      <p>
        One entry point, no exceptions: a monitored inbox, an upload endpoint,
        a scanner folder. Every document gets an ID and a stored original the
        moment it arrives, because six months from now someone will ask
        &quot;where did this number come from?&quot; and the answer must be one
        click, not an archaeology project.
      </p>

      <h3>2. Parse &amp; OCR</h3>
      <p>
        Before any AI sees the document, it gets normalized: pages rotated,
        text extracted with layout preserved, scans OCR&apos;d. Layout matters
        enormously — an amount means something different in the line-items
        table than in the totals box, and a parser that flattens the document
        into a text blob throws that signal away.
      </p>

      <h3>3. Extraction against a schema</h3>
      <p>
        The model never gets to answer freely. It fills a strict JSON schema —
        every field typed, enumerations closed, formats pinned. If the schema
        says <code>currency</code> is one of DKK/EUR/USD, the model cannot
        invent &quot;Danish crowns.&quot; Structured output turns a creative
        writer into a data-entry clerk, which is exactly what you want here.
      </p>

      <h3>4. Validation: rules first, model second</h3>
      <p>
        Everything checkable gets checked with plain code, not AI: do the line
        items sum to the total? Is the VAT rate one that exists in this
        country? Is the date plausible? Does the supplier exist in the vendor
        registry? Deterministic rules catch a large share of model mistakes for
        free — and every rule that passes raises justified confidence in the
        fields you can&apos;t check mechanically.
      </p>

      <h3>5. The confidence split</h3>
      <p>
        Each extraction gets a confidence assessment from the model&apos;s own
        signals plus the validation results. High-confidence documents flow
        straight through. Everything else lands in a review queue where a
        human sees the original document and the extracted fields side by
        side, and fixes what&apos;s wrong in seconds. This single design
        decision is what makes the system deployable in week one instead of
        &quot;when it&apos;s perfect&quot; — which is never.
      </p>

      <h3>6. Delivery and the audit trail</h3>
      <p>
        The result posts to the real system — ERP, accounting platform,
        database — via API where one exists. Every document keeps its full
        history: original file, extracted values, validation results, who
        approved it, what was corrected. In finance workflows this isn&apos;t a
        nice-to-have; it&apos;s the difference between a tool the auditor
        accepts and one they don&apos;t.
      </p>

      <h2>The part everyone skips: measurement</h2>
      <p>
        Here is the uncomfortable truth about extraction pipelines: you cannot
        know your accuracy without building the machinery to measure it. The
        corrections humans make in the review queue are that machinery — each
        one is a labeled test case. Feed them back into an evaluation set, run
        it on every prompt or model change, and &quot;did the update break
        anything?&quot; becomes a number instead of a feeling.
      </p>

      <div className="insight-stat" style={{ borderLeftColor: accent }}>
        <span className="insight-stat-number" style={{ color: accent }}>
          60%
        </span>
        <span className="insight-stat-label">
          of AI projects will be abandoned through 2026 by organizations whose
          data isn&apos;t AI-ready, per Gartner. An extraction pipeline is
          often the project that <em>makes</em> the data ready.
        </span>
      </div>

      <h2>A concrete example</h2>
      <p>
        A pattern from my own work: an accounting firm ran bank/supplier
        reconciliation in a spreadsheet — a senior accountant matching
        statement lines against supplier documents by hand. We replaced it
        with a web app that parses the incoming documents, proposes matches,
        and queues only the uncertain ones for review. The accountant went
        from doing the matching to approving it. Same person, same
        responsibility, a fraction of the hours — and every match traceable
        back to its source documents.
      </p>
      <p>
        That is what &quot;documents to structured data&quot; means in
        practice. Not magic. A pipeline — with the model as one stage in it,
        and measurement wrapped around all of it.
      </p>

      <div className="insight-sources">
        <h4>Sources</h4>
        <ol>
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
            MIT NANDA, <em>The GenAI Divide: State of AI in Business 2025</em>{" "}
            — back-office automation identified as the highest-ROI GenAI
            category, via{" "}
            <a
              href="https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fortune, Aug 2025
            </a>
          </li>
        </ol>
      </div>
    </>
  );
}
