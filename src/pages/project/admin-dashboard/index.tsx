import LayoutComponent from "@/components/layouts/layout.component";
import Image from "next/image";
import dashboard from "../../../../public/images/dashboard/dashboard.png";
import accessRole from "../../../../public/images/dashboard/access-role.png";
import salary from "../../../../public/images/dashboard/salary.png";
import attendance from "../../../../public/images/dashboard/attendance.png";
import invoice from "../../../../public/images/dashboard/invoice.png";
import loginPage from "../../../../public/images/dashboard/login.png";

const AdminDashboard = () => {
  return (
    <LayoutComponent>
      <div id="about" className="w-full h-screen text-center">
        <div className="mt-24 md:text-5xl text-xl font-bold mb-10">
          Admin Dashboard
        </div>
        <Image alt="Dashboard" className="mx-auto" src={dashboard} />
        <div className="text-left mt-10 mx-4 md:mx-10">
          in August 2024 I joined Ciatech, Ciatech is a software house company,
          and this admin dashboard is the first project I worked on, this
          project has several features such as absences, access to roles on this
          website dashboard, creating salaries according to grade, salary
          reports and many more, here are some libraries that I use:
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
          - Sweetalert2
          <br />
          - Redux (State Management)
          <br />
          - Git (Version Control)
          <br />
          <br />
          <br />
          <div className="font-semibold text-xl">Dashboard</div>
          <br />
          <br />
          <Image alt="Dashboard" className="mx-auto" src={dashboard} />
          <br />
          <br />
          <div className="font-semibold text-xl">Login</div>
          <br />
          <br />
          <Image alt="Dashboard" className="mx-auto" src={loginPage} />
          <br />
          <br />
          <div className="font-semibold text-xl">Attendance</div>
          <br />
          <br />
          <Image alt="Dashboard" className="mx-auto" src={attendance} />
          <br />
          <br />
          <div className="font-semibold text-xl">Access Role</div>
          <br />
          <br />
          <Image alt="Dashboard" className="mx-auto" src={accessRole} />
          <br />
          <br />
          <div className="font-semibold text-xl">Salary</div>
          <br />
          <br />
          <Image alt="Dashboard" className="mx-auto" src={salary} />
          <br />
          <br />
          <div className="font-semibold text-xl">Invoice Salary</div>
          <br />
          <br />
          <Image alt="Dashboard" className="mx-auto" src={invoice} />
          <br />
          For more details, you can check the link:{" "}
          <a
            href="https://people-matrix.ciatech.id/login"
            className="underline text-blue-500"
          >
            https://people-matrix.ciatech.id/login
          </a>
          <br />
          <br />
          <br />
        </div>
      </div>
    </LayoutComponent>
  );
};

export default AdminDashboard;
