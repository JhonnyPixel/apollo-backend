import pkg from "pg";
const {Client} = pkg;

async function connectDb(){
    const client=new Client({
        host:"ep-long-sun-02630118.us-east-2.aws.neon.tech",
        user:"jhonnypixel",
        port:5432,
        password:"tWbepxJnwi62",
        database:"apollo",
        ssl:true
    });

    await client.connect()
    .then(()=>{
        console.log("Connessi al database con successo :)")
    })
    .catch(
        (err)=>{console.error("qualcosa è andato storto :( --->"+err.message)}
    )

    return client;
}

export default connectDb;



