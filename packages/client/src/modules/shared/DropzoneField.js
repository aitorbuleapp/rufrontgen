import * as React from "react";
import { FieldProps } from "formik";
import Dropzone from "react-dropzone";
import "./style.scss";

const files = [];
export const DropzoneField = ({
  field: { name },
  form: { setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <Dropzone
      accept="image/jpg, image/png"
      onDrop={([field]) => {
        setFieldValue(name, field);
      }}
    >
      <p className="droptext">Arrastra una imágen o haz clic aquí.</p>
    </Dropzone>
  );
};

// import * as React from "react";
// import { FieldProps } from "formik";
// import Dropzone from "react-dropzone";

// const files = [];
// export const DropzoneField = ({
//   field: { name },
//   form: { setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
//   ...props
// }) => {
//   return (
//     <Dropzone
//       accept=".pdf"
//       onDrop={([field]) => {
//         setFieldValue(name, field);
//       }}
//     >
//       <p>Try dropping some files here, or click to select files to upload.</p>
//     </Dropzone>
//   );
// };
