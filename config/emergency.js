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
    },


    insertDataIntoemergency: function(
        name,
        time,
        location,
        callback
    ) {
        var query =
            "insert into Emergency (name,time,location) values (?,?,?)";
        dbcontroller.query(
            query,
            [
                name.toString(),
                time.toString(),
                location.toString()

            ],
            function(err, rows) {
                if (!err) {
                    //convert to JSON format
                    var r = JSON.stringify(rows);
                    var result = JSON.parse(r);
                    console.log(result);
                    callback(null, result);
                } else console.log("Error while performing Query.");
                console.log(err);
                // callback(err, 'Error while performing Query.');
            }
        );
    },



    deletebyId: function(id,callback) {
        var query = "delete from Emergency where idEmergency = ?";
        dbcontroller.query(query,[id], function(err, rows) {
            if (!err) {
                //convert to JSON format
                console.log(err);
                var r = JSON.stringify(rows);
                var result = JSON.parse(r);
                console.log(result);
                callback(null, result);
            } else console.log("Error while performing Query.");
        });
    },

};