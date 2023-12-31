import { Box, Collapse, IconButton, TableCell, TableRow, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { DataType } from "../../../Global/types/Datatype";
import { DetailsTable } from "./DetailsTable/DetailsTable";

export const UsersInfoRow = ({ user }: { user: DataType }) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <BiSolidDownArrow /> : <BiSolidUpArrow />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {user.displayName}
        </TableCell>
        <TableCell>{user.email}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <DetailsTable user={user} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};
