import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import render from './../../img/bcm/BCM Render.png';
import bcmblank from './../../img/bcm/BCM Blank.jpg';
import enclosure from './../../img/bcm/BCM Enclosure Render.png';
import schematic from './../../img/bcm/BCM Top Level Schematic.png';
import assembly from './../../img/bcm/BCM Front Assembled.jpg';
import realpic from './../../img/bcm/BCM Enclosure Real.jpg';
import incar from './../../img/bcm/BCM Location Render.jpg';
import poweredon from './../../img/bcm/BCM Side View.jpg';

export class BCM extends Component {
    render() {
        return (
            <ProjectPage
            title="Body Control Module - 2018/2019 Season"
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
                description:"Final assembly, prior to mounting in the vehicle"},
                {image: poweredon,
                description:"Another angle of the final assembly, powered on for testing"}]}
            description="The Body Control Module is the main board that controlled all systems of the 2019 car. The board has two 16 bit microcontrollers for parallel processing of vehicle data, such as pedal position, steering angle, PWM fan control, etc. I also designed the safety circuitry on the board, as well as circuitry for the dashboard display, and for CAN communication, the protocol used for communication between the vehicles various systems. The safety circuitry consists of analog plausibility checks for the pedal sensors to detect fault conditions (shorted to ground or power, or open circuit condition) as well as a circuit which will disable the vehicles tractive system if hard braking occurs while power is delivered to the motors. The board also contains voltage regulation circuitry, so the microcontrollers can have stable power to reduce potential errors. The board is located in the front end of the car, in an aluminum enclosure with a fan for active cooling of the power electronics. I chose this location to minimize the length of conductors needed for the wiring harness, as well as the tight packaging in the back of the chassis where the battery pack and inverters are located. After receiving the board from the manufacturer, I soldered all components to the board, and tested all of the analog circuits to ensure proper operation. For testing of the microcontroller related circuitry, such as pedal sensor data reading, cooling control, and CAN communication, I worked directly with the controls captain (Harjot Nijjar) to verify operation and test the C-code used to control the microcontrollers."
            />
        )
    }
}

export default BCM
