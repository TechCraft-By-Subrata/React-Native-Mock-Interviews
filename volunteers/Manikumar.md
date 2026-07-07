# React Native Engineer — Mock Interview Questions
### Candidate: Manikumar Mallu (React Native Developer, 3+ Years)
**LinkedIn:** [linkedin.com/in/manikumar-mallu-2b82781a1](https://www.linkedin.com/in/manikumar-mallu-2b82781a1/) | **GitHub:** [github.com/ManikumarMallu](https://github.com/ManikumarMallu)

A React Native–focused mock interview set calibrated to a mid-level developer at TCS with experience across a large-scale e-commerce app (Clicks Group) and a live banking app (ICICI iMobile), covering Redux, SSE, payment gateways, reusable component libraries, TypeScript, and mentoring.

---

## 1. React Native Core & TypeScript

1. You migrated from JavaScript on the Clicks Group e-commerce app to TypeScript on the ICICI iMobile app. What was the biggest adjustment — what kinds of errors did TypeScript catch that JavaScript was silently missing?
2. Walk through how you typed a Redux store end-to-end in the ICICI project — state shape, action payloads, selectors, and dispatch — and how that improved developer confidence?
3. How does React Native's re-render cycle work? Walk through a real re-render issue you found in either project and how you fixed it.
4. What's the difference between `useMemo`, `useCallback`, and `React.memo`? Give a concrete example from your component library work where one of these genuinely helped.
5. You built a large reusable component library for ICICI iMobile (accordions, carousels, date pickers, dropdowns, etc.). How do you design a component so it's flexible enough to cover multiple use cases without becoming a bloated, hard-to-maintain god component?

## 2. State Management with Redux

6. Walk through how you structured Redux for the ICICI iMobile app across multiple modules (Invest, Insure, Service). How do you organise slices across a large banking app without the store becoming hard to navigate?
7. How do you handle async flows in Redux — `createAsyncThunk`, middleware like Saga, or something else? What drove that choice on your projects?
8. In a banking app where multiple screens share financial data (account balance, investment portfolio, insurance policies), how do you keep state fresh without over-fetching from the API?
9. You mention improving code maintainability through state management design. Walk through a specific Redux anti-pattern you found in an existing codebase and how you corrected it.

## 3. Real-Time Data: Server-Sent Events (SSE)

10. Walk through how Server-Sent Events work — how is SSE different from WebSockets, and why did you choose SSE over WebSockets or polling for real-time data updates in your projects?
11. How do you manage an SSE connection lifecycle in React Native — opening the connection, handling reconnection on network loss, and cleaning up when a screen unmounts?
12. In the e-commerce context (Clicks Group), what data was being pushed via SSE — stock updates, order status, pricing? How did you merge incoming SSE events with existing Redux state?
13. SSE is a one-way channel (server to client). How do you handle actions that need to go the other direction — user triggering something that the server needs to react to in real time?

## 4. Payment Gateway & Cart System

14. Walk through the cart and checkout flow you built for the Clicks Group app — how is cart state managed, what happens at checkout, and how does the payment gateway integrate?
15. How do you handle a payment that succeeds on the gateway side but the server hasn't confirmed it yet — what does the UI show and how do you reconcile state?
16. Club Card integration on the Clicks Group app — how did you handle loyalty point redemption at checkout? What was the state management challenge when points, payment, and order confirmation all need to succeed together?
17. How do you test payment flows without hitting live payment rails — what's your approach during development and QA?

## 5. Banking Domain: ICICI iMobile

18. You delivered the Service module and are working on Invest and Insure modules. Walk through what the Service module does and what was technically challenging about delivering it.
19. Banking apps have strict security requirements. What practices did you follow around data handling, secure storage, and preventing sensitive information from appearing in logs or screenshots?
20. How do you handle session expiry gracefully in a banking app — what happens mid-flow when a user's token expires while they're viewing their investment portfolio?
21. The ICICI iMobile app is a large, long-running codebase. How do you make changes confidently in a banking app where a bug in production has real financial consequences?

## 6. Reusable Component Library

22. Walk through how you designed the DatePicker (Calendar) component for ICICI iMobile — what edge cases (min/max dates, disabled dates, localization) did you have to handle?
23. How do you document a reusable component library for a team — what does a developer need to know to use your `AccountSelectionDrawer` or `PaymentTypes` component correctly without reading the source?
24. How do you version and evolve a component in a reusable library when a new feature request would break existing usages across the app?

## 7. Performance Optimization

25. You reduced loading times by 30% on one of your projects. Walk through exactly what you profiled, what was slow, and what the fix was — what tool surfaced the bottleneck?
26. How do you optimize a product listing screen in an e-commerce app — FlatList tuning, image loading, pagination — to stay smooth on mid-range Android devices?
27. In the ICICI iMobile app, blur effects and carousels are part of the component library. How do you implement a blur effect performantly in React Native without dropping frames?

## 8. Mentoring & Collaboration

28. You mention mentoring junior developers at TCS. Walk me through a specific situation — what was the gap you helped a junior close, and how did you approach teaching it?
29. In a vendor-client setup at TCS (delivering to Clicks Group and ICICI), how do you manage communication around technical constraints — when the client wants something that would be architecturally problematic?
30. How do you run code reviews in a way that's useful for the author rather than just a gatekeeping exercise?

## 9. System Design

31. **Design prompt:** Design the Invest & Insure module for a mobile banking app — covering how you'd structure the Redux store, handle real-time portfolio value updates via SSE, and manage the multi-step purchase flow for an insurance policy with payment integration.
32. **Design prompt:** Design the cart and checkout system for a large e-commerce app (like Clicks Group) — covering cart state management, loyalty point redemption, payment gateway integration, and real-time stock availability updates.

## 10. Behavioral

33. You've worked across two very different domains at TCS — e-commerce (Clicks Group) and banking (ICICI). What's the most significant technical difference in how you approach building for each domain?
34. Tell me about a feature you delivered that you're genuinely proud of — not just that it shipped, but that you think you did it particularly well technically.
35. You've been at TCS for 3+ years on two long-running projects. What have you learned about working on a large enterprise codebase that you didn't expect when you started?

---

### Suggested Interview Structure (45–60 min)

| Segment | Time | Focus |
|---|---|---|
| Warm-up & project walkthrough | 5 min | ICICI iMobile or Clicks Group as anchor |
| TypeScript, Redux & component library | 15 min | Sections 1–2 & 6 |
| SSE, payments & banking domain | 15 min | Sections 3–5 |
| Performance & mentoring | 10 min | Sections 7–8 |
| System design prompt | 10 min | One scenario from Section 9 |
| Behavioral & wrap-up | 5 min | Section 10 |