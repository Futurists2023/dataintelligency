"use client";

import { useState } from "react";
import styles from "./page.module.css";

const heroPills = ["Market map", "Signals", "Sources", "Briefing"];

const heroStats = [
  ["Ranked", "priority signals"],
  ["Matched", "source context"],
  ["Ready", "briefing draft"],
];

const heroPipeline = [
  ["Collect", "Live"],
  ["Resolve", "Clean"],
  ["Score", "Rank"],
  ["Brief", "Share"],
];

const liveSignals = [
  {
    title: "Expansion signal",
    context: "USA logistics",
    score: "92",
    status: "New",
  },
  {
    title: "Registry movement",
    context: "UK industrial",
    score: "88",
    status: "Matched",
  },
  {
    title: "Procurement shift",
    context: "SA energy",
    score: "84",
    status: "Reviewing",
  },
  {
    title: "Activity cluster",
    context: "USA construction",
    score: "79",
    status: "Queued",
  },
];

const markets = [
  ["USA", "Broad coverage"],
  ["UK", "Registry + tender"],
  ["South Africa", "Sector signals"],
];

export default function HeroProductConsole() {
  const [activeSignal] = useState(0);
  const [activePipeline] = useState(0);

  const visibleSignals = [
    liveSignals[activeSignal],
    liveSignals[(activeSignal + 1) % liveSignals.length],
    liveSignals[(activeSignal + 2) % liveSignals.length],
  ];

  return (
    <section
      className={styles.console}
      aria-label="DataIntelligency SaaS workspace preview"
    >
      <div className={styles.consoleTop}>
        <div>
          <span>Workspace</span>
          <strong>Q2 market movement</strong>
        </div>
        <span className={styles.liveBadge}>Live</span>
      </div>

      <div className={styles.heroWorkspace}>
        <div className={styles.commandBar}>
          <span>Ask this workspace</span>
          <strong>Where is industrial services activity accelerating?</strong>
        </div>

        <div className={styles.workspaceTabs} aria-label="Workspace sections">
          {heroPills.map((pill, index) => (
            <span
              className={index === 0 ? styles.activeTab : undefined}
              key={pill}
            >
              {pill}
            </span>
          ))}
        </div>

        <div className={styles.trustStrip} aria-label="Workspace trust cues">
          <span>Sources attached</span>
          <span>Analyst reviewed</span>
          <span>Exportable brief</span>
        </div>

        <div className={styles.workspaceStats}>
          {heroStats.map(([value, label], index) => (
            <div
              className={
                index === activeSignal % heroStats.length
                  ? styles.liveStat
                  : undefined
              }
              key={label}
            >
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className={styles.workspaceGrid}>
          <div className={styles.pipelinePanel}>
            <div className={styles.panelHeader}>
              <span>Research pipeline</span>
              <small>Live flow</small>
            </div>
            <div className={styles.pipelineSteps}>
              {heroPipeline.map(([label, value], index) => (
                <div
                  className={
                    index === activePipeline ? styles.activePipeline : undefined
                  }
                  key={label}
                >
                  <b>{value}</b>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.marketPanel}>
            <div className={styles.panelHeader}>
              <span>Market focus</span>
              <small>Coverage</small>
            </div>
            {markets.map(([name, volume], index) => (
              <div
                className={`${styles.focusRow} ${
                  index === activeSignal % markets.length
                    ? styles.focusRowActive
                    : ""
                }`}
                key={name}
              >
                <strong>{name}</strong>
                <span>{volume}</span>
              </div>
            ))}
          </div>

          <div className={styles.signalPanel}>
            <div className={styles.panelHeader}>
              <span>Priority signals</span>
              <small>Updated now</small>
            </div>
            {visibleSignals.map((signal, index) => (
              <div
                className={`${styles.compactSignal} ${
                  index === 0 ? styles.activeSignal : ""
                }`}
                key={`${signal.title}-${signal.context}`}
              >
                <div>
                  <strong>{signal.title}</strong>
                  <span>{signal.context}</span>
                </div>
                <span className={styles.signalStatus}>{signal.status}</span>
                <b>{signal.score}</b>
              </div>
            ))}
          </div>

          <div className={styles.briefPanel}>
            <span>Briefing draft</span>
            <strong>
              Industrial services momentum is rising across three regions.
            </strong>
            <small>Sources attached / ready for review</small>
          </div>
        </div>
      </div>
    </section>
  );
}
