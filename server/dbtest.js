const url = 'localhost:27017/dmf'; // Connection URL
const db = require('monk')(url);

const collection = db.get('dmf')

collection.find().then(
    (docs) =>{
        console.log(docs);
    }
)