import React from 'react'
import {Box, TextField} from "@mui/material";
import './Signup.css'
import Button from "@mui/material/Button";

function Signup() {
    return (
        <React.Fragment>
            <div className="sign-up">
            
                <Box className="sign-up-form"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <h2 className='topic'>Sign Up</h2>
                    <div className="form-wrapper">
                        <TextField
                            Email
                            label="Email"
                            variant="filled"
                            type="email"
                        />
                        <TextField
                            Password
                            label="Password"
                            variant="filled"
                            type="password"
                        />
                        <TextField
                            Password
                            label="Confirm Password"
                            variant="filled"
                            type="password"

                        />
                        <Button variant="contained">
                            Sign Up
                        </Button>
                    </div>
                </Box>
            </div>
        </React.Fragment>
    )
}

export default Signup
