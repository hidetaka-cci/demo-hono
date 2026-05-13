import { describe, expect, it } from 'vitest'
import app from '../src/index'

describe('GET /', () => {
  it('200 と本文 Hello Hono! を返す', async () => {
    const res = await app.request('http://example.test/')

    expect(res.status).toBe(200)
    expect(await res.text()).toBe('Hello Hono!')
  })
})
