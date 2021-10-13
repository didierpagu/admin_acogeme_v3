import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";


export default function FeaturedInfo() {
  return (
  
    <div className="featured">
      
      <div className="featuredItem">
        <span className="featuredTitle">Hogares</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">32</span>
          <span className="featuredMoneyRate">
           +24%<ArrowUpward  className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Comparado con el mes pasado</span>
      </div>


      <div className="featuredItem">
        <span className="featuredTitle">Familias</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">320</span>
          <span className="featuredMoneyRate">
            +28% <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Comparado con el mes pasado</span>
      </div>
    </div>
   
  );
}
