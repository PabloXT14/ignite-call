import { google } from 'googleapis'
import { prisma } from './prisma'
import dayjs from 'dayjs'

export async function getGoogleOAuthToken(userId: string) {
  const account = await prisma.account.findFirstOrThrow({
    where: {
      provider: 'google',
      user_id: userId,
    },
  })

  const auth = new google.auth.OAuth2({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  })

  const expires_at_in_milliseconds = account.expires_at
    ? account.expires_at * 1000
    : null

  auth.setCredentials({
    refresh_token: account.refresh_token,
    access_token: account.access_token,
    expiry_date: expires_at_in_milliseconds,
  })

  /* REVALIDANDO TOKEN CASO ELE ESTEJA EXPIRADO */
  const isTokenExpired = dayjs(expires_at_in_milliseconds).isBefore(new Date())

  if (isTokenExpired) {
    const { credentials } = await auth.refreshAccessToken()
    const {
      access_token,
      refresh_token,
      expiry_date,
      id_token,
      scope,
      token_type,
    } = credentials

    const expiry_date_in_seconds = expiry_date
      ? Math.floor(expiry_date / 1000)
      : null

    await prisma.account.update({
      where: {
        id: account.id,
      },
      data: {
        access_token,
        refresh_token,
        expires_at: expiry_date_in_seconds,
        id_token,
        scope,
        token_type,
      },
    })

    auth.setCredentials({
      access_token,
      refresh_token,
      expiry_date,
    })
  }

  return auth
}
