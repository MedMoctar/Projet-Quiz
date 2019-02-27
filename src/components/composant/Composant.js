import React, { Component } from 'react'
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';


export default class Composant extends Component {
  render() {
    return (
     
      <div>
        <Button id="b1" 
          type="button">
          Consulter votre score
        </Button>
        <UncontrolledPopover placement="bottom" 
          target="b1">
          <PopoverHeader>Score</PopoverHeader>
          <PopoverBody>
            <table>
              <tr>
                <td>Score : </td> <td> 50</td>
              </tr>
              <tr>
                <td>Classement : </td> <td> 50</td>
              </tr>
            </table>
          </PopoverBody>
        </UncontrolledPopover>
      </div>


    );
  }
}
