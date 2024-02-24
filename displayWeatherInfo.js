import { LightningElement, wire } from 'lwc';
import passJsonToLWC from '@salesforce/apex/JsonController.passJsonToLWC';

export default class DisplayWeatherInfo extends LightningElement {
    pressure;
    humidity;
    temperature;

    @wire(passJsonToLWC)
    getJsonFromApex({data, error}){
        if(data){  
            let {pressure, humidity, temp} = data.current;
            this.pressure = pressure;
            this.humidity = humidity;
            this.temperature = temp;
        }
        if(error){
            console.log('Error ::: ',error)
        }
    }
}