import { HEADER_MENU_SELECTED } from '../actions/types';
import axios from "axios";
require("babel-core/register");
require("babel-polyfill");


 const callAPI = async (url, queryItem) => {
  console.log("==API-11result====");
const refdata = [];
await fetch("https://private-ui.cop-dev.homeoffice.gov.uk:443/api/platform-data/rf_country").
    then(results => {
    //console.log("==11result===="+ results.json().toString);
    return results.json()
    }).then(data => {
        //console.log("==22result===="+ data.results);
        data.map(item => {
            console.log("==44result===="+ item.name);
            refdata.push(item.name);
            //this.setState({countries: countries_.push(shift.name)})
            //this.state.countries.push(item.name)
         })
        })
    .catch(
        error => 
        console.log("==API-error===="+ error)
        );
  return refdata;
}

const callAPI0 = (url, queryItem) => {
    console.log("==API-11result====");
  const refdata = [];
    axios.get("https://private-ui.cop-dev.homeoffice.gov.uk:443/api/platform-data/rf_country").
  
  // then(function (response) {
  //   // handle success
  //   console.log(response);
  // })
  
    then(function (results) {
      console.log("==11result111====" + results.data.length);
  
      refdata.push(results.data)
      })
  
      // then(results => {
      //     console.log("==API-aa11result111====" + results.data);
      //     return results.data;
      //     })
      
          
      
      // .then(data => {
      //     //console.log("==22result===="+ data);
      //     data.map(item => {
      //         //console.log("==44result===="+ item.name);
      //         //this.setState({countries: countries_.push(shift.name)})
      //         this.state.countries.push(item.name)
      //      })
      //     this.setState({countries:this.state.countries});
      // })
      .catch(
          error => //this.setState({ error} ),
          console.log("==API-error===="+ error)
          );
    return refdata;
  }

const callAPI1 = async (url, headers) => {
    console.log("==hereeee====11")

    try {
        return await axios({
            url: 'https://private-ui.cop-dev.homeoffice.gov.uk:443/api/platform-data/rf_country',
            method: 'GET',
            headers: { 'content-type': 'application/json' }
        });
        //console.log("==hereeee====")
 
    } catch (err) {
        console.log('====falied:-'+ err);
        //return null;
    }

};



export {callAPI}