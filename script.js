// ===== REGION DATA — ARABIC =====
const regionsData = {
    luxor: {
        ancient: { name: "واست (طيبة)", capital: "طيبة", detail: "عاصمة مصر العليا ومقر عبادة آمون. موطن معابد الكرنك والأقصر ووادي الملوك.", period: "مصر القديمة", label: "واست", symbol: "𓌕 (صولجان واست)", ruler: "رمسيس الثاني / آمون" },
        transitional: { name: "إقليم الأقصر", capital: "الأقصر", detail: "أصبحت مركزاً إدارياً في عهد محمد علي. استمرت كمركز سياحي وديني هام.", period: "العصر الإسلامي/العثماني", label: "الأقصر" },
        modern: { name: "محافظة الأقصر", capital: "الأقصر", detail: "أُنشئت كمحافظة مستقلة عام ٢٠٠٩. مركز سياحي عالمي يضم ثلث آثار العالم بتعداد ١.٣ مليون نسمة.", period: "مصر الحديثة", stats: "السكان: ~١.٣ مليون", label: "الأقصر" }
    },
    aswan: {
        ancient: { name: "تا-سيتي", capital: "سوينيت (أسوان)", detail: "أول أقاليم مصر العليا. بوابة مصر الجنوبية ومركز تجارة الجرانيت والعاج مع النوبة.", period: "مصر القديمة", label: "تا-سيتي", symbol: "𓃰 (الفيل النوبي)", ruler: "خنوم / منتوهوتب" },
        transitional: { name: "إقليم أسوان", capital: "أسوان", detail: "نقطة دفاع حدودية استراتيجية في العصر الإسلامي. موقع حملات محمد علي جنوباً.", period: "العصر الإسلامي/العثماني", label: "أسوان" },
        modern: { name: "محافظة أسوان", capital: "أسوان", detail: "موطن السد العالي الذي يتحكم في فيضان النيل. تضم معبد فيلة ومناظر طبيعية خلابة.", period: "مصر الحديثة", stats: "السكان: ~١.٦ مليون", label: "أسوان" }
    },
    cairo: {
        ancient: { name: "إنب-حدج (منف)", capital: "منف", detail: "مقر أول عاصمة موحدة لمصر. مركز عبادة بتاح وحرف صناعة الحجر.", period: "مصر القديمة", label: "منف" },
        transitional: { name: "القاهرة المعزية", capital: "القاهرة", detail: "أسسها الفاطميون عام ٩٦٩م. أصبحت أعظم مدن العالم الإسلامي في عهد المماليك.", period: "العصر الإسلامي/العثماني", label: "القاهرة" },
        modern: { name: "محافظة القاهرة", capital: "القاهرة", detail: "عاصمة جمهورية مصر العربية وأكبر مدينة في أفريقيا والشرق الأوسط. مركز سياسي وثقافي واقتصادي.", period: "مصر الحديثة", stats: "السكان: ~١٠.١ مليون", label: "القاهرة" }
    },
    alexandria: {
        ancient: { name: "راقودة", capital: "الإسكندرية", detail: "أسسها الإسكندر الأكبر عام ٣٣١ ق.م. موطن المنارة والمكتبة القديمة، عاصمة مصر البطلمية.", period: "العصر البطلمي/الروماني", label: "راقودة" },
        transitional: { name: "ثغر الإسكندرية", capital: "الإسكندرية", detail: "ميناء تجاري رئيسي في العصر الإسلامي. شهدت حملة نابليون عام ١٧٩٨.", period: "العصر الإسلامي/العثماني", label: "الإسكندرية" },
        modern: { name: "محافظة الإسكندرية", capital: "الإسكندرية", detail: "ثاني أكبر مدن مصر والميناء الرئيسي على المتوسط. مركز صناعي وثقافي وسياحي.", period: "مصر الحديثة", stats: "السكان: ~٥.٤ مليون", label: "الإسكندرية" }
    },
    giza: {
        ancient: { name: "خنتي-إابت", capital: "إنب-حدج", detail: "موطن أهرامات الجيزة وأبو الهول. مقبرة ملكية لفراعنة الأسرة الرابعة.", period: "مصر القديمة", label: "خنتي-إابت" },
        transitional: { name: "إقليم الجيزة", capital: "الجيزة", detail: "منطقة زراعية خصبة على الضفة الغربية للنيل. شهدت معركة الأهرام عام ١٧٩٨.", period: "العصر الإسلامي/العثماني", label: "الجيزة" },
        modern: { name: "محافظة الجيزة", capital: "الجيزة", detail: "ثالث أكبر محافظات مصر سكانياً. تضم الأهرامات والمتحف المصري الكبير.", period: "مصر الحديثة", stats: "السكان: ~٩.٣ مليون", label: "الجيزة" }
    },
    ismailia: {
        ancient: { name: "أرض جشن", capital: "بر-عتوم", detail: "منطقة عبور تاريخية بين مصر وسيناء. ورد ذكرها في النصوص المصرية القديمة.", period: "مصر القديمة", label: "جشن" },
        transitional: { name: "منطقة القنال", capital: "الإسماعيلية", detail: "أُنشئت كمركز لإدارة حفر قناة السويس في عهد الخديوي إسماعيل.", period: "العصر الحديث المبكر", label: "الإسماعيلية" },
        modern: { name: "محافظة الإسماعيلية", capital: "الإسماعيلية", detail: "مقر هيئة قناة السويس. مدينة حدائق خضراء تُلقب بعروس القنال.", period: "مصر الحديثة", stats: "السكان: ~١.٤ مليون", label: "الإسماعيلية" }
    },
    asyut: {
        ancient: { name: "ساوتي", capital: "ساوتي (أسيوط)", detail: "مركز عبادة الإله ويب-واوت. لعبت دوراً حاسماً في حروب التوحيد.", period: "مصر القديمة", label: "ساوتي" },
        transitional: { name: "إقليم أسيوط", capital: "أسيوط", detail: "مركز إداري وتجاري رئيسي في صعيد مصر. نقطة انطلاق قوافل درب الأربعين.", period: "العصر الإسلامي/العثماني", label: "أسيوط" },
        modern: { name: "محافظة أسيوط", capital: "أسيوط", detail: "أكبر محافظات الصعيد. تضم جامعة أسيوط وسد أسيوط على النيل.", period: "مصر الحديثة", stats: "السكان: ~٤.٧ مليون", label: "أسيوط" }
    },
    qena: {
        ancient: { name: "تا-نترت", capital: "إيونت (دندرة)", detail: "موطن معبد حتحور في دندرة. مركز ديني هام لعبادة الإلهة حتحور.", period: "مصر القديمة", label: "تا-نترت" },
        transitional: { name: "إقليم قنا", capital: "قنا", detail: "مركز إنتاج الفخار والسكر. نقطة وصل بين وادي النيل وموانئ البحر الأحمر.", period: "العصر الإسلامي/العثماني", label: "قنا" },
        modern: { name: "محافظة قنا", capital: "قنا", detail: "تضم معبد دندرة ومدينة قوص التاريخية. مركز لصناعة السكر والألومنيوم.", period: "مصر الحديثة", stats: "السكان: ~٣.٣ مليون", label: "قنا" }
    },
    fayyum: {
        ancient: { name: "شدت (الفيوم)", capital: "شدت", detail: "واحة خصبة حول بحيرة قارون. عرفت بمشروعات الري في عهد أمنمحات الثالث.", period: "مصر القديمة", label: "شدت" },
        transitional: { name: "إقليم الفيوم", capital: "الفيوم", detail: "ظلت منطقة زراعية غنية. اشتهرت بلوحات الفيوم الجنائزية من العصر الروماني.", period: "العصر الإسلامي/العثماني", label: "الفيوم" },
        modern: { name: "محافظة الفيوم", capital: "الفيوم", detail: "واحدة من أقدم المدن في العالم. تضم محمية وادي الريان وبحيرة قارون.", period: "مصر الحديثة", stats: "السكان: ~٣.٩ مليون", label: "الفيوم" }
    },
    sharqia: {
        ancient: { name: "إقليم الشرق", capital: "بوباسطيس", detail: "موطن عبادة الإلهة باستت. تضم مدينة بوباسطيس (تل بسطة) والعديد من المواقع الأثرية.", period: "مصر القديمة", label: "إقليم الشرق" },
        transitional: { name: "إقليم الشرقية", capital: "الزقازيق", detail: "منطقة زراعية خصبة في شرق الدلتا. مسقط رأس أحمد عرابي قائد الثورة العرابية.", period: "العصر الإسلامي/العثماني", label: "الشرقية" },
        modern: { name: "محافظة الشرقية", capital: "الزقازيق", detail: "من أكبر المحافظات الزراعية. تضم آثار تل بسطة ومنطقة صان الحجر.", period: "مصر الحديثة", stats: "السكان: ~٧.٤ مليون", label: "الشرقية" }
    },
    beheira: {
        ancient: { name: "إقليم الغرب", capital: "دمنهور", detail: "أراضٍ زراعية خصبة في غرب الدلتا. ارتبطت بعبادة الإله حورس.", period: "مصر القديمة", label: "إقليم الغرب" },
        transitional: { name: "إقليم البحيرة", capital: "دمنهور", detail: "إقليم زراعي كبير. شهد معركة رشيد عام ١٨٠٧ ضد الإنجليز.", period: "العصر الإسلامي/العثماني", label: "البحيرة" },
        modern: { name: "محافظة البحيرة", capital: "دمنهور", detail: "من أكبر المحافظات الزراعية. تشتهر بالقطن والقمح والحمضيات وأديرة وادي النطرون.", period: "مصر الحديثة", stats: "السكان: ~٦.٥ مليون", label: "البحيرة" }
    },
    "north-sinai": {
        ancient: { name: "طريق حورس", capital: "ثارو", detail: "الطريق العسكري القديم بين مصر وبلاد الشام. خط الدفاع الأول عن مصر الفرعونية.", period: "مصر القديمة", label: "طريق حورس" },
        transitional: { name: "سيناء الشمالية", capital: "العريش", detail: "معبر جيوش الفتح الإسلامي. محطة رئيسية لقوافل الحج عبر التاريخ.", period: "العصر الإسلامي/العثماني", label: "شمال سيناء" },
        modern: { name: "محافظة شمال سيناء", capital: "العريش", detail: "محافظة حدودية استراتيجية. تضم ممر متلا وبقايا الخط العسكري القديم.", period: "مصر الحديثة", stats: "السكان: ~٠.٥ مليون", label: "شمال سيناء" }
    },
    "red-sea": {
        ancient: { name: "الساحل الشرقي", capital: "ميناء القصير", detail: "ساحل استُخدم للتجارة مع بلاد بونت. تضم محاجر الجرانيت والأحجار الكريمة.", period: "مصر القديمة", label: "الساحل الشرقي" },
        transitional: { name: "ساحل البحر الأحمر", capital: "الغردقة", detail: "طريق تجاري بحري هام. ربط مصر بالحجاز واليمن وشرق أفريقيا.", period: "العصر الإسلامي/العثماني", label: "البحر الأحمر" },
        modern: { name: "محافظة البحر الأحمر", capital: "الغردقة", detail: "وجهة سياحية عالمية للغوص والشواطئ. تمتد على ١٠٨٠ كم من الساحل.", period: "مصر الحديثة", stats: "السكان: ~٠.٤ مليون", label: "البحر الأحمر" }
    },
    matrouh: {
        ancient: { name: "ليبيا الشرقية", capital: "واحة آمون", detail: "أرض القبائل الليبية القديمة. تضم واحة سيوة حيث معبد أوراكل آمون.", period: "مصر القديمة", label: "الحدود الغربية" },
        transitional: { name: "إقليم مرسى مطروح", capital: "مرسى مطروح", detail: "منطقة ساحلية وصحراوية. شهدت معركة العلمين الشهيرة عام ١٩٤٢.", period: "العصر الحديث المبكر", label: "مطروح" },
        modern: { name: "محافظة مطروح", capital: "مرسى مطروح", detail: "من أكبر المحافظات مساحة. مركز سياحة صيفية على المتوسط وسياحة بيئية في واحة سيوة.", period: "مصر الحديثة", stats: "السكان: ~٠.٥ مليون", label: "مطروح" }
    },
    "new-valley": {
        ancient: { name: "الواحات الغربية", capital: "هيبس (الخارجة)", detail: "سلسلة واحات صحراوية. استُخدمت كمنفى ومحطة قوافل عبر الصحراء.", period: "مصر القديمة", label: "الواحات" },
        transitional: { name: "الواحات", capital: "الخارجة", detail: "محطات على درب الأربعين التجاري. ربطت مصر بالسودان وغرب أفريقيا.", period: "العصر الإسلامي/العثماني", label: "الواحات" },
        modern: { name: "محافظة الوادي الجديد", capital: "الخارجة", detail: "أكبر محافظات مصر مساحةً (٤٤٪ من مساحة مصر). غنية بالمياه الجوفية ومشاريع استصلاح الأراضي.", period: "مصر الحديثة", stats: "السكان: ~٠.٣ مليون", label: "الوادي الجديد" }
    },
    benisuef: {
        ancient: { name: "حنت-نسوت", capital: "حنت-نسوت", detail: "إقليم على الضفة الغربية للنيل. عُرف بزراعة الكتان وصناعة البردي.", period: "مصر القديمة", label: "حنت-نسوت" },
        transitional: { name: "إقليم بني سويف", capital: "بني سويف", detail: "مركز زراعي في مصر الوسطى. شهد تطوراً إدارياً في عهد محمد علي.", period: "العصر الإسلامي/العثماني", label: "بني سويف" },
        modern: { name: "محافظة بني سويف", capital: "بني سويف", detail: "بوابة الصعيد. تضم جامعة بني سويف ومناطق صناعية حديثة.", period: "مصر الحديثة", stats: "السكان: ~٣.٤ مليون", label: "بني سويف" }
    },
    qalyubia: {
        ancient: { name: "قمبيت", capital: "أثريبيس", detail: "إقليم في قمة الدلتا. مركز عبادة الإله حورس خنتي-خيتي.", period: "مصر القديمة", label: "قمبيت" },
        transitional: { name: "إقليم القليوبية", capital: "بنها", detail: "منطقة زراعية خصبة شمال القاهرة. ازدهرت في العصر العثماني.", period: "العصر الإسلامي/العثماني", label: "القليوبية" },
        modern: { name: "محافظة القليوبية", capital: "بنها", detail: "تضم مدينة شبرا الخيمة الصناعية والقناطر الخيرية على النيل.", period: "مصر الحديثة", stats: "السكان: ~٥.٩ مليون", label: "القليوبية" }
    },
    menofia: {
        ancient: { name: "نررت-بحدت", capital: "سمنود", detail: "إقليم زراعي خصب في وسط الدلتا. مركز ديني مرتبط بالإلهة إيزيس.", period: "مصر القديمة", label: "نررت-بحدت" },
        transitional: { name: "إقليم المنوفية", capital: "شبين الكوم", detail: "منطقة زراعية في قلب الدلتا. مسقط رأس الرئيس أنور السادات.", period: "العصر الإسلامي/العثماني", label: "المنوفية" },
        modern: { name: "محافظة المنوفية", capital: "شبين الكوم", detail: "محافظة زراعية كثيفة السكان. تشتهر بزراعة القطن والأرز.", period: "مصر الحديثة", stats: "السكان: ~٤.٣ مليون", label: "المنوفية" }
    },
    gharbiah: {
        ancient: { name: "ثا-نتر", capital: "بحبيط الحجارة", detail: "مركز عبادة الإلهة نيت في سايس. عاصمة مصر في الأسرة السادسة والعشرين.", period: "مصر القديمة", label: "ثا-نتر" },
        transitional: { name: "إقليم الغربية", capital: "طنطا", detail: "تضم مدينة طنطا ومقام السيد البدوي. مركز تجاري وثقافي في الدلتا.", period: "العصر الإسلامي/العثماني", label: "الغربية" },
        modern: { name: "محافظة الغربية", capital: "طنطا", detail: "تضم جامعة طنطا ومولد السيد البدوي الشهير. مركز تجاري وصناعي.", period: "مصر الحديثة", stats: "السكان: ~٥.٢ مليون", label: "الغربية" }
    },
    minya: {
        ancient: { name: "مناة خوفو", capital: "مناة خوفو", detail: "إقليم على النيل في مصر الوسطى. يضم مقابر بني حسن ذات الرسومات الفريدة.", period: "مصر القديمة", label: "مناة خوفو" },
        transitional: { name: "إقليم المنيا", capital: "المنيا", detail: "مركز تعليمي في صعيد مصر. تُلقب بعروس الصعيد.", period: "العصر الإسلامي/العثماني", label: "المنيا" },
        modern: { name: "محافظة المنيا", capital: "المنيا", detail: "تضم منطقة تل العمارنة الأثرية ومقابر بني حسن. مركز زراعي وصناعي.", period: "مصر الحديثة", stats: "السكان: ~٦ مليون", label: "المنيا" }
    },
    sohag: {
        ancient: { name: "تا-ور", capital: "ثني (أبيدوس)", detail: "مركز عبادة أوزوريس في أبيدوس. موطن أقدم الملوك المصريين.", period: "مصر القديمة", label: "تا-ور" },
        transitional: { name: "إقليم سوهاج", capital: "سوهاج", detail: "تضم الدير الأبيض والدير الأحمر. مركز ديني مسيحي تاريخي.", period: "العصر الإسلامي/العثماني", label: "سوهاج" },
        modern: { name: "محافظة سوهاج", capital: "سوهاج", detail: "تضم معبد أبيدوس الشهير ومناطق أثرية هامة. مركز زراعي في الصعيد.", period: "مصر الحديثة", stats: "السكان: ~٥.٤ مليون", label: "سوهاج" }
    },
    "kafr-el-sheikh": {
        ancient: { name: "بوتو", capital: "بوتو (تل الفراعين)", detail: "عاصمة مصر السفلى قبل التوحيد. مقر التاج الأحمر ومركز عبادة الإلهة واجيت.", period: "مصر القديمة", label: "بوتو" },
        transitional: { name: "إقليم كفر الشيخ", capital: "كفر الشيخ", detail: "سُميت نسبة إلى الشيخ طلحة بن عوف. منطقة زراعية في شمال الدلتا.", period: "العصر الإسلامي/العثماني", label: "كفر الشيخ" },
        modern: { name: "محافظة كفر الشيخ", capital: "كفر الشيخ", detail: "تضم بحيرة البرلس ومصايد أسماك هامة. منطقة زراعية غنية بالأرز.", period: "مصر الحديثة", stats: "السكان: ~٣.٥ مليون", label: "كفر الشيخ" }
    },
    dakahlia: {
        ancient: { name: "إقليم الدلتا", capital: "تمنيس", detail: "أرض خصبة في قلب دلتا النيل. مركز زراعة البردي وصناعة الورق.", period: "مصر القديمة", label: "الدلتا" },
        transitional: { name: "إقليم الدقهلية", capital: "المنصورة", detail: "شهدت معركة المنصورة عام ١٢٥٠م حيث أُسر لويس التاسع ملك فرنسا.", period: "العصر الإسلامي/العثماني", label: "الدقهلية" },
        modern: { name: "محافظة الدقهلية", capital: "المنصورة", detail: "تضم جامعة المنصورة الشهيرة ومركز الكلى الدولي. محافظة زراعية وصناعية.", period: "مصر الحديثة", stats: "السكان: ~٦.٩ مليون", label: "الدقهلية" }
    },
    "port-said": {
        ancient: { name: "ساحل الدلتا", capital: "بيلوزيوم", detail: "موقع مدينة بيلوزيوم القديمة. نقطة دفاعية على الحدود الشرقية لمصر.", period: "مصر القديمة", label: "بيلوزيوم" },
        transitional: { name: "بور سعيد", capital: "بور سعيد", detail: "أُنشئت عام ١٨٥٩ مع بداية حفر قناة السويس. سُميت تيمناً بالخديوي سعيد.", period: "العصر الحديث المبكر", label: "بور سعيد" },
        modern: { name: "محافظة بور سعيد", capital: "بور سعيد", detail: "مدينة باسلة على مدخل قناة السويس. منطقة حرة تجارية ورمز للمقاومة المصرية.", period: "مصر الحديثة", stats: "السكان: ~٠.٨ مليون", label: "بور سعيد" }
    },
    suez: {
        ancient: { name: "كليسما", capital: "كليسما", detail: "موقع ميناء قديم على البحر الأحمر. نقطة انطلاق للتجارة البحرية.", period: "مصر القديمة", label: "كليسما" },
        transitional: { name: "السويس", capital: "السويس", detail: "ميناء تجاري هام على البحر الأحمر. شهدت مقاومة باسلة في حرب ١٩٧٣.", period: "العصر الإسلامي/العثماني", label: "السويس" },
        modern: { name: "محافظة السويس", capital: "السويس", detail: "تقع على المدخل الجنوبي لقناة السويس. مركز صناعي وبترولي هام.", period: "مصر الحديثة", stats: "السكان: ~٠.٧ مليون", label: "السويس" }
    },
    damietta: {
        ancient: { name: "تامايات", capital: "تامايات", detail: "ميناء على الفرع الشرقي للنيل. مركز تجاري مصري قديم.", period: "مصر القديمة", label: "تامايات" },
        transitional: { name: "دمياط", capital: "دمياط", detail: "صدّت حملتين صليبيتين (١٢١٨ و١٢٤٩). اشتهرت بصناعة الحلويات والأثاث.", period: "العصر الإسلامي/العثماني", label: "دمياط" },
        modern: { name: "محافظة دمياط", capital: "دمياط", detail: "عاصمة صناعة الأثاث في مصر. تضم ميناء دمياط الجديد ورأس البر.", period: "مصر الحديثة", stats: "السكان: ~١.٥ مليون", label: "دمياط" }
    },
    "south-sinai": {
        ancient: { name: "أرض الفيروز", capital: "سرابيط الخادم", detail: "مناجم الفيروز والنحاس الفرعونية. تضم أقدم أبجدية في العالم.", period: "مصر القديمة", label: "أرض الفيروز" },
        transitional: { name: "جنوب سيناء", capital: "الطور", detail: "موطن دير سانت كاترين المبني في القرن السادس. محطة لقوافل الحج.", period: "العصر الإسلامي/العثماني", label: "جنوب سيناء" },
        modern: { name: "محافظة جنوب سيناء", capital: "الطور", detail: "وجهة سياحية عالمية تضم شرم الشيخ ودهب ومحمية رأس محمد وجبل سيناء ومنطقة سانت كاترين.", period: "مصر الحديثة", stats: "السكان: ~٠.١ مليون", label: "جنوب سيناء" }
    },
    disputed: {
        ancient: { name: "منطقة بئر طويل", capital: "غير مأهولة", detail: "منطقة صحراوية نائية بين مصر القديمة والنوبة. استُخدمت كممر عبور للبعثات التجارية جنوباً.", period: "مصر القديمة", label: "بئر طويل" },
        transitional: { name: "إقليم بئر طويل", capital: "غير مأهولة", detail: "منطقة صحراوية بين مصر والسودان. عبرتها القبائل البدوية والقوافل التجارية.", period: "العصر الإسلامي/العثماني", label: "بئر طويل" },
        modern: { name: "بئر طويل", capital: "غير مأهولة", detail: "مساحة ٢,٠٦٠ كم² بين مصر والسودان، لا تدعيها أي دولة بسبب اتفاقيتي ١٨٩٩ و١٩٠٢ المتناقضتين.", period: "منطقة متنازع عليها", stats: "المساحة: ~٢,٠٦٠ كم²", label: "بئر طويل" }
    },
    halaib: {
        ancient: { name: "الساحل الجنوبي", capital: "برنيكي", detail: "جزء من ساحل البحر الأحمر في العصر البطلمي. ربط ميناء برنيكي مصر بتجارة المحيط الهندي.", period: "العصر البطلمي/الروماني", label: "ساحل حلايب" },
        transitional: { name: "أراضي العبابدة", capital: "حلايب", detail: "سكنتها قبائل العبابدة والبشارية. منطقة عازلة بين مصر والسودان.", period: "العصر الإسلامي/العثماني", label: "حلايب" },
        modern: { name: "مثلث حلايب", capital: "حلايب", detail: "مساحة ٢٠,٥٨٠ كم² على البحر الأحمر تديرها مصر وتطالب بها السودان. غنية بالمعادن والشعاب المرجانية.", period: "منطقة متنازع عليها", stats: "المساحة: ~٢٠,٥٨٠ كم²", label: "مثلث حلايب" }
    }
};

