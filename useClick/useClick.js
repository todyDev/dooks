export const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const reference = useRef();
  useEffect(() => {
    const element = reference.current;
    if (element) {
      element.addEventListener("click", onClick);
    }
    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      }
    };
  }, []);
  return reference;
};
