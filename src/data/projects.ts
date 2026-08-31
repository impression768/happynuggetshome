export type Project = {
  id: string;
  title: string;
  isVisible?: boolean;
  coverAlt: string;
  context: string;
  summary: string;
  contribution: string;
  challenge: string;
  highlights: string[];
  technical: string[];
  techStack: string[];
  url?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    id: "geniehr",
    title: "GenieHR",
    coverAlt: "Editorial representation of a hiring team reviewing candidate information together",
    context: "AI-powered hiring and HR platform",
    summary: "End-to-end hiring and HR product covering recruiter workflows, applicant journeys, assessment, scheduling, references, offers, contracts, employee operations, training, payments, and company administration.",
    contribution: "Lead developer and full-stack implementation across state-heavy React experiences, Node.js services, MongoDB models, permissions, communications, integrations, and production AI workflows.",
    challenge: "Keeping recruiter, applicant, employee, and administrator workflows consistent while AI/media services, billing rules, calendars, files, and role permissions cross system boundaries.",
    highlights: [
      "Built recruiter and applicant flows from public job pages and applications through assessments, references, scheduling, offers, contracts, hiring, and employee operations.",
      "Implemented CV extraction and scoring, dynamic personality interviews, hard-skills assessments, generated hiring emails, training content, and voice/image quick-fill job creation.",
      "Connected AWS file flows, Google Calendar, PayPal, OCR, transcription, multilingual communications, and AI providers into one operational product.",
    ],
    technical: [
      "Frontend work includes workflow-heavy React state, protected routes, recruiter actions, applicant self-service, offer management, training, payments, and internal administration.",
      "Backend work spans jobs, applicants, reports, permissions, scheduling, notifications, contracts, training, company configuration, and billing, with request validation, transactional operations, idempotency controls, race-condition guards, and MongoDB data integrity.",
      "AI functionality uses structured processing and orchestration around CVs, interviews, skills evaluation, content generation, audio, and image inputs rather than isolated demos.",
      "Implemented and tested deterministic Mastra orchestration for structured CV extraction and scoring, with schema-bound steps, recovery, hard-criteria enforcement, and safe failure handling.",
    ],
    techStack: ["React", "Redux Toolkit", "React Query", "Node.js", "Express", "MongoDB", "AWS", "OpenAI", "Groq", "Mastra", "OCR"],
    url: "https://hr.insightgenie.ai/",
    linkLabel: "Visit GenieHR",
  },
  {
    id: "insight-genie",
    title: "Insightgenie",
    coverAlt: "Editorial representation of a professional reviewing voice and assessment insights",
    context: "Assessment and analytics platform",
    summary: "Customer-facing platform combining non-contact face-scan workflows, voice and customer-call analysis, protected client APIs, institutional management, dashboards, and structured reporting.",
    contribution: "Built and evolved major frontend and backend product areas, including assessment journeys, dashboards, protected processing, media ingestion, reporting, authentication, storage, and operational administration.",
    challenge: "Turning varied inputs such as audio, transcripts, documents, call metadata, camera signals, and business context into scenario-specific results without breaking a stable customer workflow.",
    highlights: [
      "Built authenticated assessment flows, history, score visualizations, report drilldowns, institutional tools, and protected client processing APIs.",
      "Implemented customer-call analysis for support, collections, fraud review, compliance, customer experience, and buyer-intent scenarios.",
      "Integrated Node.js product services with Python-based model services and external analysis providers through explicit Dockerized service boundaries.",
    ],
    technical: [
      "Ingestion handles audio, transcripts, business context, call metadata, scripts, and policy documents before scenario-specific scoring and report generation.",
      "Backend capabilities include authentication, scoring, files, AWS storage/email, payment and balance validation, rate limiting, encryption, health reporting, and structured logging.",
      "The product layer remains in React and Node.js; specialized Python/model services are integrations rather than claimed primary Python ownership.",
    ],
    techStack: ["React", "Vite", "Redux Toolkit", "Node.js", "Express", "MongoDB", "AWS", "Docker Compose", "FFmpeg", "Groq"],
    url: "https://insightgenie.ai",
    linkLabel: "Visit Insightgenie",
  },
  {
    id: "aded",
    title: "ADED",
    coverAlt: "Editorial representation of a person preparing a second-hand item for a social marketplace listing",
    context: "AI-assisted social marketplace",
    summary: "Full-stack social marketplace built around a simple user flow: create an advertisement from a photo or text and make it discoverable across languages.",
    contribution: "Built marketplace workflows across React, Node.js, Express, MongoDB, identity, media, search, real-time messaging, seller tools, social features, and moderation operations.",
    challenge: "Preserving a low-friction listing and discovery experience while handling multilingual intent, structured filters, embeddings, media uploads, guest continuity, and real-time seller communication.",
    highlights: [
      "Built AI-assisted listing creation with structured suggestions, dynamic follow-up questions, media handling, and guest-to-authenticated continuity.",
      "Implemented multilingual hybrid discovery using query translation, intent analysis, structured filtering, embeddings, and MongoDB Atlas Vector Search.",
      "Built seller shopfronts, saved items, history, follows, subscriptions, notifications, moderation, and persistent translated buyer/seller chat.",
    ],
    technical: [
      "Socket.IO supports persistent conversations, unread state, delivery events, and translation preferences.",
      "Cognito and Amplify provide identity integration while S3 presigned flows handle marketplace media without routing large files through the application server.",
      "Product models support listings, shops, categories, discovery history, social relationships, notification state, reports, and moderation actions.",
    ],
    techStack: ["React", "TanStack Router", "Node.js", "Express", "MongoDB", "Socket.IO", "OpenAI", "Atlas Vector Search", "Cognito", "S3"],
    url: "https://www.aded.app",
    linkLabel: "Visit ADED",
  },
  {
    id: "ai-matching-platform",
    title: "AI Matchmaking Platform",
    coverAlt: "Editorial representation of two adults separately using a private mobile connection app in a cafe",
    context: "AI-assisted mobile matching",
    summary: "iOS and Android dating platform combining compatibility-based discovery, AI-assisted onboarding, real-time communication, community features, and guided relationship experiences.",
    contribution: "Built the end-to-end product across Expo mobile experiences, Node.js and MongoDB services, real-time communication, cloud identity and media, and integrated AI capabilities.",
    challenge: "Coordinating personalized discovery, rich onboarding, messaging, social features, assistant behavior, privacy, and production delivery while keeping the proprietary compatibility logic protected.",
    highlights: [
      "Built resumable onboarding, profile and preference management, personalized discovery, match decisions, mutual-match creation, and multilingual mobile journeys.",
      "Implemented real-time chat and unread state, community activity, engagement and rewards flows, protected media handling, and operational notifications.",
      "Integrated AI-assisted profile creation, conversation support, and personal guidance with structured validation, safety controls, recovery paths, and usage telemetry.",
    ],
    technical: [
      "React Native, Expo, React Navigation, and React Query support the shared iOS and Android experience, including camera, location, secure storage, and localization.",
      "Node.js, Express, MongoDB, and Mongoose provide authenticated service boundaries for profiles, onboarding, discovery, communication, social activity, rewards, and assistance.",
      "Socket.IO, AWS Cognito, S3, Docker, GitHub Actions, EC2, Nginx, and Expo EAS support real-time behavior, cloud services, deployment, and mobile delivery.",
    ],
    techStack: ["React Native", "Expo", "React Query", "Node.js", "Express", "MongoDB", "Socket.IO", "AWS Cognito", "S3", "OpenAI", "Docker"],
  },
  {
    id: "voice-insight",
    title: "Voice Insight",
    coverAlt: "Editorial representation of a call-analysis workflow with a headset and audio notes",
    context: "Audio-intelligence backend",
    summary: "Backend and AI-processing pipeline that turns raw customer-call recordings into validated, structured, analysis-ready inputs for downstream voice analysis.",
    contribution: "Owned the Node.js orchestration layer, service contracts, request flow, validation, preprocessing, traceability, protected access, packaging, and multi-service deployment.",
    challenge: "Making unreliable real-world audio and multiple specialized services behave like one stable customer API inside customer-controlled, sometimes offline or GPU-aware environments.",
    highlights: [
      "Built upload validation, format and duration checks, silence detection, preprocessing, transcription handling, metadata enrichment, and cleanup paths.",
      "Implemented stereo/mono branching, channel handling, transcript cleanup and merging, readiness checks, and structured downstream payloads.",
      "Delivered protected Docker Compose deployments with client licensing, usage tracking, health endpoints, audit data, obfuscation, and environment-aware scripts.",
    ],
    technical: [
      "The orchestration layer integrates dedicated Python/FastAPI services for speaker profiling, transcription, and model inference without claiming ownership of those Python models.",
      "FFmpeg and ffprobe support media inspection and preprocessing before service handoff.",
      "Deployment work addressed offline dependencies, model packaging, GPU-aware configuration, diagnostics, and stable integration contracts.",
    ],
    techStack: ["Node.js", "Express", "Docker", "Docker Compose", "FFmpeg", "ffprobe", "JWT", "FastAPI integration", "Transcription"],
  },
  {
    id: "wellbeing-platform",
    title: "Wellbeing Platform",
    coverAlt: "Editorial representation of a person using a calm non-contact wellbeing check-in",
    context: "Non-contact wellbeing platform",
    summary: "Web product combining non-contact face-scan measurement, personal baselines, visual condition summaries, guidance, history, and organization-level management without positioning itself as medical diagnosis.",
    contribution: "Built authenticated consumer journeys, face-scan integration, baseline-aware result flows, dashboards, history, exports, and organization-manager capabilities connected to Insightgenie APIs.",
    challenge: "Presenting unfamiliar measurement and baseline concepts clearly while handling camera flows, cold-start behavior, retry states, user history, role enforcement, and organization aggregation.",
    highlights: [
      "Built registration, confirmation, login, temporary-password replacement, profile, history, and role-aware navigation.",
      "Connected browser-based rPPG inputs to condition scoring, an autonomic-nervous-system matrix, explanatory guidance, and follow-up actions.",
      "Implemented population-to-personal baseline progression, life logs, trends, tables, CSV export, departments, member management, and aggregated views.",
    ],
    technical: [
      "The React application consumes consumer authentication, organization, and face-scan APIs from the wider Insightgenie platform.",
      "Recharts and structured result components present latest values and historical trends while explicit empty, retry, and cold-start states explain missing context.",
      "Multilingual product surfaces and role-aware navigation support consumers and organization managers in one frontend.",
    ],
    techStack: ["React", "Vite", "React Router", "Material UI", "Tailwind", "Recharts", "Node.js", "MongoDB", "JWT", "rPPG integration"],
  },
  {
    id: "data-collection",
    title: "Data Collection",
    coverAlt: "Editorial representation of a reviewer organizing labeled voice-recording samples",
    context: "Labeled voice dataset operations",
    summary: "Internal full-stack platform for collecting, reviewing, enriching, moderating, curating, and exporting labeled voice samples for AI, analytics, and research workflows.",
    contribution: "Built reviewer and administrator workflows across the React interface, Node.js API, MongoDB data operations, S3 media storage, reporting, bulk ingestion, and AI-assisted enrichment.",
    challenge: "Supporting practical high-volume dataset operations while preserving human moderation, traceable review states, searchable metadata, and label-quality controls.",
    highlights: [
      "Built search, editing, filtering, moderation, reporting, exports, audio upload, metadata editing, trait labeling, and pending/good-sample curation.",
      "Implemented contributor/admin operations, user lifecycle controls, activity statistics, quality flags, and review-state transitions.",
      "Added CSV-to-file bulk ingestion and AI-assisted trait, biography, and financial-risk suggestions while keeping human validation central.",
    ],
    technical: [
      "JWT-protected reviewer/admin access separates contribution and moderation responsibilities.",
      "S3-backed audio storage and MongoDB metadata operations support searchable collections of labeled media records.",
      "CSV import/export and filename matching make batch operations possible instead of requiring one-at-a-time manual handling.",
    ],
    techStack: ["React", "Redux Toolkit", "React Query", "Ant Design", "Node.js", "Express", "MongoDB", "JWT", "S3", "CSV", "OpenAI"],
  },
  {
    id: "scientific-research-platform",
    title: "Scientific Research Platform",
    coverAlt: "Editorial representation of a research team coordinating work across laboratory, web, tablet, and mobile tools",
    context: "Scientific research operations",
    summary: "Platform in active development for institutional research teams, combining a staff web portal, iOS and Android participant app, and secure backend.",
    contribution: "Built the product across role-scoped staff workflows, participant mobile journeys, secure data handling, messaging, notifications, auditability, and cloud deployment.",
    challenge: "Translating specialized research workflows into a reliable multi-role system while preserving privacy, traceability, institutional data boundaries, and consistent web and mobile behavior.",
    highlights: [
      "Built connected web, mobile, and backend experiences for institutional teams and participants.",
      "Shipped role-aware workflows, communication, and operational visibility across the product.",
      "Established secure, traceable foundations for sensitive records and ongoing delivery.",
    ],
    technical: [
      "React, TypeScript, Vite, Tailwind CSS, and TanStack Query power the multi-role staff portal and its operational workflows.",
      "React Native and Expo support iOS and Android, English and Hebrew LTR/RTL experiences, secure storage, background work, notifications, and degraded-device states.",
      "Express, Mongoose, MongoDB, JWT, Zod, AWS S3-compatible storage, EC2, PM2, and Nginx support the API, evidence handling, access control, and deployment architecture.",
    ],
    techStack: ["React", "TypeScript", "Vite", "TanStack Query", "React Native", "Expo", "Node.js", "Express", "MongoDB", "AWS S3", "JWT"],
  },
  {
    id: "ptbn",
    title: "PrimeTime Business Network",
    coverAlt: "Editorial representation of business-network members connecting at a community event",
    context: "Mobile-first business networking",
    summary: "Coordinated member mobile app, Node.js backend, and React admin panel for a U.S.-based business network.",
    contribution: "Built member-facing mobile journeys, backend business rules, internal operations tooling, and integrations for identity, billing, files, email, and mobile notifications.",
    challenge: "Keeping chapter membership, referrals, meetings, guests, events, profiles, payments, notifications, and administration consistent across three application surfaces.",
    highlights: [
      "Built a coordinated member app, backend, and admin workspace for business-network operations.",
      "Shipped member profiles, introductions, events, and day-to-day community flows.",
      "Added secure administration, notifications, and reporting for network teams.",
    ],
    technical: [
      "React Native and Expo power the member application while React/Vite support internal administration.",
      "AWS Cognito handles identity; Stripe supports application fees and subscriptions; S3, SES, and SNS support files and communication.",
      "The Express/MongoDB API serves both customer and administrator surfaces with shared business rules.",
    ],
    techStack: ["React Native", "Expo", "React", "Node.js", "Express", "MongoDB", "Cognito", "Stripe", "S3", "SES", "SNS"],
  },
  {
    id: "personalized-book",
    title: "Personalized Book Platform",
    coverAlt: "Editorial representation of a parent and child sharing a picture book beside a tablet",
    context: "Multilingual web platform",
    summary: "Multilingual web platform spanning customer-facing and internal operational experiences, with AI image-generation APIs orchestrated as part of the product workflow.",
    contribution: "Worked across the full-stack product, connecting frontend journeys, backend services, data, integrations, and operational tooling.",
    challenge: "Keeping a multi-step product experience reliable across languages, user states, integrations, and internal workflows.",
    highlights: [
      "Built customer-facing and internal workflows across a multilingual web application.",
      "Orchestrated AI image-generation APIs as part of a validated product pipeline, carrying generated illustrations into the wider customer experience.",
      "Supported validation, recovery states, operational visibility, and ongoing production delivery.",
    ],
    technical: [
      "Worked across a Next.js and TypeScript application with MongoDB-backed services.",
      "AI image generation sits within an orchestrated, validated pipeline with generation-state handling and reliable handoff into the wider workflow.",
      "Supported multilingual interfaces, cloud services, customer communications, and production operations.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "MongoDB", "AWS", "AI image APIs"],
  },
  {
    id: "smilefit",
    title: "SmileFit",
    isVisible: false,
    coverAlt: "Editorial representation of a private daily smile-practice session with a smartphone",
    context: "Camera-assisted daily practice",
    summary: "Local-first mobile app for short daily smile-practice sessions, progress awareness, streaks, education, and reminders; framed as wellbeing practice rather than diagnosis.",
    contribution: "Built the Expo application, camera-based practice gating, local persistence, reminders, feedback capture, device/release behavior, legal content, and Cloudflare feedback service.",
    challenge: "Using live face and smile signals to guide sessions while respecting privacy, permissions, degraded device states, local-first history, and app-release constraints.",
    highlights: [
      "Built five daily practice steps, live sessions, completion progress, calendar history, streaks, educational content, reminders, and reset controls.",
      "Counted practice time only while a face is present, aligned, stable, and producing a sufficient smile-like signal.",
      "Designed the current workflow not to save practice photos/videos to history or require media upload to a SmileFit server.",
    ],
    technical: [
      "SQLite/native storage and a web adapter persist sessions, daily steps, settings, reminders, science-card state, and installation identity.",
      "The app handles camera permissions, degraded states, local notifications, feedback attachments, demos, and release-specific developer controls.",
      "A Cloudflare Worker accepts JSON/multipart feedback, stores R2 backups, correlates installations, and sends Telegram notifications.",
    ],
    techStack: ["React Native", "Expo", "React 19", "TypeScript", "Expo Camera", "SQLite", "Local notifications", "Cloudflare Workers", "R2"],
  },
  {
    id: "nuggets",
    title: "Nuggets",
    isVisible: false,
    coverAlt: "Editorial representation of practical language practice during a café conversation",
    context: "AI-assisted language learning",
    summary: "Mobile app that turns a phrase into translation, learner-friendly pronunciation guidance, word-level meaning, saved practice content, and recurring vocabulary exposure.",
    contribution: "Built the Expo application and Express API across identity, phrase processing, history, target-language preferences, feedback, widget content, structured AI outputs, and background synchronization.",
    challenge: "Generating consistent multilingual learning output across source detection, target resolution, pronunciation scripts, word alignment, validation, and recurring widget exposure.",
    highlights: [
      "Built authenticated phrase creation/history, language preferences, profile settings, feedback, and reusable phrase presentation.",
      "Implemented source-language detection, normalization, translation, pronunciation in the learner’s script, word alignment, vocabulary extraction, and structured validation.",
      "Built an iOS home-screen widget and background synchronization that selects saved vocabulary and controls exposure frequency.",
    ],
    technical: [
      "Safeguards cover invalid targets, same-language requests, unsupported or inappropriate input, formatting consistency, and language-specific pronunciation rules.",
      "Firebase-backed authentication supports identity and email verification across mobile and web execution.",
      "The Node.js API manages profiles, phrase processing, saved history, widget content, feedback, support messages, and rate limiting.",
    ],
    techStack: ["React Native", "Expo", "React Query", "Firebase Auth", "Node.js", "Express 5", "MongoDB", "OpenAI", "WidgetKit", "Swift"],
  },
];

export const visibleProjects = projects.filter((project) => project.isVisible !== false);

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}
