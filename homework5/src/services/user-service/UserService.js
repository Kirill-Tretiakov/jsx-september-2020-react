export default class userService {
    url = 'https://jsonplaceholder.typicode.com/users'

    users() {
        return fetch(this.url)
            .then(value => value.json());
    }

    user(id) {
        return fetch(this.url + '/' + id).then(value => value.json());

    }
}
