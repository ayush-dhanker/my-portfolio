import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        let formErrors = {};

        if (!formData.name.trim()) {
            formErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email is invalid';
        }

        if (!formData.subject.trim()) {
            formErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            formErrors.message = 'Message is required';
        }

        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            setIsSubmitting(true);

            // Form will be submitted to FormSubmit.co
            // We'll let the form submit naturally after validation
            const form = e.target;
            form.submit();
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="text-align-c">Get In Touch</h2>
                <p className="section-subtitle">I'd love to hear from you. Let's work together!</p>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Contact Information</h3>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-details">
                                <h4>Email</h4>
                                <p>ayush.dhanker.work@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-details">
                                <h4>Location</h4>
                                <p>Magdeburg, Germany</p>
                            </div>
                        </div>



                        <div className="social-links">
                            <a href="https://github.com/ayush-dhanker" className="social-link">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/ayush-dhanker/" className="social-link">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://medium.com/@ayush.dhanker" className="social-link">
                                <i className="fab fa-medium"></i>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        {isSubmitted ? (
                            <div className="success-message">
                                <i className="fas fa-check-circle"></i>
                                <h3>Thank You!</h3>
                                <p>Your message has been sent successfully. I'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form
                                className="contact-form"
                                onSubmit={handleSubmit}
                                action="https://formsubmit.co/fdc8a158d0fd911bb00941dd00f567ac"
                                method="POST"
                            >
                                {/* FormSubmit configuration */}
                                <input type="hidden" name="_subject" value="New contact form submission from Portfolio!" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_next" value="http://localhost:3000/" />

                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? 'error' : ''}
                                        required
                                    />
                                    {errors.name && <span className="error-text">{errors.name}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? 'error' : ''}
                                        required
                                    />
                                    {errors.email && <span className="error-text">{errors.email}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={errors.subject ? 'error' : ''}
                                        required
                                    />
                                    {errors.subject && <span className="error-text">{errors.subject}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={errors.message ? 'error' : ''}
                                        required
                                    ></textarea>
                                    {errors.message && <span className="error-text">{errors.message}</span>}
                                </div>

                                <button
                                    type="submit"
                                    className="submit-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <i className="fas fa-spinner fa-spin"></i> Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;