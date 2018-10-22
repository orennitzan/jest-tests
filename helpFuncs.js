const axios = require('axios');

const helpFuncs = {
    dayInWeek: () => {
        return (new Date()).getDay() + 1;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => err.data),
};

module.exports = helpFuncs;