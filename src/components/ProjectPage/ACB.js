import React, { Component } from 'react'

import ProjectPage from './ProjectPage';

import render from './../../img/acb/ACB Render Black.png';
import schematic from './../../img/acb/ACB top level.PNG';
import blank from './../../img/acb/ACB Blank Side.jpg';
import assembled from './../../img/acb/ACB Top.jpg';
import location from './../../img/acb/location.jpg';

export class ACB extends Component {
    render() {
        return (
            <ProjectPage
            title="Accumulator Control Board"
            images={[
                {image: render,
                description:"Altium rendering of the PCB after completing the layout"},
                {image: schematic,
                description:"Top level schematic for all LV and HV circuits located on the board (6 total)"},
                {image: blank,
                description:"Board after arriving from PCB vendor, ready for assembly"},
                {image: assembled,
                description:"Board after completing the soldering of all components to the PCB, and mounted to Kevlar plate in the battery pack"},
                {image: location,
                description:"Location of board within the vehicles HV battery pack"}]}
            description="The Accumulator Control Board, ACB for short, is a board that interfaces between the BMS and the rest of the vehicles control systems, and implements safety circuitry needed to ensure the battery pack is safe. The board allows for PWM control of the battery cooling fans, decreasing power usage under light loads, and also implements shutdown circuitry in the case that a ground fault occurs, or the BMS has a fault. Finally, the board implements the precharge circuitry necessary for safely charging up the tractive system capacitors."
            />
        )
    }
}

export default ACB
