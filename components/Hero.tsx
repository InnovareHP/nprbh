interface HeroProps {
  title: string;
  subtitle?: string;
  label?: string;
  children?: React.ReactNode;
  size?: "full" | "medium" | "small";
  align?: "left" | "center";
}

const sizeClasses = {
  full: "min-h-screen",
  medium: "min-h-[500px] pt-36 pb-24 md:pt-32 md:pb-20",
  small: "min-h-[340px] pt-28 pb-16 md:min-h-[280px] md:pt-24 md:pb-14",
};

export default function Hero({
  title,
  subtitle,
  label,
  children,
  size = "medium",
  align = "center",
}: HeroProps) {
  const isCenter = align === "center";

  return (
    <section
      className={`relative flex items-center overflow-hidden bg-linear-to-br from-bg-dark via-primary-light to-accent-hover ${sizeClasses[size]}`}
    >
      {/* Decorative overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(13,115,119,0.15)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(196,154,108,0.1)_0%,transparent_50%)]" />

      <div
        className={`relative w-full px-6 ${
          isCenter
            ? "mx-auto flex max-w-[1200px] flex-col items-center text-center"
            : "mx-auto max-w-[800px] lg:ml-[max(24px,calc((100%-1200px)/2+24px))]"
        }`}
      >
        {label && (
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            {label}
          </span>
        )}
        <h1
          className={`mb-6 max-w-[800px] font-bold leading-[1.1] tracking-tight text-white ${
            size === "small"
              ? "text-[clamp(1.75rem,4vw,2.75rem)]"
              : "text-[clamp(2.25rem,5.5vw,4rem)]"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mb-2 max-w-[560px] text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-on-dark-muted">
            {subtitle}
          </p>
        )}
        {children && (
          <div
            className={`mt-8 flex flex-wrap gap-4 max-md:w-full max-md:max-w-xs max-md:flex-col max-md:items-stretch ${
              isCenter ? "justify-center" : ""
            }`}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
