import { PageContainer } from "@/components/layout/page-container";
import { steps } from "@/features/marketing/constants";
import styles from "../process-section.module.css";
import { BoxArtwork } from "./box-artwork";

export function ProcessSection() {
  return (
    <section className="bg-(--surface-page) py-20 lg:py-24">
      <PageContainer>
        <h2 className="font-heading text-4xl font-bold leading-tight text-(--text-primary) md:text-5xl">
          Order Custom Packaging in 3 Simple Steps
        </h2>

        <div className="mt-10 grid items-center gap-8 xl:grid-cols-[minmax(22rem,26.5rem)_minmax(12rem,20rem)_minmax(28rem,1fr)] xl:gap-0">
          <div className="grid gap-5">
            {steps.map((step) => {
              const StepIcon = step.icon;

              return (
                <article
                  className="min-h-58.5 rounded-xl bg-(--surface-card) px-6 py-10"
                  key={step.title}
                >
                  <div className="mb-6 flex size-12.5 items-center justify-center rounded-lg bg-(--surface-muted) text-(--text-primary)">
                    <StepIcon aria-hidden="true" className="size-6" />
                  </div>
                  <h3 className="text-base font-semibold leading-6 text-(--text-primary)">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-5.5 text-(--text-muted)">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>

          <svg
            aria-hidden="true"
            className={styles.desktopConnector}
            preserveAspectRatio="none"
            viewBox="0 0 300 560"
          >
            <defs>
              <linearGradient
                id="connector-pulse-tail"
                x1="0"
                x2="1"
                y1="0"
                y2="0"
              >
                <stop
                  offset="0"
                  stopColor="var(--brand-primary)"
                  stopOpacity="0"
                />
                <stop
                  offset="0.42"
                  stopColor="var(--brand-primary)"
                  stopOpacity="0.48"
                />
                <stop
                  offset="0.78"
                  stopColor="var(--text-primary)"
                  stopOpacity="0.96"
                />
                <stop
                  offset="1"
                  stopColor="var(--text-primary)"
                  stopOpacity="0"
                />
              </linearGradient>
              <linearGradient
                id="connector-pulse-core"
                x1="0"
                x2="1"
                y1="0"
                y2="0"
              >
                <stop
                  offset="0"
                  stopColor="var(--brand-primary)"
                  stopOpacity="0"
                />
                <stop
                  offset="0.55"
                  stopColor="var(--text-primary)"
                  stopOpacity="0.96"
                />
                <stop
                  offset="1"
                  stopColor="var(--text-primary)"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
            <path
              className={styles.connectorTrack}
              d="M0 90 H128 Q148 90 148 110 V280"
            />
            <path className={styles.connectorTrack} d="M0 280 H148" />
            <path
              className={styles.connectorTrack}
              d="M0 470 H128 Q148 470 148 450 V280"
            />
            <path className={styles.connectorTrack} d="M148 280 H320" />
            <g className={styles.connectorSourcePulse}>
              <ellipse
                className={styles.connectorPulseNodeTail}
                rx="10"
                ry="3.25"
              >
                <animateMotion
                  calcMode="linear"
                  dur="4.8s"
                  keyPoints="0;0;1;1"
                  keyTimes="0;0.03;0.312;1"
                  path="M0 90 H128 Q148 90 148 110 V280"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </ellipse>
              <ellipse
                className={styles.connectorPulseNodeCore}
                rx="4.5"
                ry="1.5"
              >
                <animateMotion
                  calcMode="linear"
                  dur="4.8s"
                  keyPoints="0;0;1;1"
                  keyTimes="0;0.03;0.312;1"
                  path="M0 90 H128 Q148 90 148 110 V280"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </ellipse>
            </g>
            <g className={styles.connectorSourcePulse}>
              <ellipse
                className={styles.connectorPulseNodeTail}
                rx="10"
                ry="3.25"
              >
                <animateMotion
                  calcMode="linear"
                  dur="4.8s"
                  keyPoints="0;0;1;1"
                  keyTimes="0;0.03;0.312;1"
                  path="M0 280 H148"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </ellipse>
              <ellipse
                className={styles.connectorPulseNodeCore}
                rx="4.5"
                ry="1.5"
              >
                <animateMotion
                  calcMode="linear"
                  dur="4.8s"
                  keyPoints="0;0;1;1"
                  keyTimes="0;0.03;0.312;1"
                  path="M0 280 H148"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </ellipse>
            </g>
            <g className={styles.connectorSourcePulse}>
              <ellipse
                className={styles.connectorPulseNodeTail}
                rx="10"
                ry="3.25"
              >
                <animateMotion
                  calcMode="linear"
                  dur="4.8s"
                  keyPoints="0;0;1;1"
                  keyTimes="0;0.03;0.312;1"
                  path="M0 470 H128 Q148 470 148 450 V280"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </ellipse>
              <ellipse
                className={styles.connectorPulseNodeCore}
                rx="4.5"
                ry="1.5"
              >
                <animateMotion
                  calcMode="linear"
                  dur="4.8s"
                  keyPoints="0;0;1;1"
                  keyTimes="0;0.03;0.312;1"
                  path="M0 470 H128 Q148 470 148 450 V280"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </ellipse>
            </g>
            <g className={styles.connectorMergedPulse}>
              <ellipse
                className={styles.connectorMergedNodeTail}
                rx="12"
                ry="3.75"
              >
                <animateMotion
                  calcMode="linear"
                  dur="4.8s"
                  keyPoints="0;0;1;1"
                  keyTimes="0;0.3155;0.498;1"
                  path="M148 280 H320"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </ellipse>
              <ellipse
                className={styles.connectorMergedNodeCore}
                rx="5.5"
                ry="1.75"
              >
                <animateMotion
                  calcMode="linear"
                  dur="4.8s"
                  keyPoints="0;0;1;1"
                  keyTimes="0;0.3155;0.498;1"
                  path="M148 280 H320"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </ellipse>
            </g>
            <path
              className={styles.connectorArrow}
              d="M300 268 L312 280 L300 292"
            />
          </svg>

          <div className="flex justify-center xl:hidden">
            <svg
              aria-hidden="true"
              className={styles.mobileConnector}
              viewBox="0 0 40 88"
            >
              <path className={styles.connectorTrack} d="M20 0 V76" />
              <path
                className={styles.connectorPulseCore}
                d="M20 0 V76"
                pathLength="1"
              />
              <path className={styles.connectorArrow} d="M8 64 L20 76 L32 64" />
            </svg>
          </div>

          <div className={styles.boxStage}>
            <svg
              aria-hidden="true"
              className={styles.boxImpactOutline}
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1568 1470"
            >
              <path
                className={styles.boxImpactOutlinePath}
                d="M744 4 L1432 396 L1432 912 L744 1310 L52 912 L52 396 Z M52 396 L744 804 L1432 396 M744 804 V1310"
              />
            </svg>
            <BoxArtwork
              alt="Custom packaging box production process"
              className="relative z-1 h-auto w-full"
              sizes="(min-width: 1120px) 620px, 90vw"
            />
            <svg
              aria-hidden="true"
              className={styles.boxBandPulse}
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1568 1470"
            >
              <defs>
                <clipPath id="process-box-gold-bands">
                  <polygon points="50,625 282,761 282,823 50,687" />
                  <polygon points="596,958 744,1045 744,1107 596,1020" />
                </clipPath>
                <linearGradient
                  id="process-box-band-sweep"
                  x1="0"
                  x2="1"
                  y1="0"
                  y2="0"
                >
                  <stop
                    offset="0"
                    stopColor="var(--brand-primary)"
                    stopOpacity="0"
                  />
                  <stop
                    offset="0.38"
                    stopColor="var(--brand-primary)"
                    stopOpacity="0.18"
                  />
                  <stop
                    offset="0.5"
                    stopColor="var(--brand-primary)"
                    stopOpacity="0.6"
                  />
                  <stop
                    offset="0.62"
                    stopColor="var(--brand-primary)"
                    stopOpacity="0.18"
                  />
                  <stop
                    offset="1"
                    stopColor="var(--brand-primary)"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              <rect
                className={styles.boxBandGlow}
                clipPath="url(#process-box-gold-bands)"
                fill="var(--brand-primary)"
                height="620"
                width="820"
                x="0"
                y="520"
              />
              <g className={styles.boxBandImpact}>
                <polygon
                  fill="var(--brand-primary)"
                  points="50,625 282,761 282,823 50,687"
                />
                <polygon
                  fill="var(--brand-primary)"
                  points="596,958 744,1045 744,1107 596,1020"
                />
              </g>
              <rect
                className={styles.boxBandSweep}
                clipPath="url(#process-box-gold-bands)"
                fill="url(#process-box-band-sweep)"
                height="620"
                width="240"
                x="-240"
                y="520"
              />
            </svg>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
