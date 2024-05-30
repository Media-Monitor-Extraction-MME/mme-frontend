import Canvas from '@/components/Canvas';
import UpdateProgress from '@/onboarding/libs/UpdateProgress';
import { set } from '@auth0/nextjs-auth0/dist/session';
import React, { useEffect, useState } from 'react';
import TWEEN from '@tweenjs/tween.js';
import CanvasV2 from '@/components/CanvasV2';

interface KeywordMoodProps {
  sentiment: number;
}
const KeywordMood: React.FC<KeywordMoodProps> = (props) => {
  const moods = [
    { mood: 'Positive', color: '#E56261' },
    { mood: 'Neutral', color: '#FCD059' },
    { mood: 'Negative', color: '#43CD84' }
  ];
  const refs = [
    React.createRef<HTMLCanvasElement>(),
    React.createRef<HTMLCanvasElement>()
  ];

  const [keywordMood, setKeywordMood] = useState<number>(props.sentiment);
  const DrawPointer = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    division: number,
    increase: number,
    centerX: number,
    centerY: number,
    radius: number
  ) => {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(0, centerY);

    console.log(increase);

    const angle = Math.PI / division;

    const x = centerX + -radius * Math.cos(angle * increase);
    const y = centerY + -radius * Math.sin(angle * increase);

    console.log(x, y);
    // ctx.clearRect(x, y, radius / 10, radius / 10);

    // Draw the point on the circle
    ctx.beginPath();
    ctx.arc(x, y, radius / 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#5E47EB';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, y, radius / 20, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.save();
    // ctx.save();
    // ctx.restore();
  };
  const DrawSmiley = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    centerX: number,
    centerY: number,
    radius: number
  ) => {
    radius = 40;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();

    // Draw the eyes
    const eyeRadius = radius / 10;
    const eyeOffsetX = radius / 3;
    const eyeOffsetY = radius / 3;

    ctx.beginPath();
    ctx.arc(
      centerX - eyeOffsetX,
      centerY - eyeOffsetY,
      eyeRadius,
      0,
      2 * Math.PI,
      false
    );
    ctx.fillStyle = 'black';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(
      centerX + eyeOffsetX,
      centerY - eyeOffsetY,
      eyeRadius,
      0,
      2 * Math.PI,
      false
    );
    ctx.fillStyle = 'black';
    ctx.fill();

    // Draw the mouth
    const mouthOffsetY = radius / 5;

    ctx.beginPath();
    ctx.arc(centerX, centerY + mouthOffsetY, radius / 2, 0, Math.PI, false);
    ctx.lineWidth = radius / 20;
    ctx.strokeStyle = 'black';
    ctx.stroke();
  };
  const DrawMood = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    centerX: number,
    centerY: number,
    radius: number
  ) => {
    const innerCircleRadius =
      radius - radius / 10 < 0 ? 0 : radius - radius / 8;

    ctx.translate(0, centerY);
    // ctx.beginPath();
    // ctx.arc(centerX, centerY - radius / 20, 100, 0, 2 * Math.PI, false);
    // ctx.lineWidth = 20;
    // ctx.strokeStyle = 'red';
    // ctx.stroke();
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerCircleRadius, 0, Math.PI, true);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.lineWidth = radius / 200;
    ctx.strokeStyle = 'black';
    ctx.setLineDash([radius / 25, radius / 10]); // Set the line dash pattern to create a striped stroke
    ctx.strokeStyle = 'black'; // Set the stroke color to black
    ctx.stroke();
    ctx.setLineDash([]); // Reset the line dash pattern to solid

    // ctx.save();

    function drawSegment(
      index: number,
      centerX: number,
      centerY: number,
      radius: number,
      division: number,
      color: string
    ) {
      ctx.beginPath();
      const seperator = 0.065;

      const isLastIndex = division - index - 1 === 0;
      const isFirstIndex = index === 0;

      if (isFirstIndex) {
        ctx.arc(
          centerX,
          centerY,
          radius,
          -Math.PI,
          -(Math.PI / division) * (division - index - 1) + -seperator,
          false
        );
      } else if (isLastIndex) {
        console.log('Last index');
        ctx.arc(
          centerX,
          centerY,
          radius,
          -(Math.PI / division) * (division - index) + seperator,
          -Math.PI * 0,
          false
        );
      } else {
        ctx.arc(
          centerX,
          centerY,
          radius,
          -(Math.PI / division) * (division - index) + seperator,
          -(Math.PI / division) * (division - index - 1) - seperator,
          false
        );
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = radius / 10;
      ctx.lineCap = 'round';
      ctx.stroke();
    }

    for (let i = 0; i < moods.length; i++) {
      console.log(i);
      drawSegment(i, centerX, centerY, radius, moods.length, moods[i].color);
    }
  };

  const getRef = () => {
    return refs[0];
  };

  return (
    <div className="keyword-mood">
      <CanvasV2
        getRef={getRef}
        draw={(ctx, canvas) => {
          const rect = canvas.getBoundingClientRect();
          const devicePixelRatio = window.devicePixelRatio || 1;
          const calculatedHeight = rect.width * 0.5 * devicePixelRatio;
          canvas.width = rect.width * devicePixelRatio;
          canvas.height = calculatedHeight;
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const radius = centerX * 0.9;
          canvas.height = canvas.height + centerX * 0.1;
          ctx.save();
          DrawMood(ctx, canvas, centerX, centerY, radius);
          ctx.restore();
          DrawSmiley(ctx, canvas, centerX, centerY, radius);
          ctx.restore();
          DrawPointer(
            ctx,
            canvas,
            100,
            keywordMood * 100,
            centerX,
            centerY,
            radius
          );
        }}
      />
    </div>
  );
};

export default KeywordMood;
