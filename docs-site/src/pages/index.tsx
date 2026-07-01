import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const highlights = [
  'Real mock interview question sets',
  'Learning-first interview format',
  'React Native, architecture, performance, and AI topics',
];

const masteryPillars = [
  {
    stat: 'Beginner',
    note: 'to architecture-minded React Native engineer',
  },
  {
    stat: '5+',
    note: 'production-grade app builds and practical walkthroughs',
  },
  {
    stat: 'System',
    note: 'design, debugging, and real-world mobile tradeoffs',
  },
];

export default function Home(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();
  const siteUrl = 'https://techcraft-by-subrata.github.io/React-Native-Mock-Interviews';
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'React Native Mock Interviews',
    url: siteUrl,
    description:
      'A community-driven React Native mock interview archive with interview questions, architecture discussions, performance topics, and volunteer-led sessions.',
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: 'TechCraft By Subrata',
      url: 'https://github.com/TechCraft-By-Subrata',
      sameAs: [
        'https://www.youtube.com/@techcraftclub',
        'https://github.com/TechCraft-By-Subrata/React-Native-Mock-Interviews',
        'https://rnm.subratakumar.com',
      ],
    },
  };
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TechCraft By Subrata',
    url: 'https://github.com/TechCraft-By-Subrata',
    sameAs: [
      'https://www.youtube.com/@techcraftclub',
      'https://github.com/TechCraft-By-Subrata/React-Native-Mock-Interviews',
      'https://rnm.subratakumar.com',
    ],
    knowsAbout: [
      'React Native',
      'Mobile architecture',
      'System design',
      'Performance optimization',
      'Mock interviews',
    ],
  };

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <Head>
        <meta
          name="description"
          content="Practice React Native interviews with community-driven mock interview question sets, architecture discussions, performance topics, and real-world engineering preparation."
        />
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Head>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>TechCraft By Subrata</p>
            <h1>React Native interview prep that feels like the real thing.</h1>
            <p className={styles.lead}>
              A public, community-driven archive of React Native mock interviews,
              candidate question sets, and practical learning material.
            </p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                Explore the Project
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/volunteers"
              >
                View Volunteers
              </Link>
            </div>
          </div>
          <div className={styles.panel}>
            <p className={styles.panelTitle}>Built for developers who want to:</p>
            <ul className={styles.list}>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className={styles.masterySection}>
          <div className={styles.masteryIntro}>
            <p className={styles.sectionEyebrow}>Beyond interview prep</p>
            <h2>Mock interviews help you explain your thinking. Mastery comes from building the depth behind those answers.</h2>
            <p className={styles.masteryLead}>
              This project sits next to <strong>React Native Mastery</strong> for a reason.
              One helps developers practice how they communicate.
              The other helps them keep sharpening the actual engineering depth:
              fundamentals, architecture, performance, and production decisions.
            </p>
          </div>

          <div className={styles.masteryCard}>
            <div className={styles.masteryCopy}>
              <p className={styles.masteryLabel}>React Native Mastery</p>
              <h3>Learning material for the same journey this interview project is preparing people for.</h3>
              <p>
                If the interview archive shows what strong answers sound like, React Native Mastery is where that technical depth keeps compounding through guided learning and real app thinking.
              </p>
              <div className={styles.masteryActions}>
                <Link
                  className="button button--primary button--lg"
                  href="https://rnm.subratakumar.com"
                >
                  Explore RN Mastery
                </Link>
              </div>
            </div>

            <div className={styles.masteryGrid}>
              {masteryPillars.map((pillar) => (
                <div key={pillar.stat} className={styles.masteryMetric}>
                  <strong>{pillar.stat}</strong>
                  <span>{pillar.note}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
