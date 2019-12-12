import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import render from './../../img/bcm/BCM Render.png';
import bcmblank from './../../img/bcm/BCM Blank.jpg';
import enclosure from './../../img/bcm/BCM Enclosure Render.png';
import schematic from './../../img/bcm/BCM Top Level Schematic.png';
import assembly from './../../img/bcm/BCM Front Assembled.jpg';
import realpic from './../../img/bcm/BCM Enclosure Real.jpg';
import incar from './../../img/bcm/BCM Location Render.jpg';

export class BCM extends Component {
    render() {
        return (
            <ProjectPage
            title="Body Control Module"
            images={[
                {image: render,
                description:"Altium rendering of the PCB after completing the layout"},
                {image: schematic,
                description:"Top level schematic for all LV and HV circuits located on the board (17 total)"},
                {image: bcmblank,
                description:"Board after arriving from PCB vendor, ready for assembly"},
                {image: assembly,
                description:"Board after completing the soldering of all components to the PCB"},
                {image: enclosure,
                description:"Rendering of the enclosure assembly, showing the cooling fan, HV connector, reset button, and aluminum enclosure"},
                {image: incar,
                description:"Rendering of the enclosure assembly in its location within the vehicle"},
                {image: realpic,
                description:"Final assembly, prior to mounting in the vehicle"}]}
            description="The Body Control Module is the main board that controls all systems of the car. The board has 2 microcontrollers for parellel processing of vehicle data, such as pedal position, steering angle, PWM fan control, etc. The board also houses safety circuitry for the car, as well as circuitry for the dashboard display, and for CAN communication, the protocal used for communication between the vehicles various systems. The board also contains voltage regulation circuitry, so the microcontrollers can have stable power to reduce potential errors. The board is located in the front end of the car, in an aluminum enclosure with a fan for active cooling of the power electronics."
            />
        )
    }
}

export default BCM
