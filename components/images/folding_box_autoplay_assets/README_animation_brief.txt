FOLDING BOX AUTOPLAY ASSET BRIEF

Source
------
The supplied reference composite has been separated into six transparent states:
1. Flat/open dieline
2. Initial fold
3. Box body formed
4. Fully open box
5. Lid closing
6. Fully closed box

Recommended animation behavior
------------------------------
Purpose: decorative process-section folding-box animation.

Sequence:
01 -> 02 -> 03 -> 04 -> 05 -> 06

Recommended close duration: 4.0 seconds
Closed-state hold: 1.0 second
Recommended open/reverse duration: 3.6 seconds
Open-state hold: 0.8 second
Loop: infinite, ping-pong (close -> hold -> open -> hold)
Start behavior: begin when the section enters the viewport
Off-screen behavior: pause completely
Reduced motion: show frame 06 (closed box) as the static fallback

Easing
------
Main panel folding: cubic-bezier(0.22, 1, 0.36, 1)
Final lid closure: cubic-bezier(0.4, 0, 0.2, 1)
Avoid bounce/elastic easing. The box should feel controlled and premium.

Suggested timing across the closing sequence
--------------------------------------------
Frame 01 / flat:           0.00s
Frame 02 / initial fold:   0.75s
Frame 03 / body formed:    1.55s
Frame 04 / open box:       2.25s
Frame 05 / lid closing:    3.10s
Frame 06 / closed:         4.00s

Implementation note
-------------------
These six images are key visual states, not enough intermediate frames for a truly
fluid frame-by-frame fold by themselves. They are suitable as direction/keyframes
for an animator, interpolation workflow, or temporary autoplay sequence.

For a genuinely accurate interactive 3D fold, the next required source is still a
real dieline/CAD/SVG/PDF (or GLB/GLTF), including crease locations and dimensions.

Resolution note
---------------
The active PNG sequence is standardized at 1254 x 1254. It replaces the earlier
upscaled and source-image variants, which have been removed from this folder.
