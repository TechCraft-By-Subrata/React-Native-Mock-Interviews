# React Native Engineer — Mock Interview Questions
### Candidate: Pragati Veer (Senior React Native Developer, 5+ years)
**LinkedIn:** [linkedin.com/in/pragativeer](https://www.linkedin.com/in/pragativeer/) | **GitHub:** [github.com/Pcode13](https://github.com/Pcode13)

A React Native–focused mock interview set calibrated to a senior developer with hands-on experience across fintech, healthcare, e-commerce, and on-demand domains — covering TypeScript, Redux, Expo, PWA, BLE, WebSockets, multi-language/RTL, and team leadership.

---

## 1. React Native Architecture & TypeScript

1. On the JM Financial PWA you used Expo + TypeScript — how did you enforce type safety across the API layer, navigation params, and Redux store simultaneously?
2. Explain the trade-offs between Expo managed workflow and bare React Native CLI. Given you've used both, what specifically pushed you to Expo for the JM Financial project?
3. How do you structure a large React Native codebase across multiple domains (fintech, healthcare, e-commerce)? What module boundaries do you define, and how do you enforce them?
4. Walk through a situation where a React Native upgrade caused regressions in your app. How did you manage the migration?
5. What's your approach to building a reusable component library — as you did for Bruno's Barbers? How do you handle versioning and documentation for teammates?

## 2. State Management

6. You've used Redux across multiple projects — when do you use Redux Toolkit vs. React Query (as on Bruno's Barbers), and how do you decide which server state belongs in React Query vs. Redux?
7. Walk through how you'd handle optimistic UI updates (e.g., a user books an appointment and it shows confirmed instantly before the API responds). What happens on failure?
8. How do you manage deeply nested or cross-slice state in Redux without making the store a mess?

## 3. Performance Optimization

9. You've mentioned fixing memory leaks at Alphaware. Walk through how you diagnosed one — what tools did you use and what was the root cause?
10. How do you profile and fix a janky animation or slow FlatList in a production app?
11. On the JM Financial PWA, you implemented custom service workers for offline capability. How do you decide what to cache vs. fetch fresh, and how do you handle cache invalidation?

## 4. Advanced Integrations

12. Walk through the BLE integration on RMS SIA — how does Bluetooth connectivity work in React Native, and what platform-specific challenges (permissions, iOS vs. Android) did you hit?
13. On RMS SIA, you built a live ATM monitoring view with WebSockets. How do you manage WebSocket lifecycle (connect, reconnect, teardown) in a React Native component without memory leaks?
14. On the JM Financial app, you implemented on-device PDF generation for sensitive financial documents. How did you handle security — ensuring PDFs weren't left in an accessible cache after sharing?
15. Walk through the QR code login flow on RMS SIA — how did you sync the mobile scan with the web session securely?

## 5. Multi-Language & Accessibility

16. Bruno's Barbers supports 4 languages with RTL layout using i18next. Walk through how RTL flipping works in React Native — what breaks automatically and what needs manual handling?
17. How do you manage translation file maintenance across a growing app without translation keys going stale or inconsistent?

## 6. Firebase & Push Notifications

18. You've implemented FCM with custom in-app banners and automated token management on the JM Financial PWA. Walk through token refresh — what happens when a token expires and the user opens the app?
19. How do you handle push notification deep linking when the app is in a killed state vs. background vs. foreground?

## 7. Backend & Cross-Platform Deployment

19. You've worked with Node.js and Oracle APEX for backend services. Walk through a REST API you engineered — what did the schema look like, and how did you handle complex relational data?
20. At Clover Infotech you oversee deployment pipelines for both app stores. Walk through your release process — how do you manage versioning, build variants (staging/prod), and rollbacks if a bad build goes live?
21. What's your approach to handling App Store and Play Store review rejections? Walk through one you've encountered.

## 8. Team Leadership & Mentorship

22. At Clover Infotech you lead a team — how do you run code reviews? What do you specifically look for beyond "does it work"?
23. How do you handle a situation where a junior developer pushes a fix that solves the immediate bug but introduces a worse architectural problem?
24. Walk through how you allocate tasks across a mobile + web team on a sprint. How do you prevent blockers when iOS, Android, and web share the same backend API that isn't ready yet?

## 9. System Design

25. **Design prompt:** Design the architecture for a doctor consultation app (like Aster) that handles video calls, e-pharmacy ordering, and real-time notifications — covering state management, offline handling, and third-party SDK integration.
26. **Design prompt:** You're building a fintech PWA (like JM Financial) that needs to work offline, generate PDFs on-device, and send push notifications cross-platform. Walk through the full architecture including service worker strategy and data sync.
27. **Design prompt:** Design a multi-role app (patient, doctor, admin) where each role sees a completely different navigation tree and permission set. How do you structure this without duplicating code?

## 10. Behavioral

28. Tell me about a project where you owned a live banking app solo at Oneture Technologies. What was hardest about maintaining a live financial app without breaking things for existing users?
29. You've worked across e-commerce, healthcare, fintech, and on-demand. Which domain had the most technically demanding requirements and why?
30. Tell me about a time you disagreed with a technical decision made by a senior stakeholder. How did you handle it?

---

### Suggested Interview Structure (60–75 min)

| Segment | Time | Focus |
|---|---|---|
| Warm-up & project walkthrough | 5 min | JM Financial or Bruno's Barbers as anchor |
| Architecture & TypeScript | 15 min | Sections 1–2 |
| Advanced integrations (BLE, WebSockets, PDF, FCM) | 15 min | Sections 4–6 |
| System design prompt | 15 min | One scenario from Section 9 |
| Leadership & deployment | 10 min | Sections 7–8 |
| Behavioral & wrap-up | 5–10 min | Section 10 |
