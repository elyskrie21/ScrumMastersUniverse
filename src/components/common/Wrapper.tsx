import { useLocation } from "react-router-dom";
import { ReactNode, useLayoutEffect } from "react";

export const Wrapper = (props: { children: ReactNode }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return props.children;
};