// State
let currentMode = 'ancient';
let selectedRegionId = null;
let originalPanelHTML = null; // Store for restoration after comparison

// DOM
const body = document.getElementById('body');
const slider = document.getElementById('hero-era-slider');
const modeSummary = document.getElementById('mode-summary');
const eraBtns = document.querySelectorAll('.era-btn');
const panelPlaceholder = document.getElementById('panel-placeholder');
const panelContent = document.getElementById('panel-content');
const regionPaths = document.querySelectorAll('.region');
const tooltip = document.getElementById('tooltip');
const heroBubble = document.querySelector('.here-bubble');
const hudBreadcrumbs = document.getElementById('hud-breadcrumbs');
const hudRegionCounter = document.getElementById('hud-region-counter');

// Bubble State
const defaultBubbleText = 'استكشف هنا!';
const defaultBg = 'var(--c-purple)';
const defaultColor = '#fff';

function setBubble(text, bg, color) {
    if (!heroBubble) return;
    heroBubble.innerHTML = text;
    heroBubble.style.background = bg || defaultBg;
    heroBubble.style.color = color || (document.documentElement.classList.contains('light-mode') && !bg ? '#000' : (color || defaultColor));
}

function resetBubble() {
    setBubble(defaultBubbleText, defaultBg, defaultColor);
}

