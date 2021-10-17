//context
import { useContext } from "react";
import WeatherDataContext from "../../context/WeatherDataContext";
//cities
import cities from "../../constant/CitiesOfTurkey.json";
// ant design
import { Select } from "antd";

const { Option } = Select;

function SelectMenu() {
  const { value, setValue } = useContext(WeatherDataContext);

  return (
    <Select
      defaultValue={value}
      onChange={(value) => setValue(value)}
      style={{ width: "200px", maxWidth: "200px", margin: "0px auto 20px" }}
    >
      {cities.map((city) => (
        <Option value={city.name} key={city.id}>
          {city.name}
        </Option>
      ))}
    </Select>
  );
}

export default SelectMenu;
