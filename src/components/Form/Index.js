import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import { Form, CourseDate } from './styles';
import logoImg from '../../assets/logo.png';
import InputMask from 'react-input-mask';

const initialValue = {
  name: '',
  duration: 0,
  dateStart: '',
  dateEnd: '',
}

export const CourseForm = ({ id }) => {
  const [values, setvalues] = useState(initialValue);
  const history = useHistory();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/courses/${id}`)
        .then((response) => {
          setvalues(response.data);
        })
    }
  }, [id]);

  function onChange(ev) {
    const { name, value } = ev.target;
    setvalues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();

    const method = id ? 'put' : 'post';
    const url = id
      ? `http://localhost:5000/courses/${id}`
      : 'http://localhost:5000/courses'

    axios[method](url, values)
      .then(response => {
        history.push('/');
      });
  }

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <h1>
          <img src={logoImg} alt="Ally" />
          Novo Curso
        </h1>
        <div className="course-form__group">
          <label htmlFor="name">
            Nome do curso
          </label>
          <input id="name" name="name" type="text" onChange={onChange} value={values.name} />
        </div>

        <div className="course-form__group">
          <label htmlFor="duration">
            Duração (semanas)
          </label>

          <input id="duration" name="duration" type="number" onChange={onChange} value={values.duration}
          />
        </div>

        <CourseDate>
          <div className="course-form__group">
            <label htmlFor="dateStart">
              Data de Início
            </label>
            <InputMask type="text" mask="99/99/9999" id="dateStart" name="dateStart" onChange={onChange} value={values.dateStart} />
          </div>

          <div className="course-form__group">
            <label htmlFor="dateEnd">
              Data de Término
            </label>
            <InputMask type="text" mask="99/99/9999" id="dateEnd" name="dateEnd" onChange={onChange} value={values.dateEnd} />
          </div>
        </CourseDate>

        <button type="submit">Salvar</button>
      </Form>

    </div>
  );
};