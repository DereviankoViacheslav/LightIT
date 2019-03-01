
export default () => {

    return fetch("https://randomuser.me/api/?results=100")
        .then((res) => {
            return res.json();
        });
}