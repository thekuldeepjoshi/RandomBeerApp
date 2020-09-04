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
* Date: 02/09/2020
* 
*/
import React from "react";
// react plugin used to create datetimepicker


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

function SectionJavaScript() {
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="section javascript-components">
        <Container>
            <div class="bg-light clearfix ">
                <div className="pull-left">
                    <h2 className='m-0 ml-4'>Know your Beer</h2>
                </div>
                <Button
                    className="btn-round pull-right m-2 mr-4"
                    color="danger"
                    outline
                    type="button"
                    onClick={toggleModal} >
                    <i class="nc-icon nc-atom" />  Brew New 
                </Button>
            </div>
          
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionJavaScript;
