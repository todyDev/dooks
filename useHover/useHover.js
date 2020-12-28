export const useHover = (onHover) => {
  if (typeof onHover !== "function") {
    return;
  }
  const reference = useRef();
  useEffect(() => {
    const element = reference.current;
    if (element) {
      element.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element) {
        element.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  return reference;
};
