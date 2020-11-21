import { Schema, Document, model, Model } from 'mongoose';
import mongoose from 'mongoose';
import Fuse from 'fuse.js';

const loader = new Promise<Fuse<SchoolDocument>>((resolve, reject) => {
  mongoose
    .connect(process.env.DB || 'mongodb://localhost:27017/school', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Database connected');
      School.find()
        .exec()
        .then(documents => {
          console.log('Loaded data');
          resolve(new Fuse(documents, { keys: ['name'], threshold: 0.3 }));
        });
    })
    .catch(reject);
});

export interface SchoolDocument extends Document {
  id: string;
  type: number;
  name: string;
  tel: string;
  address: string;
  homepage: string;
}

const SchoolSchema = new Schema<SchoolDocument>({
  id: String,
  type: Number,
  name: String,
  tel: String,
  address: String,
  homepage: String,
});

let School: Model<SchoolDocument>;

try {
  School = model<SchoolDocument>('school');
} catch (e) {
  School = model<SchoolDocument>('school', SchoolSchema);
}

export default loader;
