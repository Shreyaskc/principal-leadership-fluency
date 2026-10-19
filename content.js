window.LESSONS = [
  {
    "id": "1",
    "title": "Scope before story",
    "goal": "Diagnose whether your evidence demonstrates principal scope.",
    "body": [
      "Principal scope is a pattern of consequential technical judgment across organizational boundaries. Complexity alone is insufficient: a difficult subsystem may demonstrate excellent senior execution while leaving strategy and coordination untested.",
      "Build an evidence ledger: business problem; scope and teams; your authority; your specific decisions; alternatives; who disagreed; artifacts; observable outcomes; attribution limits. Separate what you did, what the team did, and what you infer. A polished narrative cannot repair absent evidence.",
      "GitLab describes a principal role spanning several teams, strategic direction, mentoring and measurable impact. Its six-month planning horizon and departmental vocabulary are company-specific. Ask each interviewer how their organization defines scope, autonomy and time horizon."
    ],
    "trade": "Cross-team coordination is not automatically leadership: merely attending meetings changes little. Conversely, a quiet change to a shared reliability contract can have broad impact without a large headcount or dramatic launch.",
    "case": "Fictional case: Northstar, a regional logistics SaaS, has four teams sharing a dispatch database. Maya implemented a fast query. Rowan negotiated a tenant-isolation contract, established owners in all four teams and tested rollout safety. Either may have valuable evidence; only Rowan’s description currently demonstrates cross-team mechanisms.",
    "task": "Compare the two engineers. List three missing facts before assigning a level. Draft your own ledger with unknowns explicitly marked; do not fill gaps with invented metrics.",
    "hint": "Ask what changed outside the engineer’s own code and whether that change endured.",
    "solution": "Query impact, decision authority and durable adoption are missing. Maya might have led a company-wide performance strategy; Rowan might only have scheduled a meeting. Require artifacts or specific corroborable actions, not titles. A truthful limited-scope example is better than a fictional achievement.",
    "drills": [
      "What would have happened without you?",
      "Which decision was yours rather than your manager’s?",
      "What evidence contradicts your claimed scope?"
    ]
  },
  {
    "id": "2",
    "title": "Strategy under ambiguity",
    "goal": "Turn an unclear mandate into a falsifiable technical direction.",
    "body": [
      "Start with diagnosis, not architecture. Separate observations from hypotheses and preferences. Name the business constraint, affected users, current failure mode, uncertainty and decision deadline. Ask what must be true for a large investment to pay off.",
      "Write a strategy kernel: diagnosis → guiding policy → coordinated actions. Add explicit non-goals and a horizon. Reduce uncertainty with bounded experiments whose result can change the decision. A roadmap is an output of strategy, not a substitute for it.",
      "Classify decisions by reversal cost and urgency. A cheap interface prototype can proceed with partial information; an irreversible data-retention commitment needs stronger evidence. Assign an owner and review trigger to assumptions so ambiguity does not become permanent indecision."
    ],
    "trade": "Analysis has opportunity cost. Stop investigating when the next fact is unlikely to change your action before the deadline. But “move fast” is weak reasoning when the downside includes unrecoverable data loss.",
    "case": "Northstar loses dispatch requests during peaks. Sales asks for “a global platform” in six months. Support reports 12 peak incidents per quarter, but only two have verified causes. One enterprise prospect requires regional data residency; its contract is unsigned.",
    "task": "Write a one-page strategy with two hypotheses, a two-week experiment, a non-goal, a decision deadline and a reversal trigger.",
    "hint": "Distinguish scaling demand from a sales hypothesis. Identify the smallest evidence that separates database contention from worker saturation.",
    "solution": "Diagnosis: peak reliability is the verified problem, global demand is uncertain. Instrument queue age and lock wait by tenant for two weeks; load-test an isolated worker path. Policy: protect regional dispatch before expanding geography. Non-goal: global active-active this quarter. Revisit if signed residency demand and measured regional capacity justify it. Give experiment ownership to platform and dispatch leads; decide at day 14.",
    "drills": [
      "Your experiment is inconclusive. What do you do Monday?",
      "The CEO demands a global launch. Which choice is still yours?",
      "What fact would make your strategy wrong?"
    ]
  },
  {
    "id": "3",
    "title": "Influence across teams",
    "goal": "Create alignment that survives your absence.",
    "body": [
      "Map stakeholders by incentives, decision rights and operational burden, not by how supportive they seem. Product owns customer value; security owns relevant policy interpretation; service owners own operability. Find the accountable decision maker before unresolved disagreement becomes a veto maze.",
      "Create a joint problem statement and decision criteria before advocating a solution. Use bilateral discovery to surface constraints, then publish a short proposal with alternatives and dissent. Alignment means people understand the choice and execute their obligations; it does not require unanimous enthusiasm.",
      "Transfer ownership through contracts, review cadence and local champions. Adoption is a technical deliverable: migration support, compatible APIs and funded maintenance matter more than a persuasive slide deck. Track participation and downstream outcomes, not meeting counts."
    ],
    "trade": "Mandating a platform can reduce fragmentation while transferring unbudgeted toil to consumers. Letting every team choose independently preserves autonomy but can multiply on-call and security work. Decide which constraints must be shared and where variation is cheap.",
    "case": "Northstar’s platform team proposes a shared queue. Routing wants low latency; analytics wants replay; support needs traceability. No team has budget for consumer migrations.",
    "task": "Create a stakeholder agreement with decision owner, criteria, adoption costs, exception path and a measurable pilot.",
    "hint": "Find who pays the migration cost and who owns the shared service after launch.",
    "solution": "Platform lead owns queue operations; routing lead owns latency validation; analytics lead owns replay tests. Product leadership funds consumer work before rollout. Pilot one noncritical tenant; compare queue age and incident burden. Exceptions require a documented unmet criterion and expiry date. Escalate funding gaps to the accountable sponsor rather than claiming consensus.",
    "drills": [
      "A team agrees in the room but never migrates. Now what?",
      "How do you know this is influence rather than executive coercion?",
      "Who can say no to your platform?"
    ]
  },
  {
    "id": "4",
    "title": "Decision records and disagreement",
    "goal": "Preserve reasoning and resolve conflict without erasing dissent.",
    "body": [
      "An ADR captures one significant choice, its context and consequences. Include owner, state, date, constraints, options, criteria, evidence, decision, risks and review trigger. Keep implementation details elsewhere unless they explain the choice.",
      "AWS’s ADR guidance uses proposed, accepted, rejected and superseded states. Accepted reasoning should remain historically inspectable; use a superseding record when conditions change. A decision log lets future teams understand why an apparently simpler option was rejected.",
      "For conflict, restate the opposing argument in terms its advocate accepts. Separate facts, values and authority. Agree on a test where facts differ; have the accountable owner resolve value tradeoffs. Record dissent and the escalation deadline. Reopen on new evidence rather than repeating the same meeting."
    ],
    "trade": "A formal ADR for every naming choice creates bureaucracy. No record for a shared persistence decision creates costly rediscovery. Use significance and reversal cost, not document count, to determine rigor.",
    "case": "Routing wants direct database writes for latency; platform wants an event boundary for isolation. Both claim the other is irresponsible. A customer pilot starts in three weeks.",
    "task": "Write ADR-01 and a conflict resolution plan. Include the strongest case for the rejected alternative.",
    "hint": "Latency is measurable; who carries future operational cost is a value and ownership question.",
    "solution": "Proposed: transactional outbox for durable dispatch events. Direct writes are simpler and avoid extra hop latency, but couple shared schema and failure domains. Benchmark both against a stated p99 target with crash recovery. Routing and platform jointly own the test; engineering sponsor decides unresolved cost tradeoffs in five days. Accept only with operational ownership and a documented fallback. Supersede if measured latency exceeds the agreed budget.",
    "drills": [
      "Why was the dissenter rational?",
      "Your preferred option loses the benchmark. What changes?",
      "When is disagree-and-commit inappropriate?"
    ]
  },
  {
    "id": "5",
    "title": "Build, buy or compose",
    "goal": "Compare whole-life costs and strategic constraints.",
    "body": [
      "Begin with capability boundaries: what differentiates the business, and what is commodity? Compare build, managed service, open-source operation, and a narrower change to the current system. Include doing nothing for a bounded period.",
      "Model three-year total cost: implementation, integration, migration, operations, support, compliance review, vendor fees, usage growth and exit. Use ranges and scenario sensitivity; an invented precise forecast is weaker than an explicit uncertain one.",
      "Test non-negotiables before weighted scoring: residency, exportability, availability behavior and procurement deadlines. A weighted average cannot compensate for a disqualifying requirement. Prove an exit path with representative data and failure tests rather than trusting a sales promise."
    ],
    "trade": "Building can preserve control but consume the engineers needed for product work. Buying can speed delivery but introduce variable costs and a dependency you cannot repair. Hybrid solutions can combine strengths or double integration burden.",
    "case": "Fictional vendor: managed dispatch queue costs $8k/month plus $0.04 per thousand events. Forecast 100m events/month. Internal build: 12 engineer-months at an assumed fully loaded $20k/month, plus 0.5 engineer ongoing and $4k/month infrastructure. Exclude taxes and discounting for this exercise.",
    "task": "Compute a 36-month baseline for buy and build. Then list omitted costs and the condition that changes your recommendation.",
    "hint": "100m events is 100,000 units of one thousand. Separate one-time and monthly costs.",
    "solution": "Buy: $8k + $4k = $12k/month, or $432k over 36 months before integration and exit. Build: $240k + 36 × ($10k + $4k) = $744k before overruns. Buy looks cheaper at baseline, not universally better. If volume grows 10×, buy becomes $48k/month; residency failure disqualifies it regardless of cost. Validate fee tiers and staffing assumptions. Opportunity cost is not automatically additional cash expense.",
    "drills": [
      "Your vendor doubles prices. How quickly can you leave?",
      "What is strategic about this capability?",
      "Why is open source not free?"
    ]
  },
  {
    "id": "6",
    "title": "Roadmaps and prioritization",
    "goal": "Sequence outcomes under capacity and dependency constraints.",
    "body": [
      "Define an outcome tree: customer goal → measurable behavior → technical capability → deliverable. Use leading indicators to guide execution and lagging outcomes to judge value. A new service count is an output; fewer failed dispatches is an outcome.",
      "Compare urgency, expected value, risk reduction, effort and dependencies. Cost of delay can guide ordering, but estimates are uncertain and scores are aids to judgment. A dependency may have little standalone benefit yet unlock high-value work. Reserve capacity for incidents and learning.",
      "Use now/next/later with entry and exit criteria. Commit near-term capacity, express longer-term bets as assumptions, and show what will be dropped if a new priority arrives. Escalate incompatible goals explicitly instead of hiding overload inside dates."
    ],
    "trade": "A six-month plan provides coordination but false precision can lock teams into obsolete choices. Pure opportunism responds quickly but prevents consumer teams from planning. Use stable goals with revisable implementation.",
    "case": "Four teams have 24 engineer-months this quarter. Residency is estimated at 14, queue isolation at 10, observability at 4, and incident reserve at 6. Sales requests all three initiatives.",
    "task": "Create a capacity-feasible roadmap with a dependency and a kill criterion. Explain the deferred work to sales.",
    "hint": "The requested total is 34. Do not solve a capacity deficit by relabeling estimates as commitments.",
    "solution": "Allocate 6 reserve, 4 observability and 10 isolation; use 4 for residency discovery, not full implementation. Observability gates isolation rollout. Defer residency delivery pending signed demand and a bounded feasibility result. Stop the isolation rollout if it worsens dispatch failure beyond the agreed budget. Publish the tradeoff and ask the sponsor to choose extra scope only by removing another commitment or adding credible capacity.",
    "drills": [
      "Which initiative would you cancel at half capacity?",
      "A low-score compliance dependency is mandatory. What now?",
      "What did you deliberately choose not to do?"
    ]
  },
  {
    "id": "7",
    "title": "Migration sequencing and architecture defense",
    "goal": "Protect invariants while moving systems and teams.",
    "body": [
      "Start with invariants: what must remain true during every intermediate state? For dispatch, no accepted request may disappear, and retries must not create duplicate effects. Define source of truth, idempotency keys, schema compatibility, reconciliation and rollback boundaries.",
      "Sequence: baseline → compatibility layer → backfill → shadow comparison → small canary → progressive traffic → cutover → observation → retirement. Each phase needs an owner, metric gate, rollback or roll-forward procedure and dependency readiness. Shadow writes with real side effects are not safe shadowing.",
      "Dual writes are not atomic across independent systems. A transactional outbox can couple state change and event intent in one database transaction, but consumers still need deduplication and lag monitoring. Rollback after new-only writes may require reverse replication or reconciliation; a feature flag alone cannot restore old data."
    ],
    "trade": "A strangler migration limits blast radius but prolongs coexistence and operational complexity. A big-bang cutover can be rational for small, verifiably migratable datasets with planned downtime; it is not automatically reckless or automatically efficient.",
    "case": "Northstar has 30m dispatch records, three consumers and incompatible status enums. A new service accepts a status the old database cannot represent. A backfill takes 18 hours at tested load.",
    "task": "Design the phase gates and answer: at which point is rollback no longer a simple traffic switch?",
    "hint": "Consider what old readers do with new-only statuses, and what happens to writes during backfill.",
    "solution": "First add compatible status mapping and event IDs to all consumers. Backfill with a checkpoint and watermark, then replay changes after that watermark. Shadow reads compare known invariants without sending dispatches. Canary one tenant with lag, duplicate-effect and mismatch gates. Before accepting new-only statuses, either implement lossless reverse mapping or declare a roll-forward boundary with reconciliation ownership. Retire old storage only after recovery and restore drills plus consumer signoff.",
    "drills": [
      "Crash between commit and event publication: what survives?",
      "Your rollback loses an hour of writes. Is it rollback?",
      "How do you prove the quiet tenant is representative?"
    ]
  },
  {
    "id": "8",
    "title": "Risk, cost and business outcomes",
    "goal": "Quantify tradeoffs without pretending uncertainty is precision.",
    "body": [
      "Connect technical measurements to customer and business effects through explicit causal hypotheses. Track dispatch success rate by eligible requests, p99 latency under specified load, incident minutes and support burden. Pair aggregate outcomes with tenant and cohort slices to avoid hiding harm.",
      "Risk combines likelihood, impact and exposure; expected loss is a rough comparison, not a complete model for catastrophic or correlated events. State uncertainty, risk owner, mitigation, residual risk and trigger. Avoid adding unrelated risk scores as if they were money.",
      "Cost per successful dispatch = relevant period cost / successful dispatches. Compare like periods and include shared-cost allocation assumptions. For a before/after result, check traffic mix, seasonality and concurrent changes; use a holdout or phased comparison where practical."
    ],
    "trade": "Averages can improve while the largest customer becomes unusable. Over-optimizing unit cost can erase recovery headroom. Reliability investment should be tied to user impact and acceptable risk rather than an unqualified “five nines” goal.",
    "case": "Northstar spends $120k/month on dispatch and completes 60m successful dispatches. A proposal saves $24k but lowers successful dispatches to 48m. Peak incident risk is estimated at 5–15% per quarter with $200k impact per incident.",
    "task": "Calculate unit costs and expected quarterly loss range. Name two reasons not to decide from these numbers alone.",
    "hint": "Use successful work in the denominator. A risk range is not a confidence interval unless a statistical model supports it.",
    "solution": "Both unit costs are $0.002 per success: $120k/60m and $96k/48m. Absolute savings conceal 12m fewer successes. Rough expected loss is $10k–$30k/quarter, assuming one modeled event and credible probabilities. Customer distribution, contractual harm, reputational tail loss and estimation uncertainty may dominate. Do not claim the savings are a business win without demand and failure context.",
    "drills": [
      "Your metric improved because difficult tenants left. How do you detect it?",
      "What risk are you accepting personally versus on behalf of the business?",
      "How would finance challenge this model?"
    ]
  },
  {
    "id": "9",
    "title": "Mentoring senior engineers",
    "goal": "Multiply independent judgment rather than creating dependence.",
    "body": [
      "Mentor around a capability gap and an authentic stretch problem. Agree on what the engineer will own, what support you provide, decision boundaries and signals of growth. Senior engineers need room to reason, dissent and develop organizational reach, not a stream of your preferred answers.",
      "Use a review ladder: ask for their diagnosis and alternatives; probe the riskiest assumption; offer a counterexample; let them decide within the agreed boundary; review outcomes. Give specific feedback about reasoning and stakeholder behavior, not personality.",
      "Measure durable transfer: another engineer runs the design review, handles a disagreement and maintains the decision log without you. Attribute their work accurately. Principal impact includes making others effective; taking credit for every delegated decision undermines that evidence."
    ],
    "trade": "Stepping in during an imminent incident can be necessary. Stepping in whenever a design differs from yours prevents learning. Define safety boundaries in advance and taper support as competence becomes observable.",
    "case": "An experienced routing engineer writes excellent designs but avoids conflict with analytics. You have been answering all cross-team questions for them, and the team now waits for you.",
    "task": "Plan three mentoring sessions and a handoff. Define a signal that would make you intervene.",
    "hint": "Coach the missing organizational skill and preserve the engineer’s ownership.",
    "solution": "Session 1: role-play analytics objections and agree shared criteria. Session 2: engineer leads a real review; mentor observes and only intervenes for a stated correctness or safety boundary. Session 3: review specific moments, then let the engineer own follow-up and dissent records. Success: they resolve a later disagreement independently. Do not use their promotion as proof of your sole causality.",
    "drills": [
      "What did the engineer do better than you?",
      "How would you mentor someone who rejects your advice?",
      "When did your help become a bottleneck?"
    ]
  },
  {
    "id": "10",
    "title": "Failure ownership and recovery",
    "goal": "Explain an error with accountability and systemic learning.",
    "body": [
      "Own your decision and the information available at the time. Distinguish a reasonable risky bet that failed from a poor process that happened to succeed. Outcome bias obscures the quality of judgment; avoid retroactively claiming you predicted the problem.",
      "Use a timeline: signal, interpretation, action, impact, recovery, learning. Explain why safeguards failed and what incentives or missing information shaped the choice. Blameless analysis supports accountability by making the system easier to improve, not by removing responsible owners.",
      "Actions need owners, dates and verification. Prefer a testable guardrail or recovery drill to “be more careful.” Review whether the action reduced recurrence or severity, and describe unresolved risk. Google SRE’s postmortem practice is an operational reference, not a mandatory interview narrative."
    ],
    "trade": "Publicly owning everything can sound noble while concealing facts and other people’s agency. Blaming a team hides your contribution; claiming sole responsibility for an organizational failure is also inaccurate.",
    "case": "Northstar’s canary passed on low-volume tenants. Rowan approved expansion without testing large-tenant status diversity. A mapping bug delayed 80k dispatches for 43 minutes. Recovery required replay and manual reconciliation; the estimate of customer financial loss is unknown.",
    "task": "Give a 90-second ownership account and three verified follow-up actions. Keep unknown loss unknown.",
    "hint": "Say which gate you approved and why it was insufficient. Include recovery and a way to test the new safeguard.",
    "solution": "I approved expansion using a canary that did not represent high-cardinality tenants. That gate missed a status mapping defect. We paused rollout, replayed affected events and reconciled 80k delayed requests over 43 minutes; financial loss remains unverified. I owned adding a tenant-diversity replay suite, a mismatch stop gate and a recovery drill. Completion is not enough: we must verify the suite catches the original defect and the drill meets our recovery target.",
    "drills": [
      "Why should we trust your next rollout?",
      "Which action did you fail to complete?",
      "Was the outcome preventable with information you already had?"
    ]
  },
  {
    "id": "11",
    "title": "Project deep dive: five and twenty minutes",
    "goal": "Present real experience at the right resolution.",
    "body": [
      "Choose a project with genuine decision ownership and inspectable reasoning. Sanitize confidential details, use permitted ranges and label approximations. If you lack cross-team scope, state the boundary and use fictional exercises only as practice. Never present a hypothetical case as employment history.",
      "Five-minute format: 0:00–0:45 problem, users and stakes; 0:45–1:30 constraints and your role; 1:30–3:00 pivotal decision, alternatives and dissent; 3:00–4:00 execution, migration and risk; 4:00–5:00 measured outcome, attribution limits and lesson. One clear system sketch is enough.",
      "Twenty-minute format: 0–2 context and success measures; 2–5 architecture and constraints; 5–9 two pivotal decisions and alternatives; 9–12 influence and conflict; 12–15 migration, failure modes and recovery; 15–18 outcomes and evidence limits; 18–20 what changed your mind and what you would now do differently. Prepare backup details, not a memorized monologue."
    ],
    "trade": "Conciseness improves clarity but can omit the hard tradeoff. More diagrams do not create more depth. A strong presentation exposes the reasoning an interviewer can challenge, including where your evidence is incomplete.",
    "case": "Use the fictional Northstar case to rehearse format only. For actual interviews, replace every field with truthful, authorized experience and accurately distinguish personal and team contributions.",
    "task": "Record a five-minute account, then create a twenty-minute outline. Mark every claim as observed, inferred or unknown. Remove unsupported claims.",
    "hint": "If your story contains only “we aligned and delivered,” locate one disputed decision and its evidence.",
    "solution": "A useful outline includes the dispatch failure baseline, ownership agreement, outbox-versus-direct-write decision, phase gates and the failed canary. State simulated outcomes as fictional. In your own account, link each claimed result to a real measurement or say it was not measured. A scope gap should become a development goal, not a fabricated story.",
    "drills": [
      "Draw the write path from memory.",
      "Which detail did you simplify, and does it change the decision?",
      "What result can you actually attribute to your intervention?"
    ]
  },
  {
    "id": "12",
    "title": "Adversarial panel and delayed practice",
    "goal": "Defend choices, update beliefs and calibrate evidence.",
    "body": [
      "Run a 30-minute panel: 5-minute project opening; 12 minutes of role-based challenge; 5-minute changed-constraint redesign; 5-minute scoring and evidence review; 3-minute improvement plan. Rotate the candidate, product sponsor, reliability engineer and skeptical peer roles.",
      "Product asks which customer outcome justifies the cost. Reliability asks what happens at the worst intermediate migration state. Security asks about data boundaries and privileged access. Finance asks about growth and exit cost. The peer asks for the strongest rejected option. Each follow-up must target the answer actually given.",
      "After practice, score reasoning before delivery. Write the hardest unanswered question, the unsupported claim and the next artifact to build. Revisit after 1, 7 and 21 days without looking at the solution first. These intervals are course defaults, not a scientifically optimal schedule for every learner."
    ],
    "trade": "A panel should stress reasoning without rewarding aggression or bluffing. “I do not know; here is the bounded test and interim safe choice” can be stronger than confident speculation. Changing your mind with evidence is not inconsistency.",
    "case": "Panel inject: after your queue proposal, the vendor loses required regional availability and your migration budget is cut 40%. Dispatch growth is half the forecast. You have 48 hours to recommend a plan.",
    "task": "Defend, revise or abandon the proposal. Score five dimensions using the rubric, then schedule a retry. Have the reviewer cite exact words or omissions for every score.",
    "hint": "Update the constraints first. Do not defend sunk work merely because it is yours.",
    "solution": "Pause the disqualified regional vendor path; keep reliability instrumentation and compatibility work that remains valuable. Re-estimate a narrower regional isolation phase with reduced growth. Publish scope removed, remaining risks and the owner of the 48-hour decision. If no feasible plan satisfies the invariant, escalate the incompatible constraints rather than promise delivery. A good score requires defensible evidence, not matching this exact option.",
    "drills": [
      "What new evidence changed your recommendation?",
      "What can you safely defer without creating hidden debt?",
      "Why is this a principal problem rather than a local implementation task?"
    ]
  }
];
