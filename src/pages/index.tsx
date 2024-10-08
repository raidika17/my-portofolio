import ContactComponent from "@/components/contact/contact.component";
import LayoutComponent from "@/components/layouts/layout.component";
import ProfileComponent from "@/components/profile/profile.component";
import ProjectComponent from "@/components/project/project.component";

export default function Home() {
  return (
    <LayoutComponent>
      <ProfileComponent />
      <ProjectComponent />
      <ContactComponent />
    </LayoutComponent>
  );
}
