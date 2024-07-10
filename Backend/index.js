import app from "./app.js";
import connectToDB from "./database/dbConnection.js";
import 'dotenv/config';


connectToDB().then(()=>{
    app.listen(process.env.PORT,function(){
        console.log(`Server running successfully at ${process.env.PORT}`)
    })
}).catch(()=>{
    console.log(`Error in running Server`)
})


