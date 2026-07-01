# React Native Engineer — Mock Interview Questions
### Candidate: Aditya Singh (React Native Developer, 3+ Years)
**GitHub:** [GitHub Profile](https://github.com/adityasingh78855) | **LinkedIn:** [LinkedIn Profile](https://www.linkedin.com/in/adityasingh78855/)

A React Native–focused mock interview set calibrated to a mid-level developer with hands-on experience in TypeScript, Redux Toolkit, Firebase Auth, Axios with retry logic, Stallion OTA updates, Flipper profiling, SOLID principles, and end-to-end App Store/Play Store deployment.

---

## 1. React Native Core & TypeScript

1. You enforced TypeScript across team projects at Sekeron. Walk through how you typed a Redux store end-to-end — actions, state shape, selectors, and dispatch — and how that caught real bugs during onboarding.
2. What's the difference between `interface` and `type` in TypeScript? When do you use generics, and give a real example from your API layer where generics made a meaningful difference.
3. You achieved 99%+ crash-free sessions at Sekeron. What monitoring tool gave you that metric, and what categories of crashes did you have to fix to get there?
4. How do you handle platform-specific code in TypeScript cleanly — `Platform.OS` checks scattered everywhere vs. a more structured approach?
5. Explain how React Native's reconciliation and re-render cycle works. Walk through a real re-render bug you diagnosed and fixed.

## 2. State Management

6. You've used Redux, Redux Toolkit, and Context API across roles. Walk through when you'd choose Context API over Redux for a specific feature — where does Redux become overkill?
7. Walk through a Redux Toolkit slice you've built for a complex user flow — what goes in `reducers` vs. `extraReducers`, and how do you handle loading, success, and error states cleanly?
8. You mentioned improving predictability of data flow by reducing state-related bugs. Walk through a specific state bug you fixed — what was the root cause and what structural change prevented it recurring?
9. How do you handle derived state in Redux — data that's computed from multiple slices — without duplicating logic across selectors?

## 3. API Integration & Error Handling

10. You implemented retry logic with Axios at Sekeron. Walk through how that works — when do you retry, how many times, with what backoff strategy, and how do you avoid retrying on user errors (4xx)?
11. Walk through how you'd implement a token refresh interceptor in Axios — what happens when multiple API calls fail with 401 simultaneously and you only want one refresh request to fire?
12. How do you handle API error states in the UI — distinguishing network errors, server errors, and validation errors, and presenting them appropriately without duplicating error-handling logic across screens?

## 4. Firebase

13. You've used Firebase Auth with email/password and OAuth. Walk through the OAuth flow end-to-end — what happens on device, what goes to Firebase, and how is the session persisted in React Native?
14. How do you handle Firebase Auth token expiry in a long-running session — what's the mechanism for silent refresh, and how does Firestore handle rules when a token has expired?
15. How do you structure Firestore security rules for a multi-user app so users can only access their own data?

## 5. Performance & Debugging

16. You reduced screen load time by 30% using Flipper profiling. Walk through exactly what you found — which Flipper plugin surfaced the issue, what was the bottleneck (JS thread, UI thread, network?), and what was the fix?
17. Walk through how you'd debug a slow FlatList in production — what profiling steps do you take and what optimizations do you apply first?
18. How do you use React Native Debugger and Flipper together — what does each one tell you that the other doesn't?
19. What does `useCallback` actually prevent — give a real example where it helped and one where adding it made no difference (or made things worse)?

## 6. OTA Updates with Stallion

20. Walk through how Stallion OTA updates work — what can you ship via OTA vs. what requires a full store release? How is this different from CodePush?
21. How do you handle a bad OTA update that's already been downloaded by users — what's the rollback process and how quickly can you recover?
22. How do you use OTA updates alongside Firebase Remote Config for a controlled rollout — what does each tool own?

## 7. UI & Design Implementation

23. You've used React Native Paper and Styled Components together. When do you reach for a component library like RN Paper vs. building a custom component from scratch?
24. How do you build a truly responsive layout in React Native that handles different screen sizes, notches, and safe areas across iOS and Android without hardcoding dimensions?
25. You translated Figma designs to pixel-perfect UIs. Walk through how you handle design handoff — what information do you need from a designer that's often missing, and how do you raise it?

## 8. Code Quality & SOLID Principles

26. You applied SOLID principles at Kiwitech. Walk through how one of the five principles (your choice) concretely applies to React Native component or service design — give a before/after example.
27. How do you approach writing testable React Native components with Jest — what makes a component hard to test, and how do you refactor it?
28. You mentioned reducing bug count across sprints at Kiwitech. What process change or code quality improvement drove that — was it code reviews, test coverage, TypeScript, or something else?

## 9. Deployment & App Store Management

29. Walk through your full App Store and Play Store submission process — from a release build to a live update. What platform-specific gotchas have you hit?
30. How do you manage multiple build environments (dev, staging, production) in React Native — environment variables, build variants, and signing configs?

## 10. System Design

31. **Design prompt:** Design a ride-hailing or delivery app (similar to Biro Cabs where you interned) — covering real-time driver tracking, role-based navigation (rider vs. driver), push notifications for order status, and offline handling.
32. **Design prompt:** Design a robust API layer for a React Native app — covering Axios interceptors for auth, retry logic, error normalization, and how you'd mock it for Jest unit tests.

## 11. Behavioral

33. You've moved from an intern to a developer who enforces TypeScript standards and owns deployment pipelines. What's the most significant shift in how you think about your work over those 3 years?
34. Tell me about a time you pushed back on a product or design decision because it would have caused a technical problem. How did the conversation go?
35. You've worked at companies of different sizes and types (startup, IT solutions, product company). Which environment brought out your best work and why?

---

### Suggested Interview Structure (45–60 min)

| Segment | Time | Focus |
|---|---|---|
| Warm-up & project walkthrough | 5 min | Sekeron app as anchor — pick one feature |
| TypeScript, state management & APIs | 15 min | Sections 1–3 |
| Performance, OTA & debugging | 10 min | Sections 5–6 |
| Code quality & UI | 10 min | Sections 7–8 |
| System design prompt | 10 min | One scenario from Section 10 |
| Behavioral & wrap-up | 5 min | Section 11 |