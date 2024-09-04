import { Request, Response } from 'express';
import Film from '../models/Film';

export const getFilms = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.query;
    const filter = name ? { title: new RegExp(name as string, 'i') } : {};

    const films = await Film.find(filter);
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching films data', error });
  }
};

export const getFilmById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: 'Film ID is required' });
      return;
    }

    const film = await Film.findById({ _id: id });

    if (!film) {
      res.status(404).json({ message: 'Film not found' });
      return;
    }

    res.status(200).json(film);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching film data', error });
  }
};

