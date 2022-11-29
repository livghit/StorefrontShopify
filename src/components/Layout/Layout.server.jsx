import { Link } from '@shopify/hydrogen'

function Layout({ children }) {
  return (
    <>
      <header className="bg-white shadow-lg p-5 text-black">
        <Link to='/'>
          <img src="./logoEGJ.png" alt="Logo" className='h-14 w-12' />
        </Link>
        <button className='btn'>press</button>
        <div className='flex flex-col'>
          <Link to='/'>Armbänder</Link>
          <Link to='/'>Ringe</Link>
          <Link to='/'>Ohrringe</Link>
          <Link to='/'>Halsketten</Link>
          <Link to='/'>Sets</Link>
        </div>
      </header>

      <main role={"main"} id="mainContent" className="flex-grow">
        {children}
      </main>

      <div>Layout Footer</div>
    </>
  );
}

export default Layout;
