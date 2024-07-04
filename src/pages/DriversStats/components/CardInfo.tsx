type props = {
    value:number,
    imgSrc: string,
    infoLabel:string,
    className: string
}

export default function CardInfo ({value, imgSrc, infoLabel, className}: props) {

    return <article className={`card-info ${className}`}>
        <div>
            <span>{value}</span>
            <img src={imgSrc} alt={infoLabel} />
        </div>
        <span>{infoLabel}</span>
    </article>
}