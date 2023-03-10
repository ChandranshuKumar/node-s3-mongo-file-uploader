import express from 'express';
import {
	DELETE_FILE_ENDPOINT,
	GET_ALL_FILES,
	GET_FILE_ENDPOINT,
	UPLOAD_FILE_ENDPOINT
} from '../constants/route';
import { deleteFile, getAllFiles, getFile, uploadFile } from '../controllers/file.controller';
import checkAuth from '../middlewares/checkAuth';

const fileRoutes = express.Router();

fileRoutes.get(GET_ALL_FILES, checkAuth, getAllFiles);

fileRoutes.get(GET_FILE_ENDPOINT, checkAuth, getFile);

fileRoutes.post(UPLOAD_FILE_ENDPOINT, checkAuth, uploadFile);

fileRoutes.delete(DELETE_FILE_ENDPOINT, checkAuth, deleteFile);

export default fileRoutes;
