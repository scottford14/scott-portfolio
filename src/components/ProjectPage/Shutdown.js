import React, { Component } from 'react'

import ProjectPage from './ProjectPage';

import vehicleshutdown from './../../img/shutdown/Shutdown Circuit.png'
import chargershutdown from './../../img/shutdown/Charging Shutdown.png'
import testing from './../../img/shutdown/testbench.jpg'

export class Shutdown extends Component {
    render() {
        return (
            <ProjectPage
            title="Shutdown Circuity"
            images={[
                {image: vehicleshutdown,
                description:""},
                {image: chargershutdown,
                description:""},
                {image: testing,
                description:""}]}
            description=""
            />
        )
    }
}

export default Shutdown
