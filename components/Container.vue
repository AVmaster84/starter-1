<template>
  <nav class="flex items-center justify-between px-8 py-4 bg-slate-600 shadow-md">
    <!-- Logo và Brand -->
    <div class="flex items-center space-x-4">
      <img src="public\Công ty TNHH Đông Nam Khánh.png" alt="Logo" class="h-10 w-auto">
      <span class="text-2xl font-bold">Tên Thương Hiệu</span>
    </div>
    
    <!-- Menu chính -->
    <div class="flex items-center space-x-8">
      <a href="/" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Trang chủ</a>
      <a href="/products" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Sản phẩm</a>
      <a href="/about" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Giới thiệu</a>
      <a href="/contact" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Liên hệ</a>
      <a href="/blog" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Blog</a>
    </div>

    <!-- Phần bên phải -->
    <div class="flex items-center space-x-6">
      <button class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Đăng nhập
      </button>
      <div class="flex items-center space-x-4 text-xl text-gray-700">
        <i class="fas fa-shopping-cart cursor-pointer hover:text-blue-600 transition-colors"></i>
        <i class="fas fa-search cursor-pointer hover:text-blue-600 transition-colors"></i>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
// Add any required logic here
</script>