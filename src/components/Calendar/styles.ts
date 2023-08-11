import { styled, Text } from '@ignite-ui/react'

export const CalendarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  padding: '$6',
})

export const CalendarHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const CalendarTitle = styled(Text, {
  fontWeight: '$medium',
  span: {
    color: '$gray200',
  },
})

export const CalendarActions = styled('div', {
  display: 'flex',
  gap: '$2',
  color: '$gray200',

  button: {
    all: 'unset',
    cursor: 'pointer',
    lineHeight: 0,
    borderRadius: '$sm',

    svg: {
      with: '$5',
      height: '$5',
    },

    '&:hover': {
      color: '$gray100',
    },

    '&:focus': {
      boxShadow: '0 0 0 2px $colors$gray100',
    },
  },
})

export const CalendarBody = styled('table', {
  width: '100%',
  fontFamily: '$default',
  borderSpacing: '0.25rem',
  tableLayout: 'fixed', // para que todas as células da tabela tenham o mesmo tamanho

  'thead th': {
    color: '$gray200',
    fontWeight: '$medium',
    fontSize: '$sm',
  },

  'tbody:before': {
    lineHeight: '0.75rem',
    content: '.',
    display: 'block',
    color: '$gray800',
  },

  'tbody td': {
    boxSizing: 'border-box',
  },
})

export const CalendarDay = styled('button', {
  position: 'static',
  all: 'unset',
  width: '100%',
  aspectRatio: '1 / 1',
  background: '$gray600',
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: '$sm',

  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  variants: {
    isToday: {
      true: {
        position: 'relative',

        '&:before': {
          position: 'absolute',
          content: '',
          width: '$2',
          height: '$2',
          top: '20%',
          right: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '$full',
          backgroundColor: '$ignite500',

          '@media(max-width: 425px)': {
            width: '$1',
            height: '$1',
          },
        },
      },
      false: {},
    },
  },

  defaultVariants: {
    isToday: false,
  },
})
