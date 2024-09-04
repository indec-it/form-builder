const getLastId = values => {
  if (!values || values.length === 0) {
    return undefined;
  }
  const sortedIds = values.map(value => value.id).sort((a, b) => a - b);
  return sortedIds[sortedIds.length - 1];
};

export default getLastId;
