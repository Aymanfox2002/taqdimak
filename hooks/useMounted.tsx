import { useEffect, useState } from "react";
/**
 * Custom hook to determine if the component is mounted to solve hydration issues.
 * @returns {boolean} - true if mounted, false otherwise
 */
const useMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
};

export default useMounted;