import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Links from '../Links';
import awsActions from '../../actions/AwsActions';

const defaultModal = {
    show: false,
};

export const maps = {
    vancouverWA: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89268.25669266736!2d-122.70135958272935!3d45.63810803143467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495af63c85914f9%3A0x8456d5112c91e3f3!2sVancouver%2C%20WA!5e0!3m2!1sen!2sus!4v1703314245726!5m2!1sen!2sus",
};

export const info = {
    fullName: "Thanh Do Nguyen",
    jobTitle: "Software Engineer",
    website: "www.domenic-aws.info",
    address: "Vancouver, WA 98662",
    phone: "(360) 784-1696",
    email: "thanhdomenic.nguyen@gmail.com",
};

const defaultState = {
    name: '',
    subject: '',
    email: '',
    content: '',
    phone: '',
};

function Contact() {
    const [message, setMessage] = useState(defaultState);
    const [modal, setModal] = useState(defaultModal);
    const [errorMessage, setErrorMessage] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { address, phone, email } = info;
    const { vancouverWA } = maps;

    function handleChange(event) {
        const { id, value } = event.target;
        setMessage((values) => ({
            ...values,
            [id]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true);

        if (message.phone && !isValidPhoneNumber(message.phone)) {
            setErrorMessage("Please enter a valid phone number");
            setIsSubmitting(false);
            return;
        }

        awsActions.sendMessage(message)
            .then(() => {
                setMessage(defaultState);
                setErrorMessage();
                setModal({ show: true, content: "The message sent successfully!!!" });
            })
            .catch(() => {
                setModal({ show: true, content: "The message sent failed!!!" });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    }

    function handleClose() {
        setModal(defaultModal);
    }

    function isValidPhoneNumber(phone) {
        return /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})(?:[ ]?(?:#|x)(\d+))?$/.test(phone);
    }

    function renderModal() {
        return (
            <Modal show={modal.show} onHide={handleClose} animation={false}>
                <Modal.Header>
                    <Modal.Title>Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modal.content}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <section className="paralax-mf footer-paralax bg-image sect-mt4 route">
            <div className="overlay-mf"></div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contact-mf">
                            <div id="contact" className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="title-box-2">
                                            <h5 className="title-left">Send A Message</h5>
                                        </div>
                                        <div>
                                            <form
                                                onSubmit={(e) => handleSubmit(e)}
                                                className="contactForm"
                                            >
                                                <div id="sendmessage">
                                                    Your message has been sent. Thank you!
                                                </div>
                                                <div id="errormessage"></div>
                                                <div className="row">
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <label>Name</label>
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                className="form-control"
                                                                id="name"
                                                                placeholder="Please enter your name"
                                                                data-rule="minlen:4"
                                                                data-msg="Please enter at least 4 chars"
                                                                required
                                                                value={message.name}
                                                                onChange={handleChange}
                                                            />
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <label>Email</label>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                name="email"
                                                                id="email"
                                                                placeholder="Please enter your  Email"
                                                                data-rule="email"
                                                                data-msg="Please enter a valid email"
                                                                required
                                                                value={message.email}
                                                                onChange={handleChange}
                                                            />
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <label>Phone Number (optional)</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="phone"
                                                                id="phone"
                                                                placeholder="Please enter your number"
                                                                // required
                                                                value={message.phone}
                                                                onChange={handleChange}
                                                            />
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <label>Subject</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="subject"
                                                                id="subject"
                                                                placeholder="Please enter Subject"
                                                                data-rule="minlen:4"
                                                                data-msg="Please enter at least 8 chars of subject"
                                                                required
                                                                value={message.subject}
                                                                onChange={handleChange}
                                                            />
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <label>Your Message</label>
                                                            <textarea
                                                                className="form-control"
                                                                name="content"
                                                                id="content"
                                                                rows="5"
                                                                data-rule="required"
                                                                data-msg="Please write something for us"
                                                                placeholder="Message"
                                                                required
                                                                value={message.content}
                                                                onChange={handleChange}
                                                            ></textarea>
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 submit-btn">
                                                    {errorMessage &&
                                                        <div className="error-message">{errorMessage}</div>}
                                                    <button
                                                        type="submit"
                                                        className="btn-shutter-out-horizontal"
                                                        disabled={isSubmitting}
                                                    >
                                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="title-box-2 pt-4 pt-md-0">
                                            <h5 className="title-left">Get in Touch</h5>
                                        </div>
                                        <div className="more-info">
                                            <p className="lead">
                                                Whether you want to get in touch, talk about a project
                                                collaboration, or just say hi, I'd love to hear from
                                                you.
                                                <br/>
                                                Simply fill the from and send me an email.
                                            </p>
                                            <iframe className="map-iframe" title="Miu Map" src={vancouverWA}></iframe>
                                            <ul className="list-ico">
                                                <li><span className="ion-ios-location"></span> {address}</li>
                                                <li><span className="ion-ios-telephone"></span>{phone}</li>
                                                <li><span className="ion-email"></span>{email}</li>
                                            </ul>
                                        </div>
                                        <Links/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="copyright-box">
                                © 2023 Thanh Do Nguyen All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {renderModal()}
        </section>
    );
}

export default Contact;
