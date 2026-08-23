import flatDieline from "@/components/images/folding_box_autoplay_assets/01_flat_dieline.png";
import initialFold from "@/components/images/folding_box_autoplay_assets/02_initial_fold.png";
import boxBodyFormed from "@/components/images/folding_box_autoplay_assets/03_box_body_formed.png";
import openBox from "@/components/images/folding_box_autoplay_assets/04_open_box.png";
import lidClosing from "@/components/images/folding_box_autoplay_assets/05_lid_closing.png";
import closedBox from "@/components/images/folding_box_autoplay_assets/06_closed_box.png";

import type { FoldingBoxFrame } from "@/features/marketing/types";

export const foldingBoxFrames = [
  { duration: 750, label: "Flat dieline", src: flatDieline },
  { duration: 800, label: "Initial fold", src: initialFold },
  { duration: 700, label: "Box body formed", src: boxBodyFormed },
  { duration: 850, label: "Open box", src: openBox },
  { duration: 900, label: "Lid closing", src: lidClosing },
  { duration: 1000, label: "Closed box", src: closedBox },
  { duration: 810, label: "Lid reopening", src: lidClosing },
  { duration: 765, label: "Box reopening", src: openBox },
  { duration: 630, label: "Box body unfolding", src: boxBodyFormed },
  { duration: 720, label: "Initial fold reversing", src: initialFold },
  { duration: 800, label: "Flat dieline hold", src: flatDieline },
] as const satisfies readonly FoldingBoxFrame[];
