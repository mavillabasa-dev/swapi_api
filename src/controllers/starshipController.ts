import { Request, Response } from 'express';
import Starship from '../models/Starship';

export const getStarships = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.query;
    console.log("🚀 ~ getStarships ~ req.query:", req.query)
    const filter = name ? { name: new RegExp(name as string, 'i') } : {};

    const starships = await Starship.find(filter);
    res.status(200).json(starships);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching starships data', error });
  }
};


export const getStarshipsById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Starships ID is required" });
      return;
    }

    const starships = await Starship.findById({ _id: id });

    if (!starships) {
      res.status(404).json({ message: "Starship not found" });
      return;
    }

    res.status(200).json(starships);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Starship data", error });
  }
};
