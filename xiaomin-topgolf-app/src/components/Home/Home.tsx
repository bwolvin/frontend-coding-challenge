import { useCallback, useEffect, useState } from "react";
import Select from "react-select";

import styles from "./Home.module.scss";
import LocationCard from "./components/LocationCard/LocationCard";

const API_URL = "http://localhost:3000/api/locations";
type LocationFeatures = {
  floors: number;
  amenities: string[];
  virtual_tour_link: string;
};
export type Location = {
  name: string;
  img: string;
  site_id: number;
  venue_type: string;
  timezone: string;
  details: string;
  features: LocationFeatures;
};
const Home = () => {
  const [initialized, setInitialized] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Location>();
  const [data, setData] = useState<any[]>();

  const getLocationList = useCallback(() => {
    const locationList: { label: string; value: Location }[] = [];

    fetch(API_URL, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        for (const location in data.response) {
          locationList.push({
            label: data.response[location].name,
            value: data.response[location],
          });
        }
        setData(locationList);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setInitialized(true));
  }, []);

  useEffect(() => {
    getLocationList();
  }, [getLocationList]);

  return (
    <div className={styles["home-container"]} data-testid={"home"}>
      {initialized && (
        <Select
          className={styles["home-dropdown"]}
          placeholder={"Select Your Location"}
          getOptionValue={(option) => option.value.site_id.toString()}
          getOptionLabel={(option) => option.value.name}
          onChange={(option) => {
            setSelectedOption(option.value);
          }}
          options={data}
        />
      )}
      {selectedOption && (
        <div className={styles["home-location-card"]}>
          <LocationCard item={selectedOption} />
        </div>
      )}
    </div>
  );
};

export default Home;
