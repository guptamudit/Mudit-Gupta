import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row  items-center justify-between  xl:pt-8 xl:pb-10 ">
          <div className="text-center xl:text-left order-2 xl:order-none gap-3 flex flex-col ">
            <span className="text-xl  ">
              Computer Science Undergraduate Student
            </span>
            <h1 className="h1">
              Hello I'm <br />
              <span className="text-accent">Mudit Gupta</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Current in my last year of college. I like to develop websites and
              solve coding problems. Seeking opportunities to collaborate with
              like minded indivisuals{" "}
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a href="/assets/CV.pdf" download>
                  Download Cv
                </a>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
