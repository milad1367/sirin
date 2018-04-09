import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import CircleSteps from './CircleSteps';
import {PropTypes} from 'prop-types';

const ShowCircles = ({steps}) => (
    <CircleSteps steps= {steps} />
    
)

ShowCircles.propTypes = {
    steps: PropTypes.number.isRequired
  }
export default ShowCircles 