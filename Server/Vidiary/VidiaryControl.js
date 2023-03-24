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
      const vidiary=await Check.getvideolist(userId);

      res.send(vidiary);

    },
    write: async(req,res)=>{
        const video_info=[req.params.Userid,req.file.location,req.name,req.text,req,subject,req.star];
        const result=await Update.newVidiary(video_info);

        res.send(result);
        
    },
    video: async(req,res)=>{
      const video_info=[req.params.Userid,req.params.videoid];
      const video=await Check.getvideo(video_info);
      res.send(video);
    }
    };
}
export default new control();
