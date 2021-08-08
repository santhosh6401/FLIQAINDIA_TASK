import './App.css';
import img1 from '../Images/1.png';
import img2 from '../Images/2.svg';
import img3 from '../Images/3.svg';
import img4 from '../Images/4.svg';
import img5 from '../Images/5.svg';
import img6 from '../Images/6.svg';
import larr from '../Images/leftarrow.png';
import rarr from '../Images/rightarrow.png';

function Nav() {
  return (
    <div className="Nav row">
      <div className="col-sm-1 text-center arrow">
      <img src={larr} alt={'pic'}/>
      </div>
      <div className="col-sm-2 first text-center"><img src={img1} alt={'pic'} className="img"/>
      <p>Wedding Photography</p></div>
      <div className="col-sm-1 text-center"><img src={img2} alt={'pic'} className="img"/>
      <br/>
      <p>Beach Photography</p></div>
      <div className="col-sm-2 text-center"><img src={img3} alt={'pic'} className="img"/>
      <br/>
      <p>Pre Wedding shoot</p></div>
      <div className="col-sm-1 text-center"><img src={img4} alt={'pic'} className="img"/>
      <br/>
      <p>Portfolio Shoot</p></div>
      <div className="col-sm-2 text-center" ><img src={img5} alt={'pic'} className="img"/>
      <br/>
      <p>Drone Services</p></div>
      <div className="col-sm-2 text-center"><img src={img6} alt={'pic'} className="img" />
      <br/>
      <p>Graphic design</p></div>
      <div className="col-sm-0.5 text-center arrow">
      <img src={rarr} alt={'pic'}/>
      </div>
    
    </div>
  );
}

export default Nav;