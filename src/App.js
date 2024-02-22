import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import Home from './components/Home';
import appStore from './utils/appStore';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import ErrorPage from './components/ErrorPage';
import Body from './components/Body';
import Cart from './components/Cart';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/singleProduct",
          element: <SingleProduct />
        },
      ],
      errorElement:<ErrorPage/>
    }
  ])
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
