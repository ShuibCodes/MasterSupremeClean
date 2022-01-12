/* eslint-disable */
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function ContactPage(props) {
	console.log(props)
	return (
		<Layout>
			<SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title="Contact" />
			<div class="relative bg-white">
				<div class="lg:absolute lg:inset-0">
					<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
						<img
							class="h-56 w-full object-cover lg:absolute lg:h-full"
							src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
							alt="contact-image"
						/>
					</div>	
				</div>
				<div class="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
					<div class="lg:pr-8">
						<div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
							<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Request A Free Cleaning Quote</h2>
							<p class="mt-4 text-lg text-gray-500 sm:mt-3">
								We’d love to hear from you! Send us a message using the form opposite and we'll get back to you with a quote 
							</p>
							<form

								action="https://getform.io/f/9ecac829-8b1c-4bf9-9d59-6f609815a648"
								method="POST"
								class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
							>
								<div>
									<label for="first-name" class="block text-sm font-medium text-gray-700">
										Full Name
									</label>
									<div class="mt-1">
										<input
											type="text"
											name="first-name"
											id="first-name"
											autocomplete="given-name"
											class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
										/>
									</div>
								</div>
								<div>
									<label for="last-name" class="block text-sm font-medium text-gray-700">
										Post Code
									</label>
									<div class="mt-1">
										<input
											type="text"
											name="post-code"
											id="last-name"
											autocomplete="family-name"
											class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
										/>
									</div>
								</div>
								<div class="sm:col-span-2">
									<label for="email" class="block text-sm font-medium text-gray-700">
										Phone
									</label>
									<div class="mt-1">
										<input
											id="email"
											name="phone"
											type="text"
											autocomplete="phone"
											class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
										/>
									</div>
								</div>
								
								
								
								<div class="sm:col-span-2">
									<div class="flex justify-between">
										<label for="how-can-we-help" class="block text-sm font-medium text-gray-700">
											How can we help you?
										</label>
										<span id="how-can-we-help-description" class="text-sm text-gray-500">
											Max. 500 characters
										</span>
									</div>
									<div class="mt-1">
										<textarea
											id="how-can-we-help"
											name="how-can-we-help"
											aria-describedby="how-can-we-help-description"
											rows="4"
											class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
										></textarea>
									</div>
								</div>
								<fieldset class="sm:col-span-2">
									<legend class="block text-sm font-medium text-gray-700">Service Required</legend>
									<div class="mt-4 grid grid-cols-1 gap-y-4">
										<div class="flex items-center">
											<input
												id="services"
												name="services"
												value="Full-house-clean"
												type="checkbox"
												class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
											/>
											<label for="full-house-clean" class="ml-3">
												<span class="block text-sm text-gray-700">Full House Clean</span>
											</label>
										</div>
										<div class="flex items-center">
											<input
												
												name="services"
												value="1-3 Rooms"
												type="checkbox"
												class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
											/>
											<label for="budget-25k-50k" class="ml-3">
												<span class="block text-sm text-gray-700">1-3 Rooms</span>
											</label>
										</div>
										<div class="flex items-center">
											<input
												id=""
												name="services"
												value="studio-flat"
												type="checkbox"
												class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
											/>
											<label for="" class="ml-3">
												<span class="block text-sm text-gray-700">Studio Flat</span>
											</label>
										</div>
									
									</div>
								</fieldset>
							
								<div class="text-right sm:col-span-2">
									<button
										type="submit"
										style={{ backgroundColor: '#1070D9' }}
										class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default ContactPage;
