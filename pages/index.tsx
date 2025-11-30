export default function Home() {
  return (
    <main style={{ fontFamily: "Tahoma, sans-serif", padding: "2rem", lineHeight: "1.8" }}>
      <header style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
        <img src="/logo.png" alt="لوگوی شرکت کهن دژ نوین" style={{ height: "80px" }} />
        <h1 style={{ color: "#2c3e50" }}>شرکت کهن دژ نوین</h1>
      </header>

      <section>
        <h2 style={{ color: "#34495e" }}>خدمات ما</h2>
        <ul>
          <li>مشاوره تخصصی در حوزه عمرانی</li>
          <li>طراحی و اجرای زیرساخت‌ها</li>
          <li>راه‌سازی و پروژه‌های بزرگ</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: "#34495e" }}>پروژه‌ها</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {Array.from({ length: 7 }, (_, i) => (
            <div key={i}>
              <img
                src={`/projects/project${i + 1}.JPG`}
                alt={`پروژه ${i + 1}`}
                style={{ width: "300px", borderRadius: "8px" }}
              />
              <p>پروژه {i + 1}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ color: "#34495e" }}>تماس با ما</h2>
        <p>
          برای اطلاعات بیشتر و همکاری با ما، لطفاً از طریق اینستاگرام در ارتباط باشید:
          <br />
          <a href="https://instagram.com/kohandejnovin" target="_blank" style={{ color: "#2980b9" }}>
            @kohandejnovin
          </a>
        </p>
      </section>
    </main>
  );
}
