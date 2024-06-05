import { JSDOM } from 'jsdom';

export const cleanReddit = (
  htmlstring: string
): {
  body: string;
  styles: string[];
  scripts: string[];
  links: string[];
} => {
  const { window } = new JSDOM(htmlstring);
  const { document } = window;

  const linkTags = document.querySelectorAll('link');
  const scriptTags = document.querySelectorAll('script');

  const linkContents: string[] = [];
  linkTags.forEach((link) => {
    linkContents.push(link.outerHTML);
    link.remove();
  });

  const scriptContent: string[] = [];
  scriptTags.forEach((script) => {
    scriptContent.push(script.innerHTML);
    script.remove();
  });

  const styleContents: string[] = [];

  const styleTags = document.querySelectorAll('style');
  styleTags.forEach((style) => {
    styleContents.push(
      style.innerHTML.replaceAll('\n', '').replaceAll('  ', '')
    );
    style.remove();
  });

  return {
    body:
      document.body.innerHTML.replaceAll('\n', '').replaceAll('  ', '') || '',
    styles: styleContents,
    scripts: scriptContent,
    links: linkContents
  };
};
