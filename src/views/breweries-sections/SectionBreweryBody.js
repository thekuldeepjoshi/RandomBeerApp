/*!

* Created by Kuldeep Joshi
* Date: 06/09/2020
*/
import React, { useState,useEffect,Component } from 'react';


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

function SectionBreweryBody() {
  const APikey = "a5c1b917e7ba62dcd79f434ed73bc72d";
  const Brewery_id = "TMc6H2";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [ItemsStyle, setItemsStyle] = useState([]);
  const [ItemsBreweries, setItemsbreweries] = useState([]);
  
  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/'+'http://api.brewerydb.com/v2/brewery/' + Brewery_id + '/?key='+APikey)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
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
                      
                  </h4>
              </div>
              
               <div className="name text-center text-info">
                  <h6 className="title">
                      
                  </h6>
              </div>
                  </Card>
                  </Col>

                  <Col className="ml-auto mr-auto text-justify" md="6">
                  <div class="row">
                     
                  <a href="" class="btn-link btn btn-primary"> </a> 
                  
                  </div>
                  <br/>

                  <div className="name ">
                      <p>
                          
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
export default SectionBreweryBody;
