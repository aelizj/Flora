import HttpError from '../utils/httpError.js';
import Plant from '../models/plant.js';

// Fetches all plant guides from the database
const getPlants = async (req, res, next) => {
  try {
    const plants = await Plant.find({}, 'commonName _id scientificName imageUrl createdAt updatedAt');
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

// Fetches a single plant guide from the database by id
const getPlantById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const plant = await Plant.findById(id);
    if (!plant) {
      return next(new HttpError('Could not find plant with the provided id.', 404));
    }
    return res.json({ plant });
  } catch (err) {
    return next(new HttpError('Something went wrong, please try again', 500));
  }
};

export { getPlants, createPlant, getPlantById };
