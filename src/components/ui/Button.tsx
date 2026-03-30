import { forwardRef } from "react";

type ButtonVariant = "primary" | "accent" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  as?: "button" | "a";
  href?: string;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  /** Teal background, white text — primary CTA */
  primary: {
    background: "#1A6B6B",
    color: "#FFFFFF",
    border: "none",
  },
  /** Amber background, dark text — warm/urgent CTA */
  accent: {
    background: "#F5A623",
    color: "#111827",
    border: "none",
  },
  /** Teal outline, teal text — secondary action */
  secondary: {
    background: "transparent",
    color: "#1A6B6B",
    border: "1.5px solid #1A6B6B",
  },
  /** No background, neutral text — tertiary/nav link action */
  ghost: {
    background: "transparent",
    color: "#4B5563",
    border: "none",
  },
};

const variantHover: Record<ButtonVariant, React.CSSProperties> = {
  primary: { background: "#155656" },
  accent: { background: "#D4881A" },
  secondary: { background: "#E6F3F3" },
  ghost: { color: "#1F2937" },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { fontSize: "0.8125rem", padding: "6px 14px", borderRadius: "6px" },
  md: { fontSize: "0.9375rem", padding: "10px 22px", borderRadius: "8px" },
  lg: { fontSize: "1rem", padding: "14px 28px", borderRadius: "10px" },
};

/**
 * Reusable Button component.
 *
 * Variants: primary | accent | secondary | ghost
 * Sizes:    sm | md | lg
 * States:   default, hover (CSS), focus-visible (global ring), disabled, loading
 *
 * Usage:
 *   <Button variant="primary" size="lg">Get Started Free</Button>
 *   <Button variant="accent" loading>Processing…</Button>
 *   <Button variant="secondary" size="sm">Learn More</Button>
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      children,
      disabled,
      style,
      className = "",
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const baseStyle: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      letterSpacing: "0.01em",
      lineHeight: 1,
      cursor: isDisabled ? (loading ? "wait" : "not-allowed") : "pointer",
      opacity: isDisabled && !loading ? 0.45 : 1,
      transition: "background 150ms, color 150ms, border-color 150ms, opacity 150ms",
      width: fullWidth ? "100%" : undefined,
      textDecoration: "none",
      ...sizeStyles[size],
      ...variantStyles[variant],
      ...style,
    };

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={`group ${className}`}
        style={baseStyle}
        onMouseEnter={(e) => {
          if (!isDisabled) {
            const hov = variantHover[variant];
            if (hov.background) (e.currentTarget as HTMLElement).style.background = hov.background as string;
            if (hov.color) (e.currentTarget as HTMLElement).style.color = hov.color as string;
          }
        }}
        onMouseLeave={(e) => {
          const base = variantStyles[variant];
          (e.currentTarget as HTMLElement).style.background = (base.background ?? "") as string;
          (e.currentTarget as HTMLElement).style.color = (base.color ?? "") as string;
        }}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
            <path d="M12 2a10 10 0 0110 10" strokeLinecap="round" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
export type { ButtonVariant, ButtonSize, ButtonProps };
