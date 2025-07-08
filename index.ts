

Bun.serve({
  port: process.env.PORT || 3000,
  fetch(request) {
    return new Response("Coachtale API Çalışıyor!", { status: 200 });
  },
});

console.log("🚀 Sunucu 3000 portunda çalışıyor!"); 