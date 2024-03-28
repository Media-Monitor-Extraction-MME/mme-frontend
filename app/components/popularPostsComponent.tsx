import { Grid, Icon } from '@tremor/react';
import Image from 'next/image';
import {
  RiExternalLinkLine,
  RiRedditLine,
  RiTwitterXLine
} from '@remixicon/react';

interface PopularPostsProps {
  posts: Array<{
    title?: string;
    content: string;
    platform: 'reddit' | 'twitter';
    postedAt: Date;
  }>;
}
export function PopularPostsComponent({ posts }: PopularPostsProps) {
  return (
    <div className="posts gap-6">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <div>
            <div className="post-image">
              {post.platform === 'reddit' ? (
                <Icon
                  icon={RiRedditLine}
                  variant="simple"
                  tooltip="Reddit"
                  size="md"
                  style={{
                    color: '#7D7C80'
                  }}
                />
              ) : (
                <Icon
                  icon={RiTwitterXLine}
                  variant="simple"
                  tooltip="Reddit"
                  size="md"
                  style={{
                    color: '#7D7C80'
                  }}
                />
              )}
              <span>2 Days ago</span>
            </div>

            <a>
              <Icon
                icon={RiExternalLinkLine}
                variant="simple"
                tooltip="Reddit"
                size="md"
                style={{
                  color: '#7D7C80'
                }}
              />
            </a>
          </div>
          {post.title ? <b>{post.title}</b> : <></>}
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
