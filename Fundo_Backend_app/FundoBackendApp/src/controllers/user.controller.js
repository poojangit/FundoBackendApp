
import { password } from 'pg/lib/defaults';
import * as UserService from '../services/user.service';


/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newUser = async (req, res, next) => {
    const data = await UserService.newUser(req.body);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message: data.message
    });
};

export const userLogin = async(req, res) => {
  const login = await UserService.userLogin(req.body)
  res.status(login.code).json ({
    code : login.code,
    data : login.data,
    message : login.message
  })
}

export const forgotPass = async (req, res) => {
  const data = await UserService.forgotPass(req.body)
  res.status(data.code).json({
    code: data.code,
    data : data.data,
    message : data.message
  })
}

export const resetPass = async (req, res, next) => {
  const data = await UserService.resetPass(req.body)
  res.status(data.code).json({
    code : data.code,
    data : data.data,
    message : data.message
  })
}
