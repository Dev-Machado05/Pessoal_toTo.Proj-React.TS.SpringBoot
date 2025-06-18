const Login = () => {
    return(
    <form action={"loginValidation"}>
        <section className="formContent">
            <span>random prov text</span>
            <input type="text" name="" id="" required/>
        </section>
        <section className="formContent">
            <span>random prov text</span>
            <input type="password" name="" id="" required/>
        </section>
        <button type="submit">Entrar</button>
    </form>
    );
}

export default Login;