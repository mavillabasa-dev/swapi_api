import { Request, Response } from 'express';
import Film from '../models/Film';

export const getFilms = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title } = req.query;
    const filter = title ? { title: new RegExp(title as string, 'i') } : {};

    const films = await Film.find(filter);
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching films data', error });
  }
};
