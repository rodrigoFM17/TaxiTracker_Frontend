type props = {
    value: number | string,
    imgSrc: string,
    infoLabel: string,
    className: string
}

export default function CardInfo ({value, imgSrc, infoLabel, className}: props) {

    return <article className={`card-info ${className}`}>
        <div>
            {value !== 'N/A' ? <span>{Math.floor(Number(value))}</span> : <span>N/A</span>}
            <img src={imgSrc} alt={infoLabel} />
        </div>
        <span>{infoLabel}</span>
    </article>
}