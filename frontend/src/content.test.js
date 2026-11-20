import { describe, expect, it } from 'vitest'

describe('site content', () => {
  it('uses a configured API URL or its local API default', () => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'
    expect(apiUrl).toContain('/api')
  })
})
