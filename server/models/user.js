import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A name is needed to submit.'],
  },
  email: {
    type: String,
    required: [true, 'An email is required to submit.'],
  },
  password: {
    type: String,
    required: [true, 'A password is needed to submit.'],
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'A username is needed to submit'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  interests: {
    type: Array,
    default: [],
    required: false,
  },
  achievements: {
    type: Array,
    default: [],
    required: false,
  },
  plantCollection: {
    type: Array,
    default: [],
    required: false,
  },
  wishlist: {
    type: Array,
    default: [],
    required: false,
  },
});

const User = mongoose.model('User', UserSchema);
export default User;
