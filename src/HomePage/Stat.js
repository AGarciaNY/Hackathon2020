import React, { Component } from 'react';

class Stat extends Component{
    constructor(props){
        super(props);
        this.state={
            infected: 0,
            deceased: 0,
        };
    }

    render(){
        let stat={
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column"

        }

        return(
            <div style={stat}>
                <p>Comfirmed Cases: {this.state.infected}</p>
                <p>Comfirmed Deathes: {this.state.deceased}</p>
            </div>

        );
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/summary.csv')
        .then((data) => {
            return data.text();
        }).then((rawData)=>{
            console.log(rawData);
            let dataArry = rawData.split("\n");
            console.table(dataArry);
            this.setState({
                infected: dataArry[0].split(",")[1],
                deceased: dataArry[2].split(",")[1],
            });
        });

    }
}

export default Stat;