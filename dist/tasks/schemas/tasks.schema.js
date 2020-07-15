"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const mongoose = require("mongoose");
exports.TaskSchema = new mongoose.Schema({
    name: String,
    status: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=tasks.schema.js.map