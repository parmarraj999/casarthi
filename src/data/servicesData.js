export const servicesData = {
  "business-registration": {
    title: "Business Registration",
    slug: "business-registration",
    shortDescription: "Turn your business concept into a legally compliant corporate entity. Our team handles the paperwork so you can focus on growth.",
    bannerText: "Start your entrepreneurial journey with complete legal compliance and corporate structuring.",
    icon: "Briefcase",
    subServices: [
      { name: "Private Limited Company Registration", description: "Establish a separate legal entity with limited liability, preferred by investors and startups.", icon: "Building2" },
      { name: "LLP Registration", description: "Form a Limited Liability Partnership combining flexibility of partnership with limited liability.", icon: "Users" },
      { name: "OPC Registration", description: "Incorporate a One Person Company if you want sole ownership with corporate limited liability.", icon: "UserCheck" },
      { name: "Partnership Firm Registration", description: "Register your partnership firm under the Indian Partnership Act for shared venture operations.", icon: "Network" },
      { name: "Startup India Registration", description: "Get recognition from DPIIT to access tax holidays, funding opportunities, and easy compliances.", icon: "Lightbulb" },
      { name: "MSME / Udyam Registration", description: "Register for government subsidies, collateral-free loans, and protection against delayed payments.", icon: "BadgeCheck" },
      { name: "NGO / Trust Registration", description: "Setup a Section 8 Company, Trust, or Society to start your non-profit or charitable activities.", icon: "Heart" },
      { name: "Shop & Establishment Registration", description: "Obtain your municipal trade license to operate local shops, commercial outlets, or offices.", icon: "Store" }
    ],
    whyChooseUs: [
      { title: "End-to-End Handholding", description: "We assist you from name approval, DSC, DIN allotments to final incorporation certificates." },
      { title: "Zero Paperwork Stress", description: "Upload your documents digitally, and we handle all filings with the Ministry of Corporate Affairs." },
      { title: "DPIIT Fast-tracking", description: "Accelerate your Startup India registrations through our experienced compliance experts." }
    ],
    timeline: [
      "Consultation & Name Search",
      "Document Collection & DSC Setup",
      "Drafting MoA, AoA & MCA Submission",
      "Incorporation Certificate & PAN/TAN Handover"
    ],
    faqs: [
      { question: "How long does it take to register a Private Limited Company?", answer: "Typically, it takes 7 to 10 business days, subject to name availability approvals and MCA processing times." },
      { question: "Is physical presence required for registration?", answer: "No, the entire incorporation process is online. You only need to send scanned copies of required documents." },
      { question: "What is Startup India Recognition?", answer: "It is a government initiative that offers startups benefits like 3 years of tax exemption, self-certification, and faster patent registrations." }
    ]
  },

  "gst-services": {
    title: "GST Services",
    slug: "gst-services",
    shortDescription: "Simplify your Goods and Services Tax compliance. From registration to complex notice replies, we keep your business clean.",
    bannerText: "Ensure 100% accurate tax filings and claim maximum Input Tax Credit (ITC) safely.",
    icon: "Percent",
    subServices: [
      { name: "GST Registration", description: "Acquire a GSTIN for your business to start charging GST and claiming Input Tax Credit.", icon: "FilePlus" },
      { name: "GST Return Filing", description: "Timely monthly and quarterly GST returns filing keeping compliance score flawless.", icon: "FileSpreadsheet" },
      { name: "GSTR-1 Filing", description: "Declare details of outward supplies of goods or services to match client credits.", icon: "ArrowUpRight" },
      { name: "GSTR-3B Filing", description: "Consolidated monthly return declaration of tax liability and ITC claims.", icon: "Scale" },
      { name: "GSTR-9 Filing", description: "Annual GST return filing compiling monthly data and resolving discrepancies.", icon: "Calendar" },
      { name: "GST Notice Handling", description: "Expert support to reply to show cause notices, audit queries, and scrutiny assessments.", icon: "AlertTriangle" },
      { name: "GST Refund Services", description: "Process refund claims for exports, inverted duty structure, or excess balance in cash ledger.", icon: "DollarSign" },
      { name: "E-Way Bill", description: "Generate e-way bills for transporting goods exceeding limit thresholds seamlessly.", icon: "Truck" },
      { name: "E-Invoice", description: "Setup and automate electronic invoicing compliance matching standard portals.", icon: "Cpu" },
      { name: "GST Audit", description: "Audit tax calculations, ITC reconciliations, and books validation for compliance.", icon: "ClipboardCheck" },
      { name: "GST Advisory", description: "Strategic consulting for tax structure planning, exemptions, and product taxation rates.", icon: "HelpCircle" },
      { name: "GST Compliance", description: "Complete retainer service managing all recurring GST operations and filings.", icon: "ShieldCheck" }
    ],
    whyChooseUs: [
      { title: "Maximized ITC Claims", description: "We reconcile purchases with GSTR-2B monthly to ensure you never lose Input Tax Credit." },
      { title: "Error-Free Filings", description: "Double-tier check of liability calculations and zero penalties record for our clients." },
      { title: "Notice Resolution", description: "Our tax litigation team handles complex demand notices, preventing heavy interest charges." }
    ],
    timeline: [
      "Purchase & Sales Data Ingestion",
      "ITC Reconciliation (2B vs Books)",
      "Tax Liability Calculation & Client Approval",
      "Filing Confirmation & Challan Receipts"
    ],
    faqs: [
      { question: "What is the threshold for mandatory GST registration?", answer: "GST registration is mandatory for businesses supplying services with turnover exceeding ₹20 lakhs (₹10 lakhs for special states) or goods exceeding ₹40 lakhs." },
      { question: "Can I claim GST refund on export of services?", answer: "Yes, exports are treated as 'Zero-Rated Supplies'. You can export services either with payment of tax and claim refund, or without payment under a Letter of Undertaking (LUT)." }
    ]
  },

  "income-tax-services": {
    title: "Income Tax Services",
    slug: "income-tax-services",
    shortDescription: "File your taxes accurately while optimization strategies minimize your liability under current laws.",
    bannerText: "Personalized tax planning and professional compliance representation for individuals and corporations.",
    icon: "ShieldAlert",
    subServices: [
      { name: "ITR Filing", description: "File tax returns for salaried individuals, professionals, HUFs, firms, and companies.", icon: "FileText" },
      { name: "Tax Planning", description: "Strategic investment planning to legally lower your taxes under old and new regimes.", icon: "Sliders" },
      { name: "TDS Return Filing", description: "Monthly calculations, quarterly TDS return filings (24Q, 26Q), and certificate issuance.", icon: "FileSignature" },
      { name: "TCS Return Filing", description: "Collect Tax at Source, file quarterly returns (27EQ) and manage credit handovers.", icon: "Layers" },
      { name: "Income Tax Notice Reply", description: "Draft legal responses to demand notices, defect notices, and high-value transaction queries.", icon: "MailQuestion" },
      { name: "Scrutiny Assessment", description: "Complete representation before Assessing Officers for scrutinies and audits.", icon: "Gavel" },
      { name: "Capital Gain Taxation", description: "Calculate tax liabilities on sale of property, shares, mutual funds, and assets.", icon: "TrendingUp" },
      { name: "Advance Tax Calculation", description: "Calculate quarterly advance tax installments to avoid interest under Sections 234B/C.", icon: "Calculator" },
      { name: "Form 15CA", description: "Authorize foreign outward remittances by preparing online declarations.", icon: "Globe" },
      { name: "Form 15CB", description: "Obtain Chartered Accountant certificate validating overseas payment compliance.", icon: "CheckSquare" }
    ],
    whyChooseUs: [
      { title: "Maximum Tax Savings", description: "We analyze all eligible deductions under Section 80C, 80D, 24, and capital gain reinvestments." },
      { title: "Litigation Specialists", description: "Representing your cases effectively before tax departments to secure favorable orders." },
      { title: "International Remittances", description: "Fast preparation of 15CA/15CB certificates within 24 hours for urgent foreign transfers." }
    ],
    timeline: [
      "Gathering Forms (16, 26AS, AIS/TIS)",
      "Computation of Income & Capital Gains",
      "Deductions Optimization Review",
      "ITR Filing, Verification & Acknowledgment"
    ],
    faqs: [
      { question: "What is AIS and TIS in Income Tax?", answer: "Annual Information Statement (AIS) and Taxpayer Information Summary (TIS) reflect high-value financial transactions, TDS, TCS, and mutual fund trades reported by banks and financial institutions." },
      { question: "What happens if I miss the ITR filing deadline?", answer: "You can file a 'Belated Return' but with a late fee up to ₹5,000 (Section 234F) and interest on unpaid tax liabilities." }
    ]
  },

  "accounting-bookkeeping": {
    title: "Accounting & Bookkeeping",
    slug: "accounting-bookkeeping",
    shortDescription: "Get clear visibility into your financial health. Our precise ledger management ensures you are ready for audit at any moment.",
    bannerText: "Professional cloud bookkeeping, payroll processing, and Virtual CFO support designed for modern businesses.",
    icon: "Calculator",
    subServices: [
      { name: "Book Keeping", description: "Record daily receipts, invoices, payments, and journal vouchers in secure formats.", icon: "BookOpen" },
      { name: "Accounting & Ledger Management", description: "Organize accounts payables, receivables, cash registers, and general ledger accounts.", icon: "Database" },
      { name: "Bank Reconciliation", description: "Daily/weekly reconciliation of bank statements with ledger entries to catch discrepancies.", icon: "RefreshCw" },
      { name: "Payroll Processing", description: "Calculate monthly salaries, deduct taxes (TDS/PF/ESIC) and issue payslips.", icon: "Users" },
      { name: "Financial Statements", description: "Prepare Balance Sheets, Profit & Loss Accounts, and Trial Balances regularly.", icon: "BarChart3" },
      { name: "MIS Reporting", description: "Get regular customized reports on profitability, aging analysis, and department costs.", icon: "PieChart" },
      { name: "Cash Flow Management", description: "Track cash inflows and outflows to forecast liquidity and optimize working capital.", icon: "Activity" },
      { name: "Virtual CFO Services", description: "Strategic financial advisory, budget mapping, and business analysis by senior experts.", icon: "Briefcase" }
    ],
    whyChooseUs: [
      { title: "Real-time Cloud Access", description: "We utilize Tally Prime, Zoho Books, and QuickBooks so you can access reports from anywhere." },
      { title: "MIS-Driven Insights", description: "Detailed monthly performance summaries that help you identify cost-saving segments." },
      { title: "Audit Ready Ledger", description: "We structure ledgers so that statutory auditors find clean trails, saving time and costs." }
    ],
    timeline: [
      "Document Sharing & Integration",
      "Weekly Bookkeeping & Reconciliation",
      "Monthly Ledger Closure & P&L Drafting",
      "MIS Reporting & Review Calls"
    ],
    faqs: [
      { question: "What software do you use for bookkeeping?", answer: "We use top industry standards like Tally Gold, Zoho Books, QuickBooks, and Xero based on client preference." },
      { question: "What are Virtual CFO services?", answer: "Virtual CFO provides businesses with the strategic support of an experienced CFO part-time, managing budgets, pricing policies, and investor planning." }
    ]
  },

  "audit-assurance": {
    title: "Audit & Assurance",
    slug: "audit-assurance",
    shortDescription: "Deliver trust to stakeholders and verify your internal control systems. We focus on transparency and absolute compliance.",
    bannerText: "Independent audits and risk reviews that safeguard your business reputation and financial credibility.",
    icon: "ClipboardCheck",
    subServices: [
      { name: "Statutory Audit", description: "Audit of financial statements under Companies Act to verify true and fair view status.", icon: "CheckSquare" },
      { name: "Tax Audit", description: "Compulsory audits under Section 44AB of Income Tax Act for businesses crossing limits.", icon: "FileText" },
      { name: "GST Audit", description: "Annual reconciliation of GST returns with audited financial statements (GSTR-9C).", icon: "TrendingUp" },
      { name: "Internal Audit", description: "Independent review of internal controls, cash flows, purchase procedures, and operations.", icon: "Search" },
      { name: "Stock Audit", description: "Physical verification of inventory levels and reconciliation with stock books for banks.", icon: "Box" },
      { name: "Management Audit", description: "Analyze operational performance, managerial decision outcomes, and system efficiencies.", icon: "UserCheck" },
      { name: "Compliance Audit", description: "Verify compliance with environmental, corporate, and municipal labor laws.", icon: "Activity" },
      { name: "Limited Review", description: "Quarterly or half-yearly brief review of statements for listed entities and banks.", icon: "Shield" }
    ],
    whyChooseUs: [
      { title: "Rigorous Methodology", description: "Our audit procedures comply fully with the Standards on Auditing (SAs) issued by ICAI." },
      { title: "Actionable Risk Audits", description: "Our internal audit reports identify leakages, stock shrinkage, and double-payment risks." },
      { title: "Lender Confidence", description: "Audited financial statements by our firm are highly trusted by national and private banks." }
    ],
    timeline: [
      "Audit Scope Planning & Risk Assessment",
      "Fieldwork & Document Verification",
      "Audit Observations & Management Discussion",
      "Drafting & Issuing final Audit Report"
    ],
    faqs: [
      { question: "When is a Tax Audit mandatory in India?", answer: "A Tax Audit is mandatory if a business's turnover exceeds ₹1 crore (or ₹10 crores if cash transactions are under 5%) or ₹50 lakhs for professionals." },
      { question: "What is the difference between statutory and internal audit?", answer: "Statutory audit is legally mandatory to report on financial accuracy to shareholders. Internal audit is management-driven to evaluate operations and risk controls." }
    ]
  },

  "roc-company-compliance": {
    title: "ROC & Company Compliance",
    slug: "roc-company-compliance",
    shortDescription: "Avoid heavy penalties and MCA blacklisting. We manage your regular secretarial filings and corporate registries.",
    bannerText: "Keep your corporate standing flawless with timely Registrar of Companies (ROC) filings and secretarial support.",
    icon: "Building2",
    subServices: [
      { name: "ROC Annual Filing", description: "Draft and file annual returns (MGT-7) and financial statements (AOC-4) with MCA.", icon: "FolderArchive" },
      { name: "Director KYC", description: "Ensure mandatory DIR-3 KYC compliance for all directors annually.", icon: "UserCheck" },
      { name: "AOC-4 Filing", description: "Compile and file audited balance sheets, profit & loss, and board report copies.", icon: "FileText" },
      { name: "MGT-7 Filing", description: "Prepare and file electronic annual return details including shareholding pattern.", icon: "FileCheck" },
      { name: "Company Compliance", description: "Manage regular board meetings documentation, statutory registers, and resolutions.", icon: "Shield" },
      { name: "LLP Compliance", description: "File Form 8 (Statement of Accounts) and Form 11 (Annual Return) for LLPs.", icon: "Users" },
      { name: "Secretarial Compliance", description: "Assist with appointment of auditors, share capital changes, and registered address updates.", icon: "FileSignature" },
      { name: "Share Transfer Documentation", description: "Draft share transfer deeds (SH-4), board approvals, and update share registers.", icon: "RefreshCw" },
      { name: "Board Resolution Drafting", description: "Draft formal minutes and corporate resolutions for banks, lenders, and vendors.", icon: "PenTool" }
    ],
    whyChooseUs: [
      { title: "Zero Penalty Assurance", description: "We run automated reminder schedules for DIR-3 KYC, AOC-4, and MGT-7 deadlines." },
      { title: "Precise Minute Books", description: "Professional drafting of board minutes, meeting notices, and share certificates." },
      { title: "Director Status Protection", description: "Avoid director disqualification under Section 164(2) due to missed annual filings." }
    ],
    timeline: [
      "Compilation of Audited Accounts & Audit Report",
      "Drafting Board Report & AGM Minutes",
      "Form Preparation (AOC-4 / MGT-7)",
      "ROC Submission & SRN Generation"
    ],
    faqs: [
      { question: "What is the penalty for late filing of AOC-4 and MGT-7?", answer: "The penalty is ₹100 per day per form for delay, with additional penalties on directors for extended delays." },
      { question: "Is Director KYC (DIR-3 KYC) mandatory every year?", answer: "Yes, it is mandatory every year for every individual who holds a Director Identification Number (DIN)." }
    ]
  },

  "trademark-legal": {
    title: "Trademark & Legal Services",
    slug: "trademark-legal",
    shortDescription: "Protect your brand identity and secure your agreements. Our legal experts handle registrations, drafting, and notices.",
    bannerText: "Intellectual property registration and professional legal documentation that secures your commercial interests.",
    icon: "Gavel",
    subServices: [
      { name: "Trademark Registration", description: "Register logo, brand name, or slogan to get exclusive ownership and the ® symbol.", icon: "Award" },
      { name: "Trademark Renewal", description: "File trademark renewals before 10-year expiry periods to extend brand protection.", icon: "History" },
      { name: "Trademark Objection Reply", description: "Draft legal defenses for trademarks challenged by examiner reports (Section 9/11).", icon: "RotateCcw" },
      { name: "Legal Documentation", description: "Draft NDAs, service level agreements, partnership deeds, and indemnity bonds.", icon: "FileSignature" },
      { name: "Agreement Drafting", description: "Draft rent deeds, lease agreements, franchise contracts, and vendor agreements.", icon: "PenTool" },
      { name: "Contract Vetting", description: "Review third-party contracts to identify legal risks, indemnity traps, and exit clauses.", icon: "Eye" },
      { name: "Legal Notice Handling", description: "Draft and dispatch legal notices for recovery of dues, breach of contracts, or reply to notices.", icon: "AlertTriangle" },
      { name: "Consumer & Civil Matters", description: "Expert consultation for resolving consumer disputes, arbitration, and civil issues.", icon: "Users" }
    ],
    whyChooseUs: [
      { title: "Brand Security Focus", description: "We run thorough trademark searches to ensure your brand name has high registration probability." },
      { title: "Vetted Exit Clauses", description: "Contracts are vetted to minimize liability and guarantee clean dispute resolution paths." },
      { title: "Strong Legal Defenses", description: "Experienced drafting for trademark objections to bypass examiner rejections." }
    ],
    timeline: [
      "Brand Name Viability Search",
      "TM Application Filing (TM-A)",
      "Objection Monitoring & Reply Drafting (if required)",
      "Registration Certificate Handover"
    ],
    faqs: [
      { question: "Can I use the ™ symbol immediately after filing?", answer: "Yes, you can use the ™ symbol as soon as the application is filed and you receive the TM Application Number." },
      { question: "What is a Trademark Objection?", answer: "An objection is raised by the trademark examiner if the brand name is similar to an existing brand (Section 11) or descriptive of the product (Section 9)." }
    ]
  },

  "hr-payroll": {
    title: "HR & Payroll Compliance",
    slug: "hr-payroll",
    shortDescription: "Manage your workforce compliance without administrative hassle. We handle PF, ESIC, salary structures, and payouts.",
    bannerText: "Complete workforce management, PF/ESIC returns, and automated payroll services for high-growth teams.",
    icon: "Users",
    subServices: [
      { name: "Payroll Management", description: "Calculate monthly net salaries, deductions, tax withholding, and processing reports.", icon: "Activity" },
      { name: "PF Registration & Filing", description: "Provident Fund registration and monthly EPF return filings (ECR) for your workforce.", icon: "Shield" },
      { name: "ESIC Registration & Filing", description: "Employee State Insurance registration and monthly contribution filings.", icon: "Heart" },
      { name: "Salary Structuring", description: "Structure CTC components (HRA, LTA, allowances) to lower tax burdens for employees.", icon: "Sliders" },
      { name: "Employee Compliance", description: "Maintain statutory employee registers, leave accounts, and state compliance reports.", icon: "CheckSquare" },
      { name: "Payslip Generation", description: "Generate detailed monthly payslips reflecting deductions and upload to portals.", icon: "FileText" },
      { name: "Attendance Management", description: "Integrate leave details, overtime calculations, and final payroll calculations.", icon: "Calendar" },
      { name: "HR Compliance", description: "Setup gratuity plans, POSH compliance policies, and labor welfare fund filings.", icon: "Briefcase" }
    ],
    whyChooseUs: [
      { title: "Timely Monthly Filings", description: "PF and ESIC contributions are filed before the 15th of every month to avoid late charges." },
      { title: "Tax-Efficient CTC Design", description: "Help your employees keep more salary through optimized tax allowance splits." },
      { title: "Statutory Security", description: "Stay compliant with the Payment of Bonus Act, Gratuity Act, and local labor codes." }
    ],
    timeline: [
      "Employee Data & CTC Onboarding",
      "Monthly Attendance & Leave Processing",
      "Salary Sheet Generation & Client Approval",
      "PF/ESIC Filing & Payslips Distribution"
    ],
    faqs: [
      { question: "When is PF registration mandatory for a business?", answer: "PF registration is mandatory for any business employing 20 or more employees." },
      { question: "What is ESIC registration threshold?", answer: "ESIC registration is mandatory for businesses with 10 or more employees whose monthly salary is below ₹21,000." }
    ]
  },

  "license-certification": {
    title: "License & Certification",
    slug: "license-certification",
    shortDescription: "Acquire mandatory certifications and licenses required to run your specialized business operations.",
    bannerText: "Hassle-free food licenses, import-export codes, ISO certificates, and digital signatures handled online.",
    icon: "Award",
    subServices: [
      { name: "FSSAI License", description: "Obtain FSSAI registration, State, or Central license for manufacturing, trading, or selling food.", icon: "Shield" },
      { name: "IEC Registration", description: "Get Import Export Code required for any international import or export cargo operations.", icon: "Globe" },
      { name: "ISO Certification", description: "Secure international certifications (ISO 9001, 14001, 27001) to build brand quality status.", icon: "Award" },
      { name: "Trade License", description: "Obtain local municipal trade licenses to operate business outlets legally.", icon: "FileSignature" },
      { name: "DSC (Digital Signature Certificate)", description: "Class 3 DSC setup for online tax filings, MCA documents, and e-tenders.", icon: "Lock" },
      { name: "DIN Allotment", description: "Apply and register Director Identification Number for prospective board members.", icon: "UserCheck" },
      { name: "Professional Tax Registration", description: "Register and file state Professional Tax for your employer status and employees.", icon: "FileText" },
      { name: "Labour License", description: "Register under Contract Labour Act to hire contract workforces legally.", icon: "Users" }
    ],
    whyChooseUs: [
      { title: "Industry Compliance", description: "We ensure you apply for the correct tier of license, preventing application rejections." },
      { title: "Fast-track IEC Approval", description: "IEC code registrations are completed within 24-48 hours with correct bank links." },
      { title: "Secure Class 3 DSC", description: "Setup paperless DSC using video e-KYC securely under licensed authorities." }
    ],
    timeline: [
      "Identify Required Licenses",
      "Documentation & Application Prep",
      "Liaising with Department Officers",
      "License Issuance & Delivery"
    ],
    faqs: [
      { question: "Who needs an FSSAI Central License?", answer: "Food business operators (FBOs) with turnover exceeding ₹20 crores, or involved in imports/exports, require a Central License." },
      { question: "What is an Import Export Code (IEC)?", answer: "IEC is a 10-digit code issued by DGFT that is mandatory for importing or exporting goods/services from India." }
    ]
  },

  "bank-loan-project-report": {
    title: "Bank Loan & Project Report",
    slug: "bank-loan-project-report",
    shortDescription: "Get access to capital with professional documentation. We build detailed project reports and CMA data accepted by banks.",
    bannerText: "Financial projection modeling and bank-ready proposal files built to maximize loan approvals.",
    icon: "TrendingUp",
    subServices: [
      { name: "Business Loan Assistance", description: "Structure loan applications for term loans, machinery loans, and cash credit limits.", icon: "DollarSign" },
      { name: "MSME Loan Support", description: "Avail priority lending advantages, interest subsidies, and collateral-free loan packages.", icon: "Award" },
      { name: "CMA Data Preparation", description: "Detailed Credit Monitoring Arrangement (CMA) projections required by bank underwriters.", icon: "FileSpreadsheet" },
      { name: "Project Report Preparation", description: "Draft comprehensive viability reports explaining business models, markets, and margins.", icon: "BookOpen" },
      { name: "CC / OD Proposal", description: "Prepare limit enhancement profiles for Cash Credit and Overdraft facilities.", icon: "RefreshCw" },
      { name: "Mudra Loan Assistance", description: "Apply for Mudra loans under Shishu, Kishor, and Tarun schemes for micro-businesses.", icon: "Activity" },
      { name: "Subsidy Consultation", description: "Identify eligible state/central interest subsidies and capital subsidies for manufacturing.", icon: "Percent" },
      { name: "Financial Projection", description: "Perform 5-year revenue, balance sheet, and cash flow projections for investors.", icon: "LineChart" }
    ],
    whyChooseUs: [
      { title: "Bank-Compliant Standards", description: "Our CMA data follows standard bank appraisal ratios (DSCR, Current Ratio, TOL/ATNW)." },
      { title: "Maximizing Loan Chance", description: "Detailed presentation of project viability to address credit officer risk concerns." },
      { title: "Government Subsidies", description: "Link your loan application to CGTMSE schemes or PMEGP subsidies for interest benefits." }
    ],
    timeline: [
      "Business Case Study & Financial Discussion",
      "CMA & Projection Modeling",
      "Drafting Detailed Project Report (DPR)",
      "Bank Representation & Final Sanction"
    ],
    faqs: [
      { question: "What is CMA Data?", answer: "Credit Monitoring Arrangement (CMA) data compiles historical financial statements along with 2-to-5 year projections, highlighting key financial ratios required by banks for credit review." },
      { question: "What is the CGTMSE loan scheme?", answer: "It is a government scheme providing collateral-free credit guarantees for micro and small enterprises up to ₹5 crores." }
    ]
  },

  "startup-business-consulting": {
    title: "Startup & Business Consulting",
    slug: "startup-business-consulting",
    shortDescription: "From startup pitch decks to business automation, our strategic consultants guide you through scale-up challenges.",
    bannerText: "Strategic growth advisory, investment documentation, and scaling advice tailored for visionaries.",
    icon: "Lightbulb",
    subServices: [
      { name: "Startup Consultancy", description: "Initial phase guidance on legal structuring, co-founder agreements, and equity vesting.", icon: "Shield" },
      { name: "Business Planning", description: "Design operational pipelines, market positioning, and scalable business models.", icon: "Map" },
      { name: "Pitch Deck Preparation", description: "Draft visually outstanding slides highlighting market opportunity, metrics, and financials.", icon: "Presentation" },
      { name: "Investor Documentation", description: "Prepare share subscription agreements, term sheets, and cap tables for seed funding.", icon: "FileSignature" },
      { name: "Fundraising Guidance", description: "Strategize VC, Angel Network, or crowdfunding rounds based on valuations.", icon: "DollarSign" },
      { name: "Business Automation", description: "Setup CRM, ERP, project management tools, and integrate workflows.", icon: "Cpu" },
      { name: "Compliance Setup", description: "Design internal tax, corporate, and licensing compliance frameworks for startups.", icon: "Activity" },
      { name: "Business Growth Advisory", description: "Regular consulting reviews of unit economics, burn rate, and expansion plans.", icon: "TrendingUp" }
    ],
    whyChooseUs: [
      { title: "Valuation Insights", description: "We run DCF and relative valuation models to support your equity conversations with investors." },
      { title: "Founder-First focus", description: "Protect your ownership share through optimized co-founder agreements and cap tables." },
      { title: "SaaS & Scale expertise", description: "We analyze unit economics (LTV, CAC) to scale digital startups efficiently." }
    ],
    timeline: [
      "Introductory Call & Goal Discovery",
      "Operational & Financial Auditing",
      "Strategic Action Roadmap Design",
      "Implementation Support & Scale Monitoring"
    ],
    faqs: [
      { question: "What should be included in a pitch deck?", answer: "A pitch deck should include slides on: Problem Statement, Solution, Market Size, Product Demo, Business Model, Financial Metrics, Competitors, and Team Profile." },
      { question: "What is a Term Sheet?", answer: "A term sheet is a non-binding agreement outlining the basic terms and conditions under which an investment will be made." }
    ]
  },

  "digital-software-solutions": {
    title: "Digital & Software Solutions",
    slug: "digital-software-solutions",
    shortDescription: "Automate your billing, inventory, and accounting. We help you setup cloud applications for a paperless office.",
    bannerText: "Modernize your billing and invoicing processes through integrated software implementation.",
    icon: "Cpu",
    subServices: [
      { name: "Billing Software", description: "Setup retail, wholesale, or subscription billing systems matching local tax rules.", icon: "Laptop" },
      { name: "GST Billing Setup", description: "Configure automated GST rates, HSN codes, tax invoices, and bill templates.", icon: "FilePlus" },
      { name: "POS Software", description: "Implement point-of-sale systems for supermarkets, restaurants, and apparel shops.", icon: "CreditCard" },
      { name: "Inventory Management", description: "Setup automated inventory tracking, low-stock warnings, and barcode billing.", icon: "Box" },
      { name: "Cloud Accounting", description: "Migrate traditional desk-bound books to Zoho Books, QuickBooks, or Xero Cloud.", icon: "Cloud" },
      { name: "Invoice Automation", description: "Setup recurring client invoicing, payment links integration, and automated reminders.", icon: "MailCheck" },
      { name: "Compliance Dashboard", description: "Setup central analytics showing tax liabilities, TDS deadlines, and cash reserves.", icon: "BarChart" },
      { name: "Accounting Software Support", description: "Train employee teams on software operations, bug fixes, and upgrade support.", icon: "LifeBuoy" }
    ],
    whyChooseUs: [
      { title: "Paperless Operation", description: "We configure tools that scan receipts and store documents securely on the cloud." },
      { title: "HSN Code mapping", description: "Ensure GST taxation accuracy by mapping correct HSN/SAC codes directly in your software." },
      { title: "Automatic Reminders", description: "Configure systems that send SMS/WhatsApp payment reminders to clients, lowering collection delays." }
    ],
    timeline: [
      "Process Audit & Software Selection",
      "Database Mapping (Items, Prices, HSN)",
      "Software Installation & Configuration",
      "Staff Training & Launch Support"
    ],
    faqs: [
      { question: "What is cloud accounting?", answer: "Cloud accounting allows you to access your financial books, raise invoices, and view cash flows online securely from any device or phone app." },
      { question: "Is e-invoicing mandatory for my business?", answer: "E-invoicing is mandatory for businesses with annual turnover exceeding ₹5 crores under current GST notifications." }
    ]
  }
};
