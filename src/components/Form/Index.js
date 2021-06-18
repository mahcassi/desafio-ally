import React, { useState } from 'react';
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

export const CourseForm = () => {
  const [values, setvalues] = useState(initialValue);
  const history = useHistory();


  console.log(values);

  function onChange(ev) {
    const { name, value } = ev.target;
    setvalues({...values, [name]: value});
  }

  function onSubmit(ev) {
    ev.preventDefault();

    axios.post('http://localhost:5000/courses', values).then(response => {
      history.push('/');
    });
  }

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <h1>
          <img src={logoImg} alt="Ally" />
          Cadastro de Cursos
        </h1>
        <div className="course-form__group">
          <label htmlFor="name">
            Nome do curso
          </label>
          <input id="name" name="name" type="text" onChange={onChange}/>
        </div>

        <div className="course-form__group">
          <label htmlFor="duration">
            Duração (semanas)
          </label>
          <input id="duration" name="duration" type="number" onChange={onChange} />
        </div>

        <CourseDate>
          <div className="course-form__group">
            <label htmlFor="dateStart">
              Data de Início
            </label>
            <InputMask type="text" mask="99/99/9999" id="dateStart" name="dateStart" onChange={onChange} />
          </div>

          <div className="course-form__group">
            <label htmlFor="dateEnd">
              Date de Término
            </label>
            <InputMask type="text" mask="99/99/9999" id="dateEnd" name="dateEnd" onChange={onChange} />
          </div>
        </CourseDate>

        <button type="submit">Cadastrar</button>
      </Form>

    </div>
  );
};