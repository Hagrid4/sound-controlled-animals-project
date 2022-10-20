function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Uh67QPvQy/model.json", modelReady);
}
function modelReady()
{
    classifier.classifier(gotResults);
}
function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log('got results')
    }
}