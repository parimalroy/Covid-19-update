import React from "react";
import "./../layout.css";

const ContinentCard = (props) => {
  return (
    <>
      <div className="card-columns col-lg-6 col-md-6 col-sm-12 col-12 card-display">
        <div className="card card-primary ">
          <div className="card-body" className={props.color}>
            <p className="data-title text-center">{props.title}</p>
            <table class="table table-striped col-12">
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td>Today Cases: {props.TodayCases} </td>
                  <td>Today Deaths: {props.TodayDeaths} </td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>Total Cases: {props.TotalCase} </td>
                  <td>Total Deaths: {props.TotalDeaths} </td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>Active Cases: {props.ActiveCase}</td>
                  <td>Recovered: {props.Recovered}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContinentCard;
