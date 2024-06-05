'use client';
import { useEffect, useState } from 'react';
import RedditEmbed from './RedditEmbed';
import '@/styles/components/_popular-posts.scss';

interface PopularPostsProps {
  // posts: Array<{
  //   title?: string;
  //   content: string;
  //   platform: 'reddit' | 'twitter';
  //   postedAt: Date;
  // }>;
  keywords: string[];
}

interface Post {
  title: string;
  url: string;
  origin: string;
  upvotes: number;
  time: string;
}
export function PopularPostsComponent({ keywords }: PopularPostsProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    if (keywords === undefined) {
      return;
    }
    fetch(
      `http://localhost:3001/posts?keywords=${keywords.join(',')}&limit=100&sort={field:upvotes,order:desc}`
    ).then(async (res) => {
      const data = (await res.json()) as Post[];

      const uniquePosts = data.reduce((acc: Post[], post: Post) => {
        const existingPost = acc.find((p) => p.title === post.title);
        if (!existingPost) {
          acc.push(post);
        }
        return acc;
      }, []);

      setPosts(uniquePosts);
    });
  }, [setPosts, keywords]);
  return (
    <div className="posts gap-6">
      {posts.map((post, index) => (
        <RedditEmbed key={index} url={post.url} />
      ))}
      {/* {posts.map((post, index) => (
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
      ))} */}
    </div>
  );
}
