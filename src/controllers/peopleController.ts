import { Request, Response } from "express";
import People from "../models/People";

export const getPeople = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.query;
    const filter = name ? { name: new RegExp(name as string, "i") } : {};
    console.log("🚀 ~ getPeople ~ filter:", filter)

    const people = await People.find(filter);
    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ message: "Error fetching people data", error });
  }
};

export const getPeopleById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "People ID is required" });
      return;
    }

    const people = await People.findById({ _id: id });

    if (!people) {
      res.status(404).json({ message: "People not found" });
      return;
    }

    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ message: "Error fetching people data", error });
  }
};
