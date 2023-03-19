import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import multer from 'mutler';
import multerS3 from 'multer-s3';
import path from 'path';
dotenv.config();


AWS.config.update({
    region:'ap-northeast-2',
    accessKeyID: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
});

const s3=new AWS.S3()

const allowed=['.png','.jpg','.jpeg','.bmp'];

export const imageupload=multer({
    storage: multerS3({
        s3: s3,
        bucket: 'Vidiary',
        key: (req, file, callback)=>{
            const userdir=req.parmas.Userid;
            const extention=path.extname(file.originalname);
            if(!allowed.includes(extention)){
                return callback(new Error('wrong format image'));
            }
            callback(null, `${userdir}/vidiary_image`);
        },
        acl: 'public-read-write'
    }),
});
