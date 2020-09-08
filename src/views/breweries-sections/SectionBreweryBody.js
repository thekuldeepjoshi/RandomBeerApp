/*!
 
 * Created by Kuldeep Joshi
 * Date: 06/09/2020
 */
import React, { useState, useEffect } from 'react';
import IndexNavbar from "components/Navbars/breweryNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
// index sections
import SectionDark from "views/index-sections/SectionDark.js";
import SectionBack from "views/breweries-sections/SectionBack.js";
// reactstrap components
import {
Container,
        Row,
        Col,
        Card
        } from "reactstrap";
import {  useParams } from 'react-router-dom';
        function SectionBreweryBody()  {
        useEffect(() => {
        fetchbrewery()

                }, [])
                const {id} = useParams(); //get Id from SectionBeerBody to fetch brewery id
                const APikey = "a5c1b917e7ba62dcd79f434ed73bc72d";
                const [error, setError] = useState(null);
                const [isLoaded, setIsLoaded] = useState(false);
                const [items, setItems] = useState({
        images:{} // store image url as part of items
        });
                const fetchbrewery = () => {
        fetch(`https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/brewery/${id}/?key=` + APikey)
                .then(res => res.json())
                .then(
                        (result) => {
                setIsLoaded(true);
                        setItems(result.data);
                },
                        (error) => {
                setIsLoaded(true);
                        setError(error);
                }
                )
        }
        if (error) {
        return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
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
                <>
<IndexNavbar />
<div className="main">
    <SectionBack /> 
    <div className="main">
        <Container>
            <Row>
                <Col className="ml-auto mr-auto" lg="4">
                <Card className="card-register ml-auto mr-auto mt-0">
                <div className="owner">
                    <img
                        alt="..."
                        className="img-responsive"
                        src={items.images.squareMedium} 
                        />
                </div>
                </Card>
                </Col>
                <Col className="ml-auto mr-auto text-justify " md="6">

                <h6 className='ml-0 pull-left'>{items.name}</h6>
                <h6 className="pull-right mr-4">ESTD.{items.established}</h6>
                <br/>

                <br/>
                <div className="clearfix ">
                    <p>
                        {items.description}
                    </p>
                </div>
                <div className="row">
                    <h6>
                        <a href={items.website} className="btn-link btn btn-primary" target="_blank">{items.website}</a> 
                    </h6>
                </div>
                </Col>
            </Row>

        </Container>
    </div>
    <SectionDark />
    <DemoFooter />
</div>
</>
);
}
}

export default SectionBreweryBody;
