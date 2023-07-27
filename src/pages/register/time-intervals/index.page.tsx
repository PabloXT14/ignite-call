import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

import { Container, Header } from '../styles'
import {
  IntervalBox,
  IntervalContainer,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
} from './styles'

export default function TimeIntervals() {
  const weekDays = [
    {
      id: '2',
      name: 'Segunda-feira',
    },
    {
      id: '3',
      name: 'Terça-feira',
    },
    {
      id: '4',
      name: 'Quarta-feira',
    },
    {
      id: '5',
      name: 'Quinta-feira',
    },
    {
      id: '6',
      name: 'Sexta-feira',
    },
    {
      id: '7',
      name: 'Sábado',
    },
    {
      id: '1',
      name: 'Domingo',
    },
  ]

  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de horário que você está disponível em cada dia da
          semana
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form">
        <IntervalContainer>
          {weekDays.map((weekDay) => {
            return (
              <IntervalItem key={weekDay.id}>
                <IntervalDay>
                  <Checkbox />
                  <Text>{weekDay.name}</Text>
                </IntervalDay>
                <IntervalInputs>
                  <TextInput size="sm" type="time" step={60} />
                  <TextInput size="sm" type="time" step={60} />
                </IntervalInputs>
              </IntervalItem>
            )
          })}
        </IntervalContainer>

        <Button type="submit">
          Proximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}
