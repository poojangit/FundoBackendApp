import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
const dotenv  = require('dotenv')
dotenv.config()

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
const tokenEnv = process.env.ACCESS_TOKEN_KEY
export const userAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
      console.log(bearerToken);
    bearerToken = bearerToken.split(' ')[1];

    const user  = await jwt.verify(bearerToken, tokenEnv);
    console.log(user);
    req.body.userId = user.email
    res.locals.user = user;
    res.locals.token = bearerToken;
    next();
  } catch (error) {
    res.status(HttpStatus.UNAUTHORIZED).json({
       code : HttpStatus.UNAUTHORIZED,
       message : 'Invalid token'
    })
  }
};
