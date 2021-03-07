import landMap from '../images/nederland-kaart.png'
import styles from './Styles.module.css';

import UniversityData from '../data/universityData';


const min_latlon = [3.31497114423, 50.803721015]
const max_latlon = [7.09205325687, 53.5104033474]

export const translate_lat = (lat: number) =>{
    const delta_lat = max_latlon[1] - min_latlon[1]
    const rel_position = (max_latlon[1] - lat) / delta_lat
    return (
        rel_position
    );
};

export const translate_lon = (lon: number) =>{
    const delta_lon = max_latlon[0] - min_latlon[0]
    const rel_position = (max_latlon[0] - lon) / delta_lon
    return (
        1- rel_position
    );
};

const Marker = ():void => {
    let img = document.getElementById("mapImg") as HTMLCanvasElement
    let cnvs = document.getElementById("myCanvas") as HTMLCanvasElement

    cnvs.style.position = "absolute";
    cnvs.style.left = img.offsetLeft + "px";
    cnvs.style.top = img.offsetTop + "px";
    cnvs.style.height = img.height + "px";
    cnvs.style.width = img.width + "px";
    let ctx = cnvs.getContext("2d") as CanvasRenderingContext2D;

    for (const uni of UniversityData){
        const rel_lat = translate_lat(uni.latitude)
        const rel_lon = translate_lon(uni.longitude)
        ctx.beginPath();
        ctx.arc(1080 * rel_lon, 1280 * rel_lat,
            uni.value, 0, 2 * Math.PI);
        ctx.lineWidth = 3;
        ctx.stroke();
    };
};



export const Map = () => {

    return (
        <div className={styles.map}>
            <img className={styles.image} src={ landMap } alt="Map of the Netherlands" id="mapImg" />
            <canvas className={styles.canvas} id="myCanvas" height="1280" width="1080" />
            <button className={styles.button_uni} onClick={Marker}>Universiteiten</button>
            <button className={styles.button_kazerne} >Kazernes</button>
        </div>
    );
};

export default Map;