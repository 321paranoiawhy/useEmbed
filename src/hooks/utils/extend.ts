type hashTable = {
  [key: string]: any;
};

const utils: hashTable = {};

// 覆盖源对象上已有属性, 并添加源对象上未有属性
const shallowMerge = (target: hashTable, ...sources: Array<hashTable>) => {
  sources.forEach((item: hashTable) => {
    for (const key in item) {
      target[key] = item[key];
    }
  });
  return target;
};

// 仅覆盖源对象上已有属性
const shallowCover = (target: hashTable, ...sources: Array<hashTable>) => {
  sources.forEach((item: hashTable) => {
    for (const key in item) {
      target[key] && (target[key] = item[key]);
    }
  });
  return target;
};

// 仅添加源对象上未有属性
const shallowAdd = (target: hashTable, ...sources: Array<hashTable>) => {
  sources.forEach((item: hashTable) => {
    for (const key in item) {
      !target[key] && (target[key] = item[key]);
    }
  });
  return target;
};

const methods: hashTable = {
  shallowMerge: shallowMerge,
  shallowCover: shallowCover,
  shallowAdd: shallowAdd,
};

for (const key in methods) {
  utils[key] = methods[key];
}

export default utils;
