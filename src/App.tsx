import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import CustomRow from "./components/CustomRow";
import CustomCol from "./components/CustomCol";

function App() {
  return (
    <NavBar className="navbar navbar-dark bg-primary">
      <CustomRow>
        <CustomCol size={1}>
          {
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="Logo"
              width="30"
              height="30"
            />
          }
        </CustomCol>

        {/* <CustomCol size={11}>
          <CustomTitle style={{ color: "white" }} label="h5">
            FC PROYECT
          </CustomTitle>
        </CustomCol> */}
      </CustomRow>
    </NavBar>
  );
}

export default App;
