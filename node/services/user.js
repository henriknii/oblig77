import User from '../models/feedback/user.js';

export const getUserById = async (id) => User.findById(id);

export const listUsers = async () => User.find().populate('user', 'email');

export const createUser = async (data) => {User.create(data)};

export const updateUser = async (id, data) =>
User.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

export const removeUser = async (id) => {
  const User = await User.findById(id);
  User.remove();
};
