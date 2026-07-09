export const subServicesData = {
  "sole-proprietorship-registration": {
    title: "Sole Proprietorship Registration",
    subtitle: "Establish your single-owner business legally with minimal compliance and complete control.",
    price: "₹1,499",
    tagline: "Simplest & Most Cost-Effective Business Registration in India",
    overview: "A sole proprietorship firm is the simplest and most popular form of business in India, owned and managed by a single individual. It requires minimal compliance, low investment, and offers complete control to the owner. Whether you are a freelancer, trader, or small business owner, registering a sole proprietorship is the first step towards a legally recognized business identity.",
    characteristics: [
      { title: "Single Ownership", desc: "100% control over all business decisions, operations, and profits without partner intervention." },
      { title: "No Separate Entity", desc: "The business and the owner are considered the same legal entity, simplifying tax structures." },
      { title: "Unlimited Liability", desc: "The proprietor is personally responsible for all liabilities and debts of the business." },
      { title: "Minimal Formality", desc: "Requires very few ongoing compliances and is easy to shut down if needed." }
    ],
    eligibility: [
      "The applicant must be an Indian citizen.",
      "The applicant must be at least 18 years of age.",
      "The applicant must have a valid PAN Card & Aadhaar Card.",
      "The business must have a physical address in India."
    ],
    documents: [
      { name: "PAN Card", desc: "Proprietor's Personal Permanent Account Number card.", type: "Identity" },
      { name: "Aadhaar Card", desc: "Aadhaar card linked with active mobile number for e-verification.", type: "Identity" },
      { name: "Passport Photo", desc: "Recent passport-sized photograph of the business owner.", type: "Identity" },
      { name: "Address Proof", desc: "Latest utility bill (Electricity/Water) or Property Tax receipt.", type: "Business Address" },
      { name: "NOC or Rent Deed", desc: "No Objection Certificate from owner or Rent Agreement copy.", type: "Business Address" },
      { name: "Bank Account Details", desc: "Personal bank account passbook copy or cancelled cheque.", type: "Banking" }
    ],
    pricingTable: [
      { type: "GST Registration", govFee: "Free", profFee: "₹999", timeline: "3-7 Days" },
      { type: "MSME / Udyam Registration", govFee: "Free", profFee: "₹499", timeline: "1-2 Days" },
      { type: "Shop & Establishment License", govFee: "State-specific", profFee: "₹1,499", timeline: "7-15 Days" },
      { type: "Trade License", govFee: "State-specific", profFee: "₹2,499", timeline: "15-30 Days" }
    ],
    steps: [
      { title: "Choose Business Name", desc: "Select a unique trade name for your business that does not infringe on existing trademarks." },
      { title: "Obtain PAN Card", desc: "Ensure you have a personal PAN card, which acts as the tax identity for your proprietorship." },
      { title: "Open current bank account", desc: "Open a current account in a bank in the name of your proprietorship using proof of business." },
      { title: "Apply for GST Registration", desc: "Register under GST if your annual turnover exceeds ₹20 Lakhs or if you do inter-state trade." },
      { title: "MSME/Udyam Registration", desc: "Obtain your Udyam Certificate to qualify for government business schemes and subsidies." },
      { title: "Shop & Establishment License", desc: "Get registered under the local state labour department to legalize your workspace." }
    ],
    additionalRegistrations: [
      { name: "FSSAI Registration", desc: "Mandatory if your business is related to food processing, distribution, or retailing." },
      { name: "Import Export Code (IEC)", desc: "Required if your proprietorship intends to import or export cargo internationally." },
      { name: "Trademark Registration", desc: "Protects your unique trade name from being copied by competitors in India." }
    ],
    compliance: [
      { name: "Income Tax Return (ITR) Filing", desc: "File annual ITR under ITR-3 or ITR-4 (Sugam) forms using your personal PAN." },
      { name: "GST Returns (If Registered)", desc: "File monthly or quarterly GSTR-1 and GSTR-3B filings to report sales and claim ITC." },
      { name: "Statutory License Renewal", desc: "Renew local Shop & Establishment or Trade licenses periodically according to state guidelines." }
    ]
  },
  "private-limited-company-registration": {
    title: "Private Limited Company Registration",
    subtitle: "Incorporate a separate legal entity with limited liability, preferred by investors and banks.",
    price: "₹5,899",
    tagline: "Most Trusted Business Structure for Scalable Startups",
    overview: "A Private Limited Company is the most popular corporate legal structure in India. It offers limited liability protection to its shareholders, lets you raise equity capital easily, and establishes high trust among customers and vendors. Managed by a minimum of two directors, it is governed by the Ministry of Corporate Affairs (MCA) under the Companies Act, 2013.",
    characteristics: [
      { title: "Limited Liability", desc: "Shareholders' personal assets are 100% safe; liability is limited only to their unpaid share capital." },
      { title: "Separate Legal Status", desc: "The company can own property, enter contracts, and sue or be sued in its own name." },
      { title: "Perpetual Succession", desc: "The company continues to exist legally regardless of changes in directors or shareholders." },
      { title: "Funding Ready", desc: "The only structure that allows seamless venture capital equity fundraising and ESOP issuance." }
    ],
    eligibility: [
      "Minimum of 2 Shareholders (individuals or corporate entities).",
      "Minimum of 2 Directors (at least one must be a resident of India).",
      "No minimum paid-up capital requirement.",
      "Unique name approval from MCA registrar."
    ],
    documents: [
      { name: "PAN & Aadhaar of Directors", desc: "Mandatory identity proofs for all proposed directors.", type: "Identity" },
      { name: "Passport / Voter ID / DL", desc: "Additional address proof for all directors.", type: "Identity" },
      { name: "Bank Statement / Utility Bill", desc: "Proof of residence of directors (not older than 2 months).", type: "Identity" },
      { name: "Registered Office Proof", desc: "Latest electricity bill or gas bill for the company address.", type: "Registered Office" },
      { name: "NOC from Owner", desc: "No Objection Certificate signed by the owner of the premises.", type: "Registered Office" },
      { name: "Rent Agreement copy", desc: "Copy of the lease or rental agreement if the office space is rented.", type: "Registered Office" }
    ],
    pricingTable: [
      { type: "Digital Signature (DSC) - 2 Nos", govFee: "Included", profFee: "₹999", timeline: "1-2 Days" },
      { type: "Director Identification (DIN) - 2 Nos", govFee: "Included", profFee: "Free", timeline: "1-2 Days" },
      { type: "Name Approval (RUN)", govFee: "₹1,000", profFee: "₹1,000", timeline: "2-3 Days" },
      { type: "Company Incorporation (SPICe+)", govFee: "State-specific stamp duty", profFee: "₹2,900", timeline: "5-7 Days" }
    ],
    steps: [
      { title: "Apply for DSC", desc: "Obtain Digital Signature Certificates for all directors to sign documents electronically." },
      { title: "Reserve Company Name", desc: "Submit name proposals to MCA via the RUN (Reserve Unique Name) web service for approval." },
      { title: "Draft MoA and AoA", desc: "Draft Memorandum of Association and Articles of Association outlining company rules." },
      { title: "Submit SPICe+ Form", desc: "File the main incorporation application containing details of directors, office, and capitals." },
      { title: "Get Certificate of Incorporation", desc: "MCA registers the company and issues COI along with PAN and TAN cards." },
      { title: "Open Corporate Bank Account", desc: "Submit incorporation documents to open a current account in the company name." }
    ],
    additionalRegistrations: [
      { name: "GST Registration", desc: "Recommended to claim business credits and comply with inter-state sales tax laws." },
      { name: "Trademark Filing", desc: "Highly recommended to protect your brand name from day one." },
      { name: "Startup India recognition", desc: "Apply to DIPP to unlock tax exemptions and government credit schemes." }
    ],
    compliance: [
      { name: "First Auditor Appointment", desc: "Appoint a statutory auditor within 30 days of company incorporation." },
      { name: "Filing Commencement of Business", desc: "File Form INC-20A within 180 days of incorporation to start active trading." },
      { name: "ROC Annual Returns Filing", desc: "File AOC-4 (Financials) and MGT-7 (Annual Return) with MCA every year." }
    ]
  }
};

