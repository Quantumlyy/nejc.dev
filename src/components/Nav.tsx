import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Disclosure } from '@headlessui/react';
import React from 'react';
import Link from 'next/link';

const Nav: React.FC = ({ children }) => {
	return (
		<div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
			<Disclosure
				as="div"
				className="flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0"
			>
				{({ open }) => (
					<>
						<div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
							<Link href="/">
								<span className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
									Nejc Drobnič
								</span>
							</Link>
							<Disclosure.Button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
								<span className="sr-only">Open main menu</span>
								{open ? (
									<FontAwesomeIcon icon={faTimes} className="block h-6 w-6" aria-hidden="true" />
								) : (
									<FontAwesomeIcon icon={faBars} className="block h-6 w-6" aria-hidden="true" />
								)}
							</Disclosure.Button>
						</div>
						<nav className={`${open ? 'block' : 'hidden'} flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto`}>
							<Link href="/">
								<span className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
									what I do
								</span>
							</Link>
							<Link href="/where">
								<span className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
									where I've done it
								</span>
							</Link>
							<Link href="/how">
								<span className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
									how I do it
								</span>
							</Link>
							<Link href="/etc">
								<span className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
									more + contact
								</span>
							</Link>
						</nav>

						<Disclosure.Panel className="lg:hidden">
							<div className="px-2 pt-2 pb-3 space-y-1 shadow-lg"></div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			<div>{children}</div>
		</div>
	);
};

export default Nav;
