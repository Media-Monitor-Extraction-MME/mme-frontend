'use client';
import React, { useEffect, useRef } from 'react';

interface SocialFrameProps {
  url: string;
  socialPlatform: 'reddit' | 'twitter';
}
function handleTwitterResize() {
  const tweets = document.querySelectorAll<HTMLDivElement>('.twitter-tweet');

  tweets.forEach((tweet) => {
    if (tweet.parentElement !== null) {
      tweet.parentElement.style.width = '100%';
      tweet.style.height = '100%';
    }
  });

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      // Filter for mutation where tweet is added
      if (
        (mutation.target as HTMLElement).classList.contains('twitter-tweet')
      ) {
        const tweet = mutation.target as HTMLElement;
        if (tweet.style.maxWidth) {
          // Code to handle tweet with max-width in style
          tweet.style.removeProperty('max-width');
        }
      }

      if ((mutation.target as HTMLElement).nodeName === 'IFRAME') {
        const iframe = mutation.target as HTMLIFrameElement;
        if (iframe.getAttribute('id') === 'rufous-sandbox') {
          iframe.parentElement!.removeChild(iframe);
        }

        if (iframe.style.width !== '100%') {
          // Code to handle iframe with width in style
          iframe.style.width = '100%';

          const article =
            iframe.contentWindow?.document.body.querySelector('article');

          // iframe.contentWindow?.document.body.addEventListener('load', () => {
          //   const article =
          //     iframe.contentWindow?.document.body.querySelector('article');
          // });
        }
      }
      //Check if Tweet object
      //Check if attribute added
      //Check if attribute is max-width
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node: Node) => {
          if (node.nodeName === 'DIV') {
            const tweet = node as HTMLElement;

            if (tweet.classList.contains('twitter-tweet')) {
              // Code to handle the twitter-tweet node
              tweet.style.backgroundColor = 'purple';
              tweet.style.border = '1px solid red';
              tweet.style.removeProperty('border');
              // tweet.style['max-width'] = '100%';
            }
          }
        });
        mutation.addedNodes.forEach((node: Node) => {
          if (node.nodeName === 'IFRAME' && node.parentNode) {
            (node as HTMLElement).getAttribute('id') === 'rufous-sandbox' &&
              node.parentNode.removeChild(node);
          }
          if (node.nodeName === 'DIV') {
            const tweet = node as HTMLElement;

            if (tweet.classList.contains('twitter-tweet')) {
              tweet.parentElement!.style.maxWidth = '100%';

              (tweet as HTMLDivElement).addEventListener('load', (event) => {
                (event.currentTarget as HTMLDivElement).style.backgroundColor =
                  'purple';
              });
            }
          }
        });
        // const tweets =
        //   document.querySelectorAll<HTMLDivElement>('.twitter-tweet');

        // tweets.forEach((tweet) => {
        //   if (tweet.parentElement !== null) {
        //     tweet.parentElement.style.width = '100%';
        //     tweet.style.height = '100%';
        //   }
        // });
      }
    });
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['style']
  });
}

function handleTwitterResizeV2(ref: React.RefObject<HTMLIFrameElement>) {
  const frame = ref;
  if (frame.current === null) return;
  frame.current.onload = () => {
    const body = frame.current!.contentWindow?.document.body;

    const images = frame.current!.querySelectorAll('img');
    const annoying_div = body!.querySelector('.r-vakc41');
    annoying_div?.classList.remove('r-vakc41');

    const observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        mutation.addedNodes.forEach((node: Node) => {
          if (node.nodeName === 'DIV') {
            const tweet = node as HTMLElement;
            if (tweet.classList.contains('r-vakc41')) {
              tweet.classList.remove('r-vakc41');
            }

            const width = frame.current!.contentWindow?.document.body
              .scrollWidth as number;
            const height = frame.current!.contentWindow?.document.body
              .scrollHeight as number;

            const parent_width = frame.current!.parentElement!.clientWidth;

            const new_height =
              frame.current!.contentWindow?.document.body.clientHeight;

            frame.current!.contentDocument!.documentElement!.style.overflowY =
              'hidden';

            frame.current!.style.removeProperty('max-height');
            frame.current!.style.height = `${new_height}px`;

            // Edit subtweet
            // const subtweet =
            //   frame.current!.contentWindow?.document.body.querySelector(
            //     '.r-1ny4l3l'
            //   );
            // if (subtweet) {
            //   (subtweet as HTMLElement).style.maxWidth = '520px';
            // }
            const articles = tweet.querySelectorAll('article');
            const firstTweet = articles[0];
            if (firstTweet) {
              firstTweet.style.maxWidth = '100%';
            }
            if (articles.length > 1) {
              const secondTweet = articles[1];
              if (secondTweet) {
                secondTweet.style.maxWidth = '520px';
                secondTweet.parentElement!.style.maxWidth = '520px';
              }
            }
          }
        });
      }
    });

    observer.observe(frame.current!.contentWindow!.document.body, {
      childList: true,
      subtree: true
    });
  };
}

