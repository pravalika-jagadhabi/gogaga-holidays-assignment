
export default function SearchFilters() {
  return (
    <div style={{background:'#fff', padding:16, marginBottom:16, display:'flex', gap:8}}>
      <input placeholder="Destination" />
      <input type="date" />
      <input placeholder="Passengers" />
      <select><option>3★</option><option>4★</option><option>5★</option></select>
      <button>Search</button>
    </div>
  )
}
