import Image from "next/image";
import fotoProfile from "../../../public/images/profile.jpg";
import LayoutComponent from "../layouts/layout.component";

const ProfileComponent = () => {
  return (
    <LayoutComponent>
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Section Gambar */}
        <div className="w-full" id="about">
          <Image
            alt="profile"
            src={fotoProfile}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Section Deskripsi */}
        <div className="w-full md:px-0 px-4">
          <div className="md:text-2xl text-lg font-bold mt-6 md:mt-0">
            Hello,
          </div>
          <div className="md:text-5xl text-2xl font-bold">
            I&apos;m Muhammad Raidika Hasya
          </div>
          <div className="md:text-2xl text-lg">Frontend Web Developer</div>
          <br />
          <div className="md:text-base text-sm">
            Graduated from PANDU Vocational School with a major in computer and
            network engineering, started his career as a front end web developer
            in 2021 using NextJS as a framework, have experience and participate
            in internships in several companies.
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default ProfileComponent;
