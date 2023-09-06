import { GetStaticPaths, GetStaticProps } from 'next'
import { Avatar, Heading, Text } from '@ignite-ui/react'
import { NextSeo } from 'next-seo'

import { Container, UserHeader } from './styles'
import { prisma } from '@/lib/prisma'
import { ScheduleForm } from './ScheduleForm'

interface ScheduleProps {
  user: {
    name: string
    bio: string
    avatarUrl: string
  }
}

export default function Schedule({ user }: ScheduleProps) {
  return (
    <>
      <NextSeo title={`Agendar com ${user.name} | Ignite Call`} />

      <Container>
        <UserHeader>
          <Avatar src={user.avatarUrl} />
          <Heading>{user.name}</Heading>
          <Text>{user.bio}</Text>
        </UserHeader>

        <ScheduleForm />
      </Container>
    </>
  )
}

// Utilizado para gerar páginas estáticas dinamicamente (que possuem parâmetros), permitindo a pré-renderização de rotas com parâmetros específicos durante a construção do site.
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

// Usado para buscar dados durante a construção da página estática, permitindo a pré-renderização com informações atualizadas.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username)

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      user: {
        name: user.name,
        bio: user.bio,
        avatarUrl: user.avatar_url,
      },
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
