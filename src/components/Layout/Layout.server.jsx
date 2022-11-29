import React from "react";

function Layout({ children }) {
  return (
    <>
      <header className="bg-white shadow-lg">Layout Navbar</header>

      <main role={"main"} id="mainContent" className="flex-grow">
        {children}
      </main>

      <div>Layout Footer</div>
    </>
  );
}

export default Layout;
