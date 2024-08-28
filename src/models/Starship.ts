import mongoose, { Schema, Document } from 'mongoose';

interface IStarship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

const StarshipSchema: Schema = new Schema({
  name: { type: String, required: true },
  model: { type: String },
  manufacturer: { type: String },
  cost_in_credits: { type: String },
  length: { type: String },
  max_atmosphering_speed: { type: String },
  crew: { type: String },
  passengers: { type: String },
  cargo_capacity: { type: String },
  consumables: { type: String },
  hyperdrive_rating: { type: String },
  MGLT: { type: String },
  starship_class: { type: String },
  pilots: { type: [String] },
  films: { type: [String] },
  created: { type: String },
  edited: { type: String },
  url: { type: String }
});

export default mongoose.model<IStarship>('Starship', StarshipSchema);
