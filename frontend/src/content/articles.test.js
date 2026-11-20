import { describe, expect, it } from 'vitest'
import { articles } from './articles'

describe('static article content', () => {
  it('has a unique slug and page body for every article', () => {
    expect(new Set(articles.map(article => article.slug)).size).toBe(articles.length)
    expect(articles.every(article => article.body.length > 0 && article.title)).toBe(true)
  })
})
