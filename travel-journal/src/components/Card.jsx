import { HiLocationMarker } from 'react-icons/hi'

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} className="card--image" />
      <div className="card--info">
        <div className='card--location'>
            <HiLocationMarker />
            <p>{props.location}</p>
            <a href={props.googleMapsUrl} target='_blank' >View on Google Maps</a>
        </div>
        <h2 className='card--title'>{props.title}</h2>
        <h3 className='card--date'>
          {props.startDate} - {props.endDate}
        </h3>
        <p className='card--description'>{props.description}</p>
      </div>
    </div>
  );
}
