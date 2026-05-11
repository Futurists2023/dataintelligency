import Image from "next/image";
import styles from "./page.module.css";

const metrics = [
  ["Multi-market", "USA, UK, and South Africa coverage"],
  ["Source-backed", "Signals retain provenance and context"],
  ["Workflow-ready", "Watchlists, signal queues, and briefings"],
  ["Analyst-led", "Built for review, scoring, and decision routing"],
];

const heroProof = [
  ["3 markets", "USA, UK, and South Africa"],
  ["19 source types", "Registry, tender, regional, and sector signals"],
  ["Source-backed", "Confidence, timing, and provenance in every view"],
];

const heroSignalStrip = [
  ["USA", "Industrial services activity rising", "+24% source density"],
  ["UK", "Registry and tender movement matched", "88 confidence"],
  ["South Africa", "Energy services procurement shift", "Review queue"],
];

const visualToneClasses = [
  styles.visualCobalt,
  styles.visualForest,
  styles.visualCopper,
  styles.visualSignal,
];

const modules = [
  {
    name: "Market coverage",
    copy: "Track commercial movement across the USA, UK, and South Africa from one monitored intelligence layer.",
    stat: "3 markets",
  },
  {
    name: "Signal discovery",
    copy: "Surface activity spikes, expansion indicators, procurement movement, and other patterns buried in fragmented data.",
    stat: "Ranked signals",
  },
  {
    name: "Decision routing",
    copy: "Prioritise the signals that deserve attention with confidence scores, source context, and analyst-ready outputs.",
    stat: "Evidence trails",
  },
];

const useCases = [
  [
    "Expansion planning",
    "Compare where market activity is intensifying across the USA, UK, and South Africa.",
  ],
  [
    "Account prioritisation",
    "Focus commercial attention where several independent signals point to change.",
  ],
  [
    "Competitive monitoring",
    "Track sector movement, regional density, and operating footprint shifts by country.",
  ],
  [
    "Opportunity detection",
    "Identify demand, momentum, risk, and anomalies from scattered source activity.",
  ],
];

const feed = [
  ["Expansion signal", "USA", "Logistics", "Texas", "14 sources", "92"],
  [
    "Registry movement",
    "UK",
    "Industrial services",
    "Manchester",
    "Companies House",
    "88",
  ],
  [
    "Procurement shift",
    "South Africa",
    "Energy services",
    "Gauteng",
    "Tender signal",
    "84",
  ],
  ["Activity cluster", "USA", "Construction", "Florida", "9 datasets", "79"],
];

const markets = [
  ["USA", "Broad coverage", "Federal, state, local"],
  ["UK", "Registry + tender", "Registry, tender, regional"],
  ["South Africa", "Sector signals", "CIPC, tender, sector"],
];

const marketImageMoments = [
  {
    market: "USA",
    title: "Logistics corridors",
    copy: "Intermodal freight density, regional movement, and operating-footprint signals.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Intermodal_%2848250806881%29.jpg/1280px-Intermodal_%2848250806881%29.jpg",
    alt: "Aerial view of an intermodal rail terminal with rows of shipping containers in Bedford Park, Illinois.",
    credit: "Sam LaRussa / CC BY 2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Intermodal_(48250806881).jpg",
  },
  {
    market: "UK",
    title: "Commercial districts",
    copy: "Registry movement, tender signals, and regional business activity in one view.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Canary_Wharf_London_2025.png/1280px-Canary_Wharf_London_2025.png",
    alt: "Canary Wharf financial district and surrounding residential area in London.",
    credit: "Dai Photo / CC0",
    source:
      "https://commons.wikimedia.org/wiki/File:Canary_Wharf_London_2025.png",
  },
  {
    market: "South Africa",
    title: "Urban market activity",
    copy: "Sector activity, procurement movement, and location-level indicators for review.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cityscape%2C_Johannesburg%2C_Gauteng%2C_South_Africa.jpg/1280px-Cityscape%2C_Johannesburg%2C_Gauteng%2C_South_Africa.jpg",
    alt: "Johannesburg skyline at night with illuminated towers and city lights.",
    credit: "South African Tourism / CC BY 2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Cityscape,_Johannesburg,_Gauteng,_South_Africa.jpg",
  },
];

