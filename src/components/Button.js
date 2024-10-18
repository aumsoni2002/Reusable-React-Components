// import PropTypes from "prop-types";  // need this import if we make use of built-in validation
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  // ...rest: means that put all the remaining props in to the 'rest' that were sent to this component but not listed as above.
  ...rest
}) {
  const finalClassName = twMerge(
    classNames(rest.className, "flex items-center px-3 py-1.5 border", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    })
  );

  return (
    // ...rest: it means that take all the props that are in the rest and assign them to the below button element
    <button {...rest} className={finalClassName}>
      {children}
    </button>
  );
}

Button.propTypes = {
  // Making use Built-In Validation
  // primary: PropTypes.number,

  // Custom Validation
  checkVariationValue: ({ primary, secondary, warning, success, danger }) => {
    // We are checking if the total sum of all below numbers are more than 1, then there are more than one variation has been passed for the button which is not correct.
    // as we are sending the boolean values, we are converting those boolean values into numbers and then adding them up to check if the sum is more than 1.
    // Number(true) = 1, Number(false) = 0, !!true = true, !!NaN = false
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "only one of primary, secondary, warning, success, danger can be true"
      );
    }
  },
};

export default Button;
