import { HEADER_MENU_SELECTED } from '../actions/types';
import axios from "axios";
require("babel-core/register");
require("babel-polyfill");

const callAPI = async (url, headers) => {
    
    try {
        const response = await axios({
            url: `${url}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'crossdomain': true,
                // 'origin': `http://localhost:4001`,
                'credentials': true
            }
        });
        //response.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");
        const responseData = response.data ? response.data : null;
        logger.info(`Response Data  ${JSON.stringify(responseData)}`);

        return responseData;
    } catch (err) {
        logger.error(`Failed to get data from ${url} due to ${err}`);
        return null;
    }

};


export {callAPI}