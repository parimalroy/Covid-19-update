import React, { useEffect, useState } from "react";
import "./../layout.css";
import ContinentCard from './ContinentCard';
import { getCovidData } from "./CovidData";

const asiaCountry =['Italy','Germany','France','Austria','Finland','Denmark']
const Europe = (props) => {
  let myFormat = Intl.NumberFormat("en-US");
  const [worldData, setWorldData] = useState([]);
  useEffect(() => {
    getCovidData(asiaCountry, setWorldData);
  }, []);
 //console.log(worldData);
// console.log(setWorldData)
  return (
    <>
      <div className="row justify-content-center">
        <h4 className="text-center m-4"> Europe Covid-19 Cases: </h4> <hr />
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
              TodayCases={items.todayCases == 0 && items.todayDeaths== 0?'wait for update': myFormat.format(items.todayCases)}
              TodayDeaths={items.todayCases == 0 && items.todayDeaths == 0?'wait for update': myFormat.format(items.todayDeaths)}
              TotalCase={myFormat.format(items.cases)}
              TotalDeaths={myFormat.format(items.deaths)}
              ActiveCase={myFormat.format(items.active)}
              Recovered={myFormat.format(items.recovered)}
            />
          );
        })
        }
       </div>
      </div>
    </>
  );
};
export default Europe;
