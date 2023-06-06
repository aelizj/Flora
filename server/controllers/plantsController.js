import HttpError from '../utils/httpError';
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
    await Plant.find({ _id: plant._id }, 'commonName scientificName _id createdAt updatedAt')
      .then((result) => res.json(result))
      .catch((err) => next(new HttpError(`Error retrieving the newly created plant: ${err.message}`, 500)));
  } catch (err) {
    next(new HttpError('Creating plant failed, please try again', 503));
  }
};

export { getPlants, createPlant };
