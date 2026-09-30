import { Schema, model } from 'mongoose';

const TodoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: String,
    },
    { timestamps: true },
);

const Todo = model('Todo', TodoSchema);

export default Todo;
