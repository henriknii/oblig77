import mongoose from 'mongoose';
import validator from 'validator';
import argon2 from 'argon2';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Fyll ut epost'],
      unique: true, // unique index and value
      validate: [validator.isEmail, 'Eposten er ikke gyldig'],
    },
    password: {
      type: String,
      required: [true, 'Fyll ut passord'],
      minlength: [4, 'Passordet må minmum bestå av 8 verdier'],
      select: false,
    },
    role: {
      type: String,
      enum: {
        values: ['user', 'admin'],
        message: 'Rolle ikke fylt ut',
      },
      default: 'user',
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UserSchema.pre('save', async function (next) {
  this.password = await argon2.hash(this.password);
  next();
});

UserSchema.virtual('events', {
  ref: 'Event',
  localField: '_id',
  foreignField: 'user',
  justOne: false,
});

const User = mongoose.model('User', UserSchema);

export default User;