function init() {
    // Capture original structure before any comparison mode overwrites it
    if (!originalPanelHTML && panelContent) {
        originalPanelHTML = panelContent.innerHTML;
    }
    updateMode(0);
    setupEventListeners();
    setupHUDSearch();

    // Tutorial overlay
    if (localStorage.getItem('tutorialSeen') === 'true') {
        const overlay = document.getElementById('tutorial-overlay');
        if (overlay) overlay.classList.add('hidden');
    }
}

window.closeTutorial = function () {
    const overlay = document.getElementById('tutorial-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
        localStorage.setItem('tutorialSeen', 'true');
    }
};

// ===== MODES (ARABIC) =====
const modes = [
    {
        id: 'ancient',
        title: 'من <em>الأقاليم</em> إلى المحافظات',
        summary: "الأقاليم الـ ٤٢ — أقدم تقسيمات إدارية في مصر، لكل منها إلهه وعاصمته وشعاره المقدس.",
        intro: "لأكثر من ثلاثة آلاف عام، قُسمت مصر إلى ٤٢ إقليماً (سبات)، يحكم كل منها حاكم إقليمي. استمرت حدودها من الأسرة الأولى حتى سقوط روما.",
        bgClass: 'mode-ancient',
        regionCount: '٤٢',
        yearRange: '٥٠٠٠ ق.م — ٣٠ ق.م'
    },
    {
        id: 'transitional',
        title: '<em>الفتح</em> والإصلاح',
        summary: "من الفتح العربي عبر الحكم العثماني إلى تحديث محمد علي — قرون من التحول الإداري.",
        intro: "أنهى الفتح العربي عام ٦٤١م نظام الأقاليم القديم. عبر حكم المماليك والعثمانيين، أُعيدت هيكلة إدارة مصر إلى ولايات.",
        bgClass: 'mode-transitional',
        regionCount: '١٤',
        yearRange: '٦٤١ م — ١٨٠٥ م'
    },
    {
        id: 'modern',
        title: 'المحافظات الـ <em>٢٧</em>',
        summary: "الخريطة الإدارية لجمهورية مصر العربية — حيث تلتقي الجغرافيا القديمة بالتحضر الحديث.",
        intro: "تعكس المحافظات الـ ٢٧ اليوم الجغرافيا الفرعونية وواقع القرن الحادي والعشرين. بعضها كالأقصر يردد صدى أسلافه القدماء، وبعضها كبورسعيد من نتاج العصر الحديث.",
        bgClass: 'mode-modern',
        regionCount: '٢٧',
        yearRange: '١٩٥٣ م — الآن'
    }
];

function updateMode(index) {
    const mode = modes[index];
    currentMode = mode.id;
    body.className = mode.bgClass;
    document.getElementById('main-title').innerHTML = mode.title;
    modeSummary.textContent = mode.summary;
    document.getElementById('intro-text').textContent = mode.intro;

    // 1. Sync Layer Panel Radios
    const eraRadios = document.querySelectorAll('input[name="era-layer"]');
    if (eraRadios.length > 0 && eraRadios[index]) {
        eraRadios[index].checked = true;
    }

    // 2. Sync Era Slider & Ticks (Inside Panel)
    const panelSlider = document.getElementById('panel-era-slider');
    if (panelSlider) {
        panelSlider.value = index;
        const pTicks = document.querySelectorAll('.panel-slider-labels .p-tick');
        pTicks.forEach((t, i) => t.classList.toggle('active', i === index));
    }


    // 3. Update HUD Region Counter
    if (hudRegionCounter) {
        hudRegionCounter.querySelector('span').textContent = mode.regionCount;
    }

    // 4. Update Layer Description in Panel
    const layerDesc = document.getElementById('layer-desc');
    if (layerDesc) {
        layerDesc.textContent = `يتم عرض: ${mode.summary}`;
    }

    // 5. Cinematic transition effect to map
    const map = document.getElementById('egypt-map');
    if (map && typeof gsap !== 'undefined') {
        gsap.to(map, {
            opacity: 0.3, scale: 0.98, filter: 'blur(4px) drop-shadow(0 0 10px var(--c-accent))', duration: 0.2, ease: 'power2.in', onComplete: () => {
                gsap.to(map, {
                    opacity: 1, scale: 1,
                    filter: 'none', // COMPLETELY CLEAR FILTERS FOR PERFORMANCE
                    duration: 0.8, ease: 'elastic.out(1, 0.75)'
                });
            }
        });
    } else if (map) {

        map.style.transition = 'none';
        map.style.opacity = '0.4';
        setTimeout(() => {
            map.style.transition = 'all 0.8s ease';
            map.style.opacity = '1';
        }, 50);
    }

    eraBtns.forEach((btn, i) => btn.classList.toggle('active', i == index));

    if (comparisonMode && comparisonRegions.length === 2) {
        showComparisonResults();
    } else if (selectedRegionId) {
        showRegionDetails(selectedRegionId);
    } else {
        resetHUDHighlight();
    }

    updateHUDSearchPlaceholder();
    // Update icons in panel if a region is selected OR if in comparison mode
    if (selectedRegionId || (comparisonMode && comparisonRegions.length > 0)) morphSymbols(currentMode);
}

function resetHUDHighlight() {
    const highlightBar = document.getElementById('hud-highlight-bar');
    if (highlightBar) {
        const label = highlightBar.querySelector('.highlight-label');
        const val = highlightBar.querySelector('.highlight-val');
        if (label) label.textContent = 'النظام نشط';
        if (val) val.textContent = '—';
    }
}

