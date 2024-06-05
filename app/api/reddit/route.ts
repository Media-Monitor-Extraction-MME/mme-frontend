import { cleanReddit } from '@/utils/cleanReddit';
import { NextResponse } from 'next/server';

export async function GET(req: Request, res: Response) {
  // return NextResponse.json({ message: "Hello World" });
  const reddit_embed_html = await fetch(
    'https://embed.reddit.com/r/SNKRS/comments/1c6tjd4/loving_them_cant_wait_to_rock/',
    {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  ).then((res) => res.text());

  return NextResponse.json({
    postId: '1c6tjd4',
    subreddit: 'SNKRS',
    title: 'loving_them_cant_wait_to_rock',
    ...cleanReddit(reddit_embed_html)
  });
}
