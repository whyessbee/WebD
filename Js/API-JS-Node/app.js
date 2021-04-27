const express = require('express');
const app = express();
var bodyparser=require('body-parser');
var HealthRisk="";
let dataTobeWritten="";
let writeObj=[];
app.use(bodyparser.json());
const port = process.env.PORT || 3000;
const www = process.env.WWW || './';
const jsonObj = require("./generated.json");

app.use(express.static(www));
console.log(`serving ${www}`);

const fs = require('fs');




function BMI(data){
  
    
    var BMI=0;
    for(let i=0;i<data.length;i++) {
        
        
        var HeightMt=data[i].HeightCm/100;
        var Weight=data[i].WeightKg;
        console.log("Height fetched from JSON file: "+HeightMt+" mts");
        console.log("Weight fetched from JSON file: "+Weight+" Kgs");
        if(data[i].HeightCm<=0 || Weight<=0) continue;
        else{
        BMI=(Weight/(HeightMt**2)).toPrecision(3);
        
        if (BMI<=18.4) HealthRisk="Malnutrition Risk";
        else if(BMI >18.4 && BMI <=24.9) HealthRisk="Low Risk";
        else if(BMI>24.9 && BMI<=29.9) HealthRisk="Enhanced Risk";
        else if (BMI>29.9 && BMI<=34.9) HealthRisk="Medium Risk";
        else HealthRisk="High Risk";
        var dataTobeinserted={"Gender":data[i].Gender,"HeightMts":HeightMt,"WeightKgs":Weight,"BMI_Cal":Number(BMI),"Risk":HealthRisk};
        
        
        
       let dataTobeWritten=JSON.stringify(dataTobeinserted,null,2);
       writeObj.push(dataTobeWritten);
       
        console.log("BMI calculated :"+BMI+" Kg/Mt^2 and Health Risk Category is: "+HealthRisk);
    console.log("\n");
    }
}
    
    
    fs.writeFileSync('created.json', writeObj, (err) => {
        if (err) console.log (err);
        
        console.log('Data written to file')

    });
};

app.get('*', (req, res) => {
    BMI(jsonObj);
    res.sendFile(`index.html`, { root: www });
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
