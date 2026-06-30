# React Native Engineer — Interview Questions

Tailored for a candidate profile with ~2 years of experience across AgriTech/EdTech/B2B apps, Redux Toolkit, TypeScript, payment integrations, AI feature integration, and multi-role architectures.

---

Linkedin: https://www.linkedin.com/in/raghav-gupta-/

## 1. Core React Native & JavaScript/TypeScript

1. Walk through the React Native bridge (or the New Architecture's JSI/Fabric/TurboModules). Why was the old bridge a performance bottleneck, and how does JSI solve it?
2. What's the difference between `React Native CLI` and `Expo`? When would you choose one over the other?
3. Explain reconciliation and the React Native rendering pipeline — from a state update to pixels on screen.
4. How do you ensure type safety across a navigation stack, API layer, and Redux store in a strict TypeScript codebase?
5. What are the trade-offs of `interface` vs `type` in TypeScript? When do you use generics in API response typing?
6. Explain `useMemo`, `useCallback`, and `React.memo`. Give a real example where misusing one of these *hurt* performance instead of helping.
7. How would you debug a memory leak caused by a subscription (Firebase listener, WebSocket, GPS tracking) not being cleaned up?

## 2. State Management & Architecture

8. Describe how you'd design Redux slices for an app with multiple user roles (e.g., farmer vs. FPO admin) where state shape and permissions differ significantly.
9. RTK Query vs. manual thunks + Axios — what would push you toward one over the other in a production app?
10. How do you prevent prop-drilling and unnecessary re-renders in a deeply nested component tree without over-using Context?
11. What's your strategy for persisting and rehydrating Redux state (e.g., `redux-persist`) safely, especially with sensitive data like auth tokens?
12. How would you structure a scalable folder architecture for an app with 5+ feature modules built by a multi-person team?

## 3. Navigation

13. Compare stack, tab, and drawer navigators in React Navigation. How do you handle deep linking into a nested navigator?
14. How do you manage role-based navigation (e.g., different navigation trees for buyer vs. seller in a marketplace app)?
15. How do you persist navigation state across app restarts, and what are the risks of doing so (e.g., stale auth-gated screens)?

## 4. Performance Optimization

16. A FlatList with 1,000+ items is janky on scroll. Walk through your optimization checklist (`getItemLayout`, `windowSize`, `removeClippedSubviews`, key extraction, memoized row components, etc.).
17. How do you profile a React Native app for re-render bottlenecks? What tools do you reach for (Flipper, React DevTools Profiler, `why-did-you-render`)?
18. Describe a time you reduced re-renders or JS-thread blocking in a production app. What was the measurable impact?
19. How do you handle large image lists or media-heavy screens (caching, lazy loading, `FastImage` vs. built-in `Image`)?

## 5. Backend Integration, Real-Time & APIs

20. How do you design a modular API service layer that supports multiple roles/permissions and is easy to mock for testing?
21. How would you implement real-time features (chat, live GPS tracking, live price feeds) — WebSockets, Firebase Realtime DB/Firestore, or polling? What drives the choice?
22. How do you handle token refresh flows without causing race conditions when multiple API calls fail with 401 simultaneously?
23. Push notifications: walk through the flow from Firebase Cloud Messaging to a notification appearing and deep-linking into the correct screen.

## 6. Payments & Compliance (given Cashfree/payout/KYC experience)

24. Walk through the architecture of a payment flow involving a payment gateway plus a separate payout/settlement API for a two-sided marketplace.
25. How do you handle idempotency and failure recovery when a payment succeeds on the gateway side but the app/network fails before confirmation?
26. What security practices do you follow when handling KYC documents and sensitive financial data on-device (encryption at rest, secure storage, PCI-adjacent compliance)?
27. How would you test payment flows without hitting production payment rails?

## 7. AI / On-Device & Third-Party Integration

28. You've integrated AI features like image-based crop disease detection and a chatbot. How do you decide between calling a cloud AI API vs. running inference on-device?
29. What are the latency, cost, and offline trade-offs of on-device AI models (e.g., TensorFlow Lite, ExecuTorch, ONNX) vs. server-side inference for a feature like an "AI Crop Doctor"?
30. How do you handle large model assets in a mobile app bundle (size limits, lazy download, versioning)?

## 8. Testing, Code Quality & Process

31. What's your testing strategy for a React Native app — unit (Jest), component (RTL), and E2E (Detox/Maestro)? Where do you draw the line on coverage?
32. Describe your code review philosophy. What do you look for beyond "does it work"?
33. How do you onboard a teammate onto a legacy codebase with inconsistent patterns, and how do you introduce standards without a big-bang rewrite?
34. How do you manage environment configs and secrets across dev/staging/production builds?

## 9. System Design / Architecture (scenario-based)

35. **Design prompt:** Design the data model and offline strategy for a farm record-keeping feature ("Kissan Diary") that must work in low-connectivity rural areas and sync when back online.
36. **Design prompt:** Design a role-based field-operations app where staff need real-time GPS tracking, task assignment, and attendance — including battery and background-location trade-offs.
37. **Design prompt:** You're building a B2B marketplace with buyer/seller roles, payments, and logistics. How do you structure the app to keep buyer and seller experiences independently shippable?

## 10. Behavioral / Product Sense

38. Tell me about a time you made a product decision based on direct user feedback (e.g., field visits with end users). What changed as a result?
39. Describe a production bug you fixed under pressure with zero room for regression. How did you validate the fix was safe?
40. How do you balance shipping fast as a "sole architect" on a product with maintaining long-term code quality?
41. Tell me about a disagreement with a teammate or stakeholder over a technical approach. How was it resolved?

---

### Suggested Interview Structure (60–75 min)

| Segment | Time | Focus |
|---|---|---|
| Warm-up & background | 5 min | Walk through resume, role on each project |
| Core RN/JS/TS | 15 min | Sections 1–2 |
| Live coding / FlatList or state design exercise | 20 min | Section 4 or a small Redux slice design |
| System design prompt | 15 min | One scenario from Section 9 |
| Behavioral | 10 min | Section 10 |
| Candidate questions | 5–10 min | — |
