import { useEffect, useRef } from "react"
import { Circle } from 'progressbar.js'
type props = {
    grade: number
}
const config = {
    color: "white",
    strokeWidth: 0,
    trailWidth: 10,
    trailColor: "#525252",
    easing: "easeInOut",
    from: { color: "#0FB800", width: 1 },
    to: { color: "#0FB800", width: 10 },
    text: {
      value: '0',
      className: 'progress-text',
      style: {
        color: '#525252',
        position: 'absolute',
        top: '45%',
        left: '42%',
        padding: 0,
        margin: 0,
        transform: null
      },
    },
    step: (state: any, shape:any) => {
        shape.path.setAttribute("stroke", state.color);
        shape.path.setAttribute("stroke-width", state.width);
        shape.setText(Math.round(shape.value() * 100) + ' %');
      }
}

export default function DriverGrade ({grade}:props) {

    const figure = useRef(null)
    let progressGrade:any = null

    useEffect(() => {
       console.log(figure.current)
       if (figure.current != null && progressGrade == null) {
        progressGrade = new Circle(figure.current, config)
        progressGrade.animate(0.84, {duration: 1000})
        console.log('gay')
       }
    },[])

    return <figure className="driver-grade">
      <div ref={figure}></div>
      <div className="container-info">
        <span>{grade.toFixed(2)}</span>
        <span>conduccion general</span>
      </div>
    </figure>
}