/* ==========================================================================
   content.js — ALL TEXT ON THE SITE LIVES HERE.
   Edit this file to change copy; you should never need to touch app.js.

   HOW FIELDS WORK
   - en('text')        English only
   - ar('نص')          Arabic only
   - bi('English','عربي')   both languages
   If the visitor's chosen language is missing for a field, the site shows the
   other language for that field (marked with the right lang/dir), so owner
   copy is never silently translated or dropped.

   MARKERS
   - "DRAFT" comments mark text that was NOT in the Slides deck. Confirm or replace.
   - "VERBATIM" means copied from the Slides deck; only invisible bidi control
     characters and spacing before punctuation were tidied.
   ========================================================================== */
(function () {
  var en = function (s) { return { en: s }; };
  var ar = function (s) { return { ar: s }; };
  var bi = function (e, a) { return { en: e, ar: a }; };

  /* ---------- Images (files live in the images/ folder) ----------
     img(file, width, height, alt text, caption). Alt text describes the picture for screen readers.
     Captions are the tone-of-voice labels from your file names. Both are editable here. */
  var img = function (f, w, h, alt, cap) { return { src: 'images/' + f, w: w, h: h, alt: alt, cap: cap }; };
  var IMG = {
    jamOoh: img('jamieson-ooh.jpg', 1000, 1000,
      en('Night-time Jamieson billboard lit by a spotlight shaped like a pill, with the Arabic line “Here we needed something simple… and what do you need?”'),
      en('Human, Helpful & Non-pushy · OOH billboard')),
    ladGrid: img('ladyy-grid.jpg', 1000, 830,
      en('Six-post Ladyy.com grid: a hand holding a phone beside a pink gift box, with the Arabic words “إيه..؟” and “أيوة!” across the tiles'),
      en('Curious & Teasing · 6-post grid')),
    ladCoffee: img('ladyy-coffee.jpg', 564, 750,
      en('Ladyy Café post: a latte and a slice of cake on a table with the line “Cart full? Coffee first. Sip, think, decide.”'),
      en('Calm & Thoughtful · Coffee break')),
    ladSkin: img('ladyy-skin.jpg', 624, 834,
      en('Ladyy.com post: a woman at a skin-analysis machine in the store with the line “Your skin is one of one”'),
      en('Personal & Reassuring · Skincare')),
    ladStore: img('ladyy-store.jpg', 624, 834,
      en('Ladyy.com Black Friday post: a woman in the store beside a giant pink percent sign with the line “Smart shopping starts with you”'),
      en('Smart & Consultative · Black Friday store')),
    eveCollagen: img('eveline-collagen.jpg', 570, 762,
      en('Eveline post: a woman holding a collagen serum bottle, with “3X Collagen Serum Shot”, “24K Gold” and an Arabic headline about collagen'),
      en('Aspirational & Accessible · Collagen + 24K gold')),
    eveNia: img('eveline-niacinamide.jpg', 570, 758,
      en('Eveline post: a smiling woman holding a 5% niacinamide serum, with the Arabic headline “The weather is changing… but it won’t change your skin”'),
      en('Human & Informative · Niacinamide')),
    eveBtx: img('eveline-btx.jpg', 570, 762,
      en('Eveline post: “Botox? No. Baby BTX. Yes.” beside a body balm serum and a multipeptides serum shot'),
      en('Playful & Confident · Baby BTX')),
    seifSchool: img('seif-backtoschool.jpg', 672, 897,
      en('Seif Stores post: four children with backpacks beside a chalkboard reading “Back with enthusiasm”'),
      en('Enthusiastic & Encouraging · Back to school')),
    seifBackpack: img('seif-backpack.jpg', 672, 897,
      en('Seif Stores post: a boy hanging up a Cars backpack, with the headline “Your child’s personality is in their bag”'),
      en('Expressive & Child-centric · Backpack')),
    seifLunch: img('seif-lunchbox.jpg', 672, 897,
      en('Seif Stores post: a teal lunch box with sandwiches and grapes, with the headline “A lunch box that protects your child’s health”'),
      en('Caring & Health-focused · Lunch box')),
    seifReady: img('seif-readybag.jpg', 672, 897,
      en('Seif Stores post: a hand pulling a pink lunch box out of an open school bag, with the headline “A ready bag that doesn’t leak”'),
      en('Practical & Reassuring · Ready bag')),
    seifBottle: img('seif-bottle.jpg', 672, 897,
      en('Seif Stores post: a smiling boy holding a blue water bottle, with the headline “With them everywhere”'),
      en('Warm & Caring · Water bottle')),
    seifBranches: img('seif-branches.jpg', 672, 897,
      en('Seif Stores post: a boy holding a red balloon pin whose string winds through a map of branch locations, with the headline “Our branches are everywhere”'),
      en('Accessible & Supportive · Branches'))
  };

  window.SITE = {

    /* ---------- Contact + links ---------- */
    email: 'mohamedmohsen.markter@gmail.com',
    phone: '01025553877',
    phoneIntl: '+201025553877',                     // used for the tel: link
    linkedin: 'https://www.linkedin.com/in/mohamed-mohsen-copywriter',
    linkedinLabel: 'linkedin.com/in/mohamed-mohsen-copywriter',
    // Swap for a self-hosted file (e.g. 'mohamed-mohsen-portfolio.pdf') once you export one.
    // This default exports the Google Slides deck as a PDF (works while the deck is link-viewable).
    pdf: 'https://docs.google.com/presentation/d/1u53MQ9A_VaCPydddg4lr7Cim9lbriOReAI5TJmHNzgo/export/pdf',

    /* ---------- SEO (also edit the static tags in index.html) ---------- */
    seo: {
      title: bi('Mohamed Mohsen — A “What If” Copywriter',
                'محمد محسن — A “What If” Copywriter'),                                  // AR title DRAFT
      description: bi('Portfolio of Mohamed Mohsen, a junior copywriter and Content Writer at Socialpeak. Concepts, campaigns and copy in Arabic and English for 15+ brands.',
                      'بورتفوليو محمد محسن، كوبي رايتر وكونتنت رايتر في Socialpeak. أفكار وحملات وكوبي بالعربي والإنجليزي لأكتر من 15 براند.') // AR DRAFT
    },

    /* ---------- Interface labels (chrome). All Arabic here is DRAFT. ---------- */
    ui: {
      skip: bi('Skip to content', 'انتقل إلى المحتوى'),
      menu: bi('Menu', 'القائمة'),
      navWork: bi('Work', 'الأعمال'),
      navAbout: bi('About', 'نبذة'),
      navMethod: bi('Method', 'الطريقة'),
      navContact: bi('Contact', 'تواصل'),
      btnWork: bi('View work', 'شاهد الأعمال'),
      btnContact: bi('Contact', 'تواصل معي'),
      about: bi('About', 'نبذة'),
      method: bi('The Method', 'الطريقة'),
      cases: bi('Selected Cases', 'أعمال مختارة'),
      work: bi('Selected Work', 'نماذج من الشغل'),
      readCase: bi('Read the case', 'اقرأ الحالة'),
      viewWork: bi('See the copy', 'شوف الكوبي'),
      back: bi('All work', 'كل الأعمال'),
      next: bi('Next', 'التالي'),
      role: bi('Role', 'الدور'),
      brand: bi('Brand', 'البراند'),
      emailLbl: bi('Email', 'البريد الإلكتروني'),
      phoneLbl: bi('Phone', 'الهاتف'),
      linkedinLbl: bi('LinkedIn', 'لينكدإن'),
      pdf: bi('Download PDF portfolio', 'حمّل البورتفوليو PDF'),
      statMonths: bi('months at Socialpeak', 'شهور في Socialpeak'),
      statBrands: bi('brands', 'براند'),
      langLabel: bi('Language', 'اللغة'),
      imgZoom: bi('Enlarge image', 'تكبير الصورة'),                // Arabic DRAFT
      imgClose: bi('Close', 'إغلاق'),                              // Arabic DRAFT
      imgPrev: bi('Previous image', 'الصورة السابقة'),             // Arabic DRAFT
      imgNext: bi('Next image', 'الصورة التالية'),                 // Arabic DRAFT
      secBrief: bi('Brief', 'البريف'),
      secInsight: bi('Insight', 'الإنسايت'),
      secStrategy: bi('Strategy', 'الاستراتيجية'),
      secIdea: bi('The idea', 'الفكرة'),
      secExecution: bi('Execution', 'التنفيذ'),
      secRole: bi('My role', 'دوري'),
      secStatus: bi('Status', 'الحالة'),
      secWork: bi('The copy', 'الكوبي'),
      path: [bi('Acting', 'التمثيل'), bi('Directing', 'الإخراج'), bi('Stanislavski', 'ستانسلافيسكي'),
             bi('“What if”', '«ماذا لو»'), bi('Copywriting', 'الكوبي رايتنج')],
      rights: bi('Mohamed Mohsen. All rights reserved.', 'محمد محسن. جميع الحقوق محفوظة.')
    },

    /* ---------- 1. Hero ---------- */
    hero: {
      eyebrow: bi('Portfolio · Copy & Concept', 'بورتفوليو · كوبي وكونسبت'),       // EN from slide 1; AR DRAFT
      name: bi('Mohamed Mohsen', 'محمد محسن'),                                       // AR name DRAFT
      role: bi('Content Writer at Socialpeak', 'Content Writer في Socialpeak'),       // from your brief; AR DRAFT
      tagline: en('A “What If” Copywriter'),                                          // VERBATIM, stays English in both languages
      // Positioning line: taken from your brief ("ask a question worth answering..."), not from the slides.
      positioning: bi('Ask a question worth answering. Back it with research and insight. Then craft one idea.',
                      'اسأل سؤال يستاهل إجابة. ادعمه بالبحث والإنسايت. وبعدين اكتب فكرة واحدة.'), // AR DRAFT
      skills: ['Concept Development', 'Headlines & Hooks', 'Tone of Voice', 'Campaign Thinking',
               'Scriptwriting', 'Technical Copy', 'Arabic / English']                // VERBATIM (slide 1)
    },

    /* ---------- 2. About (VERBATIM, slide 2). EN and AR paragraphs are separate lists. ---------- */
    about: {
      en: [
        'I’m Mohsen, and I call myself a “What If” Copywriter. Not only to get people curious about my title, but because I think the best way to introduce myself is to describe, in short, how I work and how I think.',
        'I’m passionate about acting, and I’ve had some experience in directing. I read a lot of books that helped me and changed the way I think, more than I ever imagined.',
        'One of the acting methods that struck me most is by a great director named Konstantin Stanislavski. In short, instead of preparing for a character by telling myself “I should feel this,” I ask myself: what if this happened? And I see what I’d feel.',
        'That’s exactly how I’ve worked for more than six months at Socialpeak, on more than 15 brands. And I’ll keep applying it to more, asking myself one question: what if?'
      ],
      ar: [
        'أنا محسن، بسمي نفسي A What If Copywriter. مش عشان ألفت الانتباه للمسمى بتاعي، بس أنا شايف إن أفضل طريقة أقدم بيها نفسي هي باختصار طريقة شغلي وطريقة تفكيري.',
        ',لأن عندي شغف بالتمثيل، وكان ليا تجارب سابقة في الإخراج. قريت كتب كتير فادتني وغيرت من طريقة تفكيري، لدرجة مكنتش متخيلها.',
        'من أكتر الطرق في التمثيل اللي شدتني، طريقة لمخرج عظيم اسمه قسطنطين ستانسلافيسكي.',
        'الطريقة باختصار: بدل ما أحضر للشخصية وأقول أنا المفروض أحس بكذا، بسأل نفسي: ماذا لو حصل كذا؟ وأشوف هحس بإيه.',
        'ودي بالظبط طريقة شغلي لأكتر من 6 شهور مع Socialpeak و طبقتها على أكتر من 15 براند،',
        'ولسه هطبقها على حاجات أكتر ومع كل Brief هسأل نفسي سؤال واحد: ماذا لو؟'
      ],
      stats: [{ n: '6+', k: 'statMonths' }, { n: '15+', k: 'statBrands' }]            // figures come from the About text
    },

    /* ---------- 3. The Method (VERBATIM, slide 3; English one-liners were not supplied) ---------- */
    method: {
      title: en('Every project starts with a question.'),
      steps: [
        { n: '01', k: en('What if'),  x: ar('اسأل سؤال مش بريف') },
        { n: '02', k: en('Research'),  x: ar('السوق والمنافسين') },
        { n: '03', k: en('Insight'),   x: ar('الحقيقة اللي محدش قالها') },
        { n: '04', k: en('Idea'),      x: ar('فكرة واحدة بتفتح حملات') },
        { n: '05', k: en('Craft'),     x: ar('الكتابة والتنفيذ') }
      ]
    },

    /* ======================================================================
       4. CASES. Each case: sections[] -> blocks[].
       Block types: lead, sub, p, note, tags, cards, swot, segments, steps,
       bigidea, lines, pairs, posts, script, video
       ====================================================================== */
    cases: [

      /* ------------------------------ JAMIESON ------------------------------ */
      {
        id: 'jamieson',
        act: en('Act I'),
        brand: en('Jamieson'),
        kind: en('Supplements · Egypt launch'),
        role: en('Concept & Copy'),
        whatIf: en('What if a supplement brand stopped selling you everything… and showed you only what you need?'),
        sections: [
          { key: 'brief', blocks: [
            { t: 'tags', items: [en('Imported brand'), en('Egypt launch'), en('Premium price')] },
            { t: 'p', x: ar('براند سابلمنت مستورد نازل مصر · هينافس Limitless وCentrum · سعره أعلى، فلازم Premium') },
            { t: 'lead', x: en('Too many choices. No one tells you which one is yours.') },
            { t: 'sub', x: ar('«الاختيارات كتير.. والمستهلك لوحده وسطها.»') },
            { t: 'cards', items: [
              { k: en('Category overload'), x: ar('منتجات أكتر، Forms مختلفة، Dosages مختلفة، وClaims أكتر. المستهلك بيحس إنه لازم يبقى دكتور وكوتش ونيوتريشنست عشان يختار.') },
              { k: en('Pain points'), x: ar('«الفرق بين البراندات إيه؟» و«أنا محتاج إيه أصلًا؟». والبراندات بتتنافس بمين يدي معلومات أكتر.') }
            ] }
          ] },
          { key: 'insight', blocks: [
            { t: 'cards', items: [
              { k: en('SEO observation'), x: ar('كلمات البحث بتدور على الاحتياج: «احتياجك من X» و«X بيكمل احتياجك» و«احتياج الإنسان من X».') },
              { k: en('Consumer insight · Hypothesis'), x: ar('الدكتور والكوتش والصيدلي بيقولوا كل يوم «احتياجك من كذا»..') }
            ] }
          ] },
          { key: 'strategy', blocks: [
            { t: 'lead', x: en('Everyone sells. Nobody tells you what you need.') },
            { t: 'sub', x: ar('كل براند بيقولك «خد مننا».. ومحدش بيعرّفك إنت محتاج إيه.') },
            { t: 'cards', cols: 3, items: [
              { k: en('Centrum'), x: ar('بيقدم نفسه كمالتي فيتامين رقم 1 عالميًا، وبيتكلم عن العلم والسعر المناسب. وبيقسم منتجاته بالعمر: Adults وSilver.') },
              { k: en('Limitless'), x: ar('من إيفا فارما، في السوق المصري من 2020. بتوصف منتجاتها إنها قايمة على العلم، وبتغطي الفيتامينات وتغذية الرياضيين.') },
              { k: en('NOW Foods'), x: ar('بتوزيع حصري من Soficopharm. بيركز على الجودة والأصالة والتوكيل الرسمي، وبسعر معقول.') }
            ] },
            { t: 'cards', accent: true, items: [
              { k: en('The gap'), x: ar('مفيش براند من دول بيعرّف العميل احتياجه، وإحنا هنبقى البراند اللي بيعرّفه..') }
            ] },
            { t: 'lead', x: en('A premium import in a crowded aisle.') },
            { t: 'sub', x: ar('Jamieson في السوق المصري: إيه اللي معانا وإيه اللي ضدنا.') },
            { t: 'swot', items: [
              { l: 'S', k: en('Strengths'), lines: [ar('تراث من 1922 ورقم 1 في كندا.'), ar('أوائل في الجرعات العالية والزنك.')] },
              { l: 'W', k: en('Weaknesses'), lines: [ar('سعر أعلى في سوق حساس للسعر.'), ar('تنوع المنتجات بيحيّر العميل.')] },
              { l: 'O', k: en('Opportunities'), lines: [ar('اتجاه التغذية المخصصة والنشاط الرياضي.'), ar('مفيش براند بيعرّف العميل احتياجه.')] },
              { l: 'T', k: en('Threats'), lines: [ar('منافسين بحجم وأسعار أنسب، ومنهم محلي.'), ar('منتجات مقلدة بتضعف ثقة الفئة.')] }
            ] },
            { t: 'note', x: en('SWOT · Jamieson in Egypt. The gap: nobody tells you what you need.') },
            { t: 'lead', x: en('Four lifestyles. Four different needs') },
            { t: 'sub', x: ar('مش بس الدخل.. إحنا بنستهدف الاحتياج والروتين والسلوك.') },
            { t: 'segments', items: [
              { n: '01', k: en('The Student'), x: ar('مذاكرة + جيم + يوم طويل') },
              { n: '02', k: en('The Working / Gym'), x: ar('شغل + تمرين + مسؤوليات') },
              { n: '03', k: en('The Mother'), x: ar('عيلة + بيت + ضغط يومي') },
              { n: '04', k: en('The Older Adult'), x: ar('احتياجات بتتغير + نشاط يومي') }
            ] },
            { t: 'note', x: en('Segments · SEC B / B+ / A / A+') },
            { t: 'lead', x: en('What do I actually need?') },
            { t: 'lead', x: en('A brand that guides you before it sells.') },
            { t: 'cards', cols: 3, items: [
              { k: en('Sage'), x: ar('معرفة من غير ترهيب.. يفهّم المستهلك احتياجه بدل ما يغرقه معلومات.') },
              { k: en('Caregiver'), x: ar('الـ Relevance قبل البيع.. مايدفعش حد ياخد أكتر من اللي محتاجه.') },
              { k: en('Everyman'), x: ar('بسيط وإنساني وقريب.. مش Medical Brand متعالي ولا Luxury بعيد.') }
            ] },
            { t: 'tags', label: en('Tone of voice'), items: [en('Human'), en('Helpful'), en('Warm'), en('Knowledgeable'), en('Simple'), en('Non-pushy')] },
            { t: 'sub', x: ar('الإحساس: حد بيساعدك تختار، مش حد عايز يبيعلك كل حاجة.') }
          ] },
          { key: 'idea', blocks: [
            { t: 'bigidea', ar: 'احتياجك.. وبس', en: 'Just what you need.' },
            { t: 'cards', items: [
              { k: en('Meaning 01 · Need-finding'), x: ar('دوّر على احتياجك وبس، وسط زحمة البراندات والمنتجات الكتير.') },
              { k: en('Meaning 02 · Positioning'), x: ar('Jamieson هو احتياجك.. وبس. الجملة نفسها بتبقى الـ Positioning في دماغ الناس.') }
            ] }
          ] },
          { key: 'execution', blocks: [
            { t: 'lead', x: en('One line. A whole system.') },
            { t: 'steps', items: [
              { n: '01', k: en('Find'), x: ar('فورم «اعرف احتياجك»: ساعات النوم والشغل والتمرين ومستوى الطاقة.') },
              { n: '02', k: en('Understand'), x: ar('نشرح الـ Lifestyle ورا الاحتياج وليه هو مهم، من غير أي تشخيص.') },
              { n: '03', k: en('Complete'), x: ar('نرشّح المنتج اللي يكمل الاحتياج ده بس.') }
            ] },
            { t: 'lines', label: en('Product lines = SEO'), items: [ar('بيغطي احتياجك من الزنك.. وبس'), ar('بيكمل احتياجك من الماغنسيوم.. وبس')] },
            { t: 'lead', x: en('The light is the pill. The shield draws the line.') },
            { t: 'p', x: ar('الإضاءة هي اللي بتعمل شكل الحباية (زي أقواس ماكدونالدز)، ولمبتين من فوق ومن تحت. والشفرة المعدنية في النص بتقفل تداخل الضوء وبتعمل خط الحباية.') },
            { t: 'gallery', items: [IMG.jamOoh] },
            { t: 'cards', accent: true, items: [
              { k: en('The line'), x: ar('هنا كنا محتاجين حاجة بسيطة.. وانت احتياجك إيه؟') }
            ] },
            { t: 'lead', x: en('One idea. Endless campaigns.') },
            { t: 'pairs', items: [
              { k: en('Just your need of energy'), lines: [ar('احتياجك من الطاقة.. وبس')] },
              { k: en('Type of content'), lines: [ar('بيغطي احتياجك من الزنك.. وبس'), ar('بيكمل احتياجك من الماغنسيوم.. وبس')] },
              // NOTE: the deck table mixes two cells in this row; kept exactly as supplied. See "flags".
              { k: en('Do I really need all of this?'), lines: [bi('Limitless Attack Campaign (مسابش حاجة معملهاش)', 'Limitless Attack Campaign (مسابش حاجة معملهاش)'), ar('هو أنا محتاج كل ده؟')] },
              { k: en('Know your need first.'), lines: [ar('اعرف احتياجك الأول')] }
            ] }
          ] },
          { key: 'role', blocks: [{ t: 'lead', x: en('Concept & Copy') }] }
        ]
      },

      /* ------------------------------ LADYY.COM ------------------------------ */
      {
        id: 'ladyy',
        act: en('Act II'),
        brand: en('Ladyy.com'),
        kind: en('E-commerce launch'),
        role: null,                                   // no role stated on the Ladyy slides, so none shown
        whatIf: en('What if the way to win back trust… was to ask first?'),
        sections: [
          { key: 'brief', blocks: [
            { t: 'cards', items: [
              { k: en('Communication problem'), x: ar('الموقع بيقع كل شوية، وكل مرة بوست عادي «رجع يشتغل». الجمهور بطّل يصدّق.') },
              { k: en('Creative challenge'), x: ar('فكرة جديدة وقوية، ترويجية وتشويقية للموقع في 6 بوستات. والديزاينرز زهقوا من الأفكار القديمة.') }
            ] }
          ] },
          { key: 'insight', blocks: [
            { t: 'cards', items: [{ k: en('Audience perception'), x: ar('أي «رجعنا» هتتقابل بتشكيك.') }] }
          ] },
          { key: 'idea', blocks: [
            { t: 'lead', x: en('A grid that asks. A reel that answers.') },
            { t: 'p', x: ar('6 بوستات بتكوّن صورة واحدة. الهيرو كلمة «إيه..؟» وفوقها كلمة صغيرة (تفتكروا / طب) والكابشن بيكمل السؤال. اللي يشوف الجريد من بره يقرا: إيه.. إيه.. إيه..إيه.. ثم «أيوة!».') },
            { t: 'gallery', items: [IMG.ladGrid] }
          ] },
          { key: 'execution', blocks: [
            { t: 'posts', items: [
              { n: 1, tag: ar('تفتكروا إيه..؟'), line: ar('…ممكن يتغير في Ladyy؟'), body: ar('في حاجات حوالينا كتير بتتغير… وإحنا كـ Ladyy كمان بنتغير. بس يا ترى… إيه اللي ممكن يتغير المرة دي؟') },
              { n: 2, tag: ar('طب احنا إيه..؟'), line: ar('…اللي بيخلّينا نتغيّر كـ Ladyy؟'), body: ar('مسألتيش نفسك قبل كده… إنتي بتتغيري ليه؟ تفتكري عشان الدنيا حواليكي بتتغير؟ ولا عشان احتياجاتك إنتي اللي اتغيرت؟ يمكن الإجابة مش واحدة… بس الأكيد إن التغيير ده إنتي محتاجاه.') },
              { n: 3, tag: ar('طب تفتكر إيه..؟'), line: ar('…اللي بنعمله يقدر يخلّي حياة Ladyy أسهل؟'), body: ar('يمكن مش هنقدر نبطّأ الدنيا حواليكي… بس نقدر نخليها أسهل. كل يوم بنحاول نفهم إيه اللي محتاجاه أكتر وإيه اللي ممكن يوفر عليكي وقت ومجهود. ويمكن المرة دي… بنحضرلك طريقة أسهل بكتير.') },
              { n: 4, tag: ar('طب إيه..؟'), line: ar('…اللي يعطلك طالما Ladyy.com بقت معاكي طول الوقت؟'), body: ar('ليه تستني؟ وليه تأجلي اللي محتاجاه لوقت تاني؟ طالما Ladyy بقت أقرب ليكي من أي وقت فات… يبقى مفيش حاجة تعطل يومك. لسه مش هنقولك إزاي… بس خلاص، فاضل خطوة واحدة.') },
              { n: 5, tag: ar('أيوة!'), line: ar('أيوة! دلوقتي Ladyy بقت Online.'), body: ar('تقدري تطلبي كل اللي محتاجاه من الـ Website وإنتي مكانك وهيجيلك لحد عندك. تغيير يخلّي حياتك أسهل. ladyy.com') },
              { n: 6, tag: ar('اعرفي إيه..؟'), line: ar('…اللي هتستفيديه لما تطلبي من Ladyy.com Website؟'), body: ar('دلوقتي الطلب أسهل… وكمان أول طلب ليكي عليه أكتر من ميزة. استخدمي كود Ladyy5 وخدي 5% OFF، وكمان Free Shipping للطلبات فوق 2,000 EGP. Welcome to the new Ladyy experience.') }
            ] },
            { t: 'script',
              label: en('The reel · Script V1, in progress'),
              headline: en('The grid asks. The reel answers.'),
              scriptLabel: en('Script'),
              lines: [
                ar('المشهد يبدأ بحوار بين بنتين :'),
                ar('«بقولك أيه نازلين النهاردة جاية معانا ولا أيه؟»'),
                ar('«بتهزروا؟ طب ما نخليها في الويك إند. أنا عايزة أروح أعمل Shopping في Ladyy.com.»'),
                ar('«طب وإنتي ليه تروحي أصلاً؟»'),
                ar('«أومال الحاجة هتجيلي لحد عندي يعني؟»'),
                ar('«أيوة. مهم بقى: عندهم Website تطلبي منه اللي إنتِ عايزاه ويوصلك لحد البيت.»'),
                ar('«إيه..؟»')
              ],
              voLabel: en('Voice over'),
              vo: ar('«إيه… إيه… إيه… إيه… أيوة.\n\nدلوقتي Ladyy بقت Online. تقدري تعملي الـShopping بتاعك وإنتِ في مكانك، وكل أوردر فوق 2,000 EGP عليه Free Shipping، وكمان خصم 5% على أول Order لما تستخدمي الكود Ladyy5.\n\nفي تغييرات كتير حواليكي، بس ده تغيير هيخلّي حياتك أسهل.»'),
              note: en('Posts 1, 3 and 5 build the question; the reel answers it. Invite: «يلا ننزل النهاردة؟»')
            }
          ] },
          { key: 'status', blocks: [
            { t: 'cards', accent: true, items: [
              { k: en('Status'), x: ar('الفكرة عجبت الديزاينرز والتيم والعميل. الحملة طلعت Dark Ads، فالـ Grid ماينفعش.') }
            ] }
          ] }
        ]
      },

      /* ------------------------------ HIMALAYA ------------------------------ */
      {
        id: 'himalaya',
        act: en('Act III'),
        brand: en('Himalaya Purifying Neem Face Wash'),
        kind: en('Storytelling film · 43s'),
        role: en('Concept & Script'),
        whatIf: en('What if the loudest thing about a pimple… wasn’t the pimple?'),
        sections: [
          { key: 'brief', blocks: [
            { t: 'p', x: ar('قصة قصيرة عن الحباية.. وعن كل الأصوات اللي حواليها.') },
            { t: 'tags', items: [en('Himalaya · Indian, medical-positioned brand'), en('Objective: feel first, then the product')] }
          ] },
          { key: 'insight', blocks: [
            // English line is from your brief; Arabic is from slide 23.
            { t: 'cards', accent: true, items: [
              { k: en('Human insight'), x: bi('When a pimple appears, everyone becomes your dermatologist.', 'أول ما تطلع حباية، كل حد يبقى دكتور بشرتك.') }
            ] }
          ] },
          { key: 'idea', blocks: [
            { t: 'lead', x: en('Everyone has advice. Nobody has the answer.') },
            { t: 'sub', x: ar('فيلم مدته 43 ثانية، كتبته. بنسمع نصايح الكل، وبعدين يدخل الحل.') },
            { t: 'lead', x: en('The product arrives after the feeling.') },
            { t: 'cards', items: [
              { k: en('Creative device'), x: ar('الفويس نوتس والكتابة المتحركة بيخلّوا النصايح عالية.') },
              { k: en('The turn'), x: ar('المنتج مابيدخلش غير بعد ذروة الإحساس (حوالي ثانية 23 من 43).') }
            ] }
          ] },
          { key: 'execution', blocks: [
            // Film: Google Drive link (file must be shared as "Anyone with the link"). YouTube/Vimeo/mp4 links also work.
            { t: 'video', src: 'https://drive.google.com/file/d/1JZsIXyLZu465hCtcAUTvfsMCGJeuAXjg/view?usp=sharing', poster: '', caption: en('Himalaya Purifying Neem Face Wash · 43s storytelling film') },
            { t: 'lead', x: en('Six beats. One feeling.') },
            { t: 'steps', items: [
              { n: '01', k: en('The Spot'),    x: ar('ظهرت حباية.') },
              { n: '02', k: en('The Spiral'),  x: ar('والدوّامة بتبدأ.') },
              { n: '03', k: en('The Noise'),   x: ar('والكل عنده نصيحة.') },
              { n: '04', k: en('The Peak'),    x: ar('«حباااااية» بتعلى.') },
              { n: '05', k: en('The Relief'),  x: ar('والمنتج بيدخل.') },
              { n: '06', k: en('The Promise'), x: ar('«نعرف نخلصك من الحباية».') }
            ] },
            { t: 'lines', label: en('End-card claims'), items: [ar('«موثوق من ملايين البنات»'), ar('«مثبت علميًا ومختبر من أطباء الجلدية»')] }
          ] },
          { key: 'role', blocks: [{ t: 'lead', x: en('Concept & Script') }] }
        ]
      }
    ],

    /* ======================================================================
       5. SELECTED WORK (compact grid). Each opens a simple copy view.
       ====================================================================== */
    work: [
      {
        id: 'eveline',
        cover: IMG.eveCollagen,
        kind: en('Technical copywriting · Eveline Skin'),
        title: en('Exact claims. A human voice.'),
        teaser: ar('«الجو بيتغير..؟ بس مش هيغير بشرتك»'),
        items: [
          { k: en('Niacinamide 5%'), img: IMG.eveNia, line: ar('«الجو بيتغير..؟ بس مش هيغير بشرتك»'), sub: ar('بشرتك بتتأثر بتغيير الجو؟'),
            body: ar('تغير درجات الحرارة والرطوبة بيأثر على إفراز الدهون وترطيب البشرة، وهنا دور الـ Niacinamide في تنظيم الدهون، وتقليل مظهر المسام الواسعة.') },
          { k: en('Multi-peptides'), img: IMG.eveBtx, line: ar('«Botox؟ لأ. Baby BTX. أيوة»'), sub: en('Baby BTX? Meet your best duo.'),
            body: ar('كريم للوجه وبلسم سيروم للجسم، بتركيبة الببتيدات للعناية بنعومة البشرة ومرونتها، لمظهر مشرق وأكثر تماسك.') },
          { k: en('Collagen + 24K gold'), img: IMG.eveCollagen, line: ar('«الكولاجين مش رفاهية.. ده سر تماسك بشرتك»'), sub: ar('كولاجين ودهب عيار 24؟'),
            body: ar('يبقى وصلتي لسر إشراقة بشرتك. سيروم إيفلين بالكولاجين والإيلاستين وذهب عيار 24، يخليكي توصلي لبشرة ناعمة، مرنة ومشرقة.') }
        ]
      },
      {
        id: 'seif',
        cover: IMG.seifBackpack,
        kind: en('Retail & e-commerce copy · Seif Stores'),
        title: en('A lunch box is never just a lunch box.'),
        teaser: ar('«شخصية طفلك في شنطته»'),
        items: [
          { img: IMG.seifSchool, line: ar('«راجعين بحماس.. ارفعي حماسهم بمستلزمات المدرسة»'),
            body: ar('عارفة إن تجهيز مستلزمات الدراسة ممكن يكون أول خطوة في تجهيز طفلك؟ لما تشركيه في اختيار شنطته وأدواته، بيدخل في الـ mood ويتحمس أكتر لبداية السنة.') },
          { img: IMG.seifBackpack, line: ar('«شخصية طفلك في شنطته»'),
            body: ar('تعرفي إن شنطة طفلك بتحكي كتير عن شخصيته؟ اختياره للون أو الشكل اللي بيحبه هو طريقته في التعبير عن نفسه. سيبيه يختار، وإنتي ساعديه يلاقي اللي يجمع بين الشكل والعملية.') },
          { img: IMG.seifLunch, line: ar('«لانش بوكس يحافظ على صحة طفلك»'),
            body: ar('ليه بتعملي أكل صحي لطفلك… طالما اللانش بوكس هيبوظه؟ اختاري لانش بوكس عملي سهل الاستخدام، عشان الأكل اللي بتحضريه بحب يوصله زي ما حضرتيه.') },
          { img: IMG.seifReady, line: ar('«شنطة جاهزة متخرش المية»'),
            body: ar('مينفعش الدراسة تبدأ وشنط أولادك لسه مكملتش. جمعنالك كل مستلزمات المدرسة في مكان واحد: شنط، لانش بوكس، bottles، أدوات مدرسية.') },
          { img: IMG.seifBottle, line: ar('«معاه في كل حتة»'),
            body: ar('بوتل طفلك معاه في كل مشوار، من أول يوم مدرسة لحد النادي والخروجات. خلي المية دايمًا قريبة منه.') },
          { img: IMG.seifBranches, line: ar('«فروعنا مستنياكي في كل حتة عشان راحتك انتي وطفلك»'),
            sub: ar('📍 من أول خيط… لحد أقرب فرع ليك ❤'),     // emoji kept: it is part of the supplied copy
            body: ar('فين ما كنتي هتلاقينا أقرب ليكي مما تتخيلي\n\nامشي ورا الخيط واعرفي أقرب فرع ليك 👀📍') }
        ]
      },
      {
        id: 'blackfriday',
        cover: IMG.ladStore,
        kind: en('Campaign content · Ladyy Black Friday'),
        title: en('A month of Black Friday without the noise.'),
        teaser: ar('«تعرفي الأول، تشتري بعدين»'),
        items: [
          { k: en('Know first, shop smart'), img: IMG.ladStore, line: ar('«تعرفي الأول، تشتري بعدين»'),
            body: ar('أذكى شوبينج في الـ Black Friday: اعملي تحليل لبشرتك وشعرك عندنا في Ladyy.com، واطلعي بقايمة منتجات على قد احتياجك مش على قد الـ hype.') },
          { k: en('Cart full? Coffee first'), img: IMG.ladCoffee, line: ar('«بين الكارت والـ checkout… فنجان قهوة»'),
            body: ar('فكّري براحتك واختاري اللي يستاهل بجد. Think it over, over coffee.') },
          { k: en('POV'), img: IMG.ladSkin, line: ar('«بشرتك مش زي بشرة صاحبتك…ليه تستخدمي نفس روتينها؟»'),
            body: ar('تحليل البشرة عندنا بيساعدك تفهمي بشرتك الأول، وبعدها تختاري عنايتك بثقة.') }
        ]
      },
      {
        id: 'takeoff',
        kind: en('Trend adaptation · Takeoff & 80s trend'),
        title: en('Takeoff trend. Many voices.'),
        teaser: ar('«شعرك هيفضل طاير»'),
        whatIf: en('What if..? one trend took off in every brand’s voice.'),
        intro: ar('نفس فكرة «Takeoff» اتحوّلت بنبرة كل براند.'),
        tags: [en('Youlicious'), en('Blendit'), en('Ladyy Café'), en('Eveline Makeup'), en('Eveline Skin'), en('Cosmoshop')],
        itemsTitle: en('Same takeoff. Three brands.'),
        items: [
          { k: en('Youlicious'), media: { type: 'video', src: 'images/youlicious-takeoff.mp4' }, line: ar('«شعرك هيفضل طاير»'),
            body: ar('رشة واحدة وشعرك يبقى فلافي، فريش، وطاير. Youlicious Dry Shampoo، انتعاش وفوليوم لشعرك في ثواني.') },
          { k: en('Blendit'), media: { type: 'image', src: 'images/takeoff-cup.gif', alt: 'BLENDiT takeoff trend: a cup accelerating down a city highway' }, line: en('Take a sip & Take off.'),
            body: en('Some sips just hit different. Your BLENDiT moment = instant lift-off.') },
          { k: en('Ladyy.com'), media: { type: 'image', src: 'images/takeoff-delivery.gif', alt: 'Ladyy.com takeoff trend: a driver delivering a shopping bag' }, line: en('«Where you are ?\norder from Ladyy.com»'),
            body: en('Shop from Ladyy.com while you’re right where you are, and let your order fly straight to your door.') }
        ]
      }
    ],

    /* ---------- 6. Contact ---------- */
    contact: {
      title: bi('What if we worked together?', 'ماذا لو اشتغلنا مع بعض؟')            // AR is a DRAFT (slide 30 is English only)
    }
  };
})();
