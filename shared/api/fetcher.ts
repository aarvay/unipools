import { request, Variables } from "graphql-request";
import { endpoint } from "./config";

export const fetcher = (query: string, vars?: Variables) =>
  request(endpoint, query, vars);
