import { useEffect } from "react";

const useAuthRedirect = (isLoggedIn, setShouldRedirect) => {
  useEffect(() => {
    if (isLoggedIn) {
      setShouldRedirect(true);
    }
  }, [isLoggedIn, setShouldRedirect]);
};

export default useAuthRedirect;
