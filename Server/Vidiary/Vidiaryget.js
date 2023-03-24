import {pool} from '../config/mysql.js';
import VidiaryDao from './VidiaryDao.js';

class Vidiaryget{
    async getvideolist(userid){
        const connection=await pool.getConnection(async(conn)=>conn);
        const videorow=await VidiaryDao.getlist(connection,userid);
        connection.release();
        return videorow[0];
    }

    async getvideo(user_id,videoid){
        const connection=await pool.getConnection(async(conn)=>conn);
        const videoinfo=await VidiaryDao.getvideo(connection,user_id,videoid);
        connection.release();
        return videoinfo[0];
    }
}

export default new Vidiaryget;