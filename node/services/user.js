import User from '../models/feedback/user.js';

export const getuserById = async (id) => User.findById(id);

export const listusers = async () => User.find().populate('user', 'email');

export const createuser = async (data) => {User.create(data)};

export const updateuser = async (id, data) =>
User.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

export const removeuser = async (id) => {
  const User = await User.findById(id);
  User.remove();
};
