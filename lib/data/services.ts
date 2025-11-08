import {
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  SERVICES_PATH,
  CONTACT_PATH,
} from "@/lib/constants";

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  overview: string;
  valuePoints: string[];
  deliverables: string[];
  timeline: { label: string; detail: string }[];
  related: string[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
  category: string;
};

export const services: Service[] = [
  {
    slug: "dallas-multifamily-replacement-identification",
    name: `${PRIMARY_CITY} Multifamily Replacement Identification`,
    shortDescription:
      "Target stabilized and value-add multifamily communities aligned with IRS timelines and local yield expectations.",
    overview:
      `We maintain a rolling catalog of multifamily offerings across ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}, including Uptown towers, suburban garden assets, and transit adjacent infill deals. Each candidate is screened for like-kind eligibility, assumable debt, and 1031 friendly sellers so investors stay on track within the 45 day identification window.`,
    valuePoints: [
      "Curated short list segmented by unit mix, occupancy history, and rent growth trajectories.",
      "Rent roll normalization and T12 variance review before letter of intent issuance.",
      "Heat maps showing submarket absorption, concession trends, and projected NOI resilience.",
    ],
    deliverables: [
      "Three Property identification brief with underwriting exhibits.",
      "200 Percent blended list for portfolio balancing.",
      "Lender ready summary with DSCR and leverage guidance.",
    ],
    timeline: [
      { label: "Day 0 to 7", detail: "Source comps and confirm relinquished property proceeds." },
      { label: "Day 8 to 30", detail: "Coordinate property tours, virtual data rooms, and QI escrow alignment." },
      { label: "Day 31 to 45", detail: "Finalize identification package and file with qualified intermediary." },
    ],
    related: [
      "dallas-underwriting-rent-roll-review",
      "dallas-timeline-45-180-day-control",
      "dallas-dst-placement-advisory",
      "dallas-portfolio-sequencing-exchange",
    ],
    faqs: [
      {
        question: "How do you vet multifamily listings in Dallas, TX?",
        answer:
          `We grade each ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} multifamily candidate by debt assumption feasibility, tax basis alignment, physical condition reports, and sponsor reputations to remove surprises before identification.`,
      },
      {
        question: "Do you coordinate with our asset manager in Dallas, TX?",
        answer:
          `Yes. We invite your asset and property management teams in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to data rooms early so rent roll questions are handled before deadlines.`,
      },
      {
        question: "Can you support Delaware Statutory Trust alternatives in Dallas, TX?",
        answer:
          `We present DST options sourced for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors when direct replacements are limited, documenting risk disclosures for the QI file.`,
      },
    ],
    keywords: [
      "Dallas multifamily 1031 list",
      "Dallas TX apartment replacement properties",
      "Dallas 45 day multifamily exchange help",
      "Dallas three property identification multifamily",
    ],
    category: "Multifamily",
  },
  {
    slug: "dallas-industrial-logistics-exchange",
    name: `${PRIMARY_CITY} Industrial Logistics Exchange Targeting`,
    shortDescription:
      "Secure last mile warehouses, cross-dock, and bulk distribution assets that match logistics growth across North Texas.",
    overview:
      `Industrial demand in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} is driven by manufacturing, e-commerce, and inland port activity. We map vacancy thresholds, rail adjacency, and truck court specs to match relinquished proceeds with compliant replacement assets.`,
    valuePoints: [
      "Active monitoring of 45 day expiring availabilities across Great Southwest, DFW Airport, and Lancaster submarkets.",
      "Load factor, clear height, and trailer parking scoring to prioritize logistics ready shells.",
      "Environmental screening to flag Phase I and groundwater items before feasibility deposits.",
    ],
    deliverables: [
      "Exchange logistics dashboard with updated cap rate benchmarks.",
      "Broker lane coordination brief and access instructions.",
      "Contingency calendar tied to 180 day closing milestones.",
    ],
    timeline: [
      { label: "Pre-Sale", detail: "Gather relinquished asset utility and transport requirements." },
      { label: "Identification", detail: "Compare three prime logistics candidates with backup pools." },
      { label: "Closing", detail: "Coordinate third party reports and lender preflight to meet 180 day window." },
    ],
    related: [
      "dallas-flex-light-manufacturing-1031",
      "dallas-timeline-45-180-day-control",
      "dallas-lender-preflight-coordination",
      "dallas-200-percent-identification-modeling",
    ],
    faqs: [
      {
        question: "How do you address industrial roof age in Dallas, TX?",
        answer:
          `We run every ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} industrial candidate through capital expenditure modeling that includes roof remaining useful life and repair allowances before earnest money is released.`,
      },
      {
        question: "Can you coordinate with railroad operators in Dallas, TX?",
        answer:
          `Our team schedules diligence calls with switching providers serving ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} rail spurs so delivery capacity is confirmed prior to identification filing.`,
      },
      {
        question: "Do you review industrial tax abatements in Dallas, TX?",
        answer:
          `Yes. We summarize active abatements, Chapter 313 legacy terms, and municipal incentives available in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} so projections remain accurate.`,
      },
    ],
    keywords: [
      "Dallas logistics 1031 replacement",
      "Dallas TX warehouse exchange list",
      "Dallas industrial 45 day identification help",
      "Dallas cross dock replacement property",
    ],
    category: "Industrial",
  },
  {
    slug: "dallas-retail-nnn-replacement-search",
    name: `${PRIMARY_CITY} Retail NNN Replacement Search`,
    shortDescription:
      "Identify credit backed single tenant and shadow anchored retail assets aligned with 1031 income goals.",
    overview:
      `Triple net retail demand across ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} remains strong for medical, automotive, and essential retail signatures. We pair leased assets with lease term evaluations, rent escalator modeling, and credit scoring to deliver compliant replacements.`,
    valuePoints: [
      "Lease abstract analysis covering assignment clauses, co-tenancy risk, and renewal options.",
      "Store sales benchmarking using Dallas CBSA consumer spend data.",
      "Debt assumptions and lender appetite summaries for STNL assets.",
    ],
    deliverables: [
      "NNN snapshot comparing cap rate, rent escalations, and weighted average lease term.",
      "Tenant credit profile including public filings and analyst commentary.",
      "Identification submission packet for QI with supporting exhibits.",
    ],
    timeline: [
      { label: "Week 1", detail: "Define credit thresholds and target rent band for the exchange." },
      { label: "Week 3", detail: "Issue letter of intent with diligence protections and extension options." },
      { label: "Week 6", detail: "Finalize financing approvals and closing checklist against 180 day deadline." },
    ],
    related: [
      "dallas-three-property-identification-lists",
      "dallas-sale-leaseback-1031-support",
      "dallas-lender-preflight-coordination",
      "dallas-dst-placement-advisory",
    ],
    faqs: [
      {
        question: "How do you analyze tenant credit in Dallas, TX?",
        answer:
          `We review audited statements, corporate filings, and trade payment histories for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} tenants, and summarize risk flags inside each identification memo.`,
      },
      {
        question: "Can you include ground leases in Dallas, TX?",
        answer:
          `Yes. We vet ground lease maturities, rent resets, and condemnation provisions for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} parcels to confirm like-kind treatment.`,
      },
      {
        question: "Do you negotiate estoppels for Dallas, TX retail exchanges?",
        answer:
          `We coordinate estoppel delivery with tenant counsel in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} so your QI release stays on schedule.`,
      },
    ],
    keywords: [
      "Dallas NNN 1031 replacement",
      "Dallas STNL exchange list",
      "1031 triple net Dallas TX",
      "Dallas retail identification help",
    ],
    category: "Retail",
  },
  {
    slug: "dallas-medical-office-1031-matching",
    name: `${PRIMARY_CITY} Medical Office 1031 Matching`,
    shortDescription:
      "Coordinate identification of medical office buildings with compliant leases, Stark safe harbor review, and operational stability.",
    overview:
      `Healthcare expansions across ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} create steady demand for ambulatory surgery centers and specialty clinics. We align physician tenancy, parking ratios, and regulatory considerations to secure replacement assets that withstand diligence scrutiny.`,
    valuePoints: [
      "Parking, ingress, and life safety compliance checklists pre-LOI.",
      "Physician ownership structure review to flag potential related party limits.",
      "Rent roll analysis tied to reimbursement trends and Medicare mix in North Texas.",
    ],
    deliverables: [
      "Clinical facility comparison grid highlighting tenant specialty and lease maturities.",
      "Stark and anti-kickback guideline summary produced with healthcare counsel.",
      "Timeline tracker with milestone alerts for each third party report.",
    ],
    timeline: [
      { label: "Discovery", detail: `Map hospital affiliations and referral networks across ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.` },
      { label: "Identification", detail: "Confirm tenant compliance certificates and licensure standing." },
      { label: "Closing", detail: "Secure lender approvals and finalize operating expense true-up before funding." },
    ],
    related: [
      "dallas-underwriting-rent-roll-review",
      "dallas-timeline-45-180-day-control",
      "dallas-lender-preflight-coordination",
      "dallas-1031-market-comp-dashboards",
    ],
    faqs: [
      {
        question: "How do you handle tenant improvements in Dallas, TX medical exchanges?",
        answer:
          `We model tenant improvement allowances and reimbursement terms specific to ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} healthcare leases so cash flow projections remain accurate.`,
      },
      {
        question: "Do you analyze certificate of need exposure in Dallas, TX?",
        answer:
          `We confirm whether ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} facilities require certificate of need compliance and document findings for counsel review.`,
      },
      {
        question: "Can you coordinate medical equipment audits in Dallas, TX?",
        answer:
          `We schedule equipment verification and service contract transfers with providers operating in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to streamline transition planning.`,
      },
    ],
    keywords: [
      "Dallas medical office 1031",
      "Dallas TX healthcare real estate exchange",
      "Dallas ambulatory surgery replacement property",
      "Dallas doctor office identification",
    ],
    category: "Medical Office",
  },
  {
    slug: "dallas-self-storage-portfolio-refresh",
    name: `${PRIMARY_CITY} Self Storage Portfolio Refresh`,
    shortDescription:
      "Source stabilized and expansion ready self storage facilities with occupancy analytics tailored to investor targets.",
    overview:
      `Self storage in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} benefits from population inflows and small business demand. We filter by climate control ratio, visibility, and three mile demographic trends to present exchange ready inventories.`,
    valuePoints: [
      "Occupancy heatmap for 1, 3, and 5 mile trade areas with rental rate ladders.",
      "Expansion pad verification including entitlement status and construction budgets.",
      "Operations review covering software stack, delinquency controls, and tenant insurance uptake.",
    ],
    deliverables: [
      "Self storage scorecard with expense benchmarking and achievable rent projections.",
      "Capital expenditure outline for deferred maintenance across roofs, paving, and security systems.",
      "Identification package including supply pipeline commentary and competitive threats.",
    ],
    timeline: [
      { label: "First 10 Days", detail: "Gather relinquished warehouse or storage details to align replacement sizing." },
      { label: "Day 11 to 35", detail: "Tour facilities, complete management interviews, and validate rate structures." },
      { label: "Day 36 to 60", detail: "Finalize purchase agreement contingencies and lender underwriting materials." },
    ],
    related: [
      "dallas-timeline-45-180-day-control",
      "dallas-underwriting-rent-roll-review",
      "dallas-lender-preflight-coordination",
      "dallas-200-percent-identification-modeling",
    ],
    faqs: [
      {
        question: "Do you analyze lease-up risk in Dallas, TX self storage deals?",
        answer:
          `Yes. We track absorption curves and competitor price changes in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to estimate stabilized occupancy dates before you identify.`,
      },
      {
        question: "Can you evaluate third party management contracts in Dallas, TX?",
        answer:
          `We review management agreements, termination rights, and fee structures for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} facilities to prevent conflicts post-closing.`,
      },
      {
        question: "How are insurance requirements handled in Dallas, TX?",
        answer:
          `We coordinate with local insurance brokers in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to verify replacement cost coverage and flood zone obligations prior to funding.`,
      },
    ],
    keywords: [
      "Dallas self storage 1031",
      "Dallas TX storage exchange",
      "Dallas storage identification help",
      "Dallas climate control 1031 replacement",
    ],
    category: "Self Storage",
  },
  {
    slug: "dallas-flex-light-manufacturing-1031",
    name: `${PRIMARY_CITY} Flex and Light Manufacturing Exchange`,
    shortDescription:
      "Blend office and production space requirements for light manufacturing, creative lab, and tech flex replacements.",
    overview:
      `North ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} submarkets like Richardson and Plano feature adaptive flex properties ideal for R&D and assembly users. We layer in power availability, dock counts, and finish ratios to preserve operational continuity after the exchange.`,
    valuePoints: [
      "Finish-out analysis capturing office square footage versus conditioned production space.",
      "Utility capacity verification with local providers for power, gas, and fiber redundancy.",
      "Comparable lease rate and renewal trend reporting for flex product.",
    ],
    deliverables: [
      "Flex suitability index comparing candidate buildings by build-out cost and schedule.",
      "Three property identification map with commute and labor pool overlays.",
      "Closing readiness checklist covering zoning confirmations and assignment consents.",
    ],
    timeline: [
      { label: "Day 1 to 5", detail: `Collect operational requirements and critical adjacency needs within ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.` },
      { label: "Day 6 to 25", detail: "Run site tours, utility confirmations, and capital planning reviews." },
      { label: "Day 26 to 45", detail: "Submit identification and initiate improvement budgeting where needed." },
    ],
    related: [
      "dallas-industrial-logistics-exchange",
      "dallas-improvement-exchange-build-to-suit",
      "dallas-lender-preflight-coordination",
      "dallas-1031-market-comp-dashboards",
    ],
    faqs: [
      {
        question: "Can you model improvement budgets in Dallas, TX flex properties?",
        answer:
          `We provide improvement schedules for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} flex assets, including contractor availability and permit timing so improvement exchanges stay compliant.`,
      },
      {
        question: "How do you handle partial office build-outs in Dallas, TX?",
        answer:
          `We calculate demolition and rebuild allowances for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} spaces to ensure replacement property value remains aligned with IRS rules.`,
      },
      {
        question: "Do you coordinate equipment relocation in Dallas, TX?",
        answer:
          `Yes. We engage industrial movers and reliability engineers located in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to stage production transitions around closing deadlines.`,
      },
    ],
    keywords: [
      "Dallas flex space 1031",
      "Dallas TX light manufacturing exchange",
      "Dallas adaptive reuse 1031 replacement",
      "Dallas flex identification help",
    ],
    category: "Flex",
  },
  {
    slug: "dallas-hospitality-repositioning-exchange",
    name: `${PRIMARY_CITY} Hospitality Repositioning Exchange`,
    shortDescription:
      "Target hospitality assets in demand corridors with repositioning strategies aligned to exchange proceeds.",
    overview:
      `From downtown convention hotels to extended stay inventory in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}, we build replacement lists that balance RevPAR trends, brand commitments, and renovation appetites.`,
    valuePoints: [
      "Brand encumbrance analysis with flag transition planning.",
      "Renovation cost benchmarking including FF&E and PIP obligations.",
      "Three year demand pacing using STR and Visit Dallas data.",
    ],
    deliverables: [
      "Hospitality investment memo with stabilized NOI projections.",
      "Renovation timeline and capital stack outline for PIP execution.",
      "Identification filing exhibits tailored to hospitality compliance.",
    ],
    timeline: [
      { label: "Phase 1", detail: "Gather RevPAR history and brand agreements for relinquished asset comparison." },
      { label: "Phase 2", detail: `Confirm franchise approvals, management agreements, and PIP scope in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.` },
      { label: "Phase 3", detail: "Close with lender, franchise, and QI approvals aligned before 180 day deadline." },
    ],
    related: [
      "dallas-timeline-45-180-day-control",
      "dallas-portfolio-sequencing-exchange",
      "dallas-lender-preflight-coordination",
      "dallas-improvement-exchange-build-to-suit",
    ],
    faqs: [
      {
        question: "How do you underwrite hospitality PIPs in Dallas, TX?",
        answer:
          `We compare local contractor bids and supply chain lead times in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to allocate realistic renovation budgets inside the exchange timeline.`,
      },
      {
        question: "Can you evaluate management agreements in Dallas, TX?",
        answer:
          `Yes. We summarize management fee waterfalls, termination rights, and key money obligations tied to ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} hotel operations.`,
      },
      {
        question: "Do you monitor convention bookings in Dallas, TX?",
        answer:
          `We track convention center calendars and group booking pace for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to validate forward demand assumptions.`,
      },
    ],
    keywords: [
      "Dallas hotel 1031 replacement",
      "Dallas hospitality exchange help",
      "Dallas extended stay 1031",
      "Dallas PIP planning exchange",
    ],
    category: "Hospitality",
  },
  {
    slug: "dallas-land-assemblage-1031-plan",
    name: `${PRIMARY_CITY} Land Assemblage 1031 Plan`,
    shortDescription:
      "Assemble entitled and raw land tracts near growth corridors with entitlement diligence baked into exchange pacing.",
    overview:
      `Investors often redeploy capital into land within ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} for future vertical development. We identify parcels with utility access, zoning momentum, and seller readiness to accommodate exchange restrictions.`,
    valuePoints: [
      "Zoning and future land use map overlays referencing Dallas planning documents.",
      "Topography, floodplain, and utility capacity summaries for each site.",
      "Entitlement calendar with probable approval durations by municipality.",
    ],
    deliverables: [
      "Assemblage map showing parcel ownership, pricing, and contract status.",
      "Feasibility checklists covering environmental, geotechnical, and access considerations.",
      "Identification forms with legal descriptions and contract milestones.",
    ],
    timeline: [
      { label: "Days 1 to 10", detail: `Shortlist candidate parcels within ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} growth zones.` },
      { label: "Days 11 to 35", detail: "Run entitlement diligence, survey coordination, and option agreement drafting." },
      { label: "Days 36 to 180", detail: "Advance closing conditions, lender approvals, and offsite infrastructure commitments." },
    ],
    related: [
      "dallas-infill-development-parcel-scouting",
      "dallas-build-to-suit-pipeline-management",
      "dallas-improvement-exchange-build-to-suit",
      "dallas-1031-market-comp-dashboards",
    ],
    faqs: [
      {
        question: "Do you confirm utility availability in Dallas, TX land exchanges?",
        answer:
          `We obtain utility verification letters and capacity confirmations from providers serving ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} for every land parcel before you identify.`,
      },
      {
        question: "Can you manage phased closings in Dallas, TX?",
        answer:
          `Yes. We structure phased takedowns with aligned option payments for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} assemblages to keep closings within the 180 day window.`,
      },
      {
        question: "How do you address agricultural rollback taxes in Dallas, TX?",
        answer:
          `We model rollback exposure and coordinate with ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} tax professionals to budget for valuation changes before funding.`,
      },
    ],
    keywords: [
      "Dallas land 1031 exchange",
      "Dallas TX assemblage replacement",
      "Dallas raw land identification help",
      "Dallas entitlement 1031 planning",
    ],
    category: "Land",
  },
  {
    slug: "dallas-mixed-use-redevelopment-sourcing",
    name: `${PRIMARY_CITY} Mixed-Use Redevelopment Sourcing`,
    shortDescription:
      "Blend residential, retail, and office components with risk controls that satisfy exchange requirements.",
    overview:
      `Mixed-use nodes in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} deliver income and appreciation potential. We evaluate asset mix, absorption projections, and governing documents to build diversified replacement options.`,
    valuePoints: [
      "Cash flow waterfalls by component with scenario planning for lease-up timing.",
      "Shared parking agreement analysis and cost allocations.",
      "Community improvement district assessment modeling for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} projects.",
    ],
    deliverables: [
      "Asset mix profile with exposure limits to each use type.",
      "Governance document summary including HOA, POA, and master developer agreements.",
      "Identification submission package with stratified valuation breakdowns.",
    ],
    timeline: [
      { label: "Phase 1", detail: "Assess relinquished portfolio mix and target replacements that balance income streams." },
      { label: "Phase 2", detail: `Underwrite multi use P&L projections and absorption data for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.` },
      { label: "Phase 3", detail: "Finalize acquisition financing and governance consents before closing." },
    ],
    related: [
      "dallas-portfolio-sequencing-exchange",
      "dallas-underwriting-rent-roll-review",
      "dallas-1031-market-comp-dashboards",
      "dallas-three-property-identification-lists",
    ],
    faqs: [
      {
        question: "How do you handle HOA approvals in Dallas, TX mixed-use deals?",
        answer:
          `We coordinate with HOA and POA boards in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to confirm transfer requirements and assessment budgets before identification.`,
      },
      {
        question: "Can you break down income streams in Dallas, TX mixed-use assets?",
        answer:
          `Yes. We separate residential, retail, and office cash flows within ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} projects to model risk-weighted performance for your QI package.`,
      },
      {
        question: "Do you evaluate public-private partnership terms in Dallas, TX?",
        answer:
          `We review tax increment financing, PID assessments, and incentive agreements tied to ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} developments to validate obligations.`,
      },
    ],
    keywords: [
      "Dallas mixed-use 1031",
      "Dallas TX redevelopment exchange",
      "Dallas multi component replacement property",
      "Dallas mixed-use identification help",
    ],
    category: "Mixed Use",
  },
  {
    slug: "dallas-reverse-exchange-control",
    name: `${PRIMARY_CITY} Reverse Exchange Control`,
    shortDescription:
      "Structure reverse exchanges with exchange accommodation titleholder (EAT) oversight and lender coordination.",
    overview:
      `Competitive assets in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} often require acquisition before a sale closes. We administer parking arrangements, loan guarantees, and tax compliance to deliver a reverse exchange that protects timelines.`,
    valuePoints: [
      "Exchange accommodation titleholder onboarding and document control.",
      "Debt coordination with lenders to manage guaranty and collateral alignment.",
      "Milestone tracking to ensure relinquished sale closes inside 180 day window.",
    ],
    deliverables: [
      "Reverse exchange playbook covering EAT agreements, assignment of rights, and parking steps.",
      "Timeline tracker with alerts for relinquished sale and replacement improvements.",
      `Risk memo addressing financing, tax, and operational considerations in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.`,
    ],
    timeline: [
      { label: "Pre-Acquisition", detail: "Set up EAT structure, draft parking agreements, and align lender approvals." },
      { label: "Acquisition", detail: "Fund replacement property into EAT, begin improvement or stabilization activities." },
      { label: "Disposition", detail: "Close relinquished sale and convey property from EAT before 180 day deadline." },
    ],
    related: [
      "dallas-timeline-45-180-day-control",
      "dallas-improvement-exchange-build-to-suit",
      "dallas-lender-preflight-coordination",
      "dallas-portfolio-sequencing-exchange",
    ],
    faqs: [
      {
        question: "How do you manage EAT costs in Dallas, TX?",
        answer:
          `We itemize EAT fees, legal expenses, and anticipated holding costs within ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} so you budget accurately before launching the reverse exchange.`,
      },
      {
        question: "Can you handle construction draws while the EAT holds title in Dallas, TX?",
        answer:
          `Yes. We supervise draw requests, lien releases, and lender inspections for projects inside ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} during the parking period.`,
      },
      {
        question: "Do you coordinate with accounting teams in Dallas, TX?",
        answer:
          `We align with your accounting and tax advisors in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to document parking period transactions for Form 8824 reporting.`,
      },
    ],
    keywords: [
      "Dallas reverse 1031 exchange",
      "Dallas TX EAT structure",
      "Dallas reverse exchange coordinator",
      "Dallas 180 day reverse exchange help",
    ],
    category: "Exchange Strategy",
  },
  {
    slug: "dallas-improvement-exchange-build-to-suit",
    name: `${PRIMARY_CITY} Improvement Exchange and Build-to-Suit`,
    shortDescription:
      "Execute improvement exchanges with construction milestones monitored for IRS compliance.",
    overview:
      `When investors customize replacements in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}, improvements must be placed in service before the 180 day deadline. We coordinate design, permitting, and draw schedules so value is recognized inside the exchange period.`,
    valuePoints: [
      "General contractor selection support with availability reviews in North Texas.",
      "Permitting roadmap across Dallas, Plano, and suburban jurisdictions.",
      "Budget variance tracking with contingency management and lien oversight.",
    ],
    deliverables: [
      "Improvement exchange scheduling tool aligned to IRS safe harbors.",
      "Construction document checklist for QI and EAT coordination.",
      "Weekly status reports combining field updates and funding needs.",
    ],
    timeline: [
      { label: "Pre-Closing", detail: `Finalize plans, permits, and contractor commitments across ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.` },
      { label: "Post-Closing", detail: "Manage draw schedules, inspections, and invoice approvals during construction." },
      { label: "Completion", detail: "Document placed-in-service milestones ahead of 180 day deadline." },
    ],
    related: [
      "dallas-build-to-suit-pipeline-management",
      "dallas-reverse-exchange-control",
      "dallas-lender-preflight-coordination",
      "dallas-infill-development-parcel-scouting",
    ],
    faqs: [
      {
        question: "How do you verify completion percentage in Dallas, TX?",
        answer:
          `We use third party inspectors and photo logs across ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} jobsites to certify progress before submitting requisitions.`,
      },
      {
        question: "Can you manage tenant improvement coordination in Dallas, TX?",
        answer:
          `Yes. We integrate tenant improvement schedules from ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} lessees into the improvement exchange plan so obligations are met on time.`,
      },
      {
        question: "Do you document cost segregation impacts in Dallas, TX?",
        answer:
          `We catalog improvement costs for your ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} tax team to evaluate cost segregation choices after completion.`,
      },
    ],
    keywords: [
      "Dallas improvement exchange support",
      "Dallas build-to-suit 1031",
      "Dallas construction exchange timelines",
      "Dallas 180 day improvement exchange",
    ],
    category: "Exchange Strategy",
  },
  {
    slug: "dallas-200-percent-identification-modeling",
    name: `${PRIMARY_CITY} 200 Percent Identification Modeling`,
    shortDescription:
      "Design diversified identification lists with value weighting and compliance scoring under the 200 percent rule.",
    overview:
      `Investors balancing multiple ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} assets often rely on the 200 percent rule. We model aggregate values, contingency rankings, and lender alignment to keep lists compliant and flexible.`,
    valuePoints: [
      "Scenario planners showing identification coverage ratios versus relinquished value.",
      "Lender fit analysis flagging leverage constraints across each candidate.",
      "Risk scoring for closing certainty, lease rollover, and capital expenditure exposure.",
    ],
    deliverables: [
      "Identification workbook with automated compliance checks.",
      "Communication toolkit for notifying the qualified intermediary.",
      "Fallback strategy memo with instructions if a candidate fails diligence.",
    ],
    timeline: [
      { label: "Preparation", detail: "Gather pricing, contract status, and value confirmations for each target asset." },
      { label: "Submission", detail: "Deliver identification packet with supporting evidence before midnight of day 45." },
      { label: "Execution", detail: "Monitor contingencies and reallocate focus if a candidate drops out." },
    ],
    related: [
      "dallas-three-property-identification-lists",
      "dallas-portfolio-sequencing-exchange",
      "dallas-timeline-45-180-day-control",
      "dallas-1031-market-comp-dashboards",
    ],
    faqs: [
      {
        question: "How do you calculate 200 percent compliance in Dallas, TX?",
        answer:
          `We cross check fair market values for each ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} candidate and ensure aggregated totals stay within the 200 percent limit before submitting the list.`,
      },
      {
        question: "Do you provide backup property templates in Dallas, TX?",
        answer:
          `Yes. We supply backup property forms that align with ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} market data so your QI can accept substitutions quickly.`,
      },
      {
        question: "Can you integrate DST positions in Dallas, TX?",
        answer:
          `We include DST allocations in the compliance model for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors to maintain diversification.`,
      },
    ],
    keywords: [
      "Dallas 200 percent rule 1031",
      "Dallas identification modeling",
      "Dallas TX exchange list compliance",
      "Dallas multi property 1031 planning",
    ],
    category: "Exchange Strategy",
  },
  {
    slug: "dallas-three-property-identification-lists",
    name: `${PRIMARY_CITY} Three Property Identification Lists`,
    shortDescription:
      "Engineer three property lists with ranked backups, diligence status, and QI ready memorandums.",
    overview:
      `When quality trumps quantity, our ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} team crafts three property submissions with rigorous vetting, ensuring each candidate can close inside the IRS schedule.`,
    valuePoints: [
      "Checklist tracking for title, survey, environmental, and lease diligence.",
      "Loan term sheet matching to confirm financing will clear inside 180 days.",
      "Communication cadence with sellers, brokers, and QIs to keep deadlines visible.",
    ],
    deliverables: [
      "Three property memorandum with ranked selections and supporting data.",
      "Seller engagement playbook with contact info, expectations, and contingency plans.",
      "Deadline tracker synced with calendar reminders for your internal teams.",
    ],
    timeline: [
      { label: "Selection", detail: `Shortlist three high certainty assets within ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} by day 30.` },
      { label: "Documentation", detail: "Complete diligence checklists and confirm financing capacity by day 40." },
      { label: "Submission", detail: "Transmit identification to QI on day 45 with confirmation receipt stored." },
    ],
    related: [
      "dallas-200-percent-identification-modeling",
      "dallas-timeline-45-180-day-control",
      "dallas-underwriting-rent-roll-review",
      "dallas-lender-preflight-coordination",
    ],
    faqs: [
      {
        question: "How do you rank three property candidates in Dallas, TX?",
        answer:
          `We rank by diligence progress, financing confidence, and seller readiness specific to ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} transactions.`,
      },
      {
        question: "Do you notify QIs in Dallas, TX directly?",
        answer:
          `We prepare transmittal letters and coordinate direct delivery to your QI serving ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} holdings.`,
      },
      {
        question: "Can you adjust lists if a property falls out in Dallas, TX?",
        answer:
          `Yes. We maintain backup candidates in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} and document substitutions if allowed by IRS rules.`,
      },
    ],
    keywords: [
      "Dallas three property 1031 list",
      "Dallas identification memo",
      "Dallas TX QI submission help",
      "Dallas precise 1031 identification",
    ],
    category: "Exchange Strategy",
  },
  {
    slug: "dallas-dst-placement-advisory",
    name: `${PRIMARY_CITY} DST Placement Advisory`,
    shortDescription:
      "Guide Delaware Statutory Trust allocations that complement direct replacement assets and timeline demands.",
    overview:
      `DST allocations give ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors backup flexibility. We monitor DST sponsors, asset performance, and subscription windows to keep exchanges moving when direct deals stall.`,
    valuePoints: [
      "Sponsor due diligence covering track records, reporting cadence, and liquidity policies.",
      "DST queue monitoring to confirm availability before filing identification letters.",
      "Tax and cash flow modeling that compares DST cash yields to direct asset returns.",
    ],
    deliverables: [
      "DST short list with sponsor summaries and property level metrics.",
      "Risk disclosure checklist for investor acknowledgement.",
      "Integration plan outlining how DST shares fit into identification strategies.",
    ],
    timeline: [
      { label: "Pre-Identification", detail: `Secure DST allocations or reservations aligned to your ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} exchange deadline.` },
      { label: "Identification Filing", detail: "List DST positions alongside direct assets to maintain closing flexibility." },
      { label: "Closing", detail: "Coordinate funding logistics with sponsor, QI, and escrow before day 180." },
    ],
    related: [
      "dallas-multifamily-replacement-identification",
      "dallas-retail-nnn-replacement-search",
      "dallas-200-percent-identification-modeling",
      "dallas-three-property-identification-lists",
    ],
    faqs: [
      {
        question: "How do you vet DST sponsors for Dallas, TX investors?",
        answer:
          `We evaluate sponsor capitalization, reporting cadence, and prior offering performance with a focus on opportunities that serve ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors.`,
      },
      {
        question: "Can you align DST cash flow needs in Dallas, TX?",
        answer:
          `Yes. We project quarterly cash flow expectations and compare them with direct acquisition yields available in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.`,
      },
      {
        question: "Do you track DST closing calendars in Dallas, TX?",
        answer:
          `We monitor subscription capacity, funding deadlines, and replacement asset characteristics so ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors stay within timelines.`,
      },
    ],
    keywords: [
      "Dallas DST 1031 advisor",
      "Dallas TX DST exchange backup",
      "Dallas DST identification help",
      "Dallas 45 day DST replacement",
    ],
    category: "Exchange Strategy",
  },
  {
    slug: "dallas-timeline-45-180-day-control",
    name: `${PRIMARY_CITY} 45 and 180 Day Timeline Control`,
    shortDescription:
      "Command every deadline with automated reminders, escrow coordination, and compliance documentation.",
    overview:
      `IRS deadlines are unforgiving. Our ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} control desk monitors every milestone from relinquished closing to 180 day funding, providing escalation paths if delays surface.`,
    valuePoints: [
      "Integrated timeline tracker synced to your calendar, team emails, and QI communications.",
      "Escrow milestone audits that confirm funds movement, payoff statements, and net proceeds within ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.",
      "Risk alerts when inspections or loan approvals threaten 180 day completion.",
    ],
    deliverables: [
      "Deadline dashboard with automated reminders for every 1031 stage.",
      "Variance reports summarizing schedule slippage and recovery plans.",
      "Closing binder template to document compliance for Form 8824.",
    ],
    timeline: [
      { label: "Day 0", detail: "Record relinquished closing and schedule key deliverables." },
      { label: "Day 45", detail: "Confirm identification receipt with QI and stakeholders." },
      { label: "Day 180", detail: "Verify funding, title policies, and statement of adjustments for IRS records." },
    ],
    related: [
      "dallas-200-percent-identification-modeling",
      "dallas-three-property-identification-lists",
      "dallas-lender-preflight-coordination",
      "dallas-portfolio-sequencing-exchange",
    ],
    faqs: [
      {
        question: "How do you monitor 45 day milestones in Dallas, TX?",
        answer:
          `We create redundant reminders, QI confirmations, and daily status checks unique to ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} transactions so identification never slips.`,
      },
      {
        question: "Do you manage 180 day closing checklists in Dallas, TX?",
        answer:
          `Yes. We coordinate lender, title, and seller deliverables within ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to close before the deadline.`,
      },
      {
        question: "Can you escalate issues with title companies in Dallas, TX?",
        answer:
          `We maintain relationships with title officers in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} and escalate curative items immediately to protect schedules.`,
      },
    ],
    keywords: [
      "Dallas 45 day deadline help",
      "Dallas 180 day exchange schedule",
      "Dallas TX 1031 timeline control",
      "Dallas exchange reminder service",
    ],
    category: "Timeline",
  },
  {
    slug: "dallas-underwriting-rent-roll-review",
    name: `${PRIMARY_CITY} Underwriting and Rent Roll Review`,
    shortDescription:
      "Validate income statements, rent rolls, and trailing twelve data before you lock identification lists.",
    overview:
      `Underwriting mistakes erode returns. Our ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} analysts scrub rent rolls, expenses, and market comparables so replacement assets deliver the cash flow you expect.`,
    valuePoints: [
      "Rent roll standardization with exposure mapping for expirations and concessions.",
      "T12 normalization removing one-time items and highlighting controllable expenses.",
      "Market comp pulls leveraging Dallas appraisal districts and brokerage reporting.",
    ],
    deliverables: [
      "Underwriting memo with assumptions, stress tests, and sensitivity tables.",
      "Variance tracker comparing pro forma to in-place performance.",
      "Questions log for brokers, sellers, and property managers.",
    ],
    timeline: [
      { label: "Data Intake", detail: `Collect rent rolls, T12s, and operating budgets from ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} sellers.` },
      { label: "Analysis", detail: "Normalize income and expenses, benchmark results, and document findings." },
      { label: "Delivery", detail: "Review outputs with investors and advisors before identification submission." },
    ],
    related: [
      "dallas-multifamily-replacement-identification",
      "dallas-retail-nnn-replacement-search",
      "dallas-industrial-logistics-exchange",
      "dallas-1031-market-comp-dashboards",
    ],
    faqs: [
      {
        question: "Do you reconcile CAM charges in Dallas, TX?",
        answer:
          `We reconcile CAM recoveries, true-ups, and caps for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} properties to protect net operating income projections.`,
      },
      {
        question: "Can you review tenant estoppel requirements in Dallas, TX?",
        answer:
          `Yes. We summarize estoppel language, notice periods, and delivery risks for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} leases.`,
      },
      {
        question: "Do you integrate lender underwriting feedback in Dallas, TX?",
        answer:
          `We align our models with lender covenants and DSCR requirements prevalent in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.`,
      },
    ],
    keywords: [
      "Dallas rent roll audit 1031",
      "Dallas T12 review service",
      "Dallas underwriting support exchange",
      "Dallas income verification 1031",
    ],
    category: "Underwriting",
  },
  {
    slug: "dallas-lender-preflight-coordination",
    name: `${PRIMARY_CITY} Lender Preflight Coordination`,
    shortDescription:
      "Align lenders early with debt sizing, term sheets, and closing deliverables tailored to exchange timelines.",
    overview:
      `Debt markets move quickly in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. We stage lender conversations, gather term sheets, and manage diligence so financing is never the reason an exchange fails.`,
    valuePoints: [
      "Lender matrix covering banks, life companies, debt funds, and agency options active in North Texas.",
      "Term sheet comparison for rate, amortization, reserves, and prepayment flexibility.",
      "Closing checklist that merges lender requirements with QI process flow.",
    ],
    deliverables: [
      "Financing brief summarizing recommended lenders and next steps.",
      "Document tracker for appraisals, engineering, and legal deliverables.",
      "Contingency action plan if credit committees request changes.",
    ],
    timeline: [
      { label: "Week 1", detail: "Introduce exchange transaction to preferred lenders and collect preliminary quotes." },
      { label: "Week 3", detail: "Select lender, order third party reports, and align funding calendar with 180 day deadline." },
      { label: "Week 7", detail: "Finalize loan documents, coordinate closing statement, and confirm QI wiring instructions." },
    ],
    related: [
      "dallas-timeline-45-180-day-control",
      "dallas-underwriting-rent-roll-review",
      "dallas-industrial-logistics-exchange",
      "dallas-sale-leaseback-1031-support",
    ],
    faqs: [
      {
        question: "Do you coordinate rate locks in Dallas, TX?",
        answer:
          `We track rate movement and secure locks with lenders operating in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to keep underwriting stable.`,
      },
      {
        question: "How do you manage appraisal scheduling in Dallas, TX?",
        answer:
          `We coordinate appraisers, provide data packages, and monitor delivery dates for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} assets.`,
      },
      {
        question: "Can you prepare lender executive summaries in Dallas, TX?",
        answer:
          `Yes. We produce executive summaries highlighting the ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} asset story and exchange profile.`,
      },
    ],
    keywords: [
      "Dallas lender coordination 1031",
      "Dallas exchange financing support",
      "Dallas term sheet comparison",
      "Dallas 1031 debt preflight",
    ],
    category: "Financing",
  },
  {
    slug: "dallas-portfolio-sequencing-exchange",
    name: `${PRIMARY_CITY} Portfolio Sequencing Exchange`,
    shortDescription:
      "Stagger multiple sales and acquisitions with synchronized identification strategies and capital deployment.",
    overview:
      `Large investors in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} often juggle several exchanges. We align proceeds, timelines, and property types to keep every transaction compliant and cash efficient.`,
    valuePoints: [
      "Sequencing roadmap mapping sale and purchase windows with risk buffers.",
      "Capital allocation modeling across multiple replacement properties.",
      "Communication framework linking brokers, lenders, attorneys, and QIs across deals.",
    ],
    deliverables: [
      "Master exchange calendar with dependencies and contingency triggers.",
      "Portfolio level reporting summarizing equity deployed, leverage, and identification coverage.",
      "Weekly command center call agenda and status summary.",
    ],
    timeline: [
      { label: "Planning", detail: `Document all upcoming sales and desired acquisitions within ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.` },
      { label: "Execution", detail: "Launch sales, lock replacements, and monitor cross-deal impacts." },
      { label: "Completion", detail: "Close each transaction, reconcile proceeds, and document compliance." },
    ],
    related: [
      "dallas-timeline-45-180-day-control",
      "dallas-200-percent-identification-modeling",
      "dallas-three-property-identification-lists",
      "dallas-underwriting-rent-roll-review",
    ],
    faqs: [
      {
        question: "How do you prevent overlap between exchanges in Dallas, TX?",
        answer:
          `We map every deadline and create buffer periods specific to ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} transactions so resources never conflict.`,
      },
      {
        question: "Can you coordinate multiple QIs in Dallas, TX?",
        answer:
          `Yes. We manage communication across QIs and legal teams working in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to prevent documentation gaps.`,
      },
      {
        question: "Do you provide executive reporting in Dallas, TX?",
        answer:
          `We deliver dashboard style reports highlighting status, risks, and capital allocation across ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} deals.`,
      },
    ],
    keywords: [
      "Dallas portfolio 1031 management",
      "Dallas multi asset exchange plan",
      "Dallas sequencing 1031 support",
      "Dallas exchange coordination team",
    ],
    category: "Portfolio Strategy",
  },
  {
    slug: "dallas-sale-leaseback-1031-support",
    name: `${PRIMARY_CITY} Sale-Leaseback 1031 Support`,
    shortDescription:
      "Structure sale-leaseback replacements with credit review, lease negotiation, and timeline discipline.",
    overview:
      `Operating companies in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} leverage sale-leasebacks to unlock capital. We evaluate buyer appetite, lease terms, and credit to ensure the replacement holds value throughout the exchange horizon.`,
    valuePoints: [
      "Credit analysis of counterparties including audited financials and leverage metrics.",
      "Lease structuring support covering rent escalations, maintenance obligations, and options.",
      "Appraisal and broker opinion coordination to substantiate fair market value.",
    ],
    deliverables: [
      "Sale-leaseback memorandum with risk assessment and recommendation.",
      "Lease negotiation checklist with fallback positions.",
      "Closing binder checklist including estoppels, SNDA, and insurance certificates.",
    ],
    timeline: [
      { label: "Pre-LOI", detail: `Assess operator financials and market lease benchmarks in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.` },
      { label: "Diligence", detail: "Negotiate lease terms, confirm tenant credit, and collect third party reports." },
      { label: "Closing", detail: "Finalize lease execution, lender approvals, and QI documentation." },
    ],
    related: [
      "dallas-lender-preflight-coordination",
      "dallas-underwriting-rent-roll-review",
      "dallas-timeline-45-180-day-control",
      "dallas-like-kind-audit-and-risk",
    ],
    faqs: [
      {
        question: "Do you verify tenant credit in Dallas, TX sale-leasebacks?",
        answer:
          `We review financial statements and covenant compliance for operators headquartered in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.`,
      },
      {
        question: "Can you benchmark rent levels in Dallas, TX?",
        answer:
          `Yes. We compile comparable lease data from ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} industrial, office, or specialty assets.`,
      },
      {
        question: "Do you negotiate landlord protections in Dallas, TX?",
        answer:
          `We recommend landlord protections such as security deposits, guarantees, and maintenance standards suitable for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} agreements.`,
      },
    ],
    keywords: [
      "Dallas sale-leaseback 1031",
      "Dallas tenant credit review",
      "Dallas TX leaseback replacement",
      "Dallas sale-leaseback exchange help",
    ],
    category: "Corporate",
  },
  {
    slug: "dallas-build-to-suit-pipeline-management",
    name: `${PRIMARY_CITY} Build-to-Suit Pipeline Management`,
    shortDescription:
      "Oversee build-to-suit development pipelines that align with exchange capital deployment schedules.",
    overview:
      `Demand for bespoke facilities in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} requires disciplined oversight. We coordinate developer agreements, GMP contracts, and draw schedules to keep build-to-suit exchanges compliant.`,
    valuePoints: [
      "Developer vetting covering track record, bonding capacity, and financial strength.",
      "Guaranteed maximum price contract review with change order controls.",
      "Construction milestone monitoring integrated with 1031 improvement deadlines.",
    ],
    deliverables: [
      "Build-to-suit governance manual with responsibilities and communication cadence.",
      "Milestone tracker tied to funding events and lender inspections.",
      "Risk mitigation plan addressing delays, cost overruns, and contingency usage.",
    ],
    timeline: [
      { label: "Engagement", detail: `Align developer agreements and GMP terms with ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} counsel.` },
      { label: "Construction", detail: "Monitor progress, approve draws, and maintain compliance documentation." },
      { label: "Delivery", detail: "Certify substantial completion and confirm placed-in-service requirements before deadline." },
    ],
    related: [
      "dallas-improvement-exchange-build-to-suit",
      "dallas-lender-preflight-coordination",
      "dallas-infill-development-parcel-scouting",
      "dallas-timeline-45-180-day-control",
    ],
    faqs: [
      {
        question: "How do you manage change orders in Dallas, TX build-to-suits?",
        answer:
          `We review every change order for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} projects and track budget impact against exchange requirements.`,
      },
      {
        question: "Do you coordinate tenant design approvals in Dallas, TX?",
        answer:
          `Yes. We schedule design review meetings with tenants operating in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to maintain timelines.`,
      },
      {
        question: "Can you integrate developer reporting into exchange files in Dallas, TX?",
        answer:
          `We archive developer reports, photos, and certificates for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} exchanges to support QI documentation.`,
      },
    ],
    keywords: [
      "Dallas build-to-suit pipeline",
      "Dallas GMP oversight 1031",
      "Dallas development exchange control",
      "Dallas build-to-suit replacement",
    ],
    category: "Development",
  },
  {
    slug: "dallas-infill-development-parcel-scouting",
    name: `${PRIMARY_CITY} Infill Development Parcel Scouting`,
    shortDescription:
      "Locate infill parcels near transit, employment hubs, and growth corridors suited for redevelopment exchanges.",
    overview:
      `Infill opportunities across ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} require fast sourcing. We mine plat records, off-market leads, and zoning cases to secure sites before competing developers.`,
    valuePoints: [
      "Real-time monitoring of zoning applications and concept plans in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.",
      "Seller outreach campaigns targeting legacy owners and family offices.",
      "Access review covering curb cuts, utilities, and right-of-way considerations.",
    ],
    deliverables: [
      "Parcel scouting report with ownership, pricing guidance, and entitlement status.",
      "Marketing collateral for off-market approaches.",
      "Risk memo covering title objections, environmental considerations, and survey requirements.",
    ],
    timeline: [
      { label: "Research", detail: `Aggregate public and proprietary data sources across ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.` },
      { label: "Outreach", detail: "Engage owners, gather pricing guidance, and arrange access agreements." },
      { label: "Selection", detail: "Negotiate contracts, align identification submissions, and prepare closing steps." },
    ],
    related: [
      "dallas-land-assemblage-1031-plan",
      "dallas-build-to-suit-pipeline-management",
      "dallas-improvement-exchange-build-to-suit",
      "dallas-1031-market-comp-dashboards",
    ],
    faqs: [
      {
        question: "Do you contact owners directly in Dallas, TX?",
        answer:
          `We conduct respectful outreach to ownership groups across ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}, documenting responses and pricing expectations.`,
      },
      {
        question: "Can you evaluate transit proximity in Dallas, TX?",
        answer:
          `Yes. We map proximity to DART lines, bus corridors, and highway access within ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.`,
      },
      {
        question: "Do you analyze demolition scope in Dallas, TX?",
        answer:
          `We outline demolition costs, permit requirements, and hauling considerations for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} redevelopment sites.`,
      },
    ],
    keywords: [
      "Dallas infill 1031 parcels",
      "Dallas redevelopment site scouting",
      "Dallas TX infill exchange help",
      "Dallas off market development land",
    ],
    category: "Development",
  },
  {
    slug: "dallas-1031-market-comp-dashboards",
    name: `${PRIMARY_CITY} 1031 Market Comp Dashboards`,
    shortDescription:
      "Deliver live market comparables, cap rate trends, and absorption metrics for smarter exchange decisions.",
    overview:
      `Transparent data keeps exchanges efficient. We build dashboards covering ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} cap rates, lease rates, and sales comps by asset class.`,
    valuePoints: [
      "Automated data feeds from CoStar, Real Capital Analytics, and local appraisal districts.",
      "Custom filters for asset class, submarket, and transaction size across ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.",
      "Exportable charts for investment committee packages.",
    ],
    deliverables: [
      "Interactive dashboard access with scheduled refreshes.",
      "Monthly commentary summarizing notable transactions in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.",
      "Alert system when comparable sales occur near your target metrics.",
    ],
    timeline: [
      { label: "Setup", detail: "Configure dashboards with investor targets and asset classes." },
      { label: "Monitoring", detail: "Push updates, insights, and comps during the 45 and 180 day windows." },
      { label: "Post-Closing", detail: "Archive data for audit and portfolio benchmarking." },
    ],
    related: [
      "dallas-underwriting-rent-roll-review",
      "dallas-multifamily-replacement-identification",
      "dallas-industrial-logistics-exchange",
      "dallas-portfolio-sequencing-exchange",
    ],
    faqs: [
      {
        question: "Do you include off-market intel in Dallas, TX dashboards?",
        answer:
          `We integrate broker conversations and off-market whispers from ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to highlight emerging opportunities.`,
      },
      {
        question: "Can you track lender spreads in Dallas, TX?",
        answer:
          `Yes. We add lender spread data for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to support financing decisions.`,
      },
      {
        question: "Do you provide committee ready exports in Dallas, TX?",
        answer:
          `We format dashboard exports into PDFs and slide decks used by investment committees in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.`,
      },
    ],
    keywords: [
      "Dallas 1031 market data",
      "Dallas TX cap rate dashboard",
      "Dallas exchange comps",
      "Dallas real estate analytics 1031",
    ],
    category: "Analytics",
  },
  {
    slug: "dallas-ranch-acreage-exchange",
    name: `${PRIMARY_CITY} Ranch and Acreage Exchange`,
    shortDescription:
      "Transition into large acreage, ranch, and recreational tracts with agricultural diligence and water rights review.",
    overview:
      `High net worth investors in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} often trade into acreage. We evaluate mineral reservations, grazing leases, and water access to keep rural exchanges compliant.`,
    valuePoints: [
      "Title chain review focused on mineral and surface rights in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.",
      "Agricultural tax status analysis to project rollback exposure.",
      "Water well, pond, and riparian rights verification.",
    ],
    deliverables: [
      "Ranch diligence checklist with environmental and survey requirements.",
      "Operational plan outlining grazing leases, wildlife exemptions, and improvements.",
      "Identification submission with metes and bounds legal descriptions.",
    ],
    timeline: [
      { label: "Discovery", detail: `Catalog target acreage within a two hour radius of ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.` },
      { label: "Diligence", detail: "Order surveys, review easements, and confirm tax status." },
      { label: "Closing", detail: "Coordinate title curative items, water testing, and improvement inspections." },
    ],
    related: [
      "dallas-land-assemblage-1031-plan",
      "dallas-like-kind-audit-and-risk",
      "dallas-timeline-45-180-day-control",
      "dallas-underwriting-rent-roll-review",
    ],
    faqs: [
      {
        question: "Do you evaluate mineral rights in Dallas, TX acreage deals?",
        answer:
          `We pull title records and deed history to confirm mineral, surface, and executive rights for properties near ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.`,
      },
      {
        question: "Can you manage agricultural exemptions in Dallas, TX?",
        answer:
          `Yes. We coordinate with county appraisal districts around ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to transfer or reapply for agricultural exemptions.`,
      },
      {
        question: "Do you inspect fences and improvements in Dallas, TX?",
        answer:
          `We arrange ranch inspections, fence assessments, and structural reviews within ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} counties.`,
      },
    ],
    keywords: [
      "Dallas ranch 1031 exchange",
      "Dallas acreage replacement property",
      "Dallas agricultural exemption exchange",
      "Dallas rural 1031 support",
    ],
    category: "Land",
  },
  {
    slug: "dallas-like-kind-audit-and-risk",
    name: `${PRIMARY_CITY} Like-Kind Audit and Risk Review`,
    shortDescription:
      "Evaluate like-kind compliance, related party exposure, and documentation gaps before audits arise.",
    overview:
      `Audits are costly. We assess like-kind eligibility, ownership structures, and related party agreements for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors, providing clear remediation steps.`,
    valuePoints: [
      "Entity chart mapping to flag related party transactions and attribution issues.",
      "Like-kind matrix confirming asset classifications meet IRS definitions.",
      "Documentation audit covering exchange agreements, identification letters, and closing statements.",
    ],
    deliverables: [
      "Risk report outlining issues, mitigation actions, and responsible parties.",
      "Updated documentation checklist to maintain defensible records.",
      "Advisor coordination plan involving QI, tax counsel, and legal teams.",
    ],
    timeline: [
      { label: "Intake", detail: "Collect organization charts, exchange agreements, and property documents." },
      { label: "Analysis", detail: "Assess risk factors, cross check IRS guidance, and compile findings." },
      { label: "Follow-Up", detail: `Implement corrective actions with advisors in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.` },
    ],
    related: [
      "dallas-sale-leaseback-1031-support",
      "dallas-portfolio-sequencing-exchange",
      "dallas-timeline-45-180-day-control",
      "dallas-200-percent-identification-modeling",
    ],
    faqs: [
      {
        question: "Do you review related party leases in Dallas, TX?",
        answer:
          `We analyze related party leases and agreements tied to ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} assets to ensure compliance.`,
      },
      {
        question: "Can you assist during IRS audits in Dallas, TX?",
        answer:
          `We prepare supporting documentation and coordinate with tax counsel to respond to IRS inquiries impacting ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.`,
      },
      {
        question: "Do you document fair market value evidence in Dallas, TX?",
        answer:
          `We compile appraisals, broker opinions, and valuation memos for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} assets to substantiate fair market value.`,
      },
    ],
    keywords: [
      "Dallas like-kind audit review",
      "Dallas 1031 risk assessment",
      "Dallas related party 1031",
      "Dallas exchange compliance audit",
    ],
    category: "Compliance",
  },
  {
    slug: "dallas-1031-deadline-fast-track",
    name: `${PRIMARY_CITY} 1031 Deadline Fast Track`,
    shortDescription:
      "Rapid response service for investors inside the final ten days of identification or funding deadlines.",
    overview:
      `Late stage exchanges demand precision. Our ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} fast track unit mobilizes replacements, DST allocations, and lender approvals when timelines shrink.`,
    valuePoints: [
      "Rapid sourcing protocols tapping brokers, off-market contacts, and DST sponsors serving ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.",
      "Emergency lender alignment to secure bridge or agency commitments within days.",
      "Legal coordination that accelerates document review, signatures, and QI filings.",
    ],
    deliverables: [
      "Crisis action plan summarizing remaining milestones and owners.",
      "Contact playbook activating dedicated resources during extended hours.",
      "Post-event review documenting lessons learned for future exchanges.",
    ],
    timeline: [
      { label: "Hours 0 to 12", detail: "Assess status, gather documentation, and deploy task force members." },
      { label: "Hours 12 to 48", detail: "Source and contract replacements or DST allocations, secure financing, and craft identification letters." },
      { label: "Hours 48 to 120", detail: "Complete diligence, finalize closings, and archive compliance records." },
    ],
    related: [
      "dallas-timeline-45-180-day-control",
      "dallas-dst-placement-advisory",
      "dallas-lender-preflight-coordination",
      "dallas-200-percent-identification-modeling",
    ],
    faqs: [
      {
        question: "When should investors call the fast track team in Dallas, TX?",
        answer:
          `Contact us immediately when your ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} exchange has ten days or fewer before a deadline or when a primary replacement collapses unexpectedly.`,
      },
      {
        question: "Do you work nights and weekends in Dallas, TX?",
        answer:
          `Our ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} command desk maintains extended hours when fast track cases are active.`,
      },
      {
        question: "Can you integrate DST and direct assets in Dallas, TX?",
        answer:
          `We blend DST subscriptions with direct replacements inside ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to secure compliance under extreme deadlines.`,
      },
    ],
    keywords: [
      "Dallas 1031 deadline help",
      "Dallas emergency 45 day support",
      "Dallas fast track 1031 service",
      "Dallas last minute exchange",
    ],
    category: "Timeline",
  },
];

export function getAllServices(): Service[] {
  return services;
}
