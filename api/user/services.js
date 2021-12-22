const db = require("../../database/db");

module.exports = {
    register: (data, callBack) => {
        db.query(
          `insert into user(firstname, lastname, email, password, mobile) 
                    values(?,?,?,?,?)`,
          [
            data.firstname,
            data.lastname,
            data.email,
            data.password,
            data.mobile
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
}  