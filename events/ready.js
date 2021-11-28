const fs = require("fs");
module.exports = async client => {
	console.log("Ready!");
	const activities = [
		"ShvrkBait's outro",
		"?help",
		"The CraftCast"
	];
  let i = 0;
	setInterval(
		() =>
			client.user.setActivity(
				`${activities[i++ % activities.length]}`,
				{ type: "LISTENING" }
			),
		15000
	);

  client.Manager.init(client.user.id);
  client.log("Successfully Logged in as " + client.user.tag); // You can change the text if you want, but DO NOT REMOVE "client.user.tag"
  client.RegisterSlashCommands();
};
