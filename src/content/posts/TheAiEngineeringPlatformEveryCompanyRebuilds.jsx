import ResearcherWriterArch from "@/components/InsightFigures/ResearcherWriterArch";
import DataIslands from "@/components/InsightFigures/DataIslands";
import CanvasVsPlatform from "@/components/InsightFigures/CanvasVsPlatform";

export default function TheAiEngineeringPlatformEveryCompanyRebuilds({
  accent = "#2563EB",
}) {
  return (
    <>
      <p className="insight-lede">
        The usual stack is honest about what it is: n8n or Langflow for the
        canvas, LlamaIndex or unstructured.io for the files, a frontier model
        for the hard parts. Then every company still rebuilds the same missing
        layer — routing, structured aggregation, verification, configuration,
        and a UI that is not a chat box.
      </p>

      <ResearcherWriterArch />

      <h2>A canvas is not a platform</h2>
      <p>
        Researcher/writer architectures are everywhere now, and they are a
        good default: one pass gathers, one pass writes. The problem is not
        the pattern. It is that a workflow canvas stops at &quot;nodes that
        call models.&quot; Three extra nodes are what make the pattern
        survivable outside a demo.
      </p>
      <ul>
        <li>
          <strong>Automatic routing into a folder hierarchy.</strong> Files
          should land in a tree — supplier, matter, period — not in a linear
          run history. Routing is a product decision, not a prompt.
        </li>
        <li>
          <strong>An aggregator as its own node.</strong> Unstructured in,
          typed records out. Cleaning, classifying, and shaping data is a
          job. Burying it inside the researcher step is how you get confident
          nonsense.
        </li>
        <li>
          <strong>A reflection / verification step.</strong> A second pass
          that can refuse to ship: schema checks, deterministic rules, a
          critic agent, or a human. Without it, every downstream system
          inherits the model&apos;s worst day.
        </li>
      </ul>

      <CanvasVsPlatform />

      <h2>UX that is not another chat</h2>
      <p>
        If the interface is only a prompt, operators lose the two things they
        already know how to do: find a file, and move it. The workspace that
        actually gets used looks ordinary on purpose.
      </p>
      <ul>
        <li>
          <strong>Full-text search with a snippet.</strong> Postgres
          indexing, jump to the hit. Vector search is extra; keyword search
          is how people work at 4 p.m.
        </li>
        <li>
          <strong>Resizable panes,</strong> so a document, a chat, and a
          result can sit side by side and the user decides the split.
        </li>
        <li>
          <strong>Keyboard shortcuts</strong> to open those panes instead of
          hunting through menus.
        </li>
        <li>
          <strong>A drag-and-drop folder tree</strong> so hierarchy is
          something you fix with the mouse, not a migration ticket.
        </li>
      </ul>

      <DataIslands />

      <p>
        The useful trick: one app, one corpus, several islands. Attach a
        folder — or a whole branch — to a given agent or workflow. You keep
        an overview of everything, and you still isolate data so the invoice
        extractor never sees the deal room.
      </p>

      <h2>Config first. Then a chat that only edits config.</h2>
      <p>
        A large settings surface sounds unsexy. It is how you stop waiting
        on embeddings to find out a parser cannot read the diagram on page
        three. Open-source parsers differ on layout, vision, and length;
        you want to try them on a sample <em>before</em> a pipeline run.
      </p>
      <ul>
        <li>
          Start with a <strong>settings / parser test page</strong>. Same
          knobs you will need in production, minus the queue.
        </li>
        <li>
          Keep a <strong>schema and a config model</strong> — then do not
          make humans edit JSON to improve results. The prompts and skills
          that search, analyze, and format the writer output will move in
          production. That is normal.
        </li>
        <li>
          Give them a <strong>separate agent that does not run
          workflows</strong>. It helps rewrite instructions, skills, and
          index notes — the same job as keeping <code>AGENTS.md</code>,
          skills, and a README in a software repo. CopilotKit plus AG-UI
          on Supabase can drive generative UI here; the integration has
          sharp edges, and the workarounds are fine.
        </li>
      </ul>

      <h2>When not to open a frontier chat</h2>
      <p>
        Chatting with the most expensive model is a product choice, not a
        default. Most of the useful work can start before anyone sits down.
      </p>
      <ul>
        <li>
          <strong>Event-driven, cheap, or batch.</strong> Small models in
          the background when latency is not the constraint. OpenAI&apos;s
          Batch API is roughly half the price with hours of delay — which
          is a gift if the draft should simply be ready when someone opens
          the screen.
        </li>
        <li>
          <strong>Strip the model on stable PDFs.</strong> When the
          document is text-heavy, the layout does not move, and the fields
          sit in the same place every time, a deterministic parse — OCR,
          templates, rules — beats an LLM. You are not asking the model to
          &quot;understand&quot; the page; you are reading coordinates.
        </li>
        <li>
          <strong>Keep calculations and app logic in ordinary code.</strong>{" "}
          Totals, VAT, matching, validation, routing — functional
          programming and plain algorithms are still more robust than a
          prompt. The model belongs where structure is fuzzy; the rest of
          the app should stay deterministic.
        </li>
        <li>
          <strong>Deep agents are for long-running work.</strong> Spawning
          sub-agents multiplies calls. A simple ReAct loop plus hybrid
          search, and a better model, is usually the more honest
          architecture.
        </li>
      </ul>

      <div className="insight-stat" style={{ borderLeftColor: accent }}>
        <span className="insight-stat-number" style={{ color: accent }}>
          Regex ≠ PII
        </span>
        <span className="insight-stat-label">
          A regular expression matches the phone number you already pictured.
          Names, local formats, and workflow-specific secrets do not look
          like that. Anonymization has to be declared in plain language —
          &quot;strip anything that identifies a household&quot; — and
          scoped per workflow, not copy-pasted as one global pattern.
        </span>
      </div>

      <h2>Pilot shapes, not a pitch deck</h2>
      <p>
        These are engagements I would actually run — comparisons and
        pipelines, not claims about a model I already crowned.
      </p>
      <ul>
        <li>
          <strong>Classification and meeting notes</strong> on a small
          specialist model versus a frontier LLM, inside the same agent
          shell. The question is not &quot;which is smarter&quot; — it is
          whether the cheaper one holds on <em>this</em> taxonomy,{" "}
          <em>these</em> transcripts.
        </li>
        <li>
          <strong>User-defined PII / anonymization.</strong> Staff describe
          what must disappear; the pipeline extracts and masks it. Regex
          remains a backstop, not the product.
        </li>
        <li>
          <strong>Background drafts</strong> on small or batch models so
          analysis is waiting, instead of a chat that starts at zero.
        </li>
        <li>
          <strong>Web research, cost first.</strong> Frontier browsing is
          often the most expensive node in the graph. A thin ReAct agent
          with Tavily — or a search plus an open crawler on the URLs — is
          usually the experiment worth running before you pay for
          &quot;the model that can browse.&quot;
        </li>
      </ul>
      <p>
        None of that is a canvas you drag together once. It is a platform
        you configure, isolate, and fit into the automation the company
        already has — n8n included — with optional UI where operators need
        to see the work.
      </p>
    </>
  );
}
