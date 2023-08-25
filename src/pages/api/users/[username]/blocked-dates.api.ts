import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const username = String(req.query.username)
  const { year, month } = req.query

  if (!year || !month) {
    return res.status(400).json({ message: 'Year or month not specified.' })
  }

  const user = await prisma.user.findUnique({
    where: {
      username,
    }
  })

  if (!user) {
    return res.status(400).json({ message: 'User does not exist.'})
  }

  const availableWeekDays = await prisma.userTimeInterval.findMany({
    select: {
      week_day: true,
    },
    where: {
      user_id: user.id,
    },
  })

  // 0 = Sunday ... 6 = Saturday
  const blockedWeekDays = [0, 1, 2, 3, 4, 5, 6].filter((availableWeekDay) => {
    return !availableWeekDays.some(({ week_day }) => week_day === availableWeekDay)
  })

  return res.status(200).json({ blockedWeekDays })
}