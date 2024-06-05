import React from 'react';
import { JSDOM } from 'jsdom';
import Script from 'next/script';
// import styled, { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle<{ styles: string[] }>`
// /* Extracted style from the HTML */
// ${(props) => props.styles}
// `;

// const Container = styled.div``;

async function fetchReddit() {
  const res = await fetch(
    'https://embed.reddit.com/r/Superstonk/comments/1d6r5vp/gme_yolo_update_june_2_2024/'
  );
  const data = await res.text();

  const dom = new JSDOM(data);
  const document = dom.window.document;
  const body = document.body.innerHTML;

  const scriptTags = document.querySelectorAll('script');

  const scripts: string[] = [];
  // 8 and 9 are the scripts that should not be included as they interfere with the page
  const includeScripts: number[] = [8, 9];
  scriptTags.forEach((script, index) => {
    scripts.push(script.innerHTML);

    if (index === 4) {
      script.innerHTML = `window.litNonce = 'Z7Qe/C87M2E/jaf1N2itVg=='; var CLIENT_CONFIG = {};`;
    }

    if (includeScripts.includes(index)) {
      script.remove();
    }
  });

  return document.documentElement.outerHTML;
}
// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:3000/api/reddit');
//   const data = await res.json();
//   return { props: { body: data.body } };
// }

interface RedditProps {
  postId: string;
  subReddit: string;
  title: string;
  body: string;
  styles: string[];
  scripts: string[];
  links: string[];
}
const Page = async () => {
  const post = await fetchReddit();
  if (!post) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Script
        src={'http://localhost:3000/reddit/embed-client.js'}
        type="module"
        strategy="lazyOnload"
      />
      <Script
        src={'http://localhost:3000/reddit/subScripts/shell-c7aa92cc.js'}
        type="module"
        strategy="lazyOnload"
      />

      {post && <div dangerouslySetInnerHTML={{ __html: post }} />}
    </>
  );
};

export default Page;
