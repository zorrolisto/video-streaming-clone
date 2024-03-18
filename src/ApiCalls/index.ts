import { IMovie, ISerie } from "@/src/shared/interfaces";
import { EMediaType } from "../shared/enums";
import { TMediaType } from "../shared/types";

export const fetchMovies = async () => {
  try {
    const response = await fetch("/api/movies");
    const result: { data: IMovie[] } = await response.json();
    return result;
  } catch (e: any) {
    console.error(e);
    return { error: { code: 400, message: e.message } };
  }
};

export const fetchSeries = async () => {
  try {
    const response = await fetch("/api/series");
    const result: { data: ISerie[] } = await response.json();
    return result;
  } catch (e: any) {
    console.error(e);
    return { error: { code: 400, message: e.message } };
  }
};

export const fetchNewMovies = async () => {
  try {
    const response = await fetch("/api/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ limit: 5, sort: "new", order: "desc" }), // fake pagination
    });
    const result: { data: IMovie[] } = await response.json();
    return result;
  } catch (e: any) {
    console.error(e);
    return { error: { code: 400, message: e.message } };
  }
};

export const fetchMediaAndRecommendations = async (
  id: string,
  mediaType: EMediaType
) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        `/api/info?id=${id}&mediaType=${mediaType}`
    );
    const result: { data: TMediaType; recomendations: TMediaType[] } =
      await response.json();
    return result;
  } catch (e: any) {
    throw { error: { code: 400, message: e.message } };
  }
};
