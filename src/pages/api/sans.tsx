import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import Cover from '@/components/Cover'

export const config = {
  runtime: 'edge',
};

const font = fetch(
  new URL('../../../assets/NotoSansJP-Bold.otf', import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const fontData = await font;

  const { searchParams } = new URL(req.url);
  const text = searchParams.get('text') ?? 'title';
  const size = searchParams.get('size') ?? '100';
  const fg = searchParams.get('fg') ?? '404040';
  const bg = searchParams.get('bg') ?? 'ffefe3';

  let fontsize = Number(size);
  if (isNaN(fontsize)) {
    fontsize = 100;
  }
  
  return new ImageResponse(
    (
      <Cover text={text} size={fontsize} fg={'#'+fg} bg={'#'+bg} />
    ),
    {
      width: 1000,
      height: 400,
      fonts: [
        {
          name: 'NotoSansJP',
          data: fontData,
          style: 'normal'
        }
      ]
    },
  );
}
