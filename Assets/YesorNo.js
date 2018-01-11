#pragma strict
var Press : GameObject;
var number;
private var objWithText : GameObject = null;
var ScreenTele : GameObject;
var ScreenOut : GameObject;

function Start () {
	var number = Random.Range(1,102);
	objWithText = GameObject.Find("/Canvas/a1");
}

function Update () {

}

function yesorno () {
	Press.SetActive (false);
	objWithText.transform.position = Vector3(ScreenOut.transform.position.x, ScreenOut.transform.position.y, ScreenOut.transform.rotation.x);
	//Set random number
	var number = Random.Range(1,102);
	objWithText = GameObject.Find("/Canvas/a" + number);
	Debug.Log ("/Canvas/a" + number);
	Debug.Log (number);
	Debug.Log (objWithText);
	objWithText.transform.position = Vector3(ScreenTele.transform.position.x, ScreenTele.transform.position.y, ScreenTele.transform.rotation.x);
}