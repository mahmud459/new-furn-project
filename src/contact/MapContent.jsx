import React from 'react';



function MapComponent() {
  return (
    <div>
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.6059676668!2d29.01217945!3d41.0053215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1747415544102!5m2!1str!2str"
          width="100%"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
    </div>
    
  );
}

export default MapComponent;
