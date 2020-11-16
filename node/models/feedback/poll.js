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
   quuestion:{
     type:String,
     required: true,
     trim:true
   },
   answeredBy:{
     type:Number,
     required: true,
     
   }
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

