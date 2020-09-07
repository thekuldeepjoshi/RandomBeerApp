/*!

* Created by Kuldeep Joshi
* Date: 06/09/2020
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
import { useHistory } from 'react-router-dom'
// core components
function BackButton({ children }) {
  let history = useHistory()
  return (
    <button type="button" onClick={() => history.goBack()}>
      {children}
    </button>
  )
}
function SectionBack() {

  return (
    <>
      <div className="section javascript-components">
        <Container>
            <div class="bg-light clearfix ">
             <Button
                    className="btn-round pull-left m-3 ml-4"
                    color="danger"
                    outline
                    type="button"
                    onClick={BackButton} >
                    <i class="nc-icon nc-minimal-left" /><i class="nc-icon nc-minimal-left" />   Back 
                </Button>
                <div className="pull-right">
                    <h2 className=' m-2 mr-4'>Know your Brewery</h2>
                </div>
            </div>
          
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionBack;
