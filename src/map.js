 import React from 'react';
 import '../styles/Home.css';
 import Navbar from '../components/Navbar';
 import '../styles/nav.css';

function BeachMap(searchTerm) {


  const mapUrl = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=beaches+in+${searchTerm}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

  return (
    <div>
      <iframe class="screen" title="map" width="600" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={mapUrl}/>
    </div>
    
   
  );
}

export default BeachMap;

//link to map page
