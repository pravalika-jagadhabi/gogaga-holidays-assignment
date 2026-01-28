
export default function HeaderTabs() {
  return (
    <div style={{display:'flex', gap:16, marginBottom:16}}>
      <button>Indian Holidays</button>
      <button>International Holidays</button>
      <button style={{marginLeft:'auto'}}>With Flights</button>
      <button>Without Flights</button>
    </div>
  )
}
