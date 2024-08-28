import { Request, Response } from 'express';
import People from '../models/People';

export const getPeople = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.query;
    const filter = name ? { name: new RegExp(name as string, 'i') } : {};

    const people = await People.find(filter);
    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching people data', error });
  }
};
