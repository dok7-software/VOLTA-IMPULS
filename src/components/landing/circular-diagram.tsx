import { aboutType } from "@/core/typography";

const CX = 160;
const CY = 160;
const OUTER_R = 122;
const INNER_R = 84;
const OUTER_C = 2 * Math.PI * OUTER_R;
const THICK_ARC = OUTER_C * 0.75;
const THIN_ARC = OUTER_C * 0.25;

export function CircularDiagram() {
  return (
    <svg width="320" height="320" viewBox="0 0 320 320" className="mx-auto">
      <circle
        cx={CX}
        cy={CY}
        r={INNER_R}
        fill="none"
        stroke="rgba(23,212,121,.38)"
        strokeWidth="1.5"
      />

      <circle
        cx={CX}
        cy={CY}
        r={OUTER_R}
        fill="none"
        stroke="rgba(23,212,121,.22)"
        strokeWidth="1.5"
      />

      <circle
        cx={CX}
        cy={CY}
        r={OUTER_R}
        fill="none"
        stroke="#17d479"
        strokeWidth="4"
        strokeDasharray={`${THICK_ARC} ${THIN_ARC}`}
        strokeLinecap="round"
      />

      <circle cx={CX} cy={CY - OUTER_R} r="9" fill="#f5a623" />

      <text
        x={CX}
        y="154"
        textAnchor="middle"
        className={`fill-white ${aboutType.diagram}`}
      >
        CIRCULAR
      </text>
      <text
        x={CX}
        y="184"
        textAnchor="middle"
        className={`fill-brand-green ${aboutType.diagram}`}
      >
        IMPULS
      </text>
    </svg>
  );
}
