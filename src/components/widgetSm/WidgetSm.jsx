import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Nuevos Hogares</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="/santa_ana.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Hogar Cabecitas</span>
            <span className="widgetSmUserTitle">Bogota</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="/mandalay.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Paraiso</span>
            <span className="widgetSmUserTitle">Bogota/Chapinero</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Hogar Feliz</span>
            <span className="widgetSmUserTitle">Bogota/Kennedy</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Hogares y Sonrisas</span>
            <span className="widgetSmUserTitle">Bogota/Kennedy</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Holgar Comodo</span>
            <span className="widgetSmUserTitle">Bogota/Suba</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
