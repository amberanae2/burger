var connection = require("../config/connection.js");

  var orm = {
    Select: function(tableInput, colToSearch, valOfCol) {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        console.log(PartyName);
      });
    },
    Select: function(whatToSelect, table, orderCol) {
        var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(clientName);
        connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      },
      selectWhere: function(whatToSelect, table, orderCol) {
        var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(grownup);
        connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      },
      findClientID: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        var queryString =
          "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
    
        connection.query(
          queryString,
          [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
          function(err, result) {
            if (err) throw err;
            console.log(result);
          }
        );
      }
    };
    
    module.exports = orm;
    