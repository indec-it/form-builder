const getLastId = values => {
  if (!values || values.length === 0) {
    return undefined;
  }
  const ids = values.map(value => value.id).sort();
  return ids[ids.length - 1];
};

export default getLastId;
