import ResultsBlock from "../components/resultsBlock/ResultsBlock";
import RequireAuth from "../hoc/RequireAuth";


const Resultspage = () => {
    return(
        <RequireAuth>
            <ResultsBlock />
        </RequireAuth>
    )
}

export default Resultspage;