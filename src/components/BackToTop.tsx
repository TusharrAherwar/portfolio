function BackToTop() {
  return (
    <a
      href="#home"
      aria-label="Back to top"
      title="Back to top"
      className="fixed bottom-6 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#C0CAF5]/15 bg-[#111827]/90 text-[#C0CAF5] shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#7771D9]/60 hover:bg-[#4338A8] sm:bottom-8 sm:right-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </a>
  );
}

export default BackToTop;