import React from 'react';
import Skeleton from 'react-loading-skeleton';

const LoadingSkeleton: React.FC = () => {
  return (
    <div>
      <Skeleton height={200} />
      <Skeleton height={20} width={200} style={{ marginTop: '10px' }} />
      <Skeleton height={20} width={150} style={{ marginTop: '5px' }} />
      <Skeleton height={20} width={250} style={{ marginTop: '5px' }} />
      <Skeleton height={20} width={180} style={{ marginTop: '5px' }} />
    </div>
  );
};

export default LoadingSkeleton;
