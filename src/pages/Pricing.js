/* eslint-disable */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import { Link } from 'gatsby';
import Layout from '../components/layout';
// basic

const hobbyFeatures = ['Hallway cleaning', 'Vacuuming', 'Living room cleaning', 'Dusting & Polishing', 'Waste Removal'];

// advanced
const growthFeatures = [
	'Hallway cleaning',
	'Vacuuming',
	'Living room cleaning',
	'Dusting & Polishing',
	'Waste Removal',
	'Floor Steaming & Disinfecting ',
	'Options of kitchen or bathroom cleaning',
];

// supreme
const scaleFeatures = [
	'Hallway cleaning',
	'Vacuuming',
	'Living room cleaning',
	'Dusting & Polishing',
	'Waste Removal',
	'Floor Steaming & Disinfecting ',
	'Bathroom cleaning',
	'All Bedrooms Included',
];

const tiers = [
	{
		name: 'Deep Clean',
		href: '#',
		priceMonthly: 150,
		description: '',
		features: [
			'Supreme Package',
			'Oven cleaning',
			'Fridge Cleaning',
			'Bathroom Descaling ',
			'Inside Window cleaning ',
		],
	},
	{
		name: 'End of Tenancy',
		href: '#',
		priceMonthly: 190,
		description: '',
		features: [
			'Supreme Package',
			'Oven cleaning',
			'Fridge Cleaning',
			'Bathroom Descaling ',
			'Inside Window cleaning ',
			'Deep Kitchen cleaning & desclaning',
			'Deep bathroom cleaning',
		],
	},
];

import home from '../images/home.png';
import room from '../images/interior-design.png';
import office from '../images/office.png';

export default function PricingSection() {
	const { allContentfulPricingPage } = useStaticQuery(
		graphql`
			query {
				allContentfulPricingPage {
					edges {
						node {
							basicPrice
							price
							supremePrice
						}
					}
				}
			}
		`
	);


	return (
		<Layout>
			<div className="bg-white my-36" id="pricing-section">
				<div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-0">
					<div className="text-center">
						<p className="mt-2 text-3xl font-extrabold text-black sm:text-4xl lg:text-5xl">
							The right price, for the right home
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
													<h5 className="text-center text-2xl font-bold my-4">
														{allContentfulPricingPage.edges[0]?.node.basicPrice}
													</h5>
												</div>
											</div>
											<div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
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
												<h5 className="text-center text-4xl font-bold mt-5 ">
													{allContentfulPricingPage.edges[0].node.price}
												</h5>
											</div>
										</div>
										<div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
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
													<h4 className="text-center text-2xl font-bold ">
														{allContentfulPricingPage.edges[0].node.supremePrice}
													</h4>
												</div>
											</div>
											<div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
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

			<div className="lg:relative lg:bottom-64">
				<div className="pt-0 sm:pt-16 ">
					<div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
						<div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
							<p className="text-3xl text-gray-900 mb-10">
								We also offer Deep Cleaning & End of Tenancy Cleaning
							</p>
						</div>
					</div>
				</div>
				<div className="mt-8 pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
					<div className="relative">
						<div className="absolute inset-0 h-3/4" />
						<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
								{tiers.map((tier) => (
									<div key={tier.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
										<div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
											<div>
												<h3
													className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
													id="tier-standard"
												>
													{tier.name}
												</h3>
											</div>
											<div className="mt-4 flex items-baseline text-6xl font-extrabold">
												£{tier.priceMonthly}
											</div>
											<p className="mt-5 text-lg text-gray-500">{tier.description}</p>
										</div>
										<div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
											<ul role="list" className="space-y-4">
												{tier.features.map((feature) => (
													<li key={feature} className="flex items-start">
														<div className="flex-shrink-0">
															<CheckIcon
																className="h-6 w-6 text-green-500"
																aria-hidden="true"
															/>
														</div>
														<p className="ml-3 text-base text-gray-700">{feature}</p>
													</li>
												))}
											</ul>
											<div className="rounded-md shadow">
												<Link
													to="/contact"
													style={{ backgroundColor: '#1070D9' }}
													className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
													aria-describedby="tier-standard"
												>
													Get started
												</Link>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
						<div className="max-w-md mx-auto lg:max-w-5xl">
							<div className="rounded-lg  px-6 py-8 sm:p-10 lg:flex lg:items-center">
								<div className="flex-1">
									<div>
										<h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
											Commercial Cleaning
										</h3>
									</div>
									<div className="mt-4 text-lg text-gray-600">
										For commercial cleaning, please contact us for a direct quote for all commercial
										queries at{' '}
										<a
											href="mailto:contact@mastersupremeclean.com"
											style={{ color: 'blue', textDecoration: 'underline' }}
										>
											{' '}
											contact@mastersupremeclean.com
										</a>
									</div>
								</div>
								<div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
									<Link
										to="/contact"
										className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
									>
										Contact Us
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
