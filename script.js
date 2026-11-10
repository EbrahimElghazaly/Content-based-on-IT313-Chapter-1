/* ============================================
   ELGHAZALY WEB — Main Script
   ============================================ */

/* ---------- 1. TRANSLATIONS ---------- */
const T = {
    en: {
        navHome: "Home",
        navSummary: "Summary",
        navCases: "Case Studies",
        navQuiz: "Quiz",
        navInfo: "Chapter Info",
        heroPill: "ELGHAZALY WEB · IT313",
        heroTitle: "Introduction to Information and Computer Network Security",
        heroSub: "Learn the fundamentals of information security, cybersecurity objectives, threats, attacks, and network security models.",
        metaCourse: "Course",
        metaCourseVal: "IT313",
        metaChapter: "Chapter",
        metaChapterVal: "Chapter 1",
        metaInstructor: "Instructor",
        metaInstructorVal: "Dr. Marwa Salama",
        btnExplore: "Explore Chapter →",
        btnStartQuiz: "Start Quiz",
        sumTag: "Chapter Summary",
        sumTitle: "Complete Chapter Summary",
        sumSub: "Organized, bilingual, and based directly on Chapter_1.pdf.",
        sumSearch: "Search topics...",
        caseTag: "Practice",
        caseTitle: "20 Case Studies",
        caseSub: "Apply the chapter concepts to real-world cybersecurity scenarios.",
        quizTag: "Test Yourself",
        quizTitle: "Interactive Quiz",
        quizSub: "15 questions · Practice & Exam modes · Bilingual",
        infoTag: "About",
        infoTitle: "Chapter Information",
        infoSub: "All facts derived from the official Chapter_1.pdf.",
        footerTagline: "Premium bilingual educational platform.",
        footerQuick: "Quick Links",
        footerAbout: "About",
        footerCredit: "Content based on IT313 — Chapter 1 · Dr. Marwa Salama",
        footerCopyright: "© 2025 ELGHAZALY WEB. All rights reserved.",
        // cases
        casePrev: "Previous",
        caseNext: "Next Case",
        caseFinish: "Finish & See Results",
        caseReview: "Review Answers",
        caseRestart: "Restart Case Studies",
        caseScenario: "Scenario",
        caseQuestion: "Question",
        caseExplanation: "Explanation",
        caseRelated: "Related Objective",
        caseResultTitle: "Case Studies Complete",
        caseScore: "Score",
        caseCorrect: "Correct",
        caseIncorrect: "Incorrect",
        // quiz
        quizPractice: "Practice Mode",
        quizPracticeDesc: "See instant feedback after each answer.",
        quizExam: "Exam Mode",
        quizExamDesc: "Feedback only after final submission.",
        quizPrev: "Previous",
        quizNext: "Next",
        quizFinish: "Finish Quiz",
        quizConfirmFinish: "You still have unanswered questions. Submit anyway?",
        quizReview: "Review Answers",
        quizRestart: "Restart Quiz",
        quizResultTitle: "Quiz Complete",
        quizCorrect: "Correct",
        quizIncorrect: "Incorrect",
        quizUnanswered: "Unanswered",
        quizScore: "Score",
        perfExcellent: "Excellent",
        perfVeryGood: "Very Good",
        perfGood: "Good",
        perfNeeds: "Needs Improvement",
        perfKeep: "Keep Practicing",
        // info
        infoCourseLbl: "Course",
        infoCourseVal: "IT313 — Information and Computer Network Security",
        infoChapterLbl: "Chapter",
        infoChapterVal: "Chapter 1 — Introduction",
        infoInstructorLbl: "Instructor",
        infoInstructorVal: "Dr. Marwa Salama",
        infoPrereqLbl: "Prerequisite",
        infoPrereqVal: "Fundamentals of Information Technology",
        infoBrandLbl: "Brand",
        infoBrandVal: "ELGHAZALY WEB",
        infoStackLbl: "Tech Stack",
        infoStackVal: "HTML5 · CSS3 · Vanilla JavaScript",
        toastLang: "Language switched",
        toastTheme: "Theme updated"
    },
    ar: {
        navHome: "الرئيسية",
        navSummary: "الملخص",
        navCases: "دراسات الحالة",
        navQuiz: "الاختبار",
        navInfo: "معلومات الفصل",
        heroPill: "الغزالي ويب · IT313",
        heroTitle: "مقدمة في أمن المعلومات والشبكات الحاسوبية",
        heroSub: "تعلّم أساسيات أمن المعلومات، أهداف الأمن السيبراني، التهديدات، الهجمات، ونماذج أمن الشبكات.",
        metaCourse: "المقرر",
        metaCourseVal: "IT313",
        metaChapter: "الفصل",
        metaChapterVal: "الفصل الأول",
        metaInstructor: "المحاضر",
        metaInstructorVal: "د. مروة سلامة",
        btnExplore: "استكشف الفصل ←",
        btnStartQuiz: "ابدأ الاختبار",
        sumTag: "ملخص الفصل",
        sumTitle: "ملخص شامل للفصل",
        sumSub: "منظّم، ثنائي اللغة، ومبني مباشرةً على Chapter_1.pdf.",
        sumSearch: "ابحث في الموضوعات...",
        caseTag: "تدريب",
        caseTitle: "20 دراسة حالة",
        caseSub: "طبّق مفاهيم الفصل على سيناريوهات واقعية في الأمن السيبراني.",
        quizTag: "اختبر نفسك",
        quizTitle: "اختبار تفاعلي",
        quizSub: "15 سؤالاً · وضع تدريب ووضع امتحان · ثنائي اللغة",
        infoTag: "حول",
        infoTitle: "معلومات الفصل",
        infoSub: "جميع الحقائق مستمدة من Chapter_1.pdf الرسمي.",
        footerTagline: "منصة تعليمية احترافية ثنائية اللغة.",
        footerQuick: "روابط سريعة",
        footerAbout: "حول",
        footerCredit: "المحتوى مبني على IT313 — الفصل الأول · د. مروة سلامة",
        footerCopyright: "© 2025 الغزالي ويب. جميع الحقوق محفوظة.",
        casePrev: "السابق",
        caseNext: "الحالة التالية",
        caseFinish: "إنهاء وعرض النتائج",
        caseReview: "مراجعة الإجابات",
        caseRestart: "إعادة دراسات الحالة",
        caseScenario: "السيناريو",
        caseQuestion: "السؤال",
        caseExplanation: "التوضيح",
        caseRelated: "الهدف المرتبط",
        caseResultTitle: "اكتملت دراسات الحالة",
        caseScore: "النتيجة",
        caseCorrect: "صحيح",
        caseIncorrect: "خطأ",
        quizPractice: "وضع التدريب",
        quizPracticeDesc: "اعرض التغذية الراجعة فوراً بعد كل إجابة.",
        quizExam: "وضع الامتحان",
        quizExamDesc: "التغذية الراجعة بعد التسليم النهائي فقط.",
        quizPrev: "السابق",
        quizNext: "التالي",
        quizFinish: "إنهاء الاختبار",
        quizConfirmFinish: "لديك أسئلة لم تُجب عنها. هل تريد التسليم على أي حال؟",
        quizReview: "مراجعة الإجابات",
        quizRestart: "إعادة الاختبار",
        quizResultTitle: "اكتمل الاختبار",
        quizCorrect: "صحيح",
        quizIncorrect: "خطأ",
        quizUnanswered: "بدون إجابة",
        quizScore: "النتيجة",
        perfExcellent: "ممتاز",
        perfVeryGood: "جيد جداً",
        perfGood: "جيد",
        perfNeeds: "يحتاج تحسين",
        perfKeep: "استمر في التدريب",
        infoCourseLbl: "المقرر",
        infoCourseVal: "IT313 — أمن المعلومات والشبكات الحاسوبية",
        infoChapterLbl: "الفصل",
        infoChapterVal: "الفصل الأول — مقدمة",
        infoInstructorLbl: "المحاضر",
        infoInstructorVal: "د. مروة سلامة",
        infoPrereqLbl: "المتطلب السابق",
        infoPrereqVal: "أساسيات تكنولوجيا المعلومات",
        infoBrandLbl: "العلامة",
        infoBrandVal: "الغزالي ويب",
        infoStackLbl: "التقنيات",
        infoStackVal: "HTML5 · CSS3 · JavaScript",
        toastLang: "تم تغيير اللغة",
        toastTheme: "تم تحديث المظهر"
    }
};

/* ---------- 2. STATE ---------- */
const state = {
    lang: localStorage.getItem('eg-lang') || 'en',
    theme: localStorage.getItem('eg-theme') || 'light',
};
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const t = (k) => T[state.lang][k] || k;

