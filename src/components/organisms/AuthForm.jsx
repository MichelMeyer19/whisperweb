// AuthFormOrganism.jsx organism component  

import Field from "../molecules/Field";
import GenericButton from "../atoms/GenericButton";

const AuthForm = ({
  onSubmit, // Function to execute on form submission
  email,
  setEmail,
  password,
  setPassword,
  repeatPassword,
  setRepeatPassword,
  buttonText, // Text to display on the main button
  navigateToOtherForm, // Text for the navigation button
  navigateToOtherFormAction, // Function to execute on navigation button click
  isSignUpPage, // Boolean to determine if it's the sign-up page
}) => (
  <div>
    <form onSubmit={onSubmit}>
      {/* Email Field */}
      <Field
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="someone@example.com"
        label="Email"
      />
      {/* Password Field */}
      <Field
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        label="Password"
      />
      {/* Conditionally rendered Repeat Password Field for sign-up page */}
      {isSignUpPage && (
        <Field
          id="repeatPassword"
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          placeholder="Repeat your password"
          label="Repeat Password"
        />
      )}
      {/* Submit Button */}
      <div className="mt-4 flex justify-center">
        <GenericButton
          text={buttonText}
          additionalStyles="text-black bg-mesh bg-cover bg-no-repeat"
          type="submit"
        />
      </div>
    </form>
    {/* Navigation Button */}
    <div className="mt-4 flex justify-center">
      <GenericButton
        text={navigateToOtherForm}
        additionalStyles="text-black hover:bg-gray-100"
        onClick={navigateToOtherFormAction}
        type="button"
      />
    </div>
  </div>
);

export default AuthForm;
