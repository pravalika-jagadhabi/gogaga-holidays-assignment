
import FlightCard from './FlightCard'

export default function FlightList() {
  return (
    <div style={{display:'flex', gap:16}}>
      <div style={{flex:1}}>
        <h3>Departure</h3>
        <FlightCard />
        <FlightCard />
      </div>
      <div style={{flex:1}}>
        <h3>Return</h3>
        <FlightCard />
        <FlightCard />
      </div>
    </div>
  )
}