/* ---------- 3. SUMMARY DATA ---------- */
const SUMMARY = {
    en: [{
            id: "course-info",
            title: "Course Information",
            content: `
      <ul>
        <li><strong>Course:</strong> IT313 — Information and Computer Network Security</li>
        <li><strong>Prerequisite:</strong> Fundamentals of Information Technology</li>
        <li><strong>Instructor:</strong> Dr. Marwa Salama</li>
        <li><strong>Chapter:</strong> Chapter 1 — Introduction to Information and Computer Network Security</li>
      </ul>`
        },
        {
            id: "objectives",
            title: "Course Objectives",
            content: `
      <ul>
        <li><strong>Security Fundamentals:</strong> Explain the basic concepts of information and network security.</li>
        <li><strong>Encryption Techniques:</strong> Apply classical encryption techniques and basic and advanced encryption.</li>
        <li><strong>Key Cryptography:</strong> Compare symmetric and asymmetric cryptography.</li>
        <li><strong>Hashing &amp; Signatures:</strong> Use hash functions, authentication, and digital signatures.</li>
        <li><strong>Network &amp; Web Security:</strong> Describe email, network (firewalls), and web security.</li>
        <li><strong>Steganography &amp; Watermarking:</strong> Recognize digital steganography and watermarking techniques.</li>
      </ul>`
        },
        {
            id: "grading",
            title: "Grading Distribution",
            content: `
      <p>Total: <strong>100 marks</strong></p>
      <div class="grading-grid">
        <div class="grade-card"><div class="row"><span>Final Exam</span><strong>50%</strong></div><div class="bar final"><span data-w="50%"></span></div></div>
        <div class="grade-card"><div class="row"><span>Midterm Exam</span><strong>25%</strong></div><div class="bar mid"><span data-w="25%"></span></div></div>
        <div class="grade-card"><div class="row"><span>Practical Exam</span><strong>15%</strong></div><div class="bar prac"><span data-w="15%"></span></div></div>
        <div class="grade-card"><div class="row"><span>Activities</span><strong>10%</strong></div><div class="bar act"><span data-w="10%"></span></div></div>
      </div>`
        },
        {
            id: "chapter-objectives",
            title: "Chapter Objectives",
            content: `
      <h4>Vocabulary &amp; Concepts</h4>
      <ul><li>Define information, network, and cybersecurity.</li><li>Explain the CIA triad and extended security objectives (authenticity, non-repudiation, accountability).</li></ul>
      <h4>Threats &amp; Attacks</h4>
      <ul><li>Differentiate threats, vulnerabilities, risks, and attacks.</li><li>Classify passive vs. active attacks.</li><li>Identify malware and social-engineering categories.</li></ul>
      <h4>Models &amp; Standards</h4>
      <ul><li>Describe the general model of network security.</li><li>Explain the ITU-T X.800 architecture.</li><li>Recognize major international security standards and frameworks.</li></ul>`
        },
        {
            id: "definitions",
            title: "Core Definitions",
            content: `
      <ul>
        <li><strong>Information Security:</strong> Protection of information and systems from unauthorized access, use, disclosure, disruption, modification, or destruction, regardless of form.</li>
        <li><strong>Computer Security:</strong> Protection of hardware, OS, and software of individual computer systems, including data they store and process.</li>
        <li><strong>Network Security:</strong> Protection of communication infrastructure and data while in transit.</li>
        <li><strong>Cybersecurity:</strong> Broadest term; encompasses the above and addresses critical infrastructure, user safety, and geopolitical dimensions.</li>
      </ul>`
        },
        {
            id: "why",
            title: "Why Information &amp; Network Security Matters",
            content: `
      <ul><li>Ubiquitous connectivity (expanding attack surface)</li><li>Digital transformation of critical infrastructure</li><li>Economic value of monetizable data</li><li>Professionalization of cybercrime (e.g., ransomware-as-a-service)</li><li>Nation-state involvement in espionage/sabotage</li></ul>`
        },
        {
            id: "history",
            title: "A Brief Historical Perspective",
            content: `
      <div class="timeline">
        <div class="timeline-item"><div class="year">1960s–70s</div><div class="desc">Physical &amp; procedural security</div></div>
        <div class="timeline-item"><div class="year">1970s–80s</div><div class="desc">Foundational cryptography &amp; access control</div></div>
        <div class="timeline-item"><div class="year">1990s</div><div class="desc">Internet era (worms, firewalls)</div></div>
        <div class="timeline-item"><div class="year">2000s</div><div class="desc">E-commerce &amp; regulation (HIPAA, GDPR)</div></div>
        <div class="timeline-item"><div class="year">2010s–present</div><div class="desc">Advanced Persistent Threats (APTs) &amp; IoT</div></div>
      </div>`
        },
        {
            id: "roles",
            title: "Roles &amp; Responsibilities",
            content: `
      <div class="grid-3">
        <div class="mini-card"><h5>CISO</h5><p>Sets organizational strategy and policy.</p></div>
        <div class="mini-card"><h5>Security Engineer</h5><p>Designs and implements security infrastructure.</p></div>
        <div class="mini-card"><h5>Auditor</h5><p>Verifies compliance with internal policy and external regulations.</p></div>
        <div class="mini-card"><h5>Security Analyst</h5><p>Monitors systems and supports incident response.</p></div>
        <div class="mini-card"><h5>Penetration Tester</h5><p>Simulates real attacks to discover vulnerabilities.</p></div>
        <div class="mini-card"><h5>End User</h5><p>Follows policy; often the first line of defense.</p></div>
      </div>`
        },
        {
            id: "legal",
            title: "Legal &amp; Ethical Considerations",
            content: `
      <div class="table-wrap"><table>
        <thead><tr><th>Dimension</th><th>Ethical Hacking</th><th>Unauthorized Intrusion</th></tr></thead>
        <tbody>
          <tr><td>Authorization</td><td>Explicit written permission agreed in advance</td><td>None; access obtained without consent</td></tr>
          <tr><td>Scope</td><td>Bounded by a formal agreement</td><td>Unbounded</td></tr>
          <tr><td>Disclosure</td><td>Responsible private reporting</td><td>Exploited, sold, or leaked</td></tr>
          <tr><td>Legal status</td><td>Lawful</td><td>Criminal offense</td></tr>
        </tbody>
      </table></div>
      <p style="margin-top:12px">Unauthorized access is a criminal offense globally. <strong>Egypt's Anti-Cyber and Information Technology Crimes Law (Law No. 175 of 2018)</strong> criminalizes unauthorized access to information systems.</p>`
        },
        {
            id: "cia",
            title: "The CIA Triad",
            content: `
      <div class="grid-3">
        <div class="mini-card"><h5>Confidentiality</h5><p>Ensures that information is not disclosed to unauthorized individuals, entities, or processes.</p></div>
        <div class="mini-card"><h5>Integrity</h5><p>Ensures that information is not altered in an unauthorized or undetected manner.</p></div>
        <div class="mini-card"><h5>Availability</h5><p>Ensures that systems and data are accessible and usable in a timely manner to authorized users whenever needed.</p></div>
      </div>
      <p style="margin-top:12px"><em>[Example] Hospital database: confidentiality protects records, integrity ensures correct blood types, availability ensures access during emergencies.</em></p>`
        },
        {
            id: "extended",
            title: "Extended Security Objectives",
            content: `
      <ul>
        <li><strong>Authenticity:</strong> Verifying a message, transaction, or party is genuine.</li>
        <li><strong>Non-repudiation:</strong> Assurance a party cannot deny having sent or received a message.</li>
        <li><strong>Accountability:</strong> Tracing actions uniquely to an entity (logging/auditing).</li>
        <li><strong>Access Control:</strong> Limiting and controlling access to systems and applications.</li>
      </ul>`
        },
        {
            id: "t-v-r-a",
            title: "Threats, Vulnerabilities, Risks, and Attacks",
            content: `
      <div class="grid-2">
        <div class="mini-card"><h5>Vulnerability</h5><p>A weakness in a system's design, implementation, or operation that could be exploited.</p><p><em>Example: Unpatched software bug.</em></p></div>
        <div class="mini-card"><h5>Threat</h5><p>A potential cause of an unwanted incident, which may exploit a vulnerability to cause harm.</p><p><em>Example: Malicious actor aware of the bug.</em></p></div>
        <div class="mini-card"><h5>Risk</h5><p>The likelihood that a given threat will exploit a given vulnerability, combined with the resulting impact.</p><p><em>Example: Probability of exploit × financial damage.</em></p></div>
        <div class="mini-card"><h5>Attack</h5><p>A deliberate attempt (successful or not) to exploit a vulnerability and violate a security objective.</p><p><em>Example: Sending crafted packet to trigger bug.</em></p></div>
      </div>`
        },
        {
            id: "pma",
            title: "Security Policy, Mechanisms, and Assurance",
            content: `
      <ul>
        <li><strong>Policy (What):</strong> Formal statement of what is permitted.</li>
        <li><strong>Mechanism (How):</strong> Process or device designed to enforce policy.</li>
        <li><strong>Assurance (Confidence):</strong> Degree of confidence mechanisms enforce policy.</li>
      </ul>
      <p><em>[Example] Locked door: Policy = 'staff only', Mechanism = 'lock/key', Assurance = 'lock can't be easily picked'.</em></p>`
        },
        {
            id: "defense",
            title: "Defense in Depth &amp; Least Privilege",
            content: `
      <ul>
        <li><strong>Defense in Depth:</strong> Layering multiple, independent security mechanisms so that the failure of any one layer does not result in a complete compromise.</li>
        <li><strong>Principle of Least Privilege:</strong> Every user, process, and system component should operate with the minimum set of permissions necessary to perform its function, and no more.</li>
      </ul>
      <p>Layers: Data Core → Perimeter Security → Host Security → Application Security → Data Security.</p>`
        },
        {
            id: "principles",
            title: "Classic Security Design Principles",
            content: `
      <div class="table-wrap"><table><tbody>
        <tr><td><strong>Economy of Mechanism</strong></td><td>Keep security-critical components simple and small.</td></tr>
        <tr><td><strong>Fail-Safe Defaults</strong></td><td>Base access on explicit permission; default is denial.</td></tr>
        <tr><td><strong>Complete Mediation</strong></td><td>Every access must be checked for authorization.</td></tr>
        <tr><td><strong>Open Design</strong></td><td>Security must not depend on design secrecy, only key secrecy.</td></tr>
        <tr><td><strong>Separation of Privilege</strong></td><td>Require two or more independent conditions to grant access.</td></tr>
        <tr><td><strong>Least Common Mechanism</strong></td><td>Minimize shared mechanism between users.</td></tr>
        <tr><td><strong>Psychological Acceptability</strong></td><td>Mechanisms must be easy to use.</td></tr>
      </tbody></table></div>`
        },
        {
            id: "passive-active",
            title: "Passive vs Active Attacks",
            content: `
      <div class="grid-2">
        <div class="mini-card"><h5>Passive Attacks</h5><p>Attempts to learn or make use of information without affecting system resources (observation only).</p><p><em>Types: Release of message contents, Traffic analysis.</em></p><p><em>Emphasis on PREVENTION (e.g., encryption).</em></p></div>
        <div class="mini-card"><h5>Active Attacks</h5><p>Attempts to alter system resources or affect their operation.</p><p><em>Types: Masquerade, Replay, Modification of messages, DoS.</em></p><p><em>Emphasis on DETECTION and recovery.</em></p></div>
      </div>`
        },
        {
            id: "malware",
            title: "Malicious Software (Malware)",
            content: `
      <div class="grid-3">
        <div class="mini-card"><h5>Virus</h5><p>Attaches to a legitimate host program; requires human action to propagate.</p></div>
        <div class="mini-card"><h5>Worm</h5><p>Standalone program; self-replicates and spreads autonomously.</p></div>
        <div class="mini-card"><h5>Trojan Horse</h5><p>Disguises as legitimate software to perform secret malicious actions.</p></div>
        <div class="mini-card"><h5>Ransomware</h5><p>Payload that encrypts files/locks systems, demanding payment.</p></div>
        <div class="mini-card"><h5>Spyware</h5><p>Covertly monitors and collects user information.</p></div>
        <div class="mini-card"><h5>Rootkit</h5><p>Modifies OS to conceal presence of malicious activity.</p></div>
        <div class="mini-card"><h5>Botnet Agent</h5><p>Connects infected machine to a remotely controlled network.</p></div>
      </div>
      <p style="margin-top:12px"><strong>Crucial boundary:</strong> Viruses need human action; Worms spread autonomously. Ransomware is a PAYLOAD, not a propagation method.</p>`
        },
        {
            id: "social",
            title: "Social Engineering",
            content: `
      <ul>
        <li><strong>Phishing:</strong> Fraudulent messages mimicking trusted entities.</li>
        <li><strong>Spear phishing:</strong> Targeted phishing using personalized info.</li>
        <li><strong>Pretexting:</strong> Fabricating a scenario to obtain access.</li>
        <li><strong>Baiting:</strong> Physical/digital lures (e.g., infected USB).</li>
        <li><strong>Tailgating:</strong> Physical access by following an authorized person.</li>
      </ul>
      <p><em>[Example] Social engineering bypasses technical controls entirely. User-awareness training is a formal security mechanism on equal footing with firewalls.</em></p>`
        },
        {
            id: "network-attacks",
            title: "Network-Level Attacks",
            content: `
      <ul>
        <li>Man-in-the-Middle (MITM)</li>
        <li>Distributed Denial of Service (DDoS)</li>
        <li>Session hijacking</li>
        <li>Packet sniffing</li>
        <li>IP spoofing</li>
      </ul>`
        },
        {
            id: "threat-actors",
            title: "Threat Actors",
            content: `
      <div class="table-wrap"><table>
        <thead><tr><th>Actor</th><th>Motivation / Skill</th></tr></thead>
        <tbody>
          <tr><td>Script kiddies</td><td>Curiosity/tools; limited skill.</td></tr>
          <tr><td>Hacktivists</td><td>Ideological motives.</td></tr>
          <tr><td>Cybercriminals</td><td>Organized; financial gain.</td></tr>
          <tr><td>Nation-states</td><td>Espionage/sabotage; persistent.</td></tr>
          <tr><td>Insiders</td><td>Misuse of legitimate access.</td></tr>
        </tbody>
      </table></div>
      <p style="margin-top:12px"><strong>Insider Threats:</strong> Malicious (deliberate, countered by least privilege) vs. Negligent (unintentional, countered by training/safeguards).</p>`
        },
        {
            id: "attack-anatomy",
            title: "Attack Surface, Vectors, APTs, Attack Anatomy",
            content: `
      <ul>
        <li><strong>Attack Surface:</strong> Complete set of entry/extraction points.</li>
        <li><strong>Attack Vector:</strong> Specific path used to gain access.</li>
        <li><strong>Zero-day vulnerability:</strong> Unknown to vendor and unpatched.</li>
        <li><strong>Advanced Persistent Threat (APT):</strong> Prolonged, targeted attack remaining undetected to exfiltrate data gradually.</li>
      </ul>
      <p><strong>Anatomy of a Typical Attack (7 steps):</strong></p>
      <ol><li>Reconnaissance</li><li>Weaponization</li><li>Delivery</li><li>Exploitation</li><li>Installation</li><li>Command and Control</li><li>Actions on Objectives</li></ol>
      <p><em>Defenders only need to interrupt the chain at a SINGLE point to defeat the overall attack. Early detection is critical.</em></p>`
        },
        {
            id: "incidents",
            title: "Notable Historical Incidents",
            content: `
      <div class="table-wrap"><table>
        <thead><tr><th>Year</th><th>Incident</th><th>Primary Category</th></tr></thead>
        <tbody>
          <tr><td>2010</td><td>Stuxnet</td><td>Sabotage malware targeting industrial control.</td></tr>
          <tr><td>2013</td><td>Large-scale retail breach</td><td>Network intrusion via third-party vendor.</td></tr>
          <tr><td>2017</td><td>WannaCry</td><td>Ransomware worm spreading via unpatched vulnerability.</td></tr>
          <tr><td>2017</td><td>Credit-reporting breach</td><td>Exploitation of unpatched web-app vulnerability.</td></tr>
          <tr><td>2020</td><td>Supply-chain compromise</td><td>Compromise of trusted software update mechanism.</td></tr>
        </tbody>
      </table></div>
      <p style="margin-top:12px"><strong>Core Lesson:</strong> Sophisticated cryptography is necessary but not sufficient. Timely patching, segmentation, and least privilege are equally critical.</p>`
        },
        {
            id: "general-model",
            title: "General Model of Network Security",
            content: `
      <p>Flow: <strong>Sender</strong> (with security-related transformation + secret information) → <strong>Information Channel</strong> (e.g., Public Internet) → <strong>Receiver</strong>. A <strong>Trusted Third Party</strong> coordinates between both sides; an <strong>Opponent</strong> attacks the channel.</p>
      <p><em>[Walkthrough] Alice (Sender) sends funds to Bob (Receiver) via the public Internet (Channel). She applies encryption/signatures (Transformation) and keys (Secret Info), verified by a Certificate Authority (Trusted Third Party). Mallory (Opponent) attempts to intercept or alter the message.</em></p>
      <p><strong>Network Access Security Model:</strong> Gatekeeper functions (passwords/firewalls) to deny access, and internal security controls (monitoring) to detect bypassed defenses.</p>`
        },
        {
            id: "x800",
            title: "X.800 Architecture",
            content: `
      <p><strong>Attacks → are countered by → Services → are implemented by → Mechanisms.</strong></p>
      <p><strong>Five Categories of Security Services:</strong></p>
      <div class="table-wrap"><table>
        <thead><tr><th>Service</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Authentication</td><td>Assures communicating entity or data source is genuine.</td></tr>
          <tr><td>Access Control</td><td>Prevents unauthorized use of a resource.</td></tr>
          <tr><td>Data Confidentiality</td><td>Protects data from unauthorized disclosure.</td></tr>
          <tr><td>Data Integrity</td><td>Assures data is exactly as sent, unaltered.</td></tr>
          <tr><td>Non-repudiation</td><td>Prevents denial of a transmitted message.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Categories of Security Mechanisms:</strong></p>
      <div class="table-wrap"><table><tbody>
        <tr><td><strong>Specific</strong></td><td>Encipherment, Digital signature, Access control, Data integrity, Authentication exchange.</td></tr>
        <tr><td><strong>Pervasive</strong></td><td>Trusted functionality, Security label, Event detection, Security audit trail.</td></tr>
      </tbody></table></div>
      <p><strong>Secure Email Example:</strong></p>
      <div class="table-wrap"><table>
        <thead><tr><th>Security Goal</th><th>X.800 Service</th><th>Mechanism</th></tr></thead>
        <tbody>
          <tr><td>Only recipient reads</td><td>Confidentiality</td><td>Encipherment</td></tr>
          <tr><td>Verify sender</td><td>Authentication</td><td>Digital Signature / Auth. Exchange</td></tr>
          <tr><td>Unaltered transit</td><td>Integrity</td><td>Hash function + signature</td></tr>
          <tr><td>Sender cannot deny</td><td>Non-repudiation</td><td>Digital Signature</td></tr>
          <tr><td>Authorized relay only</td><td>Access Control</td><td>Access-control lists</td></tr>
        </tbody>
      </table></div>`
        },
        {
            id: "standards",
            title: "Standards &amp; Frameworks",
            content: `
      <div class="table-wrap"><table>
        <thead><tr><th>Standard/Framework</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>ISO/IEC 27001</td><td>Specifies ISMS requirements (Note: 27002 provides controls, 27005 for risk).</td></tr>
          <tr><td>NIST CSF</td><td>Organizes functions: Identify, Protect, Detect, Respond, Recover.</td></tr>
          <tr><td>ITU-T X.800</td><td>Defines OSI security architecture (Services, Attacks, Mechanisms).</td></tr>
          <tr><td>GDPR</td><td>EU personal data protection regulation.</td></tr>
          <tr><td>PCI DSS</td><td>Defines security requirements for credit-card information.</td></tr>
        </tbody>
      </table></div>
      <p style="margin-top:12px">Sector-specific rules include HIPAA, SOC 2, and local laws like Egypt Law 151. Standards define the vocabulary and dictate deployment — inseparable from technical skill.</p>`
        }
    ],
    ar: [
        { id: "course-info", title: "معلومات المقرر", content: `<ul><li><strong>المقرر:</strong> IT313 — أمن المعلومات والشبكات الحاسوبية</li><li><strong>المتطلب السابق:</strong> أساسيات تكنولوجيا المعلومات</li><li><strong>المحاضر:</strong> د. مروة سلامة</li><li><strong>الفصل:</strong> الفصل الأول — مقدمة في أمن المعلومات والشبكات</li></ul>` },
        { id: "objectives", title: "أهداف المقرر", content: `<ul><li><strong>أساسيات الأمن:</strong> شرح المفاهيم الأساسية لأمن المعلومات والشبكات.</li><li><strong>تقنيات التشفير:</strong> تطبيق تقنيات التشفير الكلاسيكية والأساسية والمتقدمة.</li><li><strong>تشفير المفاتيح:</strong> مقارنة التشفير المتماثل وغير المتماثل.</li><li><strong>التجزئة والتوقيعات:</strong> استخدام دوال التجزئة والمصادقة والتوقيعات الرقمية.</li><li><strong>أمن الشبكات والويب:</strong> وصف أمن البريد الإلكتروني والشبكات (الجدران النارية) والويب.</li><li><strong>الإخفاء والعلامات المائية:</strong> التعرف على تقنيات الإخفاء الرقمي والعلامات المائية.</li></ul>` },
        { id: "grading", title: "توزيع الدرجات", content: `<p>المجموع: <strong>100 درجة</strong></p><div class="grading-grid"><div class="grade-card"><div class="row"><span>الامتحان النهائي</span><strong>50%</strong></div><div class="bar final"><span data-w="50%"></span></div></div><div class="grade-card"><div class="row"><span>امتحان منتصف الفصل</span><strong>25%</strong></div><div class="bar mid"><span data-w="25%"></span></div></div><div class="grade-card"><div class="row"><span>الامتحان العملي</span><strong>15%</strong></div><div class="bar prac"><span data-w="15%"></span></div></div><div class="grade-card"><div class="row"><span>الأنشطة</span><strong>10%</strong></div><div class="bar act"><span data-w="10%"></span></div></div></div>` },
        { id: "chapter-objectives", title: "أهداف الفصل", content: `<h4>المفاهيم والمصطلحات</h4><ul><li>تعريف المعلومات والشبكات والأمن السيبراني.</li><li>شرح ثالوث CIA والأهداف الموسعة (الأصالة، عدم الإنكار، المساءلة).</li></ul><h4>التهديدات والهجمات</h4><ul><li>التفريق بين التهديدات والثغرات والمخاطر والهجمات.</li><li>تصنيف الهجمات السلبية والنشطة.</li><li>التعرف على فئات البرمجيات الخبيثة والهندسة الاجتماعية.</li></ul><h4>النماذج والمعايير</h4><ul><li>وصف النموذج العام لأمن الشبكات.</li><li>شرح معمارية ITU-T X.800.</li><li>التعرف على أهم المعايير والأطر الدولية للأمن.</li></ul>` },
        { id: "definitions", title: "التعريفات الأساسية", content: `<ul><li><strong>أمن المعلومات:</strong> حماية المعلومات والأنظمة من الوصول غير المصرح به أو الاستخدام أو الإفصاح أو التعطيل أو التعديل أو التدمير، أياً كان الشكل.</li><li><strong>أمن الحاسوب:</strong> حماية الأجهزة ونظام التشغيل والبرمجيات للأنظمة الحاسوبية الفردية، بما في ذلك البيانات المخزنة والمعالجة.</li><li><strong>أمن الشبكات:</strong> حماية البنية التحتية للاتصالات والبيانات أثناء النقل.</li><li><strong>الأمن السيبراني:</strong> المصطلح الأشمل؛ يشمل ما سبق ويتناول البنية التحتية الحيوية وسلامة المستخدم والأبعاد الجيوسياسية.</li></ul>` },
        { id: "why", title: "لماذا أمن المعلومات والشبكات مهم", content: `<ul><li>الاتصال الشامل (توسع سطح الهجوم)</li><li>التحول الرقمي للبنية التحتية الحيوية</li><li>القيمة الاقتصادية للبيانات القابلة للتسييل</li><li>احتراف الجريمة السيبرانية (مثل Ransomware-as-a-Service)</li><li>تورط الدول في التجسس/التخريب</li></ul>` },
        { id: "history", title: "لمحة تاريخية مختصرة", content: `<div class="timeline"><div class="timeline-item"><div class="year">1960s–70s</div><div class="desc">الأمن المادي والإجرائي</div></div><div class="timeline-item"><div class="year">1970s–80s</div><div class="desc">التشفير التأسيسي والتحكم في الوصول</div></div><div class="timeline-item"><div class="year">1990s</div><div class="desc">عصر الإنترنت (الديدان، الجدران النارية)</div></div><div class="timeline-item"><div class="year">2000s</div><div class="desc">التجارة الإلكترونية والتنظيم (HIPAA، GDPR)</div></div><div class="timeline-item"><div class="year">2010s–present</div><div class="desc">التهديدات المتقدمة المستمرة (APTs) وإنترنت الأشياء</div></div></div>` },
        { id: "roles", title: "الأدوار والمسؤوليات", content: `<div class="grid-3"><div class="mini-card"><h5>CISO</h5><p>يضع الاستراتيجية والسياسات التنظيمية.</p></div><div class="mini-card"><h5>مهندس أمن</h5><p>يصمم وينفذ البنية التحتية الأمنية.</p></div><div class="mini-card"><h5>مدقق</h5><p>يتحقق من الامتثال للسياسات الداخلية واللوائح الخارجية.</p></div><div class="mini-card"><h5>محلل أمن</h5><p>يراقب الأنظمة ويدعم الاستجابة للحوادث.</p></div><div class="mini-card"><h5>مختبر اختراق</h5><p>يحاكي الهجمات الحقيقية لاكتشاف الثغرات.</p></div><div class="mini-card"><h5>المستخدم النهائي</h5><p>يتبع السياسة؛ غالباً خط الدفاع الأول.</p></div></div>` },
        { id: "legal", title: "الاعتبارات القانونية والأخلاقية", content: `<div class="table-wrap"><table><thead><tr><th>البعد</th><th>الاختراق الأخلاقي</th><th>الاختراق غير المصرح</th></tr></thead><tbody><tr><td>التصريح</td><td>إذن كتابي صريح مسبق</td><td>لا يوجد؛ الوصول بدون موافقة</td></tr><tr><td>النطاق</td><td>محدود باتفاقية رسمية</td><td>غير محدود</td></tr><tr><td>الإفصاح</td><td>إبلاغ خاص مسؤول</td><td>استغلال أو بيع أو تسريب</td></tr><tr><td>الوضع القانوني</td><td>قانوني</td><td>جريمة جنائية</td></tr></tbody></table></div><p style="margin-top:12px">الوصول غير المصرح به جريمة جنائية عالمياً. <strong>قانون مكافحة جرائم تقنية المعلومات المصري (قانون رقم 175 لسنة 2018)</strong> يجرّم الوصول غير المصرح به لأنظمة المعلومات.</p>` },
        { id: "cia", title: "ثالوث CIA", content: `<div class="grid-3"><div class="mini-card"><h5>السرية</h5><p>ضمان عدم إفصاح المعلومات لأفراد أو كيانات أو عمليات غير مصرح لها.</p></div><div class="mini-card"><h5>السلامة</h5><p>ضمان عدم تعديل المعلومات بشكل غير مصرح به أو غير مكتشف.</p></div><div class="mini-card"><h5>التوافر</h5><p>ضمان إمكانية الوصول إلى الأنظمة والبيانات واستخدامها في الوقت المناسب للمستخدمين المصرح لهم عند الحاجة.</p></div></div><p style="margin-top:12px"><em>[مثال] قاعدة بيانات مستشفى: السرية تحمي السجلات، السلامة تضمن فصائل الدم الصحيحة، التوافر يضمن الوصول في الطوارئ.</em></p>` },
        { id: "extended", title: "الأهداف الأمنية الموسعة", content: `<ul><li><strong>الأصالة:</strong> التحقق من أن الرسالة أو المعاملة أو الطرف أصلي.</li><li><strong>عدم الإنكار:</strong> ضمان عدم قدرة طرف على إنكار إرسال أو استلام رسالة.</li><li><strong>المساءلة:</strong> تتبع الإجراءات بشكل فريد إلى كيان (تسجيل/تدقيق).</li><li><strong>التحكم في الوصول:</strong> تقييد والتحكم في الوصول إلى الأنظمة والتطبيقات.</li></ul>` },
        { id: "t-v-r-a", title: "التهديدات والثغرات والمخاطر والهجمات", content: `<div class="grid-2"><div class="mini-card"><h5>ثغرة</h5><p>ضعف في تصميم النظام أو تنفيذه أو تشغيله يمكن استغلاله.</p><p><em>مثال: خطأ برمجي غير مصحح.</em></p></div><div class="mini-card"><h5>تهديد</h5><p>سبب محتمل لحادث غير مرغوب فيه، قد يستغل ثغرة لإحداث ضرر.</p><p><em>مثال: فاعل خبيث على علم بالخطأ.</em></p></div><div class="mini-card"><h5>مخاطرة</h5><p>احتمالية أن يستغل تهديد ما ثغرة ما، بالإضافة إلى الأثر الناتج.</p><p><em>مثال: احتمالية الاستغلال × الضرر المالي.</em></p></div><div class="mini-card"><h5>هجوم</h5><p>محاولة متعمدة (ناجحة أم لا) لاستغلال ثغرة وانتهاك هدف أمني.</p><p><em>مثال: إرسال حزمة مصممة لتفعيل الخطأ.</em></p></div></div>` },
        { id: "pma", title: "السياسة والآليات والضمان", content: `<ul><li><strong>السياسة (ماذا):</strong> بيان رسمي لما هو مسموح.</li><li><strong>الآلية (كيف):</strong> عملية أو جهاز مصمم لفرض السياسة.</li><li><strong>الضمان (الثقة):</strong> درجة الثقة في أن الآليات تفرض السياسة.</li></ul><p><em>[مثال] باب مغلق: السياسة = "للموظفين فقط"، الآلية = "قفل/مفتاح"، الضمان = "القفل لا يمكن فتحه بسهولة".</em></p>` },
        { id: "defense", title: "الدفاع في العمق والحد الأدنى من الصلاحيات", content: `<ul><li><strong>الدفاع في العمق:</strong> وضع طبقات متعددة مستقلة من آليات الأمن بحيث لا يؤدي فشل أي طبقة إلى اختراق كامل.</li><li><strong>مبدأ الحد الأدنى من الصلاحيات:</strong> يجب أن يعمل كل مستخدم وعملية ومكوّن نظام بالحد الأدنى من الصلاحيات اللازمة لأداء وظيفته، ولا أكثر.</li></ul><p>الطبقات: نواة البيانات ← أمن المحيط ← أمن المضيف ← أمن التطبيقات ← أمن البيانات.</p>` },
        { id: "principles", title: "مبادئ تصميم الأمن الكلاسيكية", content: `<div class="table-wrap"><table><tbody><tr><td><strong>اقتصاد الآلية</strong></td><td>إبقاء مكونات الأمن الحيوية بسيطة وصغيرة.</td></tr><tr><td><strong>الافتراضات الآمنة عند الفشل</strong></td><td>قرارات الوصول على إذن صريح؛ الافتراضي هو المنع.</td></tr><tr><td><strong>الوساطة الكاملة</strong></td><td>يجب التحقق من كل وصول لكل كائن.</td></tr><tr><td><strong>التصميم المفتوح</strong></td><td>الأمن لا يعتمد على سرية التصميم، فقط على سرية المفاتيح.</td></tr><tr><td><strong>فصل الصلاحيات</strong></td><td>يتطلب شرطين مستقلين أو أكثر لمنح الوصول.</td></tr><tr><td><strong>الحد الأدنى من الآلية المشتركة</strong></td><td>تقليل الآلية المشتركة بين المستخدمين.</td></tr><tr><td><strong>القبول النفسي</strong></td><td>يجب أن تكون الآليات سهلة الاستخدام.</td></tr></tbody></table></div>` },
        { id: "passive-active", title: "الهجمات السلبية مقابل النشطة", content: `<div class="grid-2"><div class="mini-card"><h5>هجمات سلبية</h5><p>محاولات لمعرفة أو استخدام معلومات من نظام دون التأثير على موارد النظام (مراقبة فقط).</p><p><em>الأنواع: الكشف عن محتوى الرسالة، تحليل حركة المرور.</em></p><p><em>التركيز على المنع (مثل التشفير).</em></p></div><div class="mini-card"><h5>هجمات نشطة</h5><p>محاولات لتعديل موارد النظام أو التأثير على تشغيلها.</p><p><em>الأنواع: التمويه، إعادة التشغيل، تعديل الرسائل، حجب الخدمة.</em></p><p><em>التركيز على الكشف والاسترداد.</em></p></div></div>` },
        { id: "malware", title: "البرمجيات الخبيثة", content: `<div class="grid-3"><div class="mini-card"><h5>فيروس</h5><p>يرتبط ببرنامج مضيف شرعي؛ يتطلب إجراءً بشرياً للانتشار.</p></div><div class="mini-card"><h5>دودة</h5><p>برنامج مستقل؛ ينسخ نفسه وينتشر تلقائياً.</p></div><div class="mini-card"><h5>حصان طروادة</h5><p>يتنكر كبرنامج شرعي لتنفيذ إجراءات خبيثة سرية.</p></div><div class="mini-card"><h5>برامج الفدية</h5><p>حملة تشفّر الملفات/تقفل الأنظمة وتطلب فدية.</p></div><div class="mini-card"><h5>برامج تجسس</h5><p>تراقب وتجمع معلومات المستخدم سراً.</p></div><div class="mini-card"><h5>Rootkit</h5><p>يعدل نظام التشغيل لإخفاء وجود نشاط خبيث.</p></div><div class="mini-card"><h5>وكيل Botnet</h5><p>يربط الجهاز المصاب بشبكة يتم التحكم فيها عن بعد.</p></div></div><p style="margin-top:12px"><strong>الحدود المهمة:</strong> الفيروسات تحتاج إجراءً بشرياً؛ الديدان تنتشر تلقائياً. برامج الفدية حملة (Payload) وليست وسيلة انتشار.</p>` },
        { id: "social", title: "الهندسة الاجتماعية", content: `<ul><li><strong>التصيد:</strong> رسائل احتيالية تنتحل هوية كيانات موثوقة.</li><li><strong>التصيد المستهدف:</strong> تصيد موجه باستخدام معلومات شخصية.</li><li><strong>الذرائع:</strong> اختلاق سيناريو للحصول على وصول.</li><li><strong>الإغراء:</strong> طُعم مادي/رقمي (مثل USB مصاب).</li><li><strong>التتبع:</strong> وصول مادي باتباع شخص مصرح له.</li></ul><p><em>[مثال] الهندسة الاجتماعية تتجاوز الضوابط التقنية تماماً. تدريب الوعي الأمني آلية أمنية رسمية على قدم المساواة مع الجدران النارية.</em></p>` },
        { id: "network-attacks", title: "هجمات مستوى الشبكة", content: `<ul><li>رجل في المنتصف (MITM)</li><li>حجب الخدمة الموزع (DDoS)</li><li>اختطاف الجلسة</li><li>التنصت على الحزم</li><li>انتحال IP</li></ul>` },
        { id: "threat-actors", title: "الفاعلون الخبثاء", content: `<div class="table-wrap"><table><thead><tr><th>الفاعل</th><th>الدافع / المهارة</th></tr></thead><tbody><tr><td>Script kiddies</td><td>الفضول/الأدوات؛ مهارة محدودة.</td></tr><tr><td>Hacktivists</td><td>دوافع أيديولوجية.</td></tr><tr><td>مجرمون سيبرانيون</td><td>منظمون؛ مكسب مالي.</td></tr><tr><td>دول قومية</td><td>تجسس/تخريب؛ مستمر.</td></tr><tr><td>داخليون</td><td>إساءة استخدام وصول شرعي.</td></tr></tbody></table></div><p style="margin-top:12px"><strong>التهديدات الداخلية:</strong> خبيثة (متعمدة، تُواجَه بالحد الأدنى من الصلاحيات) مقابل مهملة (غير متعمدة، تُواجَه بالتدريب والضمانات).</p>` },
        { id: "attack-anatomy", title: "سطح الهجوم والمتجهات و APTs وتشريح الهجوم", content: `<ul><li><strong>سطح الهجوم:</strong> مجموعة كاملة من نقاط الدخول/الاستخراج.</li><li><strong>متجه الهجوم:</strong> مسار محدد يُستخدم للوصول.</li><li><strong>ثغرة Zero-day:</strong> غير معروفة للمورد وغير مصححة.</li><li><strong>التهديد المتقدم المستمر (APT):</strong> هجوم مطول وموجه يبقى غير مكتشف لتسريب البيانات تدريجياً.</li></ul><p><strong>تشريح هجوم نموذجي (7 خطوات):</strong></p><ol><li>الاستطلاع</li><li>التسليح</li><li>التسليم</li><li>الاستغلال</li><li>التثبيت</li><li>التحكم والسيطرة</li><li>الإجراءات على الأهداف</li></ol><p><em>يحتاج المدافعون فقط لمقاطعة السلسلة عند نقطة واحدة لهزيمة الهجوم. الكشف المبكر حاسم.</em></p>` },
        { id: "incidents", title: "حوادث تاريخية بارزة", content: `<div class="table-wrap"><table><thead><tr><th>السنة</th><th>الحادث</th><th>الفئة الأساسية</th></tr></thead><tbody><tr><td>2010</td><td>Stuxnet</td><td>برمجية تخريبية تستهدف التحكم الصناعي.</td></tr><tr><td>2013</td><td>اختراق تجزئة واسع</td><td>اختراق شبكة عبر مورّد خارجي.</td></tr><tr><td>2017</td><td>WannaCry</td><td>دودة فدية تنتشر عبر ثغرة غير مصححة.</td></tr><tr><td>2017</td><td>اختراق تقارير ائتمانية</td><td>استغلال ثغرة تطبيق ويب غير مصححة.</td></tr><tr><td>2020</td><td>اختراق سلسلة التوريد</td><td>اختراق آلية تحديث برمجي موثوقة.</td></tr></tbody></table></div><p style="margin-top:12px"><strong>الدرس الأساسي:</strong> التشفير المتطور ضروري لكنه غير كافٍ. التصحيح في الوقت المناسب والتقسيم والحد الأدنى من الصلاحيات بنفس الأهمية.</p>` },
        { id: "general-model", title: "النموذج العام لأمن الشبكات", content: `<p>التدفق: <strong>المرسل</strong> (مع تحول متعلق بالأمن + معلومات سرية) ← <strong>قناة المعلومات</strong> (مثل الإنترنت العام) ← <strong>المستقبل</strong>. <strong>طرف ثالث موثوق</strong> ينسق بين الجانبين؛ <strong>خصم</strong> يهاجم القناة.</p><p><em>[مثال] أليس (المرسلة) ترسل أموالاً إلى بوب (المستقبل) عبر الإنترنت العام (القناة). تطبق التشفير/التوقيعات (التحول) والمفاتيح (المعلومات السرية)، ويتم التحقق بواسطة جهة إصدار الشهادات (طرف ثالث موثوق). ماليوري (الخصم) يحاول اعتراض أو تغيير الرسالة.</em></p><p><strong>نموذج أمن الوصول للشبكة:</strong> وظائف البوابة (كلمات المرور/الجدران النارية) لمنع الوصول، وضوابط الأمن الداخلية (المراقبة) للكشف عن الدفاعات المتجاوزة.</p>` },
        { id: "x800", title: "معمارية X.800", content: `<p><strong>الهجمات ← تُواجَه بـ ← الخدمات ← تُنفذ بواسطة ← الآليات.</strong></p><p><strong>الفئات الخمس لخدمات الأمن:</strong></p><div class="table-wrap"><table><thead><tr><th>الخدمة</th><th>الوصف</th></tr></thead><tbody><tr><td>المصادقة</td><td>تؤكد أن الكيان المتصل أو مصدر البيانات أصلي.</td></tr><tr><td>التحكم في الوصول</td><td>يمنع الاستخدام غير المصرح به لمورد.</td></tr><tr><td>سرية البيانات</td><td>تحمي البيانات من الإفصاح غير المصرح به.</td></tr><tr><td>سلامة البيانات</td><td>تؤكد أن البيانات كما أُرسلت، دون تغيير.</td></tr><tr><td>عدم الإنكار</td><td>يمنع إنكار رسالة مرسلة.</td></tr></tbody></table></div><p><strong>فئات آليات الأمن:</strong></p><div class="table-wrap"><table><tbody><tr><td><strong>محددة</strong></td><td>التشفير، التوقيع الرقمي، التحكم في الوصول، سلامة البيانات، تبادل المصادقة.</td></tr><tr><td><strong>منتشرة</strong></td><td>الوظائف الموثوقة، التسمية الأمنية، كشف الأحداث، سجل التدقيق الأمني.</td></tr></tbody></table></div><p><strong>مثال البريد الإلكتروني الآمن:</strong></p><div class="table-wrap"><table><thead><tr><th>هدف الأمن</th><th>خدمة X.800</th><th>الآلية</th></tr></thead><tbody><tr><td>المستلم فقط يقرأ</td><td>السرية</td><td>التشفير</td></tr><tr><td>التحقق من المرسل</td><td>المصادقة</td><td>التوقيع الرقمي / تبادل المصادقة</td></tr><tr><td>عدم التغيير أثناء النقل</td><td>السلامة</td><td>دالة تجزئة + توقيع</td></tr><tr><td>المرسل لا يستطيع الإنكار</td><td>عدم الإنكار</td><td>التوقيع الرقمي</td></tr><tr><td>التمرير المصرح فقط</td><td>التحكم في الوصول</td><td>قوائم التحكم في الوصول</td></tr></tbody></table></div>` },
        { id: "standards", title: "المعايير والأطر", content: `<div class="table-wrap"><table><thead><tr><th>المعيار/الإطار</th><th>الوصف</th></tr></thead><tbody><tr><td>ISO/IEC 27001</td><td>يحدد متطلبات نظام إدارة أمن المعلومات (27002 للضوابط، 27005 للمخاطر).</td></tr><tr><td>NIST CSF</td><td>ينظم الوظائف: التعرف، الحماية، الكشف، الاستجابة، التعافي.</td></tr><tr><td>ITU-T X.800</td><td>يحدد معمارية أمن OSI (الخدمات، الهجمات، الآليات).</td></tr><tr><td>GDPR</td><td>لائحة حماية البيانات الشخصية للاتحاد الأوروبي.</td></tr><tr><td>PCI DSS</td><td>متطلبات أمن معلومات البطاقات الائتمانية.</td></tr></tbody></table></div><p style="margin-top:12px">تشمل القواعد القطاعية HIPAA و SOC 2 والقوانين المحلية مثل القانون المصري 151. المعايير تحدد المفردات وتفرض النشر — لا تنفصل عن المهارة التقنية.</p>` }
    ]
};

