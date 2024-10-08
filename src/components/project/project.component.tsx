import Image from "next/image";
import learningPathway from "../../../public/images/learning-pathway/learning-pathway.png";
import crudApp from "../../../public/images/crud/crud.png";
import dashboardApp from "../../../public/images/dashboard/dashboard.png";
import Link from "next/link";

const ProjectComponent = () => {
  return (
    <div
      id="project"
      className="w-full mt-24 h-screen md:flex items-center justify-center space-x-6"
    >
      <div className="text-center">
        <div className="md:text-5xl text-xl font-bold md:pt-0 pt-24 mb-6">
          My Project
        </div>
        <div className="flex space-x-4 mx-4 md:mx-0 justify-center">
          <div className="w-[30%] bg-white p-4 rounded-lg shadow hover:shadow-lg space-y-4">
            <Image alt="learning pathway" src={learningPathway} />
            <div className="font-bold">Learning Pathway</div>
            <div className="max-h-[80px] overflow-hidden">
              in this project I collaborated with the company STUDIO KODE, in
              this project I created a children&apos;s learning path on the
              STUDIO KODE website, what I&apos;m working on and the libraries
              I&apos;m using in this project are:
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
              <br />- create an info feature, to make it easier and tell users
              how to use the learning pathway feature
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
            <Link
              className="mt-6 bg-black text-white md:py-2 md:px-6 rounded-lg"
              href={"/project/learning-pathway"}
            >
              View Detail
            </Link>
          </div>
          <div className="w-[30%] bg-white p-4 rounded-lg shadow hover:shadow-lg space-y-4">
            <Image alt="Crud App" src={crudApp} />
            <div className="font-bold">
              CRUD(Create, Read, Update, Delete) App
            </div>
            <div className="max-h-[80px] overflow-hidden">
              This is my personal project, where I learned to create responsive
              website pages, apart from being responsive, I also created CRUD
              features, what I used in this project is:
              <br />
              <br />
              <br />
              - NextJS as Framework
              <br />
              - Axios as HTTP Request
              <br />
              - TailwindCSS
              <br />
              - Typescript
              <br />
              - Prism
              <br />
              - PostgreSQL on vercel as database
              <br />
              <br />
              <br />I also attached the mobile and desktop views:
            </div>
            <Link
              className="mt-6 bg-black text-white md:py-2 md:px-6 rounded-lg"
              href={"/project/crud-app"}
            >
              View Detail
            </Link>
          </div>
          <div className="w-[30%] bg-white p-4 rounded-lg shadow hover:shadow-lg space-y-4">
            <Image alt="learning pathway" src={dashboardApp} />
            <div className="font-bold">Admin Dashboard</div>
            <div className="max-h-[80px] overflow-hidden">
              in August 2024 I joined Ciatech, Ciatech is a software house
              company, and this admin dashboard is the first project I worked
              on, this project has several features such as absences, access to
              roles on this website dashboard, creating salaries according to
              grade, salary reports and many more, here are some libraries that
              I use:
            </div>
            <Link
              className="mt-6 bg-black text-white md:py-2 md:px-6 rounded-lg"
              href={"/project/admin-dashboard"}
            >
              View Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
