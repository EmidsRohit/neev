import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function ProjectList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.studyReducer.products);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS" });
  }, [dispatch]);

  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Project</TableCell>
              <TableCell>Program</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <TableRow>
                <TableCell>{product.Name}</TableCell>
                <TableCell>Program</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

ProjectList.defaultProps = {
  products: []
};
