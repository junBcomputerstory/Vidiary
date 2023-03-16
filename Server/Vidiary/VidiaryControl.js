import express from 'express';
import Update from './Vidiarypost.js';
import Check from './Vidiaryget.js';
import {errResponse,response} from '../config/response.js';
import * as baseResponse from '../config/baseResponse.js';

class control {
  constructor(){
    this.app=express();
  }
  process = {
    login: async (req, res) => {
      if(req.body.email.length==0){
            return res.send(errResponse(baseResponse.SIGNIN_ID_EMPTY));}
      else if(req.body.password.length==0){
            return res.send(errResponse(baseResponse.SIGNIN_PW_EMPTY));}

      const userInfo = req.body;

      const UserLogin = await Update.Postlogin(userInfo);

      if (UserLogin.isSuccess == true) {
        console.log("로그인성공");
        const usernickname= await Check.nicknamecheck(userInfo.email);
        req.session.user = {
            email: userInfo.email,
            nickname: usernickname[0].nickname,
        };
        res.cookie('sessionid',userInfo.email);
        UserLogin.nickname=usernickname[0].nickname;
      }
      return res.send(UserLogin);
    },

    signin: async (req, res) => {
      const userInfo = [req.body.email, req.body.password, req.body.nickname];
      const User = await Update.createUser(userInfo);

      return res.send(User);
    },

    mypage: async (req, res) => {
      if (!req.session.user) {
        console.log(`로그인을 먼저해주세요`);
        return res.redirect(`user/login`);
      } 
      const User =await Check.retrieveUserpage(req.session.user.email);
      return res.send(User);
    },

    
    logout: async(req,res)=>{
      const session=req.session;
      try{
        if(session.user){
          await req.session.destroy(function(err){
            if(err)
              console.log(err);
          });
        }
      }
      catch(e){
        console.log(e);
      }
      finally{
        res.redirect('/');
      }
    }
    };
}
export default new control();
