import React from "react"

export function MarqueeBar({ text, speed = "40s", direction = "left", color = "bg-primary" }) {
  return (
    <div className={`w-full overflow-hidden border-y-4 border-black dark:border-white ${color} py-4 select-none`}>
      <div 
        className="flex whitespace-nowrap animate-marquee pause-on-hover"
        style={{ 
          animationDuration: speed,
          flexDirection: direction === "right" ? "row-reverse" : "row"
        }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-display font-black uppercase text-black mx-4 flex items-center gap-8">
            {text} <span className="w-4 h-4 md:w-6 md:h-6 bg-black rounded-none rotate-45" />
          </span>
        ))}
      </div>
    </div>
  )
}
