/**
 * Step assertions documentation
 * https://qa.bixbydevelopers.com/dev/docs/reference/assertions_api/step
 */

describe('simple', () => {
  it('withRefueling', () => {
    const { results } = step.currentNode
    expect(results).toBeTruthy()
    expect(results.length).toBe(6)
    expect(results[0].name).toEqual("The Icarus")
  })
})