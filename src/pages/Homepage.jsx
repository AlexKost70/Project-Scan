import { Fragment } from "react"
import MainBlock from "../components/mainBlock/MainBlock"
import TariffsBlock from "../components/tariffsBlock/TariffsBlock"
import WhyBlock from "../components/whyBlock/WhyBlock"

const Homepage = () => {
    return(
        <Fragment>
            <MainBlock />
            <WhyBlock />
            <TariffsBlock />
        </Fragment>
    )
}

export default Homepage;