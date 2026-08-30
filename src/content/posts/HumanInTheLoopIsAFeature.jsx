import HITLFlow from "@/components/InsightFigures/HITLFlow";
import TrustCurve from "@/components/InsightFigures/TrustCurve";

export default function HumanInTheLoopIsAFeature({ accent = "#FACC15" }) {
  return (
    <>
      <p className="insight-lede">
        There&apos;s a reflex in AI sales conversations: the moment a review
        step appears in the architecture, someone asks &quot;but can&apos;t it
        be fully automatic?&quot; — as if the human in the loop were an
        apology. It isn&apos;t. In every AI system I&apos;d put my name on,
        the review gate is the reason the system runs at all.
      </p>

      <h2>The math nobody does out loud</h2>
      <p>
        Suppose your extraction system is right 95% of the time. Sounds
        shippable. Now run 1,000 invoices a month through it: that&apos;s 50
        wrong entries — wrong amounts, wrong suppliers, wrong VAT — posted
        directly into your accounting system, silently. Nobody knows{" "}
        <em>which</em> 50. So someone has to check everything, which means the
        system saved nothing, which means it gets turned off.
      </p>
      <div className="insight-stat" style={{ borderLeftColor: accent }}>
        <span className="insight-stat-number" style={{ color: accent }}>
          95% ≠ useful
        </span>
        <span className="insight-stat-label">
          A system that is wrong 5% of the time — with no way of flagging
          which 5% — is not 95% useful. Without a review mechanism it is 100%
          untrusted.
        </span>
      </div>
      <p>
        The fix isn&apos;t a better model. It&apos;s an architecture that
        knows what it doesn&apos;t know: route the confident cases straight
        through, and put the uncertain ones in front of a person. Now the 95%
        costs zero human seconds, and the risky 5% gets exactly the attention
        it always needed.
      </p>

      <HITLFlow />

      <h2>Where the gate goes</h2>
      <p>
        The review step belongs at the point of <strong>irreversibility</strong> —
        the last moment before the output touches something expensive to
        undo. A few rules of thumb:
      </p>
      <ul>
        <li>
          <strong>Money moves, contracts bind, customers read:</strong> gate
          it. Posting to a ledger, sending an offer, replying externally.
        </li>
        <li>
          <strong>Drafts, suggestions, internal summaries:</strong> no gate
          needed — the consumer of the output <em>is</em> the reviewer.
        </li>
        <li>
          <strong>Bulk operations:</strong> gate the batch, not each item.
          Reviewing a summary of 500 proposed matches beats clicking 500
          approvals — and beats trusting them blind.
        </li>
      </ul>
      <p>
        And the gate must be a good product, not an afterthought. Original and
        extraction side by side, differences highlighted, one keystroke to
        approve, edits captured as data. If reviewing takes as long as doing
        the task manually, the loop is decoration.
      </p>

      <h2>The review queue is your training data</h2>
      <p>
        Here&apos;s the part that turns a safety mechanism into a flywheel:
        every correction a reviewer makes is a labeled example. Collect them
        into an evaluation set and every future change to the prompt, model,
        or schema gets scored against real, hard cases from your own
        operation. This is how &quot;can we trust it more now?&quot; stops
        being a debate and becomes a dashboard.
      </p>
      <p>
        RAND&apos;s post-mortem of failed AI projects found the recurring
        theme wasn&apos;t weak models — it was organizations with{" "}
        <a
          href="https://www.rand.org/pubs/research_reports/RRA2680-1.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          no infrastructure to measure whether the system actually worked
        </a>
        . A review loop builds that infrastructure as a side effect of normal
        operation. You get reliability measurement for free, from day one.
      </p>

      <h2>Trust is a curve, not a switch</h2>

      <TrustCurve />

      <p>
        Deployments that survive follow the same arc. Week one: the gate
        reviews everything, and the team learns the system&apos;s real failure
        modes on live data with zero risk. As the eval numbers come in, the
        confidence threshold rises — 40% auto-approved, then 70%, then 85% —
        each step justified by measured accuracy, not optimism. The end state
        isn&apos;t &quot;no humans.&quot; It&apos;s humans looking only at the
        cases genuinely worth human judgment.
      </p>
      <p>
        Compare that with the switch approach: launch fully automated, wait
        for the first expensive mistake, lose the organization&apos;s trust,
        turn it off. The trust curve only moves in one direction, and
        it&apos;s much easier to climb than to rebuild.
      </p>

      <h2>The reframe</h2>
      <p>
        &quot;Human-in-the-loop&quot; sounds like a limitation because of how
        it&apos;s usually framed — automation minus something. The accurate
        frame: it&apos;s the mechanism that lets you deploy an imperfect
        system safely <em>today</em>, measure it against reality, and expand
        automation exactly as fast as the evidence allows. The demo-first
        crowd promises full automation and ships nothing. The gate-first
        crowd ships in week one and automates more every month. One of these
        is the feature.
      </p>

      <div className="insight-sources">
        <h4>Sources</h4>
        <ol>
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
          <li>
            Gartner,{" "}
            <a
              href="https://www.gartner.com/en/articles/genai-project-failure"
              target="_blank"
              rel="noopener noreferrer"
            >
              &quot;Why Half of GenAI Projects Fail&quot;
            </a>{" "}
            — inadequate risk controls among the top abandonment drivers
          </li>
        </ol>
      </div>
    </>
  );
}
