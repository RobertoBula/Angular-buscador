import { Movie } from "./movies";

export interface Welcome {
    Search:       Movie[];
    totalResults: string;
    Response:     string;
}