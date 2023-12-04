let files;
class fileDAO{

    static async injectDB(conn){
        if(files)
            return;
        try{
            await conn.query("SELECT * FROM file").then(res=>files=res.rows);
        }
        catch(e){
            console.error("errore in fileDAO.injectDB()...impossibile contattare il database... :(");
        }
    }

    static getFiles(){
        return files;
    }
    

}

export default fileDAO;