const bcrypt = require("bcrypt");
const {
    register
} = require("./services");

module.exports = {
    registerUser: (req, res) => {
        const body = req.body;
        const salt = bcrypt.genSaltSync(10);
        body.password = bcrypt.hashSync(body.password, salt);
        register(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection errror"
            });
          }
          return res.status(200).json({
            success: 1,
            data: results
          });
        });
      },

}