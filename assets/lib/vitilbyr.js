function hideRooms(roomToShow) {
	const rooms = ['blikkfang', 'spillrommet', 'lysningen', 'fyrtarnet', 'inspirasjon', 'innsikt'];
	for (i = 0; i < rooms.length; i += 1) {
		if (roomToShow !== rooms[i]) {
			$('.' + rooms[i]).hide();
			$('.' + rooms[i] + '_info').hide();
		}
	}
	$('.' + roomToShow).show();
	$('.' + roomToShow + '_info').show();
}

function ToggleFloors() {
	$("#ember1690").click(function () {
		$('.floor2').hide();
		$('.floor3').show();
		hideRooms('inspirasjon')
		$('#ember1689').removeClass('active');
		$('#ember1690').addClass('active');
	});

	$("#ember1689").click(function () {
		$('.floor3').hide();
		$('.floor2').show();
		hideRooms('lysningen')
		$('#ember1690').removeClass('active');
		$('#ember1689').addClass('active');
	});
	ToggleRoom();
}

function ToggleRoom() {
	const rooms = ['blikkfang', 'spillrommet', 'lysningen', 'fyrtarnet', 'inspirasjon', 'innsikt'];
	var className = '';
	$("area").click(function () {
		className = $(this).attr("class");
		var classString = className.split('_')[0];
		console.log(classString);
		for (i = 0; i < rooms.length; i += 1) {
			hideRooms(classString);
		}
	})
}


$(document).ready(function () {
	$('.floor3').hide();
	hideRooms('lysningen')
	ToggleFloors();
});

