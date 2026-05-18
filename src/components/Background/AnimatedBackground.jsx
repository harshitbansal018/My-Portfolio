function AnimatedBackground() {
  const particles = Array.from({ length: 28 }).map((_, index) => ({
    left: `${(index * 37) % 100}%`,
    top: `${(index * 23) % 100}%`,
    size: `${2 + (index % 5)}px`,
    duration: `${7 + index * 0.35}s`,
  }));

  return (
    <div className="ambient-bg" aria-hidden="true">
      <span className="mesh mesh-one" />
      <span className="mesh mesh-two" />
      <span className="mesh mesh-three" />
      <div className="particle-field">
        {particles.map((particle, index) => (
          <i
            key={index}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default AnimatedBackground;
