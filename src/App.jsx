import "./App.css";
import Badge from "./components/Badges/Badge";
import Banner from "./components/Banners/Banner";

function App() {
  return (
    <>
      {/* <Badge color="yellow">My Badge</Badge> */}
      <Banner
        status="success"
        title="Congratulations!"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />
      <br />
      <Banner
        status="warning"
        title="Attention"
        // text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />
      <br />
      <Banner
        status="error"
        title="There is a problem with your application"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />
      <br />
      <Banner
        status="neutral"
        title="Update available"
        // text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />
    </>
  );
}

export default App;