const eraIcons = {
    ancient: {
        capital: `<path d="M3 21h18M3 7v1h18V7M5 8v10M9 8v10M15 8v10M19 8v10M2 4h20M2 1h20"/>`, // Temple
        population: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`, // Users
        area: `<path d="M12 2v20M2 12h20M12 2l4 4M12 2l-4 4M12 22l4-4M12 22l-4-4"/>`, // Compass
        heritage: `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>` // Artifact
    },
    transitional: {
        capital: `<path d="M12 2l-7 3v14h14V5l-7-3zM12 6v6m0 0l-2-2m2 2l2-2"/>`, // Fortress
        population: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>`,
        area: `<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>`,
        heritage: `<path d="M12 3v19M5 8h14M5 16h14"/>`
    },
    modern: {
        capital: `<path d="M3 21h18M9 21V9l3-4 3 4v12M9 13h6M9 17h6"/>`, // Building
        population: `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
        area: `<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>`, // Screen/Map
        heritage: `<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>` // Star
    }
};

function morphSymbols(mode) {
    const icon1 = document.querySelector('#fact-icon-1 svg');
    const icon2 = document.querySelector('#fact-icon-2 svg');

    if (icon1 && eraIcons[mode]) {
        gsap.to(icon1, {
            opacity: 0, scale: 0.5, duration: 0.2, onComplete: () => {
                icon1.innerHTML = eraIcons[mode].capital;
                gsap.to(icon1, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" });
            }
        });
    }
    if (icon2 && eraIcons[mode]) {
        gsap.to(icon2, {
            opacity: 0, scale: 0.5, duration: 0.2, delay: 0.1, onComplete: () => {
                icon2.innerHTML = eraIcons[mode].population;
                gsap.to(icon2, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" });
            }
        });
    }
}

function setupHUDSearch() {
    const input = document.getElementById('hud-search-input');
    const results = document.getElementById('search-results');

    if (!input || !results) return;

    input.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.length < 1) {
            results.classList.add('hidden');
            return;
        }

        const matches = [];
        const eras = ['ancient', 'transitional', 'modern'];

        Object.entries(regionsData).forEach(([id, data]) => {
            eras.forEach(era => {
                const current = data[era];
                if (current && (
                    current.name.toLowerCase().includes(query) ||
                    current.capital.toLowerCase().includes(query) ||
                    (current.label && current.label.toLowerCase().includes(query)) ||
                    (current.period && current.period.toLowerCase().includes(query))
                )) {
                    matches.push({ id, era, current });
                }
            });
        });

        // Limit to top 5 matches
        const uniqueMatches = matches.slice(0, 5);

        if (uniqueMatches.length > 0) {
            results.innerHTML = uniqueMatches.map(({ id, era, current }) => {
                const icon = era === 'ancient' ? '𓉐' : (era === 'modern' ? '📍' : '🕌');
                return `<div class="search-result-item" data-id="${id}" data-era="${era}">
                    <span class="res-icon">${icon}</span>
                    <span class="res-name">${current.name}</span>
                    <span class="res-era">${current.period}</span>
                </div>`;
            }).join('');
            results.classList.remove('hidden');

            document.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    const id = item.dataset.id;
                    const era = item.dataset.era;

                    selectedRegionId = id;

                    const eraIndex = eras.indexOf(era);
                    if (currentMode !== era && eraIndex !== -1) {
                        if (slider) slider.value = eraIndex;
                        updateMode(eraIndex);
                    } else {
                        showRegionDetails(id);
                    }

                    input.value = '';
                    results.classList.add('hidden');

                    // Enhancement: Highlight found region
                    const path = document.getElementById(id);
                    if (path) {
                        path.classList.add('search-pulse');
                        setTimeout(() => path.classList.remove('search-pulse'), 2500);
                    }

                    // Scroll to map
                    const mapEl = document.getElementById('hero-map');
                    if (mapEl) window.lenis ? window.lenis.scrollTo(mapEl, { offset: -100 }) : mapEl.scrollIntoView({ behavior: 'smooth' });
                });
            });
        } else {
            results.classList.add('hidden');
        }
    });

    // Close results on click outside
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !results.contains(e.target)) {
            results.classList.add('hidden');
        }
    });
}

function updateHUDSearchPlaceholder() {
    const input = document.getElementById('hud-search-input');
    if (!input) return;
    const placeholders = {
        ancient: 'ابحث عن إقليم فرعوني...',
        transitional: 'ابحث عن ولاية أو مدينة...',
        modern: 'ابحث عن محافظة مصرية...'
    };
    input.placeholder = placeholders[currentMode] || 'ابحث...';
}

function showRegionDetails(id) {
    // Comparison Mode Guard
    if (comparisonMode) {
        handleComparisonSelection(id);
        return;
    }

    const data = regionsData[id];
    const panelBody = document.querySelector('.panel-body');
    if (panelBody) panelBody.scrollTop = 0;

    if (!data) {
        panelContent.classList.add('hidden');
        panelPlaceholder.classList.remove('hidden');
        // Don't overwrite innerHTML — just update the text to preserve the rich layout
        const emptyTitle = panelPlaceholder.querySelector('.empty-title');
        const emptySub = panelPlaceholder.querySelector('.empty-sub');
        if (emptyTitle) emptyTitle.textContent = 'بيانات هذه المنطقة قيد الإعداد';
        if (emptySub) emptySub.textContent = 'سيتم إضافة المعلومات قريباً';
        return;
    }
    const modeData = data[currentMode];
    panelPlaceholder.classList.add('hidden');
    panelContent.classList.remove('hidden');
    panelContent.style.animation = 'none';
    panelContent.offsetHeight;
    panelContent.style.animation = '';
    const cleanName = modeData.name.replace(/\(.*\)/, '').trim();
    document.getElementById('region-name').textContent = cleanName;
    document.getElementById('region-period').textContent = modeData.period;

    // Symbol display (Ancient only)
    const symbolEl = document.getElementById('region-symbol');
    if (symbolEl) {
        if (currentMode === 'ancient' && modeData.symbol) {
            symbolEl.textContent = modeData.symbol.split('(')[0].trim();
            symbolEl.classList.remove('hidden');
        } else {
            symbolEl.classList.add('hidden');
        }
    }

    // Wiki link update
    const wikiLink = document.getElementById('wiki-link');
    if (wikiLink) {
        const searchTerm = cleanName.replace(/إقليم|محافظة|ثغر/, '').trim();
        wikiLink.href = `https://ar.wikipedia.org/wiki/${encodeURIComponent(searchTerm)}`;
    }

    document.getElementById('region-capital').textContent = modeData.capital;
    document.getElementById('region-detail').textContent = modeData.detail;

    morphSymbols(currentMode);

    // Check for scrollable content to show/hide scroll hint
    const scrollHint = document.querySelector('.scroll-hint');
    if (panelBody && scrollHint) {
        setTimeout(() => {
            if (panelBody.scrollHeight > panelBody.clientHeight) {
                scrollHint.classList.remove('hidden');
            } else {
                scrollHint.classList.add('hidden');
            }
        }, 100);
    }

    // Era badge
    const eraBadge = document.getElementById('era-badge');
    const regionType = document.getElementById('region-type');
    if (currentMode === 'ancient') {
        eraBadge.textContent = 'مصر القديمة';
        regionType.textContent = 'إقليم';
    } else if (currentMode === 'transitional') {
        eraBadge.textContent = 'إسلامي/عثماني';
        regionType.textContent = 'ولاية';
    } else {
        eraBadge.textContent = 'العصر الحديث';
        regionType.textContent = 'محافظة';
    }

    // Era progress dots
    document.querySelectorAll('.era-step-dot').forEach(dot => dot.classList.remove('active'));
    const eraSteps = document.querySelectorAll('.era-step');
    eraSteps.forEach(step => {
        if (step.dataset.era === currentMode) {
            step.querySelector('.era-step-dot').classList.add('active');
        }
    });

    // HUD breadcrumbs update
    if (hudBreadcrumbs) {
        const items = hudBreadcrumbs.querySelectorAll('.bc-item');
        items.forEach(item => item.classList.remove('active'));
        if (currentMode === 'ancient') items[0].classList.add('active');
        if (currentMode === 'transitional') items[1].classList.add('active');
        if (currentMode === 'modern') items[2].classList.add('active');
    }

    // New: HUD Highlight Bar Update
    const highlightBar = document.getElementById('hud-highlight-bar');
    if (highlightBar) {
        const label = highlightBar.querySelector('.highlight-label');
        const val = highlightBar.querySelector('.highlight-val');
        if (label) label.textContent = currentMode === 'ancient' ? 'العاصمة القديمة' : currentMode === 'transitional' ? 'المركز الإداري' : 'عاصمة المحافظة';
        if (val) val.textContent = modeData.capital;

        if (typeof gsap !== 'undefined') {
            gsap.fromTo(highlightBar, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" });
        }
    }

    // Dynamic population & status context
    const statsGroup = document.getElementById('modern-stats');
    const regionStats = document.getElementById('region-stats');
    const popBarContainer = document.getElementById('pop-bar-container');
    const popBarFill = document.getElementById('pop-bar-fill');
    const popBarValue = document.getElementById('pop-bar-value');

    if (currentMode === 'modern' && modeData.stats) {
        statsGroup.classList.remove('hidden');
        regionStats.textContent = modeData.stats;
        if (popBarContainer) {
            popBarContainer.classList.remove('hidden');
            const popMatch = modeData.stats.match(/[\d.٠-٩]+/);
            let popNum = 0;
            if (popMatch) {
                popNum = parseFloat(popMatch[0].replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)));
            }
            const percent = Math.min((popNum / 10) * 100, 100);
            popBarValue.textContent = modeData.stats;
            setTimeout(() => { if (popBarFill) popBarFill.style.width = percent + '%'; }, 100);
        }
    } else {
        statsGroup.classList.remove('hidden'); // Show generic label
        const popEstimate = currentMode === 'ancient' ? 'كثافة متوسطة (إقليم مركزي)' : 'كثافة متوسطة (ولاية زراعية)';
        regionStats.textContent = popEstimate;
        if (popBarContainer) popBarContainer.classList.add('hidden');
    }

    // Infographic stats
    const infoArea = document.getElementById('info-area');
    const infoMonuments = document.getElementById('info-monuments');
    const infoFounded = document.getElementById('info-founded');
    // Generate contextual data based on region and era
    const regionAreas = {
        luxor: '2960', aswan: '679', cairo: '3085', alexandria: '2679', giza: '85153',
        ismailia: '5067', asyut: '1553', qena: '1851', fayyum: '6068', sharqia: '4911',
        beheira: '10130', 'north-sinai': '27574', 'red-sea': '203685', matrouh: '166563',
        'new-valley': '440098', benisuef: '1322', qalyubia: '1001', menofia: '2543',
        gharbiah: '1942', minya: '2262', sohag: '1547', 'kafr-el-sheikh': '3437',
        dakahlia: '3471', 'port-said': '1351', suez: '17840', damietta: '589',
        'south-sinai': '33140', disputed: '2060', halaib: '20580'
    };
    const regionMonuments = {
        luxor: '14', aswan: '8', cairo: '23', alexandria: '9', giza: '11',
        ismailia: '3', asyut: '6', qena: '7', fayyum: '5', sharqia: '6',
        beheira: '4', 'north-sinai': '5', 'red-sea': '4', matrouh: '3',
        'new-valley': '4', benisuef: '3', qalyubia: '4', menofia: '2',
        gharbiah: '5', minya: '7', sohag: '8', 'kafr-el-sheikh': '3',
        dakahlia: '4', 'port-said': '2', suez: '3', damietta: '3',
        'south-sinai': '6', disputed: '0', halaib: '2'
    };
    const regionFounded = {
        luxor: '٣٢٠٠ ق.م', aswan: '٣٠٠٠ ق.م', cairo: '٩٦٩ م', alexandria: '٣٣١ ق.م',
        giza: '٢٥٨٠ ق.م', ismailia: '١٨٦٣', asyut: '٣١٠٠ ق.م', qena: '٣٢٠٠ ق.م',
        fayyum: '٤٠٠٠ ق.م', sharqia: '٢٦٠٠ ق.م', beheira: '٢٦٠٠ ق.م',
        'north-sinai': '٣٠٠٠ ق.م', 'red-sea': '٣٠٠ ق.م', matrouh: '٣٣١ ق.م',
        'new-valley': '٢٥٠٠ ق.م', benisuef: '٣١٠٠ ق.م', qalyubia: '١٨٢٦',
        menofia: '١٨٢٦', gharbiah: '٢٦٠٠ ق.م', minya: '٣٠٠٠ ق.م',
        sohag: '٣١٠٠ ق.م', 'kafr-el-sheikh': '٣٠٠٠ ق.م', dakahlia: '١٢٥٠',
        'port-said': '١٨٥٩', suez: '١٨٦٩', damietta: '٢٠٠٠ ق.م',
        'south-sinai': '٣٠٠٠ ق.م', disputed: '—', halaib: '—'
    };
    // Format area with Arabic thousands separator
    const formatArea = (n) => {
        if (!n || n === '—') return '—';
        const s = String(n).replace(/\D/g, '');
        const ar = '٠١٢٣٤٥٦٧٨٩';
        const formatted = s.replace(/\B(?=(\d{3})+(?!\d))/g, '٬').replace(/\d/g, d => ar[d]);
        return formatted + ' كم²';
    };
    if (infoArea) infoArea.textContent = regionAreas[id] ? formatArea(regionAreas[id]).replace(' كم²', '') : '—';
    if (infoMonuments) infoMonuments.textContent = regionMonuments[id] || '—';
    if (infoFounded) infoFounded.textContent = regionFounded[id] || '—';

    // Update coordinate tag
    const regionCoords = {
        luxor: '٢٥°٤١′ ش — ٣٢°٣٩′ ق', aswan: '٢٣°٥٨′ ش — ٣٢°٥٣′ ق', cairo: '٣٠°٠٣′ ش — ٣١°١٤′ ق',
        alexandria: '٣١°١٢′ ش — ٢٩°٥٤′ ق', giza: '٣٠°٠١′ ش — ٣١°١٣′ ق', ismailia: '٣٠°٣٥′ ش — ٣٢°١٦′ ق',
        asyut: '٢٧°١١′ ش — ٣١°١٠′ ق', qena: '٢٦°١٠′ ش — ٣٢°٤٣′ ق', fayyum: '٢٩°١٨′ ش — ٣٠°٤٥′ ق',
        sharqia: '٣٠°٤٣′ ش — ٣١°٣٧′ ق', beheira: '٣٠°٣١′ ش — ٣٠°٢٨′ ق',
        'north-sinai': '٣١°٠٨′ ش — ٣٣°٤٨′ ق', 'red-sea': '٢٦°١٩′ ش — ٣٤°٠٠′ ق',
        matrouh: '٣١°٢٠′ ش — ٢٧°١٣′ ق', 'new-valley': '٢٥°٢٦′ ش — ٣٠°٣٢′ ق',
        benisuef: '٢٩°٠٤′ ش — ٣٠°٥٩′ ق', qalyubia: '٣٠°٢٥′ ش — ٣١°١٣′ ق',
        menofia: '٣٠°٢٩′ ش — ٣١°٠٠′ ق', gharbiah: '٣٠°٥٣′ ش — ٣٠°٥٤′ ق',
        minya: '٢٨°٠٦′ ش — ٣٠°٤٣′ ق', sohag: '٢٦°٣٣′ ش — ٣١°٤٢′ ق',
        'kafr-el-sheikh': '٣١°٠٦′ ش — ٣٠°٥٧′ ق', dakahlia: '٣١°٠٢′ ش — ٣١°٢٣′ ق',
        'port-said': '٣١°١٥′ ش — ٣٢°١٨′ ق', suez: '٢٩°٥٨′ ش — ٣٢°٣٢′ ق',
        damietta: '٣١°٢٥′ ش — ٣١°٤٨′ ق', 'south-sinai': '٢٨°٣٠′ ش — ٣٤°٠٢′ ق'
    };
    const coordEl = document.getElementById('coord-tag');
    if (coordEl) {
        if (typeof gsap !== 'undefined') {
            gsap.to(coordEl, {
                opacity: 0.3, duration: 0.1, repeat: 3, yoyo: true, onComplete: () => {
                    coordEl.textContent = regionCoords[id] || '٣٠°٠٤′ ش — ٣١°١٤′ ق';
                    gsap.to(coordEl, { opacity: 1, duration: 0.2 });
                }
            });
        } else {
            coordEl.textContent = regionCoords[id] || '٣٠°٠٤′ ش — ٣١°١٤′ ق';
        }
    }

    // Area badge chips
    const areaBadges = document.getElementById('area-badges');
    if (areaBadges) {
        const isNile = ['luxor', 'aswan', 'cairo', 'giza', 'qena', 'sohag', 'minya', 'asyut', 'benisuef', 'dakahlia', 'qalyubia'].includes(id);
        const isDelta = ['beheira', 'gharbiah', 'menofia', 'dakahlia', 'sharqia', 'kafr-el-sheikh', 'damietta', 'qalyubia'].includes(id);
        const isDesert = ['matrouh', 'new-valley', 'red-sea', 'north-sinai', 'south-sinai'].includes(id);
        const isCoastal = ['alexandria', 'port-said', 'damietta', 'matrouh', 'red-sea', 'south-sinai', 'suez', 'ismailia'].includes(id);
        const hasHeritage = parseInt(regionMonuments[id] || '0') >= 5;

        let badges = '';
        if (isNile) badges += '<div class="area-chip geo">🏞 وادي النيل</div>';
        if (isDelta) badges += '<div class="area-chip geo">🌾 الدلتا</div>';
        if (isDesert) badges += '<div class="area-chip pop">🏜 صحراوية</div>';
        if (isCoastal) badges += '<div class="area-chip geo">🌊 ساحلية</div>';
        if (hasHeritage) badges += '<div class="area-chip rank">⭐ تراث غني</div>';
        if (currentMode === 'modern') badges += '<div class="area-chip pop">📊 ' + (modeData.stats || '') + '</div>';
        areaBadges.innerHTML = badges;
    }

    // Timeline events based on region
    const timelineMini = document.getElementById('timeline-events');
    if (timelineMini) {
        const events = getRegionTimeline(id, currentMode);
        let html = '';
        events.forEach((ev, i) => {
            html += `<div class="timeline-event">
                <div class="event-dot-col">
                    <div class="event-dot"></div>
                    ${i < events.length - 1 ? '<div class="event-line"></div>' : ''}
                </div>
                <div class="event-content">
                    <div class="event-year">${ev.year}</div>
                    <div class="event-text">${ev.text}</div>
                </div>
            </div>`;
        });
        timelineMini.innerHTML = html;
    }

    regionPaths.forEach(path => path.classList.toggle('selected', path.id === id));

    // Staggered reveal animation for panel elements
    if (typeof gsap !== 'undefined') {
        const itemsToAnimate = [
            '.gov-header',
            '.gov-era-strip',
            '.gov-fact-item',
            '.gov-stat',
            '.gov-tags',
            '.gov-record',
            '.gov-timeline',
            '.gov-footer'
        ];

        gsap.fromTo(itemsToAnimate,
            { opacity: 0, y: 15, filter: 'blur(5px)' },
            {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                stagger: 0.08,
                duration: 0.6,
                ease: "power2.out",
                clearProps: "all"
            }
        );
    }
}

