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
  Container
} from "reactstrap";
import { useHistory,useLocation  } from 'react-router-dom';

function SectionBack() {
const history = useHistory();
const location = useLocation();
function goBackHandle(){
    history.goBack();
}
  return (
    <>
      <div className="section javascript-components">
        <Container>
            <div className="bg-light clearfix ">
             <Button
                    className="btn-round pull-left m-3 ml-4"
                    color="danger"
                    outline
                    type="button"
                    onClick={goBackHandle} >
                    <i className="nc-icon nc-minimal-left" /><i className="nc-icon nc-minimal-left" />   Back 
                </Button>
                <div className="pull-right">
                    <h2 className=' m-2 mr-4'>Know your Brewery</h2>
                </div>
            </div>
          
        </Container>
      </div>
    </>
  );
}

export default SectionBack;
