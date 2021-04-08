import React, {Component} from 'react';
import {Row,Container,ListGroup,Col,InputGroup,FormControl,Button} from 'react-bootstrap';
class App extends Component{
   constructor(props){
     super(props);
     this.state={
       list :[],
       Input:""
     }
    }

     update(value){
       this.setState({
         Input:value
       });
     }

     add(value)
     {
       if(this.state.Input!=="")
       {
         const Input={
         id:Math.random(),
         value:this.state.Input
         };
         const list=[...this.state.list];
         list.push(Input);
         this.setState({
           list,
           Input:""
         });
       }
     }

     delete(key)
     {
       const list=[...this.state.list];
       const updatelist=list.filter(item=>item.id!==key);
       this.setState({
         list:updatelist
       });
     }
render(){
  return (
    <Container> 
          <Row style={{ 
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center", 
                  fontSize: '3rem', 
                  fontWeight: 'bolder', 
                }} 
                >TODO LIST 
            </Row> 
           <hr/> 
          <Row> 
          <Col md={{ span: 5, offset: 4 }}> 
          <InputGroup className="mb-3"> 
          <FormControl 
            placeholder="add item . . . "
            size="lg"
            value = {this.state.userInput} 
            onChange = {item => this.update(item.target.value)} 
            aria-label="add something"
            aria-describedby="basic-addon2"
          /> 
          <InputGroup.Append> 
            <Button 
              variant="dark"
              size="lg"
              onClick = {()=>this.add()} 
              > 
              ADD 
            </Button> 
          </InputGroup.Append> 
        </InputGroup> 
  
     </Col> 
   </Row> 
   <Row> 
     <Col md={{ span: 5, offset: 4 }}> 
        <ListGroup> 
         {this.state.list.map(item => {return( 
  
            <ListGroup.Item variant="dark" action  
              onClick = { () => this.delete(item.id) }> 
              {item.value} 
            </ListGroup.Item> 
  
         )})} 
        </ListGroup> 
     </Col> 
   </Row> 
     </Container> 
    ); 
}
}

export default App;