function getRegionTimeline(id, mode) {
    const timelines = {
        luxor: [
            { year: '٣٢٠٠ ق.م', text: 'تأسيس طيبة كعاصمة في عهد مينا' },
            { year: '١٥٠٠ ق.م', text: 'بناء معابد الكرنك والأقصر' },
            { year: '١٣٣٦ ق.م', text: 'دفن توت عنخ آمون في وادي الملوك' },
            { year: '٢٠٠٩ م', text: 'استقلال الأقصر كمحافظة' }
        ],
        cairo: [
            { year: '٣١٠٠ ق.م', text: 'تأسيس منف كأول عاصمة موحدة' },
            { year: '٩٦٩ م', text: 'بناء القاهرة الفاطمية' },
            { year: '١٢٥٠ م', text: 'ازدهار القاهرة في عهد المماليك' },
            { year: '١٩٥٢ م', text: 'عاصمة الجمهورية' }
        ],
        alexandria: [
            { year: '٣٣١ ق.م', text: 'تأسيسها بواسطة الإسكندر الأكبر' },
            { year: '٢٨٠ ق.م', text: 'بناء منارة الإسكندرية' },
            { year: '٣٠ ق.م', text: 'عاصمة مصر الرومانية' },
            { year: '١٧٩٨ م', text: 'وصول حملة نابليون' }
        ],
        giza: [
            { year: '٢٥٨٠ ق.م', text: 'بناء الهرم الأكبر لخوفو' },
            { year: '٢٥٠٠ ق.م', text: 'نحت تمثال أبو الهول' },
            { year: '١٧٩٨ م', text: 'معركة الأهرام' },
            { year: '٢٠٢٣ م', text: 'افتتاح المتحف المصري الكبير' }
        ],
        aswan: [
            { year: '٣٠٠٠ ق.م', text: 'بوابة مصر الجنوبية للتجارة' },
            { year: '٣٠٠ ق.م', text: 'بناء معبد فيلة البطلمي' },
            { year: '١٩٠٢ م', text: 'بناء خزان أسوان' },
            { year: '١٩٧٠ م', text: 'افتتاح السد العالي' }
        ],
        qena: [
            { year: '٣٢٠٠ ق.م', text: 'عبادة حتحور في دندرة' },
            { year: '١٠٠ ق.م', text: 'بناء معبد دندرة البطلمي' },
            { year: '١٨٠٠ م', text: 'تطوير قنا كمحطة تجارية' }
        ],
        fayyum: [
            { year: '٤٠٠٠ ق.م', text: 'أقدم الاستيطان في المنطقة' },
            { year: '١٨٥٠ ق.م', text: 'مشروع بحيرة موريس في عهد أمنمحات' },
            { year: '١٠٠ م', text: 'اشتهرت بلوحات الفيوم الجنائزية' }
        ],
        minya: [
            { year: '٣٠٠٠ ق.م', text: 'إقليم مناة خوفو' },
            { year: '١٣٥٠ ق.م', text: 'تل العمارنة عاصمة أخناتون' },
            { year: '١٨٠٠ م', text: 'تُلقب بعروس الصعيد' }
        ],
        sohag: [
            { year: '٣١٠٠ ق.م', text: 'أبيدوس موطن أوزوريس' },
            { year: '٣٠٠٠ ق.م', text: 'أقدم مدافن الملوك' },
            { year: '٣٥٠ م', text: 'الدير الأبيض والدير الأحمر' }
        ],
        'port-said': [
            { year: '١٨٥٩ م', text: 'بدء حفر قناة السويس' },
            { year: '١٨٦٩ م', text: 'افتتاح القناة باسم الخديوي سعيد' },
            { year: '١٩٥٦ م', text: 'المقاومة الباسلة والعدوان الثلاثي' }
        ],
        suez: [
            { year: '١٦٥٠ ق.م', text: 'قناة سيزوستريس القديمة' },
            { year: '١٨٦٩ م', text: 'افتتاح قناة السويس' },
            { year: '١٩٧٣ م', text: 'نصر أكتوبر' }
        ],
        matrouh: [
            { year: '٣٣١ ق.م', text: 'زيارة الإسكندر لواحة سيوة' },
            { year: '١٩٤٢ م', text: 'معركة العلمين' },
            { year: '١٩٦٠ م', text: 'تطوير السياحة الساحلية' }
        ],
        'south-sinai': [
            { year: '٣٠٠٠ ق.م', text: 'مناجم الفيروز والنحاس' },
            { year: '٥٢٧ م', text: 'دير سانت كاترين' },
            { year: '١٩٨٢ م', text: 'استعادة سيناء والتنمية السياحية' }
        ],
        dakahlia: [
            { year: '٢٦٠٠ ق.م', text: 'أرض الدلتا الخصبة' },
            { year: '١٢٥٠ م', text: 'معركة المنصورة وأسر لويس التاسع' },
            { year: '١٩٢٥ م', text: 'جامعة المنصورة' }
        ]
    };

    return timelines[id] || [
        { year: '٣١٠٠ ق.م', text: 'توحيد مصر العليا والسفلى' },
        { year: '٦٤١ م', text: 'الفتح الإسلامي لمصر' },
        { year: '١٩٥٢ م', text: 'ثورة يوليو والجمهورية' }
    ];
}

