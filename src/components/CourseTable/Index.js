import React, { useEffect, useState } from 'react';
import { Container } from "./styles";
import axios from 'axios';

export function CourseTable() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/courses').then((response) => {
      setCourses(response.data);
    });
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome do Curso</th>
            <th>Duração</th>
            <th>Data de Início</th>
            <th>Data de Término</th>
          </tr>
        </thead>

        <tbody>
          {courses.map(course => {
            return (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.duration}</td>
                <td>{course.dateStart}</td>
                <td>{course.dateEnd}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
