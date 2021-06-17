import React from 'react';
import { Container } from "./styles";
import { CourseTable } from "../../components/CourseTable/Index";

function Dashboard() {
  return (
    <Container>
      <CourseTable />
    </Container>
  );
}
export default Dashboard;