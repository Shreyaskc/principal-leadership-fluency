# Principal Leadership Fluency

An independent, evidence-first learning app for principal engineering judgment and interview practice. Buildless HTML, CSS and JavaScript; no runtime dependencies, accounts, analytics, third-party fonts or paid services. This course provides practice, not interview guarantees or an official leveling rubric.

## Start and navigate

Run `python3 -m http.server 8073` here, then open `http://localhost:8073`. Relative assets support a GitHub Pages project path. Directly opening `index.html` also renders the course, but browser storage policies differ for file URLs.

- **Path**: 12 sequenced lessons, about 25–40 minutes each; no forced locks.
- **Review**: browser-local recall queue. First review is due one day after practice, then seven days after the first review and twenty-one days after the next; subsequent reviews repeat at twenty-one days. No background scheduling or notifications.
- **Glossary**: 18 precise definitions with clearly separated analogies.
- **Toolkit**: printable strategy, ADR, migration, evidence and project-presentation scaffolds.
- **Sources**: official references and their limited application.
- **Courses**: extensible registry of verified public learning apps.

Search scans lesson titles, frameworks, cases, exercises and drills. Each lesson has hidden hints and solutions, an autosaved scratchpad, adversarial prompts, a five-dimension rubric and self-review notes. Complete an exercise before reading the solution; challenge the assumptions rather than memorizing the answer.

## Curriculum

1. Scope before story — authentic organizational impact versus presentation polish.
2. Strategy under ambiguity — hypotheses, policy, coordinated actions and decision deadlines.
3. Influence across teams — incentives, decision rights, funding and durable adoption.
4. Decision records and disagreement — lifecycle, dissent, experiments and escalation.
5. Build, buy or compose — total cost, disqualifiers, sensitivity and exit.
6. Roadmaps and prioritization — capacity, dependencies, outcomes and explicit deferral.
7. Migration sequencing and architecture defense — invariants, outbox, reconciliation and recovery boundaries.
8. Risk, cost and business outcomes — unit economics, causal limits, risk ranges and customer slices.
9. Mentoring senior engineers — ownership transfer, feedback and independent judgment.
10. Failure ownership and recovery — timeline, accountable choices and tested systemic actions.
11. Project deep dive — timed five-minute and twenty-minute formats, evidence audit and truthful attribution.
12. Adversarial panel and delayed practice — role-based challenge, changed constraints and anchored self-review.

All organizations, people, events and case numbers are fictional. The connected Northstar case deliberately includes incomplete evidence and a failed rollout. Practice answers are not achievements to claim. Never add private employer details or fabricate outcomes to fill a template. Real experience should identify individual versus team contributions and preserve unknowns.

## Tests

Use Node.js 24 or newer (jsdom 30 requires a modern Node runtime):

```sh
npm ci
npm test
node --check app.js
node --check content.js
node --check registry.js
```

The 142-assertion jsdom suite exercises every lesson route; hidden solutions; notes and scores across reload; text escaping; complete/uncomplete state; search and empty results; glossary filtering; review scheduling; reset confirmation and cancellation; corrupt and unavailable storage; registry visibility; and independent arithmetic checks for the cost exercises. jsdom is a development dependency only and is never shipped to Pages.

Manual browser QA checklist: keyboard-only navigation and visible focus; skip link; native details disclosures; autosave after reload; all routes at 390px and 1280px; no clipped text or horizontal page overflow; print preview; exported JSON download; blocked storage messaging; screen-reader landmarks and labels. This checklist is not a claim that these manual checks have passed. See `VALIDATION.md` for executed checks and limits.

## Privacy and data

Only this browser profile's localStorage key `principal-fluency-v1` is used. Notes are not encrypted. Avoid private or identifying content; exported progress includes all notes and scores. Review > Export downloads JSON for private backup. Review > Reset asks before clearing this app's progress. There is no progress import in this version. Clear browser data to remove it separately. Network requests occur only when loading assets or following external links; no application telemetry is sent.

## Contributing

Edit `content.js` to revise lessons, `app.js` for rendering/interactions, and `style.css` for responsive design. Keep IDs stable so saved progress remains meaningful. Update tests when changing content structure. Use original exercises, factual definitions and primary references; label company-specific expectations and every simulated outcome. Do not copy paid interview material or include personal interview stories. Do not make an unsupported readiness claim from completion or self-scores.

Add public courses in `registry.js` only after verifying their exact live URL and assets; keep `status: 'live'`. Never link planned or unlaunched siblings. Links to the three existing courses were verified HTTP 200 on 2026-10-19. A registry update is local to this repository; reciprocal updates require work in the owning repositories.

## Hosting

`.github/workflows/pages.yml` publishes only the five public assets through the free GitHub Pages workflow on pushes to `main`. README, tests, dependencies and notes are excluded from the Pages artifact. It requires existing repository Pages permissions; never expand credential scopes. Keep source and live commit verification in release notes.

## Primary references

- [GitLab Principal Engineer](https://handbook.gitlab.com/job-description-library/engineering/development/management/principal-engineer/): company-specific role calibration, not a universal bar.
- [AWS ADR process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html): decision-record lifecycle.
- [Google SRE Postmortem Culture](https://sre.google/sre-book/postmortem-culture/): operational learning from failure.
- [Google SRE Workbook: Eliminating Toil](https://sre.google/workbook/eliminating-toil/): operational work and leverage.

Frameworks, examples, synthesis and practice scoring in this course are original educational material. Referenced organizations do not endorse this app.
