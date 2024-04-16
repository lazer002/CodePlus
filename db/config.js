const mongo = require('mongoose')
let mon = process.env.DATABASE;
 
mongo.connect(mon, {
    useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => {
    console.log("connected")
}).catch((err) => {
    console.log(err);
});

module.exports = mongo