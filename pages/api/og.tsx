import { ImageResponse, NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

const inter = fetch(new URL('../../public/fonts/Inter/Inter-Regular.ttf', import.meta.url)).then(
  res => res.arrayBuffer(),
);
const interSemiBold = fetch(
  new URL('../../public/fonts/Inter/Inter-SemiBold.ttf', import.meta.url),
).then(res => res.arrayBuffer());

const gradient = fetch(new URL('../../public/images/og-bg.jpeg', import.meta.url)).then(res =>
  res.arrayBuffer(),
);

const OpenGraph = async (request: NextRequest) => {
  try {
    const gradientData = await gradient;
    const interData = await inter;
    const interSemiBoldData = await interSemiBold;

    const { searchParams } = new URL(request.url);

    const title = searchParams.get('title') || 'Simon Bellucci - Front-End Developer';
    const description =
      searchParams.get('description') ||
      "Hi there! I'm Simon Bellucci, a Front-End Developer based in Strasbourg 🥨. On my blog, you'll find my thoughts and insights on front-end development, as well as updates on the latest industry trends and personal projects.";

    return new ImageResponse(
      (
        <div
          tw="h-full w-full bg-white flex flex-col justify-center"
          style={{ fontFamily: '"Inter"' }}
        >
          <img
            width="1200"
            height="630"
            tw="absolute top-0 left-0 w-full h-full object-cover"
            src={gradientData as any}
          />
          <div tw="flex flex-col p-16">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 42 42"
              //@ts-ignore
              tw="h-20 w-20 text-black"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.05 5.972C8.444 7.5 7.2 19.194 15.288 22.515c.978.402.993.294-.2 1.438A4052.494 4052.494 0 0 0 4.268 34.445a394.422 394.422 0 0 1-3.05 2.944c-.448.422-.814.813-.814.869 0 .201 32.61.122 33.87-.082 7.481-1.213 9.968-10.862 4.006-15.546-.874-.687-.872-.627-.054-1.195 5.787-4.019 3.72-13.677-3.287-15.368-1.127-.272-16.437-.354-17.89-.095Zm13.942 2.372c.052.083-.154.363-.505.69-.778.722-7.414 7.15-9.916 9.603-2.342 2.297-2.11 2.15-3.124 1.988-6.798-1.082-6.874-10.936-.096-12.297.81-.162 13.54-.147 13.641.016Zm4.923.625c4.83 2.547 4.177 9.788-1.04 11.547-.732.247-12.88.374-12.88.135 0-.053.61-.691 1.358-1.417 2.07-2.01 8.56-8.303 9.92-9.618 1.375-1.33 1.357-1.325 2.642-.647ZM21.008 23.386c6.218 1.927 5.971 10.517-.351 12.205-.76.203-1.378.221-7.379.221H6.265s2.817-2.648 5.054-4.821c2.236-2.173 4.868-4.73 5.849-5.681a121.2 121.2 0 0 0 1.97-1.94c.248-.275.95-.269 1.87.016Zm13.66.073c6.194 1.79 5.919 10.727-.378 12.291-.948.236-8.734.214-9.358.214-.069 0 .84-.631 1.184-1.077 2.534-3.294 2.43-8.077-.24-11.025-.186-.205-.265-.4-.216-.529.101-.262 8.049-.151 9.009.126Z"
                fill="currentColor"
              />
            </svg>
            <div tw="max-w-3/4 mt-8 flex flex-col">
              <div tw="text-5xl font-semibold">{title}</div>
              <div tw="text-xl mt-5 font-normal text-gray-800">{description}</div>
            </div>
            <div tw="text-base mt-8 text-gray-800">simonbellucci.dev</div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: interData,
            weight: 400,
            style: 'normal',
          },
          {
            name: 'Inter',
            data: interSemiBoldData,
            weight: 600,
            style: 'normal',
          },
        ],
      } as any,
    );
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
};

export default OpenGraph;
