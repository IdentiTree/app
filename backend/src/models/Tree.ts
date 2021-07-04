import mongoose from 'mongoose';

const treeSchema = new mongoose.Schema({
    treeType: {
        type: Number,
        required: true
    },
    coordinate: {
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        }
    },
    commonName: {
        type: String,
        required: true
    },
    carbonCapture: {
        type: Number,
        required: true
    },
    area: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    circumference: {
        type: Number,
        required: true
    }
})

export interface ITreeModel extends mongoose.Document {
    treeType: number;
    coordinate: { lat: number, lng: number };
    commonName: string;
    carbonCapture: number;
    area: string;
    height: number;
    circumference: number;
}

const Tree = mongoose.model<ITreeModel>('Tree', treeSchema);
export { Tree };
