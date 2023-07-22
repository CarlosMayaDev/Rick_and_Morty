const users = require("../utils/users")

const login = (req,res) => {
    const email = req.query.email;
    const password = req.query.password;

    const matchingUser = users.find((user) => {
        return user.email === email && user.password === password;
    });

    if (matchingUser) {
        res.status(200).json({ access: true })
    } else {
        res.status(200).json({ access: false })
    }

}

module.exports = login;