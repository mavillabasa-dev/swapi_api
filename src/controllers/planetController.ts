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

export const getPlanetsById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Planet ID is required" });
      return;
    }

    const planet = await Planet.findById({ _id: id });

    if (!planet) {
      res.status(404).json({ message: "Planet not found" });
      return;
    }

    res.status(200).json(planet);
  } catch (error) {
    res.status(500).json({ message: "Error fetching planet data", error });
  }
};
