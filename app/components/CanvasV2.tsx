import React, { useEffect } from 'react';
import '@/dashboard/_styles/components/_canvas.scss';

interface RenderCanvasProps {
  getRef: () => React.RefObject<HTMLCanvasElement>;
  draw: (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void;
}
interface CanvasProps {
  getRef: () => React.RefObject<HTMLCanvasElement>;
  draw: (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void;
}
const RenderCanvasElement: React.FC<RenderCanvasProps> = (props) => {
  const ref = props.getRef();

  useEffect(() => {
    props.draw(
      ref.current?.getContext('2d') as CanvasRenderingContext2D,
      ref.current as HTMLCanvasElement
    );
  }, [ref, props]);

  return <canvas ref={ref} />;
};
const Canvas: React.FC<CanvasProps> = (props) => {
  return (
    <div className="canvas-container">
      <RenderCanvasElement {...props} />
    </div>
  );
};

export default Canvas;
