import mongoose, { Schema, Document } from 'mongoose';

interface IFilm extends Document {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

const FilmSchema: Schema = new Schema({
  title: { type: String, required: true },
  episode_id: { type: Number },
  opening_crawl: { type: String },
  director: { type: String },
  producer: { type: String },
  release_date: { type: String },
  characters: { type: [String] },
  planets: { type: [String] },
  starships: { type: [String] },
  vehicles: { type: [String] },
  species: { type: [String] },
  created: { type: String },
  edited: { type: String },
  url: { type: String }
});

export default mongoose.model<IFilm>('Film', FilmSchema);
