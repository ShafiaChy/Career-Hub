import { useEffect, useState } from "react";

const useGetData = (url) => {
const [info, setInfo] = useState([])
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data=> setInfo(data))
  },[])

  return [info, setInfo] ;
};

export default useGetData;