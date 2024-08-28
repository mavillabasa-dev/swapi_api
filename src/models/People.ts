import mongoose, { Schema, Document } from 'mongoose';

interface IPeople extends Document {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

const PeopleSchema: Schema = new Schema({
  name: { type: String, required: true },
  height: { type: String },
  mass: { type: String },
  hair_color: { type: String },
  skin_color: { type: String },
  eye_color: { type: String },
  birth_year: { type: String },
  gender: { type: String },
  homeworld: { type: String },
  films: { type: [String] },
  species: { type: [String] },
  vehicles: { type: [String] },
  starships: { type: [String] },
  created: { type: String },
  edited: { type: String },
  url: { type: String }
});

export default mongoose.model<IPeople>('People', PeopleSchema);
