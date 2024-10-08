import Image from "next/image";
import phone from "../../../public/icons/phone.png";
import gmail from "../../../public/icons/gmail.png";
import linkedin from "../../../public/icons/linkedin.png";
import instagram from "../../../public/icons/instagram.png";
import facebook from "../../../public/icons/facebook.png";
import Swal from "sweetalert2";

const ContactComponent = () => {
  const number = "089663339347";
  const ig = "@mrayiii_";
  const fb = "Muhammad Raidika Hasya";
  const gmailUrl = "raidika03@gmail.com";

  const copyNumber = () => {
    navigator.clipboard
      .writeText(number)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Copied to clipboard!",
          icon: "success",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Failed to copy text!",
          icon: "error",
        });
      });
  };

  const copyEmail = () => {
    navigator.clipboard
      .writeText(gmailUrl)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Copied to clipboard!",
          icon: "success",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Failed to copy text!",
          icon: "error",
        });
      });
  };

  const copyInstagram = () => {
    navigator.clipboard
      .writeText(ig)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Copied to clipboard!",
          icon: "success",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Failed to copy text!",
          icon: "error",
        });
      });
  };

  const copyFacebook = () => {
    navigator.clipboard
      .writeText(fb)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Copied to clipboard!",
          icon: "success",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Failed to copy text!",
          icon: "error",
        });
      });
  };

  return (
    <div
      id="contact"
      className="w-full mt-24 h-screen md:flex items-center justify-center space-x-6"
    >
      <div className="text-center">
        <div className="md:text-5xl text-xl font-bold md:pt-0 pt-24 mb-6">
          My Contact
        </div>
        <div className="space-y-4">
          <div className="flex space-x-4 items-center justify-center">
            <Image alt="instagram" src={instagram} width={30} height={30} />
            <button className="font-bold" onClick={copyInstagram}>
              @myariii_
            </button>
          </div>
          <div className="flex space-x-4 items-center justify-center">
            <Image alt="phone" src={phone} width={30} height={30} />
            <button className="font-bold" onClick={copyNumber}>
              {number}
            </button>
          </div>
          <div className="flex space-x-4 items-center justify-center">
            <Image alt="gmail" src={gmail} width={30} height={30} />
            <button className="font-bold" onClick={copyEmail}>
              raidika03@gmail.com
            </button>
          </div>
          <div className="flex space-x-4 items-center justify-center">
            <Image alt="linkedin" src={linkedin} width={30} height={30} />
            <button
              className="font-bold"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/muhammad-raidika-hasya-91b4931ab/"
                );
              }}
            >
              Muhammad Raidika Hasya
            </button>
          </div>
          <div className="flex space-x-4 items-center justify-center">
            <Image alt="facebook" src={facebook} width={30} height={30} />
            <button className="font-bold" onClick={copyFacebook}>
              Muhammad Raidika Hasya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
