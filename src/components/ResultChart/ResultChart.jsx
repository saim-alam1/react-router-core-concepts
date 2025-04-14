import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    "student_id": 1,
    "student_name": "John Doe",
    "Physics": 87,
    "Chemistry": 80,
    "Biology": 75
  },
  {
    "student_id": 2,
    "student_name": "Jane Smith",
    "Physics": 73,
    "Chemistry": 70,
    "Biology": 85
  },
  {
    "student_id": 3,
    "student_name": "Alice Johnson",
    "Physics": 92,
    "Chemistry": 88,
    "Biology": 90
  },
  {
    "student_id": 4,
    "student_name": "Bob Brown",
    "Physics": 68,
    "Chemistry": 65,
    "Biology": 72
  },
  {
    "student_id": 5,
    "student_name": "Charlie Davis",
    "Physics": 81,
    "Chemistry": 85,
    "Biology": 79
  },
  {
    "student_id": 6,
    "student_name": "Eve White",
    "Physics": 95,
    "Chemistry": 93,
    "Biology": 90
  },
  {
    "student_id": 7,
    "student_name": "Frank Green",
    "Physics": 77,
    "Chemistry": 82,
    "Biology": 79
  },
  {
    "student_id": 8,
    "student_name": "Grace Lee",
    "Physics": 84,
    "Chemistry": 80,
    "Biology": 86
  },
  {
    "student_id": 9,
    "student_name": "Henry King",
    "Physics": 90,
    "Chemistry": 92,
    "Biology": 88
  },
  {
    "student_id": 10,
    "student_name": "Ivy Scott",
    "Physics": 66,
    "Chemistry": 70,
    "Biology": 68
  }
]


const ResultChart = () => {
  return (
    <div className='flex justify-center my-20'>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey={'student_name'}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="Physics" stroke='gold'></Line>
        <Line dataKey={'Chemistry'} stroke='green'></Line>
        <Line dataKey={'Biology'}></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;