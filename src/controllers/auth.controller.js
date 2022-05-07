const User = require("../models/user.model");

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user)
            return res
                .status(400)
                .send({ message: "email already exists try another email" });

        return res.status(200).json({ user });
    } catch (err) {
        return res.status(500).send(err.message);

    }
};


module.exports = {login}