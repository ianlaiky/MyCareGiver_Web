var dbcontroller = require("./database");

module.exports = {
    //function name:function(){...}
    getAllData: function(callback) {
        dbcontroller.query("SELECT * from Emergency", function(err, rows) {
            if (!err) {
                //convert to JSON format
                var r = JSON.stringify(rows);
                var result = JSON.parse(r);
                console.log(result);
                callback(null, result);
            } else console.log("Error while performing Query.");
        });
    },

    getAllUserById: function(userIds, callback) {
        var query = "SELECT * from Emergency where idEmergency = ?";
        dbcontroller.query(query, [userIds], function(err, rows) {
            if (!err) {
                //convert to JSON format
                var r = JSON.stringify(rows);
                var result = JSON.parse(r);
                console.log(result);
                callback(null, result);
            } else console.log("Error while performing Query.");
        });
    }
};