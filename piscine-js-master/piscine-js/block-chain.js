function blockChain(data, prev = { index: 0, hash: '0' }) {
  const index = prev.index + 1;
  const hashInput = `${index}${prev.hash}${JSON.stringify(data)}`;
  const hash = hashCode(hashInput);

  const block = {
    index,
    hash,
    data,
    prev,
    chain: function(newData) {
      return blockChain(newData, this);
    }
  };

  return block;
}