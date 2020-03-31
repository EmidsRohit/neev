import React, { Component } from "react";
import Header from "../components/hearder/Header";
import ProjectList from "../components/projectlist/ProjectList";
import BreadcrumbsBar from "../components/breadcrumbs/BreadcrumbsBar";
import Container from "@material-ui/core/Container";

export default class Solaris extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <BreadcrumbsBar />
          <ProjectList />
        </Container>
      </React.Fragment>
    );
  }
}