function handleRedditResizeV2(ref: React.RefObject<HTMLIFrameElement>) {
  const frame = ref;
  if (frame.current === null) return;
  frame.current.onload = () => {
    frame.current!.contentDocument!.documentElement!.style.overflowY = 'hidden';
    const observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        if (mutation.target.nodeName === 'SHREDDIT-ASPECT-RATIO') {
          const height =
            frame.current!.contentWindow?.document.body.clientHeight;
          frame.current!.style.height = `${height}px`;
        }
      }
    });

    observer.observe(frame.current!.contentWindow!.document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style']
    });
  };
}
function handleRedditResize(ref: React.RefObject<HTMLIFrameElement>) {
  const frame = ref;
  if (frame.current === null) return;
  frame.current.onload = () => {
    const width = frame.current!.contentWindow?.document.body
      .scrollWidth as number;
    const height = frame.current!.contentWindow?.document.body
      .scrollHeight as number;

    const parent_width = frame.current!.parentElement!.clientWidth;

    const new_height = (height / width) * parent_width + 100;

    const body = frame.current!.contentWindow?.document.body;

    const images = frame.current!.querySelectorAll('img');
    frame.current!.style.height = `${new_height}px`;

    const observer = new MutationObserver((mutations) => {
      let faceplateFound = false;
      for (let mutation of mutations) {
        if (mutation.target.nodeName === 'BODY') {
          const width = frame.current!.contentWindow?.document.body
            .scrollWidth as number;
          const height = frame.current!.contentWindow?.document.body
            .scrollHeight as number;

          const aspectRatio = height / width;
          const parent_width = frame.current!.parentElement!.clientWidth;
          const new_height = aspectRatio * parent_width + 100;
          frame.current!.style.height = `${new_height}px`;
        }
        if (mutation.type === 'childList') {
          if (mutation.target.nodeName === 'FACEPLATE-TRACKER') {
            faceplateFound = true;
          }
          // const width = frame.current!.contentWindow?.document.body
          //   .scrollWidth as number;
          // const height = frame.current!.contentWindow?.document.body
          //   .scrollHeight as number;
          // const parent_width = frame.current!.parentElement!.clientWidth;
          // const new_height = (height / width) * parent_width + 100;
          // frame.current!.style.height = `${new_height}px`;
        }
      }

      if (faceplateFound) {
        const width = frame.current!.contentWindow?.document.body
          .scrollWidth as number;
        const height = frame.current!.contentWindow?.document.body
          .scrollHeight as number;
        const parent_width = frame.current!.parentElement!.clientWidth;

        const aspect_ratio = height / width;
        const new_height = (height / width) * parent_width + 100;
        console.log(new_height);
        frame.current!.style.height = `${new_height}px`;
      }
    });

    observer.observe(frame.current!.contentWindow!.document.body, {
      childList: true,
      subtree: true
    });
  };
}
const SocialFrame: React.FC<SocialFrameProps> = (props) => {
  const frame = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    if (props.socialPlatform === 'reddit') {
      handleRedditResizeV2(frame);
    }
    if (props.socialPlatform === 'twitter') {
      handleTwitterResizeV2(frame);
    }
  }, []);
  return (
    <>
      {props.socialPlatform === 'twitter' && (
        <iframe
          ref={frame}
          title="twitterembed"
          src={props.url}
          style={{ maxHeight: '540px', width: '100%' }}
        ></iframe>
      )}
      {props.socialPlatform === 'reddit' && (
        <iframe
          ref={frame}
          title="redditembed"
          src={props.url}
          style={{ maxHeight: '540px', width: '100%' }}
        ></iframe>
      )}
    </>
  );
};

export default SocialFrame;
