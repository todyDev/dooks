import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  if (!opts) {
    //!opts.url
    return state; //return ;
  }
  const refetch = () => {
    setState({
      ...state,
      loading: true,
      error: null
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error
        });
      });
  }, [trigger]);
  return { ...state, refetch };
};

export default useAxios;
