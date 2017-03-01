"use strict";

var QUERY_INFO = {
	active: true,
	currentWindow: true
};

var RELOAD_INFO = {
	bypassCache: true
};

function doReload (tabs) {
	chrome.tabs.reload(tabs[0].id, RELOAD_INFO, onComplete)
}

function onComplete () {
	window.setTimeout(function () {
		window.close();
	}, 1000);
}

chrome.tabs.query(QUERY_INFO, doReload);
