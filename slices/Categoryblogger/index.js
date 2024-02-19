import  Categories from "../../components/categories"
const Categoryblogger = ({ slice }) => {
  console.log(slice)
  return (
   <Categories arrayOfBlogger={slice.items} />
  );
};

export default Categoryblogger;
