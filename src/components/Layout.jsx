import React, { useEffect, useState } from "react";
import "./../layout.css";
import CardDisplay from "./CardDisplay";
const Layout = (props) => {
  const [data, setData] = useState([]);
  let myFormat = Intl.NumberFormat("en-US");

  const getWroldData = async () => {
    try {
      let response = await fetch(
        "https://coronavirus-19-api.herokuapp.com/countries"
      );
      let getData = await response.json();
      return getData.find((item) => {
        if (item.country == "World") {
          setData(item);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWroldData();
  }, []);
  return (
    <>
      <div className="">
        <div className="row justify-content-center header bg-danger">
          <div className="col-12 text-center">
            {/* <NavbarNew /> */}
            {/* <h2 className="head">Stay Home Stay Safe</h2> */}
          </div>
        </div>
        <div className="row content">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 left-content text-center">
            <h4>World Covid-19 Cases:</h4> <hr />
            <div className="card">
              <div className="card-header ">
                Total Cases:
                 <span className="text-success updateData">
                   {myFormat.format(data.cases)}
                </span>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Today Case:
                  <span className="text-success updateData">
                    {myFormat.format(data.todayCases)}
                  </span>
                </li>
                {/* <li className="list-group-item">Today Case:</li> */}
                <li className="list-group-item">
                  Total Deaths:
                  <p className="text-danger updateData">
                    {myFormat.format(data.deaths)}
                  </p>
                </li>
                <li className="list-group-item">
                  Today Deaths:
                  <p className="text-danger updateData">
                    {myFormat.format(data.todayDeaths)}
                  </p>
                </li>
                <li className="list-group-item">
                  Recovered:
                  <p className="text-success updateData">
                    {myFormat.format(data.recovered)}
                  </p>
                </li>
                <li className="list-group-item">
                  Active:
                  <span className="text-success updateData">
                    {myFormat.format(data.active)}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12 col-12  right-content text-center">
            <h4>Bangladesh Covid-19 Cases:</h4> <hr />
            <div className="row justify-content-center">
              <CardDisplay
                color="box-color"
                dataColor="text-danger"
                title="Today Cases:"
                updateData={props.TodayCase}
              />
              <CardDisplay
                color="box-color"
                dataColor="text-danger"
                title="Today Deaths:"
                updateData={props.TodayDeath}
              />
              <CardDisplay
                color="box-color"
                dataColor="text-success"
                title="Total Cases:"
                updateData={props.TotalCases}
              />
              <CardDisplay
                color="box-color"
                dataColor="text-danger"
                title="Total Deaths:"
                updateData={props.TotalDeaths}
              />
              <CardDisplay
                color="box-color"
                dataColor="text-success"
                title="Active Cases:"
                updateData={props.Active}
              />
              <CardDisplay
                color="box-color"
                dataColor="text-success"
                title="Recovered:"
                updateData={props.Recovered}
              />
              <CardDisplay
                color="box-color"
                dataColor="text-success"
                title="Total Test:"
                updateData={props.TotalTests}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
