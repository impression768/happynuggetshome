export type Project = {
  id: string;
  title: string;
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
    title: "Insight Genie",
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
    linkLabel: "Visit Insight Genie",
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
    id: "nagi",
    title: "NAGI",
    coverAlt: "Editorial representation of a person using a calm non-contact wellbeing check-in",
    context: "Non-contact wellbeing platform",
    summary: "Web product combining non-contact face-scan measurement, personal baselines, visual condition summaries, guidance, history, and organization-level management without positioning itself as medical diagnosis.",
    contribution: "Built authenticated consumer journeys, face-scan integration, baseline-aware result flows, dashboards, history, exports, and organization-manager capabilities connected to Insight Genie APIs.",
    challenge: "Presenting unfamiliar measurement and baseline concepts clearly while handling camera flows, cold-start behavior, retry states, user history, role enforcement, and organization aggregation.",
    highlights: [
      "Built registration, confirmation, login, temporary-password replacement, profile, history, and role-aware navigation.",
      "Connected browser-based rPPG inputs to condition scoring, an autonomic-nervous-system matrix, explanatory guidance, and follow-up actions.",
      "Implemented population-to-personal baseline progression, life logs, trends, tables, CSV export, departments, member management, and aggregated views.",
    ],
    technical: [
      "The React application consumes consumer authentication, organization, and face-scan APIs from the wider Insight Genie platform.",
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
    id: "ptbn",
    title: "PrimeTime Business Network",
    coverAlt: "Editorial representation of business-network members connecting at a community event",
    context: "Mobile-first business networking",
    summary: "Coordinated member mobile app, Node.js backend, and React admin panel for a U.S.-based business network.",
    contribution: "Built member-facing mobile journeys, backend business rules, internal operations tooling, and integrations for identity, billing, files, email, and mobile notifications.",
    challenge: "Keeping chapter membership, referrals, meetings, guests, events, profiles, payments, notifications, and administration consistent across three application surfaces.",
    highlights: [
      "Built authentication, onboarding, chapter selection, business profiles, referrals, one-to-one meetings, guest invitations, events, search, statistics, and account flows.",
      "Implemented backend rules for chapters, membership access, referrals, meetings, events, profiles, payments, and notifications.",
      "Built admin workflows for users, admins, chapters, categories, events, guests, reporting, and operational management.",
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
    coverAlt: "Editorial representation of a parent and child exploring a personalized picture book and print proofs",
    context: "Personalized commerce and print workflow",
    summary: "Multilingual children’s-book platform connecting storefront UX, guided personalization, payments, generated media, PDF production, and printing-house operations.",
    contribution: "Worked across the Next.js storefront, resumable personalization, checkout and order lifecycle, backend route handlers, media generation, print-ready assets, storage, and internal operations.",
    challenge: "Maintaining one recoverable order state across anonymous sessions, character customization, media uploads, generated pages, payment redirects, review controls, and final print files.",
    highlights: [
      "Built localized personalization with resumable drafts, character details, photos, optional second-character paths, previews, and page-level review.",
      "Implemented cart, checkout, payment redirection, tracking, post-payment finalization, and a printing-house dashboard.",
      "Integrated generated images, server-composed assets, interior/cover PDFs, S3 storage, barcodes, and print-ready order state.",
    ],
    technical: [
      "Next.js route handlers and MongoDB/Mongoose manage anonymous cookie-backed sessions, subscribers, orders, and workflow state.",
      "S3 presigned media handling keeps large uploads and generated assets outside normal application request bodies.",
      "English and Hebrew storefronts require locale-aware routing and RTL behavior across customer and review experiences.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "MongoDB", "Mongoose", "React Query", "next-intl", "S3", "SES", "React-PDF", "Canvas"],
  },
  {
    id: "smilefit",
    title: "SmileFit",
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

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}
