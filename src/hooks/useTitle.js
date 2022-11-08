import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Food Fly`;
  }, [title]);
};

export default useTitle;
