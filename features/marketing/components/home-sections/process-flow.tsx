"use client";

import {
  BaseEdge,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  type Edge,
  type EdgeProps,
  type Node,
  type NodeProps,
} from "@xyflow/react";

import { steps } from "@/features/marketing/constants";

import styles from "../process-section.module.css";
import { FoldingBoxAutoplay } from "./folding-box-autoplay";

type StepNodeData = {
  stepIndex: number;
};

type PulseEdgeData = {
  pulsePhase: "incoming" | "outgoing";
};

const PULSE_CYCLE_DURATION = "4.8s";
const PULSE_MERGE_AT = 0.55;
const EDGE_CORNER_RADIUS = 16;

function PulsingEdge({
  data,
  id,
  markerEnd,
  sourceX,
  sourceY,
  style,
  targetX,
  targetY,
}: EdgeProps<Edge<PulseEdgeData>>) {
  const isIncoming = data?.pulsePhase !== "outgoing";
  const verticalDirection = targetY > sourceY ? 1 : -1;
  const cornerRadius = Math.min(
    EDGE_CORNER_RADIUS,
    Math.abs(targetX - sourceX),
    Math.abs(targetY - sourceY),
  );
  const edgePath =
    isIncoming && Math.abs(targetY - sourceY) > 1
    ? `M ${sourceX} ${sourceY} H ${targetX - cornerRadius} Q ${targetX} ${sourceY} ${targetX} ${sourceY + verticalDirection * cornerRadius} V ${targetY}`
    : `M ${sourceX} ${sourceY} H ${targetX}`;

  return (
    <>
      <BaseEdge id={id} markerEnd={markerEnd} path={edgePath} style={style} />
      <circle className="flow-pulse" opacity="0" r="3">
        <animate
          attributeName="opacity"
          dur={PULSE_CYCLE_DURATION}
          keyTimes={
            isIncoming
              ? `0;0.01;${PULSE_MERGE_AT - 0.01};${PULSE_MERGE_AT};1`
              : `0;${PULSE_MERGE_AT};${PULSE_MERGE_AT + 0.01};0.99;1`
          }
          repeatCount="indefinite"
          values={isIncoming ? "0;1;1;0;0" : "0;0;1;1;0"}
        />
        <animateMotion
          calcMode="linear"
          dur={PULSE_CYCLE_DURATION}
          keyPoints={isIncoming ? "0;1;1" : "0;0;1;1"}
          keyTimes={
            isIncoming
              ? `0;${PULSE_MERGE_AT};1`
              : `0;${PULSE_MERGE_AT};1;1`
          }
          path={edgePath}
          repeatCount="indefinite"
        />
      </circle>
    </>
  );
}

function StepNode({ data }: NodeProps<Node<StepNodeData, "step">>) {
  const step = steps[data.stepIndex];
  const StepIcon = step.icon;

  return (
    <article className={styles.flowStepCard}>
      <div className="mb-6 flex size-12.5 items-center justify-center rounded-lg bg-(--surface-muted) text-(--text-primary)">
        <StepIcon aria-hidden="true" className="size-6" />
      </div>
      <h3 className="text-base font-semibold leading-6 text-(--text-primary)">
        {step.title}
      </h3>
      <p className="mt-3 text-sm leading-5.5 text-(--text-muted)">
        {step.description}
      </p>
      <Handle
        className={styles.flowHandle}
        id="output"
        position={Position.Right}
        type="source"
      />
    </article>
  );
}

function JunctionNode() {
  return (
    <div className={styles.flowJunction}>
      <Handle
        className={styles.flowHandle}
        id="input"
        position={Position.Left}
        type="target"
      />
      <Handle
        className={styles.flowHandle}
        id="output"
        position={Position.Right}
        type="source"
      />
    </div>
  );
}

function BoxNode() {
  return (
    <div className={styles.flowBoxNode}>
      <div className={`${styles.boxStage} ${styles.foldingBoxStage}`}>
        <Handle
          className={styles.flowHandle}
          id="input"
          position={Position.Left}
          type="target"
        />
        <FoldingBoxAutoplay />
      </div>
    </div>
  );
}

const nodeTypes = {
  box: BoxNode,
  junction: JunctionNode,
  step: StepNode,
};

const edgeTypes = { pulse: PulsingEdge };

const nodes: Node[] = [
  {
    data: { stepIndex: 0 } satisfies StepNodeData,
    id: "step-1",
    position: { x: 0, y: 0 },
    type: "step",
  },
  {
    data: { stepIndex: 1 } satisfies StepNodeData,
    id: "step-2",
    position: { x: 0, y: 252 },
    type: "step",
  },
  {
    data: { stepIndex: 2 } satisfies StepNodeData,
    id: "step-3",
    position: { x: 0, y: 504 },
    type: "step",
  },
  {
    data: {},
    id: "junction",
    position: { x: 580, y: 368 },
    type: "junction",
  },
  {
    data: {},
    id: "box",
    position: { x: 760, y: 88 },
    type: "box",
  },
];

const edgeStyle = { stroke: "var(--brand-primary)", strokeWidth: 1.5 };

const edges: Edge[] = [
  {
    data: { pulsePhase: "incoming" } satisfies PulseEdgeData,
    id: "step-1-junction",
    source: "step-1",
    sourceHandle: "output",
    style: edgeStyle,
    target: "junction",
    targetHandle: "input",
    type: "pulse",
  },
  {
    data: { pulsePhase: "incoming" } satisfies PulseEdgeData,
    id: "step-2-junction",
    source: "step-2",
    sourceHandle: "output",
    style: edgeStyle,
    target: "junction",
    targetHandle: "input",
    type: "pulse",
  },
  {
    data: { pulsePhase: "incoming" } satisfies PulseEdgeData,
    id: "step-3-junction",
    source: "step-3",
    sourceHandle: "output",
    style: edgeStyle,
    target: "junction",
    targetHandle: "input",
    type: "pulse",
  },
  {
    data: { pulsePhase: "outgoing" } satisfies PulseEdgeData,
    id: "junction-box",
    markerEnd: { color: "var(--brand-primary)", type: MarkerType.ArrowClosed },
    source: "junction",
    sourceHandle: "output",
    style: edgeStyle,
    target: "box",
    targetHandle: "input",
    type: "pulse",
  },
];

export function ProcessFlow() {
  return (
    <div className={styles.processFlow}>
      <ReactFlow
        edges={edges}
        edgeTypes={edgeTypes}
        fitView={false}
        maxZoom={1}
        minZoom={1}
        nodes={nodes}
        nodeTypes={nodeTypes}
        nodesConnectable={false}
        nodesDraggable={false}
        panOnDrag={false}
        panOnScroll={false}
        proOptions={{ hideAttribution: true }}
        zoomOnDoubleClick={false}
        zoomOnPinch={false}
        zoomOnScroll={false}
      />
    </div>
  );
}
