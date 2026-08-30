# Content-idébank — 60+ post-idéer med hooks

> Researchbaseret: det der virker i teknisk B2B-content i 2026 er problem-drevne posts (ikke generisk AI-hype), 2-3 posts/uge med konsistens over volumen, og en fast fordeling: **Authority 40 % / Educational 30 % / Social Proof 20 % / Personal 10 %**. Likes er den forkerte metrik — kommentarer, DM'er og profilbesøg er de rigtige.

## Sådan bruger du banken

- Vælg 2-3 posts/uge på tværs af buckets (ca. 1 authority, 1 educational, hver anden uge en social proof/demo, en personal om måneden).
- Hooks herunder er skrevet på engelsk (dit brand). Oversæt til dansk når emnet er DK-specifikt — de performer ofte bedst hos danske beslutningstagere.
- Hver idé kan genbruges: samme pointe som tekst-post, carousel og kort video er 3 forskellige posts med ugers mellemrum.
- Skriv som praktiker: konkrete tal, konkrete fejl, konkrete valg. Ingen "AI will change everything"-fyld.

---



## Bucket 1: Authority — problem-drevne posts (40 %)

Formålet: positionér dig som den, der forstår hvorfor AI-projekter fejler og hvad der faktisk betaler sig. Målgruppen er beslutningstagere, der har mærket problemerne selv.

### Serien "Hvorfor AI-projekter dør"

1. "95% of AI pilots never produce ROI. I've seen why up close: the model is almost never the problem. The integration is." → gennemgå de 5 rigtige årsager.
2. "Your AI pilot worked on 10 documents. Production means 10,000 — including the scanned ones, the rotated ones, and the one in Comic Sans. That's the gap nobody budgets for."
3. "The demo took 2 weeks. Production took 4 months. Here's exactly where the time went." (identity/adgang, fejlhåndtering, edge cases, audit trail, drift)
4. "Companies don't abandon AI projects because the AI is bad. They abandon them because nobody owned them after the workshop ended."
5. "Gartner: 60% of AI projects will be abandoned due to data that isn't AI-ready. Translation: fix your data plumbing before you hire a prompt engineer."
6. "Everyone brings in security and compliance AFTER the demo. That's why the project dies right before production — every time."
7. "An LLM that's wrong 5% of the time isn't 95% useful. Without a review step, it's 100% untrusted. Reliability is a design problem, not a model problem."



### Serien "Hvad der faktisk betaler sig"

1. "The most valuable AI systems I know are boring: invoices, inboxes, reconciliation, form-filling. Payback in 30-90 days. Nobody posts about them."
2. "Chatbots get the headlines. Back-office automation gets the ROI. Finance workflows alone: 20-30% cost reduction within 12 months (McKinsey)."
3. "Before you buy an 'AI platform', automate ONE workflow end-to-end and measure it. You'll learn more in 3 weeks than in 3 vendor demos."
4. "Your employees already use AI — just not the way you think. Shadow AI with customer data is a GDPR incident waiting to happen. Map it before you scale it."
5. "'We need an AI strategy.' No — you need a list of your 10 most repetitive processes, ranked by hours wasted. The strategy writes itself."
6. "Human-in-the-loop isn't a weakness in your AI system. It's the feature that makes your team actually trust it. Design for review, not for magic."
7. "Agents are overkill for 80% of what companies need. A well-built pipeline with one approval step beats an autonomous agent that's right most of the time."
8. "EU AI Act obligations are rolling out and most SMBs can't answer the first question: which AI systems are you even using? Start there."



### Holdnings-posts (kortere, gode til travle uger)

1. "Nobody buys 'RAG'. They buy their Thursday afternoons back."
2. "The best AI tech stack is the one your team can maintain after I leave. I build accordingly."
3. "Hot take: most companies don't need more AI. They need the three systems they already have to talk to each other."
4. "If your AI vendor can't tell you their accuracy on YOUR data, they're selling you a demo."
5. "'Is AI accurate enough?' Wrong question. Right question: what does your review step look like?"
6. "Every failed automation I've inspected had the same root cause: nobody defined what 'done' meant."

---



## Bucket 2: Educational — teknisk substans (30 %)

Formålet: vis HVORDAN du tænker. Det signalerer seniority stærkere end certifikater. Målgruppen: både beslutningstagere (skimmer) og deres tekniske folk (vurderer dig).

### Arkitektur-valg og trade-offs

