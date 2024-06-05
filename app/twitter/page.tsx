import React from 'react';
import { JSDOM } from 'jsdom';
import Script from 'next/script';
// import styled, { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle<{ styles: string[] }>`
// /* Extracted style from the HTML */
// ${(props) => props.styles}
// `;

// const Container = styled.div``;

async function fetchX() {
  const dnt = true;
  const embedId = 'twitter-widget-0';
  const features = {
    tfw_timeline_list: {
      bucket: [],
      version: null
    },
    tfw_follower_count_sunset: {
      bucket: true,
      version: null
    },
    tfw_tweet_edit_backend: {
      bucket: 'on',
      version: null
    },
    tfw_refsrc_session: {
      bucket: 'on',
      version: null
    },
    tfw_fosnr_soft_interventions_enabled: {
      bucket: 'on',
      version: null
    },
    tfw_mixed_media_15897: {
      bucket: 'treatment',
      version: null
    },
    tfw_experiments_cookie_expiration: {
      bucket: 1209600,
      version: null
    },
    tfw_show_birdwatch_pivots_enabled: {
      bucket: 'on',
      version: null
    },
    tfw_duplicate_scribes_to_settings: {
      bucket: 'on',
      version: null
    },
    tfw_use_profile_image_shape_enabled: {
      bucket: 'on',
      version: null
    },
    tfw_video_hls_dynamic_manifests_15082: {
      bucket: 'true_bitrate',
      version: null
    },
    tfw_legacy_timeline_sunset: {
      bucket: true,
      version: null
    },
    tfw_tweet_edit_frontend: {
      bucket: 'on',
      version: null
    }
  };
  const frame = false;
  const hideCard = false;
  const hideThread = false;
  const id = '1797174660771008611';
  const lang = 'en';
  const origin = 'http://localhost:3000/twitter';
  const sessionId = '8f4c08f2f764b0c1c1ae8250dbf2dd060f64c63c';
  const theme = 'light';
  const widgetsVersion = '2615f7e52b7e0:1702314776716';
  const width = '550px';

  const url = `https://platform.twitter.com/embed/Tweet.html?dnt=${dnt}&embedId=${embedId}&features=${encodeURIComponent(JSON.stringify(features))}&frame=${frame}&hideCard=${hideCard}&hideThread=${hideThread}&id=${id}&lang=${lang}&origin=${origin}&sessionId=${sessionId}&theme=${theme}&widgetsVersion=${widgetsVersion}&width=${width}`;
  const res = await fetch(url);
  const data = await res.text();

  const dom = new JSDOM(data);
  const document = dom.window.document;
  document.querySelectorAll('script').forEach((script) => script.remove());

  return document.documentElement.outerHTML;
}
// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:3000/api/reddit');
//   const data = await res.json();
//   return { props: { body: data.body } };
// }inks: string[];

const Page = async () => {
  const post = await fetchX();
  if (!post) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Script
        src={'http://localhost:3000/twitter/embed.9449.78398904051446294e3d.js'}
        type="module"
        strategy="lazyOnload"
      />
      <Script
        src={
          'http://localhost:3000/twitter/embed.runtime.d4fdbaa43d8afce29068.js'
        }
        type="module"
        strategy="lazyOnload"
      />
      <Script
        src={
          'http://localhost:3000/twitter/embed.Tweet.02ab0848482b3e69ec95.js'
        }
        type="module"
        strategy="lazyOnload"
      />

      {post && <div dangerouslySetInnerHTML={{ __html: post }} />}
    </>
  );
};

export default Page;
