// Essa tipagem serve para o NextAuth saber como é a estrutura das nossas tabelas criadas no banco de dados (as quais realizamos alterações que diferem da estrutura padrão do NextAuth em relação a estrutura de autenticação).
import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    name: string
    email: string
    username: string
    avatar_url: string
  }

  interface Session {
    user: User
  }
}
