const mongoose = require('mongoose');


const idSchema = mongoose.Schema({
    id : {
        type : String,
        trim : true,
        lowercase : true,
        required : true
    },
    password : {
        type : String, 
        trim : true,
        lowercase : true,
        required : true
    }
});

const ID_prof = mongoose.model('ID_prof', idSchema)
 
module.exports = ID_prof