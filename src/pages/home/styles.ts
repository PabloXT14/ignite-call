import { Heading, Text, styled } from '@ignite-ui/react'
import gridImage from '../../assets/grid-effect.png'

export const Container = styled('div', {
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  marginLeft: 'auto',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  gap: '$20',

  '@media(max-width: 768px)': {
    justifyContent: 'center',
  },
})

export const Hero = styled('div', {
  maxWidth: 480,
  padding: '0 $10',

  [`> ${Heading}`]: {
    '@media(max-width: 768px)': {
      fontSize: '$6xl',
    },
  },

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },
})

export const Preview = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  '@media(max-width: 768px)': {
    display: 'none',
  },
})

export const GridImage = styled('div', {
  position: 'absolute',
  inset: 0,
  zIndex: -1,
  backgroundImage: `url(${gridImage.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center left',
  // backgroundSize: 'cover',
})
