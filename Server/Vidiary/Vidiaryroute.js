import express from'express';
import VidiaryControl from './VidiaryControl';
import {imageupload} from '../config/imageupload.js'

class Circleroute{
    constructor(){
        this.router=express.Router();
        this.setrouter();
    }
    setrouter(){
        this.router.get('/:Userid',VidiaryControl.process.vidiary);
        this.router.get('/:Userid/:videoid',VidiaryControl.process.video);
        this.router.post('/:Userid/write',imageupload.single('image'),VidiaryControl.process.write);
    }
}

export default new Circleroute().router;