class vidiaryDao{

    async insertvideo(connection,info){
        try{
            const inputquery='Insert INTO Vidiary (user_id,video_name,subject_id,star,Content) VALUES (?,?,?,?,?);';
            await connection.query(
                inputquery,
                info
            );
        }
        catch(e){
            print(e);
        }
    }


    async getvideo(connection,user_id,video_id){
        try{
            const getquery='SELECT * FROM Vidiary WHERE user_id=? and video_id=?;';
            const video=await connection.query(
                            getquery,
                            [user_id,video_id]
                            );
            
            return video;
        }
        catch(e){
            print(e);
        }
    }

    
    async getlist(connection,subject_id){
        try{
            const getquery='SELECT * Vidiary WHERE subject_id=?;';
            const list=await connection.query(
                        getquery,
                        subject_id
            );
            return list;
        }
        catch(e){
            print(e);
        }
    }
}