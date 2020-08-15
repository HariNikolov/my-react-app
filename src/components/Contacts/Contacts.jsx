import React from "react";

export default function GoogleCard() {
  return (
    <div className="container">
      <iframe
        title="googleMap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.0404087303673!2d23.380830815683467!3d42.66049907916787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8662964eec55%3A0xaaaaf7e21484503c!2zVGhlIE1hbGwsINCx0YPQuy4g4oCe0KbQsNGA0LjQs9GA0LDQtNGB0LrQviDRiNC-0YHQteKAnCAxMTXQuCwgMTc4NCDQvC4g0JrRitGA0L4sINCh0L7RhNC40Y8!5e0!3m2!1sbg!2sbg!4v1593875109907!5m2!1sbg!2sbg"
        width="700"
        height="570"
        frameborder="0"
        style={{ border: 0, paddingTop: 70, paddingLeft: 500 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
}
