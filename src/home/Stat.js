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
                <p>Comfirmed Deaths: {this.state.deceased}</p>
            </div>

        );
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/summary.csv')
        .then((data) => {
            return data.text();
        }).then((rawData)=>{
            // console.log(rawData);
            let dataArry = rawData.split("\n");
            // console.table(dataArry);
            this.setState({
                infected: dataArry[0].split(",")[1],
                deceased: dataArry[2].split(",")[1],
            });
        });

    //     //articles about volunteering

    //     fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=volunteer&api-key=lI4WHMHoiOnZHoJwYyLmqAHuHs4IZZN8")
    //     .then((data)=>{
    //         return data.json();
    //     })
    //     .then((response)=>{
    //         return response.response.docs;
    //     }).then((docs)=>{
    //         // console.log(docs);
    //     });

    //     //most viewed new york times articles

    //     fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=lI4WHMHoiOnZHoJwYyLmqAHuHs4IZZN8")
    //     .then((data)=>{
    //         return data.json();
    //     })
    //     .then((response)=>{
    //         // console.log("stuff to read on the porch",response.results);
    //         return response.results;
    //     });

    //     //books to read topsellers

    //     fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=lI4WHMHoiOnZHoJwYyLmqAHuHs4IZZN8")
    //     .then((data)=>{
    //         return data.json();
    //     })
    //     .then((response)=>{
    //         // console.log("books to read",response.results.books);
    //         return response.results.books;
    //     })


    //     //top stories about home

    //     fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=lI4WHMHoiOnZHoJwYyLmqAHuHs4IZZN8")
    //     .then((data)=>{
    //         return data.json();
    //     })
    //     .then((response)=>{
    //         // console.log("articles to read",response.results);
    //         return response.results;
    //     });

    //     fetch("https://raw.githubusercontent.com/soroushchehresa/450-free-courses/master/README.md")
    //     .then((data)=>{
    //         console.log("free courses", data);
    //         return data.text();
    //     })
    //     .then((response)=>{
    //         let spiltData = response.split("<h2");            
    //         console.log(spiltData);
    //         // console.log(response);
    //     });

    }
}

export default Stat;