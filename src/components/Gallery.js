/* eslint-disable */
import React from 'react';

import longBath from '../images/long-bath.jpeg';
import toilet from '../images/toilet.jpeg';
import sink from '../images/bath&sink.jpeg';
import '../styles/global.css'
function Gallery() {
	return (
		<div class="center-center">
			<div class="max-w-7xl mx-auto sm:px-6 lg:px-8 py-24 py-64 ">
				<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
					<div class="text-center">
						<h2 style={{color:"#C8A762"}}  class="text-base font-semibold tracking-wide uppercase">Gallery</h2>
						<p style={{color: '#1070D9' }}  class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
							Our Previous Cleans
						</p>
						<p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
							We hire the most effecient and thourough cleaners to ensure all our customers are satisfied
						</p>
					</div>
				</div>
				<div class=" mx-auto lg:mx-24 px-4 -mt-12">
					<section  class="image-size py-8" >
						<div class="grid grid-cols-1 lg:grid-cols-3 gap-2 -mx-4">
							<div class="col-span-2">
								<div class="h-auto w-auto p-8 mt-4">
									<img src={longBath} alt="clean bathroom" />
								</div>
							</div>
							<div class="p-4 mt-8">
								<div class="py-1 ">
									<img src={toilet} alt="clean bathroom" />
								</div>
								<div class="">
								<div class="">
									<img src={sink} alt="clean bathroom" />
								</div>
							
							</div>
							</div>
							
						</div>
					</section>
					
					
				</div>
			</div>
		</div>
	);
}

export default Gallery;
