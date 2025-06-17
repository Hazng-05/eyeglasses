import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import ContactSectionTitle from './ContactSectionTitle';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <ContactSectionTitle title="CHU HAZNG" />
        <ContactInfo />
      </div>

      <div className="contact-form">
        <ContactSectionTitle title="CONTACT US" />
        <ContactForm />
        <ContactMap />
      </div>
    </div>
  );
};

export default Contact;
