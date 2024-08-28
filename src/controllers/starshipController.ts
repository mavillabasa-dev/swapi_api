import { Request, Response } from 'express';
import Starship from '../models/Starship';

export const getStarships = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.query;
    const filter = name ? { name: new RegExp(name as string, 'i') } : {};

    const starships = await Starship.find(filter);
    res.status(200).json(starships);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching starships data', error });
  }
};
