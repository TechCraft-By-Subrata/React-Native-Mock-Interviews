# React Native Engineer — Mock Interview Questions
### Candidate: Ayush Jain (React Native Developer, 3 Years)
**LinkedIn:** [LinkedIn Profile](https://www.linkedin.com/in/aayushjain8816/)

A React Native–focused mock interview set calibrated to a mid-level developer with hands-on experience across fintech (AU Bank), real-time bidding (Socket.IO), multi-role apps (NowGas, Notetify), social logins, push notifications, and Redux Toolkit.

---

## 1. React Native Core & Hooks

1. Walk me through the difference between `useEffect`, `useCallback`, and `useMemo` — give a real example from one of your apps where misusing one of these caused a bug or performance issue.
2. How does the React Native component lifecycle map to hooks? When would you still reach for `useRef` over `useState`?
3. You've worked on the AU Bank app — a fintech app with high UI quality standards. How do you ensure pixel-perfect implementation of Figma designs across different screen sizes and densities?
4. What's the difference between `FlatList` and `ScrollView`? You've built multi-role apps with complex list views — walk through the optimizations you apply to a FlatList with many items.
5. How do you handle keyboard avoiding behavior on forms — particularly on iOS where the keyboard overlaps inputs differently than Android?

## 2. State Management with Redux Toolkit

6. Walk through how you structure a Redux Toolkit slice — what goes in `state`, `reducers`, and `extraReducers`? Give an example from NowGas or Notetify.
7. How do you handle async API calls in Redux Toolkit — `createAsyncThunk` vs. middleware like Redux Saga? When would you choose one over the other?
8. On a multi-role app like NowGas (customer, dealer, driver) or Notetify (admin, teacher, parent), how do you model role-specific state in Redux without the store becoming a mess?
9. How do you persist Redux state across app restarts securely — especially in a fintech context like AU Bank?

## 3. Real-Time Features with Socket.IO

10. Walk through how you implemented the real-time ticket bidding system in Ticket Dash using Socket.IO. How do you handle connection drops and reconnection — what happens to a bid submitted during a brief disconnect?
11. How do you manage Socket.IO event listeners in React Native to avoid memory leaks — especially when a screen mounts and unmounts repeatedly?
12. On NowGas, you built real-time order tracking. Did you use Socket.IO or polling for this? Walk through the trade-offs of each for a delivery tracking use case.
13. How do you test real-time Socket.IO flows — can you automate this, or does it require manual coordination between two clients?

## 4. Navigation

14. Walk through the navigation structure of NowGas, which has three different user roles (customer, dealer, driver). How do you manage separate navigation trees per role without code duplication?
15. How do you handle deep linking in React Native Navigation — walk through how a push notification tap navigates a user to a specific order screen.
16. How do you protect routes in React Navigation so unauthenticated users can't access screens even by navigating programmatically?

## 5. Social Login & Authentication

17. You implemented Facebook, Apple, and Google login in Ticket Dash. Walk through the OAuth flow end-to-end — what happens on the device, what goes to the server, and how is the session persisted?
18. Apple Sign-In has specific requirements (first-name/last-name only available on first login, mandatory on iOS). How did you handle data you couldn't retrieve after the first authentication?
19. How do you handle token expiry and silent refresh on a React Native app — what happens when a user opens the app after a long gap?

## 6. Push Notifications

20. Walk through how push notifications work end-to-end in one of your apps — from the server sending a notification to the correct screen opening on tap, covering killed, background, and foreground states.
21. How do you handle notification permissions — particularly on iOS where you only get one native prompt? What's your strategy if the user declines?

## 7. Fintech Domain: AU Bank App

22. Working on a banking app like AU Bank comes with strict security and quality requirements. What practices did you follow — even as a feature developer — around data handling, secure storage, and UI state for sensitive information?
23. You worked on the Home Dashboard, Deposit module, and Profile screens. Walk through the data flow for the Deposit module — how does a deposit action flow from the UI to the API and back?
24. How do you collaborate with backend and QA teams on a high-stakes fintech app where a bug in production has real financial consequences?

## 8. Performance & Debugging

25. You've fixed bugs and improved performance and stability in production apps. Walk me through your debugging process when a crash is reported but you can't reproduce it locally.
26. How do you use tools like Flipper, React Native Debugger, or Logcat/Console to diagnose a performance issue in production?
27. What's the most common performance mistake you see in React Native apps, and how do you fix it?

## 9. System Design

28. **Design prompt:** Design the architecture for NowGas — a gas cylinder ordering app with customer, dealer, and driver roles, real-time order tracking, and push notifications. Walk through the state management, navigation, and real-time sync strategy.
29. **Design prompt:** Design Ticket Dash's real-time bidding system — how do you ensure bid updates are seen by all participants instantly, handle race conditions when two users bid simultaneously, and recover from a dropped WebSocket connection?

## 10. Behavioral

30. You've worked across agency, product, and client-facing environments. What's the biggest difference in how you approach code quality and delivery between them?
31. On the AU Bank app, you worked as part of a larger team through a vendor (Xebia). How did you get up to speed on an existing codebase you didn't build?
32. Tell me about a bug fix you're most proud of — what was broken, how did you find it, and what did the fix teach you?

---

### Suggested Interview Structure (45–60 min)

| Segment | Time | Focus |
|---|---|---|
| Warm-up & project walkthrough | 5 min | NowGas or Ticket Dash as anchor |
| Core React Native & state management | 15 min | Sections 1–2 |
| Real-time features & navigation | 15 min | Sections 3–4 |
| Auth, notifications & fintech domain | 10 min | Sections 5–7 |
| System design prompt | 10 min | One scenario from Section 9 |
| Behavioral & wrap-up | 5 min | Section 10 |