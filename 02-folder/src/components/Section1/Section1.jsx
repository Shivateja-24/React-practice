import Navbar from "./Navbar";
import Page1Content from "./Page1Content";

const Section1 = (props) => {
  const { users } = props;
  return (
    <div className="h-screen w-full bg-gray-350">
      <Navbar />
      <Page1Content users={users} />
    </div>
  );
};

export default Section1;
