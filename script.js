
    function caller2() {
        var paragraphs = 0;
        var characters = 0;
        var spaces = 0;
        var sentences = 0;
        var content = document.getElementById("MainInput").value;

        var arr = content.split("");
        var checker = false;

        var counter = 0;

        if (content != null && content != " " && content != "") {
            paragraphs = 1;
        }

        // Word Counter -
        for (i = 0; i < arr.length; i++) {
            var variable = arr[i];
            if (variable != " " && variable != "" && variable != "\n") {
                if (checker == false) {
                    counter = counter + 1;
                    checker = true;
                }
            }
            else {
                checker = false;
            }
        }

        //Character Counter-
        for (i = 0; i < arr.length; i++) {
            if (arr[i] != "") {
                spaces++;
            }
            if (arr[i] != " " && arr[i] != '') {
                characters++;
            }
        }

        // Paragraphs Counter (Modifying Characters)
        for (i = 0; i < arr.length; i++) {
            if (arr[i] == "\n") {
                characters--;
                spaces--;
                if (i != arr.length - 1) {
                    if (arr[i + 1] != "\n" && arr[i + 1] != " " && arr[i + 1] != "") {
                        paragraphs++;
                    }
                }
            }
        }

        //Sentences Counter
        for (i = 0; i < arr.length; i++) {
            if (arr[i] == "." || arr[i] == "?") {
                if (i > 0) {
                    if (arr[i - 1] != " " && arr[i - 1] != "" && arr[i - 1] != "." && arr[i - 1] != "?") {
                        sentences++;
                    }
                }
            }
        }

        var counter_s = counter.toString();
        var characters_s = characters.toString();
        var paragraphs_s = paragraphs.toString();
        var sentences_s = sentences.toString();
        var spaces_s = spaces.toString();

        document.getElementById("Words").innerHTML = "Words = " + counter_s;
        document.getElementById("Characters").innerHTML = "Character = " + characters_s;
        document.getElementById("Paragraphs").innerHTML = "Paragraphs = " + paragraphs_s;
        document.getElementById("Sentences").innerHTML = "Sentences = " + sentences_s;
        document.getElementById("Characters1").innerHTML = "Characters (with space) = " + spaces_s;
    }
    console.log(this);
