// Tipagem personalizada para o NextAuth, especificando as propriedades esperadas para o objeto de usuário e sessão, pois foram feitas alterações na estrutura de autenticação em relação à configuração padrão.
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
