import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import TopBar from './TopBar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
