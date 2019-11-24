import React from 'react';
import Sky from 'react-sky';
import kitune from './../../static/images/animals/kitune.png'
import sai from './../../static/images/animals/sai.png'
import shirokuma from './../../static/images/animals/shirokuma.png'
import panda from './../../static/images/animals/panda.png'
import harinezumi from './../../static/images/animals/harinezumi.png'
import risu from './../../static/images/animals/risu.png'
import dolphin from './../../static/images/animals/dolphin.png'
import rabbit from './../../static/images/animals/rabbit.png'
import koala from './../../static/images/animals/koala.png'
import mow from './../../static/images/animals/mow.png'
import gold from './../../static/images/animals/gold.png'
import kaba from './../../static/images/animals/kaba.png'
import hen from './../../static/images/animals/hen.png'
import tonakai from './../../static/images/animals/tonakai.png'
import zou from './../../static/images/animals/zou.png'
import monkey from './../../static/images/animals/monkey.png'
import tubame from './../../static/images/animals/tubame.png'
import wolf from './../../static/images/animals/wolf.png'
import cat2 from './../../static/images/animals/cat2.png'
import lion from './../../static/images/animals/lion.png'
import ping from './../../static/images/animals/ping.png'

const images = {
  /* FORMAT AS FOLLOWS */
  0: kitune,  /* You can pass as many images as you want */
  1: sai,
  2: shirokuma,
  3: panda,
  4: harinezumi,
  5: risu,
  6: dolphin,
  7: rabbit,
  8: koala,
  9: gold,
  10: mow,
  11: kaba,
  12: hen,
  13: tonakai,
  14: zou,
  15: monkey,
  16: tubame,
  17: wolf,
  18: ping,
  19: cat2,
  20: lion,
  /* ... */
}

export default function HrkSngSky() {
  return (
    <Sky
      images={images}
      how={100} /* Pass the number of images Sky will render chosing randomly */
      time={20} /* time of animation */
      size={'100px'} /* size of the rendered images */
      background={'#3f4d71'} /* color of background */
    >
    </Sky>
  )
}