const mongoose = require('mongoose');



News=mongoose.Schema({
    newsemail:{
    type:String

}

})






let Newsemail = mongoose.model("news+", News)
module.exports = Newsemail