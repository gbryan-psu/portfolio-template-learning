import { useEffect, useState } from 'react';

export const StarBackground = () => {
  type Star = {
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    animationDuration: number;
  };
  type Meteor = {
    id: number;
    size: number;
    x: number;
    y: number;
    animationDuration: number;
  };

  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  const generateStars = () => {
    const numberofStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);

    const newStars: Star[] = [];

    for (let i = 0; i < numberofStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberofMeteors = 6;

    const newMeteors: Meteor[] = [];

    for (let i = 0; i < numberofMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 1 + 1,
        x: Math.random() * 100,
        y: Math.random() * 40,
        animationDuration: Math.random() * 6 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + 'px',
            height: star.size + 'px',
            left: star.x + '%',
            top: star.y + '%',
            opacity: star.opacity,
            animationDuration: star.animationDuration + 's',
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + 'px',
            height: meteor.size + 'px',
            left: meteor.x + '%',
            top: meteor.y + '%',
            animationDuration: meteor.animationDuration + 's',
          }}
        />
      ))}
    </div>
  );
};
