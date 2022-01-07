const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database : 'wptexam'
}

const record = {
    sender: "nayan1",
    reciever: 'nayan2',
    msg: "hiiiiiii"
};

const addrecord = async (record) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `insert into message (sender,reciever,msg) value (?,?,?)`;
    const list = await connection.queryAsync(sql, [record.sender,record.reciever,record.msg]);
    await connection.endAsync();
    console.log("added");
 };

const getrecord= async ()=> {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `select * from message`;
    const list = await connection.queryAsync(sql, []);
    console.log(list);
    console.log("get record");
    await connection.endAsync();
    return list;
}
addrecord(record);
getrecord();

module.export = { getrecord, addrecord };