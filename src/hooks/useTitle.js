import { useEffect } from "react";

// this hook will be used to change title dynamically
const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Food Fly`;
  }, [title]);
};

export default useTitle;
