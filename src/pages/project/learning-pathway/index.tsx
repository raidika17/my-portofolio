import LayoutComponent from "@/components/layouts/layout.component";
import Image from "next/image";
import learningPathway from "../../../../public/images/learning-pathway/learning-pathway.png";

const LearningPathway = () => {
  return (
    <LayoutComponent>
      <div id="about" className="w-full h-screen text-center">
        <div className="mt-24 md:text-5xl text-xl font-bold mb-10">
          Learning Pathway
        </div>
        <Image
          alt="learning pathway"
          className="mx-auto"
          src={learningPathway}
        />
        <div className="text-left mt-10 mx-4 md:mx-10">
          in this project I collaborated with the company STUDIO KODE, in this
          project I created a children&apos;s learning path on the STUDIO KODE
          website, what I&apos;m working on and the libraries I&apos;m using in
          this project are:
          <br />
          <br />
          <br />
          - ReactJS as a framework
          <br />
          - Axios as HTTPS Request
          <br />
          - Canvas for making map patterns
          <br />
          - Make logic grab change the rocket location point on the cursor
          <br />
          - create logic zoom in and zoom out on the learning pathway map
          <br />- create an info feature, to make it easier and tell users how
          to use the learning pathway feature
          <br />
          <br />
          <br />
          Link Project:{" "}
          <a
            href="http://my.studiokode.co/mapping"
            className="underline text-blue-500"
          >
            https://my.studiokode.co/mapping
          </a>
          <br />
          <br />
          <br />
        </div>
      </div>
    </LayoutComponent>
  );
};

export default LearningPathway;
