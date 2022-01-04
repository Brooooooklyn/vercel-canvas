// @ts-check

import { readFileSync } from 'fs'
import { join } from 'path'

import { Canvas, GlobalFonts, Path2D, Image } from '@napi-rs/canvas'

GlobalFonts.registerFromPath(join(__dirname, 'assets', 'Iosevka-Bold.ttf'))
GlobalFonts.registerFromPath(
  join(__dirname, 'assets', 'Iosevka-Extralight.ttf')
)
GlobalFonts.registerFromPath(join(__dirname, 'assets', 'Iosevka-Heavy.ttf'))
GlobalFonts.registerFromPath(join(__dirname, 'assets', 'Iosevka-Light.ttf'))
GlobalFonts.registerFromPath(join(__dirname, 'assets', 'Iosevka-Medium.ttf'))
GlobalFonts.registerFromPath(join(__dirname, 'assets', 'Iosevka.ttf'))
GlobalFonts.registerFromPath(join(__dirname, 'assets', 'Iosevka-Thin.ttf'))

const NAPI_RS = readFileSync(join(__dirname, 'assets', 'napi-rs.svg'))
const NAPI_RS_IMAGE = new Image()
NAPI_RS_IMAGE.src = NAPI_RS
NAPI_RS_IMAGE.width = 320
NAPI_RS_IMAGE.height = 320

const VERCEL_PATH = new Path2D(
  'M37 0l37 64H0L37 0zM159.6 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7h28.3c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM267.3 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7H267c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM219.3 28.3l6.8-3.9c-3.2-5-8.9-7.8-15.8-7.8-10.9 0-18.5 7.2-18.5 17.5s7.6 17.5 18.5 17.5c6.9 0 12.6-2.8 15.8-7.8l-6.8-3.9c-1.8 3-5 4.7-9 4.7-6.3 0-10.5-4.2-10.5-10.5s4.2-10.5 10.5-10.5c3.9 0 7.2 1.7 9 4.7zM282.3 5.6h-8v45h8v-45zM128.5 5.6h-9.2L101.7 36 84.1 5.6h-9.3L101.7 52l26.8-46.4zM185.1 25.8c.9 0 1.8.1 2.7.3v-8.5c-6.8.2-13.2 4-13.2 8.7v-8.7h-8v33h8V36.3c0-6.2 4.3-10.5 10.5-10.5z'
)

const SUPPORTED_ENCODING = new Set(['png', 'avif', 'webp'])
const MIME_MAP = {
  png: 'image/png',
  avif: 'image/avif',
  webp: 'image/webp',
}

/**
 * @param {import('@vercel/node').VercelRequest} req
 * @param {import('@vercel/node').VercelResponse} res
 */
export default async function generateImage(req, res) {
  const WIDTH = 2880
  const HEIGHT = 1564
  const canvas = new Canvas(WIDTH, HEIGHT)
  const ctx = canvas.getContext('2d')
  ctx.scale(1.4, 1.4)
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'
  ctx.fillStyle = '#673ab7'
  ctx.fillRect(0, 0, 600, HEIGHT)
  ctx.fillStyle = 'black'
  ctx.fillRect(600, 0, WIDTH - 600, HEIGHT)
  ctx.font = '300 48px Iosevka'
  ctx.fillStyle = 'white'
  ctx.fillText('Sorry, no one', 40, 550)
  ctx.fillText('answered', 40, 625)
  ctx.font = '60px Iosevka'
  ctx.fillStyle = '#ffca28'
  ctx.fillText('', 74, 980)
  ctx.font = '200 140px Iosevka'
  ctx.fillText('', 36, 1008)
  ctx.fillStyle = 'white'
  ctx.font = '300 36px Iosevka'
  ctx.fillText('press to ring', 190, 970)
  ctx.font = '700 240px Iosevka'
  ctx.fillText('19', 900, 650)
  ctx.font = '200 240px Iosevka'
  ctx.fillText(':56', 1140, 650)
  ctx.font = '300 32px Iosevka'
  ctx.fillStyle = 'white'
  ctx.fillText('quite mode', 1100, 750)
  ctx.fillStyle = '#43a047'
  ctx.font = '700 34px Iosevka'
  ctx.fillText('ON', 1276, 750)
  ctx.fillStyle = 'white'
  ctx.font = '400 28px Iosevka'
  ctx.fillText('Powered by', 740, 966)
  ctx.font = '300 140px Iosevka'
  ctx.fillStyle = '#dea584'
  ctx.fillText('', 910, 1000)
  ctx.drawImage(NAPI_RS_IMAGE, 1020, 898, 105, 105)
  ctx.fillStyle = 'white'
  ctx.save()
  ctx.translate(1160, 920)
  ctx.scale(0.85, 0.85)
  ctx.fill(VERCEL_PATH)
  ctx.restore()
  const gradient = ctx.createLinearGradient(
    1455,
    970 + 22,
    1455 + 120,
    970 + 22
  )
  ctx.font = '700 54px Iosevka'
  gradient.addColorStop(0, '#f7ff00')
  gradient.addColorStop(1, '#db36a4')
  ctx.fillStyle = gradient
  ctx.fillText('SKIA', 1455, 970)
  ctx.font = '220px Iosevka'
  ctx.fillStyle = '#3C873A'
  ctx.fillText('', 1620, 1018)
  const { type = 'png' } = req.query
  /** @type {'png' | 'webp' | 'avif'} */
  let encodeType
  if (typeof type === 'string' && SUPPORTED_ENCODING.has(type)) {
    // @ts-expect-error
    encodeType = type
  } else {
    encodeType = 'png'
  }
  // @ts-expect-error
  const buffer = await canvas.encode(encodeType)
  res.setHeader('Content-Type', MIME_MAP[encodeType])
  res.setHeader('Content-Disposition', 'inline')
  res.send(buffer)
}
