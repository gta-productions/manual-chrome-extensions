('use strict');

if (document.body.classList.contains('netflix-hangouts-active')) {
	document.body.classList.remove('netflix-hangouts-active');
	window.location.reload(false);
} else {
	document.body.classList.add('netflix-hangouts-active');

	// main player element  
	const $AkiraPlayer = document.querySelector('.AkiraPlayer');

	// add in top right images 
	const topRightButtonContainerDiv = document.createElement('div');
	topRightButtonContainerDiv.id = 'top-right-btn-container';

	const topRightButtonsString = `
	<img class="fake-button" src="${chrome.extension.getURL('/assets/img/top-right.svg')}">
	<video class="thumbnail-video" autoplay playsinline muted loop src="${chrome.extension.getURL('/assets/videos/video-1.mp4')}"></video>
`;
	topRightButtonContainerDiv.innerHTML = topRightButtonsString;
	$AkiraPlayer.appendChild(topRightButtonContainerDiv);

	// add in background video grid 
	const backgroundVideoGridString = `
	<div id="video-grid">
		<video class="bg-video" autoplay playsinline muted loop src="${chrome.extension.getURL('/assets/videos/video-2.mp4')}"></video>
		<video class="bg-video" autoplay playsinline muted loop src="${chrome.extension.getURL('/assets/videos/video-4.mp4')}"></video>
		<video class="bg-video" autoplay playsinline muted loop src="${chrome.extension.getURL('/assets/videos/video-3.mp4')}"></video>
	</div>
`;
	$AkiraPlayer.insertAdjacentHTML('afterbegin', backgroundVideoGridString);

	const videoGrid = document.getElementById('video-grid');
	const $NFPlayer = document.querySelector('.NFPlayer');
	$NFPlayer.classList.add('bg-video');
	videoGrid.appendChild($NFPlayer);

	// add in bottom bar asset 
	const bottomBarString = `
	<div id="bottom-bar">
		<div id="bottom-left-buttons">
			<img class="fake-button" id="bottom-left-button" src="${chrome.extension.getURL('/assets/img/meeting-label.svg')}"/>
		</div>	
		<div id="bottom-middle-buttons">
			<img class="fake-button" id="bottom-middle-button-left" src="${chrome.extension.getURL('/assets/img/bottom-button-left.svg')}"/>
			<img class="fake-button" id="bottom-middle-button-middle" src="${chrome.extension.getURL('/assets/img/bottom-button-middle.svg')}"/>
			<img class="fake-button" id="bottom-middle-button-right" src="${chrome.extension.getURL('/assets/img/bottom-button-right.svg')}"/>
		</div>
		<div id="bottom-right-buttons">
			<img class="fake-button" id="bottom-right-button-left" src="${chrome.extension.getURL('/assets/img/present-now.svg')}"/>
			<img class="fake-button" id="bottom-right-button-right" src="${chrome.extension.getURL('/assets/img/options.svg')}"/>
		</div>
	</div>
`;
	document.body.insertAdjacentHTML('beforeend', bottomBarString);
}
