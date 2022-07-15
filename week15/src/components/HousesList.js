import React from "react";
import { House } from "./House";
import { housesApi } from "../rest/housesAPI.js";

export class HousesList extends React.Component {
  state = {
    houses: [],
  };

  componentDidMount() {
    this.fetchHouses();
  }

  fetchHouses = async () => {
    const houses = await housesApi.get();
    this.setState({ houses });
    console.log("Test123");
  };

  updateHouse = async (updatedHouse) => {
    await housesApi.put(updatedHouse);
    this.fetchHouses();
  };

  render() {
    return (
      <div className="house-list">
        {this.state.houses.map((house) => (
          <House
            house={house}
            key={house._id}
            updateHouse={this.updateHouse}
            updateState={this.fetchHouses}
          />
        ))}
      </div>
    );
  }
}
