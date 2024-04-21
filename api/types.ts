import { z } from 'zod'

export const URISchema = z
  .string()
  .min(1)
  .max(255)
  .url()
  .refine(
    (uri) => {
      try {
        const u = new URL(uri)
        return u.protocol === 'http:' || u.protocol === 'https:'
      } catch {
        return false
      }
    },
    { message: 'Invalid scheme' },
  )
  .refine(
    (uri) => {
      try {
        const u = new URL(uri)
        return u.hostname.split('.').every((p) => p !== '')
      } catch {
        return false
      }
    },
    { message: 'Invalid host' },
  )
  .brand('uri')

export type URI = z.infer<typeof URISchema>
