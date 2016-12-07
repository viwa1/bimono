function sendNotification(title, message, key, func) {
var xhr = new XMLHttpRequest();
var url = "https://fcm.googleapis.com/fcm/send";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.setRequestHeader("Authorization", "key="+key);
xhr.onreadystatechange = function () {
	func(xhr);
}
var data = JSON.stringify({"to":"/topics/offer","data": {"title": title, "message": message}});
xhr.send(data);
}