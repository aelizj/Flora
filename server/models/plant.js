import mongoose from 'mongoose';

const PlantSchema = new mongoose.Schema({
  commonName: {
    type: String,
    required: [true, 'A common name is required'],
  },
  scientificName: {
    type: String,
    required: [true, 'A scientific name is required'],
  },
  imageUrl: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  careGuide: {
    type: String,
    required: false,
  },
  createdAt: {
    type: String,
    default: Date.now,
    required: [true, 'A timestamp for createdAt is needed to submit.'],
  },
  updatedAt: {
    type: String,
    default: Date.now,
    required: [true, 'A timestamp for createdAt is needed to submit.'],
  },
});

const Plant = mongoose.model('Plant', PlantSchema);
export default Plant;
