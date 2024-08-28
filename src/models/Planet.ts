import mongoose, { Schema, Document } from 'mongoose';

interface IPlanet extends Document {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

const PlanetSchema: Schema = new Schema({
  name: { type: String, required: true },
  rotation_period: { type: String },
  orbital_period: { type: String },
  diameter: { type: String },
  climate: { type: String },
  gravity: { type: String },
  terrain: { type: String },
  surface_water: { type: String },
  population: { type: String },
  residents: { type: [String] },
  films: { type: [String] },
  created: { type: String },
  edited: { type: String },
  url: { type: String }
});

export default mongoose.model<IPlanet>('Planet', PlanetSchema);
