import {useState,useEffect} from 'react';

// development purpose.
// const url='data5.json'
const useFetch=(url,dependencies)=>{
  const {searchValue} =dependencies
  // data
  const [apiData, setApiData] = useState([])
  // err
  const [isError, setIsError] = useState(true)
  // page loading
  const [isLoading, setIsLoading] = useState(true)


  const fetchApi=async ()=>{

      fetch(url)
      .then((res)=>{
        if(res.ok){
          return res.json()
        }
      })
      .then((data)=>{
        setApiData(data)
        setIsLoading(false)
        setIsError(false)
      }).catch((err)=>{
        console.log(err);
        setIsLoading(false)
        setIsError(true)
      })
  }

  useEffect(()=>{
    setIsError(true)
    setIsLoading(true)
    fetchApi()
  },[url,searchValue])

  return {apiData,isError,isLoading}
}
export default useFetch;