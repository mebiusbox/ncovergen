import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import Cover from '@/components/Cover'

export const config = {
  runtime: 'edge',
};

const font = fetch(
  new URL('../../../assets/Inconsolata-SemiCondensedMedium.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const fontData = await font;

  const { searchParams } = new URL(req.url);
  const text = searchParams.get('text') ?? 'title';
  const size = searchParams.get('size') ?? '200';
  const fg = searchParams.get('fg') ?? '404040';
  const bg = searchParams.get('bg') ?? 'ffefe3';
  const antialias = searchParams.has('antialias');

  let fontsize = Number(size);
  if (isNaN(fontsize)) {
    fontsize = 200;
  }
  
  return new ImageResponse(
    (
      <Cover text={text} size={fontsize} fg={'#'+fg} bg={'#'+bg} antialias={antialias} />
    ),
    {
      width: 2000,
      height: 800,
      fonts: [
        {
          name: 'Inconsolata-SemiCondensedMedium',
          data: fontData,
          style: 'normal'
        }
      ]
    },
  );
}
