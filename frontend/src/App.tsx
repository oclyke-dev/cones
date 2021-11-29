import React from 'react';

import * as munsell from 'munsell'

type Munsell = {
  hue: {
    section: 'R'| 'YR' | 'Y' | 'GY' | 'G' | 'BG' | 'B' | 'PB' | 'P' | 'RP'
    div: number,
  },
  chroma: number,
  value: number,
}

const munsellLinspace = (c1: Munsell, c2: Munsell, n: number) => {
  const munsellToStr = (c: Munsell) => {
    return `${c.hue.div}${c.hue.section} ${c.value}/${c.chroma}`
  }
  return [...Array(n)].map((e) => munsell.munsellToHex(munsellToStr({hue: {}, })))
}

const Component = () => {

  const color = munsell.munsellToHex('5R 6.7/4.22');

  return <>
    <div style={{backgroundColor: color}}>
      Hello World
    </div>
  </>
}

export default Component;
