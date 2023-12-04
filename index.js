import app from "./server.js";
import fileDAO from "./dao/fileDAO.js";
import connectDb from "./db_connect.js";

async function main(){
    try{
        const client= await connectDb();
        await fileDAO.injectDB(client);
        app.listen(7000,()=>{
            console.log("l'app è in ascolto...")

        })
    }
    catch(e){
        console.error("L'app si è arrestata per errore di connesione con il db...");
    }
}

main().catch(e=>console.error(e));