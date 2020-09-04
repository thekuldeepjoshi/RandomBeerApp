/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
* Edited by Kuldeep Joshi
* Date: 01/09/2020
*/
import React, { useState,useEffect } from 'react';


// reactstrap components
import {
  Button,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
  Card
} from "reactstrap";
// core components

function SectionBeerBody() {
  const Breweries = "Y";
  const APikey = "a5c1b917e7ba62dcd79f434ed73bc72d";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [ItemsStyle, setItemsStyle] = useState([]);
  const [ItemsBreweries, setItemsbreweries] = useState([]);
  
  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/'+'http://api.brewerydb.com/v2/beer/random/?withBreweries='+Breweries+'&hasLabels=Y&key='+APikey)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
          setItemsStyle(result.data.style);
          setItemsbreweries(result.data.breweries[0]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
            
            <div className="main">
      <Container>
          <Row>
              <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto mt-0">
              <div className="name text-center">
                  <h4 className="title">
                      {items.nameDisplay} 
                  </h4>
              </div>
              <br/> <br/><br/>
              <div className="owner">
                  <div className="avatar">
                      <img
                          alt="..."
                          className="img-circle img-responsive"
                          src={require("assets/img/beer.png")}
                          />
                  </div>
              </div>
               <div className="name text-center text-info">
                  <h6 className="title">
                      {ItemsStyle.shortName} 
                  </h6>
              </div>
                  </Card>
                  </Col>

                  <Col className="ml-auto mr-auto text-justify" md="6">
                  <div class="row"><div class="col-md-8">
                     
                  <a href="#pablo" class="btn-link mr-1 btn btn-primary"> {ItemsBreweries.name}</a> 
                  </div>
                  </div>
                  <br/>

                  <div className="name ">
                      <p>
                          {ItemsStyle.description}
                      </p>
                  </div>
                  
                  <br />
                  </Col>
          </Row>
          
        </Container>
      </div>
    );
  }
}
export default SectionBeerBody;
