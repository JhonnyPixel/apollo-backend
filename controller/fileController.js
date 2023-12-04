import fileDAO from "../dao/fileDAO.js";

class fileController{

    static getFiles(req,res,next){
       const files=fileDAO.getFiles();
       console.log(files);
       res.json(files);
    }
}

export default fileController;