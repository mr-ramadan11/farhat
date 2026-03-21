// تشغيل التطبيق
function startApp(){
  path = [];
  setActiveView("app");
  title.textContent = ROOT_TITLE;
  showMenu(data);
  backBtn.style.display = "none";
  nextBtn.style.display = "none";
  saveState();
}

function openAboutPage(){
  setActiveView("about");
  saveState();
}

function backToHome(){
  path = [];
  questions = [];
  index = 0;
  score = 0;
  answered = false;
  selectedAnswer = null;
  title.textContent = ROOT_TITLE;
  showMenu(data);
  backBtn.style.display = "none";
  nextBtn.style.display = "none";
  setActiveView("home");
  saveState();
}

// 🔥 إنشاء الدروس داخل كل وحدة
function createLessons(){
  return {
    "درس الاستماع": {},
    "درس القراءة الأول": {},
    "القواعد النحوية الأول": {},
    "القواعد الإملائية": {},
    "التعبير الكتابي": {},
    "درس القراءة الثاني": {},
    "القواعد النحوية الثاني": {},
    "تطبيق على القواعد الإملائية": {},
    "تطبيق على التعبير الكتابي": {},
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

// ✅ إضافة الأسئلة الشاملة للمراجعة
primary["الصف الرابع"]["الوحدة الأولى"]["مراجعة"] = [
    // --- النص الشعري ---
    { question: 'مضاد كلمة "الوجود"', answers: ["الحياة", "البقاء", "العدم"], correct: 2 },
    { question: 'المراد بـ "قائمون" في النص', answers: ["نائمون", "جالسون", "مستمرون في رعايتها"], correct: 2 },
    { question: 'الكلمات (الفنون - الأولون) لها نهايات متماثلة تعطي:', answers: ["تضاداً", "جرساً موسيقياً يطرب الأذن", "ترادفاً"], correct: 1 },
    { question: 'تعبير "مصرُ لنا" يدل على:', answers: ["حب الشاعر لوطنه واعتزازه به", "خوف الشاعر", "حزن الشاعر"], correct: 0 },
    { question: '"مصرُ انهضي" تعبير مجازي يصور مصر بـ:', answers: ["طائر يطير", "إنسان ينهض ويتقدم", "سفينة تبحر"], correct: 1 },
    { question: 'ما نوع الأسلوب في "مصر انهضي":', answers: ["أمر", "استفهام", "تأكيد"], correct: 0 },
    { question: '"أمُ العلومِ والفنون" تعبير مجازي يصور مصر بـ:', answers: ["الأم في عطائها", "المعلم", "المدرسة"], correct: 0 },
    { question: '"إنا عليها قائمون" أسلوب مؤكد بـ:', answers: ["إنَّ", "قد", "لقد"], correct: 0 },
    { question: '"نفتديها أجمعين" تعبير جميل يدل على:', answers: ["حب مصر والتضحية من أجلها", "السفر للخارج", "انتظار المقابل"], correct: 0 },
    { question: '"فيها حيينا مكرمين" تعبير جميل يدل على:', answers: ["فضل مصر على أبنائها", "قسوة الحياة", "الغربة"], correct: 0 },
    { question: 'التضاد بين "الوجود" و "العدم" يفيد:', answers: ["تقليل المعنى", "إخفاء المعنى", "توضيح المعنى وتأكيده"], correct: 2 },
    { question: '"هي الحمى وهي الحرم" تعبير جميل يدل على:', answers: ["قدسية أرض مصر", "اتساع أرض مصر", "جمال النيل"], correct: 0 },
    { question: 'واجبنا تجاه عهود وطننا كما فهمت من النص:', answers: ["أن ننساها", "أن نرعاها ونحفظها", "أن نتجاهلها"], correct: 1 },
    { question: 'يدعو الشاعر مصر في البيت الأول إلى:', answers: ["التوقف", "التقدم كما كانت", "التراجع"], correct: 1 },
    { question: 'الغرض من دعوة الشاعر لمصر بالنهوض هو:', answers: ["ليبقى علمها عالياً مرفوعاً", "لتزيد مساحتها", "لقل ثرواتها"], correct: 0 },
    { question: 'الأجداد الأوائل لمصر كانوا:', answers: ["أصحاب مكانة ضعيفة", "أصحاب مكانة كبيرة سادوا بها", "لا يهتمون بالعلم"], correct: 1 },
    { question: 'كيف نستطيع أن نكون سادة مثل أجدادنا؟', answers: ["بالكسل", "بالعمل بإخلاص", "بكثرة الكلام"], correct: 1 },
    { question: 'مصر توفر لأبنائها كما جاء في الأبيات:', answers: ["الخوف", "الحياة الكريمة والأمن", "الفقر"], correct: 1 },
    { question: '"نعلوا بها إلى السماء" تعبير يدل على:', answers: ["الرغبة في الطيران", "الطموح والسمو بمكانة الوطن", "النظر للسماء"], correct: 1 },
    { question: 'معنى "سادَ" في النص:', answers: ["شرب", "قادَ وعَظُمَ", "سارَ"], correct: 1 },
    { question: 'مضاد "الوفاء":', answers: ["الإخلاص", "الغدر والخيانة", "الحب"], correct: 1 },
    { question: 'المراد بـ "الأولون":', answers: ["السابقون", "اللاحقون", "الأعداء"], correct: 0 },
    { question: 'تكرار كلمة "مصر" في الأبيات يدل على:', answers: ["شدة حب الشاعر لها", "الكراهية", "الابتعاد عن مصر"], correct: 0 },
    { question: 'معنى "ترعى":', answers: ["تهمل", "تحفظ وتهتم بـ", "تترك"], correct: 1 },
    { question: 'مضاد "مكرمين":', answers: ["مهانين", "معززين", "فرحين"], correct: 0 },
    { question: '"مصر أولى بالفداء" تعني أنها:', answers: ["أحق بالتضحية", "لا تحتاج تضحية", "أبعد عن التضحية"], correct: 0 },
    { question: 'معنى "ندين":', answers: ["نأخذ ديناً", "نعترف ونلتزم", "نرفض"], correct: 1 },
    { question: 'من قائل النص مصر لنا منذ القدم؟', answers: ["أحمد محرم", "أحمد شوقي", "حافظ إبراهيم"], correct: 0 },

    // --- نص الاستماع ---
    { question: 'لماذا شعر يوسف بالحزن عندما استيقظ متعباً ونصحه الطبيب بالراحة؟', answers: ["لأنه سيغيب عن رحلة عائلية.", "لأنه سيغيب عن المدرسة التي يحبها.", "لأنه لا يحب البقاء في سريره."], correct: 1 },
    { question: 'مَن الذي زار يوسف في المساء؟', answers: ["صديقه أمجد.", "معلم الفصل.", "طبيب الأسرة."], correct: 0 },
    { question: 'ما هو الهدف الأساسي من زيارة أمجد لصديقه المريض؟', answers: ["ليلعب معه ألعاب الفيديو الجديدة.", "ليطمئن عليه ويشرح له ما فاته من دروس.", "ليطلب منه المساعدة في واجباته."], correct: 1 },
    { question: 'كيف استطاع أمجد أن يغير شعور يوسف من الحزن إلى السعادة؟', answers: ["من خلال شرح الدروس ومراجعة التمارين معه.", "عن طريق إخباره بقصص ومواقف مضحكة.", "بتقديم الحلوى والألعاب له."], correct: 0 },
    { question: 'كيف كان يقضي الصديقان وقتهما بعد الانتهاء من مراجعة الدروس يومياً؟', answers: ["في مشاهدة البرامج التلفزيونية.", "في قراءة القصص المصورة.", "في لعب الشطرنج."], correct: 2 },
    { question: 'ماذا كانت نتيجة يوسف في أول اختبار له بعد عودته إلى المدرسة؟', answers: ["حصل على درجات عالية.", "حصل على درجات متوسطة.", "لم يستطع الإجابة عن الأسئلة."], correct: 0 },
    { question: 'لماذا تعجب المعلم من نتيجة يوسف في الاختبار؟', answers: ["لأن الاختبار كان صعباً جداً على جميع الطلاب.", "لأن يوسف كان غائباً ولم يتوقع المعلم هذا التفوق.", "لأن يوسف أجاب بسرعة كبيرة."], correct: 1 },
    { question: 'ماذا قصد يوسف بجملة "نافذة اسمها الصداقة"؟', answers: ["أن غرفته بها نافذة حقيقية تطل على مدرسته.", "أن أمجد كان طريقه لمعرفة كل ما يحدث في المدرسة أثناء غيابه.", "أن المدرسة بها نوافذ كبيرة وجميلة."], correct: 1 },

    // --- نص فكر قبل أن تنشر ---
    { question: 'لماذا كانت الطفلة الصغيرة تبكي عندما تقترب الفراشات من شعرها؟', answers: ["لأنها كانت تخاف منها كثيراً.", "لأنها أرادت الإمساك بها ولم تستطع.", "لأن الفراشات كانت تزعجها بصوتها."], correct: 0 },
    { question: 'كيف استطاعت الأم أن تحول خوف ابنتها من الفراشات إلى حب؟', answers: ["بإبعاد الفراشات عنها تماماً.", "بإخبارها بكلمات لطيفة أن الفراشات تقف فقط على الأشياء الجميلة مثل شعرها.", "بشراء لعبة جديدة على شكل فراشة."], correct: 1 },
    { question: 'ما الصعوبة التي واجهت الطفل أثناء مشاركته في اليوم الرياضي؟', answers: ["الجري لمسافات طويلة.", "القفز فوق الحواجز.", "الالتقاط الكرة من زملائه."], correct: 1 },
    { question: 'كيف تعامل أفراد الفريق مع زميلهم الذي لم يستطع القفز من المرة الأولى؟', answers: ["سخروا منه وتركوه وحده.", "غضبوا منه لأنه أخرهم عن الفوز.", "تجمعوا حوله وهتفوا له بكلمات تشجيعية."], correct: 2 },
    { question: 'ماذا يجب عليك أن تفعل قبل أن تنشر منشوراً أو تكتب تعليقاً على وسائل التواصل الاجتماعي؟', answers: ["أن تفكر في تأثير كلماتك وتتأكد من صحة المعلومات.", "أن تكتب بسرعة لكي تكون أول المعلقين.", "أن تستخدم كلمات مضحكة حتى لو كانت تجرح من تقصده."], correct: 0 },
    { question: 'بم شبه الكاتب الكلمة الطيبة في نهاية النص؟', answers: ["بالسيف الجارح.", "بالدواء الشافي.", "بالحاجز العالي."], correct: 1 },
    { question: 'بالاستعانة بقائمة المفردات، ما المراد بعبارة "تُطْفِئُ بَرِيقَ قَلْبِهِ"؟', answers: ["تجعله يشعر بالنعاس الشديد.", "تحزنه", "تجعله ينسى ما كان يفعله."], correct: 1 },
    { question: 'لماذا ينصحنا الكاتب باختيار كلماتنا بعناية شديدة؟', answers: ["لأن الكلمات الجميلة سهلة في الكتابة والقراءة.", "لأن الكلمة الطيبة قد تغير حياة إنسان للأفضل، بينما الجارحة تؤذيه.", "لكي نبدو أذكياء أمام أصدقائنا ومعلمينا."], correct: 1 },

    // --- درس كلمات تبني وكلمات تهدم ---
    { question: 'أين كان الأصدقاء يلعبون وقت الفسحة في درس "كلمات تبني وكلمات تهدم"؟', answers: ["في حديقة الحي", "في فناء المدرسة", "في الفصل الدراسي"], correct: 1 },
    { question: 'في درس "كلمات تبني وكلمات تهدم"، ماذا فعل عمر عندما رأى صديقه يحمل حقيبته بطريقة غريبة؟', answers: ["ساعده في حمل الحقيبة لتخفيف العبء عنه", "بدأ يقلده بطريقة مضحكة", "تجاهله تماما وذهب ليلعب مع فريق آخر"], correct: 1 },
    { question: 'ماذا سألت المعلمة عمر عندما لاحظت ما حدث في درس "كلمات تبني وكلمات تهدم"؟', answers: ["هل كنت تقصد أن تضحك معه أم أن تضحك عليه؟", "لماذا لم تحضر أدواتك المدرسية اليوم يا عمر؟", "من الذي بدأ بإثارة الفوضى في الفناء؟"], correct: 0 },
    { question: 'بم أجاب عمر على سؤال المعلمة وهو يشعر بالخجل في درس "كلمات تبني وكلمات تهدم"؟', answers: ["أنه تعمد مضايقة صديقه أمام الجميع", "أنه كان يمزح معه فقط", "أنه لم يفعل شيئا وأن الأطفال ضحكوا بمفردهم"], correct: 1 },
    { question: 'من هو "الشخص الذكي" كما وصفته المعلمة في درس "كلمات تبني وكلمات تهدم"؟', answers: ["الذي يسعد من حوله بتصرفاته", "الذي يحصل دائما على الدرجات النهائية في الاختبارات", "الذي يستطيع الجري أسرع من زملائه في الفناء"], correct: 0 },
    { question: 'ماذا فعل عمر ليصلح خطأه مع صديقه في نهاية درس "كلمات تبني وكلمات تهدم"؟', answers: ["طلب من المعلمة أن تعتذر للصديق نيابة عنه", "اقترب منه، واعتذر له، وطلب أن يسامحه", "أعطى صديقه بعض الحلوى دون أن يتحدث معه"], correct: 1 },
    { question: 'على ماذا اتفق الأصدقاء في نهاية درس "كلمات تبني وكلمات تهدم"؟', answers: ["أن الضحك الجميل هو الذي يسعد الجميع دون تنمر أو مضايقة", "ألا يضحكوا أو يمزحوا أبدا داخل المدرسة", "أن يقلدوا بعضهم البعض كل يوم في الفسحة"], correct: 0 },

    // --- أسئلة الجملة الاسمية (المبتدأ والخبر) ---
    { question: '"أصوات العصافير في الصباح الباكر لحن جميل". كلمة (أصوات) مبتدأ مرفوع بالضمة لأنه:', answers: ["جمع مؤنث سالم", "جمع تكسير", "مفرد"], correct: 1 },
    { question: '"إلقاء القمامة في غير مكانها عمل قبيح". الخبر في الجملة السابقة هو:', answers: ["القمامة", "مكانها", "عمل"], correct: 2 },
    { question: '"المساكين محتاجون إلى العطف والمساعدة دائما". كلمة (المساكين) مبتدأ مرفوع بالضمة لأنه:', answers: ["جمع مذكر سالم", "جمع تكسير", "مثنى"], correct: 1 },
    { question: 'عثمان طالب متفوق في دراسته. المبتدأ في الجملة مرفوع وعلامة رفعه:', answers: ["الألف", "النون", "الضمة"], correct: 2 },
    { question: '"أوقات الفراغ فرصة جيدة لتعلم مهارات جديدة". كلمة (أوقات) مبتدأ مرفوع بالضمة لأنه:', answers: ["جمع مؤنث سالم", "مفرد", "جمع تكسير"], correct: 2 },
    { question: '"القاهرة مدينة عريقة ذات تاريخ طويل". الخبر في الجملة السابقة هو:', answers: ["مدينة", "عريقة", "تاريخ"], correct: 0 },
    { question: '"ميادين العاصمة واسعة ومزدحمة بالسيارات". كلمة (ميادين) مبتدأ مرفوع بالضمة لأنه:', answers: ["جمع مذكر سالم", "مثنى", "جمع تكسير"], correct: 2 },
    { question: '"أبيات القصيدة معبرة عن حب الوطن بصدق". كلمة (أبيات) مبتدأ مرفوع بالضمة لأنه:', answers: ["جمع مؤنث سالم", "جمع تكسير", "مفرد"], correct: 1 },
    { question: '"بساتين الفاكهة المثمرة في القرية لوحة فنية". الخبر في الجملة السابقة هو:', answers: ["المثمرة", "القرية", "لوحة"], correct: 2 },
    { question: '"الثعابين السامة خطيرة جدا على الإنسان في الصحراء". كلمة (الثعابين) مبتدأ مرفوع بالضمة لأنه:', answers: ["جمع مذكر سالم", "جمع تكسير", "مثنى"], correct: 1 },
    { question: 'الطيران الحديث وسيلة سفر مريحة وسريعة. علامة رفع المبتدأ في الجملة هي:', answers: ["الألف", "النون", "الضمة"], correct: 2 },
    { question: '"قوانين المرور الصارمة مهمة لسلامة الجميع". كلمة (قوانين) مبتدأ مرفوع بالضمة لأنه:', answers: ["جمع مذكر سالم", "جمع تكسير", "مثنى"], correct: 1 },
    { question: '"الفلاحون النشيطون في الحقل متعاونون دائما". إعراب كلمة (متعاونون) هو:', answers: ["نعت مرفوع وعلامة رفعه الواو", "خبر مرفوع وعلامة رفعه الواو", "فاعل مرفوع وعلامة رفعه الواو"], correct: 1 },
    { question: '"حمدان لاعب ماهر في فريق كرة القدم". كلمة (حمدان) مبتدأ مرفوع بالضمة لأنه:', answers: ["مثنى", "مفرد", "جمع تكسير"], correct: 1 },
    { question: '"الشياطين أعداء الإنسان منذ بدء الخليقة". كلمة (الشياطين) مبتدأ مرفوع بالضمة لأنه:', answers: ["جمع مذكر سالم", "مثنى", "جمع تكسير"], correct: 2 },
    { question: '"شجرة التفاح الكبيرة في حديقة جدتي مثمرة". الخبر في الجملة السابقة هو:', answers: ["الكبيرة", "حديقة", "مثمرة"], correct: 2 },
    { question: '"أموات المسلمين في رحمة الله وفضله الواسع". كلمة (أموات) مبتدأ مرفوع بالضمة لأنه:', answers: ["جمع مؤنث سالم", "جمع تكسير", "مفرد"], correct: 1 },
    { question: '"السلاطين في العصور القديمة حكام أقوياء". كلمة (السلاطين) مبتدأ مرفوع بالضمة لأنه:', answers: ["جمع مذكر سالم", "جمع تكسير", "مثنى"], correct: 1 },
    { question: '"الفساتين الجديدة في المعرض رائعة جدا". كلمة (الفساتين) مبتدأ مرفوع بالضمة لأنه:', answers: ["جمع مذكر سالم", "مثنى", "جمع تكسير"], correct: 2 },
    { question: '"الطالب المجتهد في دروسه طوال العام ناجح". الخبر في الجملة السابقة هو:', answers: ["المجتهد", "دروسه", "ناجح"], correct: 2 },

    // --- أسئلة الجملة الفعلية (الفعل والفاعل) ---
    { question: 'يشرح الدرس ببراعة واهتمام المعلم المتميز. الفاعل في الجملة السابقة هو:', answers: ["الدرس", "ببراعة", "المعلم"], correct: 2 },
    { question: 'يعيش المساكين في ظروف صعبة ويحتاجون للمساعدة. الفاعل مرفوع وعلامة رفعه:', answers: ["الياء", "الواو", "الضمة"], correct: 2 },
    { question: 'يحمي الوطن من الأعداء الطامعين جنود شجعان. الفاعل في الجملة هو:', answers: ["الوطن", "الأعداء", "جنود"], correct: 2 },
    { question: 'مضت أوقات سعيدة في الرحلة المدرسية. الفاعل مرفوع وعلامة رفعه الضمة لأنه:', answers: ["مثنى", "جمع تكسير", "مفرد"], correct: 1 },
    { question: 'انتشرت الثعابين في الغابة الكثيفة بحثا عن الطعام. علامة رفع الفاعل هي:', answers: ["الياء", "الواو", "الضمة"], correct: 2 },
    { question: 'نجح عثمان في الاختبار الصعب بجدارة وتفوق. الفاعل مرفوع وعلامة رفعه:', answers: ["الألف", "النون", "الضمة"], correct: 2 },
    { question: 'يدافع عن حقوق المظلومين دائما المحاميان البارعان. الفاعل في الجملة هو:', answers: ["المحاميان", "المظلومين", "حقوق"], correct: 0 },
    { question: 'تزينت الميادين بالأعلام الملونة احتفالا بالعيد. علامة رفع الفاعل هي:', answers: ["الياء", "الواو", "الضمة"], correct: 2 },
    { question: 'سحرت أبيات القصيدة جميع الحاضرين في الحفل. الفاعل "أبيات" مرفوع وعلامة رفعه الضمة لأنه:', answers: ["مفرد", "جمع تكسير", "جمع مؤنث سالم"], correct: 1 },
    { question: 'تفوق الطلاب المجتهدون في الامتحانات. الفاعل في الجملة هو:', answers: ["الامتحانات", "الطلاب", "المجتهدون"], correct: 1 },
    { question: 'طار الطيران في السماء الصافية بمهارة عالية. الفاعل مرفوع وعلامة رفعه:', answers: ["الألف", "الضمة", "النون"], correct: 1 },
    { question: 'يحكم السلاطين بلادهم بالعدل والحكمة. علامة رفع الفاعل هي:', answers: ["الياء", "الواو", "الضمة"], correct: 2 },
    { question: 'ارتفعت أصوات الجماهير في المدرجات لتشجيع الفريق. الفاعل مرفوع وعلامة رفعه:', answers: ["الألف", "الضمة", "الواو"], correct: 1 },
    { question: 'فاز حمدان بالمركز الأول في مسابقة الجري السريع. علامة رفع الفاعل هي:', answers: ["الألف", "الضمة", "النون"], correct: 1 },
    { question: 'تسهر على راحة المرضى ليلا الممرضات المخلصات. الفاعل في الجملة هو:', answers: ["راحة", "المرضى", "الممرضات"], correct: 2 },
    { question: 'امتلأ الميدان بالناس في يوم العطلة الرسمية. علامة رفع الفاعل هي:', answers: ["الألف", "الضمة", "النون"], correct: 1 },
    { question: 'يحب قراءة القصص الخيالية والمغامرات الطفل الذكي. الفاعل في الجملة هو:', answers: ["قراءة", "القصص", "الطفل"], correct: 2 },
    { question: 'ظهرت الشياطين في القصة المرعبة بشكل مخيف. علامة رفع الفاعل هي:', answers: ["الياء", "الواو", "الضمة"], correct: 2 },
    { question: 'استقبل الضيوف في الحفل الكبير المضيفون بترحاب. الفاعل "المضيفون" مرفوع وعلامة رفعه:', answers: ["الواو", "الضمة", "النون"], correct: 0 },
    { question: 'اشتركت الطالبات المتميزات في المسابقة. علامة رفع الفاعل هي:', answers: ["الألف", "الكسرة", "الضمة"], correct: 2 },
    { question: 'تغرد العصافير فوق أغصان الأشجار العالية. الفاعل مرفوع وعلامة رفعه:', answers: ["الياء", "الواو", "الضمة"], correct: 2 },

    // --- الألف اللينة في الأسماء ---
    { question: 'توكأ جدي على ...... غليظة أثناء مشيه في الحديقة.', answers: ["عصى", "عصا", "عصاء"], correct: 1 },
    { question: 'كرم مدير المدرسة الطالب ...... لتفوقه في المسابقة.', answers: ["مصطفا", "مصطفي", "مصطفى"], correct: 2 },
    { question: 'ناقش المحامي ...... مهمة جدا في ساحة المحكمة.', answers: ["قضايا", "قضايى", "قضائي"], correct: 0 },
    { question: 'صديقتي ...... تحب ممارسة الرياضة كل صباح.', answers: ["هدا", "هدى", "هدي"], correct: 1 },
    { question: 'سافر السائحون إلى ...... للاستمتاع بمعالمها السياحية.', answers: ["فرنسى", "فرنسا", "فرنسي"], correct: 1 },
    { question: 'رأيت ...... شجاعا يساعد رجلا مسنا في عبور الطريق.', answers: ["فتى", "فتا", "فتي"], correct: 0 },
    { question: 'أرسل الله النبي ...... عليه السلام إلى فرعون.', answers: ["موسا", "موسى", "موسي"], correct: 1 },
    { question: 'يعالج الطبيب الماهر الـ ...... بابتسامة واهتمام.', answers: ["مرضا", "مرضي", "مرضى"], correct: 2 },
    { question: 'سأل المعلم الطلاب: ...... موعد بداية الاختبار النهائي؟', answers: ["متا", "متى", "متي"], correct: 1 },
    { question: 'قدمت الإدارة ...... قيمة للأطفال في الـ ......', answers: ["هدايى / مستشفا", "هدايا / مستشفى", "هدايا / مستشفا"], correct: 1 }
];
 
// ✨ تعديل الوحدة الثالثة (المرحلة الابتدائية)
Object.keys(primary).forEach(grade => {
  primary[grade]["الوحدة الثالثة"] = {
    "درس الاستماع": {},
    "درس القراءة الأول": {},
    "القواعد النحوية الأول": {},
    "تطبيق على القواعد الإملائية": {},
    "تطبيق على التعبير الكتابي": {},
    "درس القراءة الثاني": {},
    "القواعد النحوية الثاني": {},
    "تطبيق على القواعد الإملائية 2": {},
    "تطبيق على التعبير الكتابي 2": {},
    "النص الشعري": {},
    "مراجعة": {}
  };
});
  
// ✨ تعديل الوحدة الثالثة (المرحلة الإعدادية)

Object.keys(prep).forEach(grade => {
  prep[grade]["الوحدة الثالثة"] = {
    "درس الاستماع": {},
    "درس القراءة الأول": {},
    "القواعد النحوية الأول": {},
    "تطبيق على القواعد الإملائية": {},
    "تطبيق على التعبير الكتابي": {},
    "درس القراءة الثاني": {},
    "القواعد النحوية الثاني": {},
    "تطبيق على القواعد الإملائية 2": {},
    "تطبيق على التعبير الكتابي 2": {},
    "النص الشعري": {},
    "مراجعة": {}
  };
});
// النهائي
const baseData = {
  "\u0627\u0644\u0645\u0631\u062d\u0644\u0629 \u0627\u0644\u0627\u0628\u062a\u062f\u0627\u0626\u064a\u0629": primary,
  "\u0627\u0644\u0645\u0631\u062d\u0644\u0629 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u064a\u0629": prep
};

const TERM_ONE = "\u0627\u0644\u062a\u0631\u0645 \u0627\u0644\u0623\u0648\u0644";
const TERM_TWO = "\u0627\u0644\u062a\u0631\u0645 \u0627\u0644\u062b\u0627\u0646\u064a";
const ROOT_TITLE = "\u0627\u062e\u062a\u0631 \u0627\u0644\u0642\u0633\u0645";

const data = {};

Object.keys(baseData).forEach((stageKey, stageIndex) => {
  const stageContent = baseData[stageKey];
  const firstTerm = JSON.parse(JSON.stringify(stageContent));
  const secondTerm = JSON.parse(JSON.stringify(stageContent));

  // أسئلة مراجعة الصف الرابع الابتدائي موجودة في الترم الثاني فقط
  if (stageIndex === 0) {
    const gradeFourKey = Object.keys(firstTerm)[3];
    if (gradeFourKey) {
      const unitOneKey = Object.keys(firstTerm[gradeFourKey])[0];
      if (unitOneKey) {
        const unitOne = firstTerm[gradeFourKey][unitOneKey];
        const reviewKey = Object.keys(unitOne).find((lessonKey) => Array.isArray(unitOne[lessonKey]));
        if (reviewKey) {
          unitOne[reviewKey] = {};
        }
      }
    }
  }

  data[stageKey] = {
    [TERM_ONE]: firstTerm,
    [TERM_TWO]: secondTerm
  };
});

// التحكم
let path = [];
let questions = [];
let index = 0;
let score = 0;
let answered = false;
let selectedAnswer = null;
let currentView = "home";

const STORAGE_KEY = "ramadan-edu-state-v2";

// عناصر الصفحة
const heroSection = document.querySelector(".hero");
const aboutPage = document.getElementById("aboutPage");
const appContainer = document.getElementById("app");
const title = document.getElementById("title");
const content = document.getElementById("content");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const homeBtn = document.getElementById("homeBtn");

homeBtn.onclick = backToHome;

function setActiveView(view){
  currentView = view;
  heroSection.style.display = view === "home" ? "flex" : "none";
  aboutPage.style.display = view === "about" ? "block" : "none";
  appContainer.style.display = view === "app" ? "block" : "none";
  homeBtn.style.display = view === "app" ? "block" : "none";
}

function getCurrentNode(pathToUse = path){
  let current = data;

  for (const key of pathToUse) {
    if (!current || typeof current !== "object" || !(key in current)) {
      return null;
    }
    current = current[key];
  }

  return current;
}

function saveState(){
  const state = {
    view: currentView,
    path: [...path],
    index,
    score,
    answered,
    selectedAnswer,
    finished: Array.isArray(questions) && questions.length > 0 && index >= questions.length
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// عرض القوائم
function showMenu(obj){
  content.innerHTML = "";
  nextBtn.style.display = "none";

  const keys = Object.keys(obj);

  if(keys.length === 0){
    content.innerHTML = "<p>لا يوجد محتوى بعد</p>";
    return;
  }

  keys.forEach(k => {
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
  const current = getCurrentNode();

  if (current === null) {
    path = [];
    title.textContent = ROOT_TITLE;
    showMenu(data);
    backBtn.style.display = "none";
    saveState();
    return;
  }

  title.textContent = path.length ? path.join(" > ") : ROOT_TITLE;

  if(Array.isArray(current)){
    startQuiz(current);
  } else {
    showMenu(current);
  }

  backBtn.style.display = path.length ? "block" : "none";
  saveState();
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
  answered = false;
  selectedAnswer = null;
  loadQuestion();
}

function renderAnsweredState(selectedIndex, forceNextButton = false){
  const correct = questions[index].correct;
  const btns = document.querySelectorAll("#content button");

  btns.forEach((b,idx) => {
    if(idx === correct){
      b.classList.add("correct");
    } else if(idx === selectedIndex){
      b.classList.add("wrong");
    }
    b.disabled = true;
  });

  nextBtn.style.display = forceNextButton || selectedIndex !== correct ? "block" : "none";
}

// تحميل سؤال
function loadQuestion(){
  if (!questions.length) {
    content.innerHTML = "<p>لا يوجد أسئلة بعد</p>";
    nextBtn.style.display = "none";
    saveState();
    return;
  }

  if (index < 0) {
    index = 0;
  }

  if (index >= questions.length) {
    content.innerHTML = `<h3>النتيجة النهائية: ${score} من ${questions.length}</h3>`;
    nextBtn.style.display = "none";
    saveState();
    return;
  }

  answered = false;
  selectedAnswer = null;
  nextBtn.style.display = "none";

  const q = questions[index];

  content.innerHTML = `<h3 class="question">${q.question}</h3>`;

  q.answers.forEach((a,i) => {
    const btn = document.createElement("button");
    btn.textContent = a;

    btn.onclick = () => selectAnswer(i);

    content.appendChild(btn);
  });

  saveState();
}

// اختيار الإجابة
function selectAnswer(i){
  if(answered) return;

  answered = true;
  selectedAnswer = i;

  const correct = questions[index].correct;
  renderAnsweredState(i);

  if(i === correct) {
    score++;
    saveState();

    setTimeout(() => {
      goToNextQuestion();
    }, 1000);
  } else {
    saveState();
  }
}

// دالة الانتقال للسؤال التالي
function goToNextQuestion() {
  index++;
  answered = false;
  selectedAnswer = null;

  if(index < questions.length){
    loadQuestion();
  } else {
    content.innerHTML = `<h3>النتيجة النهائية: ${score} من ${questions.length}</h3>`;
    nextBtn.style.display = "none";
    saveState();
  }
}

// زر التالي
nextBtn.onclick = () => {
  if(!answered) return;
  goToNextQuestion();
};

function restoreState(){
  // تجهيز التطبيق دائمًا من الجذر
  title.textContent = ROOT_TITLE;
  showMenu(data);
  backBtn.style.display = "none";
  nextBtn.style.display = "none";
  setActiveView("home");

  const rawState = localStorage.getItem(STORAGE_KEY);
  if (!rawState) {
    return;
  }

  try {
    const saved = JSON.parse(rawState);

    currentView = saved.view === "app" || saved.view === "about" ? saved.view : "home";
    path = Array.isArray(saved.path) ? saved.path.filter((item) => typeof item === "string") : [];

    while (path.length && getCurrentNode(path) === null) {
      path.pop();
    }

    if (currentView === "about") {
      setActiveView("about");
      return;
    }

    if (currentView === "app") {
      setActiveView("app");

      if (!path.length) {
        title.textContent = ROOT_TITLE;
        showMenu(data);
        backBtn.style.display = "none";
        saveState();
        return;
      }

      const current = getCurrentNode(path);
      title.textContent = path.join(" > ");
      backBtn.style.display = "block";

      if (Array.isArray(current)) {
        questions = current;
        index = Number.isInteger(saved.index) ? Math.max(0, Math.min(saved.index, Math.max(questions.length - 1, 0))) : 0;
        score = Number.isInteger(saved.score) ? Math.max(0, saved.score) : 0;
        const wasAnswered = Boolean(saved.answered);
        const savedSelectedAnswer = Number.isInteger(saved.selectedAnswer) ? saved.selectedAnswer : null;

        if (!questions.length) {
          content.innerHTML = "<p>لا يوجد أسئلة بعد</p>";
          nextBtn.style.display = "none";
        } else if (saved.finished) {
          content.innerHTML = `<h3>النتيجة النهائية: ${score} من ${questions.length}</h3>`;
          nextBtn.style.display = "none";
        } else {
          loadQuestion();
          if (wasAnswered && savedSelectedAnswer !== null) {
            answered = true;
            selectedAnswer = savedSelectedAnswer;
            renderAnsweredState(savedSelectedAnswer, true);
          }
        }
      } else {
        showMenu(current);
      }

      saveState();
      return;
    }

    setActiveView("home");
  } catch (error) {
    localStorage.removeItem(STORAGE_KEY);
    path = [];
    setActiveView("home");
  }
}

restoreState();

