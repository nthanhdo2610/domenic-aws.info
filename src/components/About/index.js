import React from "react";
import avatar from "../../img/domenic.jpg";
import StaticData from "../../common/StaticData";
import { info } from "../Contact";

const Skill = ({ id, content, porcentage, value }) => (
    <>
        <span>{content}</span>{" "}
        <span className="pull-right">{porcentage}</span>
        <div className="progress">
            <div
                className="progress-bar"
                role="progressbar"
                style={{ width: porcentage }}
                aria-valuenow={value}
                aria-valuemin="0"
                aria-valuemax="100"
            ></div>
        </div>
    </>
);

class About extends React.Component {
    state = {
        // skills: StaticData.getSkills(),
        // skills1: StaticData.getSkills1(),
        about_me: StaticData.getAboutMe(),
    };

    // renderSkills() {
    //     return (
    //         <div className="row skills">
    //             <div className="col-md-12">
    //                 <div className="title-box-2">
    //                     <h5 className="title title-left">SKILLS</h5>
    //                 </div>
    //                 <div className="row">
    //                     {[this.state.skills, this.state.skills1].map((skillSet, index) => (
    //                         <div key={index} className="col-md-6">
    //                             <div className="skill-mf">
    //                                 {skillSet.map((skill) => (
    //                                     <Skill key={skill.id} {...skill} />
    //                                 ))}
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    render() {
        const { about_me } = this.state;

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
                                                    <img
                                                        src={avatar}
                                                        alt="Domenic's Avatar"
                                                        className="avata"
                                                    />
                                                </div>
                                                <div className="col-md-8">
                                                    {about_me.map((content) => (
                                                        <p className="lead" key={content.id}>
                                                            {content.content}
                                                        </p>
                                                    ))}
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
                                        <a
                                            className="btn-shutter-out-horizontal  stroke smoothscroll js-scroll"
                                            href="#contact"
                                            role="button"
                                        >
                                            Contact Me
                                        </a>
                                        <a
                                            className="btn-shutter-out-horizontal "
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://docs.google.com/document/d/1N7JcBJ87yaMn9oR4YoczUgeafqWACU1t/view"
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
