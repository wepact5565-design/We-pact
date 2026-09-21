/**
 * WEPact Reports Data
 * 
 * To add a new report:
 * 1. Upload the PDF to: public/reports/your-report-name.pdf
 * 2. Add a new object to the `reports` array below
 * 3. Commit and push — Netlify will auto-deploy
 */

export interface Report {
  id: string;
  title: string;
  description: string;
  keyFindings: string[];
  date: string;
  category: string;
  pdf: string;
}

export const reports: Report[] = [
  {
    id: "up-2022-women-overall-analysis",
    title: "Uttar Pradesh Assembly Election 2022: Women Candidates — Complete Analysis",
    description:
      "The main report on women's candidacy in the 2022 UP Assembly elections. Covers the election context, party-wise ticket distribution, the full list of elected women MLAs, profiles of notable defeated candidates, and a data-driven examination of whether gender actually decided the outcome.",
    keyFindings: [
      "560 women contested across all parties, but only 33–34 were elected — a decline from 38 women MLAs in 2017.",
      "Gender was not the primary reason for defeats: excluding Congress, women secured a higher average vote share (31.83%) than men (30.65%).",
      "BJP fielded fewer women (45) but won 25 seats (~55% win rate) — the highest conversion rate of any party.",
      "Congress fielded the most women (148–159) but won only 1 seat, due to its statewide organisational collapse.",
      "The bipolar BJP-vs-SP contest, late nominations, and symbolic ticket distribution were the dominant structural factors behind women's defeats.",
    ],
    date: "2022",
    category: "Election Analysis",
    pdf: "/reports/up-2022-women-overall-analysis.pdf",
  },
  {
    id: "up-2022-women-seats-data",
    title: "UP 2022: Party-wise Tickets, Winning Statistics & Full List of Women MLAs",
    description:
      "A focused data companion to the main report. Presents party-wise ticket distribution to women candidates, winning statistics with win rates, and the full constituency-wise list of every woman MLA elected in the 2022 Uttar Pradesh Assembly election.",
    keyFindings: [
      "BJP: 45 tickets to women → 25 won (~55% win rate, the highest of any party).",
      "Congress (INC): 155–159 tickets to women → only 1 won (~0.6% win rate).",
      "Samajwadi Party (SP) & allies: 42 tickets to women → 8–13 won (~19–31% win rate).",
      "Bahujan Samaj Party (BSP): 38 tickets to women → 0 won.",
      "Full list of all 33–34 elected women MLAs with name, constituency, and party — sourced from ADR/MyNeta.info (ECI affidavit data).",
    ],
    date: "2022",
    category: "Election Analysis",
    pdf: "/reports/up-2022-women-seats-data.pdf",
  },
  {
    id: "up-2022-women-defeated-analysis",
    title: "UP 2022: Defeated Women Candidates — Votes, Constituencies & Reasons",
    description:
      "An analysis of women candidates who lost in the 2022 UP Assembly elections. Profiles several notable defeated candidates with their votes polled, and identifies the seven structural reasons behind their defeats — from the bipolar BJP-vs-SP contest to late nominations and symbolic ticket distribution.",
    keyFindings: [
      "Roughly 520–525 women candidates lost across all parties in 2022.",
      "Six extensively documented Congress women candidates — including a rape survivor's mother, a jailed activist, and a former Miss UP — each polled under one-sixth of valid votes and lost their security deposits.",
      "Seven structural reasons identified: bipolar contest, weak Congress/BSP organisation, late nominations, symbolic tickets, caste/welfare voting, limited funding, and isolated unverified EVM claims.",
      "Candidate Sadaf Jafar (Lucknow Central, INC): 'The media polarised the election and made it only BJP vs SP.'",
      "The report argues most women lost for the same reasons male candidates from their parties lost — not because of gender.",
    ],
    date: "2022",
    category: "Election Analysis",
    pdf: "/reports/up-2022-women-defeated-analysis.pdf",
  },
  // 👇 नई report यहाँ add करें — ऊपर वाला format copy करें
];
