import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'A first name is needed to submit.'],
  },
  lastName: {
    type: String,
    required: [true, 'A last name is needed to submit.'],
  },
  email: {
    type: String,
    required: [true, 'An email is required to submit.'],
    unique: true,
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
  bio: {
    type: String,
    default: '',
    required: 'false',
  },
  location: {
    type: String,
    default: '',
    required: 'false',
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
  plants: {
    type: Array,
    default: [],
    required: false,
  },
  wishlist: {
    type: Array,
    default: [],
    required: false,
  },
  profileImageUrl: {
    type: String,
    default: '',
    required: false,
  },
  coverImageUrl: {
    type: String,
    default: '',
    required: false,
  },
});

const User = mongoose.model('User', UserSchema);
export default User;
