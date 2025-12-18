function ArrowLeftIcon({className = 'fb:w-5 fb:h-5', ...props}) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  );
}

export default ArrowLeftIcon;
