import HttpError from '../utils/httpError.js';
import PlantGuide from '../models/plantGuide.js';
import User from '../models/user.js';
import { RouteProcessingStart, RouteProcessingSuccess, RouteProcessingFailure } from '../utils/routeProcessing.js';

// Fetches all plant guides from db
const getPlantGuides = async (req, res, next) => {
  RouteProcessingStart(req.method, req.url);
  try {
    const plantGuides = await PlantGuide.find({}, 'commonName _id scientificName imageUrl createdAt updatedAt');
    RouteProcessingSuccess(req.method, req.url, res);
    res.json({ plantGuides });
  } catch (error) {
    RouteProcessingFailure(req.method, req.url, error);
    next(new HttpError('Failed to fetch plants', 500));
  }
};

// Adds plant guide to db
const createPlantGuide = async (req, res, next) => {
  RouteProcessingStart(req.method, req.url);
  try {
    const plantGuide = await PlantGuide.create(req.body.plantGuide);
    const user = await User.findById(plantGuide.author.id);
    user.authoredPlantGuides.push(plantGuide._id);
    await user.save();
    await PlantGuide.find({ _id: plantGuide._id }, 'commonName scientificName _id createdAt updatedAt')
      .then((result) => res.json(result))
      .catch((error) => next(new HttpError(`Error retrieving the newly created plant: ${error.message}`, 500)));
    RouteProcessingSuccess(req.method, req.url, res);
  } catch (error) {
    console.error(error);
    RouteProcessingFailure(req.method, req.url, error);
    next(new HttpError('Creating plant failed, please try again', 500));
  }
};

// Fetches a plant guide from db by id
const getPlantGuideById = async (req, res, next) => {
  RouteProcessingStart(req.method, req.url);
  const { id } = req.params;
  try {
    const plantGuide = await PlantGuide.findById(id);
    if (!plantGuide) {
      next(new HttpError('Could not find plant with the provided id.', 404));
    }

    RouteProcessingSuccess(req.method, req.url, res);
    res.json({ plantGuide });
  } catch (error) {
    RouteProcessingFailure(req.method, req.url, error);
    next(new HttpError('Something went wrong, please try again', 500));
  }
};

// Deletes a plant guide from db by id
// TODO: Deleted plant guide not removed from user's profile (GitHub Issue #18)]
const deletePlantGuideById = async (req, res, next) => {
  RouteProcessingStart(req.method, req.url);
  const { id } = req.params;
  try {
    await PlantGuide.findByIdAndDelete(id);
    RouteProcessingSuccess(req.method, req.url, res);
    return res.send('Plant guide successfully deleted!');
  } catch (error) {
    RouteProcessingFailure(req.method, req.url, error);
    return next(new HttpError('Something went wrong, please try again', 500));
  }
};

export {
  getPlantGuides,
  createPlantGuide,
  getPlantGuideById,
  deletePlantGuideById,
};
