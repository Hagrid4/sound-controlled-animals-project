function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/lkio1KThV/model.json", modelReady);
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

        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("cat_detected").innerHTML = cat;
        document.getElementById("dog_detected").innerHTML = dog;

        document.getElementById("result_label").innerHTML = 'Detected Voice is of - ' + results[0].label;

        document.getElementById("result_label").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("cat_detected").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("dog_detected").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        img = document.getElementById("hear_img");

        if(results[0].label == 'Dog')
        {
            img.src = 'dog.jpg';
            dog = dog + 1;
            document.getElementById("dog_detected").innerHTML = dog;
        }
        else if(results[0].label == 'Cat')
        {
            img.src = 'cat.webp';
            cat = cat + 1;
            document.getElementById("cat_detected").innerHTML = cat;
        }
        else
        {
            img.src = 'Hear_IMG_1.png';
            document.getElementById("result_label").innerHTML = "Detected Voice is of - Background Noise";
        }
    }
}
cat = 0;
dog = 0;