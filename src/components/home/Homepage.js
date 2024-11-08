import styles from "./home.module.css";
import Link from "@docusaurus/Link";
import {
  IconAnalyze,
  IconDeviceLaptop,
  IconTopologyStar3,
  IconWorldDownload,
  IconKey,
  IconLayersIntersect,
} from "@tabler/icons-react";

const Homepage = () => {
  const DISPLAY_CARDS = [
    {
      title: "Getting Started",
      icon: <IconDeviceLaptop />,
      description:
        "Get started with Parseable on your laptop, using a single command. Ingest logs and start query and analysis in minutes.",
      link: "/docs/get-started",
    },
    {
      title: "Key Concepts",
      icon: <IconKey />,
      description:
        "Understand the key concepts of Parseable. This is a good starting point to understand how Parseable works.",
      link: "/docs/parseable-key-concepts",
    },
    {
      title: "Distributed Installation",
      icon: <IconTopologyStar3 />,
      description:
        "Install Parseable in HA mode. This is suited for production environments that need performance and reliability guarantees.",
      link: "/docs/category/distributed",
    },
    {
      title: "Log Ingestion",
      icon: <IconWorldDownload />,
      description:
        "Learn how to ingest logs into Parseable. This is the first step to start querying and analyzing logs.",
      link: "/docs/log-ingestion",
    },
    {
      title: "Query & Analysis",
      icon: <IconAnalyze />,
      description:
        "Details on how to query, analyze and visualize logs in Parseable. SQL functions and examples are provided.",
      link: "/docs/concepts/query",
    },
    {
      title: "Integrations",
      icon: <IconLayersIntersect />,
      description:
        "Learn about various integrations supported by Parseable. This includes data sources, alerting and visualization tools.",
      link: "/docs/integrations",
    },
  ];

  const renderedCards = DISPLAY_CARDS.map((el) => {
    return (
      <Link key={el.title} to={el.link} className={styles.link}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>{el.icon}</div>
          <div className={styles.cardTitleDiv}>
            <div className={styles.cardTitle}>
              {el.title}
              <div className={styles.underline}></div>
            </div>
          </div>
          <p className={styles.cardDescription}>{el.description}</p>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <div className={styles.cardContainer}>{renderedCards}</div>
    </div>
  );
};

export default Homepage;
