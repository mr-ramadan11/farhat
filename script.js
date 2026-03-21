// تشغيل التطبيق
function startApp(){
  document.querySelector(".hero").style.display="none";
  document.querySelector(".about").style.display="none";
  document.getElementById("app").style.display="block";
}

// زر الصفحة الرئيسية (يعمل في كل الحالات)
document.getElementById("homeBtn").onclick = () => {
  path = [];
  document.getElementById("app").style.display = "none";
  document.querySelector(".hero").style.display = "flex";
  document.querySelector(".about").style.display = "block";
  showMenu(data);
};

// الدروس
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

function createUnits(){
  return {
    "الوحدة الأولى": createLessons(),
    "الوحدة الثانية": createLessons(),
    "الوحدة الثالثة": createLessons()
  };
}

const primary = {
  "الصف الأول": createUnits(),
  "الصف الثاني": createUnits(),
  "الصف الثالث": createUnits(),
  "الصف الرابع": createUnits(),
  "الصف الخامس": createUnits(),
  "الصف السادس": createUnits()
};

const prep = {
  "الصف الأول": createUnits(),
  "الصف الثاني": createUnits(),
  "الصف الثالث": createUnits()
};

// الأسئلة
primary["الصف الرابع"]["الوحدة الأولى"]["مراجعة"] = [
  {
    question:"مضاد كلمة الوجود",
    answers:["الحياة","البقاء","العدم"],
    correct:2
  },
  {
    question:"نوع الأسلوب في مصر انهضي",
    answers:["أمر","استفهام","نفي"],
    correct:0
  }
];

const data = {
  "المرحلة الابتدائية": primary,
  "المرحلة الإعدادية": prep
};

let path=[],questions=[],index=0,score=0,answered=false;

const title=document.getElementById("title");
const content=document.getElementById("content");
const nextBtn=document.getElementById("nextBtn");
const backBtn=document.getElementById("backBtn");

// عرض القوائم
function showMenu(obj){
  content.innerHTML="";
  nextBtn.style.display="none";

  Object.keys(obj).forEach(k=>{
    const btn=document.createElement("button");
    btn.textContent=k;
    btn.onclick=()=>{path.push(k);navigate();};
    content.appendChild(btn);
  });
}

// التنقل
function navigate(){
  let current=data;
  path.forEach(p=>current=current[p]);

  title.textContent=path.join(" > ");

  if(Array.isArray(current)) startQuiz(current);
  else showMenu(current);
}

// رجوع
backBtn.onclick=()=>{
  path.pop();
  navigate();
};

// بدء الاختبار
function startQuiz(qs){
  questions=qs;
  index=0;
  score=0;
  loadQuestion();
}

// تحميل السؤال
function loadQuestion(){
  answered=false;
  nextBtn.style.display="none";

  const q=questions[index];
  content.innerHTML=`<h3>${q.question}</h3>`;

  q.answers.forEach((a,i)=>{
    const btn=document.createElement("button");
    btn.textContent=a;
    btn.onclick=()=>selectAnswer(i);
    content.appendChild(btn);
  });
}

// اختيار الإجابة (🔥 أهم تعديل)
function selectAnswer(i){
  if(answered) return;
  answered=true;

  const correct=questions[index].correct;
  const btns=document.querySelectorAll("#content button");

  btns.forEach((b,idx)=>{
    if(idx===correct){
      b.classList.add("correct");
    } 
    if(idx===i && i!==correct){
      b.classList.add("wrong");
    }
    b.disabled=true;
  });

  if(i===correct){
    score++;

    // انتقال تلقائي
    setTimeout(()=>{
      nextQuestion();
    },800);

  } else {
    // إظهار زر التالي عند الخطأ
    nextBtn.style.display="block";
  }
}

// الانتقال
function nextQuestion(){
  index++;

  if(index<questions.length){
    loadQuestion();
  } else {
    content.innerHTML=`<h3>النتيجة: ${score} / ${questions.length}</h3>`;
    nextBtn.style.display="none";
  }
}

// زر التالي
nextBtn.onclick=()=>{
  nextQuestion();
};

showMenu(data);
