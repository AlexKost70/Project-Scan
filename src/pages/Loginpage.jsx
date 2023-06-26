import AuthBlock from "../components/authBlock/AuthBlock";
import RequireNotAuth from "../hoc/RequireNotAuth";

const Loginpage = () => {
    return(
        <RequireNotAuth>
            <AuthBlock />
        </RequireNotAuth>
    )
}

export default Loginpage;