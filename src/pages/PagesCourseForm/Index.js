import React from 'react';
import { useParams } from 'react-router-dom';
import { CourseForm } from '../../components/Form';
import { Container } from './styles';

const PagesCourseForm = () => {
  const { id } = useParams();
  
  return (
    <Container>
      <CourseForm id={id ? Number.parseInt(id, 10) : null} />
    </Container>
  )
}

export default PagesCourseForm;