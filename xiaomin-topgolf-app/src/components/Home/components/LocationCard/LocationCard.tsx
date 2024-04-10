import React, { useCallback } from "react";
import type { Location } from "../../Home";
import styles from "./LocationCard.module.scss";

export type LocationCardProps = {
  item: Location;
};

const LocationCard = ({ item }: LocationCardProps): React.ReactElement => {
  const { name, img, venue_type, details, features } = item;

  const handleButtonClicked = useCallback(() => {
    window.open("https://topgolf.com/us/");
  }, []);

  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-inner"]}>
        <div className={styles["image-container"]}>
          <img src={img} alt="location image" height={275} />
        </div>
        <div className={styles["info-container"]}>
          <h3 className={styles["info-name"]}>{name}</h3>
          <p className={styles["info-details"]}>{details}</p>
          <p
            className={styles["info-features"]}
          >{`Venue Type: ${venue_type}`}</p>
          <p
            className={styles["info-features"]}
          >{`Features: ${features.amenities}`}</p>
          <p
            className={styles["info-features"]}
          >{`Floor: ${features.floors}`}</p>
          <a href={features.virtual_tour_link} rel="noopener noreferrer">
            Virtual Tour Link
          </a>
        </div>
        <div className={styles["buttons-container"]} data-margin-bottom={false}>
          <button onClick={handleButtonClicked}>Book a Bay</button>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
