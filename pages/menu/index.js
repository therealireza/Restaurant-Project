import MenuPage from "../../components/templates/MenuPage"

const Menu = ({data}) => {
    return(
        <MenuPage data={data}/>
    )
}
export default Menu;

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data`)
    const data = await res.json()    

    return {
        props : {data},
        revalidate : 10 * 60 * 60
    }
}