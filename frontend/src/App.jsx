import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import BookingPage from './pages/BookingPage'
import AdminPage from './pages/AdminPage'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<BookingPage />} />
          <Route path="/admin-secret-page" element={<AdminPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    
    </BrowserRouter>

  )
}

export default App









// import { useEffect } from 'react'
// import { getBookings } from './api/bookingApi'

// function App() {

//   useEffect(() => {

//     async function loadBookings() {
//       try {
//         const bookings = await getBookings()
//         console.log(bookings)
//       } catch (error) {
//         console.log(error)
//       }
//     }

//     loadBookings()

//   },[])

//   return <h1>Hotel booking</h1>

// }

// export default App 


