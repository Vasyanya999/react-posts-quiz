export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
    const result = await response.json()
    const header = response.headers.get('x-total-count')
    return [result, header]
  }
  static async getPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const result = await response.json()
    return result
  }
  static async getPostComments(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const result = await response.json()
    return result
  }
}