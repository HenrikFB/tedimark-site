import DemoProductionIceberg from "@/components/InsightFigures/DemoProductionIceberg";
import PilotFunnel from "@/components/InsightFigures/PilotFunnel";

export default function WhyAIPilotsDie({ accent = "#EF4444" }) {
  return (
    <>
      <p className="insight-lede">
        Every failed AI project has the same biography: a demo that impressed
        everyone, a pilot that started with energy, and then a slow, quiet
        death somewhere between &quot;this looks great&quot; and &quot;this
        runs our process.&quot; The pattern is so consistent that we can name
        the exact failure points — because three independent research bodies
        already have.
      </p>

      <h2>The funnel nobody puts in the pitch deck</h2>
      <p>
        MIT&apos;s NANDA initiative traced how enterprise-grade AI systems —
        custom-built or vendor-sold — actually move through organizations.
        Sixty percent of companies evaluated such a system. Twenty percent got
        one to pilot stage. <strong>Five percent reached production.</strong>
      </p>

      <PilotFunnel />

      <p>
        Gartner watched the same movie from a different seat. In July 2024 it{" "}
        <a
          href="https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025"
          target="_blank"
          rel="noopener noreferrer"
        >
          predicted at least 30% of GenAI projects would be abandoned after
          proof of concept
        </a>{" "}
        by the end of 2025 — citing poor data quality, inadequate risk
        controls, escalating costs, and unclear business value.{" "}
        <a
          href="https://www.gartner.com/en/articles/genai-project-failure"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gartner&apos;s later analysis
        </a>{" "}
        found the real abandonment rate passed 50%. The prediction wasn&apos;t
        alarmist. It was conservative.
      </p>

      <div className="insight-stat" style={{ borderLeftColor: accent }}>
        <span className="insight-stat-number" style={{ color: accent }}>
          &gt;80%
        </span>
        <span className="insight-stat-label">
          of AI projects fail — roughly twice the rate of non-AI IT projects,
          according to RAND&apos;s 2024 study based on interviews with 65
          experienced ML engineers and data scientists.
        </span>
      </div>

      <h2>The model is almost never the problem</h2>
      <p>
        Read the{" "}
        <a
          href="https://www.rand.org/pubs/research_reports/RRA2680-1.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          RAND root-cause list
        </a>{" "}
        carefully and notice what&apos;s missing. &quot;The model wasn&apos;t
        good enough&quot; appears once, last. The rest are organizational and
        engineering failures that are settled before any model is chosen:
      </p>
      <ol>
        <li>
          <strong>The problem was misunderstood.</strong> The team built
          something technically interesting instead of the thing the business
          needed measured.
        </li>
        <li>
          <strong>The data wasn&apos;t there.</strong> Training and context
          data was too messy, too scattered, or locked in systems nobody could
          access.
        </li>
        <li>
          <strong>Shiny tech beat real requirements.</strong> The organization
          chased the newest capability instead of the highest-value process.
        </li>
        <li>
          <strong>The infrastructure was missing.</strong> No pipelines, no
          deployment path, no monitoring — a notebook can&apos;t be a product.
        </li>
        <li>
          <strong>The problem was genuinely too hard</strong> — the only cause
          that&apos;s actually about AI capability.
        </li>
      </ol>

      <h2>What the demo hides</h2>
      <p>
        A demo answers one question: <em>can the model do the task once, on a
        good day, with a friendly input?</em> Production asks entirely
        different questions. What happens with the malformed PDF? Who gets
        alerted when the ERP connection times out? Where does the audit trail
        live? Who owns the system in month seven when the prompt needs
        updating? None of that is visible in a demo — and all of it is where
        the budget actually goes.
      </p>

      <DemoProductionIceberg />

      <p>
        This is also why <strong>who builds it matters more than what&apos;s
        bought</strong>. MIT&apos;s data shows externally partnered builds
        reached deployment about twice as often as internal ones — roughly 67%
        versus one-third of that. Not because outsiders are smarter, but
        because a specialist has already drowned on this iceberg a few times
        and budgets for the part under the waterline from day one.
      </p>

      <h2>What a survivable pilot looks like</h2>
      <p>
        The pilots that make it to production share a boring checklist, agreed
        before anyone writes code:
      </p>
      <ul>
        <li>
          <strong>One process, one metric.</strong> &quot;Reduce invoice
          processing time from 4 days to 1&quot; — not &quot;explore AI
          opportunities.&quot;
        </li>
        <li>
          <strong>A baseline measured first.</strong> If you don&apos;t know
          today&apos;s cost and error rate, success is undefinable — the
          project can neither succeed nor fail, only continue.
        </li>
        <li>
          <strong>Integration scoped on day one.</strong> The pilot writes to
          the real system (behind a review gate), because &quot;we&apos;ll
          integrate later&quot; is where pilots go to die.
        </li>
        <li>
          <strong>An accuracy target and an eval set.</strong> Real historical
          cases, scored automatically, so &quot;is it good enough?&quot; has a
          number for an answer.
        </li>
        <li>
          <strong>A named owner after launch.</strong> Software that nobody
          owns is software that&apos;s already dying.
        </li>
      </ul>
      <p>
        None of this is exciting. That&apos;s the point — the excitement was
        the demo, and the demo was never the hard part.
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
              href="https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              GenAI abandonment prediction
            </a>
            , Jul 2024, and{" "}
            <a
              href="https://www.gartner.com/en/articles/genai-project-failure"
              target="_blank"
              rel="noopener noreferrer"
            >
              &quot;Why Half of GenAI Projects Fail&quot;
            </a>
          </li>
          <li>
            RAND Corporation,{" "}
            <a
              href="https://www.rand.org/pubs/research_reports/RRA2680-1.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>The Root Causes of Failure for AI Projects</em>
            </a>
            , 2024
          </li>
        </ol>
      </div>
    </>
  );
}
