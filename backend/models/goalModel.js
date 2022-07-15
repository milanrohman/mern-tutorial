const mongoose = require('mongoose')
const goalSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "Users",
        },
        text: {
            type: String,
            requared : [true, 'Please add a text value']
        },   
    },
    {
        timestamps: true,
    }
)

module.exports= mongoose.model('Goals', goalSchema)