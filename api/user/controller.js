const bcrypt = require("bcrypt");
const { create } = require("domain");


module.exports = {
    registerUser: async (req, res) => {
        try {
            const body = req.body;
            const salt = bcrypt.genSaltSync(10);
            body.password = bcrypt.hashSync(body.password, salt);

            let doc = await create(body)

            return res.status(200).json({
                success: true,
                data: doc
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "server error"
            });
        }
    },

}