/* ---------- 4. CASE STUDIES (20) ---------- */
const CASES = [{
        id: 1,
        difficulty: "easy",
        category: "CIA Triad",
        scenario: { en: "A hospital employee shares a patient's full medical history with a friend outside the hospital.", ar: "موظف في مستشفى يشارك تاريخ مريض طبي كامل مع صديق خارج المستشفى." },
        question: { en: "Which element of the CIA triad was primarily violated?", ar: "أي عنصر من ثالوث CIA تم انتهاكه بشكل أساسي؟" },
        options: [{ en: "Confidentiality", ar: "السرية" }, { en: "Integrity", ar: "السلامة" }, { en: "Availability", ar: "التوافر" }, { en: "Non-repudiation", ar: "عدم الإنكار" }],
        correct: 0,
        explanation: { en: "Confidentiality ensures information is not disclosed to unauthorized entities. Sharing records with an outsider is unauthorized disclosure.", ar: "السرية تضمن عدم إفصاح المعلومات لكيانات غير مصرح لها. مشاركة السجلات مع شخص خارجي هو إفصاح غير مصرح به." },
        related: { en: "Explain the CIA triad.", ar: "شرح ثالوث CIA." }
    },
    {
        id: 2,
        difficulty: "easy",
        category: "CIA Triad",
        scenario: { en: "A hospital database is encrypted by ransomware. Doctors cannot access patient records during an emergency.", ar: "قاعدة بيانات مستشفى مشفّرة ببرامج فدية. الأطباء لا يستطيعون الوصول لسجلات المرضى في حالة طوارئ." },
        question: { en: "Which CIA element was primarily affected?", ar: "أي عنصر CIA تأثر بشكل أساسي؟" },
        options: [{ en: "Confidentiality", ar: "السرية" }, { en: "Integrity", ar: "السلامة" }, { en: "Availability", ar: "التوافر" }, { en: "Authenticity", ar: "الأصالة" }],
        correct: 2,
        explanation: { en: "Availability ensures timely access to systems and data. Ransomware locks systems, blocking authorized access.", ar: "التوافر يضمن الوصول في الوقت المناسب للأنظمة والبيانات. برامج الفدية تقفل الأنظمة، مما يمنع الوصول المصرح." },
        related: { en: "Explain the CIA triad.", ar: "شرح ثالوث CIA." }
    },
    {
        id: 3,
        difficulty: "medium",
        category: "CIA Triad",
        scenario: { en: "An attacker modifies the blood type field in a patient's electronic record from A+ to O-.", ar: "مهاجم يعدل حقل فصيلة الدم في السجل الإلكتروني للمريض من A+ إلى O-." },
        question: { en: "Which CIA element was violated?", ar: "أي عنصر CIA تم انتهاكه؟" },
        options: [{ en: "Availability", ar: "التوافر" }, { en: "Integrity", ar: "السلامة" }, { en: "Confidentiality", ar: "السرية" }, { en: "Accountability", ar: "المساءلة" }],
        correct: 1,
        explanation: { en: "Integrity ensures data is not altered without authorization or detection. Modifying blood type is unauthorized alteration.", ar: "السلامة تضمن عدم تعديل البيانات بدون تصريح أو كشف. تعديل فصيلة الدم هو تعديل غير مصرح به." },
        related: { en: "Explain the CIA triad.", ar: "شرح ثالوث CIA." }
    },
    {
        id: 4,
        difficulty: "medium",
        category: "Extended Objectives",
        scenario: { en: "A manager sends an email approving a $50,000 transfer. Later, he claims he never sent that email.", ar: "مدير يرسل بريداً يوافق على تحويل 50,000 دولار. لاحقاً يدّعي أنه لم يرسل ذلك البريد." },
        question: { en: "Which extended security objective is needed to prevent this denial?", ar: "أي هدف أمني موسع مطلوب لمنع هذا الإنكار؟" },
        options: [{ en: "Confidentiality", ar: "السرية" }, { en: "Non-repudiation", ar: "عدم الإنكار" }, { en: "Availability", ar: "التوافر" }, { en: "Least privilege", ar: "الحد الأدنى من الصلاحيات" }],
        correct: 1,
        explanation: { en: "Non-repudiation assures a party cannot deny having sent or received a message, typically enforced via digital signatures.", ar: "عدم الإنكار يضمن عدم قدرة طرف على إنكار إرسال أو استلام رسالة، ويُفرض عادةً بالتوقيعات الرقمية." },
        related: { en: "Explain extended security objectives.", ar: "شرح الأهداف الأمنية الموسعة." }
    },
    {
        id: 5,
        difficulty: "easy",
        category: "Extended Objectives",
        scenario: { en: "A banking app verifies the user's identity via a one-time code sent to their phone before allowing login.", ar: "تطبيق بنكي يتحقق من هوية المستخدم عبر رمز لمرة واحدة يُرسل لهاتفه قبل السماح بالدخول." },
        question: { en: "Which extended security objective is demonstrated?", ar: "أي هدف أمني موسع يظهر هنا؟" },
        options: [{ en: "Authenticity", ar: "الأصالة" }, { en: "Confidentiality", ar: "السرية" }, { en: "Availability", ar: "التوافر" }, { en: "Least privilege", ar: "الحد الأدنى من الصلاحيات" }],
        correct: 0,
        explanation: { en: "Authenticity verifies that a message, transaction, or party is genuine. The OTP proves the user's identity.", ar: "الأصالة تتحقق من أن الرسالة أو المعاملة أو الطرف أصلي. رمز OTP يثبت هوية المستخدم." },
        related: { en: "Explain extended security objectives.", ar: "شرح الأهداف الأمنية الموسعة." }
    },
    {
        id: 6,
        difficulty: "easy",
        category: "Threats/Vulns/Risks",
        scenario: { en: "A company uses outdated software with a known unpatched vulnerability.", ar: "شركة تستخدم برنامجاً قديماً بثغرة معروفة غير مصححة." },
        question: { en: "What best describes the unpatched software?", ar: "ما الوصف الأنسب للبرنامج غير المصحح؟" },
        options: [{ en: "A threat", ar: "تهديد" }, { en: "A vulnerability", ar: "ثغرة" }, { en: "A risk", ar: "مخاطرة" }, { en: "An attack", ar: "هجوم" }],
        correct: 1,
        explanation: { en: "A vulnerability is a weakness in design, implementation, or operation that could be exploited — like an unpatched bug.", ar: "الثغرة ضعف في التصميم أو التنفيذ أو التشغيل يمكن استغلاله — مثل خطأ غير مصحح." },
        related: { en: "Differentiate threats, vulnerabilities, risks, and attacks.", ar: "التفريق بين التهديدات والثغرات والمخاطر والهجمات." }
    },
    {
        id: 7,
        difficulty: "medium",
        category: "Threats/Vulns/Risks",
        scenario: { en: "A hacker knows about a company's unpatched server and plans to exploit it.", ar: "مهاجم يعلم بخادم شركة غير مصحح ويخطط لاستغلاله." },
        question: { en: "What is the hacker in this context?", ar: "ما هو المهاجم في هذا السياق؟" },
        options: [{ en: "A vulnerability", ar: "ثغرة" }, { en: "A threat", ar: "تهديد" }, { en: "A risk", ar: "مخاطرة" }, { en: "A policy", ar: "سياسة" }],
        correct: 1,
        explanation: { en: "A threat is a potential cause of an unwanted incident. The hacker (malicious actor aware of the bug) is the threat.", ar: "التهديد هو سبب محتمل لحادث غير مرغوب فيه. المهاجم (فاعل خبيث على علم بالخطأ) هو التهديد." },
        related: { en: "Differentiate threats, vulnerabilities, risks, and attacks.", ar: "التفريق بين التهديدات والثغرات والمخاطر والهجمات." }
    },
    {
        id: 8,
        difficulty: "easy",
        category: "Malware",
        scenario: { en: "A program copies itself and spreads to thousands of computers over the network without any user clicking.", ar: "برنامج ينسخ نفسه وينتشر لآلاف الحواسيب عبر الشبكة دون أي نقر من المستخدم." },
        question: { en: "What type of malware is this?", ar: "ما نوع البرمجية الخبيثة هذه؟" },
        options: [{ en: "Virus", ar: "فيروس" }, { en: "Worm", ar: "دودة" }, { en: "Trojan", ar: "حصان طروادة" }, { en: "Spyware", ar: "برنامج تجسس" }],
        correct: 1,
        explanation: { en: "Worms are standalone programs that self-replicate and spread autonomously — no human action required, unlike viruses.", ar: "الديدان برامج مستقلة تنسخ نفسها وتنتشر تلقائياً — دون حاجة لإجراء بشري، بخلاف الفيروسات." },
        related: { en: "Identify malware categories.", ar: "التعرف على فئات البرمجيات الخبيثة." }
    },
    {
        id: 9,
        difficulty: "medium",
        category: "Malware",
        scenario: { en: "An email attachment disguised as an invoice encrypts all files on the user's PC and demands Bitcoin.", ar: "مرفق بريد يتنكر كفاتورة يشفر كل ملفات جهاز المستخدم ويطلب بيتكوين." },
        question: { en: "What best describes this malware?", ar: "ما الوصف الأنسب لهذه البرمجية؟" },
        options: [{ en: "A worm", ar: "دودة" }, { en: "A rootkit", ar: "Rootkit" }, { en: "Ransomware payload", ar: "حملة برامج فدية" }, { en: "A botnet agent", ar: "وكيل Botnet" }],
        correct: 2,
        explanation: { en: "Ransomware is a payload that encrypts files/locks systems and demands payment. It is a payload, not a propagation method.", ar: "برامج الفدية حملة تشفر الملفات/تقفل الأنظمة وتطلب دفع. هي حملة وليست وسيلة انتشار." },
        related: { en: "Identify malware categories.", ar: "التعرف على فئات البرمجيات الخبيثة." }
    },
    {
        id: 10,
        difficulty: "easy",
        category: "Social Engineering",
        scenario: { en: "An attacker calls an employee pretending to be from IT support and asks for the password to 'fix a server issue'.", ar: "مهاجم يتصل بموظف متنكراً كدعم تقني ويطلب كلمة المرور 'لإصلاح مشكلة في الخادم'." },
        question: { en: "What type of attack is this?", ar: "ما نوع هذا الهجوم؟" },
        options: [{ en: "DDoS", ar: "DDoS" }, { en: "Social engineering (pretexting)", ar: "هندسة اجتماعية (ذرائع)" }, { en: "Packet sniffing", ar: "تنصت على الحزم" }, { en: "Zero-day exploit", ar: "استغلال Zero-day" }],
        correct: 1,
        explanation: { en: "Pretexting is fabricating a scenario to obtain access. The attacker invents an IT-support pretext to steal credentials.", ar: "الذرائع هي اختلاق سيناريو للحصول على وصول. المهاجم يختلق ذريعة دعم تقني لسرقة بيانات الاعتماد." },
        related: { en: "Identify social-engineering categories.", ar: "التعرف على فئات الهندسة الاجتماعية." }
    },
    {
        id: 11,
        difficulty: "medium",
        category: "Social Engineering",
        scenario: { en: "An executive receives an email that looks like it's from the CEO, asking urgently for a wire transfer to a new vendor.", ar: "مدير تنفيذي يستلم بريداً يبدو من المدير العام يطلب بشكل عاجل تحويلاً لمورّد جديد." },
        question: { en: "What type of attack is this?", ar: "ما نوع هذا الهجوم؟" },
        options: [{ en: "Phishing", ar: "تصيد" }, { en: "Spear phishing / Business Email Compromise", ar: "تصيد مستهدف / اختراق بريد الأعمال" }, { en: "Baiting", ar: "إغراء" }, { en: "Tailgating", ar: "تتبع" }],
        correct: 1,
        explanation: { en: "Spear phishing uses personalized info targeting a specific person. BEC is a form of spear phishing targeting executives.", ar: "التصيد المستهدف يستخدم معلومات شخصية لاستهداف شخص محدد. BEC شكل من التصيد المستهدف يستهدف المديرين." },
        related: { en: "Identify social-engineering categories.", ar: "التعرف على فئات الهندسة الاجتماعية." }
    },
    {
        id: 12,
        difficulty: "medium",
        category: "Passive vs Active",
        scenario: { en: "An attacker captures network traffic to analyze communication patterns without altering any packets.", ar: "مهاجم يلتقط حركة الشبكة لتحليل أنماط الاتصال دون تغيير أي حزم." },
        question: { en: "What type of attack is this?", ar: "ما نوع هذا الهجوم؟" },
        options: [{ en: "Active — modification", ar: "نشط — تعديل" }, { en: "Passive — traffic analysis", ar: "سلبي — تحليل حركة المرور" }, { en: "Active — DoS", ar: "نشط — حجب خدمة" }, { en: "Active — replay", ar: "نشط — إعادة تشغيل" }],
        correct: 1,
        explanation: { en: "Traffic analysis is a passive attack: observing without affecting system resources. Emphasis must be on prevention (e.g., encryption).", ar: "تحليل حركة المرور هجوم سلبي: مراقبة دون التأثير على موارد النظام. التركيز على المنع (مثل التشفير)." },
        related: { en: "Classify passive vs. active attacks.", ar: "تصنيف الهجمات السلبية والنشطة." }
    },
    {
        id: 13,
        difficulty: "medium",
        category: "Passive vs Active",
        scenario: { en: "An attacker intercepts a valid authentication packet and re-sends it later to impersonate the user.", ar: "مهاجم يعترض حزمة مصادقة صالحة ويعيد إرسالها لاحقاً لانتحال هوية المستخدم." },
        question: { en: "What type of attack is this?", ar: "ما نوع هذا الهجوم؟" },
        options: [{ en: "Passive — sniffing", ar: "سلبي — تنصت" }, { en: "Active — replay", ar: "نشط — إعادة تشغيل" }, { en: "Passive — traffic analysis", ar: "سلبي — تحليل حركة المرور" }, { en: "Active — DoS", ar: "نشط — حجب خدمة" }],
        correct: 1,
        explanation: { en: "Replay is an active attack that alters system operation (injection). Active attacks emphasize detection and recovery.", ar: "إعادة التشغيل هجوم نشط يعدل تشغيل النظام (حقن). الهجمات النشطة تركز على الكشف والاسترداد." },
        related: { en: "Classify passive vs. active attacks.", ar: "تصنيف الهجمات السلبية والنشطة." }
    },
    {
        id: 14,
        difficulty: "easy",
        category: "Threat Actors",
        scenario: { en: "A teenager downloads a free hacking tool and defaces a small website for fun.", ar: "مراهق يحمّل أداة اختراق مجانية ويشوه موقعاً صغيراً للمتعة." },
        question: { en: "Which threat actor category does this fit?", ar: "أي فئة من الفاعلين الخبثاء تناسب هذا؟" },
        options: [{ en: "Nation-state", ar: "دولة قومية" }, { en: "Script kiddie", ar: "Script kiddie" }, { en: "Hacktivist", ar: "Hacktivist" }, { en: "Insider", ar: "داخلي" }],
        correct: 1,
        explanation: { en: "Script kiddies use existing tools driven by curiosity; they have limited skill.", ar: "Script kiddies يستخدمون أدوات جاهزة بدافع الفضول؛ مهارتهم محدودة." },
        related: { en: "Identify threat actors.", ar: "التعرف على الفاعلين الخبثاء." }
    },
    {
        id: 15,
        difficulty: "medium",
        category: "Threat Actors",
        scenario: { en: "An employee with legitimate admin access intentionally deletes sensitive files after being fired.", ar: "موظف لديه وصول إداري شرعي يحذف ملفات حساسة عمداً بعد طرده." },
        question: { en: "What type of insider threat is this?", ar: "ما نوع التهديد الداخلي هذا؟" },
        options: [{ en: "Negligent insider", ar: "داخلي مهمل" }, { en: "Malicious insider", ar: "داخلي خبيث" }, { en: "Script kiddie", ar: "Script kiddie" }, { en: "Hacktivist", ar: "Hacktivist" }],
        correct: 1,
        explanation: { en: "Malicious insiders deliberately misuse legitimate access, countered by least privilege. Negligent insiders are unintentional and countered by training.", ar: "الداخليون الخبثاء يسيئون عمداً استخدام الوصول الشرعي، ويُواجَهون بالحد الأدنى من الصلاحيات. المهملون غير متعمدين ويُواجَهون بالتدريب." },
        related: { en: "Differentiate malicious vs. negligent insiders.", ar: "التفريق بين الداخلي الخبيث والمهمل." }
    },
    {
        id: 16,
        difficulty: "hard",
        category: "X.800",
        scenario: { en: "A messaging app needs to guarantee that only the intended recipient can read the message.", ar: "تطبيق مراسلة يحتاج لضمان أن المستلم المقصود فقط يمكنه قراءة الرسالة." },
        question: { en: "Which X.800 service and mechanism best fit?", ar: "أي خدمة وآلية X.800 تناسب أكثر؟" },
        options: [{ en: "Authentication + Digital Signature", ar: "المصادقة + التوقيع الرقمي" }, { en: "Data Confidentiality + Encipherment", ar: "سرية البيانات + التشفير" }, { en: "Non-repudiation + Access Control", ar: "عدم الإنكار + التحكم في الوصول" }, { en: "Integrity + Audit Trail", ar: "السلامة + سجل التدقيق" }],
        correct: 1,
        explanation: { en: "X.800 maps Data Confidentiality (protect from unauthorized disclosure) to Encipherment (encryption).", ar: "X.800 يربط سرية البيانات (الحماية من الإفصاح غير المصرح) بالتشفير." },
        related: { en: "Explain ITU-T X.800 architecture.", ar: "شرح معمارية ITU-T X.800." }
    },
    {
        id: 17,
        difficulty: "hard",
        category: "X.800",
        scenario: { en: "An email security system must ensure the sender cannot later deny sending a message.", ar: "نظام أمن بريد يجب أن يضمن أن المرسل لا يمكنه لاحقاً إنكار إرسال الرسالة." },
        question: { en: "Which X.800 service + mechanism applies?", ar: "أي خدمة وآلية X.800 تنطبق؟" },
        options: [{ en: "Confidentiality + Encipherment", ar: "السرية + التشفير" }, { en: "Non-repudiation + Digital Signature", ar: "عدم الإنكار + التوقيع الرقمي" }, { en: "Availability + Access Control", ar: "التوافر + التحكم في الوصول" }, { en: "Authentication + Hash", ar: "المصادقة + تجزئة" }],
        correct: 1,
        explanation: { en: "Non-repudiation is implemented via Digital Signature (specific mechanism) per X.800.", ar: "عدم الإنكار يُنفذ عبر التوقيع الرقمي (آلية محددة) وفق X.800." },
        related: { en: "Explain ITU-T X.800 architecture.", ar: "شرح معمارية ITU-T X.800." }
    },
    {
        id: 18,
        difficulty: "medium",
        category: "Design Principles",
        scenario: { en: "A company uses a single admin account with full privileges for all IT staff — including interns.", ar: "شركة تستخدم حساب مدير واحد بصلاحيات كاملة لكل طاقم تقنية المعلومات — بما في ذلك المتدربين." },
        question: { en: "Which principle is being violated?", ar: "أي مبدأ يتم انتهاكه؟" },
        options: [{ en: "Open Design", ar: "التصميم المفتوح" }, { en: "Least Privilege", ar: "الحد الأدنى من الصلاحيات" }, { en: "Complete Mediation", ar: "الوساطة الكاملة" }, { en: "Fail-Safe Defaults", ar: "الافتراضات الآمنة عند الفشل" }],
        correct: 1,
        explanation: { en: "Least Privilege: every user should have only the minimum permissions necessary. Interns should not have full admin rights.", ar: "الحد الأدنى من الصلاحيات: يجب أن يمتلك كل مستخدم الحد الأدنى من الأذونات اللازمة فقط. المتدربون لا يجب أن يملكوا حقوق مدير كاملة." },
        related: { en: "Explain Least Privilege.", ar: "شرح الحد الأدنى من الصلاحيات." }
    },
    {
        id: 19,
        difficulty: "easy",
        category: "Legal/Ethics",
        scenario: { en: "A student hacks his university's grading system 'just to show it's insecure', without permission.", ar: "طالب يخترق نظام درجات جامعته 'فقط ليثبت أنه غير آمن'، دون إذن." },
        question: { en: "Under Egypt's Law 175/2018, how is this classified?", ar: "وفق القانون المصري 175/2018، كيف يُصنَّف هذا؟" },
        options: [{ en: "Ethical hacking", ar: "اختراق أخلاقي" }, { en: "A criminal offense", ar: "جريمة جنائية" }, { en: "Allowed for students", ar: "مسموح للطلاب" }, { en: "A minor violation", ar: "مخالفة بسيطة" }],
        correct: 1,
        explanation: { en: "Unauthorized access is a criminal offense under Egypt's Anti-Cyber and Information Technology Crimes Law (Law No. 175 of 2018). Ethical hacking requires explicit written permission.", ar: "الوصول غير المصرح به جريمة جنائية وفق قانون مكافحة جرائم تقنية المعلومات المصري (قانون 175 لسنة 2018). الاختراق الأخلاقي يتطلب إذناً كتابياً صريحاً." },
        related: { en: "Explain legal and ethical considerations.", ar: "شرح الاعتبارات القانونية والأخلاقية." }
    },
    {
        id: 20,
        difficulty: "hard",
        category: "APT/Attack Chain",
        scenario: { en: "An attacker spends months inside a government network, moving slowly and quietly exfiltrating small amounts of data daily.", ar: "مهاجم يقضي شهوراً داخل شبكة حكومية، يتحرك ببطء وهدوء ويسرّب كميات صغيرة يومياً." },
        question: { en: "What best describes this attack?", ar: "ما الوصف الأنسب لهذا الهجوم؟" },
        options: [{ en: "A DDoS attack", ar: "هجوم DDoS" }, { en: "Advanced Persistent Threat (APT)", ar: "تهديد متقدم مستمر (APT)" }, { en: "A single phishing email", ar: "بريد تصيد واحد" }, { en: "A script kiddie defacement", ar: "تشويه من Script kiddie" }],
        correct: 1,
        explanation: { en: "APT is a prolonged, targeted attack that remains undetected to exfiltrate data gradually.", ar: "APT هجوم مطول وموجه يبقى غير مكتشف لتسريب البيانات تدريجياً." },
        related: { en: "Define APT and attack chain.", ar: "تعريف APT وسلسلة الهجوم." }
    }
];

