# React Native Engineer — Mock Interview Questions
### Candidate: Awais Ahmed (Junior / Early-Career React Native Developer)

Linkedin: https://www.linkedin.com/in/awais--ahmed/

A React Native–focused mock interview set, calibrated to an early-career developer with hands-on experience across Firebase, Redux, Stripe payments, Expo, and ML-powered features.

---

## 1. React Native Fundamentals

1. What's the difference between a functional component and a class component in React Native? Which do you default to, and why?
2. Explain the difference between `useState` and `useEffect`. Give an example of a bug you've hit from a missing `useEffect` dependency.
3. How does React Native render UI on iOS and Android from the same JavaScript code? At a high level, what is the "bridge"?
4. What's the difference between `FlatList` and `ScrollView`, and when would you choose one over the other?
5. How do you handle platform-specific code or styling differences between iOS and Android in a single codebase?

## 2. Navigation

6. Walk through how you've set up navigation in one of your apps (Stack, Tab, or Drawer). Why did you choose that structure?
7. How do you pass data between screens in React Navigation?
8. You mentioned fixing a navigation issue on the Peptfied app — walk me through how you'd debug a screen that doesn't navigate back correctly after an action.

## 3. State Management

9. You've used Redux on the Anonymous Chatting App (NOONE) — walk through how you structured the store. What lives in Redux vs. local component state?
10. What problem does Redux solve that `useState` and Context API alone don't?
11. How do you handle async actions in Redux (e.g., fetching messages from Firebase)?

## 4. Firebase Integration

12. Walk through how Firebase Authentication works in one of your apps — sign-up, login, and session persistence.
13. What's the difference between Firestore and the Firebase Realtime Database? You've used both — what made you pick one over the other for a given app?
14. How did you implement email verification and deep linking together in the Peptfied app? Walk through that flow.
15. How do you structure Firestore security rules so users can only read/write their own data?

## 5. Backend & API Integration

16. On the Parq.ae app, you used a Node.js/Express backend deployed on Render. Walk through how the React Native app talks to that backend — what does a typical API call look like end-to-end?
17. How do you handle loading states and errors when calling an API from a React Native screen?
18. How do you store and manage an auth token on the client securely (vs. something like AsyncStorage)?

## 6. Third-Party Integrations (Payments & Messaging)

19. Walk through how you integrated Stripe Checkout in the Parq.ae app — what is a "checkout session," and why did you need a URL shortener for it?
20. Explain how the WhatsApp webhook integration worked — what triggers it, and how did you test it locally using ngrok?
21. What security considerations matter when handling payment flows, even if Stripe is doing the heavy lifting?

## 7. Offline Support & Real-Time Sync

22. In the Anonymous Chatting App, you mentioned offline support — how does that work with Firebase? What happens when a user sends a message with no internet connection?
23. How would you handle a conflict where the same data is edited on two devices while offline?

## 8. AI/ML Feature Integration

24. Walk through the AI Glasses Recommendation App — how does React Native ML Kit detect a face, and what does the Gemini 2.5 API do with that data?
25. What are the trade-offs of doing face detection on-device (ML Kit) vs. sending an image to a cloud API (Gemini) for analysis?

## 9. Code Quality & Collaboration

26. On the Cquencer project, you collaborated with backend developers consuming Laravel APIs. How do you handle a situation where the API contract changes after you've already built the UI around it?
27. How do you approach picking up someone else's bug (like the sign-out fix or navigation typo on Peptfied) in an unfamiliar codebase?

## 10. Behavioral

28. Tell me about a project where you worked freelance vs. as part of a team — what's different about how you approach each?
29. What's something you learned recently (e.g., from the Meta React Native Specialization or your ML coursework) that you've already applied in a project?
30. What's a bug that took you a long time to track down? Walk through how you eventually found it.

---

### Suggested Interview Structure (45–60 min)

| Segment | Time | Focus |
|---|---|---|
| Warm-up & project walkthrough | 5 min | Brief tour of 1–2 favorite projects |
| Core React Native fundamentals | 15 min | Sections 1–3 |
| Firebase & backend integration | 15 min | Sections 4–5 |
| Third-party & AI feature deep-dive | 10 min | Sections 6–8 |
| Behavioral & wrap-up | 5–10 min | Sections 9–10 |
