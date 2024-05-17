'use client';
import React, { useEffect } from 'react';

interface RedditEmbedProps {
  url: string;
}
const RedditEmbed: React.FC<RedditEmbedProps> = ({ url }) => {
  return (
    <div>
      <blockquote className="reddit-embed-bq" data-embed-height="316">
        <a href={'https://www.reddit.com' + url}></a>
      </blockquote>
      <iframe
        src={'https://embed.reddit.com' + url}
        scrolling="no"
        width="600px"
        height="316px"
        allowFullScreen={true}
        sandbox="allow-scripts allow-same-origin allow-popups "
        allow="clipboard-read; clipboard-write"
        style={{
          border: 'none',
          maxWidth: '100%',
          borderRadius: '8px',
          display: 'block',
          margin: '0 auto'
        }}
      />
    </div>
  );
};

export default RedditEmbed;
