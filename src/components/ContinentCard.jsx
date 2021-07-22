import React from "react";
import "./../layout.css";

const ContinentCard = (props) => {
  return (
    <>
      <div className="card-columns col-lg-6 col-md-6 col-sm-12 col-12 card-display">
        <div className="card card-primary ">
          <div className="card-body" className={props.color}>
            <p className="data-title text-center text-success">{props.title}</p>
            <table class="table table-striped col-12">
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td>Today Cases: <span className="text-danger"> {props.TodayCases} </span> </td>
                  <td>Today Deaths: <span className="text-danger">{props.TodayDeaths}</span> </td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>Total Cases: <span className="text-success">{props.TotalCase}</span> </td>
                  <td>Total Deaths: <span className="text-success">{props.TotalDeaths}</span></td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>Active Cases: <span className="text-success">{props.ActiveCase}</span></td>
                  <td>Recovered: <span className="text-success">{props.Recovered}</span></td>
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
