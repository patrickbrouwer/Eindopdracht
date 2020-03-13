import React, { Component } from "react";
import StudentData from "./StudentData";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryLine,
  VictoryGroup
} from "victory";

const studentNames = [...new Set(StudentData.map(x => x.name))];
console.log("All Student Names", studentNames);

const funRatings = StudentData.map(funRating => {
  return funRating.funRating;
});
console.log("All Fun Ratings", funRatings);

const assigments = StudentData.map(assignment => {
  return assignment.assignment;
});
console.log("All Assigments", assigments);

const difficultyRatings = StudentData.map(difficultyRating => {
  return difficultyRating.difficultyRating;
});
console.log("All Difficulty Ratings", difficultyRatings);

const averageDifficulty = difficultyRatings.reduce(
  (total, amount, index, array) => {
    total += amount;
    if (index === array.length - 1) {
      return total / array.length;
    } else {
      return total;
    }
  }
);
console.log("Average Difficulty Rating", averageDifficulty);

function Chart() {
  return (
    <div className="Chart">
      <VictoryChart width={800} height={325} domainPadding={1}>
        <VictoryGroup colorScale={"qualitative"}>
          <VictoryBar data={difficultyRatings} />
          <VictoryBar data={funRatings} />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}

export default Chart;
