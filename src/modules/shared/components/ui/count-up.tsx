import * as React from "react"

interface CountUpProps {
  end: number
  duration?: number
  className?: string
}

export function CountUp({ end, duration = 2000, className }: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end)
      return
    }

    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(end * eased))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [end, duration])

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString("es-VE")}
    </span>
  )
}
