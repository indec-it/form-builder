function Introduction({introduction}) {
  if (!introduction) {
    return null;
  }
  const isHTML = /<[^>]+>/g.test(introduction);

  if (isHTML) {
    return (
      <p
        data-testid="introduction"
        className="text-gray-600 font-bold whitespace-pre-line"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: introduction}}
      />
    );
  }

  return (
    <p data-testid="introduction" className="text-gray-600 font-bold whitespace-pre-line">
      {introduction}
    </p>
  );
}

export default Introduction;
