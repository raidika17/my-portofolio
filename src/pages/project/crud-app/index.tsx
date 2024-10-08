import LayoutComponent from "@/components/layouts/layout.component";
import Image from "next/image";
import crud from "../../../../public/images/crud/crud.png";
import add from "../../../../public/images/crud/add.png";
import edit from "../../../../public/images/crud/edit.png";
import deleteDesktop from "../../../../public/images/crud/delete.png";
import crudMobile from "../../../../public/images/crud/crud-mobile.png";
import addMobile from "../../../../public/images/crud/add-mobile.png";
import editMobile from "../../../../public/images/crud/edit-mobile.png";
import deleteMobile from "../../../../public/images/crud/delete-mobile.png";

const CrudApp = () => {
  return (
    <LayoutComponent>
      <div id="about" className="w-full h-screen text-center">
        <div className="mt-24 md:text-5xl text-xl font-bold mb-10">
          CRUD(Create, Read, Update, Delete) App
        </div>
        <Image alt="learning pathway" className="mx-auto" src={crud} />
        <div className="text-left mt-10 mx-4 md:mx-10">
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
          - Prisma
          <br />
          - PostgreSQL on vercel as database
          <br />
          <br />
          <br />
          I also attached the mobile and desktop views:
          <br />
          <br />
          <div className="font-semibold text-xl">Desktop/Laptop</div>
          <br />
          <br />
          <Image alt="learning pathway" className="mx-auto" src={crud} />
          <br />
          <Image alt="learning pathway" className="mx-auto" src={add} />
          <br />
          <Image alt="learning pathway" className="mx-auto" src={edit} />
          <br />
          <Image
            alt="learning pathway"
            className="mx-auto"
            src={deleteDesktop}
          />
          <br />
          <br />
          <div className="font-semibold text-xl">Mobile</div>
          <br />
          <br />
          <Image alt="learning pathway" className="mx-auto" src={crudMobile} />
          <br />
          <Image alt="learning pathway" className="mx-auto" src={addMobile} />
          <br />
          <Image alt="learning pathway" className="mx-auto" src={editMobile} />
          <br />
          <Image
            alt="learning pathway"
            className="mx-auto"
            src={deleteMobile}
          />
          <br />
          <br />
          For more details, you can check the link:{" "}
          <a
            href="https://crud-app-nextjs.vercel.app/"
            className="underline text-blue-500"
          >
            https://crud-app-nextjs.vercel.app/
          </a>
          <br />
          <br />
          <br />
        </div>
      </div>
    </LayoutComponent>
  );
};

export default CrudApp;
