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
    location: 'Somewhere, USA',
    bio: 'I like plants.',
    interests: ['Philodendrons'],
    wishlist: ['Philodendron glorious'],
    plants: ['Monstera deliciosa', 'Philodendron micans', 'Philodendron silver sword'],
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
    commonName: 'Zebra Succulent',
    scientificName: 'Haworthiopsis attenuata',
    author: { id: '12345', username: 'plantlover24' },
    description: 'Haworthiopsis attenuata, formerly Haworthia attenuata, commonly known as zebra haworthia, is a small species of succulent plant from the Eastern Cape Province, South Africa. As an ornamental, it is one of the most commonly cultivated of the Haworthiopsis species.',
    careGuide: "Here's a concise care guide:    1. Light:        Prefers bright, indirect light. Direct sunlight can cause the leaves to turn an undesirable red or brown.    If indoors, place near a south or west-facing window but shielded from direct sun. If it doesn't receive enough light, it may begin to stretch out.    2. Water:        Water sparingly. Allow the soil to dry out completely between waterings.    In spring and summer, water every 3-4 weeks. In fall and winter, reduce to every 4-6 weeks.    Avoid letting water sit on the rosette as this can cause rot.    3. Soil:        Use a well-draining succulent or cactus mix.    Consider adding perlite or coarse sand to enhance drainage if needed.    4. Pot:        Ensure the pot has drainage holes to prevent waterlogging and root rot.    5. Temperature and Humidity:        Ideal temperatures are between 65-80°F (18-27°C) during the day and a bit cooler at night.    While it can handle temperatures down to 40°F (5°C), it's best to avoid frost or freezing temperatures.    Humidity isn't a significant concern; the zebra plant is tolerant of a wide range.    6. Feeding:        During the growing season (spring and summer), feed with a diluted, balanced liquid fertilizer every 4-6 weeks. Avoid over-fertilizing.    7. Propagation:        Easily propagated by offsets (baby plants) that grow at the base. Gently remove the offset and allow it to dry for a day or two before planting in a well-draining soil mix.    8. Pests and Diseases:        Generally disease-free, but be on the lookout for mealybugs, scale, and aphids.    Overwatering can lead to root rot, so ensure good drainage and water sparingly.    9. Pruning:        Generally not needed, but dead or damaged leaves can be removed for aesthetics and health.    Remember that individual plants might have slightly different needs depending on their environment. It's always a good idea to observe your plant and adjust care accordingly.",
    plantDescription: 'Haworthiopsis attenuata, formerly Haworthia attenuata, commonly known as zebra haworthia, is a small species of succulent plant from the Eastern Cape Province, South Africa. As an ornamental, it is one of the most commonly cultivated of the Haworthiopsis species.',
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
