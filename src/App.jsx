import "./App.css";
import Badge from "./components/Badges/Badge";
import Banner from "./components/Banners/Banner";
import Card from "./components/Cards/Card";
import TestimonialWithImage from "./components/Testimonials/TestimonialWithImage";

function App() {
  return (
    <>
      {/* <Badge color="yellow" type="pill">
        Badge
      </Badge>
      <br />
      <br />
      <Banner
        status="success"
        title="Congratulations!"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />
      <br />
      <br />
      <Card
        title="Easy Deployment"
        // text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
      />

      <br />
      <br /> */}
      <TestimonialWithImage
        name="Mawushie Honyah"
        company="Netflix"
        position="Senior React Dev"
        image="Image.png"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla
        vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing
        nunc urna, sit.
      </TestimonialWithImage>
    </>
  );
}

export default App;
