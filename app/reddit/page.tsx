import React from 'react';
import { JSDOM } from 'jsdom';

const Page: React.FC = async () => {
  const redditData = fetch(
    'https://embed.reddit.com/r/SNKRS/comments/1c6tjd4/loving_them_cant_wait_to_rock/'
  )
    .then((res) => res.text())
    .then((data) => {
      const { window } = new JSDOM(data);
      const doc = window.document;
      const links: HTMLCollectionOf<HTMLLinkElement> =
        doc.getElementsByTagName('link');
      const scripts: HTMLCollectionOf<HTMLScriptElement> =
        doc.getElementsByTagName('script');
      const titles: HTMLCollectionOf<HTMLTitleElement> =
        doc.getElementsByTagName('title');
      const metas: HTMLCollectionOf<HTMLMetaElement> =
        doc.getElementsByTagName('meta');
      Array.from(links).forEach((link: HTMLLinkElement) => link.remove());
      Array.from(scripts).forEach((script: HTMLScriptElement) =>
        script.remove()
      );
      // Array.from(links).forEach((link: HTMLLinkElement) => link.remove());
      Array.from(scripts).forEach((script: HTMLScriptElement) =>
        script.remove()
      );
      Array.from(titles).forEach((title: HTMLTitleElement) => title.remove());
      Array.from(metas).forEach((meta: HTMLMetaElement) => meta.remove());
      return doc.documentElement.innerHTML;
    });
  console.log('Reddit Embed Response');
  return (
    <div>
      <h1>Welcome to My Page</h1>
      <p>This is a default page.</p>
      <div
        dangerouslySetInnerHTML={{
          __html: redditData ? await redditData : '<div>Loading...</div>'
        }}
      ></div>
    </div>
  );
};

export default Page;
