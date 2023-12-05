import React from "react";

class Userclass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count:0,
            userInfo:{
                name:"",
                loction:"",
                url:""
            }
        }
    }
   
        async componentDidMount(){
        // console.log(this.props.name+"Child mount")
        
          const data=await fetch("https://api.github.com/users/abhiedward001");
          const jsonData=await data.json();
          this.setState({
            userInfo:jsonData
          })
          console.log(jsonData);

    }
    render() {
        // console.log(this.props.name+"render of child");
        return (
            <>
                <div className="user-detail">
                    <button className="aboutButton" onClick={
                        () => { this.setState({ count: this.state.count + 1 }) }}>
                        {this.state.count}
                    </button>
                    <img src={this.state.userInfo.avatar_url}></img>
                    <h1>{this.state.userInfo.name}</h1>
                    <h2>Hometown:- {this.props.city}</h2>
                    <h3>Juspay</h3>
                </div>
            </>
        )
    }
}

export default Userclass;