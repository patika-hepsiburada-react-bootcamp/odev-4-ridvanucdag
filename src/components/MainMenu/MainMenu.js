import { useContext, useState, useEffect } from "react";
import WeatherDataContext from "../../context/WeatherDataContext";
//moment
import moment from "moment";
// ant design
import { Row, Col, Spin } from "antd";
// styles
import styles from "./styles.module.css";

const iconBase = "http://openweathermap.org/img/wn";

function MainMenu() {
  const { forecasts, value } = useContext(WeatherDataContext);
  const [today, setToday] = useState();

  useEffect(() => {
    setToday(forecasts?.data?.daily?.shift());
  }, [forecasts]);

  const icons = (iconID) => {
    return `${iconBase}/${iconID}@2x.png`;
  };

  return (
    <>
      {today !== undefined ? (
        <>
          <div className={styles.root}>
            <Row className={styles.main}>
              <Col>
                <h1 className={styles.whiteColor}>{value.toUpperCase()}</h1>
              </Col>
              <Col className={styles.minMax}>
                <h5>En düşük sıcaklık</h5>
                <h5>
                  <b>{`${today.temp.min} ºC`}</b>
                </h5>
                <h5>En yüksek sıcaklık</h5>
                <h5>
                  <b>{`${today.temp.max} ºC`}</b>
                </h5>
              </Col>
            </Row>
            <Row className={styles.main} gutter={[8, 8]}>
              <Col span={6}>
                <h3 className={styles.whiteColor}>
                  {moment(today.dt * 1000)
                    .format("dddd")
                    .toUpperCase()}
                </h3>
                <h3 className={styles.whiteColor}>
                  {moment(today.dt * 1000).format("DD/MM/YYYY")}
                </h3>
                <h5 className={styles.whiteColor}>Ort. Rüzgar Hızı;</h5>
                <h5 className={styles.whiteColor}>
                  {`${today.wind_speed} km/h`}
                </h5>
                <h5
                  className={styles.whiteColor}
                >{`Nem: ${today.humidity}%`}</h5>
              </Col>
              <Col span={10} className={styles.icon}>
                <img
                  src={icons(today.weather[0].icon)}
                  alt="icon"
                  className={styles.img}
                />
                <div>{`${today.weather[0].description}`.toUpperCase()}</div>
              </Col>
              <Col span={8} className={styles.temp}>
                <div className={styles.temp_div}>
                  <p className={styles.temp_p}>Sıcaklık</p>
                  <h1 className={styles.temp_h1}>{`${today.temp.day} ºC`}</h1>
                </div>
              </Col>
            </Row>
          </div>
        </>
      ) : (
        <div className={styles.spinRoot}>
          <Spin />
        </div>
      )}
    </>
  );
}

export default MainMenu;
