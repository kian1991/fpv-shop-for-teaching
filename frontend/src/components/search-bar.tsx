import { useSearchParams } from "react-router";

function debounce(fun) {
  setTimeout(fun(), 1400);
}

export function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const updateParams = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);

    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }

    setSearchParams(newParams);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
        onChange={(e) => debounce(updateParams("q", e.target.value))}
        value={searchQuery}
      />
    </>
  );
}
