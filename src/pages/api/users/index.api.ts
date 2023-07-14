import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'cookies-next'

import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, username } = req.body

  const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (userExists) {
    return res.status(400).json({
      message: 'Username already taken.',
    })
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  setCookie('@ignite-call:userId', user.id, {
    req,
    res,
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
    httpOnly: true,
  })

  return res.status(201).json({ user })
}
