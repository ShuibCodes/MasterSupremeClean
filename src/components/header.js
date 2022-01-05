/* eslint-disable */
import { graphql, useStaticQuery, Link } from 'gatsby';
import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import {
	BookmarkAltIcon,
	CalendarIcon,
	ChartBarIcon,
	CursorClickIcon,
	MenuIcon,
	PhoneIcon,
	PlayIcon,
	RefreshIcon,
	ShieldCheckIcon,
	SupportIcon,
	ViewGridIcon,
	XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import logo from '../images/MastersSC-logo.png';
import { MdOutlineDryCleaning } from 'react-icons/md';
import { BsCurrencyDollar } from 'react-icons/bs';
import { BsQuestionLg } from 'react-icons/bs';
function Header() {
	const features = [
		{
			name: 'Services',
			href: '#',
			description: '',
			icon: MdOutlineDryCleaning,
		},
		{
			name: 'Pricing',
			href: '#',
			description: '',
			icon: BsCurrencyDollar,
		},
		{ name: 'FAQs', href: '#', description: "Your customers' data will be safe and secure.", icon: BsQuestionLg },
		{
			name: 'Get A Quote',
			href: '#',
			description: '',
			icon: 'h',
		},
	];

	return (
		<header className="">
			<Popover className="relative bg-white shadow">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
						<div className="flex justify-start lg:w-100 lg:flex-1">
							<a href="#">
							<Link to="/Landing">
								<img className="h-10 w-100 sm:h-100" src={logo} alt="" />
								</Link>
							</a>
						</div>
						<div className="-mr-2 -my-2 md:hidden">
							<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
								<span className="sr-only">Open menu</span>
								<MenuIcon className="h-6 w-6" aria-hidden="true" />
							</Popover.Button>
						</div>
						<Popover.Group as="nav" className="hidden md:flex space-x-10">
							<Popover className="relative">
								{({ open }) => (
									<>
										<span>Services</span>

										<Transition
											as={Fragment}
											enter="transition ease-out duration-200"
											enterFrom="opacity-0 translate-y-1"
											enterTo="opacity-100 translate-y-0"
											leave="transition ease-in duration-150"
											leaveFrom="opacity-100 translate-y-0"
											leaveTo="opacity-0 translate-y-1"
										>
											<Popover.Panel className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
												<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
													<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
														<a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
															<MdOutlineDryCleaning
																className="flex-shrink-0 h-6 w-6 text-indigo-600"
																aria-hidden="true"
															/>
															<div className="ml-4">
																<p className="text-base font-medium text-gray-900">
																	Services
																</p>
															</div>
														</a>
														<a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
															<MdOutlineDryCleaning
																className="flex-shrink-0 h-6 w-6 text-indigo-600"
																aria-hidden="true"
															/>
															<div className="ml-4">
																<p className="text-base font-medium text-gray-900">
																	Services
																</p>
															</div>
														</a>
														<a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
															<MdOutlineDryCleaning
																className="flex-shrink-0 h-6 w-6 text-indigo-600"
																aria-hidden="true"
															/>
															<div className="ml-4">
																<p className="text-base font-medium text-gray-900">
																	Services
																</p>
															</div>
														</a>
													</div>
												</div>
											</Popover.Panel>
										</Transition>
									</>
								)}
							</Popover>
							
							<Link to="/PricingPage" className="text-base font-medium text-gray-500 hover:text-gray-900" onClick={() => scrollTo('#pricing-section')}>
								
									Pricing
							
							</Link>
							<a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
								FAQ's
							</a>
						</Popover.Group>
						<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
							<Link
							to="/contact"
								style={{ backgroundColor: '#1070D9' }}
							
								className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-indigo-700"
							>
								Get a Quote
							</Link>
						</div>
					</div>
				</div>

				<Transition
					as={Fragment}
					enter="duration-200 ease-out"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="duration-100 ease-in"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Popover.Panel
						focus
						className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
					>
						<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
							<div className="pt-5 pb-6 px-5">
								<div className="flex items-center justify-between">
									<div>
										<img className="h-8 w-auto" src={logo} alt="logo" />
									</div>
									<div className="-mr-2">
										<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
											<span className="sr-only">Close menu</span>
											<XIcon className="h-6 w-6" aria-hidden="true" />
										</Popover.Button>
									</div>
								</div>
								<div className="mt-6">
									<nav className="grid gap-y-8">
										<a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
											<MdOutlineDryCleaning
												className="flex-shrink-0 h-6 w-6 text-indigo-600"
												aria-hidden="true"
											/>
											<span className="ml-3 text-base font-medium text-gray-900">Services</span>
										</a>
										<a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
											<MdOutlineDryCleaning
												className="flex-shrink-0 h-6 w-6 text-indigo-600"
												aria-hidden="true"
											/>
											<span className="ml-3 text-base font-medium text-gray-900">Services</span>
										</a>
										<a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
											<MdOutlineDryCleaning
												className="flex-shrink-0 h-6 w-6 text-indigo-600"
												aria-hidden="true"
											/>
											<span className="ml-3 text-base font-medium text-gray-900">Services</span>
										</a>
									</nav>
								</div>
							</div>
							<div className="py-6 px-5 space-y-6">
								<div>
									<a
										style={{ backgroundColor: '#1070D9' }}
										href="#"
										className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-indigo-700"
									>
										Get a Quote
									</a>
								</div>
							</div>
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>
		</header>
	);
}

export default Header;
