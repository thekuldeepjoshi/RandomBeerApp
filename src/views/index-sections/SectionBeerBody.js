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
 * 
 * Edited by Kuldeep Joshi
 * Date: 01/09/2020
 */
import React, { useState, useEffect } from 'react';


// reactstrap components
import {
        Button,
        Container,
        Row,
        Col,
        Card
        } from "reactstrap";
// core components

import {  Link} from "react-router-dom";

 

function SectionBeerBody() {
  const Breweries = "Y";
  const APikey = "a5c1b917e7ba62dcd79f434ed73bc72d";
  const URL = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beer/`;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(0);
  const [ItemsStyle, setItemsStyle] = useState([]);
  const [ItemsBreweries, setItemsbreweries] = useState([]);

   useEffect( () => {
    fetchData() // call to fetch data from give url and store into set items
  }, [])
  
  const fetchData = async () => {
           fetch(URL+'random/?withBreweries='+Breweries+'&hasLabels=Y&key='+APikey) //fetch data from URL
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data); //store data from result into itmes 
          setItemsStyle(result.data.style); 
          setItemsbreweries(result.data.breweries[0]);
          
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    }

  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) { //display loading while trying to fetch data from api.
      return <div>  <Container>
              <Row>
                  <Col className="ml-auto mr-auto" lg="4">
                  <div className="name text-center">
                      <h4 className="title">
                          Loading...
                      </h4>
        </div> </Col></Row> </Container></div>;
  } else {
    return (
            

                <div className="main">
          <Container>
       <div className="section javascript-components">
            <div className="bg-light clearfix ">
                <div className="pull-left">
                    <h2 className='m-0 ml-4'>Know your Beer</h2>
                </div>
                <Button
                    className="btn-round pull-right m-2 mr-4"
                    color="danger"
                    outline
                    type="button"
                    onClick={fetchData} >
                    <i className="nc-icon nc-atom" />  Brew New 
                </Button>
            </div>
      </div>
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
                              className="img-circle img-responsive "
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
                      <div className="row">
                          <Link  to={{pathname:`/Brewries/${ItemsBreweries.id}`,state:{beerid:items.id}}} className="btn-link btn btn-primary">{ItemsBreweries.name}</Link>                    
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