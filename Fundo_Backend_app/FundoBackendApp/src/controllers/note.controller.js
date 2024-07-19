import { log } from 'winston';
import * as noteService from '../services/note.service';
import HttpStatus from 'http-status-codes';

export const createNote = async (req, res) => {
  const result = await noteService.createNote(req.body);
  res.status(result.code).json({
      code : result.code,
      data : result.data,
      message : result.message
  });
};

export const getAllNotes = async (req, res) => {
  const result = await noteService.getAllNotes(req.body);
  res.status(result.code).json({
      code : result.code,
      data : result.data,
      message : result.message
  });
};

export const updateNote = async (req, res) => {
  const { id } = req.params;
  const result = await noteService.updateNote(id, req.body);
  res.status(result.code).json({
      code : result.code,
      data : result.data,
      message : result.message
  });
};

export const getNoteById = async (req, res) => {
  const { id } = req.params;
  const result = await noteService.getNoteById(id);
  res.status(result.code).json({
      code : result.code,
      data : result.data,
      message : result.message
  });
};

export const deleteNoteById = async (req, res) => {
  const { id } = req.params;
  const result = await noteService.deleteNoteById(id);
  console.log(result);
  res.status(result.code).json({
      code : result.code,
      data : result.data,
      message : result.message
  });
};

export const archiveNote = async (req, res) => {
  // console.log(req);
  const data = await noteService.archiveNote( req.body, req.params.id);
  console.log(data);
  res.status(data.code).json({
    code : data.code,
    data : data.data,
    message: data.message
  });
}

export const trashNote = async (req, res) => {
  // console.log(req);
  const data = await noteService.trashNote( req.body, req.params.id);
  res.status(data.code).json({
    code : data.code,
    data : data.data,
    message: data.message
  });
}

export const changeColor = async (req, res) => {
  // console.log(req);
  const data = await noteService.changeColor( req.body, req.params.id);
  console.log(data);
  res.status(data.code).json({
    code : data.code,
    data : data.data,
    message: data.message
  });
}