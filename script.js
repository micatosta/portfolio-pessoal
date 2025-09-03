// alternar tema claro/escuro
const btn = document.getElementById('tema');
if (btn) {
  const apply = (mode) => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
    localStorage.setItem('theme', mode);
  };
  apply(localStorage.getItem('theme') || 'light');
  btn.addEventListener('click', () => {
    const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    apply(next);
  });
}