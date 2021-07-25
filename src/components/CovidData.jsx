import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./../layout.css";
import Layout from "./Layout";

const getCovidData = async (data,setBdDatas,setLoading) => {
  try {
    let allItem = [];
    let response = await fetch(
      "https://coronavirus-19-api.herokuapp.com/countries"
    );
    let result = await response.json();
    result.find((item) => {
       for (let i=0; i<=data.length; i++) {
        if(item.country == data[i]) {
          allItem.push(item)
          setBdDatas([...allItem])
                 
        }
      }
      });

  setLoading(true)
  } catch (err) {
    console.log(err);
  }
};


const CovidData = (props) => {

  let myFormat = Intl.NumberFormat("en-US");
  const [bdData, setBdData] = useState(['Bangladesh']);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCovidData(bdData,setBdData,setLoading);
  }, []);
 // console.log(bdData[0].country);
  return (
    <>
    {loading? 
      <Layout
        TodayCase={
          bdData[0].todayCases == 0
            ? '" Waiting for today update "'
            : myFormat.format(bdData[0].todayCases)
        }
        TodayDeath={
          bdData[0].todayDeaths == 0
            ? '" Waiting for today update "'
            : myFormat.format(bdData[0].todayDeaths)
        }
        TotalCases={myFormat.format(bdData[0].cases)}
        TotalDeaths={myFormat.format(bdData[0].deaths)}
        Active={myFormat.format(bdData[0].active)}
        Recovered={myFormat.format(bdData[0].recovered)}
        TotalTests={myFormat.format(bdData[0].totalTests)}
      />:
      <div className="text-center mt-5">
         <Spinner className="sp-class" variant="warning"  animation="border" /><br/> <span className="text-white">Loading...</span> </div>}
      
    </>
  );
};

export default CovidData;
export { getCovidData };

