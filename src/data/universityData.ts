export interface MapChartInfo {
    label: string;
    color: string;
    value: number;
    latitude: number;
    longitude: number;
}

export const UniversityData: MapChartInfo[] =[{
    label: "Universiteit Utrecht",
    color: "green",
    value: 39,
    latitude: 52.0928,
    longitude: 5.104480,
}, {
    label: "Universiteit Groningen",
    color: "Yellow",
    value: 15,
    latitude: 53.21917,
    longitude: 6.56667,
}];

 export default UniversityData