import React, { Component } from 'react';
import Bikescore from '../components/Bikescore';

class AboutBS extends Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate(prevProps){
  }

  // componentDidMount(){
  //   const place = {
  //     street: this.state.street,
  //     city: this.state.city,
  //     state: this.state.state,
  //     zip: this.state.zip
  //   };
  //
  //   axios.post('/bikescore', place)
  //   .then(response => {
  //     this.setState({
  //       bikescoreObj: response.data
  //     });
  //   })
  //   .catch((error) => {
  //       console.log(error);
  //   });
  // }

  //Bikescore page rendering
  render(){
    return (
      <section className="container">
        <div>
        { this.props.bikescoreObj && this.props.bikescoreObj.bike ?
          (
            <div>
            <Bikescore score={this.props.bikescoreObj.bike.score} description={this.props.bikescoreObj.bike.description} />
            </div>
          ) :
          (
            <div>
              <p>Loading...</p>
            </div>
          )
        }
        </div>
      </section>
    );
  }
}

export default AboutBS;
