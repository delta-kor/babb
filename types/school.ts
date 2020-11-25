import { Schema, Document, model, Model } from 'mongoose';
import mongoose from 'mongoose';
import Fuse from 'fuse.js';

export interface SchoolDocument extends Document {
  id: string;
  type: number;
  name: string;
  tel: string;
  address: string;
  homepage: string;
}

export interface LoaderResult {
  searcher: Fuse<SchoolDocument>;
  id: Fuse<SchoolDocument>;
}

const loader = new Promise<LoaderResult>((resolve, reject) => {
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
          resolve({
            searcher: new Fuse(documents, { keys: ['name'], threshold: 0.3 }),
            id: new Fuse(documents, { keys: ['id'], threshold: 0 }),
          });
        });
    })
    .catch(reject);
});

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
