export const formly = (data) => {
  const p = new FormData();
  const skip = [""];
  for (let key in data) {
    if (skip.indexOf(key) > 0) continue;
    p.append(key, data[key]);
  }
  return p;
};