/* ---------- 5. QUIZ (15) ---------- */
const QUIZ = [{
        id: 1,
        q: { en: "Which of the following is the broadest term encompassing information, computer, and network security?", ar: "أي مما يلي هو المصطلح الأشمل الذي يشمل أمن المعلومات والحاسوب والشبكات؟" },
        opts: [{ en: "Information Security", ar: "أمن المعلومات" }, { en: "Computer Security", ar: "أمن الحاسوب" }, { en: "Cybersecurity", ar: "الأمن السيبراني" }, { en: "Network Security", ar: "أمن الشبكات" }],
        correct: 2,
        exp: { en: "Cybersecurity is the broadest term, addressing critical infrastructure, user safety, and geopolitical dimensions.", ar: "الأمن السيبراني هو المصطلح الأشمل، ويتناول البنية التحتية الحيوية وسلامة المستخدم والأبعاد الجيوسياسية." }
    },
    {
        id: 2,
        q: { en: "True or False: 'Availability' in the CIA triad ensures data is not altered by unauthorized parties.", ar: "صح أم خطأ: 'التوافر' في ثالوث CIA يضمن عدم تعديل البيانات من قبل أطراف غير مصرح لها." },
        opts: [{ en: "True", ar: "صح" }, { en: "False", ar: "خطأ" }],
        correct: 1,
        exp: { en: "False. Availability ensures timely access to systems and data. Integrity ensures data is not altered without authorization.", ar: "خطأ. التوافر يضمن الوصول في الوقت المناسب للأنظمة والبيانات. السلامة تضمن عدم تعديل البيانات بدون تصريح." }
    },
    {
        id: 3,
        q: { en: "A weakness in a system that could be exploited is called a:", ar: "الضعف في نظام يمكن استغلاله يُسمى:" },
        opts: [{ en: "Threat", ar: "تهديد" }, { en: "Vulnerability", ar: "ثغرة" }, { en: "Risk", ar: "مخاطرة" }, { en: "Attack", ar: "هجوم" }],
        correct: 1,
        exp: { en: "A vulnerability is a weakness in design, implementation, or operation that could be exploited.", ar: "الثغرة ضعف في التصميم أو التنفيذ أو التشغيل يمكن استغلاله." }
    },
    {
        id: 4,
        q: { en: "Which of the following is a PASSIVE attack?", ar: "أي مما يلي هجوم سلبي؟" },
        opts: [{ en: "Masquerade", ar: "تمويه" }, { en: "Replay", ar: "إعادة تشغيل" }, { en: "Traffic analysis", ar: "تحليل حركة المرور" }, { en: "Denial of Service", ar: "حجب الخدمة" }],
        correct: 2,
        exp: { en: "Passive attacks (release of message contents, traffic analysis) only observe. Masquerade, replay, and DoS are active.", ar: "الهجمات السلبية (الكشف عن محتوى الرسالة، تحليل حركة المرور) تراقب فقط. التمويه وإعادة التشغيل وDoS نشطة." }
    },
    {
        id: 5,
        q: { en: "Which malware type requires human action to propagate?", ar: "أي نوع من البرمجيات الخبيثة يتطلب إجراءً بشرياً للانتشار؟" },
        opts: [{ en: "Worm", ar: "دودة" }, { en: "Virus", ar: "فيروس" }, { en: "Rootkit", ar: "Rootkit" }, { en: "Botnet agent", ar: "وكيل Botnet" }],
        correct: 1,
        exp: { en: "Viruses need human action to propagate; worms spread autonomously. Ransomware is a payload, not a propagation method.", ar: "الفيروسات تحتاج إجراءً بشرياً للانتشار؛ الديدان تنتشر تلقائياً. برامج الفدية حملة وليست وسيلة انتشار." }
    },
    {
        id: 6,
        q: { en: "Which framework organizes functions as: Identify, Protect, Detect, Respond, Recover?", ar: "أي إطار ينظم الوظائف كالتالي: التعرف، الحماية، الكشف، الاستجابة، التعافي؟" },
        opts: [{ en: "ISO/IEC 27001", ar: "ISO/IEC 27001" }, { en: "NIST CSF", ar: "NIST CSF" }, { en: "ITU-T X.800", ar: "ITU-T X.800" }, { en: "PCI DSS", ar: "PCI DSS" }],
        correct: 1,
        exp: { en: "NIST CSF organizes functions into Identify, Protect, Detect, Respond, Recover.", ar: "NIST CSF ينظم الوظائف في: التعرف، الحماية، الكشف، الاستجابة، التعافي." }
    },
    {
        id: 7,
        q: { en: "Which X.800 mechanism is classified as PERVASIVE?", ar: "أي آلية X.800 تُصنف كـ 'منتشرة'؟" },
        opts: [{ en: "Encipherment", ar: "التشفير" }, { en: "Digital Signature", ar: "التوقيع الرقمي" }, { en: "Security audit trail", ar: "سجل التدقيق الأمني" }, { en: "Access control", ar: "التحكم في الوصول" }],
        correct: 2,
        exp: { en: "Pervasive mechanisms: trusted functionality, security label, event detection, security audit trail. The others are specific mechanisms.", ar: "الآليات المنتشرة: الوظائف الموثوقة، التسمية الأمنية، كشف الأحداث، سجل التدقيق الأمني. الباقي آليات محددة." }
    },
    {
        id: 8,
        q: { en: "Which principle states: 'Security must not depend on design secrecy, only on key/credential secrecy'?", ar: "أي مبدأ ينص: 'الأمن لا يعتمد على سرية التصميم، فقط على سرية المفتاح/بيانات الاعتماد'؟" },
        opts: [{ en: "Fail-Safe Defaults", ar: "الافتراضات الآمنة عند الفشل" }, { en: "Open Design", ar: "التصميم المفتوح" }, { en: "Complete Mediation", ar: "الوساطة الكاملة" }, { en: "Least Common Mechanism", ar: "الحد الأدنى من الآلية المشتركة" }],
        correct: 1,
        exp: { en: "Open Design: security must not depend on design secrecy, only on key/credential secrecy.", ar: "التصميم المفتوح: الأمن لا يعتمد على سرية التصميم، فقط على سرية المفتاح/بيانات الاعتماد." }
    },
    {
        id: 9,
        q: { en: "Which scenario best describes 'tailgating'?", ar: "أي سيناريو يصف 'التتبع'؟" },
        opts: [{ en: "Sending fake invoices by email", ar: "إرسال فواتير مزيفة بالبريد" }, { en: "Following an authorized person through a secure door", ar: "اتباع شخص مصرح عبر باب آمن" }, { en: "Leaving an infected USB in a parking lot", ar: "ترك USB مصاب في موقف سيارات" }, { en: "Calling an employee pretending to be IT", ar: "الاتصال بموظف متنكراً كدعم تقني" }],
        correct: 1,
        exp: { en: "Tailgating = physical access by following an authorized person. Baiting = leaving a lure (e.g., USB). Pretexting = fabricating a scenario.", ar: "التتبع = وصول مادي باتباع شخص مصرح. الإغراء = ترك طُعم (مثل USB). الذرائع = اختلاق سيناريو." }
    },
    {
        id: 10,
        q: { en: "The 7-step attack chain ends with which step?", ar: "سلسلة الهجوم ذات السبع خطوات تنتهي بأي خطوة؟" },
        opts: [{ en: "Installation", ar: "التثبيت" }, { en: "Command and Control", ar: "التحكم والسيطرة" }, { en: "Actions on Objectives", ar: "الإجراءات على الأهداف" }, { en: "Exploitation", ar: "الاستغلال" }],
        correct: 2,
        exp: { en: "Steps: Reconnaissance → Weaponization → Delivery → Exploitation → Installation → Command and Control → Actions on Objectives.", ar: "الخطوات: الاستطلاع ← التسليح ← التسليم ← الاستغلال ← التثبيت ← التحكم والسيطرة ← الإجراءات على الأهداف." }
    },
    {
        id: 11,
        q: { en: "Which law criminalizes unauthorized access to information systems in Egypt?", ar: "أي قانون يجرّم الوصول غير المصرح به لأنظمة المعلومات في مصر؟" },
        opts: [{ en: "Egypt Law 151", ar: "القانون المصري 151" }, { en: "Egypt Law 175 of 2018", ar: "القانون المصري 175 لسنة 2018" }, { en: "GDPR", ar: "GDPR" }, { en: "HIPAA", ar: "HIPAA" }],
        correct: 1,
        exp: { en: "Egypt's Anti-Cyber and Information Technology Crimes Law (Law No. 175 of 2018) criminalizes unauthorized access to information systems.", ar: "قانون مكافحة جرائم تقنية المعلومات المصري (قانون 175 لسنة 2018) يجرّم الوصول غير المصرح به لأنظمة المعلومات." }
    },
    {
        id: 12,
        q: { en: "A hacker group defaces websites of companies they consider unethical. What threat actor are they?", ar: "مجموعة قراصنة يشوهون مواقع شركات يعتبرونها غير أخلاقية. ما فاعل التهديد؟" },
        opts: [{ en: "Script kiddies", ar: "Script kiddies" }, { en: "Hacktivists", ar: "Hacktivists" }, { en: "Nation-states", ar: "دول قومية" }, { en: "Insiders", ar: "داخليون" }],
        correct: 1,
        exp: { en: "Hacktivists are driven by ideological motives. Cybercriminals seek financial gain; nation-states conduct espionage.", ar: "Hacktivists مدفوعون بدوافع أيديولوجية. المجرمون السيبرانيون يبحثون عن مكسب مالي؛ الدول القومية تقوم بالتجسس." }
    },
    {
        id: 13,
        q: { en: "What does 'Defense in Depth' mean?", ar: "ماذا يعني 'الدفاع في العمق'؟" },
        opts: [{ en: "Using one very strong firewall", ar: "استخدام جدار ناري واحد قوي جداً" }, { en: "Layering multiple independent mechanisms so failure of one doesn't compromise all", ar: "تطبيق طبقات متعددة مستقلة بحيث لا يؤدي فشل طبقة لاختراق كامل" }, { en: "Encrypting all data at rest", ar: "تشفير كل البيانات المخزنة" }, { en: "Training users once per year", ar: "تدريب المستخدمين مرة سنوياً" }],
        correct: 1,
        exp: { en: "Defense in Depth layers multiple independent mechanisms so failure of one layer does not result in complete compromise.", ar: "الدفاع في العمق يطبّق طبقات متعددة مستقلة بحيث لا يؤدي فشل طبقة واحدة إلى اختراق كامل." }
    },
    {
        id: 14,
        q: { en: "Which of the following is NOT a category in the X.800 five security services?", ar: "أي مما يلي ليس فئة من الخدمات الأمنية الخمس في X.800؟" },
        opts: [{ en: "Authentication", ar: "المصادقة" }, { en: "Data Confidentiality", ar: "سرية البيانات" }, { en: "Availability", ar: "التوافر" }, { en: "Non-repudiation", ar: "عدم الإنكار" }],
        correct: 2,
        exp: { en: "X.800's five services: Authentication, Access Control, Data Confidentiality, Data Integrity, Non-repudiation. Availability is not one of the five (it's part of the CIA triad).", ar: "خدمات X.800 الخمس: المصادقة، التحكم في الوصول، سرية البيانات، سلامة البيانات، عدم الإنكار. التوافر ليس من الخمس (جزء من ثالوث CIA)." }
    },
    {
        id: 15,
        q: { en: "A short, small software update from a trusted vendor is compromised to install malware. What type of incident is this?", ar: "تحديث برمجي قصير من مورّد موثوق يتم اختراقه لتثبيت برمجية خبيثة. ما نوع الحادث؟" },
        opts: [{ en: "Phishing", ar: "تصيد" }, { en: "Supply-chain compromise", ar: "اختراق سلسلة التوريد" }, { en: "DDoS", ar: "DDoS" }, { en: "Tailgating", ar: "تتبع" }],
        correct: 1,
        exp: { en: "This matches the 2020 supply-chain compromise incident: compromise of a trusted software update mechanism.", ar: "هذا يطابق حادث اختراق سلسلة التوريد 2020: اختراق آلية تحديث برمجي موثوقة." }
    }
];

