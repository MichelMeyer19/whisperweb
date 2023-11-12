import React from "react";
import FieldMolecule from "../molecules/FieldMolecule";
import GenericButton from "../atoms/GenericButton";

const AuthFormOrganism = ({
  onSubmit,
  email,
  setEmail,
  password,
  setPassword,
  repeatPassword,
  setRepeatPassword,
  buttonText,
  navigateToOtherForm,
  navigateToOtherFormAction,
  isSignUpPage, // New prop to indicate whether it's the sign-up page
}) => (
  <div>
    <form onSubmit={onSubmit}>
      <FieldMolecule
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="someone@example.com"
        label="Email"
      />
      <FieldMolecule
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        label="Password"
      />
      {isSignUpPage && ( // Conditionally render Repeat Password field for sign-up page
        <FieldMolecule
          id="repeatPassword"
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          placeholder="Repeat your password"
          label="Repeat Password"
        />
      )}
      <div className="mt-4 flex justify-center">
        <GenericButton
          text={buttonText}
          additionalStyles="text-black bg-green hover:bg-green-dark text-sm"
          type="submit"
        />
      </div>
    </form>
    <div className="mt-4 flex justify-center">
      <GenericButton
        text={navigateToOtherForm}
        additionalStyles="text-black hover:bg-gray-100 text-xs"
        onClick={navigateToOtherFormAction}
        type="button"
      />
    </div>
  </div>
);

export default AuthFormOrganism;
