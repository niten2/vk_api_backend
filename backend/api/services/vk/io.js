import VK from 'vk-io';

const vk = new VK();


const main = async () => {
  vk.setToken("9f576ebab20c667e7ada59ea22b184c8cdaca62490ff3d60685847c62cdc6786829f9b255099ed93a1365")

const response = await vk.api.friends.add({
		user_id: 12347839,
	});

	console.log(response);


}

main()



// https://oauth.vk.com/authorize?client_id=6457596&scope=notify,photos,friends,audio,video,notes,pages,docs,status,questions,offers,wall,groups,messages,notifications,stats,ads,offline&redirect_uri=http://api.vk.com/blank.html&display=page&response_type=token




// https://oauth.vk.com/authorize?client_id=5815949&display=page&redirect_uri=http://example.com/callback&scope=friends&response_type=token&v=5.74&state=123456
