import Search from "../Components/LeftComponent/Search";
import Upper from "../Components/LeftComponent/Upper";
import UserList from "../Components/LeftComponent/UserList";

function LeftPage() {
  return (
    <div className="w-[43%] bg-[#F0F2F5] h-screen overflow-hidden relative">
      <div className="">
        <Upper />
        <Search />
      </div>
      <UserList />
    </div>
  );
}

export default LeftPage;
