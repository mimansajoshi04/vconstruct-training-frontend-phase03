
function Header({no}){
    return (
        <header>
            <h2>Welcome to child number {no}</h2>
        </header>
    );
}

function Footer({no}){
    return(
        <footer>
            This is the footer to child number {no}
        </footer>
    );
}

function Layout({no, children}){
    return(
        <>
          <Header no={no}/>
          <div>{children}</div>
          <Footer no={no}/>
        </>
    );
}

function Child(props){
    return (
        <>
            <Layout no={"1"}>
              <p>Child 1</p>
            </Layout>
            
            <Layout no={"2"}>
              <h1>Child 2</h1>
            </Layout>

            <Layout no={"3"}>
              <a href="google.com">Child 3</a>
            </Layout>
        </>
    );
}

export default Child;
