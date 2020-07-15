import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    name: String,
    status: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});