/* ---------- 6. LANGUAGE ---------- */
function applyLang() {
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.fontFamily = state.lang === 'ar' ? 'var(--font-ar)' : 'var(--font-en)';
    $('#langLabel').textContent = state.lang === 'en' ? 'AR' : 'EN';
    $$('[data-key]').forEach(el => { el.textContent = t(el.dataset.key); });
    $$('[data-key-ph]').forEach(el => { el.placeholder = t(el.dataset.keyPh); });
    renderSummary();
    renderCases();
    renderQuizModes();
    renderInfo();
    localStorage.setItem('eg-lang', state.lang);
}
$('#langBtn').addEventListener('click', () => {
    state.lang = state.lang === 'en' ? 'ar' : 'en';
    applyLang();
    showToast(t('toastLang'));
});

/* ---------- 7. THEME ---------- */
function applyTheme() {
    document.body.dataset.theme = state.theme;
    $('#themeBtn').textContent = state.theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('eg-theme', state.theme);
}
$('#themeBtn').addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    showToast(t('toastTheme'));
});

/* ---------- 8. TOAST ---------- */
let toastTimer;

function showToast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

/* ---------- 9. NAVIGATION ---------- */
$('#hamburger').addEventListener('click', () => $('#mobileMenu').classList.toggle('open'));
$$('.mobile-menu a').forEach(a => a.addEventListener('click', () => $('#mobileMenu').classList.remove('open')));

