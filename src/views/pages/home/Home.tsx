import images from "@/assets/images/imageData/ImageData";
import Header from "@/composites/header/Header";
import ProductGallery from "@/composites/productGallery/ProductGallery";
type Props = {};

const Home = (props: Props) => {
  return (
    <div className="w-full">
      {/* header  */}
      <Header />
      {/* moving carrousal  */}
      <div className=" bg-gray-400">
        <img
          src={images.mainBanner}
          alt="main-banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* moving product gallery  */}
      <div className="m-20">
        <ProductGallery />
      </div>

      <div className="relative ">
      {/* Image */}
      <img src={images.bannerImage} alt=""className="w-full" />


      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center flex-col justify-center  bg-black/40 rounded-lg">
        <h2 className="text-white text-5xl font-semibold">We Build Better </h2>
        <h2 className="text-3xl font-medium text-[#FF6901] m-2 ">New Alpha Series   </h2>
      </div>
    </div>
    </div>
  );
};

export default Home;
