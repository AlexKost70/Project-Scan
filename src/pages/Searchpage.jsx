import SearchBlock from "../components/searchBlock/SearchBlock";
import RequireAuth from "../hoc/RequireAuth";

const Searchpage = () => {
    return(
        <RequireAuth>
            <SearchBlock />
        </RequireAuth>
    )
}

export default Searchpage;