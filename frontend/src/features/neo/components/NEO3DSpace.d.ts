interface AsteroidData {
    x: number;
    y: number;
    z: number;
    size: number;
    isHazardous: boolean;
    name: string;
}
interface NEO3DSpaceProps {
    neoData: AsteroidData[];
}
/**
 * NEO3DSpace component
 * Displays Earth + asteroids in a 3D scene with postprocessing and controls
 */
export declare const NEO3DSpace: ({ neoData }: NEO3DSpaceProps) => import("react/jsx-runtime").JSX.Element;
export {};
