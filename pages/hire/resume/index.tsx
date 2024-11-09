import React from "react";

function Resume() {
  return (
    <div
      style={
        {
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          width:'100%',
        }
      }
    >
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vSsw8ZtTwbbqJ9atIv5nXdlKkxV3OFcfvG2sudlzcduTpRC1pH-6sof_-te4EYPpcG-M_BjkqrToLtu/pub?embedded=true"
        width="100%"
        height="1000px"
        style={{ border: "none" }}
        // style="border: none;"
      ></iframe>
    </div>
  );
}

export default Resume;
