import { useEffect } from "react";
import { useLocation } from "react-router";

// this component should wrap the Main
// will reset scroll position on new navigated routed

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
};

export default ScrollToTop;
