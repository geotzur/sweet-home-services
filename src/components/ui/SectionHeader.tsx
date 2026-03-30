interface SectionHeaderProps {
  /** Uppercase overline label above the heading — uses brand teal, tracked spacing */
  overline?: string;
  /** Main H2 heading text */
  heading: string;
  /** Optional teal-accented portion of the heading (renders as a colored span) */
  accentText?: string;
  /** Optional subtext paragraph below the heading */
  subtext?: string;
  /** Text alignment — default "center" */
  align?: "center" | "left";
  /** HTML id applied to the h2 for aria-labelledby wiring */
  id?: string;
}

/**
 * Reusable section header component.
 *
 * Renders: [overline] → H2 heading [with optional teal accent] → [subtext]
 *
 * Usage:
 *   <SectionHeader
 *     overline="Simple, Transparent Pricing"
 *     heading="One monthly fee."
 *     accentText="Everything included."
 *     subtext="No setup fees. No long-term contracts. Cancel anytime."
 *   />
 */
export default function SectionHeader({
  overline,
  heading,
  accentText,
  subtext,
  align = "center",
  id,
}: SectionHeaderProps) {
  const textAlign = align === "left" ? "text-left" : "text-center";
  const mx = align === "left" ? "" : "mx-auto";

  return (
    <div className={`max-w-2xl ${mx} mb-14 ${textAlign}`}>
      {overline && (
        <p className="section-overline mb-3">{overline}</p>
      )}

      <h2
        id={id}
        className="text-neutral-900 leading-tight"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
          fontWeight: 700,
          letterSpacing: "-0.01em",
        }}
      >
        {heading}{accentText && (
          <>
            {" "}
            <span style={{ color: "#1A6B6B" }}>{accentText}</span>
          </>
        )}
      </h2>

      {subtext && (
        <p
          className="mt-4 text-neutral-600 leading-relaxed"
          style={{ fontFamily: "var(--font-sans)", fontSize: "1.0625rem" }}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}

export type { SectionHeaderProps };
