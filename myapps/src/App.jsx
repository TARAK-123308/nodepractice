import ClassComponent from "./ClassComponent";
import List from "./components/List";
import UserProfile from "./UserProfile";
import Users from "./Users";

const App = () => {
  const users = [
    { name: "Kiran", email: "kir@gmail.com", city: "Hyd" },
    { name: "Raghu", email: "raghuvaran@gmail.com", city: "Chennai" },
    { name: "Suresh", email: "Suresh@gmail.com", city: "Pune" },
    { name: "Sampurnesh", email: "sampu@gmail.com", city: "Hyd" }
  ];

  return (
    <div className="Hai">
      {/* <Users users={users} /> */}
      <ClassComponent name ={"Tarak"} email = {"kir@gmail.com"} city ={ "Hyd"}/>
    </div>
  );
};

export default App;
