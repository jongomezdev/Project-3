import React from "react";
import '../components/LoginCard'

function Login() {
    return (
        <Container >
            <h1>Login</h1>
            <form className="">
                <TextField
                    id="emai"
                    name="email"
                    autoComplete="email"
                    label="Email Address"
                    fullWidth
                    required
                    autoFocus
                />
                <TextField
                    id="password"
                    name="password"
                    autoComplete="password"
                    label="Password"
                    type="password"
                    fullWidth
                    required
                    autoFocus
                />
            </form>
        </Container>
    )
}

export default Login;
