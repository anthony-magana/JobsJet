import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function Layout({ children }) {

    return (
        <>
            <NavBar />
            <main>
                {children}
            </main>

            <Footer />
        </>
    )
}