import {pool} from '../config/mysql.js';
import UserDao from './UserDao.js';

class Usercheck{
    async IDcheck(ID){
        const connection= await pool.getConnection(async(conn)=>conn);
        const result= await UserDao.selectUserID(connection,ID);
        connection.release();
        return result[0];
    };
    async PWcheck(ID,hashedPW) {
        const connection = await pool.getConnection(async (conn) => conn);
        const passwordCheckResult = await UserDao.selectUserPassword(connection,ID,hashedPW);
        connection.release();
        return passwordCheckResult[0];
    };
    
    async nicknamecheck(ID){
        const connection=await pool.getConnection(async(conn)=>conn);
        const usernickname=await UserDao.getnickname(connection,ID);
        return usernickname[0];
    }
}

export default new Usercheck;