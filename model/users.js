const { app } = require('../common/common');
const { conn } = require('../util/service')
// exports.insertData = async (data) => {
//    console.log('data>>>>', data);
//    const query = conn.query('INSERT iNTO customerlis SET ? ', data,)
//    // console.log('query>>>>>>>>', query)
//    return query

// }

exports.insertData = async (data) => {
   try {
      // console.log('data>>>>', data);
      const query = conn.query('INSERT INTO customerlis SET ?', data);
      return query;
   } catch (error) {
      console.error('Error executing SQL query:>>>>>>>>>>>>>>>>>>>', error);
      throw error.sqlMessage;
   }
};