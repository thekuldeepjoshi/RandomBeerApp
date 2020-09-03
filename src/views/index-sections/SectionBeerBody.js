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
} from "reactstrap";
// core components

function SectionBeerBody() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [ItemsStyle, setItemsStyle] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/'+'http://api.brewerydb.com/v2/beer/random/?withBreweries=Y&hasLabels=Y&key=a5c1b917e7ba62dcd79f434ed73bc72d')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
          setItemsStyle(result.data.style);
                
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
      <ul><Container>
           <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-responsive"
                src={require("assets/img/default-avatar.png")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                {items.nameDisplay} <br />
                       
              </h4>
              <h6 className="description"> 
  

        
        
        </h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                 {ItemsStyle.description} 
              </p>
              <br />
               
            </Col>
          </Row>
        </Container>
      
      </ul>
      </div>
    );
  }
}

export default SectionBeerBody;
