import { PRIMARY_CITY, PRIMARY_STATE_ABBR } from "@/lib/constants";

export type Location = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  highlights: string[];
  services: string[];
  faqs: { question: string; answer: string }[];
  coordinates: { lat: number; lng: number };
};

export const locations: Location[] = [
  {
    slug: "uptown-dallas",
    name: "Uptown Dallas",
    headline: "Urban office and mixed-use exchanges steps from Klyde Warren Park.",
    description:
      `Investors pursuing walkable assets in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} focus on Uptown for trophy office, multifamily towers, and ground floor retail with premium lease rates.`,
    highlights: [
      "Strong Class A office absorption supported by legal and finance tenants.",
      "Luxury multifamily with stabilized occupancy and rent growth potential.",
      "Street retail and restaurant space benefiting from daytime and evening traffic.",
    ],
    services: [
      "dallas-multifamily-replacement-identification",
      "dallas-mixed-use-redevelopment-sourcing",
      "dallas-underwriting-rent-roll-review",
      "dallas-1031-market-comp-dashboards",
    ],
    faqs: [
      {
        question: "How competitive are replacement properties in Uptown Dallas, TX?",
        answer:
          `Uptown Dallas, ${PRIMARY_STATE_ABBR} attracts multiple offers, so we prioritize reverse or improvement exchanges when timing risks appear.`,
      },
      {
        question: "Are ground leases common in Uptown Dallas, TX?",
        answer:
          `Several Uptown Dallas, ${PRIMARY_STATE_ABBR} parcels include ground leases requiring advanced review of rent resets and assignment clauses.`,
      },
      {
        question: "Do lenders favor Uptown Dallas, TX office assets?",
        answer:
          `Lenders view Uptown Dallas, ${PRIMARY_STATE_ABBR} as a core market but still require updated leasing plans and TI budgets.`,
      },
      {
        question: "Is parking availability a concern in Uptown Dallas, TX?",
        answer:
          `Structured parking allocations in Uptown Dallas, ${PRIMARY_STATE_ABBR} must be verified early because ratios vary between mixed-use projects.`,
      },
    ],
    coordinates: { lat: 32.7976, lng: -96.801 },
  },
  {
    slug: "legacy-west-plano",
    name: "Legacy West Plano",
    headline: "Corporate campuses and mixed-use density on the Dallas North Tollway.",
    description:
      `Legacy West anchors corporate relocations north of ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}, offering stabilized office, multifamily, and retail supported by Fortune 500 tenants.`,
    highlights: [
      "Credit tenant office leases with long terms and expansion options.",
      "High-end multifamily communities appealing to corporate employees.",
      "Retail and entertainment venues with strong weekend foot traffic.",
    ],
    services: [
      "dallas-industrial-logistics-exchange",
      "dallas-multifamily-replacement-identification",
      "dallas-retail-nnn-replacement-search",
      "dallas-portfolio-sequencing-exchange",
    ],
    faqs: [
      {
        question: "Are corporate guarantees common in Legacy West Plano, TX?",
        answer:
          `Yes, many office assets in Legacy West Plano, ${PRIMARY_STATE_ABBR} feature corporate guarantees that improve lender reception.`,
      },
      {
        question: "How active is the multifamily pipeline in Legacy West Plano, TX?",
        answer:
          `Pipeline tracking in Legacy West Plano, ${PRIMARY_STATE_ABBR} shows continued deliveries, making rent roll stress testing critical.`,
      },
      {
        question: "Do NNN retail deals trade quickly in Legacy West Plano, TX?",
        answer:
          `Single tenant retail in Legacy West Plano, ${PRIMARY_STATE_ABBR} gathers national attention, so we prepare fast-track identification packages.`,
      },
      {
        question: "Is traffic congestion a risk in Legacy West Plano, TX?",
        answer:
          `Traffic around Legacy West Plano, ${PRIMARY_STATE_ABBR} requires ingress and egress studies to confirm ease of access for tenants.`,
      },
    ],
    coordinates: { lat: 33.0772, lng: -96.8246 },
  },
  {
    slug: "the-star-frisco",
    name: "The Star Frisco",
    headline: "Sports-anchored mixed-use with institutional ownership nearby.",
    description:
      `The Star District in Frisco couples entertainment with Class A office, retail, and hospitality that align with growth north of ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.`,
    highlights: [
      "Institutional sponsorship anchored by the Dallas Cowboys headquarters.",
      "Newer construction hospitality and retail with premium ADR performance.",
      "Rapid residential growth supporting mixed-use absorption.",
    ],
    services: [
      "dallas-hospitality-repositioning-exchange",
      "dallas-mixed-use-redevelopment-sourcing",
      "dallas-timeline-45-180-day-control",
      "dallas-1031-market-comp-dashboards",
    ],
    faqs: [
      {
        question: "What asset types perform best in The Star Frisco, TX?",
        answer:
          `Hospitality, retail, and boutique office perform well in The Star Frisco, ${PRIMARY_STATE_ABBR} thanks to entertainment driven demand.`,
      },
      {
        question: "Do we face higher CAM expenses in The Star Frisco, TX?",
        answer:
          `Shared amenities in The Star Frisco, ${PRIMARY_STATE_ABBR} increase CAM budgets, so expense auditing is essential.`,
      },
      {
        question: "Is lender appetite strong in The Star Frisco, TX?",
        answer:
          `Lenders favor stabilized assets in The Star Frisco, ${PRIMARY_STATE_ABBR} but request conservative hospitality underwriting.`,
      },
      {
        question: "Are there special event restrictions in The Star Frisco, TX?",
        answer:
          `Special event schedules in The Star Frisco, ${PRIMARY_STATE_ABBR} require coordination for parking and access covenants.`,
      },
    ],
    coordinates: { lat: 33.0985, lng: -96.8268 },
  },
  {
    slug: "las-colinas-irving",
    name: "Las Colinas Irving",
    headline: "Master planned lakeside development with office and multifamily balance.",
    description:
      `Las Colinas connects ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to DFW Airport with high-rise office, lakeside multifamily, and golf course hospitality assets.`,
    highlights: [
      "Canal and lakefront settings that boost multifamily absorption.",
      "Corporate headquarters and Class A office with amenity-rich campuses.",
      "Hospitality assets benefiting from convention and airport traffic.",
    ],
    services: [
      "dallas-industrial-logistics-exchange",
      "dallas-multifamily-replacement-identification",
      "dallas-hospitality-repositioning-exchange",
      "dallas-lender-preflight-coordination",
    ],
    faqs: [
      {
        question: "Are floodplain concerns material in Las Colinas Irving, TX?",
        answer:
          `Lake proximity in Las Colinas Irving, ${PRIMARY_STATE_ABBR} requires flood coverage verification during underwriting.`,
      },
      {
        question: "Is sublease exposure high in Las Colinas Irving, TX?",
        answer:
          `Office sublease inventories in Las Colinas Irving, ${PRIMARY_STATE_ABBR} fluctuate, so rent roll scrutiny is required.`,
      },
      {
        question: "Do we evaluate PID assessments in Las Colinas Irving, TX?",
        answer:
          `Yes, Las Colinas Irving, ${PRIMARY_STATE_ABBR} includes PID assessments that we confirm in financial models.`,
      },
      {
        question: "Is hospitality seasonality a factor in Las Colinas Irving, TX?",
        answer:
          `Convention schedules and airline business cycles influence hospitality pacing in Las Colinas Irving, ${PRIMARY_STATE_ABBR}.`,
      },
    ],
    coordinates: { lat: 32.878, lng: -96.939 },
  },
  {
    slug: "richardson-telecom-corridor",
    name: "Richardson Telecom Corridor",
    headline: "Tech heavy flex and data infrastructure along US-75.",
    description:
      `Richardson's Telecom Corridor houses data centers, flex spaces, and R&D campuses serving ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} innovation growth.`,
    highlights: [
      "Robust fiber infrastructure and utility redundancy for tech tenants.",
      "Attractive incentives for high-wage employers expanding in the corridor.",
      "Blend of older flex stock and new build-to-suit opportunities.",
    ],
    services: [
      "dallas-flex-light-manufacturing-1031",
      "dallas-build-to-suit-pipeline-management",
      "dallas-improvement-exchange-build-to-suit",
      "dallas-200-percent-identification-modeling",
    ],
    faqs: [
      {
        question: "What utility checks are vital in Richardson, TX?",
        answer:
          `Power, cooling, and fiber redundancy must be verified for Richardson, ${PRIMARY_STATE_ABBR} exchanges targeting data or lab space.`,
      },
      {
        question: "Are incentives available in Richardson, TX?",
        answer:
          `Richardson, ${PRIMARY_STATE_ABBR} offers abatements and grants for targeted industries, requiring coordination with economic development staff.`,
      },
      {
        question: "How is vacancy trending in Richardson, TX?",
        answer:
          `Vacancy in Richardson, ${PRIMARY_STATE_ABBR} varies by asset age, so we segment tours by building vintage.`,
      },
      {
        question: "Do we need specific zoning reviews in Richardson, TX?",
        answer:
          `Light industrial and flex zoning in Richardson, ${PRIMARY_STATE_ABBR} must be confirmed before submission to the QI.`,
      },
    ],
    coordinates: { lat: 32.9717, lng: -96.7081 },
  },
  {
    slug: "addison-belt-line",
    name: "Addison Belt Line",
    headline: "Restaurant row and mid-rise office with tollway access.",
    description:
      `Addison delivers dining, entertainment, and mid-rise office near ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}, making it attractive for retail and corporate relocation exchanges.`,
    highlights: [
      "Concentration of restaurants and nightlife drawing regional visitors.",
      "Accessible office product with lower basis than Uptown or Legacy West.",
      "Hotels capturing business travel and weekend entertainment stays.",
    ],
    services: [
      "dallas-retail-nnn-replacement-search",
      "dallas-sale-leaseback-1031-support",
      "dallas-hospitality-repositioning-exchange",
      "dallas-timeline-45-180-day-control",
    ],
    faqs: [
      {
        question: "Does Addison, TX rely on special events?",
        answer:
          `Events like Kaboom Town influence hospitality and retail projections in Addison, ${PRIMARY_STATE_ABBR}.`,
      },
      {
        question: "Are traffic studies needed in Addison, TX?",
        answer:
          `Ingress and parking studies are helpful for Addison, ${PRIMARY_STATE_ABBR} assets due to peak dining periods.`,
      },
      {
        question: "Do office tenants renew frequently in Addison, TX?",
        answer:
          `We analyze renewal probabilities for Addison, ${PRIMARY_STATE_ABBR} office tenants to calibrate cash flow forecasts.`,
      },
      {
        question: "Is noise a diligence issue in Addison, TX?",
        answer:
          `Restaurant and nightlife density in Addison, ${PRIMARY_STATE_ABBR} requires attention to noise clauses in leases.`,
      },
    ],
    coordinates: { lat: 32.9618, lng: -96.8292 },
  },
  {
    slug: "bishop-arts-dallas",
    name: "Bishop Arts Dallas",
    headline: "Historic district with boutique retail and creative multifamily.",
    description:
      `Bishop Arts offers adaptive reuse opportunities south of ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}, blending storefront retail, boutique multifamily, and creative office.`,
    highlights: [
      "Strong neighborhood identity driving foot traffic.",
      "Adaptive reuse buildings suitable for creative office or loft conversions.",
      "Independent retailers and restaurants seeking curated spaces.",
    ],
    services: [
      "dallas-infill-development-parcel-scouting",
      "dallas-multifamily-replacement-identification",
      "dallas-retail-nnn-replacement-search",
      "dallas-improvement-exchange-build-to-suit",
    ],
    faqs: [
      {
        question: "Are preservation guidelines strict in Bishop Arts Dallas, TX?",
        answer:
          `Historic overlays in Bishop Arts Dallas, ${PRIMARY_STATE_ABBR} require coordination with city staff before renovations.`,
      },
      {
        question: "Is parking limited in Bishop Arts Dallas, TX?",
        answer:
          `Parking is constrained in Bishop Arts Dallas, ${PRIMARY_STATE_ABBR}, so we review shared parking agreements and valet options.`,
      },
      {
        question: "Do rents fluctuate in Bishop Arts Dallas, TX?",
        answer:
          `Retail rents in Bishop Arts Dallas, ${PRIMARY_STATE_ABBR} vary by block, necessitating comp analysis block by block.`,
      },
      {
        question: "Can we combine parcels in Bishop Arts Dallas, TX?",
        answer:
          `Yes, we source assemblages in Bishop Arts Dallas, ${PRIMARY_STATE_ABBR} for investors pursuing larger redevelopment plans.`,
      },
    ],
    coordinates: { lat: 32.7473, lng: -96.8287 },
  },
  {
    slug: "deep-ellum-dallas",
    name: "Deep Ellum Dallas",
    headline: "Creative district with music venues, murals, and tech conversions.",
    description:
      `Deep Ellum near downtown ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} attracts creative office tenants, hospitality, and experiential retail requiring agile exchange strategy.`,
    highlights: [
      "Historic warehouse stock ripe for adaptive reuse.",
      "Active nightlife and music venues sustaining retail demand.",
      "Proximity to downtown Dallas encouraging tech firm expansions.",
    ],
    services: [
      "dallas-infill-development-parcel-scouting",
      "dallas-flex-light-manufacturing-1031",
      "dallas-improvement-exchange-build-to-suit",
      "dallas-1031-deadline-fast-track",
    ],
    faqs: [
      {
        question: "Is environmental diligence important in Deep Ellum Dallas, TX?",
        answer:
          `Former industrial uses in Deep Ellum Dallas, ${PRIMARY_STATE_ABBR} require Phase I reviews early in the process.`,
      },
      {
        question: "How volatile are rents in Deep Ellum Dallas, TX?",
        answer:
          `Rent growth in Deep Ellum Dallas, ${PRIMARY_STATE_ABBR} is strong but cyclical, so we model conservative scenarios.`,
      },
      {
        question: "Are improvement exchanges common in Deep Ellum Dallas, TX?",
        answer:
          `Improvement exchanges allow investors to reposition Deep Ellum Dallas, ${PRIMARY_STATE_ABBR} warehouses without missing deadlines.`,
      },
      {
        question: "Do lenders require higher reserves in Deep Ellum Dallas, TX?",
        answer:
          `Some lenders ask for enhanced reserves due to nightlife exposure in Deep Ellum Dallas, ${PRIMARY_STATE_ABBR}.`,
      },
    ],
    coordinates: { lat: 32.7837, lng: -96.7849 },
  },
  {
    slug: "southlake-town-square",
    name: "Southlake Town Square",
    headline: "Upscale suburb blending retail, office, and residential near DFW Airport.",
    description:
      `Southlake Town Square serves affluent households between ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} and Fort Worth, providing stabilized retail, boutique office, and civic anchored assets.`,
    highlights: [
      "High household incomes supporting premium retail and dining.",
      "Limited supply of Class A office with steady occupancy.",
      "Proximity to DFW International Airport spurring business demand.",
    ],
    services: [
      "dallas-retail-nnn-replacement-search",
      "dallas-multifamily-replacement-identification",
      "dallas-sale-leaseback-1031-support",
      "dallas-dst-placement-advisory",
    ],
    faqs: [
      {
        question: "How stable are rents in Southlake Town Square, TX?",
        answer:
          `Rents in Southlake Town Square, ${PRIMARY_STATE_ABBR} remain resilient thanks to consistent household spending.`,
      },
      {
        question: "Do we face limited inventory in Southlake Town Square, TX?",
        answer:
          `Inventory is tight in Southlake Town Square, ${PRIMARY_STATE_ABBR}, so reverse exchanges help secure assets ahead of sales.`,
      },
      {
        question: "Are zoning approvals complex in Southlake Town Square, TX?",
        answer:
          `City oversight in Southlake Town Square, ${PRIMARY_STATE_ABBR} requires early meetings to align on tenant mix and signage.`,
      },
      {
        question: "Can DST placements target Southlake Town Square, TX assets?",
        answer:
          `We evaluate DST offerings that include Southlake Town Square, ${PRIMARY_STATE_ABBR} retail or mixed-use interests for diversification.`,
      },
    ],
    coordinates: { lat: 32.9412, lng: -97.1255 },
  },
  {
    slug: "arlington-entertainment-district",
    name: "Arlington Entertainment District",
    headline: "Sports and entertainment hub between Dallas and Fort Worth.",
    description:
      `Arlington's Entertainment District offers hospitality, retail, and multifamily that leverage stadium traffic while staying within the ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} metro reach.`,
    highlights: [
      "AT&T Stadium, Globe Life Field, and entertainment venues fuel visitor demand.",
      "New hotel developments with strong convention bookings.",
      "Residential growth supporting year-round retail activity.",
    ],
    services: [
      "dallas-hospitality-repositioning-exchange",
      "dallas-retail-nnn-replacement-search",
      "dallas-timeline-45-180-day-control",
      "dallas-1031-deadline-fast-track",
    ],
    faqs: [
      {
        question: "Are revenue projections volatile in Arlington Entertainment District, TX?",
        answer:
          `Seasonality linked to events in Arlington Entertainment District, ${PRIMARY_STATE_ABBR} requires conservative underwriting.`,
      },
      {
        question: "Do we coordinate with city staff in Arlington Entertainment District, TX?",
        answer:
          `Development agreements in Arlington Entertainment District, ${PRIMARY_STATE_ABBR} necessitate city coordination for approvals.`,
      },
      {
        question: "How important is traffic management in Arlington Entertainment District, TX?",
        answer:
          `Traffic management plans in Arlington Entertainment District, ${PRIMARY_STATE_ABBR} impact site access and parking operations.`,
      },
      {
        question: "Can we pair Arlington Entertainment District, TX assets with DST fallback?",
        answer:
          `Backup DST allocations for Arlington Entertainment District, ${PRIMARY_STATE_ABBR} assets provide timeline protection.`,
      },
    ],
    coordinates: { lat: 32.7513, lng: -97.083 },
  },
];

export function getAllLocations(): Location[] {
  return locations;
}

