import React, { FunctionComponent } from 'react';

export const SiteMap: FunctionComponent = () => {
  return (
    <div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4096.345205529819!2d-80.49558135374859!3d43.44904599487497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf539d7463687%3A0xe91913367d55290a!2sGoogle!5e0!3m2!1sen!2sca!4v1656518686232!5m2!1sen!2sca" 
        width="600" 
        height="450" 
        frameBorder="0"
        style={{ border:0 }} 
        allowFullScreen
        aria-hidden="false" 
      />
    </div>
  );
}
