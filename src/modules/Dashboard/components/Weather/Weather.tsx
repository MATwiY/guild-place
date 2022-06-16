import { Box, Button, Grid, Icon, TextField as InputBase } from "@mui/material";
import Reacts, { useState } from "react";
import { useGetWeather } from "../../hooks/useGetWeather";
import styles from "./Weather.module.scss";
import { useSearchParams } from "react-router-dom";
import { useSetUrl } from "../../hooks/useSetUrl";

export const Weather: React.FC = () => {
  const [weatherCity, setSearchCity] = useSearchParams();
  const searchCity = weatherCity.get("city") || "Szczecin";

  const weatherQuery = useGetWeather(searchCity);
  const [isCelcius, setCelcius] = useState(true);
  const [isHidden, setHideClass] = useState(true);

  return (
    <>
      <Grid
        container
        rowSpacing={2}
        justifyContent="center"
        className={styles.grid0}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      >
        <Grid item xs={3}>
          <h1 onClick={() => setCelcius((prev) => !prev)}>
            {" "}
            {isCelcius
              ? `${weatherQuery.data?.current.feelslike_c} \u2103`
              : `${weatherQuery.data?.current.feelslike_f} \u2109`}
          </h1>
        </Grid>

        <Grid item xs={9} className={styles.grid2}>
          <img src={weatherQuery.data?.current.condition.icon} />
          <h3>{weatherQuery.data?.current.condition.text}</h3>
        </Grid>

        {/* <Link to={`?city=${weatherCity}`}> */}
        <Grid item xs={12} className={styles.grid3}>
          {isHidden ? (
            <Box
              onClick={() => setHideClass(false)}
              className={styles.cityName}
            >
              <h2>{searchCity}</h2>
            </Box>
          ) : (
            <InputBase
              label={searchCity}
              variant="outlined"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  //const city = ;
                  setSearchCity({
                    city: (event.target as HTMLInputElement).value,
                  });
                  setHideClass(true);
                }
                if (event.keyCode === 27) {
                  setHideClass(true);
                }
              }}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};
