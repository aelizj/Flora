import mongoose from 'mongoose';

const plantSchema = new mongoose.Schema({
  commonName: {
    type: String,
    required: true,
  },
  scientificName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  careGuide: {
    type: String,
    required: false,
  },
});

export default mongoose.model('Plant', plantSchema);
