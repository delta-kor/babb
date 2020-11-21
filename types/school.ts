import { Schema, Document, model } from 'mongoose';
import mongoose from 'mongoose';

mongoose
  .connect(process.env.DB || 'mongodb://localhost:27017/school', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected'))
  .catch(e => console.error(e));

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

let School;

try {
  School = model<SchoolDocument>('school');
} catch (e) {
  School = model<SchoolDocument>('school', SchoolSchema);
}

export default School;
