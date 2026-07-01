# React Native Engineer — Mock Interview Questions
### Candidate: Varun Gandhi (React Native Developer, ~3.5 Years)
**GitHub:** [github.com/varungandhi120](https://github.com/varungandhi120)

A React Native–focused mock interview set calibrated to a developer who has been the sole mobile engineer on a production app, with unusually deep hands-on experience in security (SSL pinning, VAPT, freeRASP), background native modules (WorkManager), offline-first sync, image processing (WebP, compression, watermarking, encryption), OTA updates, and patch-package fixes. The bar here is set well above a typical 3.5-year profile.

---

## 1. React Native New Architecture & Migration

1. You migrated digiQC to React Native 0.78.3 with the New Architecture enabled. Walk through what actually broke during migration — which libraries didn't support the New Architecture yet, and how did you resolve each one?
2. You enabled Android 15 edge-to-edge support. What does edge-to-edge mean on Android 15, what layout issues did it cause (especially in the image editor), and how did you fix them?
3. You used `patch-package` to fix several critical issues. Walk through one of these patches in detail — what was the bug, why couldn't you wait for the official fix, and how did you implement the patch safely?
4. You used AI-assisted migration — what specifically did you use AI for, and where did its suggestions still require manual validation or correction?

## 2. Native Android Modules & Background Processing

5. Walk through the native Android module you built with WorkManager for background image compression. Why was WorkManager the right choice over a simple background thread or a Foreground Service?
6. How does WorkManager guarantee task execution even after the app is killed or the device reboots? What constraints (network, battery, storage) did you configure for the compression jobs?
7. How do you communicate progress and results from a WorkManager job back to the React Native JS layer — what mechanism did you use?
8. On the Video Compress project you implemented chunk-based video compression with FFmpeg. Walk through why chunking is necessary for large files and how you rejoin chunks without quality loss.

## 3. Image Handling: Compression, WebP, Watermarking & Encryption

9. You compressed 25 lakh AWS images from 4 MB to 400 KB, saving 8.8 TB. Walk through the decision to switch from JPEG to WebP on API 30+ — what are the quality and compatibility trade-offs, and why did you use Firebase Remote Config as the kill-switch?
10. Walk through the secure image workflow you built — how does watermarking work on-device, what encryption scheme did you use, and how does the backend key-based access system gate image retrieval?
11. How do you validate that a compressed image meets a quality threshold before uploading — did you implement any perceptual quality checks, or was the compression ratio sufficient?

## 4. Security: SSL Pinning, VAPT & freeRASP

12. Walk through how SSL pinning with server public key hashes works in `react-native-ssl-public-key-pinning`. What happens when the server rotates its certificate — how do you push a pin update without a store release?
13. Explain how freeRASP works. What categories of threats does it detect (rooted devices, debuggers, Frida, reverse engineering tools), and how did you implement the app-kill mechanism on detection?
14. VAPT testing often reveals issues around API token exposure, insecure local storage, and screenshot leakage. Beyond SSL pinning and freeRASP, what else did you harden before the VAPT audit?
15. How do ProGuard rules interact with React Native's JS bundle — what specifically were you obfuscating, and how did you verify the rules didn't break the app in release builds?

## 5. Offline-First Architecture & Sync

16. Walk through the timestamp-based incremental sync system you built. What does the timestamp represent (server-side modified time vs. response time?), where is it stored on the client, and how do you handle clock skew between device and server?
17. What happens if the incremental sync misses an update — e.g., a record was updated on the server while the device was offline but the timestamp window was missed? How do you detect and recover from sync gaps?
18. You've used Realm at Logicwind. How does Realm's offline-first model compare to what you built manually at digiQC? When would you reach for Realm over a custom sync solution?
19. On the Blinkit clone you used WebSockets for live order tracking. How do you reconcile real-time WebSocket updates with the locally persisted state — what wins when they conflict?

## 6. Developer Experience & Tooling

20. Walk through the in-app cURL export feature you built using Axios interceptors. How do you capture request headers, body, and auth tokens, and display them in the dev sidebar without exposing them in production builds?
21. You automated push notification testing with a script using OneSignal APIs. Walk through how that script works — how does it generate test payloads for every user flow and validate navigation to the correct screen?
22. You integrated Gleap for shake-to-report bug capture. What metadata does Gleap automatically capture (logs, network requests, device state), and how do you use that to reproduce a bug without a repro from the user?

## 7. Firebase Remote Config & Feature Flags

23. Walk through a real scenario where Firebase Remote Config saved a release — you mentioned switching between old and new APIs during App Store approval. How exactly does that work without a store update?
24. How do you design your Remote Config key schema to avoid conflicts as the number of flags grows? What's your strategy for cleaning up stale flags?
25. How do you test a feature flag locally when Remote Config hasn't fetched yet — what's the default/fallback strategy?

## 8. OTA Updates & CodePush

26. Walk through how you implemented the force-update mode in CodePush. What triggers it, how does the UI communicate it to the user, and what happens if the user dismisses it?
27. How do you handle a bad OTA update that causes crashes for users who've already downloaded it — what's your rollback strategy, and how quickly can you recover?

## 9. System Design

28. **Design prompt:** Design the full image handling pipeline for a construction QC app (like digiQC) — covering on-device compression, watermarking, encrypted upload to AWS, backend key-gated retrieval, and how you'd handle 25 lakh images at scale.
29. **Design prompt:** Design an offline-first mobile app for field inspectors who work in low-connectivity environments — covering local data storage, incremental sync, conflict resolution, and background sync on reconnection.
30. **Design prompt:** Design the security hardening layer for a React Native enterprise app that must pass VAPT — covering SSL pinning, root/tamper detection, secure storage, obfuscation, and how you manage ongoing certificate rotation.

## 10. Behavioral

31. As the sole React Native developer at digiQC, there's no senior mobile engineer to escalate to. Walk me through how you make a decision on a hard technical problem with no one to validate your approach.
32. The image compression project had a measurable business impact (8.8 TB saved, 2 lakh monthly cost reduction). How did you identify this as a priority worth solving, and how did you make the case for the engineering time?
33. You've built practical developer tools (cURL export, push notification test script) that nobody asked for. What's your instinct for when to invest time in tooling vs. just push through the friction manually?

---

### Suggested Interview Structure (60–75 min)

| Segment | Time | Focus |
|---|---|---|
| Warm-up & project walkthrough | 5 min | digiQC as anchor — pick one of the flagship features |
| New Architecture & native modules | 15 min | Sections 1–2 |
| Security deep dive (SSL pinning, VAPT, freeRASP) | 15 min | Section 4 |
| Offline-first sync & image pipeline | 10 min | Sections 3 & 5 |
| System design prompt | 15 min | One scenario from Section 9 |
| Tooling, OTA & behavioral | 5–10 min | Sections 6–8 & 10 |