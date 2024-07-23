import { useEffect, useState } from 'react';
import { useParams } from 'wouter';
import DriverImage from '../../components/DriverImage/DriverImage';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import './DriverStats.css';
import CardInfo from './components/CardInfo';
import DriverGrade from './components/DriverGrade';
import DriverPlate from './components/DriverPlate';
import RadarChart from './components/RadarChart';
import car from '../../../public/car-side-solid.svg';
import crash from '../../../public/car-burst-solid.svg';
import star from '../../../public/star-solid.svg';
import { get, apiGraphUrl } from "../../services/fetchApi";

export default function DriverStats() {
    const [driverData, setDriverData] = useState<any>(null);
    const [driverStats, setDriverStats] = useState<any>(null);
    const { driverId } = useParams<{ driverId: string }>();

    useEffect(() => {
        const fetchGraphicData = async () => {
            try {
                console.log('driverId:', driverId);
                const response = await get(apiGraphUrl, 'graphics/driver-evaluation/' + driverId);
                setDriverStats(response.data);
            } catch (error) {
                console.error('Error fetching driver data:', error);
            }
        };

        fetchGraphicData();
    }, []);

    useEffect(() => {
        const fetchDriverData = async () => {
            try {
            // "data": {
            //     "driver_id": "be93897c-393c-416f-8361-2088e3078a58",
            //     "name": "Diego",
            //     "last_name": "Gordillo Lopez",
            //     "image": "https://res.cloudinary.com/dip0n3pxv/image/upload/v1721261184/taxitracker/xymfeqqvxyjfmktdvjz8.png",
            //     "average_rating": "N/A",
            //     "unit_code": "KE-2004",
            //     "total_crashes": 0,
            //     "total_travels_per_day": "1.2500"
            // }
                const response = await get(apiGraphUrl, 'drivers/stats/' + driverId);
                setDriverData(response.data);
            } catch (error) {
                console.error('Error fetching driver data:', error);
            }
        }

        fetchDriverData();
    }, []);

    const name = driverData ? `${driverData.name} ${driverData.last_name}` : 'Conductor';

    if (!driverStats) {
        return (
            <section className='driver-stats'>
                <LogoHeader title='conductor' />
                <h2>{name}</h2>
                <div className='loading-container'>
                    <div className='spinner'></div>
                </div>
            </section>
        );
    }

    return (
        <section className='driver-stats'>
            <LogoHeader title='conductor' />
            <h2>{name}</h2>
            <DriverImage name={driverData.name} imageUrl={driverData.image} />
            <DriverGrade grade={driverStats.overall_score} />
            <RadarChart name={name} driverData={driverStats} />
            <DriverPlate plate={driverData.unit_code} />
            <CardInfo value={driverData.total_travels_per_day} imgSrc={car} infoLabel='Viajes por día' className='travels-per-day' />
            <CardInfo value={driverData.total_crashes} imgSrc={crash} infoLabel='Choques totales' className='crashes' />
            <CardInfo value={driverData.average_rating} imgSrc={star} infoLabel='Valoración de los usuario' className='stars' />
        </section>
    );
}