import mongoose from 'mongoose'




export async function connect (){

      try {
           mongoose.connect('mongodb+srv://MelcomeMongoOSeDB:9325667300@cluster0.5fmyzep.mongodb.net/')
            const connection = mongoose.connection

            
            connection.on('connected', ()=> {
              console.log('MongoDB connected');
            })

            connection.on('error', (err) => {
              console.log("MongoDB connection error. Please make sure MongoDB is running. ", + err);
              process.exit()
            })

      }
      catch (error){
        console.log('something goes wrong');
        console.log(error);

      }



}
