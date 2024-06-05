import React from 'react';

interface FlexRowProps {
  numItems: number;
  className: string;
  columns: { columnWidth: number; content: React.ReactNode }[];
}

export function FlexRow({ numItems, className = '', columns }: FlexRowProps) {
  const gridTemplateColumns = `repeat(${numItems}, 1fr)`;

  return (
    <div
      style={{ display: 'grid', gridTemplateColumns }}
      className={className ?? ''}
    >
      {columns.map((column, index) => (
        <div key={index} style={{ gridColumn: `span ${column.columnWidth}` }}>
          {column.content}
        </div>
      ))}
    </div>
  );
}
