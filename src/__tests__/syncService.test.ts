import axios from "axios";
import People from "../models/People";
import syncData, { fetchData } from "../services/syncService";

jest.mock("axios");
jest.mock("../models/People");
// jest.mock("../models/Film");
// jest.mock("../models/Starship");
// jest.mock("../models/Planet");

describe("syncData Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("fetchData", () => {
    it("should fetch data from a given URL", async () => {
      const mockData = { results: [{ name: "Luke Skywalker" }] };
      (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

      const result = await fetchData("https://swapi.dev/api/people/");
      expect(result).toEqual(mockData);
      expect(axios.get).toHaveBeenCalledWith("https://swapi.dev/api/people/");
    });

    it("should handle fetch errors gracefully", async () => {
      (axios.get as jest.Mock).mockRejectedValue(new Error("API error"));

      const result = await fetchData("https://swapi.dev/api/people/");
      expect(result).toBeUndefined();
      expect(axios.get).toHaveBeenCalledWith("https://swapi.dev/api/people/");
    });
  });
  
});
