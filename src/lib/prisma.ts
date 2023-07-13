import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: ['query'], // para mostrar os logs de todas as queries feitas para o db
})
