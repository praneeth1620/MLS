import React from "react";

function MapComponent() {
  return (
    <div style={{ width: "100%", height: "450px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.359850455309!2d80.61241500000001!3d16.485273900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f10036569ce7%3A0x22d85eb0938620c5!2sSri%20Lakshmi%20Narasimha%20Towers!5e1!3m2!1sen!2sin!4v1760460960714!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
}

export default MapComponent;
