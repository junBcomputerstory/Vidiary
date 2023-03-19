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
    vidiary: async (req, res) => {

      const userId=req.params.Userid;
      const vidary=await Check.getvidiary(userID);

    },
    write: async(req,res)=>{
        
    }
    };
}
export default new control();
