import { Carousel, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";

function Banner() {
  
  const { name } = useSelector((state) => state.user);

  return (
    <div>
      
        <div className="relative h-full w-full">
          <img
            src="https://cdn.britannica.com/22/215522-050-8315BB78/green-grass-close-up.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              {name && (
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  welcome {name}
                </Typography>
              )}
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default Banner;
