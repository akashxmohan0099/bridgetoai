import type { Icon } from "@phosphor-icons/react";

export interface Feature {
  name: string;
  description: string;
}

export interface UseCase {
  scenario: string;
  outcome: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ServiceArea {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: Feature[];
  useCases: UseCase[];
  timeline: string;
  faqs: FAQ[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "email-automation",
    number: "01",
    title: "AI Email & Document Automation",
    tagline: "From inbox zero to content on autopilot",
    description: "AI that manages your email, reads and writes documents, and handles communications so your team spends less time on admin and more time on the work that matters.",
    features: [
      { name: "Email Prioritisation & Smart Drafting", description: "AI triages your inbox by urgency and context, then drafts replies in your tone of voice — ready for one-click send." },
      { name: "Hands-Free Email by Voice", description: "Read, reply, and manage email by voice command while driving, walking, or between meetings." },
      { name: "Proposal & Document Generation", description: "Generate polished proposals, reports, and client documents from templates, data, and brief instructions." },
      { name: "Form Completion & Processing", description: "Automatically extract data from incoming forms, populate systems, and flag exceptions for review." },
      { name: "Professional Documentation", description: "AI-assisted creation of SOPs, policies, manuals, and compliance documents that stay current." },
      { name: "AI Email Campaigns & Newsletters", description: "Draft blog posts, newsletters, social captions, and marketing copy aligned to your brand voice and calendar." },
    ],
    useCases: [
      { scenario: "A law firm receives 200+ emails daily. Staff spend 3 hours sorting and replying.", outcome: "AI triages by urgency, drafts responses in each lawyer\u2019s tone. Response time drops from hours to minutes. Staff save 15+ hours weekly." },
      { scenario: "A tradie sends the same quote follow-up emails manually after every job.", outcome: "AI auto-generates personalised follow-ups from job details. Win rate increases, zero manual effort." },
      { scenario: "A medical practice needs SOPs updated quarterly for compliance.", outcome: "AI reviews existing docs, flags outdated sections, drafts updates. Compliance prep goes from weeks to days." },
    ],
    timeline: "Most email automation setups are live within 5\u201310 business days.",
    faqs: [
      { q: "Will AI emails sound like me?", a: "Yes. We train the AI on your existing emails so it matches your tone, style, and terminology. Every draft is ready for one-click send or quick edit." },
      { q: "Does it work with my current email provider?", a: "We integrate with Gmail, Outlook, and most business email platforms. No need to switch providers." },
      { q: "What about sensitive documents?", a: "All data stays within your existing systems. We configure privacy rules so confidential documents are never processed without your approval." },
    ],
  },
  {
    slug: "call-receptionist",
    number: "02",
    title: "AI Call, Messaging & Chat Receptionist",
    tagline: "Never miss a call, never lose a lead",
    description: "Round-the-clock intelligent agents that answer calls, respond to messages, qualify leads, book appointments, and manage your online reputation \u2014 so your team can focus on billable work.",
    features: [
      { name: "24/7 Phone Reception", description: "AI-powered phone answering that greets callers by name, handles enquiries, takes messages, and routes urgent calls \u2014 day or night." },
      { name: "After-Hours Handling", description: "Seamless out-of-hours call management that captures every opportunity and escalates emergencies according to your rules." },
      { name: "Smart Website & Chat Agents", description: "Intelligent chat on your website that answers FAQs, captures leads, and books appointments instantly." },
      { name: "SMS & Messaging Automation", description: "Automated text and messaging responses, appointment reminders, follow-ups, and two-way conversations across SMS and social channels." },
      { name: "Lead Qualification & Filter", description: "Automatically scores and qualifies inbound leads, then routes them to the right person with full context." },
      { name: "Appointment Booking", description: "Prospects and clients book directly into your calendar with automated confirmations, reminders, and follow-ups." },
    ],
    useCases: [
      { scenario: "A plumber misses 40% of calls while on the job. Each missed call is a potential $500+ job.", outcome: "AI answers every call, qualifies the lead, books a quote time, and texts the plumber a summary. Zero missed leads." },
      { scenario: "A dental clinic\u2019s receptionist is overwhelmed during peak hours.", outcome: "AI handles overflow calls, books appointments directly into the practice management system, and sends confirmation texts." },
      { scenario: "A real estate agency gets enquiries at 9pm from property listings.", outcome: "AI responds instantly via chat and SMS, qualifies the buyer, and books an inspection \u2014 before the competitor\u2019s office opens." },
    ],
    timeline: "Most AI receptionist setups are live within 3\u20135 business days.",
    faqs: [
      { q: "Will callers know they\u2019re talking to AI?", a: "The AI sounds natural and conversational. Most callers don\u2019t notice the difference. But we can configure it to identify as an AI assistant if you prefer transparency." },
      { q: "Can it handle complex enquiries?", a: "It handles FAQs, booking, and lead qualification. For complex questions, it takes a message and routes to the right person with full context." },
      { q: "What happens during an emergency call?", a: "You set the rules. Emergency keywords or caller IDs trigger immediate escalation \u2014 call forwarded to your mobile, SMS alert, whatever you need." },
    ],
  },
  {
    slug: "training-advisory",
    number: "03",
    title: "AI Training & Advisory",
    tagline: "Build capability, not dependency",
    description: "We don\u2019t just implement and leave. Practical training and strategic advice ensure your team gets lasting value from every AI investment.",
    features: [
      { name: "AI Platform & Model Selection", description: "Independent guidance on choosing the right AI platforms, models, and tools for your business \u2014 cutting through the hype to match capability to need." },
      { name: "AI Prompt Training", description: "Hands-on sessions teaching your team how to write effective prompts that get consistent, high-quality results from AI tools every time." },
      { name: "AI Tool Training", description: "Role-specific, practical training on the AI tools deployed in your business, building genuine day-to-day confidence across your entire team." },
    ],
    useCases: [
      { scenario: "A marketing agency bought ChatGPT licenses but nobody uses them effectively.", outcome: "After a half-day prompt training session, the team produces first drafts 3x faster. Content quality improves because prompts are specific and structured." },
      { scenario: "A construction company wants to use AI but doesn\u2019t know where to start.", outcome: "We run a platform selection workshop, recommend 3 tools that fit their workflows, and train the admin team to use them confidently within a week." },
      { scenario: "An accounting firm\u2019s partners are sceptical about AI replacing their judgement.", outcome: "We demonstrate AI as an assistant, not a replacement. Partners see how AI drafts client letters they can review in 30 seconds instead of writing from scratch." },
    ],
    timeline: "Training sessions are typically delivered within 1\u20132 weeks of the audit.",
    faqs: [
      { q: "Is training a one-off or ongoing?", a: "We offer both. The initial session gets your team confident. We also offer quarterly refresher sessions as tools evolve and new team members join." },
      { q: "Do you train non-technical staff?", a: "That\u2019s exactly who we\u2019re best with. We speak plain English and tailor training to each person\u2019s role \u2014 not their technical background." },
      { q: "What if we don\u2019t know what tools we need yet?", a: "That\u2019s what the advisory component is for. We assess your business first and recommend the right tools before any training begins." },
    ],
  },
  {
    slug: "voice-records",
    number: "04",
    title: "AI Voice, Call & Meeting Records",
    tagline: "Capture everything, search anything",
    description: "Turn spoken words into searchable, structured records. Whether it\u2019s a phone call, a site visit, or a board meeting \u2014 nothing gets lost.",
    features: [
      { name: "Call Recording & Summarisation", description: "Automatically record and summarise client calls with key actions, decisions, and follow-ups extracted." },
      { name: "Voice-to-Text Notes", description: "Dictate notes on the go and receive clean, structured text ready to file or share." },
      { name: "Meeting Transcription & Summaries", description: "Full transcription of meetings with AI-generated summaries, action items, and attendee attribution." },
      { name: "Knowledge Capture & SOP Documentation", description: "Turn tribal knowledge and ad-hoc processes into searchable, maintainable documentation." },
      { name: "Searchable Record Management", description: "Every note, transcript, and summary indexed and searchable across your organisation." },
      { name: "Compliance-Ready Documentation", description: "Records formatted and stored to meet industry-specific audit and regulatory requirements." },
    ],
    useCases: [
      { scenario: "A builder discusses scope changes on-site with a client but nothing is written down.", outcome: "Voice-to-text captures the conversation. AI extracts the agreed changes, creates a summary, and files it against the project. Disputes drop to near zero." },
      { scenario: "A financial adviser needs detailed file notes after every client meeting.", outcome: "AI transcribes the meeting, extracts key decisions and advice given, and generates compliant file notes \u2014 saving 30+ minutes per meeting." },
      { scenario: "A senior employee is retiring and their knowledge lives only in their head.", outcome: "We capture their expertise through structured voice interviews, then AI converts it into searchable SOPs and training documents." },
    ],
    timeline: "Voice and recording systems are typically live within 5\u20137 business days.",
    faqs: [
      { q: "Is call recording legal in Australia?", a: "Yes, with proper consent. We configure the system to comply with Australian federal and state recording laws, including automated consent notifications." },
      { q: "Where are recordings stored?", a: "On your preferred cloud storage or on-premise. All data stays under your control and we configure retention policies to match your compliance requirements." },
      { q: "Can it handle accents and industry jargon?", a: "Modern transcription AI handles Australian accents well. We also configure custom vocabularies for your industry-specific terms." },
    ],
  },
  {
    slug: "workflow-automation",
    number: "05",
    title: "AI Workflow & Process Automation",
    tagline: "One platform, zero busywork",
    description: "Centralise communications, automate repetitive processes, and connect your systems \u2014 so work flows instead of stalling.",
    features: [
      { name: "Centralised Communications Platform", description: "Email, phone, voicemail, SMS, social, and chat in one unified inbox with full client context." },
      { name: "Smart CRM & Client Pipeline", description: "AI-enhanced client relationship management with automated follow-ups, deal tracking, and pipeline visibility." },
      { name: "End-to-End Process Automation", description: "Map and automate multi-step business processes \u2014 approvals, handoffs, notifications, and escalations." },
      { name: "System Integration & Data Flow", description: "Connect your existing tools so data moves automatically between accounting, CRM, project management, and operations." },
      { name: "Client Follow-Up & Retention", description: "Automated check-ins, satisfaction surveys, re-engagement campaigns, and churn risk alerts." },
      { name: "Workforce, Rostering & HR", description: "Smart rostering, leave management, recruitment screening, onboarding workflows, and credential tracking." },
    ],
    useCases: [
      { scenario: "A property manager manually copies tenant details between 4 different systems.", outcome: "Systems are connected. New tenant data entered once, flows automatically to accounting, maintenance, and compliance systems. 8+ hours saved weekly." },
      { scenario: "A sales team forgets to follow up with 30% of qualified leads.", outcome: "AI monitors the pipeline and auto-triggers follow-up sequences. No lead falls through the cracks. Close rate improves by 20%." },
      { scenario: "A healthcare clinic\u2019s staff roster takes a manager 5 hours every week to build.", outcome: "Smart rostering considers availability, qualifications, and demand patterns. Roster generated in minutes, not hours." },
    ],
    timeline: "Workflow automation projects typically take 1\u20132 weeks from audit to live.",
    faqs: [
      { q: "Do we need to replace our existing tools?", a: "No. We integrate with what you already use \u2014 Xero, MYOB, Google Workspace, Microsoft 365, and hundreds of other tools. We connect them, not replace them." },
      { q: "How complex can the automations get?", a: "As complex as you need. From simple \u2018if X then Y\u2019 rules to multi-step workflows with conditional logic, approvals, and escalations." },
      { q: "What if our processes change?", a: "Automations are easy to update. We also include ongoing support so we can adjust workflows as your business evolves." },
    ],
  },
  {
    slug: "business-insights",
    number: "06",
    title: "AI Business & Finance Insights",
    tagline: "See what\u2019s really happening in your business",
    description: "Real-time dashboards and intelligent analytics that surface the insights you need to make faster, smarter decisions.",
    features: [
      { name: "Real-Time Financial Dashboards", description: "Live views of revenue, expenses, margins, and cash flow \u2014 updated automatically from your accounting system." },
      { name: "Revenue Leakage Detection", description: "AI identifies unbilled work, missed charges, underpriced services, and collection gaps." },
      { name: "Sales Pipeline & Marketing Analytics", description: "Track lead sources, conversion rates, campaign ROI, and pipeline velocity in one view." },
      { name: "Operational Performance Reporting", description: "KPIs across teams, projects, and service lines \u2014 with trend analysis and exception alerts." },
      { name: "Forecasting & Scenario Planning", description: "AI-powered projections and what-if modelling to plan hiring, capacity, and investment." },
    ],
    useCases: [
      { scenario: "A business owner checks three different spreadsheets to understand monthly performance.", outcome: "One live dashboard shows revenue, expenses, margins, and cash flow in real time. Decision-making goes from weekly to instant." },
      { scenario: "A services firm suspects they\u2019re leaving money on the table but can\u2019t prove it.", outcome: "Revenue leakage detection finds $12,000/month in unbilled work and undercharged services. Recovered within the first quarter." },
      { scenario: "A growing company needs to decide whether to hire two more staff.", outcome: "AI forecasting models project demand, capacity, and ROI for different hiring scenarios. The decision is data-driven, not gut-feel." },
    ],
    timeline: "Dashboard and analytics setups are typically live within 1\u20132 weeks.",
    faqs: [
      { q: "Does it connect to our accounting software?", a: "Yes. We integrate with Xero, MYOB, QuickBooks, and most Australian accounting platforms. Data flows automatically \u2014 no manual entry." },
      { q: "How accurate are the forecasts?", a: "AI forecasting improves over time as it learns your business patterns. Initial projections are based on your historical data and are typically within 10\u201315% accuracy from day one." },
      { q: "Can I access dashboards on my phone?", a: "Yes. All dashboards are responsive and accessible from any device \u2014 phone, tablet, or desktop." },
    ],
  },
];
