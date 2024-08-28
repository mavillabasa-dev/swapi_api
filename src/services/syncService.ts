import cron from 'node-cron';
import axios from 'axios';
import People from '../models/People';
import Film from '../models/Film';
import Starship from '../models/Starship';
import Planet from '../models/Planet';

const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
  }
};

const syncData = async () => {
  console.log('Starting data synchronization...');

  // Sync People
  let peopleData = await fetchData('https://swapi.dev/api/people/');
  if (peopleData && peopleData.results) {
    await People.deleteMany({});
    await People.insertMany(peopleData.results);
    console.log('People data synchronized');
  }

  // Sync Films
  let filmData = await fetchData('https://swapi.dev/api/films/');
  if (filmData && filmData.results) {
    await Film.deleteMany({});
    await Film.insertMany(filmData.results);
    console.log('Films data synchronized');
  }

  // Sync Starships
  let starshipData = await fetchData('https://swapi.dev/api/starships/');
  if (starshipData && starshipData.results) {
    await Starship.deleteMany({});
    await Starship.insertMany(starshipData.results);
    console.log('Starships data synchronized');
  }

  let planetData = await fetchData('https://swapi.dev/api/planets/');
  if (planetData && planetData.results) {
    await Planet.deleteMany({});
    await Planet.insertMany(planetData.results);
    console.log('Planets data synchronized');
  }

  console.log('Data synchronization completed.');
};

cron.schedule('0 0 * * *', () => {
  syncData();
});

export default syncData;
