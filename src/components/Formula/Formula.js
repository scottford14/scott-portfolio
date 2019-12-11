import React, { Component } from 'react'
import './Formula.css';
import Projects from '../Projects/Projects';

export class Formula extends Component {
    render() {
        return (
            <div className="formula-container">
                <div className="intro-paragraph-container">
                    <p className="intro-paragraph">
                        Welcome to my portfolio.  Outlined below are some of the projects I have worked on while on MAC Formula Electric - a fully student run team working to design and manufacture a fully electric, formula 1 style racecar.
                    </p>
                </div>
                <div className="formula-name-container">
                    <h1 className="formula-name">MAC Formula Electric <span className="projects-title">My Projects</span></h1>
                </div>
                <Projects />
                
            </div>
        )
    }
}

export default Formula
