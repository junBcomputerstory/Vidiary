import express from 'express';
import UserControl from './UserControl';



class Userroute{
    constructor(){
        this.router=express.Router();
        this.setRouter();
    }
    setRouter(){
        this.router.post('/login',UserControl.process.login);
        this.router.post('/signin',UserControl.process.signin);
        this.router.get('/logout',UserControl.process.logout);
    }
};



export default new Userroute().router;