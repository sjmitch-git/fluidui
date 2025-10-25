export const tileOptions = [
	{
		name: 'OpenStreetMap',
		url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		attribution: '&copy; OpenStreetMap contributors',
		subdomains: undefined,
	},
	{
		name: 'CartoDB Positron',
		url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
		attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
		subdomains: ['a', 'b', 'c'],
	},
	{
		name: 'CartoDB Dark Matter',
		url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
		attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
		subdomains: ['a', 'b', 'c'],
	},
	{
		name: 'OpenTopoMap',
		url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
		attribution:
			'Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap (CC-BY-SA)',
		subdomains: undefined,
	},
	{
		name: 'Esri World Imagery',
		url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
		attribution:
			'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
		subdomains: undefined,
	},
]
