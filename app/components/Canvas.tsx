import React, { useEffect, useState, useRef } from 'react';
import '@/dashboard/_styles/components/_canvas.scss';
import { get } from 'http';

interface CanvasProps {
  width?: number;
  height?: number;
  getRef?: () => React.RefObject<HTMLCanvasElement>;
  canvasDraw?: (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) => void;
  canvasDraws?: Array<
    (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void
  >;
}

const RenderCanvasElement: React.FC<{
  canvasDraw?: (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) => void;
  getRef?: (index: number) => React.RefObject<HTMLCanvasElement>;
}> = (props) => {
  let ref = useRef<HTMLCanvasElement>(null);
  if (props.getRef) {
    ref = props.getRef(0);
  }
  const [isDrawing, setIsDrawing] = useState(false);
  const { canvasDraw } = props;

  useEffect(() => {
    const resize = () => {
      if (ref.current) {
        const canvas = ref.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const devicePixelRatio = window.devicePixelRatio || 1;
        const calculatedHeight = rect.width * 0.5 * devicePixelRatio;
        canvas.width = rect.width * devicePixelRatio;

        // canvas.height = canvas.width * 0.5 * devicePixelRatio;
        canvas.height = calculatedHeight;
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          if (canvasDraw) {
            canvasDraw(ctx, canvas);
          }
        }
      }
    };
    setIsDrawing(true);
    window.addEventListener('resize', () => {
      resize();
    });
  }, [setIsDrawing, canvasDraw]);

  useEffect(() => {
    if (ref.current && isDrawing === true) {
      const canvas = ref.current;
      const ctx = canvas.getContext('2d');
      const devicePixelRatio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = canvas.width * 0.5 * devicePixelRatio;

      let frameCount = 0;
      let animationFrameId: number;
      const render = () => {
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          if (canvasDraw) {
            canvasDraw(ctx, canvas);
          }
        }
      };

      render();
    }
  }, [isDrawing, canvasDraw]);
  return <canvas className={'canvas'} ref={ref} />;
};
const Canvas: React.FC<CanvasProps> = (props) => {
  const { canvasDraw, canvasDraws } = props;

  if (!canvasDraw && !canvasDraws) {
    return <div></div>;
  }

  if (canvasDraws) {
    return (
      <div className="canvas-container">
        {canvasDraws.map((draw, index) => (
          <RenderCanvasElement
            getRef={props.getRef}
            key={index}
            canvasDraw={draw}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="canvas-container">
      <RenderCanvasElement getRef={props.getRef} canvasDraw={canvasDraw} />
    </div>
  );
};

export default Canvas;
