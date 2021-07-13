console.log("If you see this in browser, that means our script is running.");
console.log(document.querySelector("button"));


const tick = () => {
    const date = new Date();
    const time = date.toLocaleTimeString('en-US');
    myClockFace.innerHTML = time;


	if (crazyMode == true)	
		{
			changeColor()
		}

};

crazyMode() {

	if crazyMode == true
		crazyMode = false'
	else
		crazyMode = true;
}


const myClockFace = document.querySelector("#clock-face");
const myButton = document.querySelector(".btn");
const body = document.querySelector("body");

console.log("Here is the clock face element:");
console.log(myClockFace);
console.log("Here is the button element:");
console.log(myButton);


myClockFace.innerHTML = "23:59:59 PM";
myButton.style.color = "red";
myButton.style.fontSize = "2em";

setInterval(tick, 1000);

const normalMode = () => {
	body.style.backgroundColor = "#ffffff";
};

const  crazyMode = () => {
	
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
  	document.body.style.backgroundColor = "#" + randomColor;
  	color.body = "#" + randomColor;
	addEventListener("tick", body.style.backgroundColor = color.body) 
};

EventListener("tick", tick);
EventListener("on-click", crazy)


