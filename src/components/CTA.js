/* eslint-disable */
import React from 'react';
import cleaner from '../images/cleaner-image.jpg'
import {Link} from 'gatsby'
import Carousel from '../pages/carousel'

function CTA() {
	return (
		// Gallery 
		<div className="lg:-mt-14">
		<div>
		<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
				<div class="text-center">
					<h2 style={{ color: '#C8A762' }} class="text-base font-semibold tracking-wide uppercase">
						Gallery
					</h2>
					<p
						style={{ color: '#1070D9' }}
						class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
					>
						Our Previous Cleans
					</p>
					<p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
						We hire the most effecient and thourough cleaners to ensure all our customers are satisfied
					</p>
				</div>
			</div>
		  <div class="flex h-auto justify-center items-center lg:-mt-12 ">
			<Carousel/>
			</div>

		</div>




			<div className="bg-white mt-96 py-64">
				<div className="-mt-64 w-screen mx-auto py-16 px-4 sm:px-6 lg:px-8">
					<div
						style={{ backgroundColor: '#1070D9' }}
						className=" rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
					>
						<div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
							<div className="lg:self-center">
								<h2 className="text-3xl font-extrabold text-white sm:text-4xl">
									<span className="block">Ready to get started?</span>
									<span className="block mt-2">Get Your FREE quote today!</span>
								</h2>
								<p className="mt-4 text-lg leading-6 text-indigo-200">
									Our team will provide you with a free quote based on what type of cleaning service you would like
								</p>
								<Link
									to="/contact"
									href="#"
									className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
								>
									Get a Quote
								</Link>
							</div>
						</div>
						<div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
							<img
								className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
								src={cleaner}
								alt="cleaner-cta"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CTA;
