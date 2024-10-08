import Image from "next/image";
import learningPathway from "../../../public/images/learning-pathway/learning-pathway.png";
import crudApp from "../../../public/images/crud/crud.png";
import dashboardApp from "../../../public/images/dashboard/dashboard.png";
import Link from "next/link";

const ProjectComponent = () => {
  return (
    <div
      id="project"
      className="w-full mt-24 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="text-center mb-8">
        <div className="md:text-5xl text-3xl font-bold mb-6">My Projects</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0 w-full max-w-7xl">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg space-y-4">
          <Image
            alt="learning pathway"
            src={learningPathway}
            className="w-full h-auto object-cover"
          />
          <div className="font-bold">Learning Pathway</div>
          <div className="text-sm max-h-[80px] overflow-hidden">
            In this project, I collaborated with STUDIO KODE to create a
            children&apos;s learning path. Libraries and tools used include
            ReactJS, Axios, Canvas, and more.
          </div>
          <Link
            className="mt-4 block bg-black text-white py-2 px-4 rounded-lg text-center"
            href={"/project/learning-pathway"}
          >
            View Detail
          </Link>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg space-y-4">
          <Image
            alt="Crud App"
            src={crudApp}
            className="w-full h-auto object-cover"
          />
          <div className="font-bold">
            CRUD (Create, Read, Update, Delete) App
          </div>
          <div className="text-sm max-h-[80px] overflow-hidden">
            A personal project to create a responsive CRUD app using NextJS,
            Axios, TailwindCSS, TypeScript, and PostgreSQL.
          </div>
          <Link
            className="mt-4 block bg-black text-white py-2 px-4 rounded-lg text-center"
            href={"/project/crud-app"}
          >
            View Detail
          </Link>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg space-y-4">
          <Image
            alt="Admin Dashboard"
            src={dashboardApp}
            className="w-full h-auto object-cover"
          />
          <div className="font-bold">Admin Dashboard</div>
          <div className="text-sm max-h-[80px] overflow-hidden">
            Developed an admin dashboard for Ciatech with features like
            attendance tracking, role-based access, salary management, and more.
          </div>
          <Link
            className="mt-4 block bg-black text-white py-2 px-4 rounded-lg text-center"
            href={"/project/admin-dashboard"}
          >
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
