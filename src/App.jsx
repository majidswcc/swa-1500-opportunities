import React, { useState } from 'react'

export default function App() {
  const [filterType, setFilterType] = useState('all')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  const locations = [
    { id: 'abb-dhahran', name: 'ABB – الظهران', city: 'الظهران', type: 'training', seats: 60,  coords: { left: '48%', top: '42%' } },
    { id: 'siemens-dammam', name: 'Siemens – الدمام', city: 'الدمام', type: 'training', seats: 85, coords: { left: '52%', top: '38%' } },
    { id: 'nesma-khobar', name: 'نسما – الخبر', city: 'الخبر', type: 'employment', seats: 40, coords: { left: '56%', top: '44%' } },
    { id: 'sepco-jubail', name: 'سيبكو – الجبيل', city: 'الجبيل', type: 'training', seats: 110, coords: { left: '64%', top: '22%' } },
    { id: 'alkhuraif-ahsa', name: 'الخُريف – الأحساء', city: 'الأحساء', type: 'support', seats: 25, coords: { left: '28%', top: '72%' } },
    { id: 'alghuweiri-qatif', name: 'الغُوَيْري – القطيف', city: 'القطيف', type: 'employment', seats: 35, coords: { left: '58%', top: '30%' } },
    { id: 'alrashed-rasTanura', name: 'الراشد – رأس تنورة', city: 'رأس تنورة', type: 'employment', seats: 20, coords: { left: '60%', top: '26%' } },
    { id: 'employment-hafar', name: 'شركة توظيف – حفر الباطن', city: 'حفر الباطن', type: 'employment', seats: 70, coords: { left: '36%', top: '10%' } },
    { id: 'ngo-ahsa', name: 'جمعية خيرية – الأحساء', city: 'الأحساء', type: 'support', seats: 55, coords: { left: '30%', top: '68%' } },
  ]

  return (
    <div className="font-sans" dir="rtl">
      <header className="flex justify-between items-center p-6 shadow-md bg-white sticky top-0 z-50">
        <div className="text-2xl font-bold text-blue-700">أكاديمية المياه</div>
        <nav className="space-x-6 rtl:space-x-reverse text-lg">
          <a href="#about" className="hover:text-blue-600">عن المشروع</a>
          <a href="#youth" className="hover:text-blue-600">التسجيل للشباب</a>
          <a href="#companies" className="hover:text-blue-600">التسجيل للشركات</a>
          <a href="#map" className="hover:text-blue-600">الخريطة التفاعلية</a>
          <a href="#success" className="hover:text-blue-600">قصص النجاح</a>
          <a href="#faq" className="hover:text-blue-600">الأسئلة الشائعة</a>
        </nav>
      </header>

      <section className="relative bg-blue-50 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">1500 فرصة.. بداية لمسيرة وطن</h1>
        <p className="text-lg mb-6">من التأهيل إلى التوظيف.. معًا نصنع المستقبل</p>
        <a href="#youth" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-2xl text-lg hover:bg-blue-800 transition">سجّل الآن</a>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10 text-center bg-white shadow-md -mt-10 rounded-2xl w-11/12 mx-auto">
        <div><p className="text-3xl font-bold text-blue-700">1200+</p><p>المتدربون المسجلون</p></div>
        <div><p className="text-3xl font-bold text-blue-700">25+</p><p>الشركات المشاركة</p></div>
        <div><p className="text-3xl font-bold text-blue-700">300+</p><p>الوظائف المتاحة</p></div>
        <div><p className="text-3xl font-bold text-blue-700">150+</p><p>وظائف محققة</p></div>
      </section>

      <section id="about" className="p-12 text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">عن المشروع</h2>
        <p className="max-w-2xl mx-auto leading-relaxed">برنامج وطني تقوده الأكاديمية لتمكين وتأهيل 1500 شاب وشابة في المنطقة الشرقية بالشراكة مع هدف والشركات الكبرى، عبر برامج تدريبية متخصصة تؤدي إلى فرص عمل مستدامة.</p>
      </section>

      <section id="success" className="p-12 text-center">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">قصص النجاح</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <img src="/images/reem.png" alt="ريم – مهندسة صيانة" className="w-40 h-40 object-cover rounded-full mb-4" />
            <h3 className="text-lg font-bold text-blue-700 mb-2">ريم</h3>
            <p className="text-sm text-slate-700 mb-3">تغلبت على ظروف صعبة وحصلت على وظيفة كمهندسة صيانة مع سيمنس.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <img src="/images/nora.png" alt="نورة – قائدة فريق" className="w-40 h-40 object-cover rounded-full mb-4" />
            <h3 className="text-lg font-bold text-blue-700 mb-2">نورة</h3>
            <p className="text-sm text-slate-700 mb-3">بعد سنوات بطالة، أصبحت مشرفة فريق خدمة عملاء في شركة نسما.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <img src="/images/khalid.png" alt="خالد – فني تشغيل" className="w-40 h-40 object-cover rounded-full mb-4" />
            <h3 className="text-lg font-bold text-blue-700 mb-2">خالد</h3>
            <p className="text-sm text-slate-700 mb-3">انتقل من وظائف مؤقتة إلى وظيفة فني تشغيل وصيانة مع ABB.</p>
          </div>
        </div>
      </section>

      <section id="map" className="p-12 bg-gray-50">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-2xl font-bold text-blue-800">الخريطة التفاعلية – المنطقة الشرقية</h2>
            <div className="flex flex-col md:flex-row gap-3">
              <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="ابحث بالمدينة أو اسم الجهة" className="border p-3 rounded w-full md:w-64" />
              <select value={filterType} onChange={(e)=>setFilterType(e.target.value)} className="border p-3 rounded w-full md:w-56">
                <option value="all">كل الأنواع</option>
                <option value="training">تدريب</option>
                <option value="employment">توظيف</option>
                <option value="support">دعم مجتمعي</option>
              </select>
            </div>
          </div>

          <div className="relative h-[28rem] rounded-2xl overflow-hidden shadow bg-gradient-to-br from-blue-50 via-slate-100 to-blue-100 border">
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-blue-700 shadow">المنطقة الشرقية – خريطة رقمية تجريبية</div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-xl shadow p-3 text-sm space-y-2">
              <div className="font-semibold">الترميز</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span> تدريب</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-emerald-600 inline-block"></span> توظيف</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber-600 inline-block"></span> دعم مجتمعي</div>
            </div>

            {locations.map((loc)=> (
              <button key={loc.id} className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none" style={{left:loc.coords.left, top:loc.coords.top}} onClick={()=>setSelected(loc)} aria-label={`${loc.name} – ${loc.seats} مقعد`}>
                <span className={`w-4 h-4 rounded-full block shadow ring-2 ring-white animate-pulse ${loc.type==='training'?'bg-blue-600':loc.type==='employment'?'bg-emerald-600':'bg-amber-600'}`} />
                <span className="absolute top-5 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs shadow opacity-0 group-hover:opacity-100 transition">{loc.city}</span>
              </button>
            ))}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-slate-500">* تموضع النقاط تقريبي لأغراض النموذج التجريبي</div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            {selected ? (
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="text-lg font-bold text-blue-800">{selected.name}</div>
                  <div className="text-sm text-slate-600">المدينة: {selected.city} • النوع: {selected.type==='training'?'تدريب':selected.type==='employment'?'توظيف':'دعم مجتمعي'}</div>
                  <div className="mt-1 text-slate-700">المقاعد المتاحة: <span className="font-semibold">{selected.seats}</span></div>
                </div>
                <div className="flex gap-3">
                  <a href="#youth" className="bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800 transition">تقديم على مقعد</a>
                  <button onClick={()=>setSelected(null)} className="border px-5 py-2 rounded-xl hover:bg-slate-50">إغلاق</button>
                </div>
              </div>
            ) : (
              <div className="text-slate-600">اختر نقطة على الخريطة لعرض المقاعد المتاحة والتقديم.</div>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white text-center p-6 mt-12">
        <p>© 2025 أكاديمية المياه - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  )
}
