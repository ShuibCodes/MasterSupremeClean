/* eslint-disable */
import React, { Fragment, useState } from 'react';
import { Link } from 'gatsby';
import { Popover, Transition } from '@headlessui/react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import PricingSection from './PricingSection';
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
import Services from './Services';
import '../styles/global.css';
import { MdOutlineDryCleaning } from 'react-icons/md';
import { BsCurrencyDollar } from 'react-icons/bs';
import { BsQuestionLg } from 'react-icons/bs';
import cleaner from '../images/window-cleaner.jpg';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

import Carousel from './carousel';
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
		description: 'Speak directly to your customers in a more meaningful way.',
		icon: BsCurrencyDollar,
	},
	{ name: 'FAQs', href: '#', description: "Your customers' data will be safe and secure.", icon: BsQuestionLg },
	
];

const recentPosts = [
	{ id: 1, name: 'Boost your conversion rate', href: '#' },
	{ id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
	{ id: 3, name: 'Improve your customer experience', href: '#' },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Index(props) {
	const [postcode, setPostcode] = useState('');
	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(postcode);
	};
	return (
		<div className="relative bg-gray-50">
			<Popover className="relative bg-white shadow">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
						<div className="flex justify-start lg:w-100 lg:flex-1">
							<a href="#">
								<img style={{ height: '60px' }} className="w-100 sm:h-100" src={logo} alt="" />
							</a>
						</div>
						<div className="-mr-2 -my-2 md:hidden">
							<Popover.Button className="">
								<span className="sr-only">Open menu</span>
								<MenuIcon className="h-6 w-6 relative left-28 " aria-hidden="true" />
							</Popover.Button>
						</div>
						<div className="lg:relative lg:left-72">
							<Popover.Group as="nav" className="hidden md:flex space-x-10">
								<Popover className="relative">
									{({ open }) => (
										<>
											<button onClick={() => scrollTo('#services')}>Services</button>

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
															{features.map((item) => (
																<a
																	key={item.name}
																	href={item.href}
																	className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
																>
																	<item.icon
																		className="flex-shrink-0 h-6 w-6 text-indigo-600"
																		aria-hidden="true"
																	/>
																	<div className="ml-4">
																		<p className="text-base font-medium text-gray-900">
																			{item.name}
																		</p>
																		<p className="mt-1 text-sm text-gray-500">
																			{item.description}
																		</p>
																	</div>
																</a>
															))}
														</div>
													</div>
												</Popover.Panel>
											</Transition>
										</>
									)}
								</Popover>
								<Link to="/Pricing">
									<button
										className="text-base font-medium text-gray-500 hover:text-gray-900"
										onClick={() => scrollTo('#pricing-section')}
									>
										Pricing
									</button>
								</Link>
								<Link to="/FAQ"
								
									className="text-base font-medium text-gray-500 hover:text-gray-900"
								>
									FAQ's
								</Link>
							</Popover.Group>
							
						</div>
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
										<Popover.Button className="">
											<span className="sr-only">Close menu</span>
											<XIcon className="h-6 w-6" aria-hidden="true" />
										</Popover.Button>
									</div>
								</div>
								<div className="mt-6">
									<nav className="grid gap-y-8">
									
											<button 	onClick={() => scrollTo('#services')}
												
												className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
											>
												<MdOutlineDryCleaning
													className="flex-shrink-0 h-6 w-6 text-indigo-600"
													aria-hidden="true"
												/>
												<span className="ml-3 text-base font-medium text-gray-900">
													Services
												</span>
											</button>
											<Link to="FAQ"
												
												className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
											>
												<BsQuestionLg
													className="flex-shrink-0 h-6 w-6 text-indigo-600"
													aria-hidden="true"
												/>
												<span className="ml-3 text-base font-medium text-gray-900">
																FAQ's
												</span>
											</Link>
											<Link to="/Pricing"
												
												className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
											>
												<BsCurrencyDollar
													className="flex-shrink-0 h-6 w-6 text-indigo-600"
													aria-hidden="true"
												/>
												<span className="ml-3 text-base font-medium text-gray-900">
													Pricing
												</span>
											</Link>
									
									</nav>
								</div>
							</div>
							<div className="py-6 px-5 space-y-6">
								<div>
								<Link
										to="/contact"
										style={{ backgroundColor: '#1070D9' }}
									
										className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-indigo-700"
									>
										Get a Quote
									</Link>
								</div>
							</div>
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>

			<main className="lg:relative">
				<div className="mx-auto  max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
					<div className="px-4 lg:-mt-12 lg:w-1/2 sm:px-8 xl:pr-16">
						<h1
							style={{ fontFamily: 'Montserrat' }}
							className="py-4 lg:py-0 text-4xl lg:text-6xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
						>
							<span style={{ fontFamily: 'Montserrat' }} className="block xl:inline font-extrabold ">
								Champions in
							</span>{' '}
							<span
								style={{ fontFamily: 'Montserrat', fontSize: '#1070D9', color: '#1070D9' }}
								className="block xl:inline"
								className="block text-indigo-600 xl:inline font-extrabold "
							>
								Quality Cleaning
							</span>
						</h1>
						<p className="mt-3 max-w-md mx-auto text-lg text-sm text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl ">
						Struggling to find the time to clean up? 
						We've got you covered.
						<span> From one-off deep cleans to 6-month contracts, we have a range of packages to choose from.</span>
						</p>
						<p style={{ color: '#C8A762' }} className="text-base font-medium my-4 font-bold ">
							5* Service. Fully Vetted Cleaners
						</p>
						<div className="mt-10">
							<div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
								<p className="text-base font-medium text-gray-500">
									Enter your Post Code to get started
								</p>
								<form onSubmit={handleSubmit} className="mt-3 sm:flex">
									<label htmlFor="email" className="sr-only">
										Enter your Post Code to get started
									</label>

									<input
										type="text"
										name="postcode"
										id="postcode"
										className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300"
										placeholder="Enter Postcode"
										value={postcode}
										onChange={(e) => setPostcode(e.target.value)}
									/>
									<div class="mt-8 lg:mt-0">
										<Link
											to="/contact"
											style={{ backgroundColor: '#1070D9' }}
											className="w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
										>
											Get Started
										</Link>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-5/6">
					<img className="absolute inset-0 w-full h-full object-cover" src={cleaner} alt="cleaner-image" />
				</div>
			</main>
			<div id="services">
				<Services />
			</div>
			{/* <div id="faqs-section">
				<FAQs />
			</div> */}
			<div className="lg:-mt-8">
			<CTA />
			</div>
			<Footer />
		</div>
	);
}
