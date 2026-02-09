// Asosiy Dastur Mantig'i
let currentMode = 'menu';
let currentIndex = 0;
let filteredKanji = [...kanjiDatabase];
let quizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;
let quizCorrect = 0;
let quizTimer = null;
let quizStartTime = 0;
let memoryCards = [];
let memoryFlipped = [];
let memoryMatched = [];
let memoryMoves = 0;
let memoryTimer = null;
let memoryStartTime = 0;

// Canvas yozish uchun
let canvas, ctx;
let isDrawing = false;
let showingGuide = false;

// Dasturni boshlash
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    
    // Agar qurilma tanlangan bo'lsa, tanlash oynasini yashirish
    if (deviceType) {
        document.getElementById('device-selection').classList.add('hidden');
        updateStats();
    }
    
    // Canvas'ni sozlash
    canvas = document.getElementById('writing-canvas');
    if (canvas) {
        ctx = canvas.getContext('2d');
        setupCanvas();
    }
});

// Qurilmani tanlash
function selectDevice(device) {
    deviceType = device;
    document.body.classList.add(device);
    document.getElementById('device-selection').classList.add('hidden');
    
    // Mobil uchun canvas o'lchamini sozlash
    if (device === 'mobile' && canvas) {
        canvas.width = 400;
        canvas.height = 400;
        setupCanvas();
    }
    
    saveProgress();
    updateStats();
}

// Asosiy menyuga qaytish (dasturdan chiqish)
function exitToMainMenu() {
    // Bu yerda asosiy yapon dasturiga qaytish logikasi
    // Hozircha foydalanuvchiga xabar ko'rsatamiz
    if (confirm("Asosiy menyuga qaytmoqchimisiz? (Barcha taraqqiyot saqlanadi)")) {
        saveProgress();
        // Asosiy dasturga qaytish uchun:
        // window.location.href = 'main-menu.html'; 
        // yoki
        // window.parent.postMessage({action: 'returnToMenu'}, '*');
        alert("Taraqqiyot saqlandi! Asosiy menyuga qaytish uchun dastur tugmasini bosing.");
    }
}

// Tema o'zgartirish
function changeTheme(theme) {
    currentTheme = theme;
    document.body.setAttribute('data-theme', theme);
    
    // Barcha tema tugmalaridan active klassini olib tashlash
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Tanlangan tema tugmasiga active klassini qo'shish
    document.querySelector(`.theme-btn.${theme}`).classList.add('active');
    
    saveProgress();
}

// Statistikani yangilash
function updateStats() {
    const totalKanji = kanjiDatabase.length;
    const learned = learnedKanji.size;
    const learning = learningKanji.size;
    const mastery = Math.round((learned / totalKanji) * 100);
    
    document.getElementById('total-kanji').textContent = totalKanji;
    document.getElementById('learned-count').textContent = learned;
    document.getElementById('learning-count').textContent = learning;
    document.getElementById('mastery-percent').textContent = mastery + '%';
}

// Navigatsiya
function startMode(mode) {
    document.getElementById('main-menu').style.display = 'none';
    
    switch(mode) {
        case 'study':
            document.getElementById('study-mode').classList.add('active');
            currentMode = 'study';
            currentIndex = 0;
            filteredKanji = [...kanjiDatabase];
            displayKanji(0);
            break;
        case 'flashcards':
            document.getElementById('flashcard-mode').classList.add('active');
            currentMode = 'flashcards';
            currentIndex = 0;
            filteredKanji = [...kanjiDatabase];
            displayFlashcard(0);
            break;
        case 'quiz':
            document.getElementById('quiz-mode').classList.add('active');
            currentMode = 'quiz';
            startQuiz();
            break;
        case 'writing':
            document.getElementById('writing-mode').classList.add('active');
            currentMode = 'writing';
            currentIndex = 0;
            filteredKanji = [...kanjiDatabase];
            displayWritingKanji(0);
            break;
        case 'memory':
            document.getElementById('memory-mode').classList.add('active');
            currentMode = 'memory';
            startMemoryGame();
            break;
        case 'progress':
            document.getElementById('progress-mode').classList.add('active');
            currentMode = 'progress';
            showProgress();
            break;
    }
}

