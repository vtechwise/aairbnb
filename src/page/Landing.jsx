import { createClient } from "contentful";
import Hero from "../component/Hero"
import Navbar from "../component/Navbar"
import Houses from "../component/Houses";
import { useLoaderData, useNavigation } from "react-router-dom";


export const loader = async () => {
  const client = createClient({
    space: "ksfxcfvyl7x6",
    environment: "master",
    accessToken: "au6fcFMVekJ_r24KeA220yMpTJVph5J2i4hv4l8srCg",
  });
  try {
    const response = await client.getEntries({
      content_type: "rentalHouses",
    });
    const projects = response.items.map((item) => {
      const {
        cityName,
          firstImage,
        price,
        secondImage,
        description,
        whatThePlaceOffer,
          bookingContact,
          thirdImage,
        forthImage
      } = item.fields;
        const image1 = firstImage.fields.file.url;
        const image2 = secondImage.fields.file.url; 
        const image3 = thirdImage.fields.file.url;
      const image4 = forthImage.fields.file.url;
        
        
        
      const id = item.sys.id;

      return {
        id,
          image2,
        price,
        image1,
        image3,
        image4,
        cityName,
        description,
        whatThePlaceOffer,
        bookingContact,
      };
    });
      
    //  const projects= response.items
      return projects;
    //   return null
  } catch (error) {
    return error;
  }
};

const Landing = () => {
  const projects = useLoaderData();
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  if (isLoading) {
    return <section className="h-[100vh] grid place-items-center">
       <div className="loading loading-spinner"></div>
     </section>
   } 

  return (
    <>
    <Navbar />
      <div className="max-w-4xl mx-auto px-6">
          <Hero />
          <Houses/>
    </div>
    </>
  )
}
export default Landing