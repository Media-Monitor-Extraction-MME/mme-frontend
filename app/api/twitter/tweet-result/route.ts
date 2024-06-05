import { NextResponse } from 'next/server';

export async function GET(req: Request, res: Response) {
  const url = new URL(req.url);
  const params = url.searchParams;
  // const params = new URLSearchParams({
  //   id: '1797174660771008611',
  //   lang: 'en',
  //   token: '4ctznymvoer',
  //   oug6c9: '16ii2yj87xub',
  //   ysyxwq: '46q9a80sxc89',
  //   '9rfaqj': '2p8e0mjvohno',
  //   j1nsg5: '1ry98hwm368n',
  //   '4l0yk9': 'jww86m0c79z',
  //   cp99eb: '14apb89853eyj',
  //   saa0c0: '1893dm8p3vnk',
  //   uzjevm: '5r8cf9owly4',
  //   aoam8y: 'c2c2kek8zzcp'
  // });

  const twitter_data = await fetch(
    `https://cdn.syndication.twimg.com/tweet-result?${params.toString()}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
  return NextResponse.json(twitter_data);
}
