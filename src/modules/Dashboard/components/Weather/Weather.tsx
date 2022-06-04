import { Grid, Icon, TextField } from "@mui/material";
import Reacts, { useState } from "react";
import { useGetTodos } from "../../hooks/useGetTodos";
import { useGetWeather } from "../../hooks/useGetWeather";
import styles from "./Weather.module.scss";

export const Weather: React.FC = () => {

    const weatherQuery = useGetWeather();
    const [isCelcius, setCelcius] = useState(true);

    return <>
        <Grid container rowSpacing={2} justifyContent="center" className={styles.grid0} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>

            <Grid item xs={2}>
                <h1 onClick={() => setCelcius(prev => !prev)}> {isCelcius ? `${weatherQuery.data?.current.feelslike_c} \u2103` : `${weatherQuery.data?.current.feelslike_f} \u2109`}</h1>
            </Grid>
            <Grid item xs={10} className={styles.grid2} >
                <img src={weatherQuery.data?.current.condition.icon} />
                <h3>{weatherQuery.data?.current.condition.text}</h3>
            </Grid>

            <Grid item xs={12} className={styles.grid3} >
                <h1>{weatherQuery.data?.location.name}</h1>
            </Grid>


        </Grid>
    </>
}