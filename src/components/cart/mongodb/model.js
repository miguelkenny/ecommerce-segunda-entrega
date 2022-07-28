import mongoose from "mongoose";
const Schema = mongoose.Schema;

const shoppingCartsSchema = new mongoose.Schema({
    timestamp:{
        type:Date,
        default:Date.now()
    },
    productos:[
        {
            type:Schema.Types.ObjectId,
            ref:'producto'
        }
    ]
});


export default mongoose.model('carrito',shoppingCartsSchema);