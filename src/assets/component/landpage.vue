

<template>
  <body class="bg-gray-800 text-white font-sans" dir="rtl">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    />
    <header class="bg-gray-900 shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div class="text-xl font-bold text-white"> 💪 TANDOROST-GYM 💪</div>
    
      <nav class="space-x-4">
        <a href="#" class="text-white hover:text-blue-600">
          <i class="fas fa-home"></i> خانه
        </a>
        <a href="#mainbox" class="text-white hover:text-blue-600">
          <i class="fas fa-info-circle"></i> خدمات
        </a>
        <a href="#monybox" class="text-white hover:text-blue-600">
          <i class="fas fa-info-circle"></i> شهریه
        </a>
        <a href="#msgbox" class="text-white hover:text-blue-600">
          <i class="fas fa-envelope"> تماس با ما </i>
        </a>
      </nav>
    </header>


    <section
      class="h-screen flex items-center justify-center bg-cover bg-center"
      style="
        background-image: url('/src/assets/images/photo_2025-05-30_18-54-36.jpg')
      "
    >
    <div class="bg-gray-800 bg-opacity-60 p-8 rounded-xl text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          باشگاه بدنسازی <span class="text-red-500">تندرست</span>
        </h1>
        <p class="mb-6 text-lg">تناسب اندام خود را به ما بسپارید</p>
        <a
          href="#msgbox"
          class="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition"
          >عضویت
        </a>
      </div>
    </section>

    <section class="py-16 px-6 md:px-20 bg-gray-750" id="mainbox">
      <h2 class="text-3xl font-bold text-center mb-12">خدمات ما</h2>
      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div
          class="p-5 w-80 h-100 bg-gray-700 rounded-xl shadow-lg hover:bg-fuchsia-700"
        >
          <img
            src="/src/assets/images/bgimage.webp"
            alt="12"
            style="width: 100%; height: 50%"
            class="rounded-4xl mb-2"
          />
          <h3 class="text-xl font-bold mb-2">برنامه تمرینی حرفه ای</h3>
          <p>زندگی حرفه ای و آسان تر</p>
        </div>
        <div
          class="p-5 w-80 h-100 bg-gray-700 rounded-xl shadow-lg hover:bg-fuchsia-700"
        >
          <img
            src="/src/assets/images/icon1.webp"
            alt="12"
            style="width: 100%; height: 50%"
            class="rounded-4xl mb-2"
          />

          <h3 class="text-xl font-bold mb-2">مربی‌گری حرفه‌ای</h3>
          <p>مربیان دارای مدرک بین‌المللی و تجربه بالا در بدنسازی</p>
        </div>
        <div
          class="p-5 w-80 h-100 bg-gray-700 rounded-xl shadow-lg hover:bg-fuchsia-700"
        >
          <img
            src="https://cdn.pixabay.com/photo/2014/11/11/15/24/gym-526995_1280.jpg"
            alt="12"
            style="width: 100%; height: 50%"
            class="rounded-4xl mb-2"
          />
          <h3 class="text-xl font-bold mb-2">تجهیزات مدرن</h3>
          <p>دستگاه‌ها تمرینی به‌روز و استاندارد جهانی</p>
        </div>
      </div>
    </section>

    <section class="px-6 py-16 bg-teal-600 text-center" id="monybox">
      <h2 class="text-3xl font-bold mb-10">شهریه های عضویت</h2>
      <div class="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        <div class="border-8 bg-gray-600 border-fuchsia-800 rounded-xl p-6  hover:bg-gray-900">
          <h3 class="text-xl font-bold mb-4">ماهانه</h3>
          <p class="text-2xl mb-4">۳۵۰,۰۰۰ تومان</p>
          <p>دسترسی کامل به باشگاه</p>
        </div>
        <div class="border-8 bg-gray-600 border-fuchsia-800 rounded-xl p-6 hover:bg-gray-900">
          <h3 class="text-xl font-bold mb-4">سه‌ماهه</h3>
          <p class="text-2xl mb-4">۹۰۰,۰۰۰ تومان</p>
          <p>۲۰٪ تخفیف + برنامه رایگان</p>
        </div>
        <div class="border-8 bg-gray-600 border-fuchsia-800 rounded-xl p-6 hover:bg-gray-900">
          <h3 class="text-xl font-bold mb-4">سالانه</h3>
          <p class="text-2xl mb-4">۳,۲۰۰,۰۰۰ تومان</p>
          <p>به‌صرفه‌ترین انتخاب + مربی اختصاصی</p>
        </div>
      </div>
    </section>

    <section id="msgbox" class="py-16 px-6 md:px-20 bg-gray-900">
      <h2 class="text-3xl font-bold text-center mb-8">با ما در تماس باشید</h2>
      <form
        class="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-md space-y-4"
      >
        <input
          type="text"
          placeholder="نام شما"
          class="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
        />
        <select
          class="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
        >
          <option value="">جنسیت</option>
          <option value="1">آقا</option>
          <option value="2">خانم</option>
        </select>
        <input
          type="email"
          placeholder="تلفن شما"
          class="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
        />
        <textarea
          placeholder="پیام شما"
          class="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
        ></textarea>
        <button
          type="submit"
          class="w-full bg-green-500 hover:bg-green-700 p-3 rounded font-bold"
        >
          ارسال پیام
        </button>
      </form>
    </section>

    <footer class="text-center text-sm text-gray-400 mt-12 p-4">
        باشگاه بدنسازی تندرست © ۲۰۲۵ 💪
    </footer>
  </body>
</template>







<script></script>

<style scoped></style>
