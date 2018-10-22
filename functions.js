const functions = {
    add: (n1, n2) => n1 + n2,
    isNull: (val) => val,
    createUser: () => {
        const user = {
            firstName: 'Oren',
            lastName: 'Nitzan'
        }

        return user;
    }
}

module.exports = functions;