import  express from 'express';
import cors from 'cors';
import router from './routes/fileRoutes.js';

const app=express();

app.use(cors({
	origin:"http://localhost:3000"	
}));
app.use('/api/v1/files',router);


app.get('*',(req,res)=>{

	res.status(404).json({message: "pagina non trovata"});

});


export default app;