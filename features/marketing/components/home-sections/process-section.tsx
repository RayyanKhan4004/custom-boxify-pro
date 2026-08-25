import { PageContainer } from "@/components/layout/page-container";
import { steps } from "@/features/marketing/constants";
import styles from "../process-section.module.css";
import { FoldingBoxAutoplay } from "./folding-box-autoplay";
import { ProcessFlow } from "./process-flow";

export function ProcessSection() {
  return (
    <section className="bg-(--surface-page) py-20 lg:py-24">
      <PageContainer>
        <h2 className="font-heading text-4xl font-bold leading-tight text-(--text-primary) md:text-5xl">
          Order Custom Packaging in 3 Simple Steps
        </h2>

        <div className="mt-10 xl:hidden">
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

          <div className={`${styles.boxStage} ${styles.foldingBoxStage}`}>
            <FoldingBoxAutoplay />
          </div>
        </div>
        <div className="mt-10 hidden xl:block">
          <ProcessFlow />
        </div>
      </PageContainer>
    </section>
  );
}
