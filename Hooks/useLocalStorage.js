import { useState, useEffect } from "react";

const PREFIX = "ChatLoop-"

export default function useLocalStorage(key, initialValue){
  
    const prefixKey = PREFIX + key
    const [value, setValue] = useState(() => {
      if(typeof window !== "undefined"){
        const jsonValue = localStorage.getItem(prefixKey)
        if(jsonValue != null) return JSON.parse(jsonValue)
        if(typeof initialValue === "function"){
            return initialValue();
        } else{
            return initialValue;
        }
      }
    })
  

    useEffect(() => {
       localStorage.setItem(prefixKey, JSON.stringify(value))
    }, [prefixKey, value])

    return [value, setValue]

}
