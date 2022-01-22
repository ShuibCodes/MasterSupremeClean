/* eslint-disable */
import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import { Link } from 'gatsby';
import Layout from '../components/layout'
// basic

const hobbyFeatures = ['Standard Hoover', 'Wet Cleaning', 'Dusting & Polishing'];

// advanced
const growthFeatures = [
	
	'Includes all services in Basic Package ',
	'Full Kitchen Or Bathroom clean including complete wipe down and scrubbing of all appliances ',
];

// supreme
const scaleFeatures = [

	'Includes all services in Advanced Package',
	'Sapiente libero doloribus',
	'Vel ipsa esse repudiandae',
];

import home from '../images/home.png';
import room from '../images/interior-design.png';
import office from '../images/office.png';

export default function PricingSection() {
	return (
		<Layout>
			<div className="bg-white my-36" id="pricing-section">
				<div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-0">
					<div className="text-center">
						
						<p className="mt-2 text-3xl font-extrabold text-black sm:text-4xl lg:text-5xl">
							The right price, for the right home
						</p>
						<p className="mt-4 text-2xl font-medium text-gray-500 sm:text-2xl lg:text-2xl">
						In addition to these packages, you can also opt for one-off cleaning
						</p>
					</div>
				</div>

				<div className="mt-10 bg-white pb-4 lg:-mt-32 lg:pb-20 ">
					<div className="relative z-0">
						<div className="absolute inset-0 h-5/6 lg:h-1/3" />
						<div className="max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
							<div className="relative lg:grid lg:grid-cols-7">
								<div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
									<div className="shadow-xl border-2 border-slate-200 h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
										<div className="flex-1 flex flex-col">
											<div className="bg-white px-6 py-0">
												<div>
													<h3
														className="text-center text-2xl font-medium text-gray-900"
														id="tier-hobby"
													>
														Basic
													</h3>
													<div className="mt-4 flex items-center justify-center">
														<span className="flex items-start tracking-tight text-gray-900">
															<img
																style={{ padding: '10px', height: '120px' }}
																className="w-auto py-4"
																src={room}
																alt="room-logo"
															/>
														</span>
													</div>
													<h5 className="text-center text-1xl font-bold my-4">
														Starts at £55
													</h5>
												</div>
											</div>
											<div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
												<span className=" py-3 lg:py-0 lg:my-0 text-black text-center font-medium">
													{' '}
													1 & 2 Bed Properties
												</span>
												<ul role="list" className="space-y-4">
													{hobbyFeatures.map((feature) => (
														<li key={feature} className="flex items-start">
															<div className="flex-shrink-0">
																<CheckIcon
																	className="flex-shrink-0 h-6 w-6 text-green-500"
																	aria-hidden="true"
																/>
															</div>
															<p className="ml-3 text-base font-medium text-gray-500">
																{feature}
															</p>
														</li>
													))}
												</ul>
												<div className="mt-8">
													<div className="rounded-lg shadow-md">
														<Link
															to="/contact"
															className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
															aria-describedby="tier-hobby"
														>
															Get Started
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="mt-10 py-24 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
									<div className="relative z-10 rounded-lg shadow-xl">
										<div
											className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"
											aria-hidden="true"
										/>
										<div className="absolute inset-x-0 top-0 transform translate-y-px">
											<div className="flex justify-center transform -translate-y-1/2">
												<span
													style={{ backgroundColor: '#1070D9' }}
													className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white"
												>
													Most popular
												</span>
											</div>
										</div>
										<div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
											<div>
												<h3
													className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6"
													id="tier-growth"
												>
													Advanced
												</h3>
												<div className="mt-4 flex items-center justify-center">
													<span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
														<img
															style={{ maxHeight: '130px' }}
															className="h-100 w-100"
															src={home}
															alt="room-logo"
														/>
													</span>
												</div>
												<h5 className="text-center text-2xl font-medium mt-5 ">
													Starts at £70{' '}
												</h5>
											</div>
										</div>
										<div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
											<p className="py-3 lg:py-0 lg:my-2 lg:-mt-2 text-black text-center font-medium">
												{' '}
												3-4 Bed Properties
											</p>
											<ul role="list" className="space-y-4">
												{growthFeatures.map((feature) => (
													<li key={feature} className="flex items-start">
														<div className="flex-shrink-0">
															<CheckIcon
																className="flex-shrink-0 h-6 w-6 text-green-500"
																aria-hidden="true"
															/>
														</div>
														<p className="ml-3 text-base font-medium text-gray-500">
															{feature}
														</p>
													</li>
												))}
											</ul>
											<div className="mt-10">
												<div className="rounded-lg shadow-md">
													<Link
														to="/contact"
														style={{ backgroundColor: '#1070D9' }}
														className="block w-full text-center rounded-lg border border-transparent px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700"
														aria-describedby="tier-growth"
													>
														Get Started
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
									<div className="h-full flex flex-col rounded-lg shadow-xl border-2 border-slate-200 overflow-hidden lg:rounded-none lg:rounded-r-lg">
										<div className="flex-1 flex flex-col">
											<div className="bg-white px-6 py-10">
												<div>
													<h3
														className="text-center text-2xl font-medium text-gray-900"
														id="tier-scale"
													>
														Supreme
													</h3>
													<div className="mt-4 flex items-center justify-center">
														<span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
															<img
																style={{ padding: '10px', height: '120px' }}
																className="w-auto py-4"
																src={office}
																alt="room-logo"
															/>
														</span>
													</div>
													<h4 className="text-center font-bold ">Starts at £100</h4>
												</div>
											</div>
											<div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
												<span className=" py-3 lg:py-2 lg:my-1 lg:-mt-4 text-black  text-center font-medium">
													{' '}
													5+ Bed Properties
												</span>
												<ul role="list" className="space-y-4">
													{scaleFeatures.map((feature) => (
														<li key={feature} className="flex items-start">
															<div className="flex-shrink-0">
																<CheckIcon
																	className="flex-shrink-0 h-6 w-6 text-green-500"
																	aria-hidden="true"
																/>
															</div>
															<p className="ml-3 text-base font-medium text-gray-500">
																{feature}
															</p>
														</li>
													))}
												</ul>
												<div className="mt-8">
													<div className="rounded-lg shadow-md">
														<Link
															to="/contact"
															className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
															aria-describedby="tier-scale"
														>
															Get Started
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
