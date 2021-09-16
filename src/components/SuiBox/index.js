import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// clsx is a utility for constructing className strings conditionally
import clsx from "clsx";

// @material-ui core components
import Box from "@material-ui/core/Box";

// Custom styles for SuiBox
import styles from "components/SuiBox/styles";

const SuiBox = forwardRef(
  (
    {
      backgroundColor,
      backgroundGradient,
      color,
      opacity,
      borderRadius,
      boxShadow,
      customClass,
      ...rest
    },
    ref
  ) => {
    const classes = styles({ backgroundColor, color, opacity, borderRadius, boxShadow });

    return (
      <Box
        ref={ref}
        className={clsx(classes.suiBox, customClass, {
          [classes.suiBox_backgroundGradient]: backgroundGradient,
        })}
        {...rest}
      />
    );
  }
);

// Setting default values for the props of SuiBox
SuiBox.defaultProps = {
  backgroundColor: "transparent",
  backgroundGradient: false,
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  boxShadow: "none",
  customClass: "",
};

// Typechecking props for the SuiBox
SuiBox.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  backgroundGradient: PropTypes.bool,
  opacity: PropTypes.number,
  borderRadius: PropTypes.string,
  boxShadow: PropTypes.string,
  customClass: PropTypes.string,
};

export default SuiBox;
