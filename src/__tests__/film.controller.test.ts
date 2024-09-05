
const request = require('supertest');
import express, { Application } from 'express';
import mongoose from 'mongoose';

import Film from '../models/Film';
import { getFilmById, getFilms } from '../controllers/filmController';

jest.mock('../models/Film'); 


const app: Application = express();
app.get('/films', getFilms);
app.get('/films/:id', getFilmById);

describe('Film Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /films', () => {
    it('return all films', async () => {
      const mockFilms = [
        { title: 'A New Hope', director: 'George Lucas' },
        { title: 'The Empire Strikes Back', director: 'Irvin Kershner' },
      ];

      (Film.find as jest.Mock).mockResolvedValue(mockFilms);

      const response = await request(app).get('/films');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockFilms);
      expect(Film.find).toHaveBeenCalledWith({});
    });

    it('filter films by name', async () => {
      const mockFilms = [{ title: 'A New Hope', director: 'George Lucas' }];
      (Film.find as jest.Mock).mockResolvedValue(mockFilms);

      const response = await request(app).get('/films?name=hope');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockFilms);
      expect(Film.find).toHaveBeenCalledWith({ title: /hope/i });
    });

    it('return a 500 error', async () => {
      (Film.find as jest.Mock).mockRejectedValue(new Error('Error fetching films'));

      const response = await request(app).get('/films');

      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty('message', 'Error fetching films data');
    });
  });

  describe('GET /films/:id', () => {
    it('return a film by id', async () => {
      const mockFilm = { title: 'A New Hope', director: 'George Lucas' };
      (Film.findById as jest.Mock).mockResolvedValue(mockFilm);

      const response = await request(app).get('/films/123');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockFilm);
      expect(Film.findById).toHaveBeenCalledWith({ _id: '123' });
    });

    it('return a 404 if film is not found', async () => {
      (Film.findById as jest.Mock).mockResolvedValue(null);

      const response = await request(app).get('/films/123');

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('message', 'Film not found');
    });


    it('return a 500 error if something goes wrong', async () => {
      (Film.findById as jest.Mock).mockRejectedValue(new Error('Error fetching film'));

      const response = await request(app).get('/films/123');

      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty('message', 'Error fetching film data');
    });
  });
});
