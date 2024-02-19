/**
 * @typedef {import("@prismicio/client").Content.EditorsPickSlice} EditorsPickSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EditorsPickSlice>} EditorsPickProps
 * @param {EditorsPickProps}
 */
import EditorsPick from "../../components/editors-pick"
const EditorsPickSlice = ({ slice }) => {
  console.log(slice)
  return (
   <EditorsPick arrayOfBlogs={slice.items} />
  );
};

export default EditorsPickSlice;
