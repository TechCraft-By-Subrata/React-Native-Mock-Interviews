# React Native Engineer — Mock Interview Questions
### Candidate: Chirag Vekariya (Senior MERN Stack Developer | React Native Specialist, 7+ Years)
**LinkedIn:** [Linkedin Profile](https://www.linkedin.com/in/vchirag210/)

A React Native–focused mock interview set calibrated to a senior full-stack engineer with 7+ years spanning React Native, Next.js, Node.js, and MongoDB — with a broad portfolio across real estate, charity, IoT, grocery, legal, short-video, and travel domains.

---

## 1. React Native Architecture & Scalability

1. With 7+ years and 10+ shipped apps, how has your approach to React Native architecture evolved? What would you do differently on your first app if you rebuilt it today?
2. You've built apps across very different domains (real estate, short video, grocery, legal, IoT). How do you structure a new React Native project from scratch — what decisions do you lock in on day one vs. defer?
3. You achieved a 30% increase in mobile performance metrics at Codestarn. Walk through specifically what you measured, what you changed, and how you validated the improvement.
4. How do you architect a modular component library that's reused across multiple client projects without creating tight coupling or versioning nightmares?
5. With Hithot being a short video app, how do you handle video feed performance (buffering, thumbnail generation, infinite scroll) on both low-end Android and iOS devices?

## 2. Full-Stack Integration: Node.js + MongoDB + React Native

6. Walk through the backend architecture you built at Bioin Tech — how did you structure your Express.js API, handle authentication, and model complex relational data in MongoDB?
7. When do you choose MongoDB over a relational database like PostgreSQL? You've worked with MongoDB heavily — give a real example where its document model was the right fit, and one where it wasn't.
8. How do you design a RESTful API contract between your own Node.js backend and React Native frontend to minimize breaking changes as both evolve?
9. Walk through how you'd implement a Reward Points System (as you built at Bioin Tech) end-to-end — data model, transaction atomicity, and how the mobile app reflects real-time balance changes.

## 3. Third-Party Integrations

10. You've integrated Stripe, Firebase, Google Maps, and social login providers. Walk through a Stripe payment flow in React Native — from tapping "Pay" to confirming the transaction, including what happens on payment failure or timeout.
11. You built Location Tracking as a feature — walk through the architecture. Is it foreground or background tracking, how often does it poll, how do you handle battery drain, and how does the location reach the backend?
12. You've used Firebase Auth, Firestore, Push Notifications, and Crashlytics together. Walk through how you structure Firebase security rules for a multi-role app (e.g., admin vs. end user).
13. On TerraGo StreetlightOps, which is an IoT operations platform — how does the mobile app communicate with hardware or IoT devices? What was the data sync mechanism for real-time streetlight status?

## 4. Next.js Admin Panels & Web

14. You built Next.js Admin Panels alongside React Native apps at Bioin Tech. How do you share business logic or type definitions between the Next.js web and React Native mobile codebases?
15. When building an SEO-optimized Next.js web platform alongside a React Native app that share the same backend, what API design decisions make both easier to serve?
16. How do you handle authentication state across a Next.js admin panel and a React Native app that both talk to the same Node.js backend — same token strategy, or different?

## 5. Multi-Language, Role-Based Access & Complex Features

17. You implemented multi-language (i18n) support across apps. Walk through how you handle dynamic server-driven strings (e.g., content from the CMS that also needs to be localized) not just static UI labels.
18. Walk through how you implement Role-Based Access Control in a React Native app — how do roles affect navigation structure, API calls, and UI rendering without scattering permission checks everywhere?
19. On Dubai Charity Association, what were the domain-specific challenges (payment compliance, donation flows, user trust) that influenced how you built the app?
20. On Delhi Vakil (a legal app), what unique requirements come with building for a legal services domain — document handling, confidentiality, user verification?

## 6. App Store Deployment & Release Management

21. You've managed end-to-end App Store and Play Store deployments across 10+ apps. Walk through your release checklist — what do you validate before submitting a build?
22. What's the most common App Store or Play Store rejection you've encountered, and how do you avoid it on future submissions?
23. How do you manage multiple apps in App Store Connect and Google Play Console simultaneously without configurations bleeding into each other?
24. Have you used OTA update mechanisms (CodePush or EAS Update) in any of your apps? How do you decide what can go out as an OTA vs. what needs a full store submission?

## 7. Code Quality, Mentorship & Team Process

25. At Codestarn you mentored junior developers on clean code and modern JS practices. What's a specific anti-pattern you see junior React Native developers repeat most, and how do you correct it?
26. How do you run code reviews on a team where you're the most senior mobile engineer? What are your non-negotiables vs. what do you let slide?
27. You've worked across startups (Bioin Tech) and client-facing agencies (Techsoul, Assaptr). How does your approach to architecture and code quality differ between the two contexts?

## 8. System Design

28. **Design prompt:** Design the full-stack architecture for Aapkabazar (an online grocery app) — covering product catalog, cart, real-time order tracking, push notifications, and admin panel. Walk through the React Native + Node.js + MongoDB structure and how they connect.
29. **Design prompt:** Design a short video app (like Hithot) that supports infinite scroll video feeds, user uploads, and social interactions (likes, comments). Cover video storage, CDN delivery, and how the React Native feed stays performant.
30. **Design prompt:** Design a multi-tenant admin panel in Next.js + a companion React Native app where both share the same Node.js backend. How do you handle auth, role-based access, and shared data models?

## 9. Behavioral

31. You've shipped apps across real estate, IoT, grocery, legal, and short video. Which domain had the most technically surprising requirements — something that forced you to solve a problem you'd never faced before?
32. With 7 years of experience, tell me about a technical decision you made early in your career that you'd now consider a mistake. What did you learn from it?
33. You've worked at both startups and agencies, in Surat and Ahmedabad. What's the biggest difference in how software gets built between those two environments?

---

### Suggested Interview Structure (60–75 min)

| Segment | Time | Focus |
|---|---|---|
| Warm-up & project walkthrough | 5 min | Pick one app from the portfolio as anchor |
| React Native architecture & performance | 15 min | Sections 1–2 |
| Integrations & domain-specific features | 15 min | Sections 3–5 |
| System design prompt | 15 min | One scenario from Section 8 |
| Release management, mentorship & process | 10 min | Sections 6–7 |
| Behavioral & wrap-up | 5–10 min | Section 9 |
