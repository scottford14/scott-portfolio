import React, { Component } from 'react'

import ProjectPage from './ProjectPage';

import mainpic from './../../img/shutdown/Shutdown Circuit.png'

export class Shutdown extends Component {
    render() {
        return (
            <ProjectPage
            title="Shutdown Circuit"
            images={[
                {image: mainpic,
                description:""}]}
            description=""
            />
        )
    }
}

export default Shutdown
