import { useState } from "react";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import './UserValoration.css'
import starImage from '../../../public/star-solid.svg'
import emptyStar from '../../../public/empty-start.svg'

type numberBoolean = 0|1
export default function UserValoration () {

    const [stars, setStars] = useState<numberBoolean[]>([0, 0, 0, 0, 0])

    const valorate = (valoration: number) => {
        const auxStars:numberBoolean[] = []
        for (let i=1; i <= 5; i++){
            if(i<= valoration){
                auxStars.push(1)
            } else {
                auxStars.push(0)
            }
        }
        setStars(auxStars)
    }
    return <>
        <LogoHeader title="Valoracion de Servicio" />
        <section className="valoration">
            <p>
            agradecemos que deje su valoracion sobre el rendimiento 
            del conductor de esta unidad, su seguridad y comfort es 
            la prioridad  de los taxis que cuentan con <span>TaxiTracker</span>
            </p>
            
            <div>
            {
                stars.map((star, index) => (
                <button   
                onClick={() => valorate(index + 1)}
                key={"star" + index}>
                    {
                        star ?
                        <img src={starImage} alt="" />
                        :
                        <img src={emptyStar} alt="" />
                    }
                </button>
                ))
            }
            </div>

        </section>
    </>
}