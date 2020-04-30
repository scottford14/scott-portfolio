import React, { Component } from 'react'

import ProjectPage from './ProjectPage';

import render from './../../img/HV Control Board/HV Control Board Render Black.PNG';
import drawing from './../../img/HV Control Board/HV Control Board in drawing.PNG';
import top from './../../img/HV Control Board/HV Control Board top.jpg';
import side from './../../img/HV Control Board/HV Control Board side.jpg';

export class HVControlBoard extends Component {
    render() {
        return (
            <ProjectPage
            title="HV Control Board"
            images={[
                {image: render,
                description:"Altium rendering of the PCB after I completed the layout"},
                {image: drawing,
                description:"Board location shown in full vehicle assembly, see red highlight. Drawing done by Jared Cox - Mechanical Team Captain"},
                {image: top,
                description:"Board after completing the soldering of all components to the PCB"},
                {image: side,
                description:"Board after completing the soldering of all components to the PCB"}]}
            description="The HV Control Board is a PCB housing 3 core circuits: the tractive system discharge circuit, tractive system active light, and HV measuring point resistors. These circuits are the only HV circuits outside of the battery pack, due to limited space inside of the battery pack to meet packaging requirements. I designed each circuit to work with our vehicle's 600V tractive system, ensuring that all components were rated for the maximum bus voltage. I formulated the circuits from direct requirements from the SAE rules, such as the discharge circuit requiring the tractive system capacitors to discharge below 60V in under 5 seconds. I had to find out what discharge resistance to use that could handle the maximum power dissipation during the discharge event, given the bus capacitance and the bus voltage, while meeting the timing requirement. Once all circuits were designed and tested with an HV power supply, I proceeded with the board layout, ensuring HV spacing requirements were met, traces were an adequate width for maximum current, as well as ensuring it would work in terms of packaging."
            />
        )
    }
}

export default HVControlBoard
