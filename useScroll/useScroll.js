export const useScroll = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const onScroll = () => setState({ x: window.screenX, y: window.scrollY });
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return coords;
};
