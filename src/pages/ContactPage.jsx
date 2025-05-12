import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  const locationUrl = 'https://map.naver.com/p/entry/place/38345004?c=12.43,0,0,0,dh';

  return (
    <div className="contact-container">
      <h2>연락처</h2>
      <ContactInfo />
      <button
        style={{
          backgroundColor: '#2c3e50',
          color: 'white',
          padding: '0.5rem',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onClick={() => window.open(locationUrl, '_blank')}
      >
        위치 보기
      </button>
      <ContactForm />
    </div>
  );
};

export default ContactPage; 