window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const p = (window.scrollY / h) * 100;
    $('#scroll-progress').style.width = p + '%';
    const btn = $('#scroll-top');
    if (window.scrollY > 400) btn.classList.add('show');
    else btn.classList.remove('show');
    // active link
    const sections = ['home', 'summary', 'cases', 'quiz', 'info'];
    let current = 'home';
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });
    $$('.nav-links a, .mobile-menu a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
});
$('#scroll-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ---------- 10. REVEAL ---------- */
function initReveal() {
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    $$('.reveal').forEach(el => io.observe(el));
}

/* ---------- 11. SUMMARY RENDER ---------- */
function renderSummary() {
    const wrap = $('#accordionWrap');
    const data = SUMMARY[state.lang] || SUMMARY.en;
    const prevOpen = new Set($$('.accordion.open').map(a => a.dataset.id));
    wrap.innerHTML = data.map((s, i) => `
    <div class="accordion" data-id="${s.id}">
      <div class="accordion-header">
        <span class="num">${String(i + 1).padStart(2, '0')}</span>
        <span class="title">${s.title}</span>
        <span class="chev">▼</span>
      </div>
      <div class="accordion-body">
        <div class="accordion-body-inner">${s.content}</div>
      </div>
    </div>
  `).join('');

    $$('.accordion').forEach(acc => {
        const header = acc.querySelector('.accordion-header');
        const body = acc.querySelector('.accordion-body');
        if (prevOpen.has(acc.dataset.id)) {
            acc.classList.add('open');
            body.style.maxHeight = body.scrollHeight + 'px';
        }
        header.addEventListener('click', () => {
            const isOpen = acc.classList.toggle('open');
            body.style.maxHeight = isOpen ? body.scrollHeight + 'px' : '0px';
            // animate progress bars
            if (isOpen) {
                acc.querySelectorAll('.bar span').forEach(b => { b.style.width = b.dataset.w || b.style.width; });
            }
        });
    });
}

// Search
$('#summarySearch').addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    $$('.accordion').forEach(acc => {
        const txt = acc.textContent.toLowerCase();
        acc.classList.toggle('hidden', q && !txt.includes(q));
    });
});

