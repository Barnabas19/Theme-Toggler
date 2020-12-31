import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super (props);
    this.brightTheme = this.brightTheme.bind(this);
    this.darkTheme = this.darkTheme.bind(this);
    this.updateThemeButtons = this.updateThemeButtons.bind(this);

    this.state = {
      theme: "bright",
      themeButtons: []
    }
  }
  brightTheme(){
    const light = "bright";
    this.setState({theme: light});
  }
  darkTheme(){
    const noLight = "dark";
    this.setState({theme: noLight});
  }
  updateThemeButtons(){
    const updatedThemeButtons = ["Dark theme", "Bright theme"];
    this.setState({themeButtons: updatedThemeButtons});
  }
  render(){
    return (
      <div className="wrapper">
        <div id={this.state.theme} className="screen">
          <h1 className="heading">React.js</h1>
          <article>
            React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library
            for building user interfaces or UI components. It is maintained by Facebook and a community 
            of individual developers and companies. React can be used as a base in the development 
            pf single-page or mobile applications. However, React is only concerned with the state management 
            and rendering that state to the DOM, so creating React applications usually requires use of 
            additional libraries for routing. React Router is an example of such a library.
            <br/><br/>
            React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library
            for building user interfaces or UI components. It is maintained by Facebook and a community 
            of individual developers and companies. React can be used as a base in the development 
            pf single-page or mobile applications. However, React is only concerned with the state management 
            and rendering that state to the DOM, so creating React applications usually requires use of 
            additional libraries for routing. React Router is an example of such a library.
          </article>
        </div>
        <section className="buttons-section">
          <button onClick={()=>{this.updateThemeButtons()}} className="change-theme">Change theme</button>
          {
            (()=>{
              if(this.state.themeButtons[0]){
                if(this.state.themeButtons[1]){
                  return (
                    <div className="theme-buttons">
                      <button
                      onClick={()=>{this.darkTheme()}}
                      className="dark-theme"
                      >{this.state.themeButtons[0]}</button>

                      <button
                      onClick={()=>{this.brightTheme()}}
                      className="bright-theme"
                      >{this.state.themeButtons[1]}</button>
                    </div>
                  )
                }
              }
            })()
          }
        </section>
      </div>
    )
  }
}

export default App;