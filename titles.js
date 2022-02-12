const contentButton = document.getElementById('content-button');

contentButton.addEventListener('click',generateContent);

function generateContent() {

	const propertyType = document.getElementById('property-type').value;
	const propertyName = document.getElementById('property-name').value;
	const city = document.getElementById('city').value;
	const state = document.getElementById('state').value;
	const zipCode = document.getElementById('zip-code').value;
	const titleLength = document.getElementById('title-length').value;
	const customTitle = document.getElementById('custom-title').value;
	const contentDiv = document.getElementById('content');

	const titleEnds = [` ${propertyType}s | ${propertyType}s for Rent in `, ` | ${propertyType}s for Rent in `, ` | ${propertyType}s in `, ` | ${propertyType}s `];

	const content = {
		homepage: {
			page: 'Homepage',
			title: '',
			description: `${propertyName} ${propertyType}s in ${city}, ${state} ${zipCode}. Find your new ${propertyType.toLowerCase()} today! We offer a variety of ${propertyType.toLowerCase()} floor plans. Contact us today!`,
			content: `Come home to ${propertyName} ${propertyType}s in ${city}, ${state}! Our ${propertyType.toLowerCase()}s are home to a fantastic location where endless opportunities for work and play collide. At our ${propertyType.toLowerCase()}s, you can choose from our ${propertyType.toLowerCase()}s that are complete with everything you need to always feel right at home. Here you’ll find yourself surrounded by an amenity-rich community and beautiful scenery. Our ${propertyType.toLowerCase()}s place you in the best destination to embrace ${city} living. This prime neighborhood will give you easier commutes and allow you to experience the perfect balance of modern city life and relaxation. Ready to step into your dream ${propertyType.toLowerCase()}? Apply now to ${propertyName} in ${city} today.`
		},
		gallery: {
			page: 'Gallery',
			title: 'Photos',
			description: `Take a photo tour through your new ${city} ${propertyType.toLowerCase()}, and then schedule a tour today! See for yourself better living at ${propertyName}.`,
			content: `Take a photo tour through ${propertyName} ${propertyType}s in ${city}. Imagine yourself stepping into a lifestyle centered on simplicity and comfort nestled in ${city}. Here, you will experience a thriving community that brings you everything you need to feel right at home. At our ${zipCode} ${propertyType.toLowerCase()}s, you can discover the ideal combination of personal and community amenities that come together to make home the ultimate destination. Our ${city} ${propertyType.toLowerCase()}s for rent feature fantastic local attractions and give you the world at your fingertips. Choose from our ${city} ${propertyType.toLowerCase()}s to discover the right space for you. Every highlight and feature of our ${propertyType.toLowerCase()}s for rent in ${city}, brings you the perfect blend of convenience and relaxation. Apply to ${propertyName} ${propertyType}s today!`
		},
		amenities: {
			page: 'Amenities',
			title: 'Amenities',
			description: `Our ${city}, ${state} ${propertyType.toLowerCase()}s are outfitted with a variety of features. Check out the amenities that will be available to you at ${propertyName}.`,
			content: `Our ${city}, ${state} ${propertyType.toLowerCase()}s bring you to the ultimate hub of work and play where you can dive into the local lifestyle while creating the day-to-day routine you have been waiting for. Here, you will be surrounded by an abundance of local attractions, activities, and entertainment. At the end of each day, you will love coming home to our ${propertyType.toLowerCase()}s near ${city} that have been fully designed with the resident in mind. No matter how you like to spend your free time, ${propertyName} in ${city} can help.`
		},
		'floor-plans': {
			page: 'Floor Plans',
			title: 'Floor Plans',
			description: `At ${propertyName} ${propertyType}s in ${city}, ${state}, you can choose from our ${propertyType.toLowerCase()} floorplans that are complete with everything you need.`,
		},
		neighborhood: {
			page: 'Neighborhood',
			title: 'Neighborhood',
			description: `Experience the best ${city}, ${state} has to offer. Come home to ${propertyName} ${propertyType}s and come home to better living. Contact us today!`,
			content: `Ready to take your lifestyle to the next level? Our ${city}, ${state} ${propertyType.toLowerCase()}s feature everything you look for in a place to call home. Find yourself embracing features that have been tailored to meet your needs. Our ${city} ${propertyType.toLowerCase()}s for rent are designed to be the hub of work and play. Imagine yourself diving into a local lifestyle that surrounds you with feelings of exploration, adventure, and relaxation. Experience ${propertyType.toLowerCase()}s for rent in ${city}, and experience better living. Apply to ${propertyName} ${propertyType}s today!`
		},
		contact: {
			page: 'Contact',
			title: 'Contact Us',
			description: `Interested in learning more about ${propertyName}? Submit the contact form with your questions. Our leasing consultants will contact you soon.`
		},
		'schedule-a-tour': {
			page: 'Schedule a Tour',
			title: 'Schedule a Tour',
			'alt title': 'Tours',
			description: `Call or email us to schedule a tour of ${propertyName} today. Come see your new ${city} ${propertyType.toLowerCase()} and the community features in person.`
		},
		'apply-online': {
			page: 'Apply Online',
			title: 'Apply Online',
			'alt title': 'Apply Now',
			description: `Apply now to ${propertyName}. Our ${city} ${propertyType.toLowerCase()}s provide you with everything that you need to be successful in your daily routine.`
		},
		'virtual-tours': {
			page: 'Virtual Tours',
			title: 'Virtual Tours',
			description: `Take a virtual ${propertyType.toLowerCase()} tour of ${propertyName} in ${city}, ${state}, and walk through one of our ${propertyType.toLowerCase()}s from the comfort of your own home!`,
			content: `Take a virtual ${propertyType.toLowerCase()} tour of ${propertyName} in ${city}, ${state} and walk through one of our ${propertyType.toLowerCase()}s from the comfort of your own home! Our virtual tours highlights all the features of our stunning ${city} ${propertyType.toLowerCase()}s and amenities.`
		},
		'pet-friendly': {
			page: 'Pet Friendly',
			title: 'Pet Friendly',
			description: `${propertyName} is not just a pet-friendly property, but a pet-enthusiastic property. Your pets will find just as inviting a home here as you will.`
		},
		directions: {
			page: 'Directions',
			title: 'Directions',
			description: `Stop by and visit ${propertyName} today! Just type in your location and follow the directions to your future ${city} ${propertyType.toLowerCase()} community.`
		},
		faq: {
			page: 'FAQ',
			title: 'FAQ',
			description: `Check out some of the frequently asked questions about ${propertyName} in ${city}, ${state}, then contact us about your future ${propertyType.toLowerCase()} today!`
		},
		availability: {
			page: 'Availability',
			title: `${propertyType} Search`,
			'alt title': 'Availability',
			description: `Search through the available ${propertyType.toLowerCase()}s at ${propertyName} and find the perfect ${city}, ${state} ${propertyType.toLowerCase()} for you, then apply online today!`
		},
		reviews: {
			page: 'Reviews',
			title: 'Reviews',
			description: `See what people are saying about ${propertyName}! We value our residents' voices, and can’t wait for you to see our ${city} ${propertyType.toLowerCase()}s.`
		},
		'resident-portal': {
			page: 'Resident Portal',
			title: 'Resident Portal',
			'alt title': 'Residents',
			description: `The resident portal for ${propertyName} in ${city}, ${state} makes it easy for you to request maintenance service and pay your rent online.`
		},
		'reset-password': {
			page: 'Reset Password',
			title: 'Reset Password',
			'alt title': 'Password',
			description: `Reset your password for ${propertyName} ${propertyType}s in ${city}, ${state}. Please enter your User ID, and we will help you reset your account.`
		},
		'find-userid': {
			page: 'Find UserID',
			title: 'Find UserID',
			'alt title': 'UserID',
			description: `Find your UserID for ${propertyName} ${propertyType}s in ${city}, ${state}. Please enter the email address you registered with when you moved in.`
		},
		'privacy-policy': {
			page: 'Privacy Policy',
			title: 'Privacy Policy',
			'alt title': 'Privacy',
			description: `This is the privacy policy statement for ${propertyName} ${propertyType}s in ${city}, ${state}. Please contact us with any questions you may have.`
		},
		'accessibility-statement': {
			page: 'Accessibility Statement',
			title: 'Accessibility Statement',
			'alt title': 'Accessibility',
			description: `At ${propertyName}, we actively work to increase the accessibility of our website and adhere to many of the available standards and guidelines.`
		},
		terms: {
			page: 'Terms',
			title: 'Terms',
			description: `By accessing the website for ${propertyName}, you agree to be bound by the website Terms and Conditions of Use, all applicable laws, and regulations.`
		},
		'ca-privacy-notice': {
			page: 'CA Privacy Notice',
			title: 'CA Privacy Notice',
			'alt title': 'CA Privacy',
			description: `This is a privacy notice for the ${propertyName} website that applies solely to all visitors, users, and others who reside in the State of California.`
		},
		'virtual-leasing': {
			page: 'Virtual Leasing',
			title: 'Virtual Leasing',
			description: `${propertyName} ${propertyType}s in ${city}, ${state} offers virtual leasing, which lets you find a floor plan, apply, and sign a lease securely online.`
		},
		'covid-19-faq': {
			page: 'Covid-19 FAQ',
			title: 'Covid-19 FAQ',
			'alt title': 'Covid FAQ',
			description: `Find COVID-19 updates and read through ${propertyName} ${propertyType}s COVID-19 FAQ to learn more about the actions and leasing procedures we’re taking.`
		},
		'urban-village': {
			page: 'Urban Village',
			title: 'Urban Village',
			description: `As part of our commitment to delivering excellence in ${propertyType.toLowerCase()} living, we proudly offer the Urban Village Program in each of our communities.`
		},
		custom: {
			page: 'Custom',
			title: `${customTitle}`
		}
	};

	//loop through content array to generate HTML

	for (let key in content) {

		if (!content.hasOwnProperty(key)) continue;

		//removes HTML that was previously generated
		const oldDiv = document.getElementById(`${key}-content`);


		if (oldDiv) {
			while (oldDiv.firstChild) {
				oldDiv.removeChild(oldDiv.firstChild);
			};
			contentDiv.removeChild(oldDiv);
		};

		//adds div for each key in the content object

		const newDiv = document.createElement('div');
		newDiv.setAttribute('id', `${key}-content`);
		contentDiv.appendChild(newDiv);

		const obj = content[key];

		//loop through each object inside content object to generate HTML

		for (prop in obj) {

			if (!obj.hasOwnProperty(prop)) continue;

			//creates h2 from page type

			if (prop === 'page') {

				const newH = document.createElement('h2')
				newH.innerHTML = obj[prop];
				newDiv.appendChild(newH);

			//generates title less than 65 characters long by looping through titleEnds array if the content is a title

			} else if (prop.includes('title')) {

				const newTitle = document.createElement('p');

					for (let i = 0; i < titleEnds.length; i++) {

						//if title value is empty leaves pipe out, otherwise adds pipe between title value and rest of title

						let bar
						if (!obj[prop]) {
							bar = "";
						} else {
							bar = " | ";
						};

						let pageTitle = obj[prop].concat(bar, propertyName, titleEnds[i], city, ', ', state, ', ', zipCode);

						if (pageTitle.length <= titleLength) {

							newTitle.innerHTML = `<b>${prop.toUpperCase()}: </b> ${pageTitle}`;
							break;

						} else {

							pageTitle = obj[prop].concat(bar, propertyName, titleEnds[i], city, ', ', state);

							if (pageTitle.length <= titleLength) {
								newTitle.innerHTML = `<b>${prop.toUpperCase()}: </b> ${pageTitle}`;
								break;
							} else if (i === titleEnds.length - 1) {
								newTitle.innerHTML = `<b>${prop.toUpperCase()}: </b>ERROR: inputs too long to create title shorter than max title length.`;
								break;
							};
						};
					};

				newDiv.appendChild(newTitle);

			//adds any other content types as a p

			} else {

				const newContent = document.createElement('p');
				newContent.innerHTML = `<b>${prop.toUpperCase()}:</b> ${obj[prop]}`;
				newDiv.appendChild(newContent);
			};
		};
	};

};
