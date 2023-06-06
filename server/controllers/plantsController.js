import HttpError from '../models/httpError';
import Plant from '../models/plant';

// Fetches all plant guides from the database
const getPlants = async (req, res, next) => {
  try {
    const plants = await Plant.find({});
    res.json({ plants });
  } catch (err) {
    next(new HttpError('Failed to fetch plants', 500));
  }
};

// Creates a new plant guide
const createPlant = async (req, res, next) => {
  try {
    const plant = await Plant.create(req.body.plant);
    const result = await Plant.find({ id: plant._id }, 'commonName scientificName _id createdAt updatedAt');
    res.json(result);
  } catch (err) {
    next(new HttpError('Creating plant failed, please try again', 503));
  }
};

export { getPlants, createPlant };
