import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = (props) => {
  const { users } = props;
  return (
    <div className="px-18 py-8 h-[90vh] flex gap-10 items-center">
      <LeftContent />
      <RightContent users={users} />
    </div>
  );
};

export default Page1Content;
