SR54IO = {
	EXPORT_BUTTON_ID: 'export',
	DOWNLOAD_LINK_ID: 'downloadlink',
	getFilename: function() { return 'character'; },
	getData: function() { return 'No data provided. Maybe SR54IO.getData is not set?' },
	display: null,
	link: null,
};

SR54IO.makeTextFile = function(text) {
	var data = new Blob([text], {type: 'text/plain'});
	// if there is a generated file already,
	// revoke the object URL to avoid memory leaks.
	if (SR54IO.link.href !== null) window.URL.revokeObjectURL(SR54IO.link.href);
	SR54IO.link.href = window.URL.createObjectURL(data);
	return SR54IO.link.href;
};

SR54IO.createDownloadLink = function() {
	var data = SR54IO.getData();
	SR54IO.link.href = SR54IO.makeTextFile(data);
	// sanitize a tad by replacing everything that is not a letter or a number by underscores
	var filename = SR54IO.getFilename();
	if (!filename || filename.length == 0) filename = 'character';
	var sane_filename = filename.replace(/[^a-z0-9]/gi, '_').toLowerCase();
	SR54IO.link.download = sane_filename+'.json';
	SR54IO.link.style.display = SR54IO.display;
};

(function () {
	if (SR54IO.link == null) SR54IO.link = document.getElementById(SR54IO.DOWNLOAD_LINK_ID);
	SR54IO.display = SR54IO.link.style.display;
	SR54IO.link.style.display = 'none';

	var button = document.getElementById(SR54IO.EXPORT_BUTTON_ID);
	button.addEventListener('click', SR54IO.createDownloadLink, false);
})();