const coverage = [
  ["Entity changes", "Active", "Active", "Active"],
  ["Procurement movement", "Active", "Active", "Active"],
  ["Regional activity", "Active", "Active", "Active"],
  ["Sector momentum", "Active", "Active", "Active"],
];

const workflow = [
  [
    "Collect",
    "High-volume source activity is monitored across fragmented commercial datasets.",
  ],
  [
    "Resolve",
    "Entities, sectors, regions, dates, and source references are cleaned and connected.",
  ],
  [
    "Interpret",
    "Signals are scored for recency, density, confidence, and commercial significance.",
  ],
  [
    "Activate",
    "Teams receive dashboards, watchlists, briefings, and monitored decision views.",
  ],
];

const audiences = [
  [
    "Strategy teams",
    "Compare market movement before committing time, capital, or operating focus.",
  ],
  [
    "Market intelligence",
    "Turn fragmented source activity into monitored views and stakeholder-ready notes.",
  ],
  [
    "Research teams",
    "Review source context, evidence trails, and signal quality without rebuilding the work.",
  ],
  [
    "Commercial ops",
    "Route watchlists, account priorities, and briefing requests through one workspace.",
  ],
];

const methodology = [
  [
    "Monitor",
    "Public and commercial datasets are tracked where source access and coverage are available.",
  ],
  [
    "Resolve",
    "Signals are cleaned around markets, sectors, entities, locations, and source timing.",
  ],
  [
    "Review",
    "Analyst workflows add scoring, provenance, and briefing context before decisions are shared.",
  ],
];

const faqs = [
  [
    "What does DataIntelligency monitor?",
    "The platform is designed for public and commercial market activity: entity changes, procurement movement, regional activity, sector momentum, and source-backed indicators across supported markets.",
  ],
  [
    "Is this a prospecting database?",
    "No. The product is positioned as an intelligence workspace for market monitoring, evidence review, prioritisation, and briefing workflows rather than a lead database.",
  ],
  [
    "How are signals trusted?",
    "Signals are presented with source context, timing, market scope, and confidence cues so analysts can review the evidence before a decision or briefing leaves the workspace.",
  ],
  [
    "Who is the platform for?",
    "Commercial strategy, market intelligence, research, investment, and operating teams that need to compare movement across markets and brief stakeholders quickly.",
  ],
];