/* ---------- 12. CASE STUDIES ---------- */
let caseIdx = 0;
let caseAnswers = JSON.parse(localStorage.getItem('eg-case-answers') || '{}');

function renderCases() {
    const root = $('#caseRoot');
    if (caseIdx >= CASES.length) { renderCaseResult(); return; }
    const c = CASES[caseIdx];
    const answered = caseAnswers[c.id];
    const lang = state.lang;

    root.innerHTML = `
    <div class="case-shell">
      <div class="case-top">
        <div class="case-progress">${lang === 'en' ? 'Case' : 'الحالة'} ${caseIdx + 1} / ${CASES.length}</div>
        <div class="case-badges">
          <span class="badge badge-${c.difficulty}">${c.difficulty}</span>
          <span class="badge badge-cat">${c.category}</span>
        </div>
      </div>
      <div class="case-body">
        <div class="scenario-box">
          <span class="lbl">${t('caseScenario')}</span>
          ${c.scenario[lang]}
        </div>
        <div class="case-question">${t('caseQuestion')}: ${c.question[lang]}</div>
        <div class="answer-list" id="caseAnswers">
          ${c.options.map((o, i) => `
            <button class="answer-btn ${answered !== undefined ? (i === c.correct ? 'correct' : (i === answered ? 'wrong' : '')) : ''}"
                    data-i="${i}" ${answered !== undefined ? 'disabled' : ''}>
              <span class="letter">${String.fromCharCode(65 + i)}</span>
              <span>${o[lang]}</span>
            </button>
          `).join('')}
        </div>
        <div class="explain ${answered !== undefined ? 'show' : ''}" id="caseExplain">
          <strong>${t('caseExplanation')}:</strong> ${c.explanation[lang]}
          <span class="related">📌 ${t('caseRelated')}: ${c.related[lang]}</span>
        </div>
      </div>
      <div class="case-nav">
        <button class="btn btn-outline" id="casePrev" ${caseIdx === 0 ? 'disabled' : ''}>← ${t('casePrev')}</button>
        <button class="btn btn-primary" id="caseNext">
          ${caseIdx === CASES.length - 1 ? t('caseFinish') : t('caseNext') + ' →'}
        </button>
      </div>
    </div>
  `;

    $$('#caseAnswers .answer-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const i = +btn.dataset.i;
            caseAnswers[c.id] = i;
            localStorage.setItem('eg-case-answers', JSON.stringify(caseAnswers));
            renderCases();
        });
    });

    const prev = $('#casePrev'); if (prev) prev.addEventListener('click', () => { if (caseIdx > 0) { caseIdx--; renderCases(); } });
    const next = $('#caseNext'); if (next) next.addEventListener('click', () => {
        if (caseAnswers[c.id] === undefined) { showToast(lang === 'en' ? 'Please answer first.' : 'أجب أولاً من فضلك.'); return; }
        caseIdx++;
        renderCases();
    });
}

