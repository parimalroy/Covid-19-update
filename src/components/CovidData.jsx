import React, { useEffect, useState } from "react";
import Layout from "./Layout";
const getCovidData = async (data,setBdDatas) => {
  try {
    let allItem = [];
    let response = await fetch(
      "https://coronavirus-19-api.herokuapp.com/countries"
    );
    let result = await response.json();
    // return result
    result.find((item) => {
       for (let i=0; i<=data.length; i++) {
        if(item.country == data[i]) {
          allItem.push(item)
          setBdDatas([...allItem])
          //console.log(allItem)
        }
      }
      });

  
  } catch (err) {
    console.log(err);
  }
};


const CovidData = (props) => {

  let myFormat = Intl.NumberFormat("en-US");
  const [bdData, setBdData] = useState(['Bangladesh']);

  useEffect(() => {
    getCovidData(bdData,setBdData);
   // getCovidData();
  }, []);
  console.log(bdData[0].country);
  return (
    <>
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
      />
      
    </>
  );
};

export default CovidData;
export { getCovidData };

