import React, { useEffect, useState } from "react";
import "./../layout.css";
import ContinentCard from './ContinentCard';
import { getCovidData } from "./CovidData";

const asiaCountry =['India','Nepal','China','Pakistan','Singapore','Sri Lanka']
const Asia = (props) => {
  let myFormat = Intl.NumberFormat("en-US");
  const [worldData, setWorldData] = useState([]);
  useEffect(() => {
    getCovidData(asiaCountry, setWorldData);
  }, []);
 console.log(worldData);
// console.log(setWorldData)
  return (
    <>
      <div className="row justify-content-center">
        <h4 className="text-center m-4">Asia Covid-19 Cases:</h4> <hr />
        <div className="row justify-content-center">
        {
        worldData.map((items,index )=> {
          //console.log(worldData);
          return (
            <ContinentCard
              key={index}
              color="box-color"
              dataColor="text-danger"
              title={items.country}
              TodayCases={myFormat.format(items.todayCases)}
              TodayDeaths={myFormat.format(items.todayDeaths)}
              TotalCase={myFormat.format(items.cases)}
              TotalDeaths={myFormat.format(items.deaths)}
              ActiveCase={myFormat.format(items.active)}
              Recovered={myFormat.format(items.recovered)}
            />
          );
        })
        }


        {/* <ContinentCard
          color="box-color"
          dataColor="text-danger"
          title={worldData.country}
          TodayCases={worldData.todayCases}
          TodayDeaths={worldData.TodayDeaths}
          TotalCase={worldData.cases}
          TotalDeaths={worldData.deaths}
          ActiveCase={worldData.active}
          Recovered={worldData.recovered} 

        /> */}
       </div>
      </div>
    </>
  );
};
export default Asia;
