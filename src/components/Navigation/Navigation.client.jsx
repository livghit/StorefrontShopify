import { Link } from "@shopify/hydrogen";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from "react";

function Navigation() {

  return (
    <header className="bg-white shadow-lg p-5 text-black">
      <Link to="/">
        <img src="./logoEGJ.png" alt="Logo" className="h-14 w-12" />
      </Link>
      <MobileNavigation />
    </header>
  );
}

export default Navigation;


function IconOpenMenu() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5">
      <title>Open Menu</title>
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
  );
}

function IconCloseMenu() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-5 h-5">
      <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
    </svg>
  )
}

function MobileNavigation() {
  const data = [
    { name: 'Ohrringe' },
    { name: 'Halsketten' },
    { name: 'Ringe' },
    { name: 'Armbänder' },
    { name: 'Sets' },
  ]


  let [products, setProducts] = useState([]);


  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setProducts(data);
    setIsOpen(true)
  }
  return (
    <>
      <div className="absolute right-10 top-10">
        <button onClick={openModal}>
          <IconOpenMenu />
        </button>
      </div>


      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="fixed top-0 right-0 ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex bg-white fixed right-0 top-0 bottom-0 h-full w-52">
                  <div className="mt-4">
                    <button
                      type="button"
                      className="absolute top-5 right-5"
                      onClick={closeModal}
                    >
                      <IconCloseMenu />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="fixed top-5 right-20 text-lg font-medium leading-6 text-gray-900 "
                  >
                    Navigation
                  </Dialog.Title>
                  <div className="flex justify-center item-center">
                    <ul className="flex flex-col justify-center items-center gap-7 ml-16">
                      {products.map(obj => (
                        <>
                          <Link key={obj.name} to='/'>{obj.name}</Link>
                        </>
                      ))}
                    </ul>
                  </div>


                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
