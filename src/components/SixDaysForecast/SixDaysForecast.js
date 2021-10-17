//context
import { useContext } from "react";
import WeatherDataContext from "../../context/WeatherDataContext";
// ant design
import { Row, Col, Spin } from "antd";
// styles
import styles from "./styles.module.css";
//moment
import moment from "moment";

const iconBase = "http://openweathermap.org/img/wn";

function SixDaysForecast() {
  const { forecasts } = useContext(WeatherDataContext);

  // remove today from daily array
  if (forecasts.data?.daily.length > 7) {
    forecasts.data?.daily.shift();
    forecasts.data?.daily.pop();
  }

  const icons = (iconID) => {
    return `${iconBase}/${iconID}@2x.png`;
  };
  

  return (
    <div className={styles.root}>
      <Row gutter={[8, 8]} className={styles.main}>
        {forecasts.length === 0 && (
          <div style={{ display: "flex", margin: "auto" }}>
            <Spin />
          </div>
        )}
        {forecasts.data?.daily.map((day) => (
          <Col
            span={4}
            xs={24}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            key={day?.dt}
            className={styles.col}
          >
            <h3 className={styles.sixDays_h3}>
              {moment(day?.dt * 1000).format("dddd")}
            </h3>
            <img
              src={icons(day?.weather[0].icon)}
              alt=""
              width={75}
              height={75}
            />
            <p className={styles.sixDays_p}>{`${day.temp.day} ºC`}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default SixDaysForecast;
