# React Native Engineer — Senior-Level Mock Interview Questions
### Candidate: Abrar Hasan (5+ years experience target level)
**LinkedIn:** [linkedin.com/in/abraralhasan](https://www.linkedin.com/in/abraralhasan/)

A set of mock interview questions for community practice, calibrated to a senior React Native engineer (5+ years) with full-stack exposure (Node.js, Nest.js, MongoDB). The bar throughout is senior: architectural ownership, trade-off reasoning, mentorship, and judgment under ambiguity — not just "do you know the API."

---

## 1. Architectural Ownership

1. Describe a React Native app where *you* made the core architectural decisions (navigation structure, state management, module boundaries) — not just implemented someone else's design. What were the decisions and why?
2. Tell me about a time you inherited a poorly architected codebase. What was wrong with it, how did you prioritize what to fix, and how did you get buy-in to do it?
3. How do you decide when to introduce a new dependency (e.g., a state manager, a navigation library) vs. building something in-house? Walk through a real decision.
4. Have you designed a module/feature boundary system for a team of multiple engineers working in the same RN codebase concurrently? How did you prevent merge conflicts and overlapping ownership?

## 2. Deep Technical: React Native Internals

5. Explain JSI, Fabric, and TurboModules in the New Architecture, and what concretely breaks or needs to change when migrating an app from the old bridge to the new one.
6. Have you written a native module (Swift/Kotlin/Obj-C/Java bridging into JS)? Walk through one — the problem it solved and why JS alone couldn't.
7. How does the React Native JS thread vs. UI thread vs. native modules thread model affect a gesture-heavy or animation-heavy screen? How have you diagnosed and fixed dropped frames?
8. What's your approach to reducing app bundle size and cold-start time on a large production app?

## 3. Full-Stack Depth (Node.js / Nest.js / MongoDB)

9. Design a Nest.js service layer for a multi-tenant application — how do you isolate tenant data, and where do you enforce authorization (guard, interceptor, DB query level)?
10. Walk through how you'd design MongoDB indexes for a query pattern you've actually had to optimize in production. What was slow, and what fixed it?
11. How do you handle schema migrations in MongoDB when the data model changes but you can't take the app offline?
12. Describe your approach to API versioning and backward compatibility when a mobile app in the wild can't be force-updated immediately.

## 4. System Design (senior-level scope — open-ended, push on trade-offs)

13. **Design prompt:** Design the architecture for a React Native app + Nest.js backend that needs to support 100K+ daily active users with real-time notifications. Cover scaling, caching, and failure modes — not just happy path.
14. **Design prompt:** You need to roll out a breaking API change to a mobile app where you don't control update adoption. Design the rollout strategy end-to-end (versioning, feature flags, deprecation timeline).
15. **Design prompt:** Design an offline-first sync system for a form-heavy app, including conflict resolution when the same record is edited offline on two devices.

## 5. Engineering Leadership & Mentorship

16. Have you led code reviews or set technical standards for a team? What's a standard you pushed for that met resistance, and how did you handle it?
17. Tell me about mentoring a junior or mid-level engineer. What was the specific gap you helped close?
18. Describe a technical disagreement with a peer or manager where you were wrong. How did you find out, and what did you do?
19. How do you balance shipping speed against technical debt when you're the most senior engineer on a small team and there's no one above you setting that bar?

## 6. Production Ownership & Incident Response

20. Walk me through the worst production incident you've personally owned — detection, diagnosis, fix, and the postmortem/prevention that followed.
21. How do you approach on-call or production support for a mobile app, where you can't always reproduce the user's environment?

## 7. Open-Ended Judgment

22. What's a technical opinion you hold that most React Native developers would disagree with?
23. What's the most complex system you've designed from scratch, and what would you do differently if you rebuilt it today?

---

### Suggested Interview Structure (60–75 min)

| Segment | Time | Focus |
|---|---|---|
| Warm-up & background | 5 min | Career walkthrough, role on key projects |
| Architectural ownership | 15 min | Section 1 |
| Deep technical (RN internals + full-stack) | 15 min | Sections 2–3 |
| System design prompt | 15–20 min | One scenario from Section 4 |
| Leadership & production ownership | 10–15 min | Sections 5–6 |
| Open-ended judgment / wrap-up | 5 min | Section 7 |
