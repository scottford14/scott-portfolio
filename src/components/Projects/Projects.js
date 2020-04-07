import React, { Component } from 'react'
import './Projects.css';
import ProjectLink from '../ProjectLink/ProjectLink';

import bcmthumbnail from './../../img/bcm/BCM Render.png';
import acbthumbnail from './../../img/acb/ACB Render Black.png';
import shutdownthumbnail from './../../img/shutdown/Shutdown Circuit.png';
import wiringharnessthumbnail from './../../img/Wiring Harness/Wiring Harness.jpg';
import hvcontrolboardthumbnail from './../../img/HV Control Board/HV Control Board Render Black.PNG';
import bcmbreakoutthumbnail from './../../img/BCM Breakout/SW Render.png';

export class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects:[
                {name:"HV Control Board",
                type:"modelling",
                thumbnail:hvcontrolboardthumbnail,
                link:"/hvcontrolboard"},
                {name:"Vehicle Wiring Design",
                type:"modelling",
                thumbnail:wiringharnessthumbnail,
                link:"/wiringharness"},
                {name:"Body Control Module Breakout Board",
                type:"modelling",
                thumbnail:bcmbreakoutthumbnail,
                link:"/bodycontrolmodulebreakoutboard"},
                {name:"Shutdown Circuit Design",
                type:"modelling",
                thumbnail:shutdownthumbnail,
                link:"/shutdowncircuit"},
                {name:"Body Control Module PCB",
                type:"modelling",
                thumbnail:bcmthumbnail,
                link:"/bodycontrolmodule"},
                {name:"Accumulator Control Board",
                type:"modelling",
                thumbnail:acbthumbnail,
                link:"/accumulatorcontrolboard"}
            ]
        }
    }


    render() {
        return (
            <div className="projects-container">
                {this.state.projects.map(project => (
                    <div className="projects-project-link-container">
                    <ProjectLink 
                    project={project}
                    />
                </div>))}   
                {window.innerWidth > 800 ? 
                <>
                <div className="projects-project-link-container"/>
                <div className="projects-project-link-container"></div>
                </>
                :
                <div/>}
            </div>
        )
    }
}

export default Projects
