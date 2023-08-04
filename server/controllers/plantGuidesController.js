import HttpError from '../utils/httpError.js';
import PlantGuide from '../models/plantGuide.js';

const getPlantGuides = async (req, res, next) => {
  try {
    const plantGuides = await PlantGuide.find({}, 'commonName _id scientificName imageUrl createdAt updatedAt');
    res.json({ plantGuides });
  } catch (error) {
    next(new HttpError('Failed to fetch plants', 500));
  }
};

const createPlantGuide = async (req, res, next) => {
  try {
    const plantGuide = await PlantGuide.create(req.body.plantGuide);
    await PlantGuide.find({ _id: plantGuide._id }, 'commonName scientificName _id createdAt updatedAt')
      .then((result) => res.json(result))
      .catch((error) => next(new HttpError(`Error retrieving the newly created plant: ${error.message}`, 500)));
  } catch (error) {
    next(new HttpError('Creating plant failed, please try again', 500));
  }
};

const getPlantGuideById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const plantGuide = await PlantGuide.findById(id);
    if (!plantGuide) {
      next(new HttpError('Could not find plant with the provided id.', 404));
    }
    res.json({ plantGuide });
  } catch (error) {
    next(new HttpError('Something went wrong, please try again', 500));
  }
};

const deletePlantGuideById = async (req, res, next) => {
  const { id } = req.params;
  try {
    await PlantGuide.findByIdAndDelete(id);
    return res.send('Plant guide successfully deleted!');
  } catch (error) {
    return next(new HttpError('Something went wrong, please try again', 500));
  }
};

export {
  getPlantGuides,
  createPlantGuide,
  getPlantGuideById,
  deletePlantGuideById,
};
