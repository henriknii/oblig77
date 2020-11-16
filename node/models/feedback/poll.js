import mongoose from 'mongoose';
import slugify from 'slugify';

const { Schema } = mongoose;

const PollSchema = new Schema(
  { 
    title: {
      type: String,
      required: true,
      trim: true,
    },
    room_code: {
      type: String,
      required: true,
      trim: true,
    },
   question:{
     type:String,
     required: true,
     trim:true
   },
   answeredYesBy:[String],
   answeredNoBy:[String],
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

/*
PollSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});
*/

export default mongoose.model('Poll', PollSchema);

