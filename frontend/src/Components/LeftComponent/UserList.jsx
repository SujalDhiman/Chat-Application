import { useContext } from "react";
import ThemeContext from "../../context/ThemeProvider";

const persons = [
  {
    name: "John Doe",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Jane Smith",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Alice Johnson",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  },
  {
    name: "Bob Brown",
    photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
  {
    name: "Charlie Davis",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    name: "Diana Evans",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    name: "Edward Harris",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  },
  {
    name: "Fiona Green",
    photo: "https://images.unsplash.com/photo-1502767089025-6572583495b2",
  },
  {
    name: "George Clark",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
  },
  {
    name: "Hannah Wright",
    photo: "https://images.unsplash.com/photo-1502764613149-7f1d229e230d",
  },
  {
    name: "Sam Thomas",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  },
  {
    name: "Emilion James",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  },
];

function UserList() {
  const { mode } = useContext(ThemeContext);
  return (
    <div
      className={` h-[605px] absolute top-[113px] w-full overflow-auto ${
        mode == "light" ? "bg-white " : "bg-[#131B20] text-white "
      }`}
    >
      <ul className="list-none ">
        {persons.map((person) => (
          <div key={person.name}>
            <li
              className={`flex items-center pl-5 py-1  ${
                mode == "light" ? "hover:bg-gray-200" : "hover:bg-gray-800 "
              }`}
            >
              <img
                src={person.photo}
                alt={person.name}
                className="rounded-full h-10 outline outline-2 outline-offset-2 outline-green-500 object-cover w-[11%]"
              />
              <div className="w-[85%]">
                <div className=" h-[50px] ml-4 flex justify-between w-full  items-center">
                  <div>
                    <p className="text-sm font-medium ">{person.name}</p>
                    <p className="" style={{ fontSize: "12px" }}>
                      Hello from Here
                    </p>
                  </div>

                  <p
                    className={`text-xs relative -top-2 mr-2 right-2 ${
                      mode == "light" ? "text-gray-500" : "text-white"
                    }`}
                  >
                    3:11pm
                  </p>
                </div>
              </div>
            </li>
            <div className="border-b border-slate-400 h-[2px] w-[150px] ml-[25%]"></div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
