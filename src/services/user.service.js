import HttpStatus from 'http-status-codes';
import sequelize, { DataTypes } from '../config/database';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { password } from 'pg/lib/defaults';
const saltRounds = 10
// const secretKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'


const User = require('../models/user')(sequelize, DataTypes);

//create new user
export const newUser = async (body) => {
  try{
  const checkUser = await User.findOne({
    where:{
      email : body.email
    }
  })
console.log(checkUser);
  if (checkUser == null) {
    // console.log("not found");
    const hashedPass = await bcrypt.hash(body.password, saltRounds)
    console.log(hashedPass)
    const data = await User.create({
      ...body,
      password : hashedPass
    });
    return {
      code: HttpStatus.CREATED,
      data : data, 
      message : "User created Successfully!"
    }
  }
  return {
    code: HttpStatus.CONFLICT,
    data : [], 
    message : "User Already exists"
  }
}
catch(error) {
  return {
    code : HttpStatus.INTERNAL_SERVER_ERROR ,
    data : [] ,
    message  :"Error found"
  }
}
};

export const userLogin = async ({email,password}) => {
  console.log("------------------------------------------------");
  try {
    const checkUser = await User.findOne({
      where : {
        email : email
      }
    })
    console.log("User mail", checkUser)
    if(checkUser == null){
      return {
        code : HttpStatus.NOT_FOUND,
        data : [],
        message : "no user found"
      }
    }
   const checkPass = await bcrypt.compare(password, checkUser.dataValues.password)
   if(checkPass) {
    console.log(checkPass);
      const token = jwt.sign(
        {
            email : email
        },
        process.env.ACCESS_TOKEN_KEY
      )
      console.log(token);

      return {
        code : HttpStatus.ACCEPTED,
        data : token,
        message : 'Login successfull and Token Generated!!'
      }
    }
   else {
    return {
      code : HttpStatus.BAD_REQUEST,
      data: [],
      message : "Wrong password"
    }
   }
  }
  catch(error) {
    return {
      code : HttpStatus.INTERNAL_SERVER_ERROR,
      data: [],
      message : "Error"
    }
  }
}

export const forgotPass = async({email}) => {
  try {
    const checkUser = await User.findOne({
      where: { email } 
    })
    if(checkUser == null) {
      return {
        code : HttpStatus.NOT_FOUND,
        data : [],
        message: "no user found"
      }
    }
    const token = jwt.sign(
      {
          email : email
      },
      process.env.ACCESS_TOKEN_KEY
    )
    console.log(token);

    return {
       code: HttpStatus.OK, 
       data: token, 
       message: "OTP generated successfully" };
  } catch (error) {
    return { 
      code: HttpStatus.INTERNAL_SERVER_ERROR, 
      data: [], 
      message: "Error occurred" };
  }
};

export const resetPass = async ({ email, newPassword}) => {
  try {
  
    const hashedPass = await bcrypt.hash(newPassword, saltRounds);
    await User.update(
      { password: hashedPass },
      {
        where: {
          email: email,
        },
      }
    );
    return {
      code: HttpStatus.OK,
      data: [],
      message: 'Password reset successfully',
    };
  } catch (error) {
    return {
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      data: [],
      message: 'Error resetting password',
    };
  }
};