1. "RAG vs. fine-tuning: when each one wins, in plain language. (Spoiler: you probably need RAG — and better data hygiene.)"
2. "n8n vs. custom code: my decision tree. Volume, error handling, and who maintains it decide — not preference."
3. "When do you actually need an agent? My 3-question test." (flertrins? beslutninger undervejs? tåler fejl med review?)
4. "Vector database, hybrid search, or just Postgres full-text? I've shipped all three. Here's how I choose."
5. "Buy vs. build for AI features: the total-cost math nobody shows you (SaaS fees forever vs. one build you own)."
6. "How I design human-in-the-loop: where the approval step goes, and why 'review everything' kills adoption as surely as 'review nothing' kills trust."
7. "Structured outputs are the most underrated LLM feature. JSON schemas turn 'creative' models into reliable data pipelines."
8. "The architecture of a document pipeline that survives production: intake → extract → validate → deliver → monitor. Skip one stage, pay for it later."



### "Sådan bygger jeg X"-serier (hver = 2-4 posts)

1. "How I build an invoice extraction pipeline that hits 95%+ accuracy" — del 1: parsing-valg, del 2: validering, del 3: integration.
2. "Building an inbox triage system: classification, RAG on your own FAQ, draft generation, routing."
3. "How I set up evals before shipping any LLM feature: golden dataset, metrics, regression tests. It takes a day and saves the project."
4. "Extracting structured data from contracts: parties, dates, amounts, termination clauses — with confidence scores."
5. "Connecting AI to a legacy system with no API: the browser-automation escape hatch (and when it's the right call)."
6. "PII masking before data hits an LLM: my pipeline for GDPR-safe AI." (stærk DK-vinkel)
7. "From messy SharePoint to a knowledge base your team actually uses: the data cleanup nobody wants to do (and how I automate most of it)."



### Teardowns og fejl-anatomier

1. "Anatomy of a failed chatbot: 5 things I find in every 'it answers wrong' system I'm asked to fix."
2. "I reviewed a company's 30 Zapier flows. 11 were broken, 6 were duplicates, 3 nobody could explain. Here's the cleanup playbook."
3. "The 7 most common mistakes in RAG systems — and the 30-minute fixes for three of them."
4. "Why your automation breaks silently — and the monitoring setup that catches it before your customers do."
5. "What 'production-ready' actually means for an LLM feature: a checklist." (→ lead magnet, se nederst)

---



## Bucket 3: Social proof — demos og resultater (20 %)

Formålet: bevis. Dine egne projekter, demoer og milepæle — vist, ikke fortalt. Det er disse posts, du booster for paid-budgettet.

### Demo-formater (genbrug med forskellige use cases)

1. Skærmvideo (1-2 min, undertekster): "20 messy PDFs → clean structured rows in 40 seconds. Built with [stak]. Here's what happens at each step."
2. Før/efter-billede: venstre = rodet indbakke/Excel, højre = struktureret output. Tekst: timerne det kostede før.
3. "Watch an email with 3 attachments get classified, extracted, and posted to the ERP — with a human approval step in the middle."
4. Live-regnestykke: "This process: 5 hrs/week × 48 weeks × 350 kr = 84,000 kr/year. The build that removes 80% of it: [X] kr. Payback: [Y] months."
5. "Same document, three extraction approaches, three accuracy scores. This is why I always benchmark before building."



### Build logs og milepæle

1. "I built [X] this weekend. What worked, what didn't, what surprised me." (ærlige byggenoter performer konsekvent godt)
2. "Month 1 as a freelance AI engineer: what I shipped, what I learned, what's next." (milepæls-post → afslut med lead magnet-CTA)
3. "A client asked if [X] was possible. 3 days later: demo. Here's the 3-day build story."
4. "Every reusable component I build makes the next project 20% faster. This month I added: [PII-node / eval-harness / extraction template]."
5. Case-post skabelon (når du har kunder): situation → proces → målt resultat → hvad kunden sagde. Anonymiseret er fint: "a Danish [branche] company".

---



## Bucket 4: Personal (10 %)

Formålet: mennesker køber af mennesker. Sparsomt, men det binder følgerskabet sammen.

1. "Why I left the comfort of a paycheck-only life to build AI systems for companies — one evening at a time."
2. "What working [dit fuldtidsjob] taught me about the processes companies never think to automate."
3. "My rule for every project: 'You review. I handle the rest.' Here's why radical ownership is my whole business model."
4. "The tools I actually use every week (and the hyped ones I dropped)."
5. "6 months of building in the evenings: honest numbers, honest lessons."

---



## Danske specialer (oversæt/skriv på dansk)

1. "Dansk SMV-tjek: de 5 processer jeg oftest ser automatiseret med payback under 90 dage."
2. "e-conomic/Dinero + AI: hvad der faktisk kan automatiseres i jeres bogholderi i 2026."
3. "GDPR og AI: hvad I skal have styr på FØR I sender kundedata gennem en sprogmodel."
4. "EU AI Act for danske SMV'er: 5 spørgsmål jeres ledelse skal kunne svare på."
5. "Hvorfor jeres 'vi prøvede ChatGPT'-projekt gik i stå — og de 3 ting der genstarter det."
6. "Shadow AI: jeres medarbejdere bruger allerede AI med kundedata. Sådan får I det ind i sikre rammer."

---



## Lead magnets (comment-to-DM mekanikken)

Mekanik: afslut en stærk post med *"Comment [WORD] and I'll DM you the [asset]"*. Kommentarer booster rækkevidden, og hver kommentar er et lead med navn og firma. Brug det på milepæls- og demo-posts — ikke på hver post (hver 4.-5. post max).


| #   | Lead magnet                                                                                             | Kobles til tilbud (08)    |
| --- | ------------------------------------------------------------------------------------------------------- | ------------------------- |
| 1   | "The AI Production Readiness Checklist" — 20 punkter fra demo til drift                                 | Pilot Rescue, Evals Check |
| 2   | ROI-beregner (regneark): timer × løn × frekvens → besparelse + payback                                  | Alle builds               |
| 3   | "10 processes every SMB can automate — ranked by payback speed"                                         | Opportunity Audit         |
| 4   | "The RAG Quality Scorecard" — selvtest af eksisterende assistent                                        | RAG-assistent, Evals      |
| 5   | "GDPR-safe AI: the PII pipeline blueprint"                                                              | Compliance Scan           |
| 6   | "Automation audit template" — kortlæg selv jeres Zapier/n8n-rod                                         | Cleanup Audit             |
| 7   | "The Document Pipeline Architecture Diagram" (annoteret)                                                | Dokumentpipeline          |
| 8   | "EU AI Act quick-scan questionnaire for SMBs" (dansk)                                                   | Compliance Scan           |
| 9   | "Build vs. buy decision tree for AI features" (1-sides PDF)                                             | Custom webapp, MVP        |
| 10  | Email-minikursus: "5 days, 5 automation wins" (durabelt aktiv — ejer du selv, uafhængigt af algoritmen) | Hele funnel'en            |


---



## Kobling: tilbud → content-vinkler

Hvert tilbud i `08-tilbud-og-priser.md` har sine posts. Når du vil sælge et bestemt tilbud, kør 2-3 af dets vinkler over 2 uger, og boost den bedste:


| Tilbud                  | Post-idéer                              |
| ----------------------- | --------------------------------------- |
| Opportunity Audit       | 10, 12, 57, lead magnet 3               |
| Pilot Rescue            | 1-4, 61, lead magnet 1                  |
| Evals Check             | 7, 19, 20, 32, 37, lead magnet 4        |
| Cleanup Audit           | 38, 40, lead magnet 6                   |
| Compliance Scan         | 11, 15, 35, 59, 60, 62, lead magnet 5+8 |
| Dokumentpipeline        | 8, 29, 30, 33, 42-46, lead magnet 7     |
| Indbakke-automatisering | 31, 44, 58                              |
| RAG-assistent           | 22, 25, 36, 39, lead magnet 4           |
| Legacy-integration      | 18, 34                                  |
| Agent-workflow          | 14, 24, 27                              |
| Custom webapp / MVP     | 26, 49, lead magnet 9                   |




## Månedsrytme (så banken ikke bare bliver en liste)

- **Uge 1**: 1 authority + 1 educational
- **Uge 2**: 1 authority + 1 demo/social proof (med lead magnet-CTA)
- **Uge 3**: 1 educational (serie-del) + 1 authority
- **Uge 4**: 1 demo/build log + 1 personal eller dansk special
- Dagligt 10-15 min: kommentér på målgruppens/branchefolks posts — det er gratis distribution og varmer cold outreach op.
- Månedsslut: tjek hvilke 2 posts gav flest kommentarer/DM'er/profilbesøg → lav varianter af dem næste måned, og boost den bedste (jf. `04-paid-some.md`).

