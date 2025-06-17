import React from 'react';
import './Contact.css';

const ContactMap = () => {
  return (
    <div className="contact-map">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.8419997072667!2d105.97301507590374!3d21.108662580555266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135080ae3d394bd%3A0xa4165c0c2fa0e6fa!2zVMOibiBI4buTbmcgLSBU4burIFPGoW4sIELhuq9jIE5pbmg!5e0!3m2!1svi!2s!4v1718615802390!5m2!1svi!2s"
        width="100%"
        height="350"
        style={{ border: 0, borderRadius: '10px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
