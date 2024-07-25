document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        "G01 Perasaan sedih yang mendalam",
        "G02 Kehilangan ketertarikan atau kesenangan",
        "G03 Kurang tidur atau tidur berlebihan hampir setiap hari  ",
        "G04 Rasa letih atau tidak ada energi hampir setiap hari ", 
        "G05 Perasaan tidak berharga dan rasa bersalah yang berlebihan ",
        "G06 Memikirkan tentang kematian secara berulang-ulang   ",
        "G07 Muncul ide bunuh diri dengan rencana yang spesifik ",
        "G08 Penolakan untuk tidur tidak di rumah atau tidur tanpa ada orang terdekat ",
        "G09 Mimpi buruk yang berulang-ulang tentang perpisahan ",
        "G10 Mengeluh berulang tentang gejala fisik ketika berpisah dengan orang terdekat ", 
        "G11 Objek atau situasi fobia hampir selalu memancing ketakutan/kecemasan tiba-tiba ",
        "G12 Objek atau situasi fobia secara aktif dihindari   ",
        "G13 Situasi sosial hampir selalu memicu rasa takut atau cemas.  ",
        "G14 Situasi sosial dihindari dengan ketakutan dan kecemasan yang intens ",
        "G15 Rasa takut atau cemas yang muncul tidak sesuai dengan kenyataan ",
        "G16 Adanya rasa cemas dan khawatir yang berlebihan ",
        "G17 Individu merasa kesulitan dalam mengontrol rasa cemas ",
        "G18 Rasa cemas dan khawatir berhubungan dengan rasa gelisah ",
        "G19 Mudah lelah, sulit berkonsentrasi, mudah marah, dan gangguan tidur ",
        "G20 Kesulitan dalam membuang atau berpisah dengan suatu barang ",
        "G21 Perilaku menarik rambut secara berulang-ulang yang menyebabkan rambut rontok ",
        "G22 Percobaan berulang untuk mengurangi/mengentikan menarik rambut ",
        "G23 Ada keluhan berulang mengenai ketidakpuasan tidur ",
        "G24 Kesulitan untuk mulai tidur   ",
        "G25 Kesulitan tidur muncul meskipun terdapat kesempatan yang cukup untuk tidur", 
        "G26 Rasa kantuk berlebihan meskipun sudah tidur selama paling tidak 7 jam ",
        "G27 Periode tidur atau terlelap yang berulang dalam satu hari yang sama ",
        "G28 Episode tidur utama yang sangat lama, lebih dari 9 jam perhari ",
        "G29 Kesulitan untuk bangun sepenuhnya setelah bangun secara tiba-tiba",
        "G41 Merasa terganggu dalam memandang berat badan atau bentuk tubuh sendiri"
    ];

    const questionOverlay = document.getElementById('question-overlay');
    const questionText = document.getElementById('question-text');
    const startButton = document.getElementById('start-button');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const submitButton = document.getElementById('submit-button');
    const currentQuestionIndexInput = document.getElementById('current-question-index');
    const totalQuestions = parseInt(document.getElementById('total-questions').value);
    let currentQuestionIndex = parseInt(currentQuestionIndexInput.value);

    startButton.addEventListener('click', function() {
        document.getElementById('start-overlay').style.display = 'none';
        displayQuestion();
    });

    function displayQuestion() {
        if (currentQuestionIndex < totalQuestions) {
            const question = questions[currentQuestionIndex];
            questionText.textContent = question;
            toggleQuestionOverlay();
        } else {
            alert("Anda telah menjawab semua pertanyaan.");
            document.getElementById('gejalaForm').style.display = 'block';
        }
    }

    function toggleQuestionOverlay() {
        questionOverlay.classList.add('active');
    }

    function closeQuestionOverlay() {
        questionOverlay.classList.remove('active');
    }

    yesButton.addEventListener('click', function() {
        // Simpan jawaban "Ya" ke database atau storage
        currentQuestionIndex++;
        closeQuestionOverlay();
        displayQuestion();
    });

    noButton.addEventListener('click', function() {
        // Simpan jawaban "Tidak" ke database atau storage
        currentQuestionIndex++;
        closeQuestionOverlay();
        displayQuestion();
    });
});
