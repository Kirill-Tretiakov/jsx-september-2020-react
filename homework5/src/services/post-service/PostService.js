export default class postsService {
    url = 'https://jsonplaceholder.typicode.com/posts'

    posts() {
        return fetch(this.url).then(value => value.json())
    }

    post(id) {
        return fetch(this.url + '/' + id).then(value => value.json())
    }
}
