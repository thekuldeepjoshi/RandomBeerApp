/*!

* Created by Kuldeep Joshi
* Date: 06/09/2020
* 
*/
import React from "react";


// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionNavbars from "views/index-sections/SectionNavbars.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionBreweryBody from "views/breweries-sections/SectionBreweryBody.js";
import SectionBack from "views/breweries-sections/SectionBack.js";

function Brewries() {

  return (
   <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
      <SectionBack /> 
        <SectionBreweryBody /> 
        <SectionDark />
        <DemoFooter />
      </div>
    </>
  );
}

export default Brewries;
