import React, { useState } from 'react';
import CanvasV2 from '@/components/CanvasV2';
import '@/dashboard/_styles/components/_keywordMood.scss';

interface KeywordMoodProps {
  sentiment: number;
}
const KeywordMood: React.FC<KeywordMoodProps> = (props) => {
  const moods = [
    { mood: 'Negative', color: '#E56261' },
    { mood: 'Neutral', color: '#FCD059' },
    { mood: 'Positive', color: '#43CD84' }
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

    const angle = Math.PI / division;

    const x = centerX + -radius * Math.cos(angle * increase);
    const y = centerY + -radius * Math.sin(angle * increase);

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
    centerX: number,
    centerY: number,
    radius: number,
    mood: number
  ) => {
    // ...

    // Draw the SVG image
    const image = new Image();
    if (mood >= 0 && mood < 0.3) {
      image.src = '/images/sad-smiley.svg';
    } else if (mood >= 0.3 && mood < 0.7) {
      image.src = '/images/neutral-smiley.svg';
    } else {
      image.src = '/images/happy-smiley.svg';
    }
    image.onload = () => {
      ctx.drawImage(image, centerX - 50, centerY - (radius / 2 + 50), 100, 100);
    };

    // ...
  };

  const DrawMentions = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    centerX: number,
    centerY: number,
    radius: number,
    mentions: number,
    mood: number
  ) => {
    // Draw the mentions number
    ctx.font = '40px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(mentions.toString(), centerX, centerY + 150);

    ctx.font = '25px Open Sans';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#6C788A';
    ctx.fillText('Total keywords mentions', centerX, centerY + 200);

    ctx.font = '25px Open Sans';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black';
    ctx.fillText('Your keywords general mood is ', centerX - 40, centerY + 260);

    let moodText = '';
    let textLeftMargin = 20;
    if (mood >= 0 && mood < 0.3) {
      ctx.fillStyle = moods[0].color;
      moodText = moods[0].mood;
      textLeftMargin = 167;
    } else if (mood >= 0.3 && mood < 0.7) {
      ctx.fillStyle = moods[1].color;
      moodText = moods[1].mood;
      textLeftMargin = 160;
    } else {
      ctx.fillStyle = moods[2].color;
      moodText = moods[2].mood;
      textLeftMargin = 162;
    }
    ctx.fillText(moodText, centerX + textLeftMargin, centerY + 260);
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
          canvas.height = canvas.height + centerX * 0.3;
          ctx.save();
          DrawMood(ctx, canvas, centerX, centerY, radius);
          ctx.restore();
          DrawSmiley(ctx, centerX, centerY, radius, keywordMood);
          ctx.restore();
          DrawMentions(ctx, canvas, centerX, centerY, radius, 100, keywordMood);
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
      <div className="keyword-mood-social">
        <div className="keyword-mood-social-x">
          <b>X (Twitter) Activity</b>
          <p>100 mentions</p>
          <div>
            <span>+121%</span> VS prev. 30 days
          </div>
        </div>
        <div className="keyword-mood-social-reddit"></div>
      </div>
    </div>
  );
};

export default KeywordMood;
