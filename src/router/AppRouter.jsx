import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";

    const authStatus = 'authenticated';

export const AppRouter = () => {

  return (
    <Routes>
        {
            ( authStatus === 'non-authenticated')
                ? <Route path="/auth/*" element={ <LoginPage />} />
                : <Route path="/*" element={ <CalendarPage />} />
        }
    
        <Route path="/*" element={ <Navigate to="/auth/login" />} />

    </Routes>
  )
}
