import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const carousel = () => {
	const { allContentfulCleaningImages } = useStaticQuery(
		graphql`
			query {
				allContentfulCleaningImages {
					edges {
						node {
							cleans {
								gatsbyImageData(formats: JPG, placeholder: BLURRED)
								title
							}
						}
					}
				}
			}
		`
	);

	return (
		<>
			<div style={{ width: '500px' }} className="h-96">
				<Carousel
					showThumbs={true}
					infinite={true}
					dynamicHeight={true}
					swipeable={false}
					autoPlay
					infiniteLoop
				>
					{allContentfulCleaningImages.edges.map(({ node }) => (
						<GatsbyImage key={node?.cleans.title} image={getImage(node?.cleans)} alt={node?.cleans.title} />
					))}
				</Carousel>
			</div>
		</>
	);
};

export default carousel;
