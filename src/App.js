import React, { Component } from 'react';
import './App.css';
import Chart from './Components/Chart'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       chartData : {}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    //we can make ajax call here
    this.setState({
      chartData : {
        labels : ['"A" 26 Aug- 1 Aug', '"B" 2 Aug - 3 Aug', '"C" 4 Aug - 4 Aug', '"D" 5 Aug - 5 Aug'],
        datasets : [{
            label : 'Student Performance per Hr.',
            data : [ 40,10,6,9],
            backgroundColor : [
                'rgba(255,99,132,0.6)',
                'rgba(54,162,235,0.6)',
                'rgba(255,206,86,0.6)',
                'rgba(75,192,192,0.6)',
                'rgba(153,102,255,0.6)',
                'rgba(255,159,64,0.6)',
            ]
        }]
    }
    })
  }

  render(){
    return (
      <div className="App">
        <Chart chartData = {this.state.chartData} location = "NanoTech"/>
      </div>
    );
  }
 
}

export default App;
