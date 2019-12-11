import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import render from './../../img/bcm/BCM Render.png';
import bcmblank from './../../img/bcm/BCM Blank.jpg';
import enclosure from './../../img/bcm/BCM Enclosure Render.png';
import schematic from './../../img/bcm/BCM Top Level Schematic.png';
import assembly from './../../img/bcm/BCM Front Assembled.jpg';


export class BCM extends Component {
    render() {
        return (
            <ProjectPage
            title="Body Control Module"
            images={[
                {image: render,
                description:"Altium Rendering of the PCB after completing the layout"},
                {image: bcmblank,
                description:""},
                {image: enclosure,
                description:""},
                {image: schematic,
                description:""},
                {image: assembly,
                description:""}]}
            description="This board is the main board that controls all systems of the car, appart from the motors. The board has 2 microcontrollers for parellel processing of vehicle data, such as pedal position, steering angle, etc. The board also houses safety circuitry for the car, as well as circuitry for the dashboard display, and for CAN communication, the protocal used for communication between the vehicles various systems. The board is located in the front end of the car, in an aluminum enclosure with a fan for active cooling of the power electronics."
            />
        )
    }
}

export default BCM
