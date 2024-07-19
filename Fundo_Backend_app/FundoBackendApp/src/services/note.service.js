import HttpStatus from 'http-status-codes'
// import { Note } from '../models/note';
import sequelize, { DataTypes } from '../config/database';
import bcrypt from 'bcrypt';

const Note = require('../models/note')(sequelize, DataTypes);
/**
 * Create a new note
 */
export const createNote = async (noteBody) => {
  try {
    // const checkTitle = await Note.findOne({
    //     where : {
    //         title : noteBody.title
    //     }
    // })
    // // console.log(title);
    // console.log(noteBody.title);
    // // console.log(checkTitle);
    // if(checkTitle==null){
    const note = await Note.create(noteBody);
    return {
      code: HttpStatus.CREATED,
      data: note,
      message: 'Note created successfully'
    };
    // }
    // return {
    //     code : HttpStatus.CONFLICT,
    //     data : data,
    //     message : "This title already exists please check"
    // }
  } catch (error) {
    return {
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      data: [],
      message: 'Error creating note'
    };
  }
};

/**
 * Get all notes
 */
export const getAllNotes = async () => {
  try {
    const notes = await Note.findAll();
    return {
      code: HttpStatus.OK,
      data: notes,
      message: 'Notes fetched successfully'
    };
  } catch (error) {
    return {
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      data: [],
      message: 'Error fetching notes'
    };
  }
};

/**
 * Update a note by ID
 *
 */
export const updateNote = async (id, noteBody) => {
  try {
    const note = await Note.findOne({
      where: {
        id: id
      }
    })
    if (note == null) {
      return {
        code: HttpStatus.NOT_FOUND,
        data: [],
        message: 'Note not found'
      }
    }

    const updatedNote = await note.update(noteBody);
    return {
      code: HttpStatus.OK,
      data: updatedNote,
      message: 'Note updated successfully'
    };
  } catch (error) {
    return {
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      data: [],
      message: 'Error updating note'
    }
  }
}
/**
 * Get a note by ID
 *
 */
export const getNoteById = async (id) => {
  try {
    const note = await Note.findOne({
      where: { id }
    })
    if (note == null) {
      return {
        code: HttpStatus.NOT_FOUND,
        data: [],
        message: 'Note not found'
      }
    }
    return {
      code: HttpStatus.OK,
      data: note,
      message: 'Note fetched successfully'
    };
  } catch (error) {
    return {
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      data: [],
      message: 'Error fetching note'
    };
  }
};

export const deleteNoteById = async (id) => {
  try {
    const note = await Note.findOne({
      where: { id }
    });
    if (note == null) {
      return {
        code: HttpStatus.NOT_FOUND,
        data: [],
        message: 'Note not found'
      };
    }
    await note.destroy();
    return {
      code: HttpStatus.OK,
      data: [],
      message: 'Note deleted successfully'
    };
  } catch (error) {
    return {
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      data: [],
      message: 'Error deleting note'
    };
  }
};

export const changeColor = async (color, id) => {
  try {
    if (color == null || id == null) {
      return {
        code: HttpStatus.NOT_FOUND,
        data: [],
        message: "Please Provide colour and ID"
      }
    } else {
      const userData = await Note.findByPk(id)
      if (userData == null) {
        return {
          code: HttpStatus.NOT_FOUND,
          data: [],
          message: "Please Provide Valid Id"
        }
      }
      if (id != userData.id) {
        return {
          code: HttpStatus.UNAUTHORIZED,
          data: [],
          Message: "invalid user"
        }
      } else {
        await Note.update(color,
          {
            where:
              { id: id }
          })
        return {
          code: HttpStatus.OK,
          data: userData,
          message: "colour Changed Successfully"
        }
      }
    }
  } catch (error) {
    return {
      code: HttpStatus.BAD_REQUEST,
      data: [],
      message: 'Unable to change the colour'
    }
  }
}

export const archiveNote = async (isArchive, id) => {
  console.log(isArchive);
  try {
    if (id == null) {
      return {
        code: HttpStatus.NOT_FOUND,
        data: [],
        message: "No Archive found"
      };
    }
    const userData = await Note.findByPk(id);
    if (userData == null) {
      return {
        code: HttpStatus.NOT_FOUND,
        data: [],
        message: "Please Provide Valid Id"
      };
    } else {
      // const updatedArchiveStatus = isArchive ? isArchive : true;

      await Note.update(isArchive,
        {
          where:
            { id: id }
        })
      return {
        code: HttpStatus.OK,
        data: userData,
        message: "isArchive updated"
      };
    }
  } catch (error) {
    return {
      code: HttpStatus.BAD_REQUEST,
      data: [],
      message: 'Unable to update isArchive'
    };
  }
};

export const trashNote = async (isTrash, id) => {
  console.log(isTrash);
  try {
    if (id == null) {
      return {
        code: HttpStatus.NOT_FOUND,
        data: [],
        message: "No Trash found"
      };
    }
    const userData = await Note.findByPk(id);
    if (userData == null) {
      return {
        code: HttpStatus.NOT_FOUND,
        data: [],
        message: "Please Provide Valid Id"
      };
    } else {
      await Note.update(isTrash,
        {
          where:
            { id: id }
        })
      return {
        code: HttpStatus.OK,
        data: userData,
        message: "isTrash updated"
      };
    }
  } catch (error) {
    return {
      code: HttpStatus.BAD_REQUEST,
      data: [],
      message: 'Unable to update isTrash'
    };
  }
};