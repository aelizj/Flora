import HttpError from '../utils/httpError.js';
import Plant from '../models/plant.js';

const getPlants = async (req, res, next) => {
  try {
    const plants = await Plant.find({}, 'commonName _id scientificName imageUrl createdAt updatedAt');
    res.json({ plants });
  } catch (error) {
    next(new HttpError('Failed to fetch plants', 500));
  }
};

const createPlant = async (req, res, next) => {
  try {
    const plant = await Plant.create(req.body.plant);
    await Plant.find({ _id: plant._id }, 'commonName scientificName _id createdAt updatedAt')
      .then((result) => res.json(result))
      .catch((error) => next(new HttpError(`Error retrieving the newly created plant: ${error.message}`, 500)));
  } catch (error) {
    next(new HttpError('Creating plant failed, please try again', 503));
  }
};

const getPlantById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const plant = await Plant.findById(id);
    if (!plant) {
      next(new HttpError('Could not find plant with the provided id.', 404));
    }
    res.json({ plant });
  } catch (error) {
    next(new HttpError('Something went wrong, please try again', 500));
  }
};

const deletePlantById = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Plant.findByIdAndDelete(id);
    return res.send('Plant guide successfully deleted!');
  } catch (error) {
    return next(new HttpError('Something went wrong, please try again', 500));
  }
};

export {
  getPlants,
  createPlant,
  getPlantById,
  deletePlantById,
};
