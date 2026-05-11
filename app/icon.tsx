import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  const fontData = readFileSync(
    join(process.cwd(), 'public', 'fonts', 'playfair-display-regular.ttf')
  )

  return new ImageResponse(
    (
      <div
        style={{
          background: '#232520',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'Playfair Display',
            fontSize: 28,
            color: '#F4F3EF',
            fontWeight: 400,
            lineHeight: 1,
            paddingTop: 3,
          }}
        >
          n
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Playfair Display',
          data: fontData,
          weight: 400,
          style: 'normal',
        },
      ],
    }
  )
}
