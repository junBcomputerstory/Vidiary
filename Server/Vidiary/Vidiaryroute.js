import express from'express';
import VidiaryControl from './VidiaryControl';


class Circleroute{
    constructor(){
        this.router=express.Router();
        this.setrouter();
    }
    setrouter(){
        this.router.get('/:Userid',VidiaryControl.process.vidiary);
    }
}

export default new Circleroute().router;