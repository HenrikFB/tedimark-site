# TeDiMark — Overblik og hovedanbefaling

> TLDR af hele planen. De øvrige filer (01-06) går i dybden med hvert område.

## Din situation (som planen er bygget til)

- Fuldtidsjob ved siden af → ca. **8-10 timer/uge** til forretningen.
- Marked: **dansk outreach, engelsk brand/content** (hjemmesiden er allerede på engelsk).
- Marketingbudget: **max 2.000 kr/md** til paid social.
- Hjemmesiden (TeDiMark) er live med 7 services og positioneringen "You review. I handle the rest."

## Hovedanbefaling i én sætning

**Sælg ét konkret, produktiseret tilbud — "Document AI Pilot" (dokument- og dataekstraktion + automatisering) — til danske SMV'er via netværk og cold outreach, og brug LinkedIn-content med demoer som troværdighedsmotor. Paid SoMe kommer sidst, som retargeting.**

## Hvorfor netop det?

1. **Dine idéer 1 + 4 er det stærkeste første salg.** Dokumentekstraktion (fakturaer, bilag, kontrakter, forms) og automatisering af emails/bilag/form-filling er:
   - Konkret smerte som kunden selv kan sætte tal på ("vi bruger 6 timer om ugen på bilag").
   - Hurtigt at demonstrere (en 2-minutters video af et n8n-flow der læser en PDF sælger bedre end enhver salgstekst).
   - Præcis det dine egne noter peger på (LlamaIndex, unstructured.io, n8n, agentic extraction).
2. **Idé 2, 3 og 5 er upsell, ikke første salg.** MCP-standardisering, platform engineering og en PII-motor kræver tillid og forudsætter, at kunden allerede har set værdi. De kommer naturligt EFTER en vellykket pilot. (Detaljer i `02-ydelser-og-prioritering.md`.)
3. **Folk køber resultater, ikke teknologi.** Ingen SMV-ejer googler "MCP" eller "RAG". De mærker: for meget manuel indtastning, bilag der roder, data spredt i systemer. Al kommunikation skal starte i deres smerte og slutte i sparede timer/kroner.
4. **2.000 kr/md er for lidt til cold paid ads med positiv ROAS på high-ticket B2B.** En kunde er måske 30.000-100.000+ kr værd, men cold B2B-leads via ads kræver typisk 10.000+ kr/md og en lead magnet, før tallene går op. Derfor: budgettet bruges på boosts og retargeting af folk, der allerede kender dig. (Detaljer i `04-paid-some.md`.)

## Din go-to-market i prioriteret rækkefølge

| Prioritet | Kanal | Hvorfor | Tid/uge |
|---|---|---|---|
| 1 | Varmt netværk + dansk cold outreach (LinkedIn + email) | Hurtigste vej til første kunde | ~4 timer |
| 2 | LinkedIn-content på engelsk (demoer, før/efter, mini-cases) | Troværdighed + inbound over tid | ~3 timer |
| 3 | Paid SoMe: boosts + retargeting | Forstærker 1 og 2 — tændes først i måned 2-3 | ~1 time |

## De 3 første handlinger (denne uge)

1. **Byg ét demo-projekt**: Et n8n/LlamaIndex-flow der tager en bunke rodede PDF-fakturaer og spytter struktureret data ud (CSV/regneark/økonomisystem). Optag en 2-min skærmvideo. Dette er dit vigtigste salgsaktiv — det bruges i outreach, content OG på hjemmesiden.
2. **Definér pilot-tilbuddet på skrift**: "Document AI Pilot" — fast pris, fast omfang, 2 uger. (Skabelon i `01-forretningsplan.md`.)
3. **Lav en liste med de første 25 virksomheder/personer** du vil kontakte — start med folk du kender eller har 2. grads forbindelse til. (Metode i `05-cold-outreach.md`.)

## Filerne i denne mappe

| Fil | Indhold |
|---|---|
| `01-forretningsplan.md` | Positionering, målgruppe, priser/pakker, mål, praktisk DK-opstart (CVR, moms m.m.) |
| `02-ydelser-og-prioritering.md` | Dine 5 idéer gennemgået og prioriteret: første salg vs. upsell vs. langsigtet |
| `03-content-strategi.md` | LinkedIn-plan på engelsk, 2-3 posts/uge, 4 ugers færdig content-kalender |
| `04-paid-some.md` | Realistisk plan for 2.000 kr/md: boosts + retargeting, KPI'er, skaleringskriterier |
| `05-cold-outreach.md` | Dansk outreach-playbook: listebygning, skabeloner, opfølgningskadence |
| `06-90-dages-plan.md` | Uge-for-uge plan tilpasset fuldtidsjob |
| `07-markedsdrevne-muligheder.md` | Idébank UD OVER dine egne idéer: 8 tilbud baseret på de problemer firmaer reelt har med AI lige nu (fejlede pilots, upålidelige chatbots, EU AI Act, ubrugte Copilot-licenser m.m.) |
| `08-tilbud-og-priser.md` | Komplet tilbudskatalog for hele din tværfaglige profil: 17 tilbud i tre trin (audits → builds → recurring) med DKK-priser benchmarket mod 2026-markedet |
| `09-content-idebank.md` | 60+ konkrete post-idéer med færdige hooks, fordelt på Authority/Educational/Social proof/Personal, 10 lead magnet-idéer og kobling til hvert tilbud i kataloget |
