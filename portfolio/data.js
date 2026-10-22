/* ==========================================================================
   PORTFOLIO DATA — edit this file only. Everything on the page is built from it.

   HOW TO ADD LINKS
   - Every project has a `links` list. Paste a URL into `url` and the button
     turns on automatically. Leave `url: ""` and the button shows as "Soon".
   - For PDFs: put the file in the  docs/  folder and use  url: "docs/your-file.pdf"
     (`file` is only a reminder of which of your reports it should be — it is never shown).
   - Add or remove link objects freely: { label: "Slides", url: "docs/deck.pdf" }

   HOW TO ADD CERTIFICATIONS
   - `credly`: your Credly badge URL  (e.g. https://www.credly.com/badges/xxxx)
   - `image`:  the badge image. Easiest: on Credly, right-click the badge image →
     "Copy image address" and paste it here, or save it into assets/certs/ and
     use "assets/certs/security-plus.png". Empty = a styled placeholder badge.
   - Delete any certification you do not hold.
   ========================================================================== */

window.PORTFOLIO = {
  profile: {
    first: "Priyanshu",
    last: "Manash",
    eyebrow: "Security Analyst · GRC · Pentesting · Cloud & AI Security",
    intro:
      "I investigate intrusions, assess controls, break applications on purpose, and build guardrails for AI systems. MSc Applied Cybersecurity candidate at the University of Wollongong in Dubai, with three years across DXC Technology and regulated fintech delivery.",
    seeking: "SOC / DFIR, GRC, VAPT, Cloud, AI Security and Presales roles in the UAE",
    facts: [
      { k: "Based", v: "Dubai, United Arab Emirates" },
      { k: "Study", v: "MSc Applied Cybersecurity, UOWD · 2027" },
      { k: "Before", v: "Analyst II, DXC Technology" },
      { k: "Next", v: "eCPPT · in progress" },
      { k: "Languages", v: "English, French" }
    ],
    email: "priyanshumanash1@gmail.com",
    socials: [
      { label: "GitHub", url: "https://github.com/priyanshumanash" },
      { label: "LinkedIn", url: "https://linkedin.com/in/priyanshumanash" },
      { label: "Medium", url: "https://medium.com/@priyanshumanash1" },
      { label: "Credly", url: "" },   // ← your Credly profile URL
      { label: "TryHackMe", url: "" } // ← your TryHackMe profile URL
    ],
    cv: [ // CV downloads per role — put PDFs in docs/
      { label: "Analyst CV", url: "" },
      { label: "GRC CV", url: "" },
      { label: "Pentest CV", url: "" },
      { label: "AI Security CV", url: "" },
      { label: "Presales CV", url: "" }
    ]
  },

  tracks: [
    { id: "soc", label: "SOC / DFIR", blurb: "Threat hunting, forensics and detection engineering." },
    { id: "grc", label: "GRC", blurb: "Assessments, risk registers, programmes and board reporting." },
    { id: "vapt", label: "VAPT", blurb: "Web, API, network and binary exploitation, written up like real engagements." },
    { id: "ai", label: "AI Security", blurb: "Gateways, retrieval controls and guardrails for LLM and agent systems." },
    { id: "cloud", label: "Cloud Security", blurb: "AWS and Azure hardening, encryption, logging and posture." },
    { id: "presales", label: "Presales", blurb: "Architectures, vendor evaluations and business cases for buyers." },
    { id: "build", label: "Builds", blurb: "Tools and products shipped outside coursework." }
  ],

  /* context: "Lab" | "Simulation" | "Professional" | "Open source" | "Hackathon"
     group:   true when it was team work — `role` says what you did */
  projects: [
    /* ---------------- SOC / DFIR ---------------- */
    {
      track: "soc", flagship: true, year: 2026, context: "Lab", group: true,
      role: "Hunt strategy, protocol analysis and IOC set",
      title: "Ransomware Intrusion Threat Hunt",
      summary: "Rebuilt a full ransomware kill chain from network evidence alone — no host logs, no disk images.",
      points: [
        "411,797 packets over 7h40m across a /24 network",
        "RDP brute force: 29,309 SYNs in 36.6 min (~800/min), confirmed by a 44.4 MB post-auth session",
        "Lateral movement to a second host, 39.4 MB payload, parallel TLS/443 C2 or exfil channel"
      ],
      metric: { value: "411K", label: "packets analysed" },
      tags: ["Wireshark", "tshark", "MITRE ATT&CK", "IOC development"],
      links: [
        { label: "Report", url: "", file: "Threat Hunting Activity.pdf" },
        { label: "Slides", url: "", file: "MACS901_Threat_Hunting_Presentation.pptx (export to PDF)" }
      ]
    },
    {
      track: "soc", year: 2026, context: "Lab", group: true,
      role: "Packet and host-log correlation, timeline",
      title: "Web Server Compromise — CVE-2021-41773",
      summary: "Correlated a PCAP with Apache, auth and syslog sources to reconstruct a five-phase intrusion.",
      points: [
        "Isolated a GET /%2e/ path traversal returning 200 against a consistent 404 baseline",
        "Reverse shell on TCP/4444 across three sessions; www-data to root in under 13 minutes",
        "Court-ready timeline with chain-of-custody documentation"
      ],
      metric: { value: "<13 min", label: "to root, reconstructed" },
      tags: ["tshark", "lnav", "Apache logs", "Chain of custody"],
      links: [{ label: "Report", url: "", file: "1333562_1344146_MACS804_FinalProject.pdf" }]
    },
    {
      track: "soc", year: 2026, context: "Lab", group: false,
      title: "SIEM Deployment & Brute-Force Detection",
      summary: "Wazuh and Splunk in a segmented lab, with correlation rules and alerting for an authentication attack.",
      points: [
        "Wazuh server with pfSense and Ubuntu agents over UDP/514",
        "Splunk searches, dashboards and alerts on Event IDs 4624 / 4625 / 4634 / 4647",
        "Full user session rebuilt from event logs, browser history, DNS cache and USB events"
      ],
      metric: { value: "2", label: "SIEMs deployed" },
      tags: ["Splunk", "Wazuh", "SPL", "Windows Event Logs"],
      links: [
        { label: "Report", url: "", file: "Week7_LogAnalysis_Priyanshu_Manash_13444146.pdf" },
        { label: "Wazuh lab", url: "", file: "week4_lab2_Wazuh_Lab_1344146.pdf" }
      ]
    },
    {
      track: "soc", year: 2026, context: "Lab", group: true,
      role: "PCAP investigation and IR plan",
      title: "Trickbot & Domain Controller Compromise",
      summary: "Traced a Trickbot infection from one workstation to the domain controller and wrote the response plan.",
      points: [
        "Identified the patient-zero host, user and spread over SMB/445 to the DC",
        "Recovered Outlook credentials exfiltrated in cleartext over HTTP POST",
        "Two PE executables disguised as PNGs, hashed and attributed"
      ],
      metric: { value: "2", label: "hosts confirmed" },
      tags: ["Wireshark", "Malware traffic", "Active Directory", "NIST 800-61"],
      links: [{ label: "Report", url: "", file: "1379628_1344146_week9_DFIR.pdf" }]
    },
    {
      track: "soc", year: 2026, context: "Lab", group: false,
      title: "Disk Forensics & Data Carving",
      summary: "Acquired, verified and examined FAT12, EXT4 and FAT16 images, recovering deleted files without mounting.",
      points: [
        "Hash-verified acquisition with FTK Imager",
        "Sleuth Kit and Autopsy for file-system, metadata and keyword analysis",
        "Carving with Foremost, Scalpel and Binwalk; Volatility memory analysis alongside"
      ],
      metric: { value: "3", label: "file systems" },
      tags: ["Autopsy", "Sleuth Kit", "FTK Imager", "Volatility"],
      links: [{ label: "Report", url: "", file: "1344146_Assesment2_MACS804.pdf" }]
    },

    /* ---------------- GRC ---------------- */
    {
      track: "grc", flagship: true, year: 2026, context: "Simulation", group: false,
      title: "NIST SP 800-171 Assessment & SPRS Score",
      summary: "A full basic assessment for a simulated UAE defence-supply-chain manufacturer.",
      points: [
        "All 110 requirements assessed with 800-171A and DoD Methodology v1.2.1",
        "CUI flows scoped; assets categorised with CMMC vocabulary",
        "SPRS deductions per requirement (Access Control: 8 met / 14 not met, −26), POA&M and interview guide"
      ],
      metric: { value: "110", label: "requirements assessed" },
      tags: ["NIST 800-171", "SPRS", "POA&M", "CMMC"],
      links: [
        { label: "Assessment", url: "", file: "UAE_Simulated_Org_800-171_Rev2_Assessment.pdf" },
        { label: "Interview guide", url: "", file: "NIST_SP_800-171_Interview_Master_Guide.pdf" }
      ]
    },
    {
      track: "grc", year: 2026, context: "Simulation", group: true,
      role: "Risk register, heatmaps and dashboard",
      title: "LennoxPay — Group GRC Simulation",
      summary: "Risk and governance for a UAE payments provider: 2,500 staff, 3M retail users, 50K business clients.",
      points: [
        "Aligned to CBUAE regulations, NIST CSF 2.0 and ISO standards",
        "RACI governance heatmap, 5×5 risk heatmap, severity-based escalation",
        "Risk register with KPIs and a compliance status dashboard"
      ],
      metric: { value: "3M", label: "users in scope" },
      tags: ["CBUAE", "NIST CSF 2.0", "ISO 27001", "Risk register"],
      links: [{ label: "Report", url: "", file: "Draft 05 - LennoxPay GRC Simulation.docx (export to PDF)" }]
    },
    {
      track: "grc", year: 2026, context: "Simulation", group: false,
      title: "Lavita — Cybersecurity Maturity Audit",
      summary: "Maturity across ten control domains, turned into a phased plan executives can act on.",
      points: [
        "10 domains mapped to NIST CSF, from governance to awareness",
        "15+ deficiencies: no MFA, shared admin credentials, no SIEM, no third-party risk process",
        "Risk register and a 30 / 90 / 180-day roadmap"
      ],
      metric: { value: "15+", label: "control gaps" },
      tags: ["NIST CSF", "Maturity model", "Roadmap"],
      links: [{ label: "Workbook", url: "", file: "NIST_Assessment_Lavita_Completed.xlsx" }]
    },
    {
      track: "grc", year: 2026, context: "Simulation", group: false,
      title: "3-Year Security Programme — Emirates Digital Bank",
      summary: "As acting CISO, a regulation-first strategy for a bank going mobile-first with AI lending and a crypto pilot.",
      points: [
        "AED 25M split across three years, front-loaded for the CBUAE audit",
        "NIST CSF 2.0 Govern function as the anchor; steering committee and product reviews",
        "Governance for the AI loan model: fairness, explainability, monitoring"
      ],
      metric: { value: "AED 25M", label: "programme budget" },
      tags: ["CBUAE", "NIST CSF 2.0", "AI governance", "Budgeting"],
      links: [{ label: "Report", url: "", file: "optional_lab_1344146.pdf" }]
    },
    {
      track: "grc", year: 2026, context: "Lab", group: false,
      title: "ISO/IEC 27001:2022 in a UAE Fintech",
      summary: "A critical evaluation of ISO 27001 against NIST CSF 2.0 and UAE IAS for a licensed payment provider.",
      points: [
        "Risk-based logic, Annex A scope and the 2022 revisions examined",
        "Mapped to PDPL 45/2021, the Cybercrime Law and CBUAE payment rules",
        "Implementation recommendations grounded in practice"
      ],
      metric: { value: "3", label: "frameworks compared" },
      tags: ["ISO 27001", "UAE IAS", "PDPL"],
      links: [{ label: "Report", url: "", file: "MACS905_Assignment1_1344146pdf.pdf" }]
    },

    /* ---------------- VAPT ---------------- */
    {
      track: "vapt", flagship: true, year: 2026, context: "Lab", group: true,
      role: "Red Team operator · Purple Team lead",
      title: "Red / Blue / Purple Team Engagement",
      summary: "A full engagement against MBPTL and DVWA, run to PTES and NIST SP 800-115.",
      points: [
        "SQL injection to full database extraction and credential theft",
        "Root through a SUID misconfiguration, then pivot to internal services",
        "Buffer overflow, XSS, LFI/RFI, SSTI, file upload and command injection"
      ],
      metric: { value: "Root", label: "plus internal pivot" },
      tags: ["Kali", "SQLMap", "Burp Suite", "PTES"],
      links: [{ label: "Report", url: "", file: "Manash_Rajpara_Xiang_Week10lab.pdf" }]
    },
    {
      track: "vapt", year: 2026, context: "Lab", group: false,
      title: "Stack-Based Buffer Overflow — Vulnserver",
      summary: "Original exploit development from crash to reverse shell, reported as a Critical unauthenticated RCE.",
      points: [
        "Fuzzed TRUN on TCP/9999 with a Python payload generator",
        "EIP control, bad-character analysis, JMP ESP via mona.py",
        "msfvenom shellcode to a reverse shell on Kali"
      ],
      metric: { value: "RCE", label: "unauthenticated" },
      tags: ["Python", "Immunity Debugger", "mona.py", "msfvenom"],
      links: [
        { label: "Report", url: "", file: "Vulnerability Assessment Exploitation Report Stack-Based Buffer Overflow_1344146.docx" },
        { label: "GitHub", url: "" }
      ]
    },
    {
      track: "vapt", year: 2026, context: "Lab", group: false,
      title: "Network Pivoting & Post-Exploitation",
      summary: "From an exposed Windows host to a file server the attacker could not reach directly.",
      points: [
        "Initial access via exposed credentials and Impacket smbexec",
        "PowerShell Empire agent passed to Metasploit; autoroute and SOCKS proxy",
        "Exploited BadBlue on the internal /20 for a Meterpreter session"
      ],
      metric: { value: "/20", label: "internal network reached" },
      tags: ["Empire C2", "Metasploit", "Impacket", "Pivoting"],
      links: [{ label: "Write-up", url: "" }]
    },
    {
      track: "vapt", year: 2024, context: "Professional", group: false,
      title: "Fintech API Security Testing",
      summary: "Testing production fintech APIs against the OWASP API Security Top 10 at Webplat Technologies.",
      points: [
        "Found and fixed broken authentication, injection and excessive data exposure",
        "SSL pinning, root detection and token auth under OWASP Mobile Top 10",
        "Findings tracked to closure with the product teams"
      ],
      metric: { value: "API Top 10", label: "methodology" },
      tags: ["Burp Suite", "Postman", "OWASP API Top 10"],
      links: [{ label: "Methodology", url: "" }]
    },
    {
      track: "vapt", year: 2026, context: "Lab", group: false,
      title: "Web Application Testing — ZAP & Burp",
      summary: "Passive and active scanning, fuzzing and brute-force testing against deliberately vulnerable apps.",
      points: [
        "ZAP baseline and active scans; parameter fuzzing for SQLi and XSS",
        "Burp Intruder brute force on DVWA with response-length analysis",
        "Paired vulnerable and fixed Python code reviewed with Bandit"
      ],
      metric: { value: "OWASP", label: "Top 10 coverage" },
      tags: ["OWASP ZAP", "Burp Suite", "Bandit", "DVWA"],
      links: [
        { label: "Report", url: "", file: "1344146MACS903LAB4.docx + LAB5" },
        { label: "Code review", url: "", file: "SECURE_CODE_REVIEW_PORTFOLIO → push to GitHub" }
      ]
    },

    /* ---------------- AI SECURITY ---------------- */
    {
      track: "ai", flagship: true, year: 2026, context: "Open source", group: false,
      title: "LLM Access Gateway",
      summary: "One controlled entry point to every model: authentication, OPA policy, budgets, vaulted keys and a tamper-evident audit trail.",
      points: [
        "JWT/OIDC authN, OPA/Rego authZ sidecar, rate limits and budget reservation",
        "Hash-chained audit log shipped to SIEM (CEF / Splunk) with Prometheus metrics",
        "Overhead p50 4.2 ms / p95 5.4 ms with 97% test coverage"
      ],
      metric: { value: "4.2 ms", label: "p50 overhead" },
      tags: ["Python", "OPA / Rego", "JWT", "Docker"],
      links: [{ label: "GitHub", url: "" }, { label: "Build guide", url: "", file: "1 - LLM Access Gateway - Build Guide.pdf" }]
    },
    {
      track: "ai", year: 2026, context: "Open source", group: false,
      title: "Permission-Aware RAG",
      summary: "Answers built only from documents the asking user may see, enforced before retrieval with OpenFGA.",
      points: [
        "Zanzibar-style relationships: groups, nesting, folder inheritance, shares",
        "1,040 queries across 2 tenants: naive RAG leaked 94.4%, this design 0%",
        "Full recall kept (pre-filter 100% vs post-filter 25%); 99% test coverage"
      ],
      metric: { value: "0%", label: "leakage (from 94.4%)" },
      tags: ["OpenFGA", "RAG", "Python", "Benchmarking"],
      links: [{ label: "GitHub", url: "" }, { label: "Build guide", url: "", file: "2 - Permission-Aware RAG - Build Guide.pdf" }]
    },
    {
      track: "ai", year: 2026, context: "Open source", group: false,
      title: "Secure RAG — Northwind Assistant",
      summary: "A retail chatbot where role, tenant and document trust are enforced at four boundaries outside the model.",
      points: [
        "Identity from sign-in, never from chat text",
        "Ingestion strips hidden text and scans for injected instructions",
        "Inspector panel traces every answer through each boundary"
      ],
      metric: { value: "4", label: "trust boundaries" },
      tags: ["RAG", "Prompt injection", "Access control"],
      links: [{ label: "GitHub", url: "" }, { label: "Live demo", url: "" }]
    },
    {
      track: "ai", year: 2026, context: "Open source", group: false,
      title: "agentsh",
      summary: "A shell for AI agents that checks policy before a command runs and keeps an audit of what actually ran.",
      points: ["Policy evaluated before execution", "Audit trail of requested vs executed commands", "Built for agent tool-use safety"],
      metric: { value: "Pre-exec", label: "policy check" },
      tags: ["Agents", "Execution policy", "Audit"],
      links: [{ label: "GitHub", url: "" }]
    },
    {
      track: "ai", year: 2026, context: "Open source", group: false,
      title: "Prompt Firewall",
      summary: "Drop-in LLM I/O middleware: injection and jailbreak detection, PII redaction and output validation.",
      points: [
        "Presidio PII redaction on input and output",
        "Prometheus metrics for live monitoring",
        "Attack success rate cut from 70%+ to under 10% on an adversarial corpus"
      ],
      metric: { value: "<10%", label: "attack success" },
      tags: ["Presidio", "Guardrails", "OWASP LLM Top 10"],
      links: [{ label: "GitHub", url: "" }]
    },
    {
      track: "ai", year: 2026, context: "Open source", group: false,
      title: "AI/ML Supply-Chain Scanner",
      summary: "A model-acceptance gate that blocks unvetted model artefacts before they reach an application.",
      points: [
        "Pickle-RCE detection and ModelScan backdoor scanning",
        "Safetensors-only loading and Sigstore signature checks",
        "CycloneDX AI-BOM generated; ships as CLI and GitHub Action"
      ],
      metric: { value: "AI-BOM", label: "CycloneDX" },
      tags: ["ModelScan", "Sigstore", "GitHub Actions"],
      links: [{ label: "GitHub", url: "" }]
    },

    /* ---------------- PRESALES ---------------- */
    {
      track: "presales", flagship: true, year: 2026, context: "Simulation", group: false,
      title: "NDR & Autonomous Response — Board Report",
      summary: "Advice for a UAE fintech after an AI detection pilot failed with a 40% false-positive rate.",
      points: [
        "Hybrid NDR at Autonomy Level 3: AI recommends, analyst approves",
        "Six peer-reviewed studies behind the detection design",
        "Year 1 investment case of AED 1.51M–2.17M mapped to PCI DSS 10.3, 11.3, 11.4"
      ],
      metric: { value: "AED 2.17M", label: "Year 1 case (upper)" },
      tags: ["NDR", "SOAR / XDR", "PCI DSS 4.0", "Business case"],
      links: [
        { label: "Report", url: "", file: "MACS901_Assignment3_Consultancy_Report.pdf" },
        { label: "Deck", url: "", file: "MACS901_1344146_Consultancy report.pptx (export to PDF)" }
      ]
    },
    {
      track: "presales", year: 2026, context: "Lab", group: true,
      role: "Comparison matrix and architecture",
      title: "SIEM Platform Evaluation",
      summary: "Splunk, QRadar, Sentinel and Elastic compared against Gartner Magic Quadrant criteria.",
      points: [
        "Matrix across deployment, scale, AI/ML, SOAR integration and licensing",
        "Recommendation defended in a CISO decision exercise",
        "Firewall → IDS/IPS → SIEM → SOAR → EDR/XDR reference architecture"
      ],
      metric: { value: "4", label: "platforms compared" },
      tags: ["Gartner MQ", "SIEM", "Architecture"],
      links: [{ label: "Evaluation", url: "", file: "Week4_evaluation 1_MACS901_1344146.pdf" }]
    },
    {
      track: "presales", year: 2026, context: "Lab", group: false,
      title: "Risk-Based Vulnerability Management",
      summary: "Qualys VMDR with TruRisk, positioned the way a buyer evaluates it: See, Understand, Act.",
      points: [
        "Sensor architecture, asset tagging and authenticated scanning",
        "TruRisk / QDS prioritisation and SLA frameworks",
        "MITRE ATT&CK-informed remediation reporting"
      ],
      metric: { value: "TruRisk", label: "prioritisation" },
      tags: ["Qualys VMDR", "Vulnerability management"],
      links: [{ label: "Report", url: "", file: "VMDR_GRC_Assignment.pdf" }]
    },
    {
      track: "presales", year: 2026, context: "Lab", group: false,
      title: "Security Demo & POC Lab",
      summary: "The stack behind credible live demos: firewall, IDS/IPS and two SIEMs wired together.",
      points: [
        "pfSense policies across three segments; Suricata inline blocking",
        "Wazuh and Splunk with custom correlation rules",
        "Repeatable attack scenarios for live detection walkthroughs"
      ],
      metric: { value: "3", label: "network segments" },
      tags: ["pfSense", "Suricata", "Wazuh", "Splunk"],
      links: [{ label: "Demo video", url: "" }, { label: "Lab report", url: "", file: "Week 2_Worshop1_pfsense_firewall_lab 1.1_1344146.pdf" }]
    },
    {
      track: "presales", year: 2025, context: "Professional", group: false,
      title: "Alert-to-ServiceNow Integration — DXC",
      summary: "Scoped, built and demonstrated an integration that turned monitoring alerts into ServiceNow tickets.",
      points: [
        "Requirement scoped with enterprise client stakeholders",
        "Automated ticket creation removed a manual hand-off between monitoring and support",
        "Demonstrated to stakeholders; escalation workflow agreed with support teams"
      ],
      metric: { value: "Auto", label: "ticket creation" },
      tags: ["ServiceNow", "ITIL", "Stakeholder demo"],
      links: [{ label: "Case study", url: "" }]
    },

    /* ---------------- CLOUD SECURITY ---------------- */
    {
      track: "cloud", flagship: true, year: 2026, context: "Lab", group: true,
      role: "Phase 1 (S3 security and cost model); contributed to the full design",
      title: "Securing & Monitoring Resources on AWS",
      summary: "A four-phase secure technology stack: data, network, encryption and monitoring, each with a cost assessment.",
      points: [
        "S3: bucket policies, versioning, access logging, Inventory and Athena log queries",
        "VPC: flow logs, security groups, network ACLs and AWS Network Firewall policy",
        "KMS: customer-managed keys with rotation, envelope encryption, EBS and Secrets Manager",
        "Monitoring: CloudTrail, CloudWatch alarms and AWS Config auto-remediation"
      ],
      metric: { value: "4", label: "security phases" },
      tags: ["AWS", "S3", "VPC", "KMS", "CloudTrail", "AWS Config"],
      links: [{ label: "Report", url: "", file: "1344146_MACS904_Assessment2_group_Project.pdf" }]
    },
    {
      track: "cloud", year: 2026, context: "Lab", group: false,
      title: "AWS Logging & Encryption Baseline",
      summary: "A hardened baseline for deployed workloads: who touched what, and what is encrypted at rest.",
      points: [
        "S3 bucket policies, versioning and server access logging",
        "KMS encryption at rest with key policy review",
        "CloudTrail auditing with CloudWatch metrics and automated security alerts"
      ],
      metric: { value: "KMS", label: "encryption at rest" },
      tags: ["AWS IAM", "KMS", "CloudTrail", "CloudWatch"],
      links: [{ label: "Write-up", url: "" }]
    },
    {
      track: "cloud", year: 2026, context: "Lab", group: false,
      title: "AWS Cost of Security — Optimised Architecture",
      summary: "Priced every control and redesigned for the same protection at lower cost.",
      points: [
        "Cost estimates for S3 logging, Network Firewall, KMS and monitoring",
        "Optimisation strategies with a before/after architecture comparison",
        "Threat discussion per phase to justify each control's spend"
      ],
      metric: { value: "TCO", label: "per control" },
      tags: ["AWS Pricing", "Architecture", "Cost optimisation"],
      links: [{ label: "Cost model", url: "", file: "PHASE 1.docx (export to PDF)" }]
    },
    {
      track: "cloud", year: 2025, context: "Professional", group: false,
      title: "Hybrid Cloud Operations — DXC",
      summary: "Day-to-day security and performance work across AWS and Azure estates for enterprise clients.",
      points: [
        "Bastion host access management and load balancer monitoring",
        "Log review and root-cause analysis with cloud and infrastructure teams",
        "RBAC provisioning, de-provisioning and access reviews under least privilege"
      ],
      metric: { value: "AWS + Azure", label: "estates" },
      tags: ["AWS", "Azure", "RBAC", "ITIL"],
      links: [{ label: "Case study", url: "" }]
    },

    /* ---------------- BUILDS ---------------- */
    {
      track: "build", year: 2026, context: "Open source", group: false,
      title: "RepoGate",
      summary: "A gate for infrastructure code. Deterministic rules score a repository before any model runs, and a fix counts only when the same rule passes on the patched file.",
      points: [], tags: ["TypeScript", "IaC", "DevSecOps"],
      links: [{ label: "GitHub", url: "" }]
    },
    {
      track: "build", year: 2026, context: "Open source", group: false,
      title: "Sealed Transfer",
      summary: "Encrypted file transfer with a tamper-evident ledger, built on standard primitives — nothing hand-rolled.",
      points: [], tags: ["Python", "X25519", "AES-256-GCM", "Ed25519"],
      links: [{ label: "GitHub", url: "" }]
    },
    {
      track: "build", year: 2026, context: "Open source", group: false,
      title: "Malware Classifier",
      summary: "Labels an executable from static features, without detonating the file to make the call.",
      points: [], tags: ["Python", "Machine learning", "Static analysis"],
      links: [{ label: "GitHub", url: "" }]
    },
    {
      track: "build", year: 2026, context: "Hackathon", group: false,
      title: "Research Agent",
      summary: "A desk for long documents — questions, comparison, summaries and extraction in the browser. Built for Build with AI UAE.",
      points: [], tags: ["Agentic workflow", "LLM"],
      links: [{ label: "GitHub", url: "" }]
    },
    {
      track: "build", year: 2026, context: "Open source", group: false,
      title: "Naksha",
      summary: "A client portal for architecture and interior studios. Product work, kept next to the security work on purpose.",
      points: [], tags: ["Product", "HTML"],
      links: [{ label: "GitHub", url: "" }]
    }
  ],

  certifications: [
    // status: "Earned" | "In progress"
    { name: "CySA+", full: "CompTIA Cybersecurity Analyst (CySA+) ce", issuer: "CompTIA", year: "2026", status: "Earned", color: "#c8102e", credly: "https://www.credly.com/badges/f45dc182-9506-4d88-95dc-e2eb574a6f23/public_url", image: "https://images.credly.com/images/dcd99b5b-da24-40a6-9364-62126d590c37/linkedin_thumb_blob" },
    { name: "CSAP", full: "CompTIA Security Analytics Professional (CSAP)", issuer: "CompTIA", year: "2026", status: "Earned", color: "#c8102e", credly: "https://www.credly.com/badges/9f529331-c42e-4aa7-9702-0d07df2f9bc2/public_url", image: "https://images.credly.com/images/ba1b8072-8ebe-432c-88e5-05bc809c624a/linkedin_thumb_CompTIA_CSAP.png" },
    { name: "Security+", full: "CompTIA Security+", issuer: "CompTIA", year: "2026", status: "Earned", color: "#c8102e", credly: "" /* ← paste Credly link */, image: "" },
    { name: "eCPPT", full: "Certified Professional Penetration Tester", issuer: "INE Security", year: "In progress", status: "In progress", color: "#1f6feb", credly: "" /* ← paste Credly link */, image: "" },
    { name: "CLLMSP", full: "Certified LLM Security Professional", issuer: "Red Team Leaders", year: "2026", status: "Earned", color: "#8a6cff", credly: "https://courses.redteamleaders.com/exams/21f669cb-8f17-4d18-8a7c-a34c055aee85", image: "" },
    { name: "SAA", full: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", year: "2026", status: "Earned", color: "#ff9900", credly: "https://www.credly.com/badges/9f3fc629-5cb3-40fa-8bee-a40ccacc2fee/public_url", image: "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/linkedin_thumb_image.png" },
    { name: "AIF", full: "AWS Certified AI Practitioner", issuer: "Amazon Web Services", year: "2026", status: "Earned", color: "#ff9900", credly: "" /* ← paste Credly link */, image: "" },
    { name: "VMDR", full: "Qualys Certified — VMDR with TruRisk", issuer: "Qualys", year: "2026", status: "Earned", color: "#ed2e26", credly: "" /* ← paste Credly link */, image: "" },
    { name: "PCI DSS", full: "Qualys Certified — PCI DSS Foundation", issuer: "Qualys", year: "2026", status: "Earned", color: "#ed2e26", credly: "" /* ← paste Credly link */, image: "" },
    { name: "CSB", full: "AWS Academy Graduate — Cloud Security Builder", issuer: "AWS Academy", year: "2026", status: "Earned", color: "#ff9900", credly: "https://www.credly.com/badges/d8895f24-ada4-4696-9d77-7d547d1242ef/public_url", image: "https://images.credly.com/images/cceb6e0f-55f4-45d5-aec6-0e4435f488c6/linkedin_thumb_blob" },
    { name: "GenAI", full: "AWS Cloud Quest — Generative AI Practitioner", issuer: "Amazon Web Services", year: "2026", status: "Earned", color: "#ff9900", credly: "https://www.credly.com/badges/5d8103c2-134e-4b30-b0b2-2fcb99bb123a/public_url", image: "https://images.credly.com/images/15fa08e6-ca73-4fa3-94ed-c36f7f157313/linkedin_thumb_blob" },
    { name: "AI Sec", full: "TryHackMe — AI Security Learning Path", issuer: "TryHackMe", year: "2026", status: "Earned", color: "#88cc14", credly: "https://tryhackme.com/certificate/THM-NOC0LH69DB", image: "" },
    { name: "AZ-900", full: "Microsoft Azure Fundamentals", issuer: "Microsoft", year: "2025", status: "Earned", color: "#0078d4", credly: "" /* ← paste Credly link */, image: "" },
    { name: "S/4HANA", full: "SAP Certified Associate — S/4HANA Cloud", issuer: "SAP", year: "2024", status: "Earned", color: "#0a6ed1", credly: "" /* ← paste Credly link */, image: "" },
    { name: "Postman", full: "Postman API Fundamentals Student Expert", issuer: "Postman", year: "2024", status: "Earned", color: "#ff6c37", credly: "" /* ← paste Credly link */, image: "" }
  ],

  achievements: [
    { value: "Top 1%", label: "TryHackMe global ranking", note: "SOC Level 1 and AI Security paths", url: "" }, 
    { value: "Winner", label: "Build with AI — Google for Developers", note: "Agent Builder Camp, GeeksforGeeks × Google", url: "" }, 
    { value: "HTB", label: "Hack The Box", note: "AI red teaming, web exploitation, privilege escalation", url: "" }
  ],

  experience: [
    { when: "Feb 2025 — Feb 2026", role: "Analyst II", org: "DXC Technology", text: "Alert-to-ServiceNow integration that automated ticket creation; RBAC access provisioning and audit log review; root-cause analysis across AWS and Azure under ITIL." },
    { when: "Mar 2024 — Feb 2025", role: "Application Developer, Fintech", org: "Webplat Technologies", text: "Production fintech apps for SlenPay, Religare and Community. OWASP API Top 10 testing with Burp and Postman; SSL pinning, root detection and token auth." },
    { when: "Jun — Aug 2023", role: "CloudOps & ITIL Apprentice", org: "DXC Technology", text: "Hybrid cloud monitoring, bastion access and load balancer performance; incident, problem and change." },
    { when: "2022", role: "Back-end Developer", org: "SMECreditt", text: "Python that collected balance-sheet data and helped shape the models used for loan decisions." },
    { when: "2020", role: "Machine Learning Intern", org: "Verzeo Edutech", text: "Python workflows, preprocessing and model evaluation." }
  ],

  education: [
    { when: "2026 — 2027", title: "MSc Applied Cybersecurity", org: "University of Wollongong in Dubai", text: "DFIR · Threat detection · GRC · Secure coding · Cryptography" },
    { when: "2019 — 2023", title: "B.Tech, Computer Science & Engineering", org: "Amity University Kolkata", text: "" }
  ],

  /* Misc — events, competitions and anything outside the main tracks */
  misc: [
    {
      title: "Crypto Expo Dubai 2026",
      highlight: "Top 3 · Trading Battle",
      date: "2026",
      text: "Met companies and professionals across Web3 and crypto, learning about DeFi, blockchain, digital assets and their security, including Tangem Wallet's approach to self-custody. Finished in the top 3 of the event's Trading Battle.",
      image: "assets/misc/crypto-expo-dubai-2026.jpg",
      links: [{ label: "LinkedIn post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7503945203846852609/" }]
    },
    {
      title: "GISEC Global",
      highlight: "CTF participant",
      date: "2026", // ← confirm the year
      text: "Explored the latest AI and cybersecurity innovations, competed hands-on in a CTF challenge, and connected with the region's security community, including the UAE Cyber Security Council.",
      image: "assets/misc/gisec.jpg",
      links: [{ label: "LinkedIn post", url: "" }] // ← paste your GISEC post link
    }
  ],

  writing: [
    { year: "2026", title: "Designing an AI-orchestrated penetration testing framework", text: "Putting an assistant next to an offensive workflow, and where that assistant must stop.", url: "" },
    { year: "2024", title: "A scrollable DataTable in Flutter Web", text: "Making a wide table usable when the page, not the widget, is the constraint.", url: "" },
    { year: "2024", title: "Maps and HashMaps, with a real interface", text: "A small Flutter project that shows the choice instead of only describing it.", url: "" }
  ]
};
