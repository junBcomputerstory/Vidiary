import VidiaryDao from'./VidiaryDao.js';
import {pool} from '../config/mysql.js';
import { response,errResponse } from '../config/response.js';
import * as baseResponse from'../config/baseResponse.js';   


class VidiaryPost{
    async newVidiary(userid,videoinfo){
        const connection=await pool.getConnection(async(conn)=>conn);
        const vec=[userid,videoinfo.subject,videoinfo.name,videoinfo.description,videoinfo.star];
        await VidiaryDao.insertvideo(connection,vec);

        return response(baseResponse.SUCCESS);
    }
    
}