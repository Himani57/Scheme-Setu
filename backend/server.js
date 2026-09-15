import app from './app.js';
import connectDb from './db/db.js'

connectDb();

app.listen(3001,()=>{
    console.log("Server is connected")
})