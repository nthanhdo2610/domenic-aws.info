import React from "react";

import avatar from "../../img/domenic.jpg";

import StaticData from '../../common/StaticData';
import {info} from '../Contact';

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            skills: StaticData.getSkills(),
            skills1: StaticData.getSkills1(),
            about_me: StaticData.getAboutMe()
        };
    }

    renderSkills() {
        <div className="row skills">
            <div className="col-md-12">
                <div className="title-box-2">
                    <h5 className="title title-left">SKILLS</h5>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="skill-mf">
                            {this.state.skills.map(skill => {
                                return (
                                    <React.Fragment key={skill.id}>
                                        <span>{skill.content}</span>{" "}
                                        <span className="pull-right">
                      {skill.porcentage}
                    </span>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{width: skill.porcentage}}
                                                aria-valuenow={skill.value}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skill-mf">
                            {this.state.skills1.map(skill => {
                                return (
                                    <React.Fragment key={skill.id}>
                                        <span>{skill.content}</span>{" "}
                                        <span className="pull-right">
                      {skill.porcentage}
                    </span>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{width: skill.porcentage}}
                                                aria-valuenow={skill.value}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    render() {
        return (
            <section id="about" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row about-me">
                                    <div className="col-md-12">
                                        <div className="pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title title-left">About Me</h5>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 text-center">
                                                    <img src={avatar} alt="" className="avata"/>
                                                </div>
                                                <div className="col-md-8">
                                                    {this.state.about_me.map(content => {
                                                        return (
                                                            <p className="lead" key={content.id}>
                                                                {content.content}
                                                            </p>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row profile">
                                    <div className="col-md-12">
                                        <div className="title-box-2">
                                            <h5 className="title title-left">PROFILE</h5>
                                        </div>
                                        <ul className="info-list">
                                            <li>
                                                <strong>Full name:</strong>
                                                <span>{info.fullName}</span>
                                            </li>
                                            <li>
                                                <strong>Job title:</strong>
                                                <span>{info.jobTitle}</span>
                                            </li>
                                            <li>
                                                <strong>Website:</strong>
                                                <span>{info.website}</span>
                                            </li>
                                            <li>
                                                <strong>Email:</strong>
                                                <span>{info.email}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="button-holder">
                                        <a className="btn-shutter-out-horizontal  stroke smoothscroll js-scroll"
                                           href="#contact"
                                           role="button"
                                        >
                                            Contact Me
                                        </a>
                                        <a className="btn-shutter-out-horizontal "
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           href="https://docs.google.com/document/d/1P3T-YTWPhC7H3rzdqou3lA9TXfn9VK74/view"
                                        >
                                            Download Resume
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
