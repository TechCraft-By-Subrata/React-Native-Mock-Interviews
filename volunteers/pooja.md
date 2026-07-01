# React Native Engineer — Mock Interview Questions
### Candidate: Pooja B N (React Native Developer, 4+ Years)
**LinkedIn:** [linkedin.com/in/pooja-bn-reddy](https://www.linkedin.com/in/pooja-bn-reddy/)

A React Native–focused mock interview set calibrated to a mid-senior developer with deep expertise in CI/CD, Fastlane, CodePush, payments, New Architecture, testing, and production release management across logistics and enterprise domains.

---

## 1. React Native Architecture & New Architecture

1. You list JSI, TurboModules, Fabric, and Hermes in your skills — explain how these four fit together in the New Architecture and what concrete problem each one solves over the old bridge.
2. You led React Native migrations across 3 apps. Walk through one — what were the biggest breaking changes, how did you sequence the upgrade, and how did you validate nothing regressed before releasing?
3. You resolved Android 16 KB page-size compatibility issues. What caused that problem, and what was the fix?
4. How does Hermes improve startup time vs. V8/JavaScriptCore, and are there any trade-offs you've hit in practice?
5. When would you write a custom native module vs. finding a community library? Walk through a decision you've actually made.

## 2. State Management

6. You've used Redux, MobX, Zustand, and Context API across projects — walk through how you choose between them for a new app. What signals push you toward Zustand over Redux?
7. On the Lobb Pipe app you implemented role-based access control with multi-role user experiences. How did you model permissions in your state layer — what does the store shape look like?
8. How do you handle state hydration and persistence (e.g., keeping a user's session alive across app kills) securely?

## 3. Performance Optimization

9. You reduced screen load times by 30–40% at Exalogic. Walk through the specific techniques — what did you profile, what did lazy loading fix, and what did memoization fix?
10. How do you diagnose a memory leak in a production React Native app? Walk through tools (Flipper, Xcode Instruments, Android Profiler) and a real case.
11. On a logistics app with heavy real-time data (trip status, notifications, live tracking), how do you prevent the JS thread from being overwhelmed by frequent updates?

## 4. CI/CD, Fastlane & Release Management

12. Walk through your Fastlane + GitHub Actions pipeline end-to-end — from a PR merge to a binary landing in the App Store / Play Store. What does each lane do?
13. You've managed 20+ releases with zero rollback incidents. What does your pre-release checklist look like? How do you catch issues before they hit production?
14. How do you manage signing certificates, provisioning profiles, and keystore files securely in a CI environment?
15. Walk through how CodePush OTA updates work — what can you ship via CodePush vs. what requires a full store release, and how do you handle a bad OTA update?
16. How do you use feature flags alongside CodePush for a controlled rollout to a subset of users?

## 5. Testing

17. You achieved 80%+ unit test coverage with Jest and React Native Testing Library. How do you decide *what* to unit test vs. what to leave for E2E?
18. Walk through how you test a Redux action + reducer + selector chain with Jest — give a concrete example from a logistics workflow.
19. What does your WebDriverIO E2E test suite cover? How do you handle flakiness in E2E tests, especially for flows that depend on network responses?
20. How do you test push notification deep linking in an automated way?

## 6. Payments Integration

21. You integrated both PhonePe SDK and Razorpay. Walk through the architectural difference between the two — how does the payment flow differ between a native SDK integration and a checkout session/redirect approach?
22. How did you achieve a 99.9% payment success rate? What failure scenarios did you have to handle (network drops mid-payment, duplicate charges, callback delays)?
23. How do you test payment flows without hitting live payment rails?

## 7. Push Notifications & Deep Linking

24. You've used FCM, Notifee, and Crashlytics together. Walk through how a push notification triggers a deep link into a specific trip detail screen — covering killed, background, and foreground app states.
25. How do you handle notification permission prompts on iOS (where you only get one native ask) — what's your strategy for timing and fallback?
26. How do you use PostHog and Sentry together — what does each one tell you that the other doesn't?

## 8. Logistics Domain & Complex Workflows

27. The Lobb Pipe app has offline-friendly forms for logistics operations. Walk through your offline strategy — how do you queue form submissions, handle sync on reconnection, and surface conflicts to the user?
28. Walk through the Lobb Care support feature you built (ticketing, chat, voice notes, file attachments). How did you architect real-time chat — what was the data sync mechanism?
29. On a logistics platform where trip status changes rapidly, how do you keep the UI in sync without hammering the backend with polling?

## 9. System Design

30. **Design prompt:** Design a multi-app mobile platform (Trucker + FTL + Pipe) that shares common business logic (auth, payments, notifications) but has different UIs and user roles. How do you structure the codebase to avoid duplication while keeping apps independently deployable?
31. **Design prompt:** Design a CI/CD pipeline for a React Native app targeting both App Store and Play Store, with staged rollouts, OTA updates for hotfixes, and automated rollback on crash-rate spikes.
32. **Design prompt:** Design the offline-first architecture for a logistics field app where drivers must submit POD (Proof of Delivery) documents with photos even without connectivity.

## 10. Behavioral

33. You've mentored within the mobile team at Lobb. Tell me about a specific gap you helped a teammate close — what was the problem and how did you approach it?
34. You've delivered across logistics and enterprise domains (UAE facility management, Indian trucking). What's the most domain-specific challenge that genuinely changed how you write code?
35. Walk me through a production incident at Lobb or Exalogic — how was it detected, how did you diagnose it, and what changed afterward?

---

### Suggested Interview Structure (60–75 min)

| Segment | Time | Focus |
|---|---|---|
| Warm-up & project walkthrough | 5 min | Lobb Trucker or Pipe app as anchor |
| Architecture & New Architecture | 15 min | Sections 1–2 |
| CI/CD, release management & testing | 15 min | Sections 4–5 |
| Payments, notifications & deep linking | 10 min | Sections 6–7 |
| System design prompt | 15 min | One scenario from Section 9 |
| Behavioral & wrap-up | 5–10 min | Section 10 |
