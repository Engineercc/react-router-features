// @ts-nocheck
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { url } from './utils';

function App() {
  // console.log(generatePath("post/:id/:url", { id: 2, url: "test-sadasdasd" }));
  // console.log(url('home.blog.post', {
  //   id: 6,
  //   url: 'test-2222'
  // }))
  console.log(url('home.blog.categories'));
  return useRoutes(routes);
}

export default App;
