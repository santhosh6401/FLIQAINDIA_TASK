import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../Images/Fliqa-India.png';
import MetaTags from 'react-meta-tags';
function App(){
  window.location.href="../index.js";
  
}

function Logo(){
 
  const element = (
    <div>
     <MetaTags>
     <title>Logo Design</title>
     <meta id="meta-description" name="description" content="Make your own brand identity through us. Start your design now." />
     </MetaTags>
     <div className="head row">
      <div className="col-sm-2"><img src={logo} alt={'hello'} style={{height:30, paddingLeft:28}}/></div>
      <div className="col-sm-1">
    
  
    <button onClick={App}>HOME</button>
    
    </div>
      <div className="col-sm-1">ABOUT US</div>
      <div className="col-sm-1">SERIVICES</div>
      <div className="col-sm-1">FREELANCERS</div>
      <div className="col-sm-1">BLOG</div>
      <div className="col-sm-1">TUTORIALS</div>
      <div className="col-sm-1">CONTACT US</div>
      <div className="col-sm-2 text-center signin"><button className="text-white">Log in/Sign up</button></div>
      <div className="col-sm-1"></div>
    </div>
      <div className="row">
          <div className="col-sm-1">

          </div>
          <div className="col-sm-10">
          <div className="logo text-center">
          <p ><b>What is Logo design ?</b></p>
<p>Logo tells the story of your brand. It enhances your brand image and speaks to your audience.
Logo design makes the first impression for you in your working environment. Gives your
business and brand an identity and projects a professional image. It creates memorable visuals
to the outside world and build loyalty.
</p>
      </div>

          </div>
          <div className="col-sm-1">

          </div>
          <div className="foot container-fluid">
              <div className="row">
                  <div className="col-sm-4"></div>
                  <div className="col-sm-2 but text-center "><button className="text-white">Start Designing</button></div>
                  <div className="col-sm-2 but1 text-center "><button className="text-white">Get a quote</button></div>
                  <div className="col-sm-4"></div>
              </div>
          <div style={{height:200}}>

          </div>

          </div>

      </div>
      </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}


function Header() {
  return (
    <div className="head row text-center">
      <div className="col-sm-2"><img src={logo} alt={'hello'} style={{height:30, paddingLeft:28}}/></div>

      <div className="col-sm-1">
        HOME
        
        </div>
      <div className="col-sm-1">ABOUT US</div>
      <div className="col-sm-1">
    
  
      <button onClick={Logo}>SERVICES</button>
      
      </div>
      <div className="col-sm-1">FREELANCERS</div>
      <div className="col-sm-1">BLOG</div>
      <div className="col-sm-1">TUTORIALS</div>
      <div className="col-sm-1">CONTACT US</div>
      
    
      <div className="col-sm-3"></div>
    
    </div>
  );
}

export default Header;