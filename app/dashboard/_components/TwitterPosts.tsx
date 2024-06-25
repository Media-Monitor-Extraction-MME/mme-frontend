import { Global, css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import SocialFrame from './SocialFrame';
import '@/dashboard/_styles/components/_redditPosts.scss';

interface TwitterPostProps {}

const TwitterPosts: React.FC<TwitterPostProps> = () => {
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
  return (
    <div
      className="reddit-posts"
      style={{
        height: '800px',
        overflow: 'auto'
      }}
    >
      {/* <Global
        styles={css`
          ${combinedStyles}
        `}
      /> */}
      {/* {post?.styles.map((style) => (
        <style key={'teset'} dangerouslySetInnerHTML={{ __html: style }} /> 771
      ))} */}
      {/* <div
        style={{
          width: '100%'
        }}
      >
        <SocialFrame url="http://localhost:3000/embed-test" />
      </div>
      <div>
        <SocialFrame url="http://localhost:3000/embed-test" />
      </div> */}
      <SocialFrame
        socialPlatform={'twitter'}
        url="http://localhost:3000/twitter?embedId=twitter-widget-0&id=1797174660771008611"
      />
      <SocialFrame
        socialPlatform={'twitter'}
        url="http://localhost:3000/twitter?embedId=twitter-widget-1&id=1797499471632519491"
      />
    </div>
  );
};

export default TwitterPosts;
