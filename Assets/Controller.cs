using UnityEngine;
using System.IO;

public class Controller : MonoBehaviour {
  public UnityEngine.UI.Text complimentText;
  public GameObject carter;
  public GameObject[] instructions;
  public TextAsset Phrases;

  public void Generation () {
    carter.SetActive(false);
    foreach(GameObject item in instructions) {item.SetActive(false);}
  	if (Random.Range(0,10000) == 6666) {
  		carter.SetActive(true);
  		complimentText.text = "You have great ideas!";
  	}else {
      complimentText.text = RandomLine(new StreamReader(new MemoryStream(Phrases.bytes)));
      // TODO: Voice to Speech
  	}
  }

  public string RandomLine(StreamReader reader) {
    string line = reader.ReadLine(), chosen = line;
    for (int numberSeen = 2; line != null; numberSeen++, line = reader.ReadLine()) {
      if (Random.Range(0, numberSeen) == 0) chosen = line;
    }
    return chosen;
  }
}
