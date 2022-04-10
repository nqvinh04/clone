import React, {useEffect} from "react";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout/layout";
import MenuHeader from "../../components/MenuHeader/menuHeader";

const Home = (props) => {

    useEffect(() => {
        console.log('home', props)
    }, []);

    return (
        <Layout>
            Home 
        </Layout>
    )
}
export default Home;