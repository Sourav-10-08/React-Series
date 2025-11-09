import {useEffect, useState} from "react"

function useCurrencyInfo(currency) {
  useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
  }, [])
}

export default InputBox

// we use res.json() to convert the response into a javascript object from string format.