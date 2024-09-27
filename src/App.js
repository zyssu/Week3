import logo from './logo.svg';
import './App.css';
import Employee from './Employee';
import employee1 from './employee1.jpg';
import employee2 from './employee2.jpg';

function App() {
  return (
    <div className="App">
        <Employee 
          image = {employee1}
          name = {"Jason "}
          surname={"Miller"}
          functiom={"Marketing Manager"}
          experience={"8 years in digital marketing and brand management. Previously worked at XYZ Corp and led a successful campaign that increased brand engagement by 40%."}
        />
        <Employee 
          image = {employee2} 
          name = {"Jessica"}
          surname={"Taylor"}
          functiom={"Software Engineer"}
          experience={"5 years in software development with expertise in Python and JavaScript. Worked at ABC Tech, contributing to the development of a high-traffic e-commerce platform."}      
        />
    </div>
  );
}

export default App;
