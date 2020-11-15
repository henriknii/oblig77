import { userService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  /* console.log(req.params.id)
  const user = await userService.getuserById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`Finner ikke user med ${req.params.id}`, 404)
    );
  }
  res.status(200).json(user);*/
  console.log(req.params.id)
  const parametere = req.params.id
  const parametere2 = parametere.split(";")
  

  const result = await userService.listusers();

  if (!result) {
    return next(
      new ErrorHandler(`Finner ikke brukere med ${req.params.id}`, 404)
    );
  }
  console.log(result)

  const poll = result.filter(user => user.email == parametere2[0] && user.password == parametere2[1]);

  console.log(poll)
  res.status(200).json(poll);
});

export const list = catchAsyncErrors(async (req, res, next) => {
  const result = await userService.listusers();
  res.status(200).json(result);
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.createuser(req.body);
  res.status(201).json(user);
});

export const update = catchAsyncErrors(async (req, res, next) => {
  let user = await userService.getuserById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`Finner ikke user med ${req.params.id}`, 404)
    );
  }
  user = await userService.updateuser(req.params.id, req.body);
  res.status(200).json(user);
});

export const remove = catchAsyncErrors(async (req, res, next) => {
  let user = await userService.getuserById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`Finner ikke user med ${req.params.id}`, 404)
    );
  }
  user = await userService.removeuser(req.params.id);
  res.status(204).json({});
});
