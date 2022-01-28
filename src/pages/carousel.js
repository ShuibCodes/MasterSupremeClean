/* eslint-disable */
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import sink from '../images/bath&sink.jpeg';
import toilet from '../images/toilet.jpeg';
import longBath from '../images/long-bath.jpeg';
import dirtyBathroom from '../images/dirty-bathroom.jpeg';
import cleanBathroom from '../images/clean-bathroom.jpeg';
import dirtyKitchen from '../images/dirty-kitchen.jpeg';
import cleanKitchen from '../images/clean-kitchen.jpeg';

function carousel() {
	return (
		<>
			
			<div style={{ width: '500px' }} className="h-96">
				<Carousel autoplay={true} infinite={true} dynamicHeight={true} swipeable={false}>
					<div>
						<img className="h-100 w-100 " src={sink} />
					</div>
					<div>
						<img src={toilet} />
					</div>
					<div>
						<img src={longBath} />
					</div>
					<div>
						<img src={dirtyKitchen} />
					</div>

					<div>
						<img src={cleanKitchen} />
					</div>
					<div>
						<img src={dirtyBathroom} />
					</div>
					<div>
						<img src={cleanBathroom} />
					</div>
				</Carousel>
			</div>
		</>
	);
}

export default carousel;