function setupEventListeners() {
    // Zoom and Layer Controls
    let currentZoom = 1.13;
    const mapEl = document.getElementById('egypt-map');

    document.getElementById('btn-zoom-in')?.addEventListener('click', () => {
        if (currentZoom < 4) currentZoom += 0.3;
        if (mapEl) mapEl.style.transform = `scale(${currentZoom})`;
    });

    document.getElementById('btn-zoom-out')?.addEventListener('click', () => {
        if (currentZoom > 0.7) currentZoom -= 0.3;
        if (mapEl) mapEl.style.transform = `scale(${currentZoom})`;
    });

    document.getElementById('btn-layer-toggle')?.addEventListener('click', () => {
        toggleLayerPanel();
    });

    if (slider) {
        const ticks = document.querySelectorAll('.hero-timeline-container .tick');
        slider.addEventListener('input', () => {
            const val = parseInt(slider.value);
            updateMode(val);
            if (ticks.length > 0) {
                ticks.forEach((t, i) => t.classList.toggle('active', i === val));
            }
        });
    }
    eraBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const pos = parseInt(btn.dataset.pos);
            if (slider) {
                slider.value = pos;
                const ticks = document.querySelectorAll('.hero-timeline-container .tick');
                if (ticks.length > 0) {
                    ticks.forEach((t, i) => t.classList.toggle('active', i === pos));
                }
            }
            updateMode(pos);
        });
    });

    const bcItems = document.querySelectorAll('.bc-item');
    bcItems.forEach(item => {
        item.addEventListener('click', () => {
            if (item.dataset.pos !== undefined) {
                const pos = parseInt(item.dataset.pos);
                if (slider) {
                    slider.value = pos;
                    const ticks = document.querySelectorAll('.hero-timeline-container .tick');
                    if (ticks.length > 0) {
                        ticks.forEach((t, i) => t.classList.toggle('active', i === pos));
                    }
                }
                updateMode(pos);
            }
        });
        item.style.cursor = 'pointer';
    });
    // Click delay pattern: prevents single-click from firing on double-click
    let clickTimer = null;
    regionPaths.forEach(path => {
        path.setAttribute('tabindex', '0');
        path.setAttribute('role', 'button');
        path.setAttribute('aria-label', regionsData[path.id] ? regionsData[path.id][currentMode].name : path.id);

        path.addEventListener('click', (e) => {
            if (clickTimer) { clearTimeout(clickTimer); clickTimer = null; return; }
            clickTimer = setTimeout(() => {
                clickTimer = null;
                if (comparisonMode) {
                    if (comparisonRegions.includes(path.id)) {
                        unselectRegion(path.id);
                    } else {
                        showRegionDetails(path.id);
                    }
                } else {
                    if (selectedRegionId === path.id) {
                        unselectRegion(path.id);
                    } else {
                        selectedRegionId = path.id;
                        showRegionDetails(path.id);
                    }
                }
            }, 220);
        });

        path.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                path.dispatchEvent(new Event('click'));
            }
        });
        path.addEventListener('dblclick', (e) => {
            e.preventDefault();
            if (clickTimer) { clearTimeout(clickTimer); clickTimer = null; }
            unselectRegion(path.id);
        });

        // Hover tooltip for region names
        path.addEventListener('mouseenter', () => {
            const data = regionsData[path.id];
            if (data && tooltip) {
                const modeData = data[currentMode];
                tooltip.textContent = modeData ? modeData.name : path.id;
                tooltip.classList.add('visible');
            }
        });
        path.addEventListener('mousemove', (e) => {
            if (tooltip) {
                tooltip.style.left = e.clientX + 'px';
                tooltip.style.top = (e.clientY - 10) + 'px';
            }
        });
        path.addEventListener('mouseleave', () => {
            if (tooltip) tooltip.classList.remove('visible');
        });
    });

    // Enhanced scroll progress and background freeze for detail panel
    const panelBody = document.querySelector('.panel-body');
    const scrollProgress = document.querySelector('.panel-scroll-progress');
    const scrollHint = document.querySelector('.scroll-hint');
    if (panelBody && scrollProgress) {
        panelBody.addEventListener('scroll', () => {
            const totalHeight = panelBody.scrollHeight - panelBody.clientHeight;
            if (totalHeight <= 0) {
                scrollProgress.style.width = '0%';
                if (scrollHint) scrollHint.classList.add('hidden');
                return;
            }
            const progress = (panelBody.scrollTop / totalHeight) * 100;
            scrollProgress.style.width = progress + '%';

            if (scrollHint) {
                if (panelBody.scrollTop > 20) {
                    scrollHint.classList.add('hidden');
                } else {
                    scrollHint.classList.remove('hidden');
                }
            }

            const header = document.querySelector('.gov-header');
            if (header) {
                const opacity = Math.min(panelBody.scrollTop / 100, 1) * 0.95;
                header.style.backgroundColor = `rgba(10, 10, 18, ${opacity})`;
            }
        });

        // "Freeze" screen scroll when interacting with a scrollable card
        panelBody.addEventListener('mouseenter', () => {
            if (window.lenis && panelBody.scrollHeight > panelBody.clientHeight) {
                window.lenis.stop();
            }
        });
        panelBody.addEventListener('mouseleave', () => {
            if (window.lenis) {
                window.lenis.start();
            }
        });
    }

    // Footer Era Links
    document.querySelectorAll('.footer-era-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pos = parseInt(link.dataset.pos);
            updateMode(pos);
            if (slider) slider.value = pos;

            // Scroll to hero section to see the map change
            const hero = document.getElementById('hero');
            if (hero) {
                if (window.lenis) window.lenis.scrollTo(hero, { duration: 1.2 });
                else hero.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Footer Back to Top
    const btt = document.getElementById('footer-back-to-top');
    if (btt) {
        btt.addEventListener('click', () => {
            if (window.lenis) {
                window.lenis.scrollTo(0, { duration: 1.5 });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
}

// Initialize
function initialize() {


    // Core map functionality MUST run first — independent of any library
    try {
        init();
    } catch (e) {
        console.error('Map init failed:', e);
    }

    // Smooth scroll — wrapped in try-catch so CDN failure doesn't kill the app
    try {
        if (typeof gsap !== 'undefined') {
            gsap.config({ force3D: true, autoSleep: 60 });
            if (typeof ScrollTrigger !== 'undefined') {
                ScrollTrigger.config({
                    limitCallbacks: true,
                    ignoreMobileResize: true,
                    syncInterval: 100
                });
            }
        }
        if (typeof Lenis !== 'undefined') {
            window.lenis = new Lenis({
                lerp: 0.05,             // More fluid for premium feel
                duration: 1.5,          // Slower, cinematic scroll
                touchMultiplier: 1.5,
                wheelMultiplier: 1,
                syncTouch: true,
                smoothWheel: true,
                autoRaf: false          // Handled by our own RAF for better sync
            });

            const scrollProgress = document.getElementById('scroll-progress');

            // Disable expensive CSS during high-velocity scroll
            window.lenis.on('scroll', (e) => {
                const isHeavyScroll = Math.abs(e.velocity) > 8;
                document.body.classList.toggle('is-scrolling', isHeavyScroll);

                // Global Scroll Progress Bar
                if (scrollProgress) {
                    const scrollPercent = (e.scroll / (document.body.scrollHeight - window.innerHeight)) * 100;
                    scrollProgress.style.width = scrollPercent + '%';
                }
            });

            function raf(time) {
                window.lenis.raf(time);
                if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.update();
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
        }

    } catch (e) {
        console.warn('Smooth scroll (Lenis) failed to load:', e);
    }


    // Tablet 3D tilt effect — independent try-catch
    try {
        const tablet = document.querySelector('#hero-tablet .tablet-container');
        if (tablet) {
            let mouseX = 0, mouseY = 0;
            let currentMouseX = 0, currentMouseY = 0;
            let currentRot = 30, targetRot = 30;
            let currentLift = 30, targetLift = 30;
            let currentShiftX = -210, targetShiftX = -210;
            let isLooping = false;

            const lerp = (s, e, f) => s + (e - s) * f;
            const animationLoop = () => {
                currentRot = lerp(currentRot, targetRot, 0.08);
                currentLift = lerp(currentLift, targetLift, 0.08);
                currentShiftX = lerp(currentShiftX, targetShiftX, 0.08);

                // Mouse gyro effect: subtle tilt following cursor when tablet is ready
                currentMouseX = lerp(currentMouseX, mouseX, 0.05);
                currentMouseY = lerp(currentMouseY, mouseY, 0.05);

                const isReady = document.body.classList.contains('tablet-ready');
                const tiltX = isReady ? (currentMouseY * 4) : 0;
                const tiltY = isReady ? (-currentMouseX * 4) : 0;

                const baseScale = 1.15 + (currentRot / 35) * 0.1;
                const finalScale = isReady ? (baseScale * 0.95) : baseScale;

                tablet.style.transform = `
                    rotateX(${(currentRot + tiltX).toFixed(2)}deg) 
                    rotateY(${tiltY.toFixed(2)}deg) 
                    translateY(${currentLift.toFixed(2)}px) 
                    translateX(${currentShiftX.toFixed(2)}px) 
                    scale(${finalScale.toFixed(3)})
                `;

                // Update dynamic glare position
                const glare = tablet.querySelector('.screen-glare');
                if (glare) {
                    const gx = (currentMouseX + 1) * 50;
                    const gy = (currentMouseY + 1) * 50;
                    glare.style.setProperty('--mouse-x', `${gx}%`);
                    glare.style.setProperty('--mouse-y', `${gy}%`);
                }

                const diff = Math.abs(targetRot - currentRot) + Math.abs(targetLift - currentLift) + Math.abs(targetShiftX - currentShiftX) + Math.abs(mouseX - currentMouseX);
                if (diff > 0.001 || isReady) requestAnimationFrame(animationLoop);
                else isLooping = false;
            };

            const onMouseMove = (e) => {
                // Normalize mouse pos to -1 to 1
                mouseX = (e.clientX / window.innerWidth) * 2 - 1;
                mouseY = (e.clientY / window.innerHeight) * 2 - 1;
                if (!isLooping) { isLooping = true; requestAnimationFrame(animationLoop); }
            };

            const onScroll = () => {
                const top = window.pageYOffset || document.documentElement.scrollTop;
                const hero = document.querySelector('.hero');
                const scrollThreshold = hero ? hero.offsetHeight * 0.3 : 300;
                const progress = Math.min(top / scrollThreshold, 1);

                if (progress >= 1) {
                    document.body.classList.add('tablet-ready');
                } else {
                    document.body.classList.remove('tablet-ready');
                }

                targetRot = 35 * (1 - progress);
                targetLift = -60 + (progress * 130);
                targetShiftX = -210 * (1 - progress);

                if (!isLooping) { isLooping = true; requestAnimationFrame(animationLoop); }
            };

            window.addEventListener('scroll', onScroll, { passive: true });
            window.addEventListener('mousemove', onMouseMove, { passive: true });
            onScroll();
        }
    } catch (e) {
        console.warn('Tablet tilt effect failed:', e);
    }

    // Smooth scroll for nav links
    try {
        const nav = document.querySelector('.site-nav');
        let isScrolled = false;

        // Use Lenis scroll if available for better sync, fallback to native
        const scrollSource = window.lenis || window;
        scrollSource.on?.('scroll', ({ scroll }) => {
            const hasScrolled = (scroll || window.scrollY) > 50;
            if (hasScrolled !== isScrolled) {
                isScrolled = hasScrolled;
                nav.classList.toggle('scrolled', isScrolled);
            }
        }) || window.addEventListener('scroll', () => {
            const hasScrolled = window.scrollY > 50;
            if (hasScrolled !== isScrolled) {
                isScrolled = hasScrolled;
                nav.classList.toggle('scrolled', isScrolled);
            }
        }, { passive: true });



        document.querySelectorAll('a.nav-scroll').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        if (window.lenis) {
                            window.lenis.scrollTo(target, {
                                offset: -80,
                                duration: 1.5,
                                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                            });
                        } else {
                            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }
                }
            });
        });
    } catch (e) {
        console.warn('Nav scroll failed:', e);
    }

    // Pillar Gallery Interaction (replaced by ScrollTrigger in initGSAPAnimations)
    /* 
    try {
        const pillars = document.querySelectorAll('.pillar-item');
        if (pillars.length > 0) {
            pillars.forEach(pillar => {
                pillar.addEventListener('mouseenter', () => {
                    pillars.forEach(p => p.classList.remove('active'));
                    pillar.classList.add('active');
                });

                pillar.addEventListener('click', () => {
                    pillars.forEach(p => p.classList.remove('active'));
                    pillar.classList.add('active');
                });
            });
        }
    } catch (e) {
        console.warn('Pillar interaction failed:', e);
    }
    */


    // Here-bubble follows cursor over hero & interacts with elements
    try {
        const heroSection = document.querySelector('.hero');

        if (heroBubble && heroSection) {
            // Track mouse across entire page so bubble works everywhere in hero
            document.addEventListener('mousemove', (e) => {
                heroBubble.style.left = e.clientX + 'px';
                heroBubble.style.top = e.clientY + 'px';
            });

            heroSection.addEventListener('mouseenter', () => {
                heroBubble.style.opacity = '1';
                heroBubble.style.transform = 'translate(calc(-100% - 15px), -50%) scale(1)';
            });
            heroSection.addEventListener('mouseleave', () => {
                heroBubble.style.opacity = '0';
                heroBubble.style.transform = 'translate(calc(-100% - 15px), -50%) scale(0.8)';
                resetBubble();
            });

            // Click bubble to scroll to map
            heroBubble.addEventListener('click', () => {
                const mapEl = document.getElementById('hero-map');
                if (mapEl) mapEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });

            // Map regions
            document.querySelectorAll('.region').forEach(path => {
                path.addEventListener('mouseenter', () => {
                    const d = regionsData[path.id];
                    if (d && d[currentMode]) {
                        const data = d[currentMode];
                        const symbol = data.symbol || (currentMode === 'ancient' ? '𓋹' : '🏛');
                        const ruler = data.ruler || (currentMode === 'ancient' ? 'فرعون النيل' : 'حاكم الإقليم');

                        setBubble(`
                            <div style="font-size:1.1rem; font-weight:800; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:4px; margin-bottom:4px;">
                                ${data.name}
                            </div>
                            <div style="font-size:0.75rem; opacity:0.8; display:grid; grid-template-columns:auto 1fr; gap:8px; line-height:1.4;">
                                <span>عاصمة:</span> <strong>${data.capital}</strong>
                                <span>رمز:</span> <strong>${symbol}</strong>
                                <span>حاكم:</span> <strong>${ruler}</strong>
                            </div>
                        `, 'var(--c-surface)', 'var(--c-text)');
                        heroBubble.style.padding = '15px 25px';
                        heroBubble.style.borderRadius = '20px';
                        heroBubble.style.borderColor = 'var(--c-accent)';

                        // Enhanced GSAP animation for region
                        gsap.to(path, {
                            scale: 1.02,
                            strokeWidth: 2,
                            stroke: '#fff',
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                });
                path.addEventListener('mouseleave', () => {
                    resetBubble();
                    heroBubble.style.padding = '10px 24px';
                    heroBubble.style.borderRadius = '100px';
                    heroBubble.style.borderColor = 'var(--c-purple)';

                    gsap.to(path, {
                        scale: 1,
                        strokeWidth: 0.6,
                        stroke: 'var(--c-border)',
                        duration: 0.3,
                        ease: "power2.inOut"
                    });
                });
            });

            // Buttons — hide bubble on hover to avoid redundancy 
            heroSection.querySelectorAll('button, .btn-primary, .btn-secondary').forEach(btn => {
                btn.addEventListener('mouseenter', () => {
                    heroBubble.style.opacity = '0';
                    heroBubble.style.pointerEvents = 'none';
                });
                btn.addEventListener('mouseleave', () => {
                    heroBubble.style.opacity = '1';
                    heroBubble.style.pointerEvents = 'auto';
                    resetBubble();
                });
            });

            // Nav links
            document.querySelectorAll('.nav-links a, .btn-contact').forEach(link => {
                link.addEventListener('mouseenter', () => {
                    setBubble(link.textContent.trim(), 'var(--c-border)', 'var(--c-text)');
                });
                link.addEventListener('mouseleave', resetBubble);
            });

            // Era buttons
            document.querySelectorAll('.era-btn').forEach(btn => {
                btn.addEventListener('mouseenter', () => {
                    setBubble(btn.textContent.trim(), 'var(--c-gold)', '#000');
                });
                btn.addEventListener('mouseleave', resetBubble);
            });

            // New: Site Markers Interactivity
            document.querySelectorAll('.site-marker').forEach(marker => {
                marker.addEventListener('mouseenter', () => {
                    const name = marker.getAttribute('data-name') || 'موقع أثري';
                    setBubble(`
                        <div style="font-size:0.9rem; font-weight:800; color:var(--c-gold);">
                            📍 ${name}
                        </div>
                        <div style="font-size:0.7rem; opacity:0.7; margin-top:4px;">
                            موقع تاريخي رئيسي
                        </div>
                    `, 'var(--c-surface)', 'var(--c-text)');

                    gsap.to(marker, {
                        r: 8,
                        fill: '#fff',
                        duration: 0.3
                    });
                });
                marker.addEventListener('mouseleave', () => {
                    resetBubble();
                    gsap.to(marker, {
                        r: 5,
                        fill: 'var(--c-gold)',
                        duration: 0.3
                    });
                });
            });
        }
    } catch (e) {
        console.warn('Bubble cursor effect failed:', e);
    }

    // Preloader Removal
    try {
        const preloader = document.getElementById('preloader');

        if (preloader) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    preloader.classList.add('fade-out');
                    // Enable scrolling once preloader is gone
                    document.body.style.overflow = '';
                }, 4500); // Synchronize with CSS Warp (approx 4.5s total)
            });
            // Critical: Don't let preloader stay forever if load event hangs
            setTimeout(() => {
                if (!preloader.classList.contains('fade-out')) {
                    preloader.classList.add('fade-out');
                    document.body.style.overflow = '';
                }
            }, 7000);
        }
    } catch (e) {
        console.warn('Preloader removal failed:', e);
    }

    // GSAP Scroll Reveals
    try {
        initGSAPAnimations();
    } catch (e) {
        console.warn('GSAP animations failed:', e);
    }
}

function initGSAPAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // reveal fade/bottom/right/left/scale
    document.querySelectorAll('[data-reveal]').forEach(el => {
        const type = el.dataset.reveal;
        const config = {
            opacity: 1,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none"
            }
        };

        const delay = parseFloat(el.dataset.delay) || 0;
        if (delay) config.delay = delay;

        if (type === 'fade' || type === 'bottom') config.y = 0;
        if (type === 'right' || type === 'left') config.x = 0;
        if (type === 'scale') config.scale = 1;

        gsap.to(el, config);
    });

    // NEW: Footer Background Glyphs Parallax
    gsap.to('.footer-bg-glyphs', {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
            trigger: '.site-footer',
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    // NEW: Section Background Glows Parallax
    gsap.to('.journey-background-glow', {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
            trigger: '.era-journey-section',
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    // NEW: 3D Tilt for interactive cards on hover
    document.querySelectorAll('.intel-node, .codex-main, .codex-sidebar, .ledger-card, .hub-side, .journey-stage').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg tilt
            const rotateY = ((x - centerX) / centerX) * 5;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)"
            });
        });
    });


    // NEW: Legacy background text parallax
    gsap.to('.legacy-bg-text', {
        x: -100,
        scrollTrigger: {
            trigger: '.legacy-impact-section',
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
        }
    });

    // NEW: Era Journey Parallax for background numbers
    document.querySelectorAll('.stage-bg-num').forEach(num => {
        gsap.to(num, {
            y: -150,
            scrollTrigger: {
                trigger: num.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
            }
        });
    });

    // Complex Orbital persistent floating animation
    document.querySelectorAll('.complex-orbital').forEach(orb => {
        gsap.to(orb, {
            y: -20,
            duration: 3 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });

    // NEW: Stat counter animation
    document.querySelectorAll('.stat-num').forEach(num => {
        const target = parseInt(num.dataset.count);
        gsap.to(num, {
            innerText: target,
            duration: 2.5,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
                trigger: num,
                start: "top 90%"
            },
            onUpdate: function () {
                // Convert to Arabic numerals if needed, but innerText snap handles the count
                const val = Math.floor(this.targets()[0].innerText);
                const ar = val.toLocaleString('ar-EG');
                num.innerText = ar;
            }
        });
    });

    // Synthesis Bridge: Count-up for 42 and 27
    document.querySelectorAll('.quant-val').forEach(el => {
        const finalVal = parseInt(el.innerText.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)));
        el.innerText = '٠';

        gsap.to(el, {
            innerText: finalVal,
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: {
                trigger: el,
                start: "top 85%"
            },
            onUpdate: function () {
                const val = Math.floor(this.targets()[0].innerText);
                el.innerText = val.toLocaleString('ar-EG');
            }
        });
    });

    // Nexus particle floating
    gsap.to('.nexus-particle', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // NEW: Pillar Gallery Scroll Animation (Horizontal expansion on scroll)
    const pillarsSection = document.querySelector('.pillar-gallery-section');
    const pillars = gsap.utils.toArray('.pillar-item');
    if (pillarsSection && pillars.length > 0) {
        const totalPillars = pillars.length;

        // Only run horizontal expansion on desktop
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1201px)", () => {
            // Create a dedicated timeline for the pillar expansion
            const pillarTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".pillar-gallery-section",
                    start: "top top",
                    end: `+=${totalPillars * 100}%`, // Standard scroll distance
                    pin: true,
                    scrub: 0.4, // Lower for more immediate feedback
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    fastScrollEnd: true,

                }
            });

            // Set initial state for card 0
            pillarTl.set(pillars[0], { flexGrow: 4 }, 0);
            pillars[0].classList.add('active');

            // Build the timeline transitions
            pillars.forEach((pillar, i) => {
                if (i < totalPillars - 1) {
                    const nextPillar = pillars[i + 1];

                    // Transition step i
                    pillarTl.to(pillar, {
                        flexGrow: 1,
                        duration: 1,
                        ease: "power2.inOut",
                        onStart: () => {
                            // When scrolling forward, cards gain/lose active state
                            pillar.classList.remove('active');
                            nextPillar.classList.add('active');
                        },
                        onReverseComplete: () => {
                            // When scrolling back
                            nextPillar.classList.remove('active');
                            pillar.classList.add('active');
                        }
                    }, i);

                    pillarTl.to(nextPillar, {
                        flexGrow: 4,
                        duration: 1,
                        ease: "power2.inOut"
                    }, i);
                }
            });

            // Buffer at the end
            pillarTl.to({}, { duration: 0.5 });

            return () => {
                pillarsSection.classList.remove('is-active');
                pillars.forEach(p => {
                    p.style.flexGrow = '';
                    p.classList.remove('active');
                });
                // Restore initial first active if needed
                pillars[0].classList.add('active');
            };
        });
    }


}

// Comparison Mode Logic
let comparisonMode = false;
let comparisonRegions = [];

function toggleComparisonMode() {
    const wasInComparison = comparisonMode;
    const firstRegionBeforeReset = comparisonRegions[0];

    comparisonMode = !comparisonMode;
    comparisonRegions = [];

    // Toggle body class for dimming effect
    document.body.classList.toggle('comparison-active', comparisonMode);

    // Clear selection state on map
    if (regionPaths) {
        regionPaths.forEach(p => p.classList.remove('selected', 'comparing'));
    }

    const btn = document.getElementById('btn-comparison');
    if (btn) {
        btn.classList.toggle('active', comparisonMode);
        const btnSpan = btn.querySelector('span');
        if (btnSpan) btnSpan.textContent = comparisonMode ? 'إلغاء الوضع' : 'وضع المقارنة';
    }

    if (comparisonMode) {
        setBubble('اختر منطقتين للمقارنة', 'var(--c-gold)', '#000');
        if (panelPlaceholder) panelPlaceholder.classList.remove('hidden');
        if (panelContent) panelContent.classList.add('hidden');

        const emptyTitle = document.querySelector('.empty-title');
        const emptySub = document.querySelector('.empty-sub');
        if (emptyTitle) emptyTitle.textContent = 'وضع المقارنة نَشِط';
        if (emptySub) emptySub.textContent = 'برجاء اختيار المنطقة الأولى من الخريطة للبدء في التحليل التقني';
    } else {
        resetBubble();
        resetHUDHighlight();
        selectedRegionId = null;
        document.body.classList.remove('comparison-active');

        // IMPORTANT: Restore original structure so single region view works again
        if (panelContent && originalPanelHTML) {
            panelContent.innerHTML = originalPanelHTML;
        }

        if (panelPlaceholder) panelPlaceholder.classList.remove('hidden');
        if (panelContent) panelContent.classList.add('hidden');

        // Restore default placeholder text
        const emptyTitle = document.querySelector('.empty-title');
        const emptySub = document.querySelector('.empty-sub');
        if (emptyTitle) emptyTitle.textContent = 'اختر منطقة لاستكشاف تاريخها';
        if (emptySub) emptySub.textContent = 'انقر على أي محافظة في الخريطة';

        // Reset to original mode: if we had a region selected, show it again in single mode
        if (firstRegionBeforeReset) {
            selectedRegionId = firstRegionBeforeReset;
            showRegionDetails(firstRegionBeforeReset);
        }
    }
}
window.toggleComparisonMode = toggleComparisonMode;

