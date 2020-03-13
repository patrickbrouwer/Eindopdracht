import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryLegend
} from "victory";

const StudentChartAverage = props => {
  const studentNameData = props.data.filter(
    word => word.name === props.student
  );

  return (
    <div>
      <VictoryChart
        height={150}
        width={650}
        containerComponent={
          <VictoryZoomContainer
            allowZoom={false}
            zoomDomain={{ x: [0, 10], y: [0, 5] }}
          />
        }
      >
        <VictoryAxis
          style={{
            tickLabels: {
              fontSize: 5
            }
          }}
        />
        <VictoryAxis dependentAxis style={{ tickLabels: { fontSize: 5 } }} />
        <VictoryLegend
          style={{
            labels: {
              fontSize: 5
            }
          }}
          x={50}
          y={5}
          orientation="horizontal"
          gutter={10}
          data={[
            { name: "FUN RATING", symbol: { fill: "#6ec1e4" } },
            {
              name: "DIFFICULTY RATING",
              symbol: { fill: "#bf2a39" }
            }
          ]}
        />
        <VictoryAxis dependentAxis style={{ tickLabels: { fontSize: 5 } }} />
        <VictoryGroup offset={10}>
          <VictoryBar
            animate={{ duration: 500 }}
            color="#6ec1e4"
            orientation="left"
            barWidth={10}
            data={studentNameData}
            x="assignment"
            y="funRating"
          />
          <VictoryBar
            animate={{ duration: 500 }}
            color="#bf2a39"
            orientation="right"
            barWidth={10}
            data={studentNameData}
            x="assignment"
            y="difficultyRating"
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
};

export default StudentChartAverage;