// Generates fallback structured details for sub-services that don't have custom copy
export function getSubServiceDetails(slug, displayName) {
  if (subServicesData[slug]) {
    return subServicesData[slug];
  }
  
  // Format slug back to Title Case if displayName is not provided
  const formattedName = displayName || slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: formattedName,
    subtitle: `Get professional, end-to-end legal compliance for your ${formattedName} in India.`,
    price: "₹1,999",
    tagline: "Streamlined Corporate Services & Expert Advisory",
    overview: `Register and manage your ${formattedName} with CA.Sarthi. Our experienced Chartered Accountants and legal professionals manage documentation, government filings, and licensing so that you can focus entirely on running your business operations.`,
    characteristics: [
      { title: "100% Compliant Setup", desc: `Ensure your ${formattedName} is structured in compliance with all relevant state and central guidelines.` },
      { title: "Liaison with Authorities", desc: "We manage communication with government officers to ensure smooth, rejection-free licensing." },
      { title: "Expert Support", desc: "Direct access to dedicated financial consultants for doubt resolution throughout the process." },
      { title: "Flat & Transparent Fee", desc: "No hidden charges, zero unexpected costs. You pay what you see in the pricing schedule." }
    ],
    eligibility: [
      "The business must comply with standard local and state regulations.",
      "The business owner must hold a valid PAN and Aadhaar identity proof.",
      "An active physical business address must be provided in India."
    ],
    documents: [
      { name: "Identity Proof", desc: "Proprietor/Director PAN card, Aadhaar card, or passport copy.", type: "Identity" },
      { name: "Business Address Proof", desc: "Latest utility bill (electricity, water) or bank statement copy.", type: "Address" },
      { name: "NOC or Agreement", desc: "No Objection Certificate from property owner or rent agreement copy.", type: "Address" }
    ],
    pricingTable: [
      { type: "Standard Licensing / Registration", govFee: "Actuals", profFee: "₹1,999", timeline: "5-10 Days" }
    ],
    steps: [
      { title: "Free Initial Consultation", desc: "Discuss your business requirements with our Chartered Accountants to clarify steps." },
      { title: "Document Verification", desc: "Upload clear digital copies of your documents for compliance review." },
      { title: "Application Preparation", desc: "Our team drafts and compiles the official applications for your business license." },
      { title: "Submission & Tracking", desc: "We submit filings to appropriate departments and track progress regularly." },
      { title: "Final License Handover", desc: "We deliver the approved registration certificate to you along with legal guidelines." }
    ],
    additionalRegistrations: [
      { name: "GST Registration", desc: "Enables you to charge GST, manage inter-state trades, and claim input credits." },
      { name: "MSME Registration", desc: "Enables you to access government loan schemes and priority interest rates." }
    ],
    compliance: [
      { name: "Periodic Tax Filing", desc: "Ensure statutory returns (GST/ITR/TDS) are filed before official due dates." },
      { name: "License Renewals", desc: "Apply for license extensions before the expiry period to prevent operations halt." }
    ]
  };
}
