import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Header from "./components/header";
import Home from "./components/home";
import Movie from "./components/movie";
import NotFound from "./components/notFound";

//styles
import { GlobalStyle } from "./components/globalStyle";

const App = () => (
	<Router>
		<Header />
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/:movieId' element={<Movie />} />
			<Route path='/*' element={<NotFound />} />
		</Routes>
		<GlobalStyle />
	</Router>
);

export default App;
