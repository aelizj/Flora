/* eslint-disable no-promise-executor-return */
import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import PlantGuide from '../models/plantGuide.js';

const seedUsersCollection = async () => {
  console.log('Seeding db');
  const seedUser = new User({
    firstName: 'Anne',
    lastName: 'Jones',
    username: 'aneljo',
    email: 'aneljo@flora.com',
    password: 'password',
  });

  console.log('BEGINNING OF SEEDUSER FUNCTION');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log('After waiting');

  const salt = await bcrypt.genSalt(10);
  seedUser.password = await bcrypt.hash(seedUser.password, salt);

  try {
    const user = await User.create(seedUser);
    await User.find({ _id: user._id }, 'firstName lastName username email')
      .then((result) => console.log(result))
      .catch((error) => (console.error(`Error retrieving the newly created user: ${error.message}`)));
  } catch (error) {
    console.error(`Error occurred during registration: ${error}`);
  }

  return console.log('User collection seeded');
};

const seedPlantGuidesCollection = async () => {
  const seedPlantGuide = {
    commonName: 'test plant',
    scientificName: 'testus plantus',
    author: { id: '1111', username: 'sdfkjvsdfjk' },
  };

  try {
    const plantGuide = await PlantGuide.create(seedPlantGuide);
    await PlantGuide.find({ _id: plantGuide._id }, 'commonName scientificName _id createdAt updatedAt')
      .then((result) => console.log(result))
      .catch((error) => (console.error(`Error retrieving the newly created plant: ${error.message}`)));
  } catch (error) {
    console.error(error);
  }
};

export { seedUsersCollection, seedPlantGuidesCollection };
