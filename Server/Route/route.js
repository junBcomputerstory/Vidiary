import express from 'express';
import Userroute from './User/Userroute.js'

class routing{
    constructor(){
        this.router=express.Router();
        this.setRouter();
    }
    setRouter(){
        this.router.use('/user',Userroute);
    }
}

export default new routing().router;
