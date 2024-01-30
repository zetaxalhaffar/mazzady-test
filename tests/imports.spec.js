import { describe, expect, test } from "vitest";

describe('import vue component', () => {
  test('compont import and render correctly', async () => {
    const cmp = await import("@/assets/icons/download.vue")
    expect(cmp).toBeDefined()
  })
})