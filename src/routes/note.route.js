import express from 'express';
import * as notesController from '../controllers/note.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// console.log('Notes Controller:', notesController); 
router.post('/',userAuth, notesController.createNote);
router.get('/',userAuth, notesController.getAllNotes);
router.put('/:id',userAuth,  notesController.updateNote);
router.get('/:id',userAuth, notesController.getNoteById);
router.delete('/:id',userAuth, notesController.deleteNoteById);
router.put('/archive/:id', userAuth, notesController.archiveNote);
router.put('/trash/:id', userAuth, notesController.trashNote);
router.put('/color/:id', userAuth, notesController.changeColor);

export default router;
