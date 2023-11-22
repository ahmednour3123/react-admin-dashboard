import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const onSubmit = () => {
    handleClick();
  };
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      noValidate
      autoComplete="off"
    >
        <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Stack sx={{ gap: 2 }} direction={"row"}>
        <TextField
          sx={{ flex: 1 }}
          error={Boolean(errors.firstName)}
          helperText={
            Boolean(errors.firstName)
              ? "This field is required & min 3 character"
              : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={
            Boolean(errors.lastName)
              ? "This field is required & min 3 character"
              : null
          }
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={
          Boolean(errors.email) ? "Please provide a valid email address " : null
        }
        {...register("email", {
          required: true,
          minLength: 3,
          pattern: regEmail,
        })}
        label="Email"
        variant="filled"
      />

      <TextField
        error={Boolean(errors.ContactNumber)}
        helperText={
          Boolean(errors.ContactNumber)
            ? "Please provide a valid Phone Number "
            : null
        }
        {...register("ContactNumber", {
          required: true,
          minLength: 3,
          pattern: phoneRegExp,
        })}
        label="Contact Number"
        variant="filled"
      />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />
      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "Right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>

        <Snackbar  anchorOrigin={{ vertical :"top", horizontal:"right" }} open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert  
          onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            Account created Successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
