import React, { useEffect, useState } from 'react'
import Layout from './Layout'

const CovidData = ()=>{
    
    let myFormat = Intl.NumberFormat('en-US');
    const [bdData, setBdData]=useState([])

    const getCovidData= async ()=>{
        try{
            let response= await fetch('https://coronavirus-19-api.herokuapp.com/countries')
            let result = await response.json();
            // return result
            return result.find((item)=>{
                if(item.country=="Bangladesh")
                 setBdData(item)
                })
            //console.log(newData)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
       getCovidData()
    },[])
    console.log(bdData.todayCases)
    return(
        <>
            <Layout TodayCase={bdData.todayCases==0?'" Waiting for today update "':myFormat.format(bdData.todayCases)}
            TodayDeath={bdData.todayDeaths==0?'" Waiting for today update "':myFormat.format(bdData.todayDeaths)}
            TotalCases={myFormat.format(bdData.cases)}
            TotalDeaths={myFormat.format(bdData.deaths)}
            Active={myFormat.format(bdData.active)}
            Recovered={myFormat.format(bdData.recovered)}
            TotalTests={myFormat.format(bdData.totalTests)}/>
        </>
    )
}

    export default CovidData