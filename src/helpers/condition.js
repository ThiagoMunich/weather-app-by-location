export function condition(condition) {
	switch (condition) {
		case 'storm':
			return (icon = {
				name: 'thunderstorm-outline',
				color: '#323232',
			});
		case 'clear_day':
			return (icon = {
				name: 'partly-sunny-outline',
				color: '#FFB300',
			});
		case 'rain':
			return (icon = {
				name: 'rainy-outline',
				color: '#B9BFC4',
			});

		default:
			return (icon = {
				name: 'cloud-outline',
				color: '#1EC9FF',
			});
	}
}
