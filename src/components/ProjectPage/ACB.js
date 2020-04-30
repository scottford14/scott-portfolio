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
            title="Accumulator Control Board - 2018/2019 Season"
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
            description="The Accumulator Control Board, ACB for short, is a board that I designed for the 2019 car to interface between our Elithion decentralized BMS (Battery Management System) and the rest of the vehicle's control systems. I also designed safety circuitry needed to ensure the battery pack is safe, detecting various fault conditions from the BMS (cell overvoltage, overtemperature, etc) as well as ground faults from the insulation monitoring device in the battery pack. The board also allows for PWM control of the battery cooling fans, decreasing low voltage power usage under light loads. Finally, I designed the precharge circuitry necessary for safely charging up the tractive system capacitors, considering factors such as desired precharge time, power dissipation, maximum current, etc. After receiving the board from the manufacturer, I soldered all components and tested the board's functionality to ensure no errors were made, and also built the wiring harnesses to connect the BMS and the ACB, as well as the other necessary LV connections in the battery pack."
            />
        )
    }
}

export default ACB
