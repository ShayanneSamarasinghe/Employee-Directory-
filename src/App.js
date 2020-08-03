import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div class="row d-flex justify-content-center container">
      <h1 class="d-flex justify-content-center">Employee List</h1>
      <form>
      
        <div class="mb-3 row">
          <label for="name" class="col-sm-2 col-form-label">
            Name
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="name" value="George" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Filter
          </label>
          <div class="col-sm-10">
            <select class="form-select form-select-lg mb-3">
              <option selected>Name</option>
              <option value="1">Office Location</option>
              <option value="2">Role</option>
            </select>
          </div>
        </div>
      </form>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Office Location</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark Jacob</td>
            <td>Downtown TO</td>
            <td>UI UX Junior Designer</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob Daniel</td>
            <td>Ottawa</td>
            <td>Front-End Developer</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Daniel Singh</td>
            <td>Ottawa</td>
            <td>Senior Front-End Developer</td>   
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Singhe Bullar</td>
            <td>Kingston</td>
            <td>Back-End Developer</td>   
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
