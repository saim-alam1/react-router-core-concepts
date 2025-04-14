import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {

  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  // console.log(marksData);

  // Data Processing For The Chart
  const marksChartData = marksData.map(studentData => {
    const student = {
      id: studentData.student_id,
      name: studentData.student_name,
      biology: studentData.subjects.Biology,
      chemistry: studentData.subjects.Chemistry,
      physics: studentData.subjects.Physics
    }
    const avg = student.biology + student.chemistry + student.physics;
    student.avg = avg;
    return student;
  })

  console.log(marksChartData);

  return (
    <div>
      <BarChart width={500} height={300}
        data={marksChartData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="avg" fill='yellow'></Bar>
        <Bar dataKey="chemistry" fill='blue'></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;