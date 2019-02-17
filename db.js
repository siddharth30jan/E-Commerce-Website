const Sequelize= require('sequelize');

const db= new Sequelize('userdb','root','siddharth',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})

const Users= db.define('kuch',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
        },
    password: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    cartBox: Sequelize.STRING
    })


    const Products= db.define('Productsq',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
            },
        ProductName: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
            },
        ProductCost: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
        })    

db.sync()
.then(()=>console.log("Database has been synced"))
.catch((err)=>console.error("Error syncing database!"))

exports=module.exports={
   db, Users,Products
}