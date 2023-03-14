import express from 'express';
import Usercontrol from './Usercontrol.js';
import {userimageupload,userimagedelete} from '../config/profileupload.js';


class Userroute{
    constructor(){
        this.router=express.Router();
        this.setRouter();
    }
    setRouter(){
        this.router.get();
    }
};



export default new Userroute().router;