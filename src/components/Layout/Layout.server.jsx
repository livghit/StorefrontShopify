import Navigation from "../Navigation/Navigation.client";

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main role={"main"} id="mainContent" className="flex-grow">
        {children}
      </main>

      <div className="fixed bottom-0">Layout Footer</div>
    </>
  );
}

export default Layout;
