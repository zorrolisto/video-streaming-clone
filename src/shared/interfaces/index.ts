export interface IMovie {
  id: number;
  title: string;
  year: number;
  director: string;
  duration: string;
  genre: string[];
  rate: number;
  img: string;
  banner: string;
  description: string;
  like: boolean;
}
export interface ISerie extends IMovie {}

export interface IResult<T> {
  data?: T[];
  error?: { code: number; message: string };
}
