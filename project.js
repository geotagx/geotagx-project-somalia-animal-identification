geotagx.task.run("animals", function(question, answer){
    switch (question){
		case 1: // Do you see domestic animals in this photo?
            if (answer === "Yes")
                geotagx.task.showNextQuestion();
            else
                geotagx.task.finish();
            break;
		case 3: // Is the animal alive or dead?
			if (answer !== "Dead")
				geotagx.task.showNextQuestion();
			else
				geotagx.task.finish();
			break;
        case 2: // What is the animal you are looking at?
        case 4: // Do you see any indicators of good health?
		case 5: // What about indicators of poor health?
			geotagx.task.showNextQuestion();
		default:
			break;
	}
});
