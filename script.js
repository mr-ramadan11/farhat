// تشغيل التطبيق
function startApp(){
  document.querySelector(".hero").style.display="none";
  document.querySelector(".about").style.display="none";
  document.getElementById("app").style.display="block";
}

// 🔥 إنشاء الدروس داخل كل وحدة
function createLessons(){
  return {
    "درس استماع": {},
    "درس قراءة 1": {},
    "درس نحو 1": {},
    "درس قواعد إملاء": {},
    "درس موضوع تعبير": {},
    "درس قراءة 2": {},
    "درس نحو 2": {},
    "درس تطبيق على القواعد الإملاء": {},
    "درس تطبيق على موضوع التعبير": {},
    "النص الشعري": {},
    "مراجعة": {}
  };
}

// 🔥 إنشاء الوحدات
function createUnits(){
  return {
    "الوحدة الأولى": createLessons(),
    "الوحدة الثانية": createLessons(),
    "الوحدة الثالثة": createLessons()
  };
}

// 🔥 المرحلة الابتدائية
const primary = {
  "الصف الأول": createUnits(),
  "الصف الثاني": createUnits(),
  "الصف الثالث": createUnits(),
  "الصف الرابع": createUnits(),
  "الصف الخامس": createUnits(),
  "الصف السادس": createUnits()
};

// 🔥 المرحلة الإعدادية
const prep = {
  "الصف الأول": createUnits(),
  "الصف الثاني": createUnits(),
  "الصف الثالث": createUnits()
};

// ✅ إضافة الأسئلة فقط هنا
primary["الصف الرابع"]["الوحدة الأولى"]["مراجعة"] = {
  "النص الشعري": [
    {
      question:"مضاد كلمة الوجود",
      answers:["الحياة","البقاء","العدم"],
      correct:2
    },
    {
      question:"نوع الأسلوب في مصر انهضي",
      answers:["أمر","استفهام","نفي"],
      correct:0
    },
    {
      question:"مصر لنا يدل على",
      answers:["حب الوطن","الخوف","الحزن"],
      correct:0
    }
  ]
};

// 🔥 البيانات النهائية
const data = {
  "المرحلة الابتدائية": primary,
  "المرحلة الإعدادية": prep
};

// 🧠 التحكم
let path = [];
let questions = [];
let index = 0;
let score = 0;
let answered = false;

// عناصر الصفحة
const title = document.getElementById("title");
const content = document.getElementById("content");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

// عرض القوائم
function showMenu(obj){
  content.innerHTML="";
  nextBtn.style.display="none";

  const keys = Object.keys(obj);

  if(keys.length === 0){
    content.innerHTML="<p>لا يوجد محتوى بعد</p>";
    return;
  }

  keys.forEach(k=>{
    const btn = document.createElement("button");
    btn.textContent = k;

    btn.onclick = () => {
      path.push(k);
      navigate();
    };

    content.appendChild(btn);
  });
}

// التنقل
function navigate(){
  let current = data;

  path.forEach(p => {
    current = current[p];
  });

  title.textContent = path.join(" > ");

  if(Array.isArray(current)){
    startQuiz(current);
  } else {
    showMenu(current);
  }

  backBtn.style.display = path.length ? "block" : "none";
}

// رجوع
backBtn.onclick = () => {
  path.pop();
  navigate();
};

// بدء الاختبار
function startQuiz(qs){
  questions = qs;
  index = 0;
  score = 0;
  loadQuestion();
}

// تحميل سؤال
function loadQuestion(){
  answered = false;
  nextBtn.style.display = "block";

  const q = questions[index];

  content.innerHTML = `<h3>${q.question}</h3>`;

  q.answers.forEach((a,i)=>{
    const btn = document.createElement("button");
    btn.textContent = a;

    btn.onclick = () => selectAnswer(i);

    content.appendChild(btn);
  });
}

// اختيار الإجابة
function selectAnswer(i){
  if(answered) return;

  answered = true;

  const correct = questions[index].correct;
  const btns = document.querySelectorAll("#content button");

  btns.forEach((b,idx)=>{
    if(idx === correct){
      b.classList.add("correct");
    } else if(idx === i){
      b.classList.add("wrong");
    }
    b.disabled = true;
  });

  if(i === correct) score++;
}

// زر التالي
nextBtn.onclick = () => {
  if(!answered) return;

  index++;

  if(index < questions.length){
    loadQuestion();
  } else {
    content.innerHTML = `<h3>النتيجة: ${score} / ${questions.length}</h3>`;
    nextBtn.style.display = "none";
  }
};

// بدء التطبيق
showMenu(data);