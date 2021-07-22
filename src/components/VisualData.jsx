import React, { useEffect, useState } from "react";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import "./../layout.css";
import { getCovidData } from "./CovidData";

const VisualData = (props) => {
    const asiaCountry = ['India','Nepal','China','Pakistan','Sri Lanka']
    const europeCountry =['Italy','Germany','France','Austria','Finland','Denmark']

  const [asiaData, setAsiaData] = useState([]);
  const [europeData, setEuropeData] = useState([]);
  
  useEffect(() => {
    getCovidData(europeCountry, setEuropeData);
  }, []);
  useEffect(() => {
    getCovidData(asiaCountry, setAsiaData);
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
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 left-content text-center">
            <h4>Europe Covid-19 Cases:</h4> <hr />
            <ResponsiveContainer width="100%" aspect={1}>
                <BarChart data={europeData}>
                    <XAxis dataKey="country" stroke ="white"/>
                    <YAxis stroke="white" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="deaths" fill="red" />
                    <Bar dataKey="cases" fill="#82ca9d" />
                    <Bar dataKey="recovered" fill="orange" />
                    <Bar dataKey="active" fill="blue" />
                </BarChart>
                </ResponsiveContainer>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12  right-content text-center">
            <h4>Asia Covid-19 Cases:</h4> <hr />
            <div className="row justify-content-center">
                <ResponsiveContainer width="100%" aspect={1}>
                <BarChart data={asiaData}>
                    <XAxis dataKey="country" stroke ="white"/>
                    <YAxis stroke="white" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="deaths" fill="red" />
                    <Bar dataKey="cases" fill="#82ca9d" />
                    <Bar dataKey="recovered" fill="orange" />
                    <Bar dataKey="active" fill="blue" />
                </BarChart>
                </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VisualData;
