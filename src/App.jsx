
import Sidebar from './components/Sidebar'
import HeaderTabs from './components/HeaderTabs'
import SearchFilters from './components/SearchFilters'
import RouteInfo from './components/RouteInfo'
import FareSummary from './components/FareSummary'
import FlightList from './components/FlightList'

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <HeaderTabs />
        <SearchFilters />
        <RouteInfo />
        <FareSummary />
        <FlightList />
      </div>
    </div>
  )
}