function unselectRegion(id) {
    if (comparisonMode) {
        if (comparisonRegions.includes(id)) {
            comparisonRegions = comparisonRegions.filter(rid => rid !== id);
            const path = document.getElementById(id);
            if (path) path.classList.remove('comparing');

            if (comparisonRegions.length === 0) {
                setBubble('اختر منطقتين للمقارنة', 'var(--c-gold)', '#000');
                const emptyTitle = panelPlaceholder.querySelector('.empty-title');
                const emptySub = panelPlaceholder.querySelector('.empty-sub');
                if (emptyTitle) emptyTitle.textContent = 'وضع المقارنة نَشِط';
                if (emptySub) emptySub.textContent = 'برجاء اختيار المنطقة الأولى من الخريطة للبدء في التحليل التقني';
            } else {
                setBubble('اختر المنطقة الثانية', 'var(--c-accent)', '#fff');
                const emptySub = panelPlaceholder.querySelector('.empty-sub');
                if (emptySub) emptySub.textContent = 'تم اختيار المنطقة الأولى، اختر الثانية الآن';
                if (panelContent) panelContent.classList.add('hidden');
                if (panelPlaceholder) panelPlaceholder.classList.remove('hidden');
            }
        }
    } else {
        if (selectedRegionId === id) {
            selectedRegionId = null;
            const path = document.getElementById(id);
            if (path) path.classList.remove('selected');
            if (panelPlaceholder) panelPlaceholder.classList.remove('hidden');
            if (panelContent) panelContent.classList.add('hidden');
            resetBubble();
            resetHUDHighlight();
        }
    }
}

function handleComparisonSelection(id) {
    if (comparisonRegions.includes(id)) return;

    comparisonRegions.push(id);
    const path = document.getElementById(id);
    if (path) path.classList.add('comparing');

    if (comparisonRegions.length === 1) {
        setBubble('اختر المنطقة الثانية', 'var(--c-accent)', '#fff');
        const emptyTitle = panelPlaceholder.querySelector('.empty-title');
        const emptySub = panelPlaceholder.querySelector('.empty-sub');
        if (emptyTitle) {
            const data = regionsData[id];
            const name = data ? data[currentMode].name : id;
            emptyTitle.textContent = 'تم اختيار: ' + name;
        }
        if (emptySub) emptySub.textContent = 'اختر المنطقة الثانية للمقارنة من الخريطة';
    } else if (comparisonRegions.length === 2) {
        showComparisonResults();
        setBubble('تمت المقارنة بنجاح ✓', 'var(--c-teal)', '#fff');
        setTimeout(resetBubble, 3000);
    }
}

function showComparisonResults() {
    const id1 = comparisonRegions[0];
    const id2 = comparisonRegions[1];
    const data1 = regionsData[id1][currentMode];
    const data2 = regionsData[id2][currentMode];

    // Real area data for comparison
    const areaMap = {
        luxor: 2960, aswan: 679, cairo: 3085, alexandria: 2679, giza: 85153,
        ismailia: 5067, asyut: 1553, qena: 1851, fayyum: 6068, sharqia: 4911,
        beheira: 10130, 'north-sinai': 27574, 'red-sea': 203685, matrouh: 166563,
        'new-valley': 440098, benisuef: 1322, qalyubia: 1001, menofia: 2543,
        gharbiah: 1942, minya: 2262, sohag: 1547, 'kafr-el-sheikh': 3437,
        dakahlia: 3471, 'port-said': 1351, suez: 17840, damietta: 589,
        'south-sinai': 33140, disputed: 2060, halaib: 20580
    };
    const monumentsMap = {
        luxor: 14, aswan: 8, cairo: 23, alexandria: 9, giza: 11,
        ismailia: 3, asyut: 6, qena: 7, fayyum: 5, sharqia: 6,
        beheira: 4, 'north-sinai': 5, 'red-sea': 4, matrouh: 3,
        'new-valley': 4, benisuef: 3, qalyubia: 4, menofia: 2,
        gharbiah: 5, minya: 7, sohag: 8, 'kafr-el-sheikh': 3,
        dakahlia: 4, 'port-said': 2, suez: 3, damietta: 3,
        'south-sinai': 6, disputed: 0, halaib: 2
    };

    const area1 = areaMap[id1] || 0;
    const area2 = areaMap[id2] || 0;
    const maxArea = Math.max(area1, area2, 1);
    const areaPct1 = Math.round((area1 / maxArea) * 100);
    const areaPct2 = Math.round((area2 / maxArea) * 100);

    const mon1 = monumentsMap[id1] || 0;
    const mon2 = monumentsMap[id2] || 0;
    const maxMon = Math.max(mon1, mon2, 1);
    const monPct1 = Math.round((mon1 / maxMon) * 100);
    const monPct2 = Math.round((mon2 / maxMon) * 100);

    const formatNum = (n) => {
        const ar = '٠١٢٣٤٥٦٧٨٩';
        return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '٬').replace(/\d/g, d => ar[d]);
    };

    panelPlaceholder.classList.add('hidden');
    panelContent.classList.remove('hidden');

    panelContent.innerHTML = `
        <div class="comparison-container">
            <div class="comp-header">
                <div>
                    <h3>تحليل مقارن</h3>
                    <p style="font-size: 0.7rem; opacity: 0.6; margin-top: 4px;">مقارنة تفصيلية بين منطقتين في ${currentMode === 'ancient' ? 'العصر القديم' : currentMode === 'transitional' ? 'العصر الوسيط' : 'العصر الحديث'}</p>
                </div>
                <button class="comp-close" onclick="window.toggleComparisonMode()" title="إغلاق المقارنة">×</button>
            </div>
            
            <div class="comp-grid">
                <div class="comp-col">
                    <div class="comp-region-name">${data1.name}</div>
                    <div class="comp-stat-val">${data1.capital}</div>
                    <div class="comp-label">${currentMode === 'ancient' ? 'العاصمة القديمة' : currentMode === 'transitional' ? 'المركز الإداري' : 'العاصمة الإقليمية'}</div>
                </div>
                <div class="comp-vs">
                    <div class="vs-circle">VS</div>
                </div>
                <div class="comp-col">
                    <div class="comp-region-name">${data2.name}</div>
                    <div class="comp-stat-val">${data2.capital}</div>
                    <div class="comp-label">${currentMode === 'ancient' ? 'العاصمة القديمة' : currentMode === 'transitional' ? 'المركز الإداري' : 'العاصمة الإقليمية'}</div>
                </div>
            </div>

            <div class="comp-row-stat">
                <div class="comp-bar-wrapper">
                    <div class="comp-bar-label">المساحة الجغرافية (كم²)</div>
                    <div class="comp-bars">
                        <div class="comp-bar b1" style="width: 0%" data-target="${areaPct1}"><span>${data1.name} — ${formatNum(area1)} كم²</span></div>
                        <div class="comp-bar b2" style="width: 0%" data-target="${areaPct2}"><span>${data2.name} — ${formatNum(area2)} كم²</span></div>
                    </div>
                </div>
            </div>

            <div class="comp-row-stat">
                <div class="comp-bar-wrapper">
                    <div class="comp-bar-label">المواقع الأثرية</div>
                    <div class="comp-bars">
                        <div class="comp-bar b1" style="width: 0%" data-target="${monPct1}"><span>${data1.name} — ${formatNum(mon1)} موقع</span></div>
                        <div class="comp-bar b2" style="width: 0%" data-target="${monPct2}"><span>${data2.name} — ${formatNum(mon2)} موقع</span></div>
                    </div>
                </div>
            </div>

            <div class="comp-detail-box">
                <div class="comp-side">
                    <strong>سجل ${data1.name}</strong>
                    <p>${data1.detail.substring(0, 150)}...</p>
                </div>
                <div class="comp-side">
                    <strong>سجل ${data2.name}</strong>
                    <p>${data2.detail.substring(0, 150)}...</p>
                </div>
            </div>
            
            <button class="btn-primary" style="width:100%; margin-top:30px; background: var(--c-accent); color: #000; border-radius: 14px;" onclick="window.toggleComparisonMode()">
                إغلاق التحليل والعودة
            </button>
        </div>
    `;

    // Animate comparison bars
    setTimeout(() => {
        document.querySelectorAll('.comp-bar[data-target]').forEach(bar => {
            bar.style.width = bar.dataset.target + '%';
        });
    }, 100);

    if (typeof gsap !== 'undefined') {
        gsap.from('.comparison-container > *', {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out"
        });
    }
}

if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', initialize);
else initialize();

// ===== LAYER PANEL CONTROLS =====

window.toggleLayerPanel = function () {
    const panel = document.getElementById("layer-panel");
    if (panel) panel.classList.toggle("hidden");
};

window.toggleThematicLayer = function (layerId) {
    const map = document.getElementById("egypt-map");
    if (!map) return;

    // Toggle a class on the map/body to trigger visual changes via CSS
    const layerClass = "layer-" + layerId + "-active";
    document.body.classList.toggle(layerClass);

    // Toggle SVG layers
    const layerEl = document.getElementById(layerId + '-layer');
    if (layerEl) {
        layerEl.classList.toggle('hidden');
        if (!layerEl.classList.contains('hidden')) {
            gsap.from(layerEl.children, {
                opacity: 0,
                scale: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: "back.out(1.7)"
            });
        }
    }

    // Update description for first-time activation
    const desc = document.getElementById("layer-desc");
    const isActive = document.body.classList.contains(layerClass);
    if (desc) {
        if (layerId === 'sites') desc.textContent = isActive ? "تم تفعيل طبقة المواقع الأثرية." : "تم إخفاء المواقع الأثرية.";
        if (layerId === 'routes') desc.textContent = isActive ? "تم تفعيل ممرات التجارة البرية." : "تم إخفاء ممرات التجارة.";
    }
};

window.toggleLabels = function () {
    const map = document.getElementById("egypt-map");
    if (map) map.classList.toggle("hide-labels");
};

window.setBaseTheme = function (themeId) {
    // Remove old theme classes
    document.body.classList.remove("theme-parchment", "theme-satellite", "theme-minimal");
    document.body.classList.add("theme-" + themeId);

    // Update UI selection highlights
    const opts = document.querySelectorAll(".theme-opt");
    opts.forEach(opt => opt.classList.toggle("active", opt.dataset.theme === themeId));
};

window.updateOpacity = function (val) {
    const map = document.getElementById("egypt-map");
    if (map) {
        map.style.opacity = val / 100;
        document.documentElement.style.setProperty("--map-opacity", val / 100);
    }
};



// Stop clicks on the layer panel from reaching the map
const lPanel = document.getElementById("layer-panel");
if (lPanel) {
    lPanel.addEventListener("click", (e) => e.stopPropagation());
    lPanel.addEventListener("mousedown", (e) => e.stopPropagation());
    lPanel.addEventListener("dblclick", (e) => e.stopPropagation());
}