const footerColumns = [
  {
    title: "Platform",
    links: [
      ["Overview", "#platform"],
      ["Use cases", "#use-cases"],
      ["Trust", "#trust"],
      ["Workflow", "#workflow"],
      ["FAQ", "#faq"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About us", "#about"],
      ["Methodology", "#methodology"],
      [
        "Careers inquiry",
        "mailto:sales@dataintelligency.com?subject=Careers%20at%20DataIntelligency",
      ],
      ["Contact", "mailto:sales@dataintelligency.com"],
    ],
  },
  {
    title: "Resources",
    links: [
      [
        "Market briefings",
        "mailto:sales@dataintelligency.com?subject=Market%20briefing",
      ],
      ["Source transparency", "#trust"],
      [
        "Private beta",
        "mailto:sales@dataintelligency.com?subject=Private%20beta%20access",
      ],
    ],
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <BrandLogo />
        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="#platform">Platform</a>
          <a href="#use-cases">Use cases</a>
          <a href="#about">About</a>
          <a href="#trust">Trust</a>
          <a href="#workflow">Workflow</a>
          <a href="#faq">FAQ</a>
        </nav>
        <details className={styles.mobileMenu}>
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#platform">Platform</a>
            <a href="#use-cases">Use cases</a>
            <a href="#about">About</a>
            <a href="#methodology">Methodology</a>
            <a href="#faq">FAQ</a>
          </nav>
        </details>
        <a
          className={styles.headerButton}
          href="mailto:sales@dataintelligency.com"
        >
          Request workspace access
        </a>
      </header>

      <section id="top" className={styles.hero}>
        <div className={styles.heroLayout}>
          <div className={styles.heroText}>
            <p className={styles.kicker}>SaaS intelligence workspace</p>
            <h1>Turn messy market signals into decisions.</h1>
            <p>
              DataIntelligency gives commercial teams one operating layer for
              monitoring markets, ranking movement, tracing sources, and
              preparing executive-ready briefings across the USA, UK, and South
              Africa.
            </p>
            <div className={styles.heroActions}>
              <a
                className={styles.primaryButton}
                href="mailto:sales@dataintelligency.com"
              >
                Request workspace access
              </a>
              <a className={styles.secondaryButton} href="#platform">
                View platform
              </a>
            </div>
            <p className={styles.heroNote}>
              Private walkthroughs for strategy, research, and commercial teams.
            </p>
            <div
              className={styles.heroProof}
              aria-label="Platform proof points"
            >
              {heroProof.map(([value, label]) => (
                <div key={value}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroProduct}>
            <div className={styles.heroProductStage}>
              <HeroMarketMap />
            </div>
            <div
              className={styles.heroSignalStrip}
              aria-label="Live market signal examples"
            >
              {heroSignalStrip.map(([market, signal, meta]) => (
                <div key={market}>
                  <span>{market}</span>
                  <strong>{signal}</strong>
                  <small>{meta}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.metricBand} aria-label="Platform scale">
        {metrics.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="platform" className={styles.platform}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Platform</p>
          <h2>One intelligence layer for commercial change.</h2>
          <p>
            Bring coverage, signal discovery, prioritisation, and trusted
            context into one product view built for faster commercial decisions
            across the USA, UK, and South Africa.
          </p>
        </div>
        <div className={styles.moduleGrid}>
          {modules.map((module, index) => (
            <article className={styles.moduleCard} key={module.name}>
              <div>
                <span>{module.stat}</span>
                <h3>{module.name}</h3>
              </div>
              <CardSignalVisual tone={visualToneClasses[index]} />
              <p>{module.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.coverageSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Market coverage</p>
          <h2>Built for USA, UK, and South Africa intelligence.</h2>
          <p>
            Compare commercial movement across developed and emerging markets
            without reducing the product to lists, contacts, or prospecting
            language.
          </p>
        </div>
        <div
          className={styles.marketImageGrid}
          aria-label="Market coverage image examples"
        >
          {marketImageMoments.map((moment) => (
            <article className={styles.marketImageCard} key={moment.market}>
              <Image
                src={moment.image}
                alt={moment.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 980px) 50vw, 33vw"
              />
              <div className={styles.marketImageOverlay}>
                <span>{moment.market}</span>
                <h3>{moment.title}</h3>
                <p>{moment.copy}</p>
                <a href={moment.source}>{moment.credit}</a>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.marketGrid}>
          {markets.map(([name, volume, sources]) => (
            <article className={styles.marketCard} key={name}>
              <span>{name}</span>
              <strong>{volume}</strong>
              <p>{sources}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.productBand}>
        <div className={styles.productCopy}>
          <p className={styles.kicker}>Signal view</p>
          <h2>Clear enough for executives. Detailed enough for analysts.</h2>
          <p>
            The interface puts coverage, trends, ranked signals, and source
            context in one view, so every cross-market decision can be traced
            back to the evidence behind it.
          </p>
        </div>
        <AnalystProductConsole />
      </section>

      <section id="use-cases" className={styles.useCases}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Use cases</p>
          <h2>Built around the decisions teams already make.</h2>
        </div>
        <div className={styles.useCaseGrid}>
          {useCases.map(([title, copy], index) => (
            <article className={styles.useCase} key={title}>
              <CardMiniHeader
                index={index}
                label={["Plan", "Focus", "Monitor", "Detect"][index]}
              />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className={styles.audienceMethod}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Who it is for</p>
          <h2>Built for teams that turn signals into decisions.</h2>
          <p>
            DataIntelligency is designed for commercial, research, and strategy
            teams that need a shared way to monitor markets, review evidence,
            and brief stakeholders.
          </p>
        </div>
        <div className={styles.audienceGrid}>
          {audiences.map(([title, copy], index) => (
            <article className={styles.audienceCard} key={title}>
              <CardSourceBadges index={index} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div id="methodology" className={styles.methodologyPanel}>
          <div>
            <p className={styles.kicker}>Methodology</p>
            <h3>Source-aware by design.</h3>
            <p>
              The workspace is built around source availability, provenance, and
              analyst review so teams can understand where each signal came from
              before they act.
            </p>
          </div>
          <div className={styles.methodologySteps}>
            {methodology.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className={styles.trust}>
        <div>
          <p className={styles.kicker}>Enterprise trust cues</p>
          <h2>Every signal carries context.</h2>
        </div>
        <div className={styles.trustGrid}>
          <span>Source provenance</span>
          <span>Confidence scoring</span>
          <span>Update timing</span>
          <span>Historical comparison</span>
          <span>Sector coverage</span>
          <span>Jurisdiction-aware coverage</span>
        </div>
      </section>

      <section id="workflow" className={styles.workflow}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Workflow</p>
          <h2>From scattered activity to decision-ready intelligence.</h2>
        </div>
        <div className={styles.workflowGrid}>
          {workflow.map(([title, copy], index) => (
            <article className={styles.workflowStep} key={title}>
              <div className={styles.workflowStepTop}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <CardStepGlyph index={index} />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className={styles.faq}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>FAQ</p>
          <h2>Questions buyers ask before a rollout.</h2>
        </div>
        <div className={styles.faqGrid}>
          {faqs.map(([question, answer]) => (
            <article className={styles.faqItem} key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <p className={styles.kicker}>Private briefings</p>
        <h2>See what your market is already telling you.</h2>
        <p>
          Speak with DataIntelligency about market coverage, intelligence
          workflows, and the signals most relevant to your sector across the
          USA, UK, and South Africa.
        </p>
        <a
          className={styles.primaryButton}
          href="mailto:sales@dataintelligency.com"
        >
          Request workspace access
        </a>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <BrandLogo />
            <p>
              Cross-market intelligence for teams that monitor movement, review
              evidence, and prepare source-backed briefings.
            </p>
            <a
              className={styles.footerButton}
              href="mailto:sales@dataintelligency.com"
            >
              Contact the team
            </a>
          </div>

          <div className={styles.footerColumns}>
            {footerColumns.map((column) => (
              <nav
                aria-label={`${column.title} footer links`}
                key={column.title}
              >
                <h2>{column.title}</h2>
                {column.links.map(([label, href]) => (
                  <a href={href} key={label}>
                    {label}
                  </a>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>(c) 2026 DataIntelligency. All rights reserved.</span>
          <span>Public and commercial data signals only where available.</span>
          <a href="mailto:sales@dataintelligency.com">
            sales@dataintelligency.com
          </a>
        </div>
      </footer>
    </main>
  );
}

function CardSignalVisual({ tone }: { tone: string }) {
  return (
    <div
      className={`${styles.cardSignalVisual} ${tone}`}
      aria-hidden="true"
    >
      <div className={styles.signalDots}>
        <i />
        <i />
        <i />
      </div>
      <div className={styles.signalBars}>
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function CardMiniHeader({ index, label }: { index: number; label: string }) {
  return (
    <div
      className={`${styles.cardMiniHeader} ${
        visualToneClasses[index % visualToneClasses.length]
      }`}
    >
      <span>{label}</span>
      <div aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function CardSourceBadges({ index }: { index: number }) {
  const badges = [
    ["Registry", "Tender"],
    ["Signals", "Briefs"],
    ["Sources", "Review"],
    ["Queue", "Route"],
  ][index];

  return (
    <div
      className={`${styles.cardSourceBadges} ${
        visualToneClasses[index % visualToneClasses.length]
      }`}
    >
      {badges.map((badge) => (
        <span key={badge}>{badge}</span>
      ))}
    </div>
  );
}

function CardStepGlyph({ index }: { index: number }) {
  return (
    <div
      className={`${styles.cardStepGlyph} ${
        visualToneClasses[index % visualToneClasses.length]
      }`}
      aria-hidden="true"
    >
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}

function HeroMarketMap() {
  return (
    <section
      className={styles.heroMapShell}
      aria-label="Market signal map for USA, UK, and South Africa"
    >
      <div className={styles.mapHeader}>
        <div>
          <span>Market signal layer</span>
          <strong>USA / UK / South Africa</strong>
        </div>
        <small>Live coverage</small>
      </div>

      <svg
        className={styles.marketMapSvg}
        viewBox="0 0 820 460"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          className={styles.signalArc}
          d="M142 174 C300 74 504 85 648 154"
        />
        <path
          className={styles.signalArc}
          d="M648 154 C640 250 608 330 554 378"
        />
        <path
          className={styles.signalArcSecondary}
          d="M142 174 C260 318 410 390 554 378"
        />
        <path
          className={styles.mapLandmass}
          d="M56 122 C92 78 162 78 201 112 C241 148 224 205 168 221 C116 236 58 201 48 158 C45 143 47 132 56 122Z"
        />
        <path
          className={styles.mapLandmass}
          d="M590 94 C640 72 706 92 735 140 C764 188 736 238 678 244 C616 251 571 215 567 162 C565 133 574 107 590 94Z"
        />
        <path
          className={styles.mapLandmass}
          d="M470 317 C516 277 586 286 621 337 C655 387 625 436 560 441 C499 446 452 407 450 362 C449 342 456 328 470 317Z"
        />
      </svg>

      <div className={`${styles.mapNode} ${styles.usaNode}`}>
        <span>USA</span>
        <strong>Expansion signal</strong>
        <small>Logistics / Texas + Florida</small>
      </div>
      <div className={`${styles.mapNode} ${styles.ukNode}`}>
        <span>UK</span>
        <strong>Registry movement</strong>
        <small>Industrial services / Manchester</small>
      </div>
      <div className={`${styles.mapNode} ${styles.saNode}`}>
        <span>South Africa</span>
        <strong>Procurement shift</strong>
        <small>Energy services / Gauteng</small>
      </div>

      <div className={styles.mapTelemetry}>
        <span>Cross-market activity</span>
        <strong>Signals converging across 3 markets</strong>
        <div>
          <small>Source density</small>
          <b>High</b>
        </div>
      </div>

      <div className={styles.mapLegend} aria-label="Signal layer legend">
        <span>Entity changes</span>
        <span>Procurement movement</span>
        <span>Sector momentum</span>
      </div>
    </section>
  );
}

function BrandLogo() {
  return (
    <a className={styles.logo} href="#top" aria-label="DataIntelligency home">
      <Image
        className={styles.logoMark}
        src="/logo.svg"
        alt=""
        width={36}
        height={36}
        unoptimized
        aria-hidden="true"
      />
      <span className={styles.wordmark}>
        <span>Data</span>
        <strong>Intelligency</strong>
      </span>
    </a>
  );
}

function AnalystProductConsole() {
  return (
    <section
      className={styles.analystConsole}
      aria-label="DataIntelligency analyst signal view"
    >
      <div className={styles.analystTop}>
        <div>
          <span>Analyst workbench</span>
          <strong>Coverage review / Q2 market movement</strong>
        </div>
        <div className={styles.statusPills}>
          <span>Source-backed</span>
          <span>Briefing ready</span>
        </div>
      </div>

      <div className={styles.analystBody}>
        <div className={styles.provenancePanel}>
          <div className={styles.panelHeader}>
            <span>Source provenance</span>
            <small>Matched indicators</small>
          </div>
          <div className={styles.sourceList}>
            <div>
              <strong>USA</strong>
              <span>
                State filings, procurement notices, local market activity
              </span>
            </div>
            <div>
              <strong>UK</strong>
              <span>
                Registry changes, tender movement, regional business signals
              </span>
            </div>
            <div>
              <strong>South Africa</strong>
              <span>
                CIPC movement, tender signals, sector-specific activity
              </span>
            </div>
          </div>
        </div>

        <div className={styles.priorityPanel}>
          <div className={styles.panelHeader}>
            <span>Priority queue</span>
            <small>Next review</small>
          </div>
          <div className={styles.priorityList}>
            {feed
              .slice(0, 3)
              .map(([type, country, sector, region, meta, score]) => (
                <div className={styles.priorityItem} key={`${type}-${country}`}>
                  <b>{score}</b>
                  <div>
                    <strong>{type}</strong>
                    <span>
                      {country} - {sector} - {region}
                    </span>
                    <small>{meta}</small>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className={styles.matrixPanel}>
          <div className={styles.panelHeader}>
            <span>Signal coverage matrix</span>
            <small>Active markets</small>
          </div>
          <div className={styles.coverageMatrix}>
            <span>Signal</span>
            <span>USA</span>
            <span>UK</span>
            <span>SA</span>
            {coverage.flatMap(([signal, usa, uk, sa]) => [
              <strong key={`${signal}-analyst-label`}>{signal}</strong>,
              <b key={`${signal}-analyst-usa`}>{usa}</b>,
              <b key={`${signal}-analyst-uk`}>{uk}</b>,
              <b key={`${signal}-analyst-sa`}>{sa}</b>,
            ])}
          </div>
        </div>
      </div>
    </section>
  );
}
