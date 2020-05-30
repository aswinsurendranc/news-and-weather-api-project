covidApi="https://api.covid19api.com/summary";
window.fetch(covidApi)
.then(data=>{
    data.json().then(coviddata=>{
        console.log(coviddata.Global);
        let Global=coviddata.Global;
        document.getElementById("coronaDetails").innerHTML=`
        
                <div>
                    <h4>NewConfirmed:</h4>
                    <span>${Global.NewConfirmed}</span>

                </div>
                <div>
                    <h4>NewDeaths:</h4>
                    <span>${Global.NewDeaths}</span>

                </div>
                <div>
                    <h4>NewRecovered:</h4>
                    <span>${Global.NewRecovered}</span>

                </div>
                <div>
                    <h4>TotalConfirmed:</h4>
                    <span>${Global.TotalConfirmed}</span>

                </div>
                <div>
                    <h4>TotalDeaths:</h4>
                    <span>${Global.TotalDeaths}</span>

                </div>
                <div>
                    <h4>TotalRecovered:</h4>
                    <span>${Global.TotalRecovered}</span>

                </div>


               
        
        
        `
    }).catch(err=>console.log(err));
})
.catch(err=>console.log(err));