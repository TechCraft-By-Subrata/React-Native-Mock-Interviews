# React Native Engineer — Mock Interview Questions
### Candidate: Selva Ganapathi R (React Native Developer, ~2 Years)
**Play Store – Bodyweight Diet:** [com.allstarsapp](https://play.google.com/store/apps/details?id=com.allstarsapp) | **Play Store – Blunt:** [com.blunt](https://play.google.com/store/apps/details?id=com.blunt)

A React Native–focused mock interview set calibrated to an early-career developer with hands-on experience in legacy codebase modernization, AWS (S3, Cognito, Lambda, DynamoDB, Amplify), multimedia upload/playback, Redux, FCM, OneSignal, and JWT authentication across two production apps.

---

## 1. React Native Fundamentals

1. Walk me through how you'd explain the difference between `useState` and `useEffect` to someone new to React Native. Then give a real example of a bug from your work caused by one of these being used incorrectly.
2. When does a component re-render in React Native? Walk through how you'd stop an unnecessary re-render you've actually seen in one of your apps.
3. How does React Navigation work in one of your apps — what navigator type did you use and why? How do you pass data between screens?
4. What's the difference between `FlatList` and `ScrollView`? On the Bodyweight Diet app, which did you use for content lists and why?
5. How do you handle different screen sizes and safe areas across iOS and Android in a single codebase?

## 2. Legacy Codebase Modernization

6. You modernized a legacy React Native codebase at Ceiyone. Walk through what "legacy" meant in that context — how old was the codebase, what were the dependency issues, and where did you start?
7. How do you approach upgrading a React Native version on a live production app without breaking things for users? What's your step-by-step process?
8. When you inherit a legacy codebase, how do you identify which parts are safe to refactor now vs. which are too risky to touch without more context?
9. What's the most difficult dependency conflict you resolved during the modernization — what was clashing and how did you fix it?

## 3. Multimedia: AWS S3 Pre-Signed URLs, Upload & Playback

10. Walk through how a pre-signed URL works for uploading to AWS S3. Why does the mobile app request a pre-signed URL from the backend rather than uploading directly using long-lived AWS credentials?
11. On Blunt (anonymous B2B multimedia app), users upload audio, video, and images. Walk through the upload flow end-to-end — from the user picking a file to it being accessible in the app.
12. How do you handle large video uploads on a mobile connection — what happens if the upload is interrupted midway? Did you implement any retry or resume logic?
13. How do you optimize video playback in React Native to avoid buffering and memory issues, especially across both iOS and Android?
14. What's your approach to showing upload progress to the user in a way that feels responsive even on slow connections?

## 4. Authentication: AWS Cognito & JWT

15. Walk through how AWS Cognito handles user authentication — what does sign-up, sign-in, and session management look like from the React Native side?
16. How does JWT-based session handling work — where do you store the token in React Native, how do you attach it to API requests, and what happens when it expires?
17. What's the security risk of storing a JWT in AsyncStorage vs. a more secure alternative on iOS and Android?
18. On Blunt, which is an anonymous B2B app, how do you handle authentication for anonymous users — how is identity managed without requiring a traditional login?

## 5. State Management with Redux

19. Walk through how you structured Redux for one of your apps. What shape is the store, and how do you decide what goes into Redux vs. local component state?
20. How do you handle async API calls in Redux — walk through how a media upload action flows from dispatch to state update.
21. How do you handle error states in Redux cleanly — what does the state shape look like for a request that can be loading, successful, or failed?

## 6. Push Notifications: FCM & OneSignal

22. You've used both Firebase Cloud Messaging and OneSignal. What's the difference between them — why would you choose OneSignal over FCM directly?
23. Walk through how a push notification gets from your server to a user's device and triggers navigation to a specific screen — covering killed, background, and foreground app states.
24. How do you handle notification permission prompts on iOS, where you only get one native system prompt?

## 7. AWS Cloud Integration

25. You've used AWS Amplify, Lambda, DynamoDB, and S3 together. Walk through how a typical feature request flows through this stack — e.g., a user submitting a workout log on the Bodyweight Diet app.
26. What is AWS Amplify, and what does it simplify for a React Native developer compared to calling AWS services directly?
27. How do you handle DynamoDB data modeling for a mobile app — what's different about designing for DynamoDB vs. a relational database?

## 8. Release & Deployment

28. Walk through your Google Play Store release process — from a production build to a live update. What steps do you go through?
29. Walk through the TestFlight submission process for iOS. What has caused builds to be rejected or delayed in your experience?
30. How do you manage staged rollouts — releasing to a percentage of users before going fully live?

## 9. System Design

31. **Design prompt:** Design the multimedia upload and playback system for Blunt — an anonymous B2B app where users share audio, video, and images. Cover the upload flow (pre-signed URLs, progress, retry), secure storage on S3, and playback optimization in React Native.
32. **Design prompt:** Design the authentication flow for an app using AWS Cognito — covering sign-up with email verification, JWT session management, silent token refresh, and what happens when the refresh token expires.

## 10. Behavioral

33. You have a BBA background, not a CS degree — what was your path into mobile development, and what did you have to teach yourself that CS graduates typically learned in university?
34. You work directly with clients at Ceiyone. Walk me through a situation where a client's requirement was unclear or technically unrealistic — how did you handle that conversation?
35. What's the hardest bug you've fixed in either Bodyweight Diet or Blunt? Walk through what was happening, how long it took to find, and what the fix was.

---

### Suggested Interview Structure (45–60 min)

| Segment | Time | Focus |
|---|---|---|
| Warm-up & project walkthrough | 5 min | Blunt or Bodyweight Diet as anchor |
| React Native fundamentals & legacy modernization | 15 min | Sections 1–2 |
| Multimedia, AWS & authentication | 15 min | Sections 3–4 |
| State management, notifications & release | 10 min | Sections 5–6 & 8 |
| System design prompt | 10 min | One scenario from Section 9 |
| Behavioral & wrap-up | 5 min | Section 10 |