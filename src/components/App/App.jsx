import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import useFormValidator from "../../hooks/useFormValidation";

function App() {
  const { values, errors, handleChange, isValid, setValues } =
    useFormValidator();

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/profile"
          element={
            <Profile
              values={values}
              errors={errors}
              handleChange={handleChange}
              isValid={isValid}
              setValues={setValues}
            />
          }
        />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route
          path="/signup"
          element={
            <Register
              values={values}
              errors={errors}
              handleChange={handleChange}
              isValid={isValid}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Login
              values={values}
              errors={errors}
              handleChange={handleChange}
              isValid={isValid}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