function backToMenu() {
    document.querySelectorAll('.learning-screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById('main-menu').style.display = 'block';
    currentMode = 'menu';
    
    // Taymerlarni to'xtatish
    if (quizTimer) clearInterval(quizTimer);
    if (memoryTimer) clearInterval(memoryTimer);
}

// O'rganish rejimi
function displayKanji(index) {
    if (index < 0 || index >= filteredKanji.length) return;
    
    currentIndex = index;
    const kanji = filteredKanji[index];
    
    document.getElementById('study-kanji').textContent = kanji.kanji;
    document.getElementById('study-meaning').textContent = kanji.meaning;
    document.getElementById('study-kun').textContent = kanji.kun || '—';
    document.getElementById('study-on').textContent = kanji.on || '—';
    document.getElementById('study-strokes').textContent = kanji.strokes;
    document.getElementById('study-examples').textContent = kanji.examples;
    
    // Tugma holatini yangilash
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === filteredKanji.length - 1;
}

function previousKanji() {
    if (currentIndex > 0) {
        displayKanji(currentIndex - 1);
    }
}

function nextKanji() {
    if (currentIndex < filteredKanji.length - 1) {
        displayKanji(currentIndex + 1);
    }
}

function markAsLearned() {
    const kanji = filteredKanji[currentIndex].kanji;
    
    if (learnedKanji.has(kanji)) {
        learnedKanji.delete(kanji);
        showMessage("O'rganilganlar ro'yxatidan olib tashlandi", 'info');
    } else {
        learnedKanji.add(kanji);
        learningKanji.delete(kanji);
        showMessage('✓ O\'rganilgan deb belgilandi!', 'success');
        createConfetti();
    }
    
    saveProgress();
    updateStats();
}

// Kartochkalar rejimi
function displayFlashcard(index) {
    if (index < 0 || index >= filteredKanji.length) return;
    
    currentIndex = index;
    const kanji = filteredKanji[index];
    
    document.getElementById('flash-kanji').textContent = kanji.kanji;
    document.getElementById('flash-meaning').textContent = kanji.meaning;
    document.getElementById('flash-reading').textContent = `${kanji.kun || '—'} / ${kanji.on || '—'}`;
    document.getElementById('flash-examples').textContent = kanji.examples;
    
    // Aylantirish holatini qaytarish
    document.querySelector('.flashcard').classList.remove('flipped');
}

function flipCard() {
    document.querySelector('.flashcard').classList.toggle('flipped');
}

function previousFlashcard() {
    if (currentIndex > 0) {
        displayFlashcard(currentIndex - 1);
    }
}

function nextFlashcard() {
    if (currentIndex < filteredKanji.length - 1) {
        displayFlashcard(currentIndex + 1);
    }
}

function shuffleFlashcards() {
    filteredKanji = filteredKanji.sort(() => Math.random() - 0.5);
    currentIndex = 0;
    displayFlashcard(0);
    showMessage('🔀 Kartochkalar aralashtirildi!', 'success');
}

// Test rejimi
function startQuiz() {
    quizScore = 0;
    quizCorrect = 0;
    currentQuizIndex = 0;
    
    // 10 ta tasodifiy savol yaratish
    const shuffled = [...kanjiDatabase].sort(() => Math.random() - 0.5);
    quizQuestions = shuffled.slice(0, 10);
    
    document.getElementById('quiz-score').textContent = '0';
    document.getElementById('quiz-correct').textContent = '0';
    document.getElementById('quiz-progress').textContent = '1/10';
    
    // Taymerni boshlash
    quizStartTime = Date.now();
    if (quizTimer) clearInterval(quizTimer);
    quizTimer = setInterval(updateQuizTimer, 1000);
    
    displayQuizQuestion();
}

function updateQuizTimer() {
    const elapsed = Math.floor((Date.now() - quizStartTime) / 1000);
    document.getElementById('quiz-timer').textContent = elapsed + 's';
}

function displayQuizQuestion() {
    if (currentQuizIndex >= quizQuestions.length) {
        endQuiz();
        return;
    }
    
    const question = quizQuestions[currentQuizIndex];
    const questionTypes = [
        { text: 'Bu kanjining ma\'nosi nima?', answerKey: 'meaning' },
        { text: 'Kun o\'qilishi nima?', answerKey: 'kun' },
        { text: 'On o\'qilishi nima?', answerKey: 'on' }
    ];
    
    const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    document.getElementById('quiz-question-text').textContent = questionType.text;
    document.getElementById('quiz-kanji').textContent = question.kanji;
    
    // Variantlarni yaratish
    const correctAnswer = question[questionType.answerKey];
    const wrongAnswers = kanjiDatabase
        .filter(k => k.kanji !== question.kanji)
        .map(k => k[questionType.answerKey])
        .filter(a => a && a !== correctAnswer)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    
    const options = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
    
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    options.forEach(option => {
        const btn = document.createElement('div');
        btn.className = 'quiz-option';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(btn, option === correctAnswer);
        optionsContainer.appendChild(btn);
    });
    
    document.getElementById('quiz-progress').textContent = `${currentQuizIndex + 1}/10`;
}

function checkAnswer(button, isCorrect) {
    // Barcha variantlarni o'chirib qo'yish
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
    
    if (isCorrect) {
        button.classList.add('correct');
        quizCorrect++;
        quizScore += 10;
        document.getElementById('quiz-correct').textContent = quizCorrect;
        document.getElementById('quiz-score').textContent = quizScore;
    } else {
        button.classList.add('incorrect');
        // To'g'ri javobni ko'rsatish
        document.querySelectorAll('.quiz-option').forEach(opt => {
            if (!opt.classList.contains('incorrect')) {
                opt.classList.add('correct');
            }
        });
    }
    
    // Keyingi savolga o'tish
    setTimeout(() => {
        currentQuizIndex++;
        displayQuizQuestion();
    }, 1500);
}

function endQuiz() {
    clearInterval(quizTimer);
    const elapsed = Math.floor((Date.now() - quizStartTime) / 1000);
    
    userStats.quizzesTaken++;
    userStats.correctAnswers += quizCorrect;
    saveProgress();
    
    document.getElementById('quiz-question-text').textContent = 'Test tugadi!';
    document.getElementById('quiz-kanji').textContent = '🎉';
    
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 20px;">
            <h2 style="color: var(--accent-primary); margin-bottom: 20px;">Sizning natijangiz</h2>
            <p style="font-size: 1.5rem; margin: 10px 0;">Ball: ${quizScore} ball</p>
            <p style="font-size: 1.5rem; margin: 10px 0;">To'g'ri: ${quizCorrect}/10</p>
            <p style="font-size: 1.5rem; margin: 10px 0;">Vaqt: ${elapsed} soniya</p>
            <p style="font-size: 1.2rem; margin-top: 20px; color: var(--text-secondary);">
                ${quizCorrect >= 8 ? 'すばらしい! Ajoyib ish!' : quizCorrect >= 5 ? 'いい! Yaxshi!' : 'がんばって! Davom eting!'}
            </p>
        </div>
    `;
}

// Yozish mashqlari
function setupCanvas() {
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    // Sensorli qo'llab-quvvatlash
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const mouseEvent = new MouseEvent('mousedown', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    });
    
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousemove', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    });
    
    canvas.addEventListener('touchend', (e) => {
        e.preventDefault();
        const mouseEvent = new MouseEvent('mouseup', {});
        canvas.dispatchEvent(mouseEvent);
    });
    
    clearCanvas();
}

function displayWritingKanji(index) {
    if (index < 0 || index >= filteredKanji.length) return;
    
    currentIndex = index;
    const kanji = filteredKanji[index];
    
    document.getElementById('writing-kanji').textContent = kanji.kanji;
    document.getElementById('writing-meaning').textContent = kanji.meaning;
    
    clearCanvas();
    if (showingGuide) {
        drawGuide(kanji.kanji);
    }
}

function startDrawing(e) {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
    if (!isDrawing) return;
    
    const rect = canvas.getBoundingClientRect();
    ctx.lineWidth = deviceType === 'mobile' ? 6 : 8;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
}

function stopDrawing() {
    isDrawing = false;
}

function clearCanvas() {
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // To'r chizish
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    
    // Markaziy chiziqlar
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
    
    // Diagonal yo'riqnomalar
    ctx.strokeStyle = '#f0f0f0';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.moveTo(canvas.width, 0);
    ctx.lineTo(0, canvas.height);
    ctx.stroke();
    
    showingGuide = false;
}

function showGuide() {
    showingGuide = !showingGuide;
    const kanji = filteredKanji[currentIndex];
    clearCanvas();
    
    if (showingGuide) {
        drawGuide(kanji.kanji);
    }
}

function drawGuide(kanji) {
    const fontSize = deviceType === 'mobile' ? 300 : 380;
    ctx.font = `${fontSize}px "Noto Sans JP"`;
    ctx.fillStyle = 'rgba(255, 107, 157, 0.2)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(kanji, canvas.width / 2, canvas.height / 2);
}

function previousWriting() {
    if (currentIndex > 0) {
        displayWritingKanji(currentIndex - 1);
    }
}

function nextWriting() {
    if (currentIndex < filteredKanji.length - 1) {
        displayWritingKanji(currentIndex + 1);
    }
}

// Xotira o'yini
function startMemoryGame() {
    memoryMoves = 0;
    memoryMatched = [];
    memoryFlipped = [];
    
    // 8 ta tasodifiy kanji tanlash
    const selected = [...kanjiDatabase]
        .sort(() => Math.random() - 0.5)
        .slice(0, 8);
    
    // Juftlarni yaratish (kanji va ma'no)
    memoryCards = [];
    selected.forEach(k => {
        memoryCards.push({ type: 'kanji', value: k.kanji, id: k.kanji });
        memoryCards.push({ type: 'meaning', value: k.meaning, id: k.kanji });
    });
    
    // Aralashtirish
    memoryCards = memoryCards.sort(() => Math.random() - 0.5);
    
    // Kartalarni chizish
    const grid = document.getElementById('memory-grid');
    grid.innerHTML = '';
    
    memoryCards.forEach((card, index) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'memory-card';
        cardEl.dataset.index = index;
        cardEl.innerHTML = `
            <div class="memory-card-front">?</div>
            <div class="memory-card-back">${card.value}</div>
        `;
        cardEl.onclick = () => flipMemoryCard(index);
        grid.appendChild(cardEl);
    });
    
    document.getElementById('memory-moves').textContent = '0';
    document.getElementById('memory-matches').textContent = '0/8';
    
    // Taymerni boshlash
    memoryStartTime = Date.now();
    if (memoryTimer) clearInterval(memoryTimer);
    memoryTimer = setInterval(updateMemoryTimer, 1000);
}

function updateMemoryTimer() {
    const elapsed = Math.floor((Date.now() - memoryStartTime) / 1000);
    document.getElementById('memory-timer').textContent = elapsed + 's';
}

function flipMemoryCard(index) {
    // Agar allaqachon ochilgan yoki topilgan bo'lsa
    if (memoryFlipped.includes(index) || memoryMatched.includes(index)) return;
    if (memoryFlipped.length >= 2) return;
    
    const cardEl = document.querySelectorAll('.memory-card')[index];
    cardEl.classList.add('flipped');
    memoryFlipped.push(index);
    
    if (memoryFlipped.length === 2) {
        memoryMoves++;
        document.getElementById('memory-moves').textContent = memoryMoves;
        
        setTimeout(checkMemoryMatch, 800);
    }
}

function checkMemoryMatch() {
    const [idx1, idx2] = memoryFlipped;
    const card1 = memoryCards[idx1];
    const card2 = memoryCards[idx2];
    
    const cards = document.querySelectorAll('.memory-card');
    
    if (card1.id === card2.id && card1.type !== card2.type) {
        // Moslik!
        cards[idx1].classList.add('matched');
        cards[idx2].classList.add('matched');
        memoryMatched.push(idx1, idx2);
        
        document.getElementById('memory-matches').textContent = `${memoryMatched.length / 2}/8`;
        
        if (memoryMatched.length === memoryCards.length) {
            clearInterval(memoryTimer);
            setTimeout(() => {
                showMessage('🎉 Tabriklaymiz! Barcha kartalarni topdingiz!', 'success');
            }, 500);
        }
    } else {
        // Moslik yo'q
        cards[idx1].classList.remove('flipped');
        cards[idx2].classList.remove('flipped');
    }
    
    memoryFlipped = [];
}

// Taraqqiyot kuzatuvi
function showProgress() {
    const grid = document.getElementById('progress-grid');
    grid.innerHTML = '';
    
    kanjiDatabase.forEach(kanji => {
        const kanjiEl = document.createElement('div');
        kanjiEl.className = 'progress-kanji';
        
        if (learnedKanji.has(kanji.kanji)) {
            kanjiEl.classList.add('learned');
        } else if (learningKanji.has(kanji.kanji)) {
            kanjiEl.classList.add('learning');
        }
        
        kanjiEl.textContent = kanji.kanji;
        kanjiEl.title = `${kanji.kanji} - ${kanji.meaning}`;
        
        kanjiEl.onclick = () => showKanjiDetails(kanji);
        
        grid.appendChild(kanjiEl);
    });
}

function showKanjiDetails(kanji) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--bg-card);
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 20px 60px var(--shadow);
        z-index: 1000;
        max-width: 500px;
        width: 90%;
    `;
    
    modal.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 6rem; font-weight: 900; margin-bottom: 20px;">${kanji.kanji}</div>
            <h2 style="color: var(--accent-primary); margin-bottom: 10px;">${kanji.meaning}</h2>
            <p style="font-size: 1.2rem; color: var(--text-secondary); margin: 10px 0;">
                <strong>Kun:</strong> ${kanji.kun || '—'} | <strong>On:</strong> ${kanji.on || '—'}
            </p>
            <p style="font-size: 1rem; margin: 10px 0;"><strong>Chiziqlar:</strong> ${kanji.strokes}</p>
            <p style="font-size: 0.95rem; color: var(--text-secondary); margin-top: 20px;">
                ${kanji.examples}
            </p>
            <button onclick="this.parentElement.parentElement.remove(); document.getElementById('modal-overlay').remove();" 
                    style="background: var(--accent-primary); color: white; border: none; padding: 12px 30px; border-radius: 10px; margin-top: 20px; cursor: pointer; font-size: 1rem;">
                Yopish
            </button>
        </div>
    `;
    
    const overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 999;
    `;
    overlay.onclick = () => {
        modal.remove();
        overlay.remove();
    };
    
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
}

// Yordamchi funksiyalar
function showMessage(text, type = 'info') {
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideInRight 0.5s ease-out reverse';
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

function createConfetti() {
    const colors = ['#ff6b9d', '#4ecdc4', '#ffd93d', '#6bff6b'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: 50%;
            left: 50%;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
        `;
        
        document.body.appendChild(confetti);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 5 + Math.random() * 10;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let x = 0, y = 0, opacity = 1;
        
        const animate = () => {
            x += vx;
            y += vy + 0.5; // Gravitatsiya
            opacity -= 0.02;
            
            confetti.style.transform = `translate(${x}px, ${y}px)`;
            confetti.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                confetti.remove();
            }
        };
        
        animate();
    }
}

// Klaviatura tugmalari
document.addEventListener('keydown', (e) => {
    if (currentMode === 'study') {
        if (e.key === 'ArrowLeft') previousKanji();
        if (e.key === 'ArrowRight') nextKanji();
        if (e.key === ' ') {
            e.preventDefault();
            markAsLearned();
        }
    } else if (currentMode === 'flashcards') {
        if (e.key === 'ArrowLeft') previousFlashcard();
        if (e.key === 'ArrowRight') nextFlashcard();
        if (e.key === ' ') {
            e.preventDefault();
            flipCard();
        }
    } else if (currentMode === 'writing') {
        if (e.key === 'ArrowLeft') previousWriting();
        if (e.key === 'ArrowRight') nextWriting();
        if (e.key === 'c') clearCanvas();
        if (e.key === 'g') showGuide();
    }
});

// Taraqqiyotni davriy saqlash
setInterval(saveProgress, 30000); // Har 30 soniyada