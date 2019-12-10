import React, { Component } from 'react'

import ProjectPage from './ProjectPage';

import mainpic from './../../img/acb/ACB Render Black.png';

export class ACB extends Component {
    render() {
        return (
            <ProjectPage
            title="Accumulator Control Board"
            images={[
                {image: mainpic,
                description:""}]}
            description=""
            />
        )
    }
}

export default ACB
