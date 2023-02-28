import { init } from 'i18next'
import { z } from 'zod'
import { zodI18nMap } from 'zod-i18n-map'
import translation from '@/locales/ja/zod.json'

// TODO: wrap
init({
  lng: 'ja',
  resources: {
    ja: { zod: translation },
  },
})
z.setErrorMap(zodI18nMap)

export const userAuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})
