export default class commentService {
    url = 'https://jsonplaceholder.typicode.com/comments'

    comments() {
        return fetch(this.url).then(value => value.json())
    }

    comment(id) {
        return fetch(this.url + '/' + id).then(value => value.json())
    }
}
