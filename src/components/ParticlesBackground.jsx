import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing tsParticles");
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles container loaded:", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent", // Black background
          },
        },
        fpsLimit: 30,
        particles: {
          color: {
            value: "#80cc45", // Light purple
          },
          links: {
            color: "#80cc45", // Light purple
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out"
            }
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50, // Number of particles
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: false,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 1
              }
            }
          }
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;