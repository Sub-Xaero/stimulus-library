import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

// Inline SVG icons — no external dependency
const IconVanilla = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
  </svg>
);

const IconConfigurable = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>
    <circle cx="8" cy="6" r="2" fill="currentColor" stroke="none"/><circle cx="16" cy="12" r="2" fill="currentColor" stroke="none"/><circle cx="10" cy="18" r="2" fill="currentColor" stroke="none"/>
  </svg>
);

const IconComprehensive = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
  </svg>
);

const IconFireForget = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);

const IconJustWorks = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const features = [
  {
    icon: <IconVanilla />,
    title: "Zero Dependencies",
    description: "Nobody likes bloat. Stimulus Library ships with zero third-party dependencies — just simple, vanilla controllers that do one thing well.",
  },
  {
    icon: <IconConfigurable />,
    title: "Highly Configurable",
    description: "Sensible defaults out of the box, but flexible enough for any use case. All controllers expose values and classes for fine-grained control.",
  },
  {
    icon: <IconComprehensive />,
    title: "Comprehensive",
    description: "One package covers forms, modals, tables, media, scroll, AJAX, and more. Stop installing 50 separate packages for 50 behaviours.",
  },
  {
    icon: <IconFireForget />,
    title: "Fire and Forget",
    description: "Drop a controller in and forget about it. Stimulus Library handles event wiring for you — though you can always take control when you need it.",
  },
  {
    icon: <IconJustWorks />,
    title: "Tree-Shakable",
    description: "Only the controllers you import are bundled. Add the entire library to your project with zero guilt — your bundle only grows when you use it.",
  },
];

function FeatureCard({ icon, title, description }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

const steps = [
  {
    number: "01",
    title: "Install",
    code: "npm install stimulus-library",
  },
  {
    number: "02",
    title: "Register",
    code: 'application.register("autosize", AutosizeController)',
  },
  {
    number: "03",
    title: "Use",
    code: '<textarea data-controller="autosize"></textarea>',
  },
];

export default function Home() {
  const { siteConfig = {} } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>

      {/* ── Hero ── */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>Stimulus.js Controllers</div>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>

          <div className={styles.heroBadges}>
            <img alt="NPM Downloads" src="https://img.shields.io/npm/dt/stimulus-library?style=flat-square&color=6366f1&labelColor=1e293b" />
            <img alt="Minified Size" src="https://img.shields.io/bundlephobia/minzip/stimulus-library/latest?label=minified&style=flat-square&color=6366f1&labelColor=1e293b" />
            <img alt="NPM Version" src="https://img.shields.io/npm/v/stimulus-library?style=flat-square&color=6366f1&labelColor=1e293b" />
          </div>

          <div className={styles.heroInstall}>
            <code className={styles.heroInstallCode}>npm install stimulus-library</code>
          </div>

          <div className={styles.heroActions}>
            <Link className={clsx("button button--primary button--lg", styles.primaryBtn)} to={useBaseUrl("docs/")}>
              Get Started
            </Link>
            <Link className={clsx("button button--outline button--lg", styles.secondaryBtn)} href="https://github.com/Sub-Xaero/stimulus-library">
              View on GitHub
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* ── Features ── */}
        <section className={styles.featuresSection}>
          <div className="container">
            <div className={styles.featuresGrid}>
              {features.map((feat, idx) => (
                <FeatureCard key={idx} {...feat} />
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className={styles.howSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Up and running in minutes</h2>
            <p className={styles.sectionSubtitle}>Three steps from install to working controller</p>
            <div className={styles.stepsGrid}>
              {steps.map((step) => (
                <div key={step.number} className={styles.stepCard}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <code className={styles.stepCode}>{step.code}</code>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
