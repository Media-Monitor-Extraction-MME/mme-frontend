export async function GET(req: Request, res: Response) {
  const redditRes = await fetch(
    'https://embed.reddit.com/r/SNKRS/comments/1c6tjd4/loving_them_cant_wait_to_rock/',
    {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  );
  console.log('Reddit Embed Response');
  const data = redditRes.body;
  Response.json({});
}
