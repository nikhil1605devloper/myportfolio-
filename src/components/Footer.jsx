export default function Footer({ theme }) {
  return (
    <footer>
      {theme === "dark"
        ? "© 2026 nikhil_powar — built line by line, no template imported."
        : "© 2026 Nikhil Powar — Built with React-grade attention to detail."}
    </footer>
  );
}
