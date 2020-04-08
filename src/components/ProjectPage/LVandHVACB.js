import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import upclose from './../../img/lvandhvacb/so-close.JPG';
import hvrender from './../../img/lvandhvacb/HV ACB Render.PNG';
import lvrender from './../../img/lvandhvacb/LV ACB Render.PNG';
import concept from './../../img/lvandhvacb/concept.jpg';
import close from './../../img/lvandhvacb/close.JPG';
import iso from './../../img/lvandhvacb/iso.JPG';
import top from './../../img/lvandhvacb/top.JPG';
import front from './../../img/lvandhvacb/front.JPG';


export class LVandHVACB extends Component {
    render() {
        return (
            <ProjectPage
            title="Battery Pack Packaging and PCB Development - 2019/2020 Season"
            images={[
                {image: upclose,
                description:"Close up render of the HV Accumulator Control Board."},
                {image: hvrender,
                description:"Altium rendering of the HV Accumulator Control Board PCB after I completed the layout"},
                {image: lvrender,
                description:"Altium rendering of the LV Accumulator Control Board PCB after I completed the layout"},
                {image: concept,
                description:"Concept drawing I made for the planned packaging inside of the battery pack"},
                {image: close,
                description:"Close up render of the LV Accumulator Control Board, in the accumulator PCB plate assembly."},
                {image: iso,
                description:"Render of the accumulator PCB plate assembly, including the LV and HV Accumulator Control Boards."},
                {image: top,
                description:"Render of the accumulator PCB plate assembly, including the LV and HV Accumulator Control Boards."},
                {image: front,
                description:"Render of the accumulator PCB plate assembly, including the LV and HV Accumulator Control Boards."}]}
            description="For the 2020 car, we chose to change our BMS from an Elithion decentralized BMS to and Orion BMS 2, which is a centralized unit. This choice was made due to many issues encountered with packaging and troubleshooting of the decentralized units cell tap boards, with the centralized unit offering simpler wiring, at a cost of a much larger footprint. Due to the tight constraints within the battery pack, the board that interfaces between the BMS and the rest of the cars control systems had to be rethought from the previous year. To begin the design process, I worked with the vehicle controls captain to determine all of the necessary I/O for the BMS, in order to determine what signals were needed for the shutdown circuitry mandated in the rules, which signals were needed for different vehicles states (charging vs discharging), etc. After documenting all the I/O, I began to create the Altium schematics for the board, as well as designed the needed circuits on the board. This included a latching shutdown circuit that would disable the vehicles tractive system if any BMS faults were to occur, or faults in the insulation between HV and LV chassis ground. Circuitry was also implemented for the accumulator indicator circuit, which uses an isolated voltage sense IC paired with a comparator to light up an LED on the HV battery pack to indicate when high voltage is present at the terminals. Before proceeding to board layout, packaging needed to be sorted out with the lead battery designer, in order to find out where the board could fit once the BMS, Insulation Monitoring Device, and current sensor were placed in the assembly. I developed an initial concept drawing for my planned placement, which involved splitting the board into two separate PCBs that would go on either side of the BMS. I ended up calling these two boards the LV Accumulator Control Board and HV Accumulator Control Board. Through multiple iterations, we were able to make everything fit within the assembly. Renders courtesy of Jared Cox – Mechanical Team Captain, CAD assembly courtesy of Jessie Boundreau – Battery Pack Team Captain."
            />
        )
    }
}

export default LVandHVACB
