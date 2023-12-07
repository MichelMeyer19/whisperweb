import { useNavigate } from "react-router-dom";
import GenericButton from "../atoms/GenericButton";
import PageHeadline from "../atoms/PageHeadline";
import BackgroundMesh from "../atoms/BackgroundMesh";
import logoIcon from '../../assets/icon_logo.png'; // Ensure this path is correct

export const Welcome = () => {
  const navigate = useNavigate();

  const goToOurValues = () => {
    navigate("/welcome/our-values");
  };

  const continueWithProcess = () => {
    navigate("/sign-in");
  };

  return (
    <div>
      <BackgroundMesh />
      <div className="flex flex-col h-screen bg-dorian items-center">
        <div className="mt-10">
          <img src={logoIcon} alt="WhisperWeb Logo" className="logo-image" />
        </div>

        <div className="text-center mt-2">
          <PageHeadline text="WhisperWeb" />
          <p className="slogan-text mt-1">
            Speak Freely, Connect Deeply
          </p>
        </div>

        {/* Remaining content */}
        <div className="flex-grow flex flex-col items-center justify-end">
          <div className="w-72 mb-25 text-center" style={{ width: "294px", marginBottom: "100px" }}>
            <p>
              WhisperWeb is an anonymous messaging app for university students
              that want to connect with like-minded people to share what's on
              their mind for people to grow
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-end w-full pb-8">
          <GenericButton
            text="Our Values"
            additionalStyles="mb-4 text-black bg-white hover:bg-gray-200 text-sm"
            onClick={goToOurValues}
          />
          <GenericButton
            text="Continue"
            additionalStyles="text-black bg-green hover:bg-green-dark text-sm"
            onClick={continueWithProcess}
          />
        </div>
      </div>
    </div>
  );
};