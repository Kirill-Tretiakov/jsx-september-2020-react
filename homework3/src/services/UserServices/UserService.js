export class UserService {

    url = 'https://jsonplaceholder.typicode.com/users';

    getAllUsers() {
        return (
            fetch(this.url)
                .then(value => value.json())
                .then(value => value)
        )
    }
}