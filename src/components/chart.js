import React, {Component} from 'react'
import {View, Dimensions, TouchableWithoutFeedback,ScrollView,ListView } from 'react-native'
import {Font} from 'expo';
import Svg, {
    G,
    Line,
    Path,
    Rect,
    Shape,
    Text,
    Group,
    Ellipse,
    Polyline 
} from 'react-native-svg'

import { LinearGradient } from 'expo';

// d3 lib
import {
    scaleBand,
    scaleLinear
} from 'd3-scale'

import {
    max,
    ticks
} from 'd3-array'

import {
    line
} from 'd3-shape'

import {
    path
} from 'd3-path'

const colours = {
    black: '#24c6dc',
    blue: '#24c6dc',
    brown: '#24c6dc'
}
const data = [
    {frequency: 600, letter: 'Oct 01'},
    {frequency: 1400, letter: 'Oct 02' },
    {frequency: 900, letter: 'Oct 03'},    
    {frequency: 10, letter: 'Oct 04' },
    {frequency: 300, letter: 'Oct 05' },
    {frequency: 2000, letter: 'Oct 06' },
    {frequency: 15, letter: 'Oct 07'},
    
]

class Chart extends Component {
    render() {
        return (
            <View > 
                <BarChart />
            </View>
        )
    }
}

class BarChart extends Component {
    state = {
        barColour: data.map(()=>colours.blue)
    }

    toggleHighlight(i) {
        this.setState({
            barColour: [
                ...this.state.barColour.slice(0, i),
                this.state.barColour[i] === colours.blue ? colours.blue : colours.blue,
                ...this.state.barColour.slice(i+1)
            ]
        })
    }

    render() {
        const screen = Dimensions.get('window')
        const width = screen.width 
        const margin = {top: screen.height/8, right: 0, bottom: screen.height/3.2, left: 0}
        const height = (screen.height - margin.top - margin.bottom) / 2
        const x = scaleBand()
            .rangeRound([0, width])
            .padding(0.2)
            .domain(data.map(d => d.letter))
            const maxFrequency = max(data, d => d.frequency)
        const y = scaleLinear()
            .rangeRound([height, 0])
            .domain([0, maxFrequency])

        const firstLetterX = x(data[0].letter)
        const secondLetterX = x(data[1].letter)
        const lastLetterX = x(data[data.length - 1].letter)
        const labelDx = (secondLetterX - firstLetterX) / 2

        const bottomAxis = [firstLetterX - labelDx, lastLetterX + labelDx]
        const bottomAxisD = line()
            .x(d => d + labelDx + 5)
            .y(() => 0)
            (bottomAxis)

        const leftAxis = ticks(0, maxFrequency, 2)
        const leftAxisD = line()
            .x(() => bottomAxis[0] + labelDx)
            .y(d => y(d) - height)
            (leftAxis)

        const notch = 5
        const labelDistance = 9

        return(
            <Svg width={width} height={height} viewBox={"0 0 "+ width/1.12 + " " + height*1.25 }>
                <G translate={10 + "," + margin.top}>
                    <G translate={"0," + height/1.4}>
                        <G key={-1}>
                            <Line stroke={"#24c6dc"} y1={-20} y2={-20} x1={notch+10} x2={labelDistance+width-28} key="-1"/>
                            {
                                data.map((d, i) => (
                                    <G key={i + 1} translate={x(d.letter) + labelDx + ",0"}>                                   
                                        <G x={-20}>
                                            <Text fontFamily='Montserrat' style={{textAlign : 'left',fontSize : 2}} fill={colours.black} x={-7} y={labelDistance - 25}>{d.letter}</Text>
                                        </G>
                                    </G>
                                ))
                            }
                        </G>
                        <G key={-2}>
                            <Path stroke={'transparent'} d={leftAxisD} key="-1"/>
                            {
                                leftAxis.map((d, i) => (
                                    <G key={i + 1} translate={"-2," + (y(d) - height - 21)}>
                                        <Line stroke={colours.black} x1={notch} x2={notch}/>
                                        <Text fill={colours.black} x={-labelDistance-20} y={-notch-5}>{d}</Text>
                                    </G>
                                ))
                            }
                        </G>
                        {
                            data.map((d, i) => (
                                    <Rect key={i}
                                          style={{borderRadius : 20}}
                                          x={x(d.letter) + 15}
                                          y={y(d.frequency) - 20 - height}
                                          width={x.bandwidth() / 1.3 - 25}
                                          height={height - 0 - y(d.frequency) }
                                          fill={this.state.barColour[i]}>
                                    </Rect>    
                            ))
                        }
                    </G>
                </G>
            </Svg>
        )
    }
}

export default Chart