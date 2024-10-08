import Image from "next/image";
import fotoProfile from "../../../public/images/profile.jpg";
import LayoutComponent from "../layouts/layout.component";

const ProfileComponent = () => {
  return (
    <LayoutComponent>
      <div
        id="about"
        className="w-full md:h-screen md:flex items-center space-x-6"
      >
        <div className="md:w-1/2">
          <Image
            alt="profile"
            src={fotoProfile}
            className="h-screen"
            layout="cover"
          />
        </div>
        <div className="md:w-1/2">
          <div className="md:text-2xl md:font-bold mt-6 md:mt-0">Hello,</div>
          <div className="md:text-5xl text-xl font-bold">
            I&apos;m Muhammad Raidika Hasya
          </div>
          <div className="md:text-2xl">Frontend Web Developer</div>
          <br />
          <div>
            graduated in 2020 with a major in computer and network engineering,
            started his career as a front end web developer in 2021 using NextJS
            as a framework, has some experience and participated in internships
            at several companies.
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default ProfileComponent;
