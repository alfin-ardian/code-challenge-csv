import {ShapeSet} from 'lincd/lib/collections/ShapeSet';
import {Storage} from "lincd/lib/utils/Storage";
import {useEffect, useState} from 'react';
import {House} from '../shapes/House';
import './Home.scss';
import * as style from './Home.scss.json';
import Spinner from '../components/Spinner';
import {HousePreview} from "../components/HousePreview";
import {packageName} from "../package";
import {Server} from "lincd-server-utils/lib/utils/Server";

const FILTER_DATA = ['All', 'New'];

export default function Home() {
    let [houses, setHouses] = useState<ShapeSet<House>>(new ShapeSet());
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        Storage.promiseUpdated().then(() => {
            let houses = House.getLocalInstances();
            setHouses(houses);
        })
    }, [])

    const handleFilterClick = (selectedFilter: string) => {
        setFilter(selectedFilter);
    };

    const importData = () => {
        Server.call(packageName, 'importData', {}).then((newHouses) => {
            setHouses(houses.concat(newHouses));
        });
    }

    return (
        <div className={style.Home}>
            <button onClick={importData}>Import data</button>
            <div className={style.container}>
                <div className={style.headlineSection}>
                    <div>
                        <h3 className={style.headline}>Featured Properties</h3>
                    </div>
                    <div className={style.filter}>
                        {FILTER_DATA.map((option) => (
                            <button
                                key={option}
                                className={option === filter ? style.active : ''}
                                onClick={() => handleFilterClick(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
                {!houses && (
                    <Spinner/>
                )}
                <div className={style.housesContainer}>
                    {houses.map((house: House) => (
                        <HousePreview of={house} key={house.namedNode.uri}/>
                    ))}
                </div>
            </div>
        </div>
      )
    ;
}
