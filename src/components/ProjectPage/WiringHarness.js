import React, { Component } from 'react'

import ProjectPage from './ProjectPage';

import mainpic from './../../img/Wiring Harness/Wiring Harness.jpg';

export class WiringHarness extends Component {
    render() {
        return (
            <ProjectPage
            title="Low Voltage and High Voltage Vehicle Wiring"
            images={[
                {image:mainpic,
                description:""}]}
            description=""
            />
        )
    }
}

export default WiringHarness
