const sequelize = require("../config/connection");
// Require the connection to the database (connection.js)
const Sequelize = require("sequelize");
// Require the sequelize library

// Create a "Book" model with the following configuration 2nd way (The way that sequelize 'is going' according to Brian)
const Model = Sequelize.Model;
class Employees extends Model { }
Employees.init({
    // attributes
    // 1. A title property of type STRING
    titile: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 2. An author property of type STRING
    author: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    // 3. A genre property of type STRING
    genre: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    // 4. A pages property of type INTEGER
    pages: {
        type: Sequelize.INTEGER
        // allowNull defaults to true
    }
}, {
    sequelize,
    modelName: 'book'
    // options
});


// Sync model with DB
// FOR MORE INFO: https://sequelize.org/v5/manual/getting-started.html. FIND: Synchronizing the model with the database
Book.sync();


// Export the book model for other files to use
module.exports = Employees;