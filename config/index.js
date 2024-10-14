import { createPool } from "mysql2";
import 'dotenv/config'
let connection = createPool({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    database: process.env.dbName,
    multipleStatements: true,
    connectionLimit: 30,
})
connection.on('connection', (pool) => {
    if (!pool) throw new Error('Couldn\'t connect to the database, please try again later')
})
export {
    connection
}