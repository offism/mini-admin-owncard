import React  from "react"

class Counter extends React.Component{
   constructor(props){
    super(props)
    this.state = {
        count: 0
    } 

    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
}

    inc() {
        this.setState({count: this.state.count + 1})
    }
    dec() {
        this.setState({count: this.state.count - 1})
    }
    render(){
        return (
            <>
          <h3>Count: {this.state.count}</h3>
          <button onClick={this.state.inc} className="btn btn-success">INC</button>
          <button onClick={this.state.dec} className="btn btn-danger">DEC</button>
        </>
    )
}
}


export default Counter