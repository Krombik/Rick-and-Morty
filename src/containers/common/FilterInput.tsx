import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import useQueryParams from "utils/useQueryParams";
import { useHistory } from "react-router-dom";
import { stringify } from "query-string";
import useDebounce from "utils/useDebounce";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "styled-components/macro";
import { ObjValues } from "types";

export type ObjToFilterInputProps<T extends Record<string, string>> = ObjValues<
  {
    [Key in keyof T]: FilterInputProps<
      Key extends string ? Key : never,
      T[Key]
    >;
  }
>;

export type FilterInputProps<
  K extends string = string,
  V extends string = string
> = {
  label: string;
  fieldKey: K;
  values?: V[];
};

const FilterInput = <K extends string, V extends string>({
  label,
  fieldKey: filterKey,
  values,
}: FilterInputProps<K, V>) => {
  const queryParams = useQueryParams<Partial<Record<string, string>>>();

  const currFilter = queryParams[filterKey] ?? "";

  const { replace, push, action } = useHistory();

  const [filter, setFilter] = useState(currFilter);

  useDebounce(
    filter,
    (newFilter) => {
      if (newFilter !== currFilter) {
        const func =
          currFilter && newFilter.startsWith(currFilter) ? replace : push;

        func({
          search: stringify({
            ...queryParams,
            [filterKey]: newFilter || undefined,
            page: undefined,
          }),
        });
      }
    },
    300
  );

  useEffect(() => {
    if (action === "POP" && currFilter !== filter) {
      setFilter(currFilter);
    }
  }, [currFilter]);

  if (!values)
    return (
      <TextField
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        fullWidth
        variant="outlined"
        label={label}
      />
    );

  return (
    <Autocomplete
      options={values}
      getOptionLabel={(option) => option}
      value={filter || null}
      onChange={(_, option) => setFilter(option || "")}
      renderInput={(params) => (
        <TextField {...params} fullWidth variant="outlined" label={label} />
      )}
    />
  );
};

export default FilterInput;
