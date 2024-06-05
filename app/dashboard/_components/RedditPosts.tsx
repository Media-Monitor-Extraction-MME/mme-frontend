import { Global, css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import SocialFrame from './SocialFrame';
import '@/dashboard/_styles/components/_redditPosts.scss';

interface RedditPostsProps {}

const RedditPosts: React.FC<RedditPostsProps> = () => {
  const [post, setPost] = useState<{
    postId: string;
    subReddit: string;
    title: string;
    body: string;
    styles: string[];
    scripts: string[];
  }>();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/reddit').then((res) => {
      res.json().then((data) => {
        setPost(data);
        setLoading(false);
      });
    });
  }, [setPost]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const combinedStyles = post?.styles.join(' ');
  console.log(combinedStyles);
  return (
    <div
      className="reddit-posts"
      style={{
        height: '800px',
        overflow: 'auto'
      }}
    >
      <SocialFrame
        socialPlatform="reddit"
        url="http://localhost:3000/embed-test"
      />
      <SocialFrame
        socialPlatform="reddit"
        url="http://localhost:3000/embed-test"
      />
      <SocialFrame
        socialPlatform="reddit"
        url="http://localhost:3000/embed-test"
      />
    </div>
  );
};

export default RedditPosts;
