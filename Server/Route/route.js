import express from 'express';
import Userroute from '../User/Userroute.js'
import Videoroute from '../Vidiary/Vidiaryroute.js';

class routing{
    constructor(){
        this.router=express.Router();
        this.setRouter();
    }
    setRouter(){
        this.router.use('/user',Userroute);
        this.router.use('/vidiary',Videoroute);
    }
}

export default new routing().router;
