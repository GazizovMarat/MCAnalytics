import React, { Component } from 'react';
import Analytics from "mobile-center-analytics";
// import Crashes from "mobile-center-crashes";

export class SelfAnalytics extends Component {
    constructor(props) {
        super(props);
    }

    eventConfigs = {
        'fb_login': {
            message: "Facebook login button clicked",
            properties: { "Page": "Login", "Category": "Clicks" },
            setProperties : (config, prop) => {
                return;
            }
        },
        'tw_login': {
            message: "Twitter login button clicked",
            properties: { "Page": "Login", "Category": "Clicks" },
            setProperties: (prop) => {
                return;
            }
        },
        'login_api_request_result': {
            message: "Trying to login in Facebook/Twitter.",
            properties: { "Page": "Login", "Category": "Request", "API": "Social network", "Social network": "", "Result": "", "Error message": "" },
            setProperties: (prop) => {
                if (prop["Social network"] !== undefined) {
                    this.properties["Social network"] = prop["Social network"];
                } else {
                    console.log('Social network is undefined!')
                }
                if (prop["Result"] !== undefined) {
                    this.properties["Result"] = prop["Result"];
                } else {
                    console.log('Result is undefined!')
                }
                if (prop["Error message"] !== undefined) {
                    this.properties["Error message"] = prop["Error message"];
                } else {
                    console.log('Error message is undefined!')
                }
            }
        },
        'retrieve_data_result': {
            message: "Trying to retrieve data from HealthKit/Google Fit API.",
            properties: { "Page": '', "Category": "Request", "API": '', "Result": '', "Error message": '' },
            setProperties: (prop) => {
                if (prop["Page"] !== undefined) {
                    this.properties["Page"] = prop["Page"];
                } else {
                    console.log('Page is undefined!')
                }
                if (prop["API"] !== undefined) {
                    this.properties["API"] = prop["API"];
                } else {
                    console.log('API is undefined!')
                }
                if (prop["Result"] !== undefined) {
                    this.properties["Result"] = prop["Result"];
                } else {
                    console.log('Result is undefined!')
                }
                if (prop["Error message"] !== undefined) {
                    this.properties["Error message"] = prop["Error message"];
                } else {
                    console.log('Error message is undefined!')
                }
            }
        },
        'view_stats': {
            message: "View statistics button clicked",
            properties: { "Page": "Main", "Category": "Clicks" },
            setProperties: (prop) => {
                return;
            }
        },
        'crash_app': {
            message: "Crash application button clicked",
            properties: { "Page": "Profile", "Category": "Clicks" },
            setProperties: (prop) => {
                return;
            }
        },

    }

    track = (key, prop) => {
        config = this.eventConfigs[key];
        if (config === undefined) {
            console.log('Unexpected key!');
            return;
        }
        config.setProperties.call(config, prop);
        Analytics.trackEvent(config.message, config.properties);
    }

}


// function sanitizeProperties(props) {
//     // Only string:string mappings are supported currently.

//     var result = {};

//     for(let i in props) {
//         switch (typeof props[i]) {
//         case "string":
//         case "number":
//         case "boolean":
//             result[i] = ""+props[i];
//             break;
//         case "undefined":
//             break;
//             default:
//             throw new Error("Properties cannot be serialized. Object must only contain strings");
//         }
//     }

//     return result;
// }


export default SelfAnalytics;