import React from "react"

interface PageBannerProps {
  children: React.ReactNode
  size?: "lg" | "sm"
}

export function PageBanner({ children, size = "lg" }: PageBannerProps) {
  const spacing = size === "lg" ? "py-24 min-h-90" : "py-16 min-h-60"

  return (
    <section className={`relative flex items-center overflow-hidden px-4 ${spacing}`}>
      <img
        src="/foto.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="container relative z-10 mx-auto max-w-[1280px] text-white">{children}</div>
    </section>
  )
}
