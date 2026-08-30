import IntegrationBridge from "@/components/InsightFigures/IntegrationBridge";
import IntegrationLadder from "@/components/InsightFigures/IntegrationLadder";

export default function ConnectingAIWithoutAPIs({ accent = "#EF4444" }) {
  return (
    <>
      <p className="insight-lede">
        Every AI architecture diagram assumes a clean REST API on the other
        end. Then you meet the actual business: an ERP from 2009, an industry
        portal with a login page and nothing else, a shared inbox where the
        real process lives, and a spreadsheet that one person understands.
        This is not the exception. For most small and mid-sized companies,
        this <em>is</em> the systems landscape — and it&apos;s exactly where
        AI projects quietly stall.
      </p>

      <h2>Why this is the real bottleneck</h2>
      <p>
        When Gartner lists why GenAI projects get abandoned, the reasons —{" "}
        <a
          href="https://www.gartner.com/en/articles/genai-project-failure"
          target="_blank"
          rel="noopener noreferrer"
        >
          poor data quality, escalating costs, unclear business value
        </a>{" "}
        — all trace back to the same root: the data the AI needed was trapped
        somewhere the team couldn&apos;t reliably reach. A model with no
        access to the systems where work actually happens can only produce
        suggestions. Suggestions don&apos;t show up in the P&amp;L.
      </p>
      <p>
        The good news: &quot;no API&quot; almost never means &quot;no
        access.&quot; It means you have to work down a ladder.
      </p>

      <h2>The integration ladder</h2>

      <IntegrationLadder />

      <h3>Rung 1: The API that officially exists</h3>
      <p>
        Always check first, and check harder than the vendor&apos;s marketing
        page — plenty of legacy systems have partner APIs, undocumented
        endpoints their own web frontend calls, or a paid &quot;integration
        module&quot; nobody activated. An hour in the browser&apos;s network
        tab has saved me weeks of workarounds.
      </p>

      <h3>Rung 2: File exports and SFTP</h3>
      <p>
        Deeply unfashionable, extremely reliable. If the system can schedule a
        CSV or XML export to a folder, you have an integration — one that
        survives UI redesigns and doesn&apos;t care about session cookies.
        Much of the world&apos;s banking infrastructure still runs on exactly
        this pattern, which tells you something about its durability.
      </p>

      <h3>Rung 3: The database underneath</h3>
      <p>
        On-premise systems usually sit on a normal SQL database. A read-only
        connection gets you clean, real-time data with zero UI fragility. It
        needs the vendor&apos;s or IT&apos;s blessing and careful scoping —
        read-only, specific tables, nothing else — but when it&apos;s
        available, it&apos;s the best-kept secret in legacy integration.
      </p>

      <h3>Rung 4: Browser automation</h3>
      <p>
        When there is truly nothing else — government portals, banks,
        industry platforms that will never ship an API — a Playwright script
        logs in, navigates, and reads or submits data exactly like the human
        who does it today. I&apos;ve used this in production for a Danish
        accounting firm against skat.dk, replacing a paid robot subscription
        with an in-house automation the firm actually controls.
      </p>
      <p>
        Browser automation earns its &quot;last resort&quot; label: it breaks
        when the UI changes, so it must be built like production software —
        explicit waits, screenshots on failure, alerting, and a human fallback
        path. Built that way, it&apos;s not a hack. It&apos;s a bridge with a
        maintenance contract.
      </p>

      <h2>The architecture that makes it sane</h2>

      <IntegrationBridge />

      <p>
        The pattern that keeps this maintainable: <strong>AI never talks to
        the legacy systems directly.</strong> Each system gets one small
        connector — API client, file watcher, or browser script — whose only
        job is to move data into a clean layer: a normal database with normal
        schemas. Every AI workflow builds on that layer.
      </p>
      <p>This buys three things:</p>
      <ul>
        <li>
          <strong>Stability.</strong> When the portal redesigns its UI, you
          fix one connector. The extraction pipelines, reconciliation jobs,
          and reports on top never notice.
        </li>
        <li>
          <strong>Auditability.</strong> Every record in the data layer knows
          where it came from and when. In finance and compliance contexts,
          that lineage is the product.
        </li>
        <li>
          <strong>A future.</strong> The day the company migrates off the 2009
          ERP, the AI investment survives — it was never coupled to the old
          system, only to the bridge.
        </li>
      </ul>

      <div className="insight-stat" style={{ borderLeftColor: accent }}>
        <span className="insight-stat-number" style={{ color: accent }}>
          Rung ≠ risk
        </span>
        <span className="insight-stat-label">
          The integration method is a maintenance decision, not a quality
          ceiling. A well-monitored browser automation feeding a clean data
          layer beats a &quot;proper&quot; API integration nobody watches.
        </span>
      </div>

      <h2>The takeaway</h2>
      <p>
        &quot;Our systems are too old for AI&quot; is almost never true. The
        systems are too old for <em>naive</em> AI — the kind that assumes a
        friendly API and gives up without one. With an integration ladder and
        a clean data layer in between, the age of the systems stops mattering.
        The companies with the messiest legacy stacks often have the most to
        gain, precisely because so much of their teams&apos; time goes into
        manually bridging gaps that a connector could close.
      </p>

      <div className="insight-sources">
        <h4>Sources</h4>
        <ol>
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
        </ol>
      </div>
    </>
  );
}
