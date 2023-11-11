import { Button } from "../components/Button";

export const Hero = () => (
  <section className="flex h-[700px] flex-col items-center">
    <h1 className="mt-20 px-4 text-center text-5xl font-[600] sm:w-[60%] lg:text-7xl xl:text-8xl">
      Discover the infinite galaxy of Ideas
    </h1>
    <p className="mb-20 mt-8 px-4 text-center text-lg font-[100] text-my_black-light sm:w-[50%] lg:text-xl xl:text-2xl">
      Embark on a Journey of Innovation and Possibilities: Explore, Create, and
      Revolutionize with Our Cutting-Edge App
    </p>
    <Button className="border-none bg-red-600 hover:bg-red-300" variant="fill">
      Download app
    </Button>
  </section>
);
