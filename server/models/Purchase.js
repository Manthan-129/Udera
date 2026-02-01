const mongoose= require('mongoose');

const PurchaseSchema= new mongoose.Schema({
    courseId: {type: mongoose.Types.ObjectId, ref: 'Course', required: true},
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true},
    amount: {type: Number, required: true},
    status: {type: String, enum: ['pending', 'completed', 'failed'], default: 'pending'},
},{timestamps: true});

module.exports= mongoose.models.Purchase || mongoose.model('Purchase', PurchaseSchema);