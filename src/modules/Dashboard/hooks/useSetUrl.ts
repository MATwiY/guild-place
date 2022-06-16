import { useSearchParams } from "react-router-dom";

export const useSetUrl = () => {
  const [search, setSearch] = useSearchParams();
  const searchTerm = Object.fromEntries(new URLSearchParams(search));

  return [searchTerm, setSearch];
};
