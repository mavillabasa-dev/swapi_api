import { Request, Response } from 'express';
import Planet from '../models/Planet';

export const getPlanets = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.query;
    const filter = name ? { name: new RegExp(name as string, 'i') } : {};

    const planets = await Planet.find(filter);
    res.status(200).json(planets);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching planets data', error });
  }
};
