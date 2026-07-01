# React Native Engineer — Mock Interview Questions
### Candidate: Sivaramakrishnan M (Software Development Engineer - Mobile, 2+ Years)
**LinkedIn:** [linkedin.com/in/sivaramakrishnan-m-0b71061bb](https://www.linkedin.com/in/sivaramakrishnan-m-0b71061bb/) | **Portfolio:** [portfoliov2-ypx2.vercel.app](https://portfoliov2-ypx2.vercel.app/) | **GitHub:** [github.com/Siva20021](https://github.com/Siva20021)

A React Native–focused mock interview set calibrated to a technically deep early-career engineer with hands-on experience shipping to 1M+ users, authoring native modules in Swift/Kotlin/JSI, integrating WebRTC/LiveKit, multiple payment SDKs, CI/CD with EAS/Fastlane, and ML-based audio/vision research. Despite 2 years of experience, the bar here is set higher than a typical 2-year profile warrants — because the work demands it.

---

## 1. Native Module Authoring (JSI / Swift / Kotlin)

1. Walk through the face detection library you built at Lokal — how do you extract live video frames from native Android and iOS threads, process them through ML Kit, and synchronize results back to the JS layer via JSI in real time?
2. Explain the difference between the old bridge-based native modules and JSI-based TurboModules. What specifically made JSI the right choice for the face detection library, and what would have broken with the old bridge?
3. On the Elwei AI app, you authored a native module to support enhanced audio sample rates when input devices are toggled. Walk through the platform-specific implementation on Android vs. iOS — what APIs did you use on each side?
4. How do you handle memory management across the JS/native boundary in a JSI module — what are the risks if you get it wrong in a real-time video calling context?
5. How do you distribute and version an internal React Native library across multiple production apps (Dostt, Eaze) without tight coupling?

## 2. Real-Time Calling: WebRTC & LiveKit

6. Walk through how WebRTC peer-to-peer connection establishment works (signaling, ICE, STUN/TURN). How did you handle the signaling layer in Dostt?
7. You integrated Android Foreground Services to improve background call reliability. Walk through how a Foreground Service keeps a call alive when the app is backgrounded or the screen locks — and what the iOS equivalent challenge is.
8. How do you handle audio/video track switching mid-call (e.g., muting, camera flip, switching to speaker) cleanly without glitches or state mismatches between the native layer and JS?
9. What happens to an active WebRTC call when the app is killed by the OS? How did you handle incoming call notifications in that state?
10. How do you test real-time calling features reliably in a CI environment where you can't have two physical devices connected?

## 3. Performance Optimization (1M+ User Scale)

11. You profiled Android threads using Flipper and Android Studio Profiler for Dostt (800K+ users). Walk through a specific bottleneck you found — what was the symptom, what did profiling reveal, and what was the fix?
12. Explain how Reanimated's worklet system keeps animations off the JS thread. When would you use Reanimated vs. the Animated API, and when is neither enough?
13. How do you optimize a FlatList rendering a real-time feed (new items arriving via WebSocket) without causing visible jank on low-end Android devices?
14. What is Hermes's role in startup performance, and are there edge cases where it introduces issues (e.g., unsupported JS features, debugging differences)?

## 4. Payments: Multi-SDK Architecture

15. You've integrated Juspay, Razorpay, Cashfree, and PhonePe across different apps. Walk through how you architect a payment abstraction layer so the rest of the app doesn't care which SDK is underneath.
16. On Dostt you implemented payout and withdrawal mechanisms in addition to collection flows. What are the architectural differences between a collection flow and a payout flow from the mobile side?
17. How do you handle a payment where the SDK callback fires successfully but the backend hasn't confirmed yet — what does the UX show, and how do you reconcile state?
18. Walk through how you adapted MicroTransaction architecture from Dostt to AgriLokal for PhonePe subscriptions — what needed to change?

## 5. CI/CD, OTA & Release Management

19. Walk through your EAS + GitHub Actions pipeline end-to-end for a production release to both stores. What does each stage do and where do human gates sit?
20. You managed OTA updates with CodePush across 1M+ users. How do you decide what qualifies as an OTA-safe hotfix vs. requiring a full store release? Walk through a real example.
21. How do you use Firebase Remote Config for feature flagging — how do you structure flag keys, manage defaults, and ensure the app behaves correctly before the config is fetched?
22. How do you monitor a release in the first 24–48 hours post-launch? What Sentry/Crashlytics signals would make you pull a release?

## 6. Analytics & A/B Testing

23. You've used MoEngage, Mixpanel, and RudderStack. Walk through how you'd instrument a new feature end-to-end — what events do you define, where do they fire, and how do you validate they're correct before shipping?
24. On Eaze you ran A/B versioning across user cohorts. How do you implement an A/B test in React Native without shipping two separate binaries? Walk through the flag structure and component branching.
25. How do you avoid analytics event drift (stale event names, missing properties, undocumented events) as an app grows across multiple engineers?

## 7. i18n, Localization & Multi-Region

26. On AgriLokal you implemented i18n for region-specific language requirements. Walk through how you structure translation files, handle dynamic content (e.g., server-driven strings), and manage RTL layout if needed.
27. How do you handle locale-specific number formatting, date formatting, and currency display without scattering formatting logic across components?

## 8. ML & Research Background

28. Your face detection library extracts frames from live video for real-time content moderation. What frame rate did you target, how did you throttle processing to avoid overloading the device, and how did you tune the ML Kit confidence threshold?
29. Your IEEE paper covers deepfake audio detection using MFCC + CNN. How would you bring that model to a React Native app — what are the on-device inference options (TFLite, ONNX, Core ML) and what are the trade-offs?
30. How does your deepfake audio research inform how you think about trust and verification in real-time calling products like Dostt?

## 9. System Design

31. **Design prompt:** Design the architecture for a real-time video calling app (like Dostt) that serves 1M+ users — covering signaling, WebRTC infrastructure, background call handling, payment for call credits, and content moderation via on-device face detection.
32. **Design prompt:** Design a cross-platform internal React Native library (like your face detection lib) that needs to be adopted by 3 different apps with different React Native versions. How do you structure it, test it, and distribute it without publishing to npm?
33. **Design prompt:** Design the release infrastructure for a React Native app that needs staged rollouts, OTA hotfix capability, feature flags per user segment, and automated crash-rate-based rollback.

## 10. Behavioral

34. You shipped to 1M+ users with only 2 years of experience — walk me through the moment you realized the scale of what you were responsible for. How did that change how you work?
35. You mentored 2 interns while still early in your own career. What did you find hardest about teaching something you learned so recently yourself?
36. Your deepfake audio research and your real-time calling work both touch on audio integrity. Has one ever directly informed the other in a practical way?

---

### Suggested Interview Structure (60–75 min)

| Segment | Time | Focus |
|---|---|---|
| Warm-up & project walkthrough | 5 min | Face detection library or Dostt as anchor |
| Native modules & JSI deep dive | 15 min | Section 1 |
| Real-time calling & performance | 15 min | Sections 2–3 |
| Payments + CI/CD + analytics | 10 min | Sections 4–6 |
| System design prompt | 15 min | One scenario from Section 9 |
| ML background & behavioral | 5–10 min | Sections 8 & 10 |
