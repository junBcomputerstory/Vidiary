//유저 정보 조회
class userDao{
    //아이디를통한 유저정보 조회
    async selectUserpage(connection,ID){
        const selectUserIDQuery=`SELECT user_id,nickname
                                 FROM User
                                 WHERE email=?;`;
        const infoRows=await connection.query(selectUserIDQuery,ID);
        return infoRows;
    }
    
  //ID유무 확인
  async selectUserID(connection,ID){
      console.log(ID);
      const selectUserIDQuery=`SELECT email FROM User WHERE email = ?;`;
      const IDRows=await connection.query(selectUserIDQuery,ID);
      return IDRows;
  }
  //유저 생성
  async insertUserInfo (connection,ID,hashedPW,usernickname,inte) {
    try{
        const insertUserInfoQuery = 'INSERT INTO User (email , password, nickname) VALUES (?,?,?);';
        const value=[ID,hashedPW,usernickname];
        connection.query(
          insertUserInfoQuery,
          value
        );
        return (ID);
      }
    catch(err){
      console.log(err);
      return(0);
      }
    }
    //비밀번호 확인
  async selectUserPassword(connection,ID,PW) {
      const selectUserPasswordQuery = 'SELECT password FROM User WHERE email = ? and password =?;';
      const selectUserPassword = await connection.query(
          selectUserPasswordQuery,
          [ID,PW]
      );
    
      return selectUserPassword;
    }
    //유저의 email을 통한 id 추출
    async user_id(connection,email){
      try{
        const useridquery=`
            SELECT user_id
            FROM User
            WHERE email=?;`;
        const user_id=await connection.query(
          useridquery,
          email
        );
        return user_id;
      }
      catch(err){
        console.log(err);
      }
    }
      
      async getnickname(connection,ID){
        try{
          const getquery=`SELECT nickname
                          FROM User
                          WHERE email=?;`;
          const re=connection.query(
            getquery,
            ID
          );
          return re;
        }
        catch(e){
          console.log(e);
        }
      }
  
  
    }
  export default new userDao;
  
  
  