import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData,productData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />     
      <Chart data={userData} data2={productData} title="Crecimiento de Hogares" title2="Crecimiento Familias"  grid dataKey="Active User"  dataKey2="User"/>    
      <div className="homeWidgets"> 
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
