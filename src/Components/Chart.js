import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            chartData : props.chartData
        }
    }

    static defaultProps = {
        displayTitle : true,
        displayLegend : true,
        legendPosition : 'right',
        location : 'city'
    }
    render() {
        return (
            <div className="container chart">
                <h3>My Chart Page</h3>
                <Bar
                    data={this.state.chartData}
                    options={{
                        title : {
                            display : this.props.displayTitle,
                            text : 'Performance details of ' + this.props.location + ' using chart',
                            fontsize : 25
                        },
                        lagend : {
                            display : this.props.displayLegend,
                            position : this.props.legendPosition,
                        },
                        maintainAspectRatio: false
                    }}
                />
            </div>
        )
    }
}

export default Chart
