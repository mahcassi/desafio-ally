import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import { Header, Content, SectionSearch, Container } from "./styles";

export function Dashboard() {

  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const params = {};
    if (search) {
      params.name_like = search;
    }
    axios.get('http://localhost:5000/courses?&_order=desc&_sort=id', { params }).then((response) => {
      setCourses(response.data);
    });
  }, [search]);

  return (
    <Container>
      <Header>
        <Content>
          <img src={logoImg} alt="Allyhub" />
          <Link className="link" to="/create">
            Novo curso
          </Link>
        </Content>
      </Header>

      <SectionSearch>
        <input type="search" placeholder="Buscar"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
      </SectionSearch>

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
                <td>{course.duration} semanas</td>
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
