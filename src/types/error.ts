type ErrorsObj = {
  error: string;
};

export type FetcherFailError = ErrorsObj & { errorStatus: number };
