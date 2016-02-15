#pragma strict
var Press : GameObject;
var nu : String;
var number;
private var objWithText : GameObject = null;

function Start () {
	var number = Random.Range(1,102);
	
}

function Update () {

}

function yesorno () {
	Press.SetActive (false);
	var number = Random.Range(1,11);
	nu == number;
	objWithText = GameObject.Find(nu);
	objWithText.SetActive (false);
	Debug.Log (number);
	if (number == 1) {
	
	}
}