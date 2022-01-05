/* eslint-disable */
import React from 'react';
import cleaner from '../images/cleaner-image.jpg'
import {Link} from 'gatsby'
function CTA() {
	return (
		<div>
			<div className="bg-white">
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
									Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
									sagittis vel nulla nec.
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
