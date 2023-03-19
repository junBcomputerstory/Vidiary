import Usercheck from './Userget.js';
import userDao from './UserDao.js';
import * as baseResponse from'../config/baseResponse.js';
import crypto from 'crypto';
import {errResponse,response} from '../config/response.js';
//회원 생성
class Update{
    async createUser(userInfo,userInt){
        const connection=await pool.getConnection(async (conn)=>conn);
        try{
            
            const IDrow= await Usercheck.IDcheck(userInfo[0]);
            if(IDrow.length>1)
                return errResponse(baseResponse.SIGNUP_REDUNDANT_ID);
            const hashedPW=crypto
                .createHash("sha512")
                .update(userInfo[1])
                .digest("hex")
            await connection.beginTransaction();
            const interest=userInt.toString();
            const result=await userDao.insertUserInfo(connection,userInfo[0],hashedPW,userInfo[2],interest);
            if(result==userInfo[0]){
                console.log('새로운 유저 가입완료');
                await connection.commit();
            }
            else{
                return errResponse(baseResponse.SERVER_ERROR);
            }
        }
        catch(err){
            console.log(err);
            return errResponse(baseResponse.DB_ERROR);
        }
        finally{
            connection.release();
            return response(baseResponse.SUCCESS);
        }
    };
    async Postlogin(UserInfo){
        try{
            const IDrow=await Usercheck.IDcheck(UserInfo.email);
            if(IDrow.length<1)
                return errResponse(baseResponse.SIGNIN_ID_WRONG);
            const hashedPW= crypto
                .createHash("sha512")
                .update(UserInfo.password)
                .digest("hex");
            const re=await Usercheck.PWcheck(UserInfo.email,hashedPW);
            if(re.length<1){
                return errResponse(baseResponse.SIGNIN_PASSWORD_WRONG);     
            }
            return response(baseResponse.SUCCESS);

        }
        catch(err){
            console.log(err);
            return errResponse(baseResponse.DB_ERROR);
        }
    };
}
export default new Update;