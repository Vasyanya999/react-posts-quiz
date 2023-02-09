
export default class TestsService {
  static async getTest(test) {
    const response = await fetch(`https://servertest-9n72.onrender.com/${test}`)
    const result = await response.json()
    return result
  }

}