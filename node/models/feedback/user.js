import mongoose from 'mongoose';
import slugify from 'slugify';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    userid: {
      type: Number,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    password:{
      type: String,
      required: false
    },
    ownspolls:[String]
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

/*
PollSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});
*/

export default mongoose.model('User', UserSchema);