function renderCaseResult() {
    const total = CASES.length;
    const answered = CASES.filter(c => caseAnswers[c.id] !== undefined);
    const correct = CASES.filter(c => caseAnswers[c.id] === c.correct).length;
    const pct = Math.round((correct / total) * 100);
    const perf = pct >= 90 ? { k: 'perfExcellent', c: 'excellent' } : pct >= 80 ? { k: 'perfVeryGood', c: 'verygood' } : pct >= 70 ? { k: 'perfGood', c: 'good' } : pct >= 50 ? { k: 'perfNeeds', c: 'needs' } : { k: 'perfKeep', c: 'keep' };
    const lang = state.lang;

    $('#caseRoot').innerHTML = `
    <div class="case-shell">
      <div class="result-card">
        <div class="ring">
          <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" stroke="var(--border)" stroke-width="8" fill="none"/>
          <circle cx="50" cy="50" r="44" stroke="var(--primary)" stroke-width="8" fill="none" stroke-dasharray="${2 * Math.PI * 44}" stroke-dashoffset="${2 * Math.PI * 44 * (1 - pct / 100)}" stroke-linecap="round"/></svg>
          <div class="num">${pct}%</div>
        </div>
        <h3>${t('caseResultTitle')}</h3>
        <span class="perf perf-${perf.c}">${t(perf.k)}</span>
        <div class="stats">
          <div class="stat"><div class="val">${correct}/${total}</div><div class="lbl">${t('caseScore')}</div></div>
          <div class="stat"><div class="val" style="color:var(--success)">${correct}</div><div class="lbl">${t('caseCorrect')}</div></div>
          <div class="stat"><div class="val" style="color:var(--danger)">${total - correct}</div><div class="lbl">${t('caseIncorrect')}</div></div>
        </div>
        <div class="result-actions">
          <button class="btn btn-outline" id="caseReview">${t('caseReview')}</button>
          <button class="btn btn-primary" id="caseRestart">${t('caseRestart')}</button>
        </div>
        <div id="caseReviewList" style="margin-top:20px;text-align:start;display:none"></div>
      </div>
    </div>
  `;
    $('#caseReview').addEventListener('click', () => {
        const list = $('#caseReviewList');
        if (list.style.display === 'block') { list.style.display = 'none'; return; }
        list.style.display = 'block';
        list.innerHTML = CASES.map(c => {
            const ua = caseAnswers[c.id];
            const ok = ua === c.correct;
            return `<div class="review-item">
        <div class="tag ${ok ? 'ok' : 'bad'}">${ok ? '✓' : '✗'} ${lang === 'en' ? 'Case' : 'الحالة'} ${c.id}</div>
        <div style="margin-top:6px"><strong>${c.question[lang]}</strong></div>
        <div style="margin-top:6px;font-size:.84rem;color:var(--muted)">
          ${lang === 'en' ? 'Your answer' : 'إجابتك'}: ${ua !== undefined ? c.options[ua][lang] : '—'} · 
          ${lang === 'en' ? 'Correct' : 'الصحيح'}: ${c.options[c.correct][lang]}
        </div>
      </div>`;
        }).join('');
    });
    $('#caseRestart').addEventListener('click', () => {
        caseIdx = 0; caseAnswers = {}; localStorage.removeItem('eg-case-answers'); renderCases();
    });
}

/* ---------- 13. QUIZ ---------- */
let quizMode = null;
let quizOrder = [];
let quizIdx = 0;
let quizAnswers = {};

function renderQuizModes() {
    if (quizMode) return;
    const lang = state.lang;
    $('#quizRoot').innerHTML = `
    <div class="quiz-modes">
      <div class="mode-card" data-mode="practice">
        <div class="mode-icon">📖</div>
        <h4>${t('quizPractice')}</h4>
        <p>${t('quizPracticeDesc')}</p>
      </div>
      <div class="mode-card" data-mode="exam">
        <div class="mode-icon">📝</div>
        <h4>${t('quizExam')}</h4>
        <p>${t('quizExamDesc')}</p>
      </div>
    </div>
  `;
    $$('.mode-card').forEach(c => c.addEventListener('click', () => startQuiz(c.dataset.mode)));
}

function startQuiz(mode) {
    quizMode = mode;
    quizOrder = QUIZ.map((_, i) => i).sort(() => Math.random() - 0.5);
    quizIdx = 0; quizAnswers = {};
    renderQuiz();
}

function renderQuiz(){
  if (quizIdx >= QUIZ.length) { renderQuizResult(); return; }
  const q = QUIZ[quizOrder[quizIdx]];
  const lang = state.lang;
  const userAns = quizAnswers[q.id];
  
  // التعديل هنا: التغذية الراجعة بتظهر لو المستخدم جاوب، في أي وضع
  const showFeedback = userAns !== undefined;
  const pct = ((quizIdx+1)/QUIZ.length)*100;

  $('#quizRoot').innerHTML = `
    <div class="quiz-shell">
      <div class="quiz-card">
        <div class="quiz-top">
          <div class="quiz-progress-wrap">
            <div class="quiz-progress-text">${lang==='en'?'Question':'سؤال'} ${quizIdx+1} / ${QUIZ.length} · ${quizMode==='practice'?t('quizPractice'):t('quizExam')}</div>
            <div class="quiz-bar"><span style="width:${pct}%"></span></div>
          </div>
        </div>
        <div class="quiz-q">${q.q[lang]}</div>
        <div class="answer-list" id="quizAnswers">
          ${q.opts.map((o,i)=>{
            let cls = '';
            if (showFeedback) {
              if (i === q.correct) cls = 'correct';
              else if (i === userAns) cls = 'wrong';
            }
            return `<button class="answer-btn ${cls}" data-i="${i}" ${showFeedback?'disabled':''}>
              <span class="letter">${q.opts.length===2?(i===0?'T':'F'):String.fromCharCode(65+i)}</span>
              <span>${o[lang]}</span>
            </button>`;
          }).join('')}
        </div>
        ${showFeedback ? `<div class="explain show"><strong>${t('caseExplanation')}:</strong> ${q.exp[lang]}</div>` : ''}
        <div class="quiz-footer">
          <button class="btn btn-outline" id="quizPrev" ${quizIdx===0?'disabled':''}>← ${t('quizPrev')}</button>
          <button class="btn btn-primary" id="quizNext">
            ${quizIdx===QUIZ.length-1?t('quizFinish'):t('quizNext')+' →'}
          </button>
        </div>
      </div>
    </div>
  `;

  $$('#quizAnswers .answer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      quizAnswers[q.id] = +btn.dataset.i;
      renderQuiz(); // إعادة الرسم عشان تظهر الإجابة الصح فوراً
    });
  });
  const prev = $('#quizPrev'); if (prev) prev.addEventListener('click', () => { if (quizIdx>0){quizIdx--; renderQuiz();} });
  const next = $('#quizNext'); if (next) next.addEventListener('click', () => {
    if (quizMode === 'exam' && quizIdx === QUIZ.length-1) {
      const unanswered = QUIZ.filter(x => quizAnswers[x.id] === undefined).length;
      if (unanswered > 0 && !confirm(t('quizConfirmFinish'))) return;
    }
    quizIdx++;
    renderQuiz();
  });
}
function renderQuizResult() {
    const lang = state.lang;
    const correct = QUIZ.filter(q => quizAnswers[q.id] === q.correct).length;
    const unanswered = QUIZ.filter(q => quizAnswers[q.id] === undefined).length;
    const incorrect = QUIZ.length - correct - unanswered;
    const pct = Math.round((correct / QUIZ.length) * 100);
    const perf = pct >= 90 ? { k: 'perfExcellent', c: 'excellent' } : pct >= 80 ? { k: 'perfVeryGood', c: 'verygood' } : pct >= 70 ? { k: 'perfGood', c: 'good' } : pct >= 50 ? { k: 'perfNeeds', c: 'needs' } : { k: 'perfKeep', c: 'keep' };

    $('#quizRoot').innerHTML = `
    <div class="quiz-shell">
      <div class="quiz-card">
        <div class="result-card">
          <div class="ring">
            <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" stroke="var(--border)" stroke-width="8" fill="none"/>
            <circle cx="50" cy="50" r="44" stroke="var(--primary)" stroke-width="8" fill="none" stroke-dasharray="${2 * Math.PI * 44}" stroke-dashoffset="${2 * Math.PI * 44 * (1 - pct / 100)}" stroke-linecap="round"/></svg>
            <div class="num">${pct}%</div>
          </div>
          <h3>${t('quizResultTitle')}</h3>
          <span class="perf perf-${perf.c}">${t(perf.k)}</span>
          <div class="stats">
            <div class="stat"><div class="val">${correct}/${QUIZ.length}</div><div class="lbl">${t('quizScore')}</div></div>
            <div class="stat"><div class="val" style="color:var(--success)">${correct}</div><div class="lbl">${t('quizCorrect')}</div></div>
            <div class="stat"><div class="val" style="color:var(--danger)">${incorrect}</div><div class="lbl">${t('quizIncorrect')}</div></div>
            <div class="stat"><div class="val" style="color:var(--warning)">${unanswered}</div><div class="lbl">${t('quizUnanswered')}</div></div>
          </div>
          <div class="result-actions">
            <button class="btn btn-outline" id="quizReview">${t('quizReview')}</button>
            <button class="btn btn-primary" id="quizRestart">${t('quizRestart')}</button>
          </div>
          <div id="quizReviewList" style="margin-top:20px;text-align:start;display:none"></div>
        </div>
      </div>
    </div>
  `;
    $('#quizReview').addEventListener('click', () => {
        const list = $('#quizReviewList');
        if (list.style.display === 'block') { list.style.display = 'none'; return; }
        list.style.display = 'block';
        list.innerHTML = QUIZ.map((q, i) => {
            const ua = quizAnswers[q.id];
            const ok = ua === q.correct;
            const cls = ok ? 'ok' : (ua === undefined ? 'skip' : 'bad');
            const tag = ok ? '✓' : (ua === undefined ? '○' : '✗');
            return `<div class="review-item">
        <div class="tag ${cls}">${tag} ${lang === 'en' ? 'Q' : 'س'}${i + 1}</div>
        <div style="margin-top:6px"><strong>${q.q[lang]}</strong></div>
        <div style="margin-top:6px;font-size:.84rem;color:var(--muted)">
          ${lang === 'en' ? 'Correct' : 'الصحيح'}: <span style="color:var(--success)">${q.opts[q.correct][lang]}</span>
          ${ua !== undefined && !ok ? ` · ${lang === 'en' ? 'Your answer' : 'إجابتك'}: <span style="color:var(--danger)">${q.opts[ua][lang]}</span>` : ''}
        </div>
        <div style="margin-top:6px;font-size:.84rem">${q.exp[lang]}</div>
      </div>`;
        }).join('');
    });
    $('#quizRestart').addEventListener('click', () => { quizMode = null; renderQuizModes(); });
}

/* ---------- 14. INFO RENDER ---------- */
function renderInfo() {
    const items = [
        { l: 'infoCourseLbl', v: 'infoCourseVal' },
        { l: 'infoChapterLbl', v: 'infoChapterVal' },
        { l: 'infoInstructorLbl', v: 'infoInstructorVal' },
        { l: 'infoPrereqLbl', v: 'infoPrereqVal' },
        { l: 'infoBrandLbl', v: 'infoBrandVal' },
        { l: 'infoStackLbl', v: 'infoStackVal' }
    ];
    $('#infoGrid').innerHTML = items.map(it => `
    <div class="mini-card">
      <h5>${t(it.l)}</h5>
      <p>${t(it.v)}</p>
    </div>
  `).join('');
}

/* ---------- 15. INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    applyLang();
    initReveal